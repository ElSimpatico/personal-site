import {
    Component,
    Prop,
    h,
    JSX,
    ComponentInterface,
    Host,
} from '@stencil/core';

@Component({
    tag: 'ui-avatar',
    styleUrl: 'avatar.scss',
    shadow: false,
    scoped: true,
})
export class Avatar implements ComponentInterface {
    /** Specifies the image url */
    @Prop() readonly imageUrl: string;

    /** Specifies the alternative text of image */
    @Prop() readonly imageAlt: string;

    render(): JSX.Element {
        return (
            <Host>
                <div class="avatar-image">
                    <img src={this.imageUrl} alt={this.imageAlt}></img>
                </div>
            </Host>
        );
    }
}
