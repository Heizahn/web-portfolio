'use client';
import { motion } from 'framer-motion';
import data from './data.json';
import useLang from '../hooks/useLang';
import { Github, LinkedIn, MAILTO } from '@/env/env';
import { EmailIcon, GithubIcon, LinkedInIcon } from '../icons/icons';
import TypewriterText from '../typing/TypewriterText';

const linkStyle =
	'inline-flex items-center justify-center gap-2 px-4 py-2 transition-all duration-300 glass-sm text-ink text-sm md:text-base hover:scale-[1.04] hover:shadow-glow group max-w-fit rounded-full';

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.12, delayChildren: 0.1 },
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
	},
};

export default function Card() {
	const { lang } = useLang();
	const t = data[lang];

	return (
		<motion.div variants={container} initial='hidden' animate='visible'>
			<motion.p
				variants={item}
				className='mb-4 inline-flex items-center gap-2 text-sm font-mono text-accent-600 dark:text-accent-400'
			>
				<span className='text-gradient'>&gt;</span>
				{t.greeting}
				<span className='animate-blink text-gradient'>_</span>
			</motion.p>

			<motion.h1
				variants={item}
				className='font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl text-balance leading-[1.1]'
			>
				{t.title}
			</motion.h1>

			<motion.div
				variants={item}
				className='mt-4 text-lg md:text-2xl font-mono text-ink-muted min-h-[1.6em]'
			>
				<TypewriterText
					words={t.roles}
					cursorClassName='bg-gradient-to-b from-brand-500 to-accent-500'
				/>
			</motion.div>

			<motion.p
				variants={item}
				className='mt-6 text-base md:text-lg text-ink-muted [&>strong]:text-gradient [&>strong]:font-semibold text-pretty max-w-xl'
				dangerouslySetInnerHTML={{ __html: t.description }}
			/>

			<motion.nav variants={item} className='flex flex-wrap gap-3 mt-8'>
				<a className={linkStyle} href={MAILTO} rel='noopener'>
					<EmailIcon />
					{t.contact}
				</a>
				<a className={linkStyle} target='_blank' href={LinkedIn} rel='noopener noreferrer'>
					<LinkedInIcon /> LinkedIn
				</a>
				<a className={linkStyle} target='_blank' href={Github} rel='noopener noreferrer'>
					<GithubIcon /> GitHub
				</a>
			</motion.nav>
		</motion.div>
	);
}
