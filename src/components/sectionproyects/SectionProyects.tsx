'use client';

import { motion } from 'framer-motion';
import { CodeIcon } from '../icons/icons';
import ProjectArticle from './projectArticle';
import data from '@/components/sectionproyects/data.json';
import useLang from '../hooks/useLang';

export default function SectionProjects() {
	const { lang } = useLang();
	const t = data[lang];

	return (
		<section className='w-full pt-20 mx-auto container lg:max-w-4xl md:max-w-2xl'>
			<motion.header
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-80px' }}
				transition={{ duration: 0.5 }}
				className='mb-10'
			>
				<h2 className='font-display flex items-center text-3xl md:text-4xl font-semibold gap-x-3 text-ink'>
					<span className='text-gradient text-2xl md:text-3xl'>
						<CodeIcon />
					</span>
					{t.title}
				</h2>
				<p className='mt-3 text-ink-muted text-sm md:text-base max-w-2xl'>
					{t.subtitle}
				</p>
			</motion.header>

			<div className='flex flex-col gap-10 md:gap-14'>
				{t.projects.map((project, index) => (
					<ProjectArticle
						key={project.id}
						index={index}
						title={project.title}
						summary={project.summary}
						description={project.description}
						techs={project.techs}
						code={project.code}
						image={project.image}
						view={project.view}
						featured={project.featured}
						client={(project as { client?: string }).client}
						clientUrl={(project as { clientUrl?: string }).clientUrl}
						labels={t.labels}
					/>
				))}
			</div>
		</section>
	);
}
