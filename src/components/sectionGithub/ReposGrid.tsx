'use client';

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
			<p className='text-muted text-sm text-center py-8'>{t.noRepos}</p>
		);
	}

	return (
		<div>
			<div className='flex items-end justify-between gap-4 mb-2 hairline-b pb-3'>
				<h3 className='font-display text-2xl md:text-3xl font-normal text-[var(--color-text)]'>
					{t.title}
				</h3>
				<a
					href={`https://github.com/${username}?tab=repositories`}
					target='_blank'
					rel='noopener noreferrer'
					className='text-sm text-[#0071e3] hover:underline underline-offset-2 whitespace-nowrap'
				>
					{t.viewAll} ↗
				</a>
			</div>
			<div className='flex flex-col'>
				{repos.map((repo, i) => (
					<RepoCard key={repo.id} repo={repo} index={i} />
				))}
			</div>
		</div>
	);
}
