import { FooterContentService } from './footer-content';
import { HeaderContentService } from './header-content';
import { HomeContentService } from './home-content';
import { LocalesContentService } from './locales-content';

type ServiceType = 'footer' | 'header' | 'home' | 'locales';

type ServiceInstanceType =
    | FooterContentService
    | HeaderContentService
    | HomeContentService
    | LocalesContentService;

export class ContentServiceFactory {
    static create(type: ServiceType): ServiceInstanceType {
        switch (type) {
            case 'footer':
                return new FooterContentService();
            case 'header':
                return new HeaderContentService();
            case 'home':
                return new HomeContentService();
            case 'locales':
                return new LocalesContentService();
            default:
                return null;
        }
    }
}
