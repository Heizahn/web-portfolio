'use client';

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';
import type ContributionsHeatmap from './ContributionsHeatmap';

const ContributionsHeatmapDynamic = dynamic(
	() => import('./ContributionsHeatmap'),
	{
		ssr: false,
		loading: () => (
			<div className='glass rounded-2xl p-6 h-[200px] animate-pulse bg-surface-muted/30' />
		),
	},
);

export default function ContributionsHeatmapLazy(
	props: ComponentProps<typeof ContributionsHeatmap>,
) {
	return <ContributionsHeatmapDynamic {...props} />;
}
