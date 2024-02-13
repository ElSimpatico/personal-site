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
    Element,
    Method,
} from '@stencil/core';

import { KEYBOARD_KEY } from '@core/enums';
import {
    BreakpointSizeType,
    ClassType,
    IconNames,
    LinkModel,
} from '@core/types';
import { getBreakpoint, getSocialIconName, WAIUtils } from '@core/utils';

@Component({
    tag: 'ui-header',
    styleUrl: 'header.scss',
    shadow: false,
    scoped: true,
})
export class Header implements ComponentInterface {
    private navigationRef: HTMLElement;
    private menuButtonRef: HTMLUiButtonElement;

    @Element() hostElement: HTMLUiHeaderElement;

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

    /** Specifies if the menu mobile is expanded */
    @Prop({ mutable: true }) expanded: boolean;

    @State() breakpoint: BreakpointSizeType;

    @State() linksSocial: LinkModel[] = [];

    @Listen('resize', { target: 'window' })
    private onResize(): void {
        const newBreakpoint = getBreakpoint(window.innerWidth);
        if (this.breakpoint !== newBreakpoint) {
            this.breakpoint = newBreakpoint;
        }
    }

    @Listen('keydown', { target: 'document' })
    handleKeyDown(event: KeyboardEvent): void {
        if (this.expanded) {
            switch (event.key) {
                case KEYBOARD_KEY.TAB:
                    this.handlekeyTab(event);
                    break;

                case KEYBOARD_KEY.ESCAPE:
                    this.closeMenu();
                    break;
                default:
                    break;
            }
        }
    }

    @Listen('click', { target: 'document' })
    handleClickOut(event: MouseEvent): void {
        const element = event.target as HTMLElement;
        if (
            this.expanded &&
            !this.menuButtonRef.contains(element) &&
            !this.navigationRef.contains(element)
        ) {
            this.closeMenu();
        }
    }

    /** Close mobile menu */
    @Method()
    closeMenu(): Promise<void> {
        this.expanded = false;
        this.menuButtonRef && this.menuButtonRef.focusNativeElement();
        return Promise.resolve();
    }

    @Watch('dataLinksSocial')
    private dataLinksSocialWatch(): void {
        this.linksSocial = this.dataLinksSocial
            ? JSON.parse(this.dataLinksSocial)
            : [];
    }

    @Watch('expanded')
    expandedtWatch(): void {
        this.setAccessibleAttributes();
    }

    @Watch('breakpoint')
    breakpointWatch(): void {
        if (this.breakpoint === 'L' || this.breakpoint === 'XL') {
            this.closeMenu();
        }
        this.setAccessibleAttributes();
    }

    private handlekeyTab(event: KeyboardEvent): void {
        if (this.expanded) {
            WAIUtils.manageCircularFocus(this.hostElement, event);
        }
    }

    private setAccessibleAttributes = (): void => {
        if (this.navigationRef) {
            const condition =
                this.expanded ||
                this.breakpoint === 'L' ||
                this.breakpoint === 'XL';
            WAIUtils.manageTab(this.navigationRef, condition);
        }
    };

    private onPressHandler = (): void => {
        this.expanded = !this.expanded;
    };

    componentWillLoad(): void {
        this.onResize();
        this.dataLinksSocialWatch();
    }

    componentDidLoad(): void {
        this.setAccessibleAttributes();
    }

    private renderLinkList = (): JSX.Element => {
        return (
            <nav
                class="ps-header-main-navigation"
                ref={(el): void => {
                    this.navigationRef = el;
                }}
            >
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
                    class="navigation-themeToggle"
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
                                ref={(el): void => {
                                    this.menuButtonRef = el;
                                }}
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
