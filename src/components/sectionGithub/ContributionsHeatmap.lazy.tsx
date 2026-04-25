'use client';

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';
import type ContributionsHeatmap from './ContributionsHeatmap';

const ContributionsHeatmapDynamic = dynamic(
	() => import('./ContributionsHeatmap'),
	{
		ssr: false,
		loading: () => (
			<div className='h-[200px] bg-[var(--color-surface-muted)] rounded-lg animate-pulse' />
		),
	},
);

export default function ContributionsHeatmapLazy(
	props: ComponentProps<typeof ContributionsHeatmap>,
) {
	return <ContributionsHeatmapDynamic {...props} />;
}
