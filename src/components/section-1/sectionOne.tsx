import ContactLinkedIn from '@/components/Contact/contact_linkedIn';
import Card from './card';

export default function SectionOne() {
	return (
		<section className='py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
			<div className='max-w-xl'>
				<div className='flex gap-4 mb-4'>
					<ContactLinkedIn />
				</div>
				<Card />
			</div>
		</section>
	);
}
