'use client';

import { MAILTO } from '@/env/env';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { inView, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import data from './data.json';
import useLang from '../hooks/useLang';

export default function Navbar() {
	const [scrollY, setScrollY] = useState(0);
	const [inViewStudy, setInViewStudy] = useState(false);
	const [inViewProjects, setInViewProjects] = useState(false);
	const [inViewAbout, setInViewAbout] = useState(false);
	const { lang } = useLang();

	useMotionValueEvent(useScroll().scrollY, 'change', (latest) => {
		setScrollY(latest);
	});
	useEffect(() => {
		inView('#study', (e) => {
			let positionY = e.boundingClientRect.y;

			if (positionY < 50.0) {
				setInViewStudy(true);
				setInViewProjects(false);
				setInViewAbout(false);
			} else {
				setInViewStudy(false);
			}
		});

		inView('#projects', (e) => {
			let positionY = e.boundingClientRect.y;

			if (positionY < 50.0) {
				setInViewStudy(false);
				setInViewProjects(true);
				setInViewAbout(false);
			} else {
				setInViewProjects(false);
			}
		});

		inView('#about', (e) => {
			let positionY = e.boundingClientRect.y;
			if (positionY < 50.0) {
				setInViewStudy(false);
				setInViewProjects(false);
				setInViewAbout(true);
			} else {
				setInViewAbout(false);
			}
		});
	}, [scrollY]);

	return (
		<header className={`sticky top-[-1px] z-10 w-full`}>
			<div
				className={`w-full mx-auto container lg:max-w-4xl md:max-w-2xl ${
					(inViewStudy || inViewProjects || inViewAbout) && 'transition duration-300 bg-[rgb(5,5,5)] rounded-lg'
				} `}
			>
				<nav className='flex w-full mx-auto text-base md:text-lg font-semibold text-gray-200 justify-between items-center max-w-4xl  md:max-w-4xl'>
					<Link
						href='/#study'
						className={`px-2 py-1 md:px-4 md:py-2 rounded-lg ${
							inViewStudy && 'transition duration-300 bg-purple-700 '
						}`}
					>
						{data[lang].study}
					</Link>

					<Link
						href='/#projects'
						className={`px-2 py-1 md:px-4 md:py-2 rounded-lg ${
							inViewProjects && 'transition duration-300 bg-purple-700 '
						}`}
					>
						{data[lang].projects}
					</Link>

					<Link
						href='/#about'
						className={`px-2 py-1 md:px-4 md:py-2 rounded-lg ${
							inViewAbout && 'transition duration-300 bg-purple-700 '
						}`}
					>
						{data[lang].about}
					</Link>

					<a href={MAILTO} className='text-2xl md:flex items-center gap-2 px-2 py-1 md:px-4 md:py-2'>
						<MdEmail />
						<span className='hidden md:block md:text-lg'>{data[lang].contact}</span>
					</a>
				</nav>
			</div>
		</header>
	);
}
