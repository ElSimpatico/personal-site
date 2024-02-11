import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { ThemeToggle } from './theme-toggle';

let page: SpecPage;
let themeToggle: HTMLUiThemeToggleElement;

beforeEach(async () => {
    page = await newSpecPage({
        components: [ThemeToggle],
        template: () => <ui-theme-toggle></ui-theme-toggle>,
    });
    themeToggle = page.root as HTMLUiThemeToggleElement;
});

it('should render theme toggle', async () => {
    const toggle = themeToggle.querySelector('ui-toggle');
    const icons = themeToggle.querySelectorAll('ui-icon');
    expect(toggle).toBeTruthy();
    expect(icons).toHaveLength(2);
});
