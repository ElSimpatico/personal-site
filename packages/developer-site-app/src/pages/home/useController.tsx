import React, { useCallback, useEffect, useState, useMemo } from 'react';

import { MARKS } from '@contentful/rich-text-types';

import { HomeView, defaultHomeView, AdapterFactory } from '@core/adapter';
import { TypeHomeFields } from '@core/content';
import { ContentServiceFactory } from '@core/services';

import { useLanguage } from '@context';

export function useController() {
    const service = ContentServiceFactory.create('home');
    const adapter = AdapterFactory.create('home');

    const [view, setView] = useState<HomeView>(defaultHomeView);
    const [loading, setLoading] = useState<Boolean>(true);

    const { locale } = useLanguage();

    const descriptionOptions = useMemo(() => {
        return {
            renderMark: {
                [MARKS.BOLD]: (text: any) => (
                    <span className="highlighted-text">{text}</span>
                ),
            },
        };
    }, []);

    const load = useCallback(async (localeCode: string): Promise<void> => {
        if (!loading) {
            setLoading(true);
        }
        const content = (await service.getContent(
            localeCode,
        )) as TypeHomeFields;
        const viewModel = adapter.adapt(content) as HomeView;

        setView({ ...viewModel });
        setLoading(false);
    }, []);

    useEffect(() => {
        load(locale.code);
    }, [locale.code]);

    return {
        descriptionOptions,
        loading,
        view,
    };
}
