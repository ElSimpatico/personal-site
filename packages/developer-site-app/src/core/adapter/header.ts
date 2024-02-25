import { LinkModel } from '@personal-site/ui-kit-react';

import { mapToLinkModelCollection } from '@core/adapter';
import { TypeHeaderFields } from '@core/content';
import { Adapter } from './base';

export interface HeaderView {
    logoUrl?: string;
    logoAlt?: string;
    darkMode?: boolean;
    darkModeLabel?: string;
    darkModeAccessibleLabel?: string;
    mainLinks?: LinkModel[];
    socialLinks?: LinkModel[];
}

export const defaultHeaderView: HeaderView = {
    darkMode: true,
    darkModeAccessibleLabel: '',
    darkModeLabel: '',
    logoAlt: '',
    logoUrl: '',
    mainLinks: [],
    socialLinks: [],
};

export class HeaderAdapter extends Adapter<TypeHeaderFields, HeaderView> {
    adapt(origin: TypeHeaderFields): HeaderView {
        return {
            darkMode: origin.darkMode,
            darkModeLabel: origin.darkModeLabel,
            darkModeAccessibleLabel: origin.darkModeAccessibleLabel,
            logoUrl: origin.logo.fields.file.url as string,
            logoAlt: origin.logo.fields.description as string,
            mainLinks: mapToLinkModelCollection(origin.mainLinks),
            socialLinks: mapToLinkModelCollection(origin.socialLinks),
        };
    }
}
