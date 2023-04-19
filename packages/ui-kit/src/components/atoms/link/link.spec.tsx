import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { Link } from './link';

let page: SpecPage;
let link: HTMLUiLinkElement;
const onPressHandler = jest.fn();

beforeEach(async () => {
    onPressHandler.mockClear();
    page = await newSpecPage({
        components: [Link],
        template: () => <ui-link onPress={onPressHandler}>Text</ui-link>,
    });
    link = page.root as HTMLUiLinkElement;
});

it('should render link', async () => {
    expect(link).toEqualHtml(`
    <ui-link><a class="ps-link">Text</a></ui-link>
  `);
});

it('should be pressed', async () => {
    const nativeAnchor = link.querySelector('a');
    nativeAnchor.click();

    await page.waitForChanges();

    expect(onPressHandler).toBeCalledTimes(1);
});

it('should be pressed with smooth effect', async () => {
    link.url = '#id';
    link.smooth = true;
    const nativeAnchor = link.querySelector('a');
    nativeAnchor.click();

    await page.waitForChanges();

    expect(onPressHandler).toBeCalledTimes(1);
});
