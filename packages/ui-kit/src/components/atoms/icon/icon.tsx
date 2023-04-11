import { Component, h, ComponentInterface, Prop, JSX, Host } from '@stencil/core';
import { IconNames } from '@core/types';

@Component({
  tag: 'ui-icon',
  styleUrl: 'icon.scss',
  shadow: false,
  scoped: true,
})
export class Icon implements ComponentInterface {
  /** Specifies the icon name to display */
  @Prop() readonly name!: IconNames;

  render(): JSX.Element {
    return <Host class={this.name}></Host>;
  }
}
