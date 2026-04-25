'use client';

import { motion } from 'framer-motion';
import useLang from '../hooks/useLang';
import data from './data.json';

export default function SectionHeader() {
	const { lang } = useLang();
	const t = data[lang];
	return (
		<motion.header
			initial={{ opacity: 0, y: 8 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-60px' }}
			transition={{ duration: 0.4 }}
			className='mb-10 hairline-b pb-8'
		>
			<h2 className='font-display text-4xl md:text-5xl font-normal tracking-tight text-[var(--color-text)]'>
				{t.title}
			</h2>
			<p className='text-muted mt-2 text-base'>{t.subtitle}</p>
		</motion.header>
	);
}
