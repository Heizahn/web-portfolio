'use client';

import { motion } from 'framer-motion';
import useLang from '../hooks/useLang';
import data from './data.json';

interface Props {
	publicRepos: number;
	followers: number;
	totalStars: number;
	totalForks: number;
}

export default function StatsGrid({
	publicRepos,
	followers,
	totalStars,
	totalForks,
}: Props) {
	const { lang } = useLang();
	const t = data[lang].stats;

	const items = [
		{ value: publicRepos, label: t.repos },
		{ value: totalStars, label: t.stars },
		{ value: followers, label: t.followers },
		{ value: totalForks, label: t.forks },
	];

	return (
		<div className='grid grid-cols-2 md:grid-cols-4 gap-0 hairline-b pb-8'>
			{items.map((item, i) => (
				<motion.div
					key={item.label}
					initial={{ opacity: 0, y: 8 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.4, delay: i * 0.06 }}
					className='flex flex-col gap-1 py-4 pr-6'
				>
					<span className='font-sans text-5xl md:text-6xl font-light tabular-nums text-[var(--color-text)] leading-none'>
						{item.value.toLocaleString()}
					</span>
					<span className='text-xs text-muted uppercase tracking-widest mt-1'>
						{item.label}
					</span>
				</motion.div>
			))}
		</div>
	);
}
