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
	light: ['#ebebeb', '#d4d4d4', '#a3a3a3', '#525252', '#1d1d1f'],
	dark: ['#1d1d1f', '#3a3a3c', '#6e6e73', '#aeaeb2', '#f5f5f7'],
};

const labels = {
	es: {
		totalCount: '{{count}} contribuciones en {{year}}',
		months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
		weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
		legend: { less: 'Menos', more: 'Más' },
	},
	en: {
		totalCount: '{{count}} contributions in {{year}}',
		months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
			initial={{ opacity: 0, y: 8 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.4 }}
			className='overflow-x-auto'
		>
			<h3 className='font-display text-2xl md:text-3xl font-normal text-[var(--color-text)] mb-6'>
				{lang === 'es' ? 'Contribuciones' : 'Contributions'}
			</h3>

			<div className='flex justify-center min-w-fit'>
				{mounted ? (
					<GitHubCalendar
						username={username}
						theme={calendarTheme}
						colorScheme={colorScheme}
						blockSize={11}
						blockMargin={3}
						fontSize={11}
						labels={labels[lang]}
						errorMessage={t.error}
					/>
				) : (
					<div className='h-[140px] w-full bg-[var(--color-surface-muted)] rounded-lg' />
				)}
			</div>
		</motion.div>
	);
}
