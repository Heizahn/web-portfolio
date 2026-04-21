'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

interface Labels {
	code: string;
	view: string;
	featured: string;
}

interface ProjectArticleProps {
	title: string;
	summary?: string;
	description: string;
	techs: string[];
	code: string;
	image?: string;
	view?: string;
	featured?: boolean;
	index: number;
	labels: Labels;
}

export default function ProjectArticle({
	title,
	summary,
	description,
	techs,
	code,
	image,
	view,
	featured,
	index,
	labels,
}: ProjectArticleProps) {
	const isEven = index % 2 === 0;

	return (
		<motion.article
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			className='group relative glass rounded-2xl p-5 md:p-6 hover:shadow-glow transition-all duration-500'
		>
			<div
				className={`flex flex-col gap-6 md:gap-8 md:items-center ${
					isEven ? 'md:flex-row' : 'md:flex-row-reverse'
				}`}
			>
				{/* Preview */}
				{image && (
					<div className='w-full md:w-1/2 relative'>
						<div className='relative overflow-hidden rounded-xl ring-1 ring-border bg-surface-muted aspect-video'>
							{/* Gradient glow behind image */}
							<div className='absolute -inset-1 bg-gradient-to-br from-brand-500/30 via-accent-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10' />

							<Image
								src={image}
								alt={`${title} preview`}
								fill
								sizes='(max-width: 768px) 100vw, 50vw'
								className='object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105'
							/>

							{/* Top gradient overlay for readability of featured badge */}
							{featured && (
								<div className='absolute top-3 left-3 z-10'>
									<span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-lg'>
										<HiOutlineSparkles className='w-3.5 h-3.5' />
										{labels.featured}
									</span>
								</div>
							)}

							{/* Live dot */}
							{view && (
								<div className='absolute top-3 right-3 z-10'>
									<span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-sm text-white border border-white/10'>
										<span className='relative flex h-2 w-2'>
											<span className='absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping' />
											<span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
										</span>
										Live
									</span>
								</div>
							)}
						</div>
					</div>
				)}

				{/* Content */}
				<div className={`w-full ${image ? 'md:w-1/2' : ''} flex flex-col`}>
					<h3 className='font-display text-2xl md:text-3xl font-bold text-gradient leading-tight'>
						{title}
					</h3>

					{summary && (
						<p className='mt-2 text-sm md:text-base text-ink font-medium'>
							{summary}
						</p>
					)}

					<p className='mt-3 text-sm text-ink-muted text-pretty leading-relaxed'>
						{description}
					</p>

					<ul className='flex flex-wrap gap-2 mt-4'>
						{techs.map((tech) => (
							<li
								key={tech}
								className='px-2.5 py-1 rounded-lg text-xs font-medium bg-accent-100 text-accent-700 dark:bg-accent-500/15 dark:text-accent-300 border border-accent-300/40 dark:border-accent-500/30 transition hover:bg-accent-200 dark:hover:bg-accent-500/25'
							>
								{tech}
							</li>
						))}
					</ul>

					<div className='flex flex-wrap gap-3 mt-6'>
						<Link
							href={code}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-sm text-sm font-medium text-ink hover:scale-[1.03] hover:shadow-glow transition'
						>
							<FiGithub className='w-4 h-4' />
							{labels.code}
						</Link>
						{view && (
							<Link
								href={view}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-primary text-sm'
							>
								<FiExternalLink className='w-4 h-4' />
								{labels.view}
							</Link>
						)}
					</div>
				</div>
			</div>
		</motion.article>
	);
}
