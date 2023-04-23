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
import { BreakpointSizeType, IconNames, LinkModel } from '@core/types';
import { getBreakpoint } from '@core/utils';

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
    @Prop() readonly dataLinks?: string;

    /** Specifies the navigation links as JSON string of `LinkModel` */
    @Prop() readonly dataLinksSocial?: string;

    /** Specifies if the dark mode is enabled */
    @Prop({ mutable: true }) darkMode?: boolean = false;

    /** Specifies the dark mode label*/
    @Prop() readonly darkModeLabel?: string;

    /** Specifies the alternative text for the dark mode label*/
    @Prop() readonly darkModeAccessibleLabel?: string;

    @State() breakpoint: BreakpointSizeType;

    @State() expanded: boolean;

    @State() links: LinkModel[] = [];

    @State() linksSocial: LinkModel[] = [];

    @Listen('resize', { target: 'window' })
    private onResize(): void {
        const newBreakpoint = getBreakpoint(window.innerWidth);
        if (this.breakpoint !== newBreakpoint) {
            this.breakpoint = newBreakpoint;
        }
    }

    @Watch('dataLinks')
    private dataLinksWatch(): void {
        this.links = this.dataLinks ? JSON.parse(this.dataLinks) : [];
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

    private onPressLinkHandler = (): void => {
        this.expanded = false;
    };

    private onChangeTheme = (): void => {
        const isLightMode = document.body.classList.contains('theme-light');
        this.enableDarkMode(isLightMode);
        this.darkMode = !this.darkMode;
    };

    private enableDarkMode = (enable: boolean): void => {
        document.body.classList.remove(enable ? 'theme-light' : 'theme-dark');
        document.body.classList.add(enable ? 'theme-dark' : 'theme-light');
    };

    private getSocialIconName = (id: string): IconNames | null => {
        switch (id) {
            case 'github':
                return IconNames.github;
            case 'linkedin':
                return IconNames.linkedin;
            default:
                return null;
        }
    };

    componentWillLoad(): void {
        this.onResize();
        this.dataLinksWatch();
        this.dataLinksSocialWatch();
        this.enableDarkMode(this.darkMode);
    }

    private renderLinkList = (): JSX.Element => {
        return (
            <nav class="ps-header-main-navigation">
                {this.links.length > 0 && (
                    <ul class="navigation-list">
                        {this.links.map((link: LinkModel, index: number) => {
                            return (
                                <li key={`main-nav-link_${index}`}>
                                    <ui-link
                                        url={link.href}
                                        accessibleLabel={link.accesibleLabel}
                                        smooth
                                        onPress={this.onPressLinkHandler}
                                    >
                                        {link.label}
                                    </ui-link>
                                </li>
                            );
                        })}
                    </ul>
                )}
                {this.linksSocial.length > 0 && (
                    <ul class="navigation-icon-list">
                        {this.linksSocial.map(
                            (link: LinkModel, index: number) => {
                                const iconName = this.getSocialIconName(
                                    link.id,
                                );
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
                <ui-toggle
                    identifier="theme-switch"
                    onChangeDetailEvent={this.onChangeTheme}
                    checked={this.darkMode}
                    accessibleLabel={this.darkModeAccessibleLabel}
                >
                    {this.darkModeLabel}
                </ui-toggle>
            </nav>
        );
    };

    render(): JSX.Element {
        return (
            <Host>
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

                        {this.breakpoint !== 'S' &&
                            this.breakpoint !== 'M' &&
                            this.renderLinkList()}
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
                    </div>
                    {this.expanded &&
                        (this.breakpoint === 'S' || this.breakpoint === 'M') &&
                        this.renderLinkList()}
                </header>
            </Host>
        );
    }
}
