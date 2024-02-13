import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { linksSocial } from './mocks';
import { BreakpointSize } from '@core/utils';
import { resizeWindow } from '@core/utils/testing';

import * as web from '@core/utils/web-accessibility';
import { KEYBOARD_KEY } from '@core/enums';

import { Header } from './header';

const manageTabMock = jest.fn();
const manageCircularFocus = jest.fn();
const focusNativeElementMock = jest.fn();

web.WAIUtils.manageTab = manageTabMock;
web.WAIUtils.manageCircularFocus = manageCircularFocus;

let page: SpecPage;
let header: HTMLUiHeaderElement;

describe('Header component', () => {
    beforeEach(async () => {
        manageTabMock.mockClear();
        manageCircularFocus.mockClear();
        focusNativeElementMock.mockClear();

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
        let menuButton = header.querySelector('.menu-button');

        expect(menuButton).toBeFalsy();

        resizeWindow(BreakpointSize.S, 800);
        await page.waitForChanges();
        menuButton = header.querySelector('.menu-button');

        expect(menuButton).toBeTruthy();
    });

    it('should expand menu when click them menu button in mobile viewport', async () => {
        resizeWindow(BreakpointSize.S, 800);
        await page.waitForChanges();

        const menuButton = header.querySelector(
            '.menu-button',
        ) as HTMLUiButtonElement;
        const event = new CustomEvent('press', {
            composed: true,
            bubbles: true,
        });
        menuButton.dispatchEvent(event);

        await page.waitForChanges();

        expect(menuButton).toBeTruthy();
        expect(header.expanded).toBeTruthy();
        expect(header.classList.contains('expanded')).toBeTruthy();
    });

    it('should manage focus when keydown tab is pressed in menu expanded', async () => {
        resizeWindow(BreakpointSize.S, 800);
        header.expanded = true;

        await page.waitForChanges();

        const event = new KeyboardEvent('keydown', { key: KEYBOARD_KEY.TAB });
        page.doc.dispatchEvent(event);

        await page.waitForChanges();

        expect(manageCircularFocus).toBeCalled();
    });

    it('should close menu mobile when keydown escape is pressed', async () => {
        resizeWindow(BreakpointSize.S, 800);
        header.expanded = true;

        await page.waitForChanges();

        const menuButton = header.querySelector(
            '.menu-button',
        ) as HTMLUiButtonElement;
        menuButton.focusNativeElement = focusNativeElementMock;

        const event = new KeyboardEvent('keydown', {
            key: KEYBOARD_KEY.ESCAPE,
        });
        page.doc.dispatchEvent(event);

        await page.waitForChanges();

        expect(header.expanded).toBeFalsy();
        expect(focusNativeElementMock).toBeCalled();
    });

    it('should close menu mobile when click out nav', async () => {
        resizeWindow(BreakpointSize.S, 800);
        header.expanded = true;

        await page.waitForChanges();

        const menuButton = header.querySelector(
            '.menu-button',
        ) as HTMLUiButtonElement;
        menuButton.focusNativeElement = focusNativeElementMock;

        const event = new Event('click', { composed: true, bubbles: true });
        page.doc.dispatchEvent(event);

        await page.waitForChanges();
        expect(header.expanded).toBeFalsy();
    });
});
