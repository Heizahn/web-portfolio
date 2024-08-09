import { PM2, PM3 } from '@/env/env';
import { GithubIcon, StudyIcon } from '../icons/icons';

export default function SectionStudy() {
	return (
		<section className='w-full pt-20 mx-auto container lg:max-w-4xl md:max-w-2xl'>
			<h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white'>
				<StudyIcon />
				Material de Henry
			</h2>
			<ol className='relative mt-16'>
				<li className=''>
					<div className='relative mx-12 pb-12 grid before:absolute  md:grid-cols-5 md:gap-10 md:space-x-4]'>
						<div className='relative pb-12 md:col-span-2'>
							<div className='sticky top-0'>
								<span className='text-purple-700 -left-[44px] top-[-9px]  absolute rounded-full text-4xl'>
									•
								</span>
								<h3 className='text-xl font-bold text-purple-700'>Modulo 1 y 2</h3>
								<h4 className='font-semibold text-xl text-gray-600 dark:text-white'>
									Online
								</h4>
								<time className='p-0 m-0 text-sm text-gray-600/80 dark:text-white/80'>
									Feb-Abr
								</time>
							</div>
						</div>
						<div className='relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3'>
							<div>
								<p>
									Aprendimos sobre la estructura de un pagina web, utilizando las
									tecnologías bases y fundamentales para la construcción de una sitio web,
									HTML, CSS, JS, y la creación de un servidor con express y mongodb.
								</p>
								<a
									className='inline-flex items-center text-lg font-medium text-purple-800 dark:text-purple-500 dark:hover:text-purple-700 hover:text-purple-800 mt-4'
									href={PM2}
									target='_blank'
								>
									<GithubIcon /> &#160;Github del proyecto -&gt;
								</a>
							</div>
						</div>
					</div>
				</li>
				<li className=''>
					<div className='relative mx-12 pb-12 grid before:absolute before:left-[-35px] md:grid-cols-5 md:gap-10 md:space-x-4'>
						<div className='relative pb-12 md:col-span-2'>
							<div className='sticky top-0'>
								<span className='text-purple-700 -left-[44px] top-[-9px]  absolute rounded-full text-4xl'>
									•
								</span>
								<h3 className='text-xl font-bold text-purple-700'>Modulo 3</h3>
								<h4 className='font-semibold text-xl text-gray-600 dark:text-white'>
									Online
								</h4>
								<time className='p-0 m-0 text-sm text-gray-600/80 dark:text-white/80'>
									May-Jun
								</time>
							</div>
						</div>
						<div className='relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3'>
							<p>
								Se refinaron las habilidades frontend, utilizando las tecnologías React,
								React Router Dom, Redux-toolkit, Formik, para crear un proyecto escalable.
							</p>
							<p>
								En el Backend usamos TypeScript para crear un servicio mas robustos,
								PostgreSQL junto con typeORM, para realizar nuestra segunda app full-stack
								de la cursada.
							</p>
							<a
								className='inline-flex items-center text-lg font-medium text-purple-800 dark:text-purple-500 dark:hover:text-purple-700 hover:text-purple-800 mt-4'
								href={PM3}
								target='_blank'
							>
								<GithubIcon /> &#160; Github del proyecto -&gt;
							</a>
						</div>
					</div>
				</li>
				<li className=''>
					<div className={`relative mx-12  grid md:grid-cols-5 md:gap-10 md:space-x-4`}>
						<div className='relative md:col-span-2'>
							<div className='sticky top-0'>
								<span className='text-purple-700 -left-[44px] top-[-9px] absolute rounded-full text-4xl'>
									•
								</span>
								<h3 className='text-xl font-bold text-purple-700'>Modulo 4</h3>
								<h4 className='font-semibold text-xl text-gray-600 dark:text-white'>
									Online
								</h4>
								<time className='p-0 m-0 text-sm text-gray-600/80 dark:text-white/80'>
									Actualmente...
								</time>
							</div>
						</div>
						<div className='relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3'>
							Creación de un E-commerce con Next-js, dando énfasis en la especialidad del
							Front-end developer.
							<span className='inline-flex items-center text-lg font-medium text-purple-800 dark:text-purple-500'>
								Esta landing page es prueba de mis conocimientos.
							</span>
						</div>
					</div>
				</li>
			</ol>
		</section>
	);
}
