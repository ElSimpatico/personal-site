import {
    Component,
    Prop,
    h,
    JSX,
    ComponentInterface,
    Host,
    State,
    Watch,
} from '@stencil/core';

import { LinkModel } from '@core/types';
import { getSocialIconName } from '@core/utils';

@Component({
    tag: 'ui-footer',
    styleUrl: 'footer.scss',
    shadow: false,
    scoped: true,
})
export class Footer implements ComponentInterface {
    /** Specifies the logo image url */
    @Prop() readonly logoUrl?: string;

    /** Specifies the alternative text of logo image */
    @Prop() readonly logoAlt?: string;

    /** Specifies the navigation links as JSON string of `LinkModel` */
    @Prop() readonly dataLinksSocial?: string;

    @State() linksSocial: LinkModel[] = [];

    @Watch('dataLinksSocial')
    private dataLinksSocialWatch(): void {
        this.linksSocial = this.dataLinksSocial
            ? JSON.parse(this.dataLinksSocial)
            : [];
    }

    componentWillLoad(): void | Promise<void> {
        this.dataLinksSocialWatch();
    }

    render(): JSX.Element {
        return (
            <Host>
                <footer>
                    <section class="section section--main">
                        {this.logoUrl && (
                            <div class="section__logo">
                                <img
                                    class="section__image"
                                    src={this.logoUrl}
                                    alt={this.logoAlt}
                                ></img>
                            </div>
                        )}

                        {this.linksSocial.length > 0 && (
                            <ul class="section__list">
                                {this.linksSocial.map(
                                    (link: LinkModel, index: number) => {
                                        const iconname = getSocialIconName(
                                            link.id,
                                        );
                                        if (iconname) {
                                            return (
                                                <li
                                                    class="section__listitem"
                                                    key={`link-item_${index}`}
                                                >
                                                    <ui-link
                                                        url={link.href}
                                                        accessibleLabel={
                                                            link.accesibleLabel
                                                        }
                                                    >
                                                        <ui-icon
                                                            name={iconname}
                                                        ></ui-icon>
                                                    </ui-link>
                                                </li>
                                            );
                                        }
                                    },
                                )}
                            </ul>
                        )}
                    </section>
                    <hr class="separator"></hr>
                    <section class="section section--secondary">
                        <slot name="owner"></slot>
                    </section>
                </footer>
            </Host>
        );
    }
}
