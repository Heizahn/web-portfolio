import { CodeIcon } from '../icons/icons';
import ProjectArticle from './projectArticle';
import data from '@/components/sectionproyects/data.json';

export default function SectionProjects() {
	return (
		<section className='w-full pt-16 mx-auto container lg:max-w-4xl md:max-w-2xl'>
			<h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white'>
				<CodeIcon />
				Proyectos
			</h2>
			<div className='flex flex-col gap-y-16'>
				{data.map((project) => (
					<ProjectArticle
						key={project.id}
						title={project.title}
						description={project.description}
						techs={project.techs}
						code={project.code}
						image={project.image}
						view={project.view}
					/>
				))}
			</div>
		</section>
	);
}
