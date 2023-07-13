import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { Header } from './header';
import { linksSocial } from './mocks';
import { BreakpointSize } from '@core/utils';
import { resizeWindow } from '@core/utils/testing';

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

it('should render icon link list', async () => {
    header.dataLinksSocial = JSON.stringify(linksSocial);
    await page.waitForChanges();
    expect(
        header.querySelector('nav ul[class="navigation-icon-list"]'),
    ).toBeTruthy();
});

it('should enable dark mode', async () => {
    const toggle = header.querySelector('ui-toggle[identifier="theme-switch"]');
    const event = new CustomEvent('changeDetailEvent', {
        composed: true,
        bubbles: true,
    });
    toggle.dispatchEvent(event);
    page.waitForChanges();
    expect(document.body.classList.contains('theme-dark')).toBeTruthy();
});

it('should render menu button in mobile viewport', async () => {
    resizeWindow(BreakpointSize.S, 800);
    await page.waitForChanges();
    const menuButton = header.querySelector('.menu-button');

    expect(menuButton).toBeTruthy();
});
