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

			<div>
				<SectionStudy />
			</div>

			<div className='algunaClase pt-20'>
				<SectionProjects />
			</div>

			<div className='algunaClase pt-10 justify-center'>
				<div>
					<SectionAbout />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</main>
	);
}
