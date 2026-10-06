'use client';

import { motion } from 'framer-motion';
import type { ElementType } from 'react';

interface TemperTextProps {
	text: string;
	as?: ElementType;
	className?: string;
	/** segundos antes de empezar */
	delay?: number;
	/** segundos entre letra y letra */
	stagger?: number;
}

/**
 * Templado: cada letra entra al rojo vivo (chispa + resplandor) y se enfría
 * hasta el color de tinta. Pensado para titulares en la fuente display.
 */
export default function TemperText({
	text,
	as: Tag = 'span',
	className = '',
	delay = 0.1,
	stagger = 0.045,
}: TemperTextProps) {
	const words = text.split(' ');
	let index = 0;

	return (
		<Tag className={className} aria-label={text}>
			{words.map((word, wi) => (
				<span key={wi} aria-hidden='true' className='inline-block whitespace-nowrap'>
					{Array.from(word).map((char) => {
						const i = index++;
						return (
							<motion.span
								key={i}
								className='inline-block'
								initial={{
									opacity: 0,
									y: '0.35em',
									filter: 'blur(6px)',
									color: 'rgb(var(--spark))',
									textShadow: '0 0 18px rgb(var(--ember) / 0.9)',
								}}
								animate={{
									opacity: 1,
									y: '0em',
									filter: 'blur(0px)',
									color: 'rgb(var(--ink))',
									textShadow: '0 0 0px rgb(var(--ember) / 0)',
								}}
								transition={{
									delay: delay + i * stagger,
									duration: 0.5,
									ease: [0.22, 1, 0.36, 1],
									color: { delay: delay + i * stagger + 0.25, duration: 1.1 },
									textShadow: { delay: delay + i * stagger + 0.25, duration: 1.2 },
								}}
							>
								{char}
							</motion.span>
						);
					})}
					{wi < words.length - 1 && ' '}
				</span>
			))}
		</Tag>
	);
}
