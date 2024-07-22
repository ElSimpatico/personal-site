import { useCallback, useEffect, useState, useRef, ChangeEvent } from 'react';

import { HeaderView, defaultHeaderView, AdapterFactory } from '@core/adapter';

import { TypeHeaderFields } from '@core/content';

import { ContentServiceFactory, Services } from '@core/services';

import { useLanguage } from '@context';

export function useController() {
    const service = ContentServiceFactory.create(Services.HEADER);
    const adapter = AdapterFactory.create(Services.HEADER);

    const headerRef = useRef<HTMLUiHeaderElement>(null);

    const [view, setView] = useState<HeaderView>(defaultHeaderView);
    const [loading, setLoading] = useState<Boolean>(true);

    const { locales, locale, changeLanguage } = useLanguage();

    const load = useCallback(async (localeCode?: string): Promise<void> => {
        if (!loading) {
            setLoading(true);
        }
        const content = await service.getContent(localeCode);
        const viewModel = await adapter.adapt(content);

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
