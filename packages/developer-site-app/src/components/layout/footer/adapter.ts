import { LinkModel } from '@personal-site/ui-kit-react';

export interface FooterContent {
    logoUrl?: string;
    logoAlt?: string;
    socialLinks?: LinkModel[];
    ownerDescription?: any;
}

export function parseFooterContent(data: any): FooterContent {
    const footerData = (data?.footerCollection?.items || []).find(
        (item: any) => item.slugId === 'footer',
    );
    if (!footerData) {
        return null;
    }

    return {
        logoUrl: footerData?.logo?.url || '',
        logoAlt: footerData?.logo?.description || '',
        socialLinks: footerData?.socialLinksCollection?.items || [],
        ownerDescription: footerData?.ownerDescription?.json,
    };
}
