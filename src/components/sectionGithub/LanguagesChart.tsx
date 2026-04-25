'use client';

import { motion } from 'framer-motion';
import type { LanguageSlice } from '@/lib/github';
import useLang from '../hooks/useLang';
import data from './data.json';

interface Props {
	slices: LanguageSlice[];
}

// Grayscale + accent for top language
function getBarColor(index: number): string {
	const colors = ['#0071e3', '#525252', '#a3a3a3', '#d4d4d4', '#ebebeb'];
	return colors[Math.min(index, colors.length - 1)];
}

export default function LanguagesChart({ slices }: Props) {
	const { lang } = useLang();
	const t = data[lang].languages;

	if (slices.length === 0) {
		return (
			<div className='py-8 flex items-center justify-center'>
				<p className='text-muted text-sm'>{t.empty}</p>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 8 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.4 }}
		>
			<h3 className='font-display text-2xl md:text-3xl font-normal text-[var(--color-text)] mb-6'>
				{t.title}
			</h3>

			{/* Stacked bar */}
			<div className='flex w-full h-2 rounded-full overflow-hidden gap-px mb-6'>
				{slices.map((s, i) => (
					<div
						key={s.name}
						title={`${s.name}: ${s.percent.toFixed(1)}%`}
						style={{ width: `${s.percent}%`, backgroundColor: getBarColor(i) }}
					/>
				))}
			</div>

			{/* Language list */}
			<ul className='flex flex-col gap-2'>
				{slices.map((s, i) => (
					<li key={s.name} className='flex items-center justify-between text-sm hairline-b pb-2'>
						<span className='flex items-center gap-2'>
							<span
								aria-hidden='true'
								className='w-2 h-2 rounded-full shrink-0'
								style={{ backgroundColor: getBarColor(i) }}
							/>
							<span className='text-[var(--color-text)]'>{s.name}</span>
						</span>
						<span className='text-muted tabular-nums'>{s.percent.toFixed(1)}%</span>
					</li>
				))}
			</ul>
		</motion.div>
	);
}
