import { ContentfulClient, TypeAboutFields } from '@core/content';
import { ContentService } from '@core/services/base';

type AboutContentType = 'about';

type AboutSkeleton = {
    contentTypeId: AboutContentType;
    fields: TypeAboutFields;
};

export class AboutContentService extends ContentService<TypeAboutFields> {
    async getContent(localeCode?: string): Promise<TypeAboutFields> {
        const client = ContentfulClient.getInstance();

        const about = await client.getEntries<AboutSkeleton>({
            content_type: 'about',
            locale: localeCode,
        });

        if ((about.items || []).length > 0) {
            return about.items[0].fields as TypeAboutFields;
        }

        return null;
    }
}
