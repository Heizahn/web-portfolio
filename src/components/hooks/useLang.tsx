'use client';

import { useContext } from 'react';
import { LangContext } from '../context/lang-context';

export default function useLang() {
	const context = useContext(LangContext);

	if (!context) {
		throw new Error('useLang must be used within a LangContextProvider');
	}

	return context;
}
