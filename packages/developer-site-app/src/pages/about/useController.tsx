import { useCallback, useEffect, useState } from 'react';
import { ContentServiceFactory, Services } from '@core/services';
import { useLanguage } from '@context';
import { TypeAboutFields } from '@core/content';
import { AboutView, AdapterFactory, defaultAboutView } from '@core/adapter';

export function useController() {
    const service = ContentServiceFactory.create(Services.ABOUT);
    const adapter = AdapterFactory.create(Services.ABOUT);

    const [loading, setLoading] = useState<Boolean>(true);
    const [view, setView] = useState<AboutView>(defaultAboutView);

    const { locale } = useLanguage();

    const load = useCallback(async (localeCode: string): Promise<void> => {
        if (!loading) {
            setLoading(true);
        }
        const content = await service.getContent(localeCode);

        const viewModel = adapter.adapt(content);

        setView({ ...viewModel });
        setLoading(false);
    }, []);

    const onDownloadCurriculum = useCallback(async () => {
        try {
            const response = await fetch(view.curriculum.fileUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const blob = await response.blob();

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = view.curriculum.filename;
            link.target = '_self';

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error('Error al descargar el archivo:', error);
        }
    }, [view]);

    useEffect(() => {
        load(locale.code);
    }, [locale.code]);

    return {
        loading,
        view,
        onDownloadCurriculum,
    };
}
