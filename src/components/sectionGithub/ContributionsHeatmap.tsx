'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import useLang from '../hooks/useLang';
import data from './data.json';

interface Props {
	username: string;
}

const calendarTheme = {
	light: ['#e0e7ff', '#a5b4fc', '#818cf8', '#6366f1', '#a855f7'],
	dark: ['#1e1b4b', '#3730a3', '#4f46e5', '#818cf8', '#c084fc'],
};

const labels = {
	es: {
		totalCount: '{{count}} contribuciones en {{year}}',
		months: [
			'Ene',
			'Feb',
			'Mar',
			'Abr',
			'May',
			'Jun',
			'Jul',
			'Ago',
			'Sep',
			'Oct',
			'Nov',
			'Dic',
		],
		weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
		legend: { less: 'Menos', more: 'Más' },
	},
	en: {
		totalCount: '{{count}} contributions in {{year}}',
		months: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		legend: { less: 'Less', more: 'More' },
	},
};

export default function ContributionsHeatmap({ username }: Props) {
	const { lang } = useLang();
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	const colorScheme = resolvedTheme === 'dark' ? 'dark' : 'light';
	const t = data[lang];

	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.6 }}
			className='glass rounded-2xl p-4 md:p-6 overflow-x-auto'
		>
			<h3 className='font-display text-xl md:text-2xl font-semibold text-ink mb-4 px-1'>
				{lang === 'es' ? 'Heatmap de contribuciones' : 'Contributions heatmap'}
			</h3>

			<div className='flex justify-center min-w-fit'>
				{mounted ? (
					<GitHubCalendar
						username={username}
						theme={calendarTheme}
						colorScheme={colorScheme}
						blockSize={12}
						blockMargin={4}
						fontSize={12}
						labels={labels[lang]}
						errorMessage={t.error}
					/>
				) : (
					<div className='h-[140px] w-full animate-pulse bg-surface-muted rounded-lg' />
				)}
			</div>
		</motion.div>
	);
}
