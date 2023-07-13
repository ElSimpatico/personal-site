import { LinkModel } from '@personal-site/ui-kit-react';

export interface HeaderContent {
    logoUrl?: string;
    logoAlt?: string;
    darkMode?: boolean;
    darkModeLabel?: string;
    darkModeAccessibleLabel?: string;
    mainLinks?: LinkModel[];
    socialLinks?: LinkModel[];
}

export function parseHeaderContent(data: any): HeaderContent {
    const headerData = (data?.headerCollection?.items || []).find(
        (item: any) => item.slugId === 'header',
    );
    if (!headerData) {
        return null;
    }

    return {
        logoUrl: headerData?.logo?.url || '',
        logoAlt: headerData?.logo?.description || '',
        darkMode: headerData.darkMode,
        darkModeLabel: headerData.darkModeLabel || '',
        darkModeAccessibleLabel: headerData.darkModeAccessibleLabel || '',
        mainLinks: headerData?.mainLinksCollection?.items || [],
        socialLinks: headerData?.socialLinksCollection?.items || [],
    };
}
