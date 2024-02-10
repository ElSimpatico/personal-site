import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { Tag } from './tag';

let page: SpecPage;
let tag: HTMLUiTagElement;

beforeEach(async () => {
    page = await newSpecPage({
        components: [Tag],
        template: () => (
            <ui-tag>
                <span>Texto</span>
            </ui-tag>
        ),
    });
    tag = page.root as HTMLUiTagElement;
});

it('should render tag', async () => {
    expect(tag).toEqualHtml(`
    <ui-tag><span>Texto</span></ui-tag>
  `);
});
