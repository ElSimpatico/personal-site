import { KEYBOARD_KEY } from '@core/enums';
import { WAIUtils } from './web-accessibility';

describe('Web Accessibility utils', () => {
    it('manageCircularFocus prevent default when there are not focusable elements', () => {
        const rootElement = new HTMLElement();
        const event = new KeyboardEvent('keydown', {
            key: KEYBOARD_KEY.TAB,
        });

        const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

        rootElement.querySelectorAll = jest.fn().mockReturnValue([]);

        WAIUtils.manageCircularFocus(rootElement, event);

        expect(preventDefaultSpy).toHaveBeenCalled();
    });
    it('manageCircularFocus focus last element when go back (shift + tab) from first element', () => {
        const rootElement = new HTMLElement();
        const element_one = new HTMLElement();
        const element_two = new HTMLElement();

        const element_twoFocusSpy = jest.spyOn(element_two, 'focus');

        const children = [element_one, element_two];
        const event = new KeyboardEvent('keydown', {
            key: KEYBOARD_KEY.TAB,
            shiftKey: true,
        });

        Object.defineProperty(document, 'activeElement', {
            value: element_one,
            writable: true,
        });

        const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

        rootElement.querySelectorAll = jest.fn().mockReturnValue([...children]);

        WAIUtils.manageCircularFocus(rootElement, event);

        expect(preventDefaultSpy).toHaveBeenCalled();
        expect(element_twoFocusSpy).toHaveBeenCalled();
    });
    it('manageCircularFocus focus first element when go next (tab) from last element', () => {
        const rootElement = new HTMLElement();
        const element_one = new HTMLElement();
        const element_two = new HTMLElement();

        const element_oneFocusSpy = jest.spyOn(element_one, 'focus');

        const children = [element_one, element_two];
        const event = new KeyboardEvent('keydown', {
            key: KEYBOARD_KEY.TAB,
            shiftKey: false,
        });

        Object.defineProperty(document, 'activeElement', {
            value: element_two,
            writable: true,
        });

        const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

        rootElement.querySelectorAll = jest.fn().mockReturnValue([...children]);

        WAIUtils.manageCircularFocus(rootElement, event);

        expect(preventDefaultSpy).toHaveBeenCalled();
        expect(element_oneFocusSpy).toHaveBeenCalled();
    });

    it('manageTab should manage aria-hidden and tabindex attributes', () => {
        const rootElement = new HTMLElement();

        const childElement = new HTMLElement();

        rootElement.querySelectorAll = jest
            .fn()
            .mockReturnValue([childElement]);

        WAIUtils.manageTab(rootElement, false);

        expect(childElement.getAttribute('aria-hidden')).toBeTruthy();
        expect(childElement.getAttribute('tabindex')).toEqual('-1');

        WAIUtils.manageTab(rootElement, true);

        expect(childElement.hasAttribute('aria-hidden')).toBeFalsy();
        expect(childElement.hasAttribute('tabindex')).toBeFalsy();
    });
});
