import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='px-4 flex flex-col w-full h-screen justify-center items-center'>
			<h1 className='text-6xl md:text-9xl'>404</h1>
			<h2 className='text-2xl md:text-4xl'>Not Found</h2>
			<p className='text-base md:text-lg'>
				This is a landing page, it only has the initial route
			</p>
			<Link
				href='/'
				className='mt-4 bg-purple-700/30 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-purple-600/40 hover:scale-110 '
			>
				Return Home
			</Link>
		</div>
	);
}
