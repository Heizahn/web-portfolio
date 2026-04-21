'use client';

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';
import type LanguagesChart from './LanguagesChart';

const LanguagesChartDynamic = dynamic(() => import('./LanguagesChart'), {
	ssr: false,
	loading: () => (
		<div className='glass rounded-2xl p-6 h-[260px] animate-pulse bg-surface-muted/30' />
	),
});

export default function LanguagesChartLazy(
	props: ComponentProps<typeof LanguagesChart>,
) {
	return <LanguagesChartDynamic {...props} />;
}
