import React, { useCallback, useEffect, useState, useMemo } from 'react';

import { MARKS } from '@contentful/rich-text-types';

import { FooterView, defaulFooterView, AdapterFactory } from '@core/adapter';
import { TypeFooterFields } from '@core/content';
import { ContentServiceFactory, Services } from '@core/services';

import { useLanguage } from '@context';

export function useController() {
    const service = ContentServiceFactory.create(Services.FOOTER);
    const adapter = AdapterFactory.create(Services.FOOTER);

    const [view, setView] = useState<FooterView>(defaulFooterView);
    const [loading, setLoading] = useState<Boolean>(true);

    const { locale } = useLanguage();

    const ownerOptions = useMemo(() => {
        return {
            renderMark: {
                [MARKS.BOLD]: (text) => (
                    <span className="highlighted-text">{text}</span>
                ),
            },
        };
    }, []);

    const load = useCallback(async (localeCode?: string): Promise<void> => {
        if (!loading) {
            setLoading(true);
        }
        const content = await service.getContent(localeCode);
        const viewModel = adapter.adapt(content);
        setView({ ...viewModel });
        setLoading(false);
    }, []);

    useEffect(() => {
        load(locale.code);
    }, [locale.code]);

    return {
        loading,
        view,
        ownerOptions,
    };
}
