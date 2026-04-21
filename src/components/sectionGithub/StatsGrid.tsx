'use client';

import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiStar, FiGitBranch } from 'react-icons/fi';
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
		{ icon: FiBookOpen, value: publicRepos, label: t.repos },
		{ icon: FiUsers, value: followers, label: t.followers },
		{ icon: FiStar, value: totalStars, label: t.stars },
		{ icon: FiGitBranch, value: totalForks, label: t.forks },
	];

	return (
		<div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
			{items.map((item, i) => {
				const Icon = item.icon;
				return (
					<motion.div
						key={item.label}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.4, delay: i * 0.08 }}
						className='glass-sm rounded-xl p-4 text-center hover:shadow-glow hover:scale-[1.03] transition'
					>
						<div className='mx-auto w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500/20 to-accent-500/20 flex items-center justify-center mb-2'>
							<Icon className='text-accent-500 dark:text-accent-400 text-lg' />
						</div>
						<div className='font-display text-2xl md:text-3xl font-bold text-gradient tabular-nums'>
							{item.value.toLocaleString()}
						</div>
						<div className='text-xs text-ink-faint uppercase tracking-wider mt-1'>
							{item.label}
						</div>
					</motion.div>
				);
			})}
		</div>
	);
}
