import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { Card } from './card';

let page: SpecPage;
let card: HTMLUiCardElement;

beforeEach(async () => {
    page = await newSpecPage({
        components: [Card],
        template: () => (
            <ui-card imageUrl="image-url" imageAlt="image-alt">
                <div slot="card-body">
                    <h2>Title</h2>
                    <p>Description</p>
                </div>
            </ui-card>
        ),
    });
    card = page.root as HTMLUiCardElement;
});

it('should render card', async () => {
    expect(card).toEqualHtml(`
    <ui-card>
        <div class="card-container">
            <div class="card-image">
                <img src="image-url" alt="image-alt"></img>
            </div>
            <div class="card-content">
                <div slot="card-body">
                    <h2>Title</h2>
                    <p>Description</p>
                </div>
            </div>
        </div>
    </ui-card>
  `);
});

it('should render horizontal card', async () => {
    card.horizontal = true;
    await page.waitForChanges();
    expect(card).toHaveClasses(['horizontal']);
});
