import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { Header } from './header';
import { links, linksSocial } from './mocks';

let page: SpecPage;
let header: HTMLUiHeaderElement;
const onPressHandler = jest.fn();

beforeEach(async () => {
    onPressHandler.mockClear();
    page = await newSpecPage({
        components: [Header],
        template: () => <ui-header></ui-header>,
    });
    header = page.root as HTMLUiHeaderElement;
});

it('should render header', async () => {
    expect(header.querySelector('header')).toBeTruthy();
});

it('should render logo', async () => {
    header.logoUrl = 'url';
    await page.waitForChanges();
    expect(header.querySelector('div[class="header-logo"]')).toBeTruthy();
});

it('should render link list', async () => {
    header.dataLinks = JSON.stringify(links);
    await page.waitForChanges();
    expect(
        header.querySelector('nav ul[class="navigation-list"]'),
    ).toBeTruthy();
});

it('should render icon link list', async () => {
    header.dataLinksSocial = JSON.stringify(linksSocial);
    await page.waitForChanges();
    expect(
        header.querySelector('nav ul[class="navigation-icon-list"]'),
    ).toBeTruthy();
});
