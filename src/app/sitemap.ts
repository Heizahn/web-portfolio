import type { MetadataRoute } from 'next';

const SITE_URL = 'https://heizahn.dev';

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();
	const sections = ['#study', '#github', '#projects', '#about', '#contact'];

	return [
		{
			url: SITE_URL,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 1,
		},
		...sections.map((hash) => ({
			url: `${SITE_URL}/${hash}`,
			lastModified: now,
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		})),
	];
}
