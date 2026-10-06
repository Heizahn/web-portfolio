'use client';

import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, type ComponentPropsWithoutRef, type MouseEvent, type ReactNode } from 'react';

type Variant = 'molten' | 'outline' | 'ghost';

type SparkButtonProps = {
	children: ReactNode;
	variant?: Variant;
	/** cuántos px puede desplazarse hacia el cursor */
	magnet?: number;
	className?: string;
} & (
	| ({ href: string } & Omit<ComponentPropsWithoutRef<'a'>, 'children' | 'className'>)
	| ({ href?: undefined } & Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'className'>)
);

type Burst = { id: number; x: number; y: number };

const VARIANTS: Record<Variant, string> = {
	molten: 'bg-molten shadow-ember hover:brightness-110',
	outline: 'border border-ember/60 text-ink bg-surface-elevated/60 hover:bg-ember/10',
	ghost: 'text-ink hover:bg-surface-muted',
};

const SPARKS = 10;

/**
 * Botón magnético: se inclina hacia el cursor con un muelle y al hacer clic
 * suelta una ráfaga de chispas desde el punto exacto del clic.
 * Si recibe `href` se renderiza como enlace.
 */
export default function SparkButton({
	children,
	variant = 'molten',
	magnet = 10,
	className = '',
	...rest
}: SparkButtonProps) {
	const ref = useRef<HTMLElement>(null);
	const [bursts, setBursts] = useState<Burst[]>([]);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const x = useSpring(mx, { stiffness: 300, damping: 18, mass: 0.4 });
	const y = useSpring(my, { stiffness: 300, damping: 18, mass: 0.4 });

	const onMove = (e: MouseEvent) => {
		const r = ref.current?.getBoundingClientRect();
		if (!r) return;
		mx.set(((e.clientX - r.left) / r.width - 0.5) * magnet * 2);
		my.set(((e.clientY - r.top) / r.height - 0.5) * magnet * 2);
	};
	const onLeave = () => {
		mx.set(0);
		my.set(0);
	};
	const onDown = (e: MouseEvent) => {
		const r = ref.current?.getBoundingClientRect();
		if (!r) return;
		const id = Date.now() + Math.random();
		setBursts((b) => [...b, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
		setTimeout(() => setBursts((b) => b.filter((p) => p.id !== id)), 700);
	};

	const classes = `relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-[filter,background-color] duration-300 ease-forge focus-visible:outline-2 ${VARIANTS[variant]} ${className}`;

	const inner = (
		<>
			<span className='relative z-10 inline-flex items-center gap-2'>{children}</span>
			<AnimatePresence>
				{bursts.map((b) => (
					<span key={b.id} aria-hidden='true' className='pointer-events-none absolute inset-0 overflow-visible'>
						{Array.from({ length: SPARKS }, (_, i) => {
							const angle = (i / SPARKS) * Math.PI * 2 + Math.random() * 0.4;
							const dist = 28 + Math.random() * 26;
							return (
								<motion.span
									key={i}
									className='absolute block h-1.5 w-1.5 rounded-full'
									style={{
										left: b.x,
										top: b.y,
										background: i % 2 ? 'rgb(var(--spark))' : 'rgb(var(--ember))',
										boxShadow: '0 0 8px rgb(var(--spark))',
									}}
									initial={{ x: -3, y: -3, scale: 1, opacity: 1 }}
									animate={{
										x: Math.cos(angle) * dist - 3,
										y: Math.sin(angle) * dist - 3 + 10,
										scale: 0,
										opacity: 0,
									}}
									transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
								/>
							);
						})}
					</span>
				))}
			</AnimatePresence>
		</>
	);

	const motionProps = {
		style: { x, y },
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		onMouseDown: onDown,
		whileTap: { scale: 0.96 },
		className: classes,
	};

	if (rest.href !== undefined) {
		const { href, ...anchor } = rest as { href: string } & ComponentPropsWithoutRef<'a'>;
		return (
			<motion.a
				ref={ref as React.Ref<HTMLAnchorElement>}
				href={href}
				{...(anchor as object)}
				{...motionProps}
			>
				{inner}
			</motion.a>
		);
	}

	return (
		<motion.button
			ref={ref as React.Ref<HTMLButtonElement>}
			type='button'
			{...(rest as object)}
			{...motionProps}
		>
			{inner}
		</motion.button>
	);
}
