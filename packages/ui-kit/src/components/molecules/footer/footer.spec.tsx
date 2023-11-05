import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { Footer } from './footer';
import { linksSocial } from '../header/mocks';

let page: SpecPage;
let footer: HTMLUiFooterElement;

beforeEach(async () => {
    page = await newSpecPage({
        components: [Footer],
        template: () => <ui-footer></ui-footer>,
    });
    footer = page.root as HTMLUiFooterElement;
});

it('should render footer', async () => {
    expect(footer.querySelector('footer')).toBeTruthy();
});

it('should render footer logo', async () => {
    footer.logoUrl = 'url';
    await page.waitForChanges();
    expect(footer.querySelector('div[class="section__logo"]')).toBeTruthy();
});

it('should render social icon list', async () => {
    footer.dataLinksSocial = JSON.stringify(linksSocial);
    await page.waitForChanges();
    expect(footer.querySelector('ul[class="section__list"]')).toBeTruthy();
});
