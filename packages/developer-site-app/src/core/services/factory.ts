import { FooterContentService } from './footer-content';
import { HeaderContentService } from './header-content';
import { HomeContentService } from './home-content';
import { LocalesContentService } from './locales-content';
import { AboutContentService } from './about-content';

export enum Services {
    HEADER = 'header',
    FOOTER = 'footer',
    HOME = 'home',
    LOCALES = 'locales',
    ABOUT = 'about',
}

export type ServiceInstanceType =
    | FooterContentService
    | HeaderContentService
    | HomeContentService
    | LocalesContentService
    | AboutContentService;

const ServiceContentMap: Record<Services, ServiceInstanceType> = {
    header: new HeaderContentService(),
    footer: new FooterContentService(),
    home: new HomeContentService(),
    about: new AboutContentService(),
    locales: new LocalesContentService(),
};

export class ContentServiceFactory {
    static create(type: Services.HEADER): HeaderContentService;
    static create(type: Services.FOOTER): FooterContentService;
    static create(type: Services.HOME): HomeContentService;
    static create(type: Services.ABOUT): AboutContentService;
    static create(type: Services.LOCALES): LocalesContentService;
    static create(type: Services): ServiceInstanceType {
        const service = ServiceContentMap[type];
        if (!service) {
            throw new Error(`Unkonw service content type ${type}`);
        }
        return service;
    }
}
