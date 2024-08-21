'use client';
import { GithubIcon } from '../icons/icons';
import Title from './title';
import data from './data.json';
import useLang from '../hooks/useLang';
import { CardStudyProps } from '../interfaces/interfaces';
import Card from './card';

export default function SectionStudy() {
	const { lang } = useLang();
	return (
		<section className='w-full pt-20 mx-auto container lg:max-w-4xl md:max-w-2xl'>
			<Title />
			<ol className='relative mt-16'>
				{data[lang].projects.map((project: CardStudyProps, index: number) => (
					<Card
						key={index}
						title={project.title}
						description={project.description}
						mode={project.mode}
						date={project.date}
						githubLink={project.githubLink}
						githubText={project.githubText}
					/>
				))}
			</ol>
		</section>
	);
}
