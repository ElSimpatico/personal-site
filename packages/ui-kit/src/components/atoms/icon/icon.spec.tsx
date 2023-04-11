import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { IconNames } from '@core/types';
import { Icon } from './icon';

let page: SpecPage;
let icon: HTMLUiIconElement;
beforeEach(async () => {
  page = await newSpecPage({
    components: [Icon],
    template: () => <ui-icon name={IconNames.activity}></ui-icon>,
  });
  icon = page.root as HTMLUiIconElement;
});

it('should render icon', async () => {
  expect(icon).toEqualHtml(`
    <ui-icon class="${IconNames.activity}"></ui-icon>
  `);
});
