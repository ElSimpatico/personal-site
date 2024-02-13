import { FocusableElementSelector } from '@core/constants';

export class WAIUtils {
    static manageCircularFocus(
        rootElement: HTMLElement,
        event: KeyboardEvent,
    ): void {
        const focusable = rootElement.querySelectorAll(
            FocusableElementSelector,
        );
        if (focusable.length === 0) {
            event.preventDefault();
        } else {
            const firstFocusableElement: HTMLElement =
                focusable[0] as HTMLElement;
            const lastFocusableElement: HTMLElement = focusable[
                focusable.length - 1
            ] as HTMLElement;

            const backwardTab =
                event.shiftKey &&
                document.activeElement === firstFocusableElement;
            const forwardTab =
                !event.shiftKey &&
                document.activeElement === lastFocusableElement;

            if (backwardTab) {
                event.preventDefault();
                lastFocusableElement.focus();
            } else if (forwardTab) {
                event.preventDefault();
                firstFocusableElement.focus();
            }
        }
    }

    static manageTab(rootElement: HTMLElement, condition: boolean): void {
        const focusable = rootElement.querySelectorAll(
            FocusableElementSelector,
        );
        focusable.forEach((element) => {
            if (condition) {
                element.removeAttribute('aria-hidden');
                element.removeAttribute('tabindex');
            } else {
                element.setAttribute('aria-hidden', 'true');
                element.setAttribute('tabindex', '-1');
            }
        });
    }
}
