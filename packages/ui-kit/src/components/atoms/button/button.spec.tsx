import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

let page: SpecPage;
let button: HTMLUiButtonElement;
beforeEach(async () => {
  page = await newSpecPage({
    components: [Button],
    template: () => <ui-button>Text</ui-button>,
  });
  button = page.root as HTMLUiButtonElement;
});

it('should render button', async () => {
  expect(button).toEqualHtml(`
    <ui-button class="primary"><button class="ps-button">Text</button></ui-button>
  `);
});

it('should render button as link', async () => {
  button.linkHref = '#';
  await page.waitForChanges();
  expect(button).toEqualHtml(`
    <ui-button class="primary"><a class="ps-button" href="#">Text</a></ui-button>
  `);
});
