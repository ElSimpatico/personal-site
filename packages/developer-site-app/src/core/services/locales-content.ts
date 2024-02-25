import { Locale } from 'contentful';

import { ContentfulClient } from '@core/content';

import { ContentService } from '@core/services/base';

export class LocalesContentService extends ContentService<Locale[]> {
    async getContent(): Promise<Locale[]> {
        const client = ContentfulClient.getInstance();

        const locales = await client.getLocales();

        return locales ? locales.items : [];
    }
}
