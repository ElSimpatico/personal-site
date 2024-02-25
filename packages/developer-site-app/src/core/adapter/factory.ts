import { FooterAdapter } from './footer';
import { HeaderAdapter } from './header';
import { HomeAdapter } from './home';

export type AdapterType = 'footer' | 'header' | 'home';

export type AdapterInstanceType = FooterAdapter | HeaderAdapter | HomeAdapter;

export class AdapterFactory {
    static create(type: AdapterType): AdapterInstanceType {
        switch (type) {
            case 'footer':
                return new FooterAdapter();
            case 'header':
                return new HeaderAdapter();
            case 'home':
                return new HomeAdapter();
            default:
                return null;
        }
    }
}
