import { ContentfulClient } from '../content/client';
import { TypeHeaderFields } from '../content';
import { ContentService } from './base';

export type HeaderContentType = 'header';

export type HeaderSkeleton = {
    contentTypeId: HeaderContentType;
    fields: TypeHeaderFields;
};

export class HeaderContentService extends ContentService<TypeHeaderFields> {
    async getContent(localeCode?: string): Promise<TypeHeaderFields> {
        const client = ContentfulClient.getInstance();

        const header = await client.getEntries<HeaderSkeleton>({
            content_type: 'header',
            locale: localeCode,
        });

        if ((header.items || []).length > 0) {
            return header.items[0].fields as TypeHeaderFields;
        }

        return null;
    }
}
