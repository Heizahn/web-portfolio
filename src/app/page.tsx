'use client';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

import SectionOne from '@/components/section-1/sectionOne';
import SectionAbout from '@/components/sectionAbout/SectionAbout';
import SectionProjects from '@/components/sectionproyects/SectionProyects';
import SectionStudy from '@/components/sectionStudy/SectionStudy';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Home() {
	const { ref: studyRef, inView: studyInView } = useInView({
		initialInView: false,
		threshold: 0.5,
	});
	const { ref: projectsRef, inView: projectsInView } = useInView({
		initialInView: false,
		threshold: 0.5,
	});
	const { ref: aboutRef, inView: aboutInView } = useInView({
		initialInView: false,
		threshold: 0.5,
	});

	const [elementInView, setElementInView] = useState('');

	useEffect(() => {
		if (aboutInView) {
			console.log('ScrollY', scrollY);

			setElementInView('about');
		} else if (projectsInView) {
			console.log('ScrollY', scrollY);

			setElementInView('projects');
		} else if (studyInView) {
			console.log('ScrollY', scrollY);

			setElementInView('study');
		} else {
			if (scrollY < 700) {
				console.log('setInterval', studyInView, projectsInView, aboutInView);
				console.log('ScrollY', scrollY);
				setElementInView('');
			}
		}
	}, [aboutInView, projectsInView, studyInView]);

	return (
		<main>
			<div className='px-4 z-50'>
				<SectionOne />
			</div>
			<Navbar inView={elementInView} />

			<div className='px-4'>
				<section ref={studyRef} id='study'>
					<SectionStudy />
				</section>
				<section ref={projectsRef} id='projects' className='mt-16'>
					<SectionProjects />
				</section>
				<section
					ref={aboutRef}
					id='about'
					className='pt-16 md:h-screen md:flex md:flex-col md:justify-between'
				>
					<div>
						<SectionAbout />
					</div>
					<div>
						<Footer />
					</div>
				</section>
			</div>
		</main>
	);
}
