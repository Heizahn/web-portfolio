'use client';

import Title from './title';
import data from './data.json';
import useLang from '../hooks/useLang';
import type { CardStudyProps } from '../interfaces/interfaces';
import Card from './card';

export default function SectionStudy() {
	const { lang } = useLang();
	const projects = data[lang].projects;

	return (
		<section className='w-full pt-20 mx-auto container lg:max-w-4xl md:max-w-2xl'>
			<Title />

			<div className='relative mt-12'>
				{/* Vertical line */}
				<div
					aria-hidden='true'
					className='absolute left-[7px] md:left-1/2 top-2 bottom-2 w-[2px] md:-translate-x-[1px] bg-gradient-to-b from-brand-500 via-accent-500 to-accent-500/20'
				/>

				<ol className='relative flex flex-col gap-10 md:gap-14'>
					{projects.map((project: CardStudyProps, index: number) => (
						<Card
							key={index}
							index={index}
							title={project.title}
							description={project.description}
							mode={project.mode}
							date={project.date}
							githubLink={project.githubLink}
							githubText={project.githubText}
						/>
					))}
				</ol>
			</div>
		</section>
	);
}
