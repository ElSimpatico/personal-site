import {
    Component,
    Prop,
    h,
    JSX,
    ComponentInterface,
    Host,
    Event,
    EventEmitter,
} from '@stencil/core';
import { CheckDetailEvent } from '@core/types';

@Component({
    tag: 'ui-toggle',
    styleUrl: 'toggle.scss',
    shadow: false,
    scoped: true,
})
export class Toggle implements ComponentInterface {
    /** Specifies if input is checked */
    @Prop() readonly checked?: boolean = false;

    /** Specifies if input is disabled */
    @Prop() readonly disabled?: boolean = false;

    /** Property description */
    @Prop() readonly identifier?: string;

    /** Specifies the input name */
    @Prop() readonly name?: string;

    /** Specifies the input value */
    @Prop() readonly value?: string;

    /** Specifies an alternative text for toggle */
    @Prop() readonly accessibleLabel?: string;

    /** Emitted when the toggle change */
    @Event() changeDetailEvent: EventEmitter<CheckDetailEvent>;

    private onChangeHandler = (event: Event): void => {
        const input = event.target as HTMLInputElement;
        this.changeDetailEvent.emit({
            checked: input.checked,
            value: this.value,
        });
    };

    render(): JSX.Element {
        return (
            <Host>
                <label htmlFor={this.identifier} class="toggle-wrapper">
                    <input
                        checked={this.checked}
                        disabled={this.disabled}
                        id={this.identifier}
                        type="checkbox"
                        value={this.value}
                        onChange={this.onChangeHandler}
                        aria-label={this.accessibleLabel}
                    ></input>
                    <div class="toggle-box">
                        <div class="toggle-box__circle"></div>
                    </div>
                </label>
                <label htmlFor={this.identifier} class="toggle-label">
                    <slot></slot>
                </label>
            </Host>
        );
    }
}
