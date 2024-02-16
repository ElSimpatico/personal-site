import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { WAIUtils } from '@core/utils';
import { resizeWindow } from '@core/utils/testing';
import { Accordion } from './accordion';

let page: SpecPage;
let accordion: HTMLUiAccordionElement;

const manageTabMock = jest.fn();

WAIUtils.manageTab = manageTabMock;

beforeEach(async () => {
    manageTabMock.mockClear();

    page = await newSpecPage({
        components: [Accordion],
        template: () => (
            <ui-accordion>
                <h1 slot="header" class="js-header">
                    Header
                </h1>
                <div slot="body" class="js-body">
                    <p>Body content</p>
                </div>
            </ui-accordion>
        ),
    });
    accordion = page.root as HTMLUiAccordionElement;
});

it('should render accordion', async () => {
    expect(manageTabMock).toHaveBeenCalled();

    expect(accordion.querySelector('.js-header')).toEqualHtml(
        `<h1 slot="header" class="js-header">Header</h1>`,
    );
});

it('should expand accordion when click on header', async () => {
    const buttonAccordion = accordion.querySelector('button');
    buttonAccordion.click();

    await page.waitForChanges();

    expect(accordion.expanded).toBeTruthy();
    expect(manageTabMock).toHaveBeenCalledTimes(2);
});

it('should collapse accordion when resize window', async () => {
    accordion.expanded = true;
    await page.waitForChanges();
    expect(accordion.expanded).toBeTruthy();

    resizeWindow(360, 800);
    await page.waitForChanges();
    expect(accordion.expanded).toBeFalsy();
});
