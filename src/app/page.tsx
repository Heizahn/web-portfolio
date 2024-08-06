import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import SectionOne from '@/components/section-1/sectionOne';
import SectionAbout from '@/components/sectionAbout/SectionAbout';
import SectionProjects from '@/components/sectionproyects/SectionProyects';
import SectionStudy from '@/components/sectionStudy/SectionStudy';
import './stylesSection.css';

export default function Home() {
	return (
		<main className='px-4'>
			<Navbar />

			<SectionOne />

			<section id='study' className='pt-28'>
				<SectionStudy />
			</section>

			<section id='projects' className='pt-28'>
				<SectionProjects />
			</section>

			<section id='about' className='h-screen pt-28 flex flex-col justify-between'>
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
