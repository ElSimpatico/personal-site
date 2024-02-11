import {
    Component,
    Prop,
    h,
    JSX,
    ComponentInterface,
    Host,
} from '@stencil/core';
import { ClassType, IconNames } from '@core/types';
import { UniqueIdSingleton } from '@core/utils';

@Component({
    tag: 'ui-theme-toggle',
    styleUrl: 'theme-toggle.scss',
    shadow: false,
    scoped: true,
})
export class ThemeToggle implements ComponentInterface {
    private uuid = UniqueIdSingleton.getInstance();

    /** Specifies if dark mode is enabled */
    @Prop({ mutable: true }) darkMode: boolean;

    /** Specifies an alternative text for toggle */
    @Prop() readonly accessibleLabel: string;

    private onChangeTheme = (): void => {
        const isLightMode = document.body.classList.contains('theme-light');
        this.enableDarkMode(isLightMode);
        this.darkMode = !this.darkMode;
    };

    private enableDarkMode = (enable: boolean): void => {
        document.body.classList.remove(enable ? 'theme-light' : 'theme-dark');
        document.body.classList.add(enable ? 'theme-dark' : 'theme-light');
    };

    private iconClassNames = (icon: 'sun' | 'moon'): ClassType => {
        return {
            'ps-themeToggle__icon': true,
            'ps-themeToggle__icon--show':
                icon === 'sun' ? !this.darkMode : this.darkMode,
        };
    };

    componentWillLoad(): void {
        this.enableDarkMode(this.darkMode);
    }

    render(): JSX.Element {
        return (
            <Host>
                <div class="ps-themeToggle">
                    <ui-toggle
                        identifier={this.uuid.generate('theme-toggle')}
                        class="ps-themeToggle__toggle"
                        checked={this.darkMode}
                        accessibleLabel={this.accessibleLabel}
                        onChangeDetailEvent={this.onChangeTheme}
                    ></ui-toggle>
                    <div class="ps-themeToggle__iconBox">
                        <ui-icon
                            class={this.iconClassNames('sun')}
                            name={IconNames.sun}
                        ></ui-icon>
                        <ui-icon
                            class={this.iconClassNames('moon')}
                            name={IconNames.moon}
                        ></ui-icon>
                    </div>
                </div>
            </Host>
        );
    }
}
