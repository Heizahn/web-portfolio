import { LinkedIn } from '@/env/env';

export default function ContactLinkedIn() {
	return (
		<a
			className='flex items-center transition md:justify-center md:hover:scale-105'
			target='_blank'
			href={LinkedIn}
		>
			<div className='flex items-center '>
				<span className='relative inline-flex overflow-hidden rounded-full p-[1px]'>
					<span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]'></span>
					<div className='inline-flex items-center justify-center w-full px-3 py-1 text-base text-gray-800 bg-gray-100 rounded-full cursor-pointer dark:bg-gray-900 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap'>
						Disponible para trabajar.
					</div>
				</span>
			</div>
		</a>
	);
}
