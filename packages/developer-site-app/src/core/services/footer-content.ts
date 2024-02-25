import { ContentfulClient, TypeFooterFields } from '@core/content';
import { ContentService } from '@core/services/base';

export type FooterContentType = 'footer';

export type FooterSkeleton = {
    contentTypeId: FooterContentType;
    fields: TypeFooterFields;
};

export class FooterContentService extends ContentService<TypeFooterFields> {
    async getContent(localeCode?: string): Promise<TypeFooterFields> {
        const client = ContentfulClient.getInstance();

        const footer = await client.getEntries<FooterSkeleton>({
            content_type: 'footer',
            locale: localeCode,
        });

        if ((footer.items || []).length > 0) {
            return footer.items[0].fields as TypeFooterFields;
        }

        return null;
    }
}
