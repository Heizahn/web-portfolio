import { CodeIcon } from '../icons/icons';

export default function SectionProjects() {
	return (
		<section className='w-full pt-20 mx-auto container lg:max-w-4xl md:max-w-2xl'>
			<h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white'>
				<CodeIcon />
				Proyectos
			</h2>
			<div className='flex flex-col gap-y-16'>
				<article className='flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0'>
					<div className='w-full md:w-1/2'>
						<div className='relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50'>
							<img
								className='object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105'
								src=''
								alt=''
							/>
						</div>
					</div>
					<div className='w-full md:w-1/2 md:max-w-lg'>
						<h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
							SVGL - A beautiful library with SVG logos{' '}
						</h3>
						<div className='flex flex-wrap mt-2'>
							<ul className='flex flex-row mb-2 gap-x-2'>
								<li className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 '>
									<span className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 '>
										{' '}
										Next js
									</span>
								</li>
							</ul>
							<div className='mt-2 text-gray-700 dark:text-gray-400'>
								Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes.
								+2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.
							</div>
							<footer className='flex items-end justify-start mt-4 gap-x-4'>
								<a
									className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'
									href='#'
								>
									Code
								</a>
							</footer>
						</div>
					</div>
				</article>
				<article className='flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0'>
					<div className='w-full md:w-1/2'>
						<div className='relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50'>
							<img
								className='object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105'
								src=''
								alt=''
							/>
						</div>
					</div>
					<div className='w-full md:w-1/2 md:max-w-lg'>
						<h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
							SVGL - A beautiful library with SVG logos{' '}
						</h3>
						<div className='flex flex-wrap mt-2'>
							<ul className='flex flex-row mb-2 gap-x-2'>
								<li className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 '>
									<span className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 '>
										{' '}
										Next js
									</span>
								</li>
							</ul>
							<div className='mt-2 text-gray-700 dark:text-gray-400'>
								Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes.
								+2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.
							</div>
							<footer className='flex items-end justify-start mt-4 gap-x-4'>
								<a
									className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'
									href='#'
								>
									Code
								</a>
							</footer>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
}
