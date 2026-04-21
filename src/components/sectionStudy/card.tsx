'use client';

import { motion } from 'framer-motion';
import { GithubIcon } from '../icons/icons';
import type { CardStudyProps } from '../interfaces/interfaces';

type Props = CardStudyProps & { index: number };

export default function Card({
	title,
	description,
	mode,
	date,
	githubLink,
	githubText,
	index,
}: Props) {
	const isLeft = index % 2 === 0;

	return (
		<motion.li
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-60px' }}
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
			className='relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-x-10 items-start'
		>
			{/* Animated dot on the timeline */}
			<motion.span
				aria-hidden='true'
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.35, delay: 0.15, type: 'spring', stiffness: 260 }}
				className='absolute left-0 md:left-1/2 top-2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 ring-4 ring-surface shadow-glow'
			>
				<span className='absolute inset-0 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 animate-ping opacity-40' />
			</motion.span>

			{/* Card */}
			<motion.article
				initial={{ opacity: 0, x: isLeft ? -16 : 16 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-60px' }}
				transition={{ duration: 0.5, delay: 0.1 }}
				className={`glass rounded-xl p-5 md:p-6 hover:shadow-glow transition ${
					isLeft ? 'md:col-start-1' : 'md:col-start-2'
				}`}
			>
				<time className='block text-xs font-mono uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-1.5'>
					{date}
				</time>
				<h3 className='font-display text-xl md:text-2xl font-bold text-gradient leading-tight'>
					{title}
				</h3>
				<p className='text-xs text-ink-faint mt-1 mb-3'>{mode}</p>

				<div className='flex flex-col gap-2 text-sm text-ink-muted text-pretty'>
					{description.map((item, i) => (
						<p key={i}>{item}</p>
					))}
				</div>

				{githubLink ? (
					<a
						href={githubLink}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 mt-4 text-sm font-medium text-accent-600 dark:text-accent-400 hover:text-gradient transition'
					>
						<GithubIcon /> {githubText}
					</a>
				) : githubText ? (
					<span className='inline-flex items-center gap-1.5 mt-4 text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'>
						<span className='w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse' />
						{githubText}
					</span>
				) : null}
			</motion.article>
		</motion.li>
	);
}
