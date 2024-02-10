/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonVariantType } from "./components/atoms/button/types";
import { CheckDetailEvent, IconNames } from "@core/types";
export { ButtonVariantType } from "./components/atoms/button/types";
export { CheckDetailEvent, IconNames } from "@core/types";
export namespace Components {
    interface UiAvatar {
        /**
          * Specifies the alternative text of image
         */
        "imageAlt": string;
        /**
          * Specifies the image url
         */
        "imageUrl": string;
    }
    interface UiButton {
        /**
          * Specifies the alternative text for screen readers
         */
        "accessibleLabel"?: string;
        /**
          * Specifies if button is disabled
         */
        "disabled"?: boolean;
        /**
          * Specifies the link reference. If the property is filled the `a` element is rendered
         */
        "linkHref"?: string;
        /**
          * Specifies the link target.
         */
        "linkTarget"?: string;
        /**
          * Specifies the button variant
         */
        "variant"?: ButtonVariantType;
    }
    interface UiCard {
        /**
          * Enable horizontal display
         */
        "horizontal": boolean;
        /**
          * Specifies the alternative text of the image
         */
        "imageAlt": string;
        /**
          * Specifies the imageUrl
         */
        "imageUrl": string;
    }
    interface UiFooter {
        /**
          * Specifies the navigation links as JSON string of `LinkModel`
         */
        "dataLinksSocial"?: string;
        /**
          * Specifies the alternative text of logo image
         */
        "logoAlt"?: string;
        /**
          * Specifies the logo image url
         */
        "logoUrl"?: string;
    }
    interface UiHeader {
        /**
          * Specifies the alternative text of menu button
         */
        "accesibleLabelMenu"?: string;
        /**
          * Specifies if the dark mode is enabled
         */
        "darkMode"?: boolean;
        /**
          * Specifies the alternative text for the dark mode label
         */
        "darkModeAccessibleLabel"?: string;
        /**
          * Specifies the dark mode label
         */
        "darkModeLabel"?: string;
        /**
          * Specifies the navigation links as JSON string of `LinkModel`
         */
        "dataLinksSocial"?: string;
        /**
          * Specifies the alternative text of logo image
         */
        "logoAlt"?: string;
        /**
          * Specifies the logo image url
         */
        "logoUrl"?: string;
    }
    interface UiIcon {
        /**
          * Specifies the icon name to display
         */
        "name": IconNames;
    }
    interface UiLink {
        /**
          * Specifies the alternative text of the link
         */
        "accessibleLabel"?: string;
        /**
          * Specifies if the smooth effect should be enabled when url start with `#` (link to section page)
         */
        "smooth"?: boolean;
        /**
          * Specifies where to open the linked document (_blank | _self | _parent | _top | framename)
         */
        "target"?: string;
        /**
          * Specifies a destination to link to, rendered in the href attribute of a link
         */
        "url"?: string;
    }
    interface UiTag {
    }
    interface UiToggle {
        /**
          * Specifies an alternative text for toggle
         */
        "accessibleLabel"?: string;
        /**
          * Specifies if input is checked
         */
        "checked"?: boolean;
        /**
          * Specifies if input is disabled
         */
        "disabled"?: boolean;
        /**
          * Property description
         */
        "identifier"?: string;
        /**
          * Specifies the input name
         */
        "name"?: string;
        /**
          * Specifies the input value
         */
        "value"?: string;
    }
}
export interface UiButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUiButtonElement;
}
export interface UiLinkCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUiLinkElement;
}
export interface UiToggleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUiToggleElement;
}
declare global {
    interface HTMLUiAvatarElement extends Components.UiAvatar, HTMLStencilElement {
    }
    var HTMLUiAvatarElement: {
        prototype: HTMLUiAvatarElement;
        new (): HTMLUiAvatarElement;
    };
    interface HTMLUiButtonElement extends Components.UiButton, HTMLStencilElement {
    }
    var HTMLUiButtonElement: {
        prototype: HTMLUiButtonElement;
        new (): HTMLUiButtonElement;
    };
    interface HTMLUiCardElement extends Components.UiCard, HTMLStencilElement {
    }
    var HTMLUiCardElement: {
        prototype: HTMLUiCardElement;
        new (): HTMLUiCardElement;
    };
    interface HTMLUiFooterElement extends Components.UiFooter, HTMLStencilElement {
    }
    var HTMLUiFooterElement: {
        prototype: HTMLUiFooterElement;
        new (): HTMLUiFooterElement;
    };
    interface HTMLUiHeaderElement extends Components.UiHeader, HTMLStencilElement {
    }
    var HTMLUiHeaderElement: {
        prototype: HTMLUiHeaderElement;
        new (): HTMLUiHeaderElement;
    };
    interface HTMLUiIconElement extends Components.UiIcon, HTMLStencilElement {
    }
    var HTMLUiIconElement: {
        prototype: HTMLUiIconElement;
        new (): HTMLUiIconElement;
    };
    interface HTMLUiLinkElement extends Components.UiLink, HTMLStencilElement {
    }
    var HTMLUiLinkElement: {
        prototype: HTMLUiLinkElement;
        new (): HTMLUiLinkElement;
    };
    interface HTMLUiTagElement extends Components.UiTag, HTMLStencilElement {
    }
    var HTMLUiTagElement: {
        prototype: HTMLUiTagElement;
        new (): HTMLUiTagElement;
    };
    interface HTMLUiToggleElement extends Components.UiToggle, HTMLStencilElement {
    }
    var HTMLUiToggleElement: {
        prototype: HTMLUiToggleElement;
        new (): HTMLUiToggleElement;
    };
    interface HTMLElementTagNameMap {
        "ui-avatar": HTMLUiAvatarElement;
        "ui-button": HTMLUiButtonElement;
        "ui-card": HTMLUiCardElement;
        "ui-footer": HTMLUiFooterElement;
        "ui-header": HTMLUiHeaderElement;
        "ui-icon": HTMLUiIconElement;
        "ui-link": HTMLUiLinkElement;
        "ui-tag": HTMLUiTagElement;
        "ui-toggle": HTMLUiToggleElement;
    }
}
declare namespace LocalJSX {
    interface UiAvatar {
        /**
          * Specifies the alternative text of image
         */
        "imageAlt"?: string;
        /**
          * Specifies the image url
         */
        "imageUrl"?: string;
    }
    interface UiButton {
        /**
          * Specifies the alternative text for screen readers
         */
        "accessibleLabel"?: string;
        /**
          * Specifies if button is disabled
         */
        "disabled"?: boolean;
        /**
          * Specifies the link reference. If the property is filled the `a` element is rendered
         */
        "linkHref"?: string;
        /**
          * Specifies the link target.
         */
        "linkTarget"?: string;
        /**
          * Emitted when the button is pressed
         */
        "onPress"?: (event: UiButtonCustomEvent<void>) => void;
        /**
          * Specifies the button variant
         */
        "variant"?: ButtonVariantType;
    }
    interface UiCard {
        /**
          * Enable horizontal display
         */
        "horizontal"?: boolean;
        /**
          * Specifies the alternative text of the image
         */
        "imageAlt"?: string;
        /**
          * Specifies the imageUrl
         */
        "imageUrl"?: string;
    }
    interface UiFooter {
        /**
          * Specifies the navigation links as JSON string of `LinkModel`
         */
        "dataLinksSocial"?: string;
        /**
          * Specifies the alternative text of logo image
         */
        "logoAlt"?: string;
        /**
          * Specifies the logo image url
         */
        "logoUrl"?: string;
    }
    interface UiHeader {
        /**
          * Specifies the alternative text of menu button
         */
        "accesibleLabelMenu"?: string;
        /**
          * Specifies if the dark mode is enabled
         */
        "darkMode"?: boolean;
        /**
          * Specifies the alternative text for the dark mode label
         */
        "darkModeAccessibleLabel"?: string;
        /**
          * Specifies the dark mode label
         */
        "darkModeLabel"?: string;
        /**
          * Specifies the navigation links as JSON string of `LinkModel`
         */
        "dataLinksSocial"?: string;
        /**
          * Specifies the alternative text of logo image
         */
        "logoAlt"?: string;
        /**
          * Specifies the logo image url
         */
        "logoUrl"?: string;
    }
    interface UiIcon {
        /**
          * Specifies the icon name to display
         */
        "name": IconNames;
    }
    interface UiLink {
        /**
          * Specifies the alternative text of the link
         */
        "accessibleLabel"?: string;
        /**
          * Emitted when the link is pressed
         */
        "onPress"?: (event: UiLinkCustomEvent<void>) => void;
        /**
          * Specifies if the smooth effect should be enabled when url start with `#` (link to section page)
         */
        "smooth"?: boolean;
        /**
          * Specifies where to open the linked document (_blank | _self | _parent | _top | framename)
         */
        "target"?: string;
        /**
          * Specifies a destination to link to, rendered in the href attribute of a link
         */
        "url"?: string;
    }
    interface UiTag {
    }
    interface UiToggle {
        /**
          * Specifies an alternative text for toggle
         */
        "accessibleLabel"?: string;
        /**
          * Specifies if input is checked
         */
        "checked"?: boolean;
        /**
          * Specifies if input is disabled
         */
        "disabled"?: boolean;
        /**
          * Property description
         */
        "identifier"?: string;
        /**
          * Specifies the input name
         */
        "name"?: string;
        /**
          * Emitted when the toggle change
         */
        "onChangeDetailEvent"?: (event: UiToggleCustomEvent<CheckDetailEvent>) => void;
        /**
          * Specifies the input value
         */
        "value"?: string;
    }
    interface IntrinsicElements {
        "ui-avatar": UiAvatar;
        "ui-button": UiButton;
        "ui-card": UiCard;
        "ui-footer": UiFooter;
        "ui-header": UiHeader;
        "ui-icon": UiIcon;
        "ui-link": UiLink;
        "ui-tag": UiTag;
        "ui-toggle": UiToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ui-avatar": LocalJSX.UiAvatar & JSXBase.HTMLAttributes<HTMLUiAvatarElement>;
            "ui-button": LocalJSX.UiButton & JSXBase.HTMLAttributes<HTMLUiButtonElement>;
            "ui-card": LocalJSX.UiCard & JSXBase.HTMLAttributes<HTMLUiCardElement>;
            "ui-footer": LocalJSX.UiFooter & JSXBase.HTMLAttributes<HTMLUiFooterElement>;
            "ui-header": LocalJSX.UiHeader & JSXBase.HTMLAttributes<HTMLUiHeaderElement>;
            "ui-icon": LocalJSX.UiIcon & JSXBase.HTMLAttributes<HTMLUiIconElement>;
            "ui-link": LocalJSX.UiLink & JSXBase.HTMLAttributes<HTMLUiLinkElement>;
            "ui-tag": LocalJSX.UiTag & JSXBase.HTMLAttributes<HTMLUiTagElement>;
            "ui-toggle": LocalJSX.UiToggle & JSXBase.HTMLAttributes<HTMLUiToggleElement>;
        }
    }
}
