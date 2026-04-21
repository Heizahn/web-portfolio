'use client';

import { motion } from 'framer-motion';

export default function ScrollIndicator({ label }: { label: string }) {
	return (
		<motion.a
			href='#study'
			aria-label={label}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1.5, duration: 0.6 }}
			className='hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink-faint hover:text-ink transition group'
		>
			<span className='text-xs font-mono uppercase tracking-widest'>{label}</span>
			<motion.div
				animate={{ y: [0, 8, 0] }}
				transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
				className='w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5'
			>
				<motion.span
					animate={{ opacity: [1, 0], y: [0, 6] }}
					transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
					className='block w-1 h-2 rounded-full bg-gradient-to-b from-brand-500 to-accent-500'
				/>
			</motion.div>
		</motion.a>
	);
}
