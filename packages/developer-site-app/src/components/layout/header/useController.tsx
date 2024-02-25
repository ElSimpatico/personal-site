import { useCallback, useEffect, useState, useRef, ChangeEvent } from 'react';

import { HeaderView, defaultHeaderView, AdapterFactory } from '@core/adapter';

import { TypeHeaderFields } from '@core/content';

import { ContentServiceFactory } from '@core/services';

import { useLanguage } from '@context';

export function useController() {
    const service = ContentServiceFactory.create('header');
    const adapter = AdapterFactory.create('header');

    const headerRef = useRef<HTMLUiHeaderElement>(null);

    const [view, setView] = useState<HeaderView>(defaultHeaderView);
    const [loading, setLoading] = useState<Boolean>(true);

    const { locales, locale, changeLanguage } = useLanguage();

    const load = useCallback(async (localeCode?: string): Promise<void> => {
        if (!loading) {
            setLoading(true);
        }
        const content = (await service.getContent(
            localeCode,
        )) as TypeHeaderFields;
        const viewModel = (await adapter.adapt(content)) as HeaderView;

        setView({ ...viewModel });
        setLoading(false);
    }, []);

    const onCloseMenu = useCallback(() => {
        if (headerRef && headerRef.current) {
            headerRef.current.closeMenu();
        }
    }, []);

    const onSelectLanguage = useCallback(
        async (event: ChangeEvent<HTMLSelectElement>): Promise<void> => {
            const code = event.target.value;
            if (code !== locale.code) {
                changeLanguage(code);
            }
        },
        [locale.code],
    );

    useEffect(() => {
        load(locale.code);
    }, [locale.code]);

    return {
        loading,
        view,
        locales,
        locale,
        headerRef,
        onCloseMenu,
        onSelectLanguage,
    };
}
