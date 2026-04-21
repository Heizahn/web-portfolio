'use client';

import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import type { LanguageSlice } from '@/lib/github';
import { getLangColor } from '@/lib/github';
import useLang from '../hooks/useLang';
import data from './data.json';

interface Props {
	slices: LanguageSlice[];
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: any[] }) {
	if (!active || !payload?.length) return null;
	const { name, count, percent } = payload[0].payload as LanguageSlice;
	return (
		<div className='glass rounded-lg px-3 py-2 text-xs'>
			<div className='font-semibold text-ink'>{name}</div>
			<div className='text-ink-muted'>
				{count} {count === 1 ? 'repo' : 'repos'} · {percent.toFixed(1)}%
			</div>
		</div>
	);
}

export default function LanguagesChart({ slices }: Props) {
	const { lang } = useLang();
	const t = data[lang].languages;
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	if (slices.length === 0) {
		return (
			<div className='glass rounded-2xl p-6 flex items-center justify-center min-h-[200px]'>
				<p className='text-ink-muted text-sm'>{t.empty}</p>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.6 }}
			className='glass rounded-2xl p-6'
		>
			<h3 className='font-display text-xl md:text-2xl font-semibold text-ink mb-4'>
				{t.title}
			</h3>
			<div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-6'>
				<div className='h-52 sm:h-60 relative'>
					{mounted && (
					<ResponsiveContainer width='100%' height='100%'>
						<PieChart>
							<Pie
								data={slices}
								dataKey='count'
								nameKey='name'
								cx='50%'
								cy='50%'
								innerRadius='60%'
								outerRadius='95%'
								paddingAngle={2}
								stroke='none'
								animationDuration={900}
							>
								{slices.map((s) => (
									<Cell key={s.name} fill={getLangColor(s.name)} />
								))}
							</Pie>
							<Tooltip content={<CustomTooltip />} />
						</PieChart>
					</ResponsiveContainer>
					)}
					<div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
						<div className='text-center'>
							<div className='font-display text-3xl font-bold text-gradient'>
								{slices.length}
							</div>
							<div className='text-xs text-ink-faint uppercase tracking-wider'>
								{lang === 'es' ? 'Lenguajes' : 'Languages'}
							</div>
						</div>
					</div>
				</div>

				<ul className='space-y-2'>
					{slices.map((s, i) => (
						<motion.li
							key={s.name}
							initial={{ opacity: 0, x: 12 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: i * 0.05 }}
							className='flex items-center gap-3 text-sm'
						>
							<span
								aria-hidden='true'
								className='w-3 h-3 rounded-full shrink-0'
								style={{ backgroundColor: getLangColor(s.name) }}
							/>
							<span className='flex-1 min-w-0 flex items-center justify-between gap-2'>
								<span className='text-ink truncate'>{s.name}</span>
								<span className='text-ink-faint tabular-nums text-xs'>
									{s.percent.toFixed(1)}%
								</span>
							</span>
						</motion.li>
					))}
				</ul>
			</div>
		</motion.div>
	);
}
