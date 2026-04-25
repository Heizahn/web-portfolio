'use client';

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';
import type LanguagesChart from './LanguagesChart';

const LanguagesChartDynamic = dynamic(() => import('./LanguagesChart'), {
	ssr: false,
	loading: () => (
		<div className='h-[180px] bg-[var(--color-surface-muted)] rounded-lg animate-pulse' />
	),
});

export default function LanguagesChartLazy(
	props: ComponentProps<typeof LanguagesChart>,
) {
	return <LanguagesChartDynamic {...props} />;
}
