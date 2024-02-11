import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { Header } from './header';
import { linksSocial } from './mocks';
import { BreakpointSize } from '@core/utils';
import { resizeWindow } from '@core/utils/testing';

let page: SpecPage;
let header: HTMLUiHeaderElement;

beforeEach(async () => {
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

it('should render icon link list', async () => {
    header.dataLinksSocial = JSON.stringify(linksSocial);
    await page.waitForChanges();
    expect(
        header.querySelector('nav ul[class="navigation-icon-list"]'),
    ).toBeTruthy();
});

it('should enable dark mode', async () => {
    header.darkMode = true;
    await page.waitForChanges();
    const themeToggle = header.querySelector('ui-theme-toggle');
    expect(themeToggle.hasAttribute('darkMode')).toBeTruthy();
});

it('should render menu button in mobile viewport', async () => {
    resizeWindow(BreakpointSize.S, 800);
    await page.waitForChanges();
    const menuButton = header.querySelector('.menu-button');

    expect(menuButton).toBeTruthy();
});
