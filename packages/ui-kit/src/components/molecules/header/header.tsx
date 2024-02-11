import {
    Component,
    h,
    ComponentInterface,
    JSX,
    Host,
    Prop,
    State,
    Listen,
    Watch,
} from '@stencil/core';
import {
    BreakpointSizeType,
    ClassType,
    IconNames,
    LinkModel,
} from '@core/types';
import { getBreakpoint, getSocialIconName } from '@core/utils';

@Component({
    tag: 'ui-header',
    styleUrl: 'header.scss',
    shadow: false,
    scoped: true,
})
export class Header implements ComponentInterface {
    /** Specifies the logo image url */
    @Prop() readonly logoUrl?: string;

    /** Specifies the alternative text of logo image */
    @Prop() readonly logoAlt?: string;

    /** Specifies the alternative text of menu button*/
    @Prop() readonly accesibleLabelMenu?: string;

    /** Specifies the navigation links as JSON string of `LinkModel` */
    @Prop() readonly dataLinksSocial?: string;

    /** Specifies if the dark mode is enabled */
    @Prop({ mutable: true }) darkMode?: boolean = false;

    /** Specifies the alternative text for the dark mode label*/
    @Prop() readonly darkModeAccessibleLabel?: string;

    @State() breakpoint: BreakpointSizeType;

    @State() expanded: boolean;

    @State() linksSocial: LinkModel[] = [];

    @Listen('resize', { target: 'window' })
    private onResize(): void {
        const newBreakpoint = getBreakpoint(window.innerWidth);
        if (this.breakpoint !== newBreakpoint) {
            this.breakpoint = newBreakpoint;
        }
    }

    @Watch('dataLinksSocial')
    private dataLinksSocialWatch(): void {
        this.linksSocial = this.dataLinksSocial
            ? JSON.parse(this.dataLinksSocial)
            : [];
    }

    private onPressHandler = (): void => {
        this.expanded = !this.expanded;
    };

    componentWillLoad(): void {
        this.onResize();
        this.dataLinksSocialWatch();
    }

    private renderLinkList = (): JSX.Element => {
        return (
            <nav class="ps-header-main-navigation">
                <div class="navigation-list">
                    <slot name="main-link"></slot>
                </div>

                {this.linksSocial.length > 0 && (
                    <ul class="navigation-icon-list">
                        {this.linksSocial.map(
                            (link: LinkModel, index: number) => {
                                const iconName = getSocialIconName(link.id);
                                if (iconName) {
                                    return (
                                        <li
                                            key={`main-nav-link-social_${index}`}
                                            class="navigation-list-item"
                                        >
                                            <ui-link
                                                url={link.href}
                                                accessibleLabel={
                                                    link.accesibleLabel
                                                }
                                            >
                                                <ui-icon
                                                    name={iconName}
                                                ></ui-icon>
                                            </ui-link>
                                        </li>
                                    );
                                }
                            },
                        )}
                    </ul>
                )}
                <ui-theme-toggle
                    darkMode={this.darkMode}
                    accessibleLabel={this.darkModeAccessibleLabel}
                ></ui-theme-toggle>
            </nav>
        );
    };

    private classNames = (): ClassType => {
        return {
            expanded: !!this.expanded,
        };
    };

    render(): JSX.Element {
        return (
            <Host class={this.classNames()}>
                <header class="ps-header">
                    <div class="header-content">
                        {this.logoUrl && (
                            <div class="header-logo">
                                <img
                                    src={this.logoUrl}
                                    alt={this.logoAlt}
                                ></img>
                            </div>
                        )}

                        {(this.breakpoint === 'S' ||
                            this.breakpoint === 'M') && (
                            <ui-button
                                class="menu-button"
                                variant="tertiary"
                                accessibleLabel={this.accesibleLabelMenu}
                                onPress={this.onPressHandler}
                            >
                                <ui-icon name={IconNames.menu}></ui-icon>
                            </ui-button>
                        )}

                        {this.renderLinkList()}
                    </div>
                </header>
            </Host>
        );
    }
}
