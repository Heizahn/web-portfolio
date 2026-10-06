'use client';

import { useEffect, useRef } from 'react';
import useReducedMotion from './useReducedMotion';

type Ember = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	r: number;
	life: number;
	max: number;
	hot: boolean;
	phase: number;
};

const readRgb = (name: string) =>
	getComputedStyle(document.documentElement).getPropertyValue(name).trim().split(/\s+/).join(',');

/**
 * Brasas que suben desde el fondo de la página. El puntero actúa como un
 * fuelle: aparta las brasas cercanas y las aviva. Se pausa con la pestaña
 * oculta y no se monta con prefers-reduced-motion.
 */
export default function EmberField({ density = 1 }: { density?: number }) {
	const ref = useRef<HTMLCanvasElement>(null);
	const reduced = useReducedMotion();

	useEffect(() => {
		if (reduced) return;
		const canvas = ref.current;
		const ctx = canvas?.getContext('2d');
		if (!canvas || !ctx) return;

		let w = 0;
		let h = 0;
		let raf = 0;
		let embers: Ember[] = [];
		const pointer = { x: -9999, y: -9999 };
		const isDark = () => document.documentElement.classList.contains('dark');
		let colors = { ember: readRgb('--ember'), spark: readRgb('--spark') };
		// En oscuro las brasas suman luz; en claro se pintan encima, más tenues
		let blend: GlobalCompositeOperation = isDark() ? 'lighter' : 'source-over';
		let strength = isDark() ? 1 : 0.55;

		const spawn = (initial = false): Ember => {
			const max = 260 + Math.random() * 420;
			return {
				x: Math.random() * w,
				y: initial ? Math.random() * h : h + 10,
				vx: (Math.random() - 0.5) * 0.25,
				vy: -(0.25 + Math.random() * 0.75),
				r: 0.6 + Math.random() * 1.9,
				life: initial ? Math.random() * max : 0,
				max,
				hot: Math.random() < 0.3,
				phase: Math.random() * Math.PI * 2,
			};
		};

		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = window.innerWidth;
			h = window.innerHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const count = Math.min(110, Math.round(((w * h) / 16000) * density));
			embers = Array.from({ length: count }, () => spawn(true));
		};

		const tick = () => {
			ctx.clearRect(0, 0, w, h);
			ctx.globalCompositeOperation = blend;
			for (let i = 0; i < embers.length; i++) {
				const e = embers[i];
				e.life++;
				e.phase += 0.03;

				const dx = e.x - pointer.x;
				const dy = e.y - pointer.y;
				const d2 = dx * dx + dy * dy;
				let boost = 0;
				if (d2 < 140 * 140) {
					const d = Math.sqrt(d2) || 1;
					const f = (1 - d / 140) * 0.6;
					e.vx += (dx / d) * f;
					e.vy += (dy / d) * f - 0.05;
					boost = 1 - d / 140;
				}

				e.vx *= 0.96;
				e.x += e.vx + Math.sin(e.phase) * 0.25;
				e.y += e.vy;
				if (e.vy > -0.2) e.vy -= 0.02;

				const t = e.life / e.max;
				if (t >= 1 || e.y < -20) {
					embers[i] = spawn();
					continue;
				}
				const flicker = 0.75 + Math.sin(e.phase * 3) * 0.25;
				const alpha = Math.sin(Math.PI * t) * flicker * (0.55 + boost * 0.45) * strength;
				const rgb = e.hot || boost > 0.4 ? colors.spark : colors.ember;
				const r = e.r * (1 + boost);

				const g = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, r * 4);
				g.addColorStop(0, `rgba(${rgb},${alpha})`);
				g.addColorStop(1, `rgba(${rgb},0)`);
				ctx.fillStyle = g;
				ctx.beginPath();
				ctx.arc(e.x, e.y, r * 4, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.globalCompositeOperation = 'source-over';
			raf = requestAnimationFrame(tick);
		};

		const onMove = (e: PointerEvent) => {
			pointer.x = e.clientX;
			pointer.y = e.clientY;
		};
		const onLeave = () => {
			pointer.x = pointer.y = -9999;
		};
		const onVisibility = () => {
			cancelAnimationFrame(raf);
			if (!document.hidden) raf = requestAnimationFrame(tick);
		};
		// Re-lee los colores cuando cambia el tema (next-themes cambia la clase de <html>)
		const themeObserver = new MutationObserver(() => {
			colors = { ember: readRgb('--ember'), spark: readRgb('--spark') };
			blend = isDark() ? 'lighter' : 'source-over';
			strength = isDark() ? 1 : 0.55;
		});
		themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

		resize();
		raf = requestAnimationFrame(tick);
		window.addEventListener('resize', resize);
		window.addEventListener('pointermove', onMove, { passive: true });
		document.addEventListener('pointerleave', onLeave);
		document.addEventListener('visibilitychange', onVisibility);

		return () => {
			cancelAnimationFrame(raf);
			themeObserver.disconnect();
			window.removeEventListener('resize', resize);
			window.removeEventListener('pointermove', onMove);
			document.removeEventListener('pointerleave', onLeave);
			document.removeEventListener('visibilitychange', onVisibility);
		};
	}, [reduced, density]);

	if (reduced) return null;

	return <canvas ref={ref} aria-hidden='true' className='pointer-events-none fixed inset-0 -z-10' />;
}
