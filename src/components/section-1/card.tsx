'use client';
import { motion } from 'framer-motion';
import data from './data.json';
import useLang from '../hooks/useLang';
import { Github, LinkedIn, MAILTO } from '@/env/env';
import { EmailIcon, GithubIcon, LinkedInIcon } from '../icons/icons';
import TypewriterText from '../typing/TypewriterText';
import { SparkButton, TechMarquee, TemperText } from '../ds';

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
				className='font-display text-5xl font-extrabold tracking-tight text-ink sm:text-6xl md:text-7xl text-balance leading-[1.02]'
			>
				<TemperText text={t.title} delay={0.35} />
			</motion.h1>

			<motion.div
				variants={item}
				className='mt-4 text-lg md:text-2xl font-mono text-ink-muted min-h-[1.6em]'
			>
				<TypewriterText
					words={t.roles}
					cursorClassName='bg-gradient-to-b from-ember to-spark'
				/>
			</motion.div>

			<motion.p
				variants={item}
				className='mt-6 text-base md:text-lg text-ink-muted [&>strong]:text-gradient [&>strong]:font-semibold text-pretty max-w-xl'
				dangerouslySetInnerHTML={{ __html: t.description }}
			/>

			<motion.nav variants={item} className='flex flex-wrap gap-3 mt-8'>
				<SparkButton href={MAILTO} rel='noopener'>
					<EmailIcon />
					{t.contact}
				</SparkButton>
				<SparkButton variant='outline' target='_blank' href={LinkedIn} rel='noopener noreferrer'>
					<LinkedInIcon /> LinkedIn
				</SparkButton>
				<SparkButton variant='outline' target='_blank' href={Github} rel='noopener noreferrer'>
					<GithubIcon /> GitHub
				</SparkButton>
			</motion.nav>

			<motion.div variants={item} className='mt-10 max-w-xl'>
				<TechMarquee />
			</motion.div>
		</motion.div>
	);
}
