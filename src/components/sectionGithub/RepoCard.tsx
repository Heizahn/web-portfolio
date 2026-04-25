'use client';

import { motion } from 'framer-motion';
import { FiStar, FiGitBranch } from 'react-icons/fi';
import type { GitHubRepo } from '@/lib/github';
import useLang from '../hooks/useLang';
import data from './data.json';

interface Props {
	repo: GitHubRepo;
	index?: number;
}

function formatRelative(iso: string, lang: 'es' | 'en') {
	const rtf = new Intl.RelativeTimeFormat(lang === 'es' ? 'es-ES' : 'en-US', {
		numeric: 'auto',
	});
	const diff = (new Date(iso).getTime() - Date.now()) / 1000;
	const units: [Intl.RelativeTimeFormatUnit, number][] = [
		['year', 60 * 60 * 24 * 365],
		['month', 60 * 60 * 24 * 30],
		['week', 60 * 60 * 24 * 7],
		['day', 60 * 60 * 24],
		['hour', 60 * 60],
		['minute', 60],
	];
	for (const [unit, sec] of units) {
		if (Math.abs(diff) >= sec) {
			return rtf.format(Math.round(diff / sec), unit);
		}
	}
	return rtf.format(0, 'second');
}

export default function RepoCard({ repo, index = 0 }: Props) {
	const { lang } = useLang();
	const t = data[lang].repos;

	return (
		<motion.a
			href={repo.html_url}
			target='_blank'
			rel='noopener noreferrer'
			initial={{ opacity: 0, y: 8 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-40px' }}
			transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
			className='group flex flex-col gap-2 py-4 hairline-b hover:bg-[var(--color-surface-muted)] px-3 -mx-3 rounded-lg transition-colors duration-200'
		>
			<div className='flex items-start justify-between gap-2'>
				<h4 className='text-sm font-medium text-[#0071e3] group-hover:underline underline-offset-2 truncate'>
					{repo.name}
				</h4>
			</div>

			{repo.description && (
				<p className='text-sm text-muted line-clamp-1'>
					{repo.description}
				</p>
			)}

			<div className='flex items-center gap-4 text-xs text-muted'>
				{repo.language && <span>{repo.language}</span>}
				<span className='inline-flex items-center gap-1'>
					<FiStar className='w-3 h-3' /> {repo.stargazers_count}
				</span>
				<span className='inline-flex items-center gap-1'>
					<FiGitBranch className='w-3 h-3' /> {repo.forks_count}
				</span>
				<span className='ml-auto'>
					{t.updated} {formatRelative(repo.pushed_at, lang)}
				</span>
			</div>
		</motion.a>
	);
}
