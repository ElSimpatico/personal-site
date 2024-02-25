import { LinkModel } from '@personal-site/ui-kit-react';

import { Adapter } from '@core/adapter/base';
import { mapToLinkModelCollection } from '@core/adapter';
import { TypeFooterFields } from '@core/content';

export interface FooterView {
    logoUrl?: string;
    logoAlt?: string;
    socialLinks?: LinkModel[];
    ownerDescription?: any;
}

export const defaulFooterView: FooterView = {
    logoAlt: '',
    logoUrl: '',
};

export class FooterAdapter extends Adapter<TypeFooterFields, FooterView> {
    adapt(origin: TypeFooterFields): FooterView {
        return {
            logoUrl: origin.logo.fields.file.url as string,
            logoAlt: origin.logo.fields.description as string,
            ownerDescription: origin.ownerDescription,
            socialLinks: mapToLinkModelCollection(origin.socialLinks),
        };
    }
}
