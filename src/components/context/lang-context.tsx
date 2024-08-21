'use client';
import { useRouter } from 'next/router';
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

export type Lang = 'en' | 'es';

interface InitialState {
	lang: Lang;
	setLang: (lang: Lang) => void;
}

const initialState: InitialState = {
	lang: 'en',
	setLang: (lang: Lang) => {},
};

export const LangContext = createContext(initialState);

export const LangContextProvider = ({ children }: { children: ReactNode }) => {
	const [lang, setLang] = useState<Lang>('en');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const userLang = navigator.language.includes('es') ? 'es' : 'en';
			setLang(userLang as Lang);
		}
	}, []);

	return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};
