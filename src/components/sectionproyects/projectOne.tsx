import { PM3 } from '@/env/env';
import Image from 'next/image';

export default function ProjectOne() {
	return (
		<article className='flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0'>
			<div className='w-full md:w-1/2'>
				<div className='relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50'>
					<Image
						className='object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105'
						src='/imgP1/01.png'
						alt=''
						width={200}
						height={200}
					/>
				</div>
			</div>
			<div className='w-full md:w-1/2 md:max-w-lg'>
				<h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
					Appointments App
				</h3>
				<div className='flex flex-wrap mt-2'>
					<ul className='flex flex-row mb-2 gap-x-2 flex-wrap'>
						<li className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-1 '>
							<span className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
								{' '}
								React
							</span>
						</li>
						<li className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
							<span className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
								{' '}
								Formik
							</span>
						</li>
						<li className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
							<span className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
								{' '}
								Redux-Toolkit
							</span>
						</li>
						<li className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
							<span className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
								{' '}
								React-Router-Dom
							</span>
						</li>
					</ul>
					<ul className='flex flex-row mb-2 gap-x-2 flex-wrap'>
						<li className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
							<span className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
								{' '}
								Express
							</span>
						</li>
						<li className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
							<span className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
								{' '}
								TypeScript
							</span>
						</li>
						<li className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
							<span className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
								{' '}
								PostgresSQL
							</span>
						</li>
						<li className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
							<span className='flex gap-x-2 rounded-full text-xs bg-purple-700 text-black/95 py-1 px-2 '>
								{' '}
								TypeORM
							</span>
						</li>
					</ul>
					<div className='mt-2 text-gray-700 dark:text-gray-400'>
						App full-stack, CRUD completo que nos llevo a superar nuestros limites en un
						corto periodo de tiempo, demostrando versatilidad y astucia al enfrentar retos
						en diferentes areas. PI Modulo 3
					</div>
					<footer className='flex items-end justify-start mt-4 gap-x-4'>
						<a
							className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'
							href={PM3}
							target='_blank'
						>
							Code
						</a>
					</footer>
				</div>
			</div>
		</article>
	);
}
