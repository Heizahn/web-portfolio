'use client';
import ContactLinkedIn from '@/components/Contact/contact_linkedIn';
import Card from './card';
import ScrollIndicator from './ScrollIndicator';
import data from './data.json';
import useLang from '../hooks/useLang';
import { motion } from 'framer-motion';

export default function SectionOne() {
	const { lang } = useLang();
	return (
		<section className='relative py-16 md:py-32 lg:py-40 min-h-screen md:min-h-[90vh] flex items-center scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
			<div className='max-w-2xl w-full'>
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='flex gap-4 mb-6'
				>
					<ContactLinkedIn />
				</motion.div>
				<Card />
			</div>
			<ScrollIndicator label={data[lang].scrollHint} />
		</section>
	);
}
