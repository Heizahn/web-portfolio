import { GithubIcon } from '../icons/icons';
import { CardStudyProps } from '../interfaces/interfaces';

export default function Card({ title, description, mode, date, githubLink, githubText }: CardStudyProps) {
	return (
		<li className=''>
			<div className='relative mx-12 pb-12 grid before:absolute  md:grid-cols-5 md:gap-10 md:space-x-4]'>
				<div className='relative pb-12 md:col-span-2'>
					<div className='sticky top-0'>
						<span className='text-purple-800 -left-[44px] top-[-9px]  absolute rounded-full text-4xl'>•</span>
						<h3 className='text-xl font-bold text-purple-800'>{title}</h3>
						<h4 className='font-semibold text-xl text-white'>{mode}</h4>
						<time className='p-0 m-0 text-sm text-white/80'>{date}</time>
					</div>
				</div>
				<div className='relative flex flex-col gap-2 pb-4 text-gray-300 md:col-span-3'>
					<div>
						{description.map((item, index) => (
							<p key={index} className={`text-justify ${index >= 1 && 'mt-3'}`}>
								{item}
							</p>
						))}
						{githubLink ? (
							<a
								className='inline-flex items-center text-lg font-medium text-purple-800 hover:underline hover:text-purple-600 mt-4'
								href={githubLink}
								target='_blank'
							>
								<GithubIcon /> &#160;{githubText}
							</a>
						) : (
							<p className='text-lg font-medium text-purple-800 '>{githubText}</p>
						)}
					</div>
				</div>
			</div>
		</li>
	);
}
