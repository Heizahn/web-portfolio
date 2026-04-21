'use client';

import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import useLang from '../hooks/useLang';
import data from './data.json';

export default function SectionHeader() {
	const { lang } = useLang();
	const t = data[lang];
	return (
		<motion.header
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-60px' }}
			transition={{ duration: 0.5 }}
			className='mb-8'
		>
			<h2 className='font-display flex items-center gap-x-3 text-3xl font-semibold text-ink'>
				<FiGithub className='text-accent-500 dark:text-accent-400' />
				{t.title}
			</h2>
			<p className='text-ink-muted mt-1 text-sm'>{t.subtitle}</p>
		</motion.header>
	);
}
