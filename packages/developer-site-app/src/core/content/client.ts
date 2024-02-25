import { createClient, ContentfulClientApi, Locale } from 'contentful';

export class ContentfulClient {
    private static client: ContentfulClientApi<undefined>;

    static getInstance(): ContentfulClientApi<undefined> {
        if (!this.client) {
            this.initialize();
        }

        return this.client;
    }

    private static initialize(): void {
        this.client = createClient({
            space: process.env.CONTENTFULL_SPACE,
            environment: process.env.CONTENTFULL_ENVIRONMENT,
            accessToken: process.env.CONTENTFULL_ACCESS_TOKEN,
        });
    }
}
