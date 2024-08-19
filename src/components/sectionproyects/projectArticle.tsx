import { PM3 } from '@/env/env';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectArticleProps {
	title: string;
	description: string;
	techs: Array<string>;
	code: string;
	image?: string;
	view?: string;
}

export default function ProjectArticle({
	title,
	description,
	techs,
	code,
	image,
	view,
}: ProjectArticleProps) {
	return (
		<article className='flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0'>
			<div className='w-full md:w-1/2'>
				<div className='relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50'>
					<Image
						className='object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105'
						src={`${image}`}
						alt=''
						width={1920}
						height={1080}
					/>
				</div>
			</div>
			<div className='w-full md:w-1/2 md:max-w-lg'>
				<h3 className='text-2xl font-bold text-gray-100'>{title}</h3>
				<div className='flex flex-wrap mt-2'>
					<ul className='flex flex-row mb-2 gap-x-2 flex-wrap'>
						{techs.map((tech, index) => (
							<li
								key={index}
								className='flex mt-2 px-4 py-1 items-center rounded-xl text-sm  bg-purple-950 text-white'
							>
								{tech}
							</li>
						))}
					</ul>
					<div className='mt-2 text-gray-300 text-justify'>{description}</div>
					<footer className='flex items-end justify-start mt-4 gap-x-4'>
						<Link
							className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'
							href={`${code}`}
							target='_blank'
						>
							Code
						</Link>
						{view && (
							<Link
								className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'
								href={`${view}`}
								target='_blank'
							>
								View
							</Link>
						)}
					</footer>
				</div>
			</div>
		</article>
	);
}
