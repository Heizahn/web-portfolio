'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMapPin, FiBriefcase, FiLink, FiCalendar, FiGithub } from 'react-icons/fi';
import type { GitHubUser } from '@/lib/github';
import useLang from '../hooks/useLang';
import data from './data.json';

interface Props {
	user: GitHubUser;
}

export default function ProfileCard({ user }: Props) {
	const { lang } = useLang();
	const t = data[lang];
	const joined = new Date(user.created_at).toLocaleDateString(
		lang === 'es' ? 'es-ES' : 'en-US',
		{ year: 'numeric', month: 'long' },
	);

	return (
		<motion.article
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			className='glass rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start'
		>
			<div className='relative shrink-0'>
				<div className='absolute -inset-1 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 opacity-50 blur-md' />
				<Image
					src={user.avatar_url}
					alt={user.name ?? user.login}
					width={112}
					height={112}
					className='relative rounded-full ring-2 ring-accent-400/40'
					priority
				/>
			</div>

			<div className='flex-1 min-w-0 text-center sm:text-left'>
				<h3 className='font-display text-2xl font-bold text-ink'>
					{user.name ?? user.login}
				</h3>
				<a
					href={user.html_url}
					target='_blank'
					rel='noopener noreferrer'
					className='inline-flex items-center gap-1.5 text-sm text-gradient font-mono hover:underline mt-0.5'
				>
					<FiGithub className='text-base' />@{user.login}
				</a>

				{user.bio && (
					<p className='mt-3 text-ink-muted text-sm md:text-base text-pretty'>
						{user.bio}
					</p>
				)}

				<ul className='mt-4 flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-ink-faint'>
					{user.company && (
						<li className='inline-flex items-center gap-1'>
							<FiBriefcase /> {user.company}
						</li>
					)}
					{user.location && (
						<li className='inline-flex items-center gap-1'>
							<FiMapPin /> {user.location}
						</li>
					)}
					{user.blog && (
						<li className='inline-flex items-center gap-1 max-w-[200px] truncate'>
							<FiLink />
							<a
								href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-ink transition truncate'
							>
								{user.blog.replace(/^https?:\/\//, '')}
							</a>
						</li>
					)}
					<li className='inline-flex items-center gap-1'>
						<FiCalendar /> {t.joined} {joined}
					</li>
				</ul>
			</div>
		</motion.article>
	);
}
