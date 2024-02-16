import {
    Component,
    Prop,
    h,
    JSX,
    ComponentInterface,
    Host,
    Event,
    EventEmitter,
    Listen,
    Watch,
} from '@stencil/core';

import { UniqueIdSingleton, WAIUtils } from '@core/utils';
import { ClassType, IconNames } from '@core/types';

@Component({
    tag: 'ui-accordion',
    styleUrl: 'accordion.scss',
    shadow: false,
    scoped: true,
})
export class Accordion implements ComponentInterface {
    private uuid = UniqueIdSingleton.getInstance();
    private headerId: string;
    private bodyId: string;
    private bodyRef: HTMLElement;

    /** Specifies if accordion is expanded */
    @Prop({ mutable: true }) expanded?: boolean = false;

    /** Specifies the id or a string of space seperated ids of a component(s) that describes the accordion when is expanded. */
    @Prop() readonly accessibleDescribedBy?: string;

    /** Specifies if hide arrow */
    @Prop() readonly hideArrow?: boolean = false;

    /** onPressAccordionHeader event. Emits when press accordion header */
    @Event() pressAccordionHeader?: EventEmitter<void>;

    @Listen('resize', { target: 'window' })
    onResize(): void {
        if (this.expanded) {
            this.expanded = false;
        }
    }

    @Watch('expanded')
    expandedWatch(): void {
        this.setBodyHeight();
        WAIUtils.manageTab(this.bodyRef, this.expanded);
    }

    private setBodyHeight(): void {
        this.bodyRef.style.maxHeight = this.expanded
            ? `${this.bodyRef.scrollHeight * 0.1}rem`
            : '0rem';
    }

    private onHeader = (): void => {
        this.expanded = !this.expanded;
        this.setBodyHeight();
        this.pressAccordionHeader.emit();
    };

    componentWillLoad(): void | Promise<void> {
        this.headerId = this.uuid.generate('accordion_header');
        this.bodyId = this.uuid.generate('accordion_body');
    }

    componentDidLoad(): void {
        this.expandedWatch();
    }

    private classNames = (): ClassType => {
        return {
            expanded: !!this.expanded,
            hideArrow: !!this.hideArrow,
        };
    };

    render(): JSX.Element {
        return (
            <Host class={this.classNames()}>
                <button
                    type="button"
                    id={this.headerId}
                    class="accordion__header"
                    onClick={this.onHeader}
                    aria-expanded={String(!!this.expanded)}
                    aria-controls={this.bodyId}
                    aria-describedby={
                        this.expanded ? this.accessibleDescribedBy : ''
                    }
                >
                    <slot name="header"></slot>
                    <div class="accordion__iconBox">
                        <ui-icon
                            class="accordion__icon"
                            name={IconNames['arrow-ios-downward']}
                        ></ui-icon>
                    </div>
                </button>
                <section
                    ref={(el): void => {
                        this.bodyRef = el;
                    }}
                    id={this.bodyId}
                    class="accordion__body"
                    aria-labelledby={this.headerId}
                >
                    <slot name="body"></slot>
                </section>
            </Host>
        );
    }
}
