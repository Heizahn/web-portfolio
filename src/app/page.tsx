import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import SectionOne from '@/components/section-1/sectionOne';
import SectionAbout from '@/components/sectionAbout/SectionAbout';
import SectionProjects from '@/components/sectionproyects/SectionProyects';
import SectionStudy from '@/components/sectionStudy/SectionStudy';

export default function Home() {
	return (
		<main className='px-4'>
			<SectionOne />

			<Navbar />

			<SectionStudy />

			<SectionProjects />

			<section
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
		</main>
	);
}
