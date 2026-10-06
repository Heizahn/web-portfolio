'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Effect = 'rise' | 'blur' | 'forge';

const EFFECTS: Record<Effect, Variants> = {
	rise: {
		hidden: { opacity: 0, y: 28 },
		shown: { opacity: 1, y: 0 },
	},
	blur: {
		hidden: { opacity: 0, filter: 'blur(12px)', scale: 0.98 },
		shown: { opacity: 1, filter: 'blur(0px)', scale: 1 },
	},
	// sale "de la forja": recorte desde abajo con un destello de brasa
	forge: {
		hidden: { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)', y: 12 },
		shown: { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', y: 0 },
	},
};

interface RevealProps {
	children: ReactNode;
	effect?: Effect;
	delay?: number;
	className?: string;
}

/** Aparición al hacer scroll. Una sola vez, con la curva "forge". */
export default function Reveal({ children, effect = 'rise', delay = 0, className = '' }: RevealProps) {
	return (
		<motion.div
			className={className}
			variants={EFFECTS[effect]}
			initial='hidden'
			whileInView='shown'
			viewport={{ once: true, margin: '-60px' }}
			transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	);
}
