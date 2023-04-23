import {
    Component,
    Host,
    h,
    ComponentInterface,
    Prop,
    Event,
    EventEmitter,
} from '@stencil/core';

@Component({
    tag: 'ui-link',
    styleUrl: 'link.scss',
    shadow: false,
    scoped: true,
})
export class Link implements ComponentInterface {
    /** Specifies a destination to link to, rendered in the href attribute of a link */
    @Prop() readonly url?: string;

    /** Specifies where to open the linked document (_blank | _self | _parent | _top | framename) */
    @Prop() readonly target?: string;

    /** Specifies the alternative text of the link */
    @Prop() readonly accessibleLabel?: string;

    /** Specifies if the smooth effect should be enabled when url start with `#` (link to section page) */
    @Prop() readonly smooth?: boolean = false;

    /** Emitted when the link is pressed */
    @Event() press: EventEmitter<void>;

    private onClickHandler = (event: MouseEvent): void => {
        if ((this.url || '').startsWith('#') && this.smooth) {
            event.preventDefault();
            const targetElement = document.querySelector(this.url);
            targetElement &&
                targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        this.press.emit();
    };

    render(): JSX.Element {
        return (
            <Host>
                <a
                    class={'ps-link'}
                    href={this.url}
                    target={this.target}
                    aria-label={this.accessibleLabel}
                    onClick={this.onClickHandler}
                >
                    <slot></slot>
                </a>
            </Host>
        );
    }
}
