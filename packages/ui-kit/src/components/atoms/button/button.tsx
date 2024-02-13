import {
    Component,
    h,
    ComponentInterface,
    JSX,
    Host,
    Prop,
    Element,
    Event,
    EventEmitter,
    Method,
} from '@stencil/core';
import { ButtonVariantType } from './types';
import { ClassType } from '@core/types';

@Component({
    tag: 'ui-button',
    styleUrl: 'button.scss',
    shadow: false,
    scoped: true,
})
export class Button implements ComponentInterface {
    @Element() hostElement: HTMLUiButtonElement;

    /** Specifies the alternative text for screen readers */
    @Prop() readonly accessibleLabel?: string;

    /** Specifies if button is disabled */
    @Prop() readonly disabled?: boolean = false;

    /** Specifies the link reference. If the property is filled the `a` element is rendered */
    @Prop() readonly linkHref?: string;

    /** Specifies the link target. */
    @Prop() readonly linkTarget?: string;

    /** Specifies the button variant */
    @Prop() readonly variant?: ButtonVariantType = 'primary';

    /** Emitted when the button is pressed */
    @Event() press: EventEmitter<void>;

    /** Focus in native element */
    @Method()
    focusNativeElement(): Promise<void> {
        const element = this.hostElement.querySelector(
            '.ps-button',
        ) as HTMLElement;

        element && element.focus();

        return Promise.resolve();
    }

    private onClickHandler = (): void => {
        this.press.emit();
    };

    private classNames = (): ClassType => {
        return {
            primary: this.variant === 'primary',
            secondary: this.variant === 'secondary',
            tertiary: this.variant === 'tertiary',
            disabled: this.disabled,
        };
    };

    render(): JSX.Element {
        return (
            <Host class={this.classNames()}>
                {this.linkHref ? (
                    <a
                        class="ps-button"
                        href={this.linkHref}
                        target={this.linkTarget}
                        aria-label={this.accessibleLabel}
                        onClick={this.onClickHandler}
                    >
                        <slot></slot>
                    </a>
                ) : (
                    <button
                        class="ps-button"
                        disabled={this.disabled}
                        aria-label={this.accessibleLabel}
                        onClick={this.onClickHandler}
                    >
                        <slot />
                    </button>
                )}
            </Host>
        );
    }
}
