import { ContentfulClient, TypeHomeFields } from '@core/content';
import { ContentService } from '@core/services/base';

export type HomeContentType = 'home';

export type HomeSkeleton = {
    contentTypeId: HomeContentType;
    fields: TypeHomeFields;
};

export class HomeContentService extends ContentService<TypeHomeFields> {
    async getContent(localeCode?: string): Promise<TypeHomeFields> {
        const client = ContentfulClient.getInstance();

        const home = await client.getEntries<HomeSkeleton>({
            content_type: 'home',
            locale: localeCode,
            include: 2,
        });

        if ((home.items || []).length > 0) {
            return home.items[0].fields as TypeHomeFields;
        }

        return null;
    }
}
