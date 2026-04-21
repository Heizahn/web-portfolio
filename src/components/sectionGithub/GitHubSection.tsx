import {
	getGitHubUser,
	getGitHubRepos,
	aggregateLanguages,
	getFeaturedRepos,
	computeStats,
} from '@/lib/github';
import { GithubUser } from '@/env/env';
import ProfileCard from './ProfileCard';
import StatsGrid from './StatsGrid';
import LanguagesChart from './LanguagesChart.lazy';
import ReposGrid from './ReposGrid';
import SectionHeader from './SectionHeader';
import SectionError from './SectionError';
import ContributionsHeatmap from './ContributionsHeatmap.lazy';

export default async function GitHubSection() {
	const [user, repos] = await Promise.all([
		getGitHubUser(GithubUser),
		getGitHubRepos(GithubUser),
	]);

	return (
		<section className='w-full pt-16 mx-auto container lg:max-w-4xl md:max-w-2xl'>
			<SectionHeader />

			{!user ? (
				<SectionError />
			) : (
				<div className='flex flex-col gap-6'>
					<ProfileCard user={user} />

					<StatsGrid
						publicRepos={user.public_repos}
						followers={user.followers}
						totalStars={computeStats(repos).totalStars}
						totalForks={computeStats(repos).totalForks}
					/>

					<ContributionsHeatmap username={GithubUser} />

					<LanguagesChart slices={aggregateLanguages(repos)} />

					<ReposGrid
						repos={getFeaturedRepos(repos, 6)}
						username={GithubUser}
					/>
				</div>
			)}
		</section>
	);
}
