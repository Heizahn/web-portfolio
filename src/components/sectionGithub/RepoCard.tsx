'use client';

import { motion } from 'framer-motion';
import { FiStar, FiGitBranch, FiExternalLink, FiBook } from 'react-icons/fi';
import type { GitHubRepo } from '@/lib/github';
import { getLangColor } from '@/lib/github';
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
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-40px' }}
			transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
			className='group glass rounded-xl p-5 flex flex-col gap-3 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 border border-border hover:border-accent-400/40'
		>
			<div className='flex items-start justify-between gap-2'>
				<div className='flex items-center gap-2 min-w-0'>
					<FiBook className='text-accent-500 dark:text-accent-400 shrink-0' />
					<h4 className='font-display font-semibold text-ink truncate group-hover:text-gradient transition'>
						{repo.name}
					</h4>
				</div>
				<FiExternalLink className='text-ink-faint group-hover:text-accent-500 transition shrink-0' />
			</div>

			<p className='text-sm text-ink-muted line-clamp-2 flex-1 min-h-[2.5em]'>
				{repo.description ?? '—'}
			</p>

			{repo.topics.length > 0 && (
				<ul className='flex flex-wrap gap-1.5'>
					{repo.topics.slice(0, 3).map((topic) => (
						<li
							key={topic}
							className='text-[10px] px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300 border border-brand-500/20'
						>
							{topic}
						</li>
					))}
				</ul>
			)}

			<div className='flex items-center justify-between text-xs text-ink-faint pt-2 border-t border-border'>
				<div className='flex items-center gap-3'>
					{repo.language && (
						<span className='inline-flex items-center gap-1.5'>
							<span
								aria-hidden='true'
								className='w-2.5 h-2.5 rounded-full'
								style={{ backgroundColor: getLangColor(repo.language) }}
							/>
							{repo.language}
						</span>
					)}
					<span className='inline-flex items-center gap-1'>
						<FiStar /> {repo.stargazers_count}
					</span>
					<span className='inline-flex items-center gap-1'>
						<FiGitBranch /> {repo.forks_count}
					</span>
				</div>
				<span className='truncate'>
					{t.updated} {formatRelative(repo.pushed_at, lang)}
				</span>
			</div>
		</motion.a>
	);
}
