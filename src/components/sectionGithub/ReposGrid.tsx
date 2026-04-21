'use client';

import { FiArrowUpRight } from 'react-icons/fi';
import type { GitHubRepo } from '@/lib/github';
import RepoCard from './RepoCard';
import useLang from '../hooks/useLang';
import data from './data.json';

interface Props {
	repos: GitHubRepo[];
	username: string;
}

export default function ReposGrid({ repos, username }: Props) {
	const { lang } = useLang();
	const t = data[lang].repos;

	if (repos.length === 0) {
		return (
			<p className='text-ink-muted text-sm text-center py-8'>{t.noRepos}</p>
		);
	}

	return (
		<div>
			<div className='flex items-end justify-between gap-4 mb-4'>
				<h3 className='font-display text-xl md:text-2xl font-semibold text-ink'>
					{t.title}
				</h3>
				<a
					href={`https://github.com/${username}?tab=repositories`}
					target='_blank'
					rel='noopener noreferrer'
					className='inline-flex items-center gap-1 text-sm text-ink-muted hover:text-gradient transition'
				>
					{t.viewAll} <FiArrowUpRight />
				</a>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{repos.map((repo, i) => (
					<RepoCard key={repo.id} repo={repo} index={i} />
				))}
			</div>
		</div>
	);
}
