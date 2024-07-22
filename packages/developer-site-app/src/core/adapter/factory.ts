import { FooterAdapter } from './footer';
import { HeaderAdapter } from './header';
import { HomeAdapter } from './home';
import { AboutAdapter } from './about';
import { Services } from '@core/services';

export type AdapterType = Exclude<Services, Services.LOCALES>;

export type AdapterInstanceType =
    | FooterAdapter
    | HeaderAdapter
    | HomeAdapter
    | AboutAdapter;

const AdapterMap: Record<AdapterType, AdapterInstanceType> = {
    header: new HeaderAdapter(),
    footer: new FooterAdapter(),
    home: new HomeAdapter(),
    about: new AboutAdapter(),
};

export class AdapterFactory {
    static create(type: Services.HEADER): HeaderAdapter;
    static create(type: Services.FOOTER): FooterAdapter;
    static create(type: Services.HOME): HomeAdapter;
    static create(type: Services.ABOUT): AboutAdapter;
    static create(type: AdapterType) {
        const adapter = AdapterMap[type];
        if (!adapter) {
            throw new Error(`Unknown adapter type ${type}`);
        }
        return adapter;
    }
}
