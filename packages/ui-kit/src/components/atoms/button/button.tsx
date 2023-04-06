import { Component, h, ComponentInterface, JSX, Host, Prop } from '@stencil/core';
import { ButtonVariantType } from './types';
import { ClassType } from '@core/types';

@Component({
  tag: 'ui-button',
  styleUrl: 'button.scss',
  shadow: false,
  scoped: true,
})
export class Button implements ComponentInterface {
  /** Specifies the alternative text for screen readers */
  @Prop() readonly accesibleLabel?: string;

  /** Specifies if button is disabled */
  @Prop() readonly disabled?: boolean = false;

  /** Specifies the link reference. If the property is filled the `a` element is rendered */
  @Prop() readonly linkHref?: string;

  /** Specifies the link target. */
  @Prop() readonly linkTarget?: string;

  /** Specifies the button variant */
  @Prop() readonly variant?: ButtonVariantType = 'primary';

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
          <a class="ps-button" href={this.linkHref} target={this.linkTarget} aria-label={this.accesibleLabel}>
            <slot></slot>
          </a>
        ) : (
          <button class="ps-button" disabled={this.disabled} aria-label={this.accesibleLabel}>
            <slot />
          </button>
        )}
      </Host>
    );
  }
}
