import Footer from '@/components/Footer/Footer';
import Navbar, { NavbarMobile } from '@/components/Navbar/Navbar';
import SectionOne from '@/components/section-1/sectionOne';
import SectionAbout from '@/components/sectionAbout/SectionAbout';
import SectionProjects from '@/components/sectionproyects/SectionProyects';
import SectionStudy from '@/components/sectionStudy/SectionStudy';
import './stylesSection.css';

export default function Home() {
	return (
		<main className=''>
			<Navbar />

			<div className='px-4'>
				<SectionOne />
			</div>

			<NavbarMobile />

			<div className='px-4'>
				<section id='study' className='pt-16  md:pt-16'>
					<SectionStudy />
				</section>

				<section id='projects' className='pt-16 md:pt-16'>
					<SectionProjects />
				</section>

				<section
					id='about'
					className='pt-16 md:h-screen md:flex md:flex-col md:justify-between   md:pt-16'
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
