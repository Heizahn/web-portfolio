/**
 * GitHub REST API helpers (server-side, Next.js fetch cache).
 * Unauthenticated rate limit: 60 req/hour/IP. Cached 1h via Next's revalidate.
 */

export interface GitHubUser {
	login: string;
	name: string | null;
	avatar_url: string;
	html_url: string;
	bio: string | null;
	blog: string | null;
	location: string | null;
	company: string | null;
	followers: number;
	following: number;
	public_repos: number;
	public_gists: number;
	created_at: string;
}

export interface GitHubRepo {
	id: number;
	name: string;
	full_name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	watchers_count: number;
	open_issues_count: number;
	size: number;
	topics: string[];
	fork: boolean;
	archived: boolean;
	pushed_at: string;
	updated_at: string;
	created_at: string;
}

const API = 'https://api.github.com';
const REVALIDATE = 3600; // 1 hour

function headers(): HeadersInit {
	const h: HeadersInit = {
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28',
	};
	const token = process.env.GITHUB_TOKEN;
	if (token) h.Authorization = `Bearer ${token}`;
	return h;
}

async function gh<T>(path: string): Promise<T | null> {
	try {
		const res = await fetch(`${API}${path}`, {
			headers: headers(),
			next: { revalidate: REVALIDATE, tags: ['github'] },
		});
		if (!res.ok) {
			console.error(`[github] ${path} → ${res.status} ${res.statusText}`);
			return null;
		}
		return (await res.json()) as T;
	} catch (err) {
		console.error(`[github] fetch failed: ${path}`, err);
		return null;
	}
}

export const getGitHubUser = (username: string) =>
	gh<GitHubUser>(`/users/${username}`);

export const getGitHubRepos = (username: string) =>
	gh<GitHubRepo[]>(`/users/${username}/repos?sort=updated&per_page=100&type=owner`);

export interface LanguageSlice {
	name: string;
	count: number;
	percent: number;
}

export function aggregateLanguages(
	repos: GitHubRepo[] | null,
	limit = 6,
): LanguageSlice[] {
	if (!repos || repos.length === 0) return [];
	const counts = new Map<string, number>();
	for (const r of repos) {
		if (r.fork || r.archived) continue;
		const lang = r.language;
		if (!lang) continue;
		counts.set(lang, (counts.get(lang) ?? 0) + 1);
	}
	const total = Array.from(counts.values()).reduce((a, b) => a + b, 0) || 1;
	const sorted = Array.from(counts.entries())
		.map(([name, count]) => ({ name, count, percent: (count / total) * 100 }))
		.sort((a, b) => b.count - a.count);

	if (sorted.length <= limit) return sorted;
	const top = sorted.slice(0, limit - 1);
	const rest = sorted.slice(limit - 1);
	const restCount = rest.reduce((a, b) => a + b.count, 0);
	top.push({
		name: 'Other',
		count: restCount,
		percent: (restCount / total) * 100,
	});
	return top;
}

export function getFeaturedRepos(
	repos: GitHubRepo[] | null,
	limit = 6,
): GitHubRepo[] {
	if (!repos) return [];
	return repos
		.filter((r) => !r.fork && !r.archived)
		.sort((a, b) => {
			if (b.stargazers_count !== a.stargazers_count) {
				return b.stargazers_count - a.stargazers_count;
			}
			return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
		})
		.slice(0, limit);
}

export interface GitHubStats {
	totalStars: number;
	totalForks: number;
	activeRepos: number;
}

export function computeStats(repos: GitHubRepo[] | null): GitHubStats {
	if (!repos)
		return { totalStars: 0, totalForks: 0, activeRepos: 0 };
	let totalStars = 0;
	let totalForks = 0;
	let activeRepos = 0;
	for (const r of repos) {
		if (r.fork || r.archived) continue;
		totalStars += r.stargazers_count;
		totalForks += r.forks_count;
		activeRepos += 1;
	}
	return { totalStars, totalForks, activeRepos };
}

/** Official-ish language color mapping (subset). */
export const LANG_COLORS: Record<string, string> = {
	TypeScript: '#3178c6',
	JavaScript: '#f1e05a',
	Rust: '#dea584',
	Python: '#3572A5',
	Go: '#00ADD8',
	Java: '#b07219',
	'C++': '#f34b7d',
	C: '#555555',
	'C#': '#178600',
	HTML: '#e34c26',
	CSS: '#563d7c',
	SCSS: '#c6538c',
	Shell: '#89e051',
	Vue: '#41b883',
	Svelte: '#ff3e00',
	PHP: '#4F5D95',
	Ruby: '#701516',
	Swift: '#F05138',
	Kotlin: '#A97BFF',
	Dart: '#00B4AB',
	Lua: '#000080',
	Elixir: '#6e4a7e',
	Haskell: '#5e5086',
	Dockerfile: '#384d54',
	'Jupyter Notebook': '#DA5B0B',
	MDX: '#fcb32c',
	Other: '#9aa0a6',
};

export const getLangColor = (name: string): string =>
	LANG_COLORS[name] ?? '#a855f7';
