import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Locale } from 'contentful';

import { Language, LanguageContext } from '@context';
import { ContentServiceFactory, Services } from '@core/services';

export function LanguageProvider({ children }): ReactElement {
    const [language, setLanguage] = useState<Language>(null);

    const initialize = useCallback(async (): Promise<void> => {
        const service = ContentServiceFactory.create(Services.LOCALES);
        const locales = await service.getContent();
        const currentLocale = locales.find((locale) => locale.default);

        setLanguage({ locale: currentLocale, locales });
    }, []);

    const changeLanguage = useCallback(
        async (code: string): Promise<void> => {
            if (code) {
                const locale = language.locales.find(
                    (locale) => locale.code === code,
                );
                setLanguage({ ...language, locale });
            }
        },
        [language],
    );

    useEffect(() => {
        initialize();
    }, []);

    if (!language) {
        return null;
    }

    return (
        <LanguageContext.Provider value={{ ...language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
