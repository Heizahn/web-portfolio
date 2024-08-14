import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

import SectionOne from '@/components/section-1/sectionOne';
import SectionAbout from '@/components/sectionAbout/SectionAbout';
import SectionProjects from '@/components/sectionproyects/SectionProyects';
import SectionStudy from '@/components/sectionStudy/SectionStudy';

export default function Home() {
	return (
		<main>
			<div className='px-4 z-50'>
				<SectionOne />
			</div>
			<Navbar />

			<div className='px-4'>
				<section id='study'>
					<SectionStudy />
				</section>
				<section id='projects'>
					<SectionProjects />
				</section>
				<section
					id='about'
					className='pt-20 md:h-screen md:flex md:flex-col md:justify-between'
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
