'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { MouseEvent, ReactNode } from 'react';

interface SpotlightCardProps {
	children: ReactNode;
	className?: string;
	/** grados máximos de inclinación 3D; 0 lo desactiva */
	tilt?: number;
}

/**
 * Tarjeta con foco de calor: un halo de brasa sigue al cursor por la
 * superficie y enciende el borde por debajo. Opcionalmente se inclina en 3D.
 */
export default function SpotlightCard({ children, className = '', tilt = 6 }: SpotlightCardProps) {
	const px = useMotionValue(-400);
	const py = useMotionValue(-400);
	const rx = useMotionValue(0.5);
	const ry = useMotionValue(0.5);
	const rotateX = useSpring(useTransform(ry, [0, 1], [tilt, -tilt]), { stiffness: 200, damping: 20 });
	const rotateY = useSpring(useTransform(rx, [0, 1], [-tilt, tilt]), { stiffness: 200, damping: 20 });

	const glow = useMotionTemplate`radial-gradient(320px circle at ${px}px ${py}px, rgb(var(--ember) / 0.16), transparent 70%)`;
	const rim = useMotionTemplate`radial-gradient(220px circle at ${px}px ${py}px, rgb(var(--spark) / 0.9), rgb(var(--ember) / 0.5) 40%, transparent 70%)`;

	const onMove = (e: MouseEvent<HTMLDivElement>) => {
		const r = e.currentTarget.getBoundingClientRect();
		px.set(e.clientX - r.left);
		py.set(e.clientY - r.top);
		rx.set((e.clientX - r.left) / r.width);
		ry.set((e.clientY - r.top) / r.height);
	};
	const onLeave = () => {
		px.set(-400);
		py.set(-400);
		rx.set(0.5);
		ry.set(0.5);
	};

	return (
		<motion.div
			onMouseMove={onMove}
			onMouseLeave={onLeave}
			style={tilt ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
			className={`group relative rounded-2xl p-px ${className}`}
		>
			{/* borde encendido */}
			<motion.div
				aria-hidden='true'
				className='absolute inset-0 rounded-[inherit] bg-border opacity-100'
			/>
			<motion.div
				aria-hidden='true'
				className='absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100'
				style={{ background: rim }}
			/>
			<div className='relative h-full rounded-[calc(1rem-1px)] bg-surface-elevated'>
				<motion.div
					aria-hidden='true'
					className='pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100'
					style={{ background: glow }}
				/>
				<div className='relative'>{children}</div>
			</div>
		</motion.div>
	);
}
