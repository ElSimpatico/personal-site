import { Component, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'ui-tag',
    styleUrl: 'tag.scss',
    shadow: false,
    scoped: true,
})
export class Tag implements ComponentInterface {
    render(): JSX.Element {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
