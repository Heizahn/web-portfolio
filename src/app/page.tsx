import Footer from '@/components/Footer/Footer';
import Lang from '@/components/lang/lang';
import Navbar from '@/components/Navbar/Navbar';
import ThemeToggle from '@/components/theme/ThemeToggle';

import SectionOne from '@/components/section-1/sectionOne';
import SectionAbout from '@/components/sectionAbout/SectionAbout';
import SectionProjects from '@/components/sectionproyects/SectionProyects';
import SectionStudy from '@/components/sectionStudy/SectionStudy';
import GitHubSection from '@/components/sectionGithub/GitHubSection';
import ContactSection from '@/components/Contact/ContactSection';

export default function Home() {
	return (
		<main id='main-content' className='px-4'>
			<Lang />
			<div className='fixed top-4 right-4 z-50 md:top-3 md:right-6'>
				<ThemeToggle />
			</div>
			<SectionOne />

			<Navbar />

			<section id='study' className='mb-10 scroll-mt-24'>
				<SectionStudy />
			</section>
			<section id='github' className='mb-10 scroll-mt-24'>
				<GitHubSection />
			</section>
			<section id='projects' className='mb-10 scroll-mt-24'>
				<SectionProjects />
			</section>
			<section id='about' className='mb-10 scroll-mt-24'>
				<SectionAbout />
			</section>
			<section id='contact' className='mb-10 scroll-mt-24'>
				<ContactSection />
			</section>
			<Footer />
		</main>
	);
}
