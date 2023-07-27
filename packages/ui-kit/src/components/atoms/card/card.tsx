import {
    Component,
    Prop,
    h,
    JSX,
    ComponentInterface,
    Host,
} from '@stencil/core';

import { ClassType } from '@core/types';

@Component({
    tag: 'ui-card',
    styleUrl: 'card.scss',
    shadow: false,
    scoped: true,
})
export class Card implements ComponentInterface {
    /** Specifies the imageUrl */
    @Prop() readonly imageUrl: string;

    /** Specifies the alternative text of the image */
    @Prop() readonly imageAlt: string;

    /** Enable horizontal display */
    @Prop() readonly horizontal: boolean = false;

    private classNames = (): ClassType => {
        return {
            horizontal: !!this.horizontal,
        };
    };

    render(): JSX.Element {
        return (
            <Host class={this.classNames()}>
                <div class="card-container">
                    <div class="card-image">
                        <img src={this.imageUrl} alt={this.imageAlt}></img>
                    </div>
                    <div class="card-content">
                        <slot name="card-body"></slot>
                    </div>
                </div>
            </Host>
        );
    }
}
