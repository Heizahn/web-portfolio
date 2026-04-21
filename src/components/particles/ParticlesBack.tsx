'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';

export default function ParticlesBack() {
	const [init, setInit] = useState(false);
	const [reducedMotion, setReducedMotion] = useState(false);
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		setReducedMotion(mq.matches);
		const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	}, []);

	useEffect(() => {
		if (reducedMotion) return;
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, [reducedMotion]);

	const particleColor = resolvedTheme === 'dark' ? '#a5b4fc' : '#6366f1';
	const linkColor = resolvedTheme === 'dark' ? '#c084fc' : '#818cf8';

	const options = useMemo(
		() => ({
			fullScreen: { enable: false },
			fpsLimit: 60,
			particles: {
				color: { value: particleColor },
				links: {
					color: linkColor,
					distance: 150,
					enable: true,
					opacity: 0.35,
					width: 1,
				},
				move: {
					direction: 'none' as const,
					enable: true,
					random: false,
					speed: 1.2,
					straight: false,
					outModes: { default: 'bounce' as const },
				},
				number: {
					density: { enable: true, area: 900 },
					value: 80,
				},
				opacity: { value: 0.4 },
				shape: { type: 'circle' as const },
				size: { value: { min: 1, max: 3 } },
			},
			detectRetina: true,
		}),
		[particleColor, linkColor],
	);

	if (reducedMotion || !init) return null;

	return (
		<div
			className='pointer-events-none fixed inset-0 -z-10'
			aria-hidden='true'
		>
			<Particles id='tsparticles' options={options} />
		</div>
	);
}
