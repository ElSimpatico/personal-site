import { Locale } from 'contentful';
import { createContext } from './create-context';

export interface Language {
    locale: Locale;
    locales: Locale[];
}

export interface LanguageContext extends Language {
    changeLanguage: (code: string) => void;
}

const [context, useContext] = createContext<LanguageContext>();

export const LanguageContext = context;
export const useLanguage = useContext;
