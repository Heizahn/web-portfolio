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
			initial={{ opacity: 0, y: 8 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.4, ease: 'easeOut' }}
			className='flex flex-col sm:flex-row gap-6 items-center sm:items-start hairline-b pb-8'
		>
			<Image
				src={user.avatar_url}
				alt={user.name ?? user.login}
				width={96}
				height={96}
				className='rounded-full shrink-0'
				priority
			/>

			<div className='flex-1 min-w-0 text-center sm:text-left'>
				<h3 className='font-display text-2xl font-normal text-[var(--color-text)]'>
					{user.name ?? user.login}
				</h3>
				<a
					href={user.html_url}
					target='_blank'
					rel='noopener noreferrer'
					className='inline-flex items-center gap-1.5 text-sm text-[#0071e3] hover:underline underline-offset-2 mt-0.5'
				>
					<FiGithub className='text-base' />@{user.login}
				</a>

				{user.bio && (
					<p className='mt-3 text-muted text-sm md:text-base text-pretty'>
						{user.bio}
					</p>
				)}

				<ul className='mt-4 flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-muted'>
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
								className='hover:text-[var(--color-text)] transition truncate'
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
