import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { Toggle } from './toggle';

let page: SpecPage;
let toggle: HTMLUiToggleElement;
const onChangeHandler = jest.fn();

beforeEach(async () => {
    onChangeHandler.mockClear();
    page = await newSpecPage({
        components: [Toggle],
        template: () => (
            <ui-toggle
                identifier="test"
                onChangeDetailEvent={onChangeHandler}
            ></ui-toggle>
        ),
    });
    toggle = page.root as HTMLUiToggleElement;
});

it('should render toggle', async () => {
    expect(toggle).toEqualHtml(`
    <ui-toggle>
        <label class="toggle-wrapper" htmlfor="test">
            <input id="test" type="checkbox"></input>
            <div class="toggle-box">
                <div class="toggle-box__circle"></div>
            </div>
        </label>
        <label class="toggle-label" htmlfor="test"></label>
    </ui-toggle>
  `);
});

it('should be changed', async () => {
    const input = toggle.querySelector('input');
    const event = new CustomEvent('change', { composed: true, bubbles: true });
    input.dispatchEvent(event);
    await page.waitForChanges();
    expect(onChangeHandler).toBeCalledTimes(1);
});
