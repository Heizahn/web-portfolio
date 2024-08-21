'use client';
import data from './data.json';
import useLang from '../hooks/useLang';
import { StudyIcon } from '../icons/icons';

export default function Title() {
	const { lang } = useLang();
	return (
		<h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white'>
			<StudyIcon />
			{data[lang].title}
		</h2>
	);
}
