/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonVariantType } from "./components/atoms/button/types";
import { IconNames } from "@core/types";
export { ButtonVariantType } from "./components/atoms/button/types";
export { IconNames } from "@core/types";
export namespace Components {
    interface UiButton {
        /**
          * Specifies the alternative text for screen readers
         */
        "accesibleLabel"?: string;
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
    interface UiHeader {
        /**
          * Specifies the alternative text of menu button
         */
        "accesibleLabelMenu"?: string;
        /**
          * Specifies the navigation links as JSON string of `LinkModel`
         */
        "dataLinks"?: string;
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
        "accesibleLabel"?: string;
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
}
export interface UiButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUiButtonElement;
}
export interface UiLinkCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUiLinkElement;
}
declare global {
    interface HTMLUiButtonElement extends Components.UiButton, HTMLStencilElement {
    }
    var HTMLUiButtonElement: {
        prototype: HTMLUiButtonElement;
        new (): HTMLUiButtonElement;
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
    interface HTMLElementTagNameMap {
        "ui-button": HTMLUiButtonElement;
        "ui-header": HTMLUiHeaderElement;
        "ui-icon": HTMLUiIconElement;
        "ui-link": HTMLUiLinkElement;
    }
}
declare namespace LocalJSX {
    interface UiButton {
        /**
          * Specifies the alternative text for screen readers
         */
        "accesibleLabel"?: string;
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
    interface UiHeader {
        /**
          * Specifies the alternative text of menu button
         */
        "accesibleLabelMenu"?: string;
        /**
          * Specifies the navigation links as JSON string of `LinkModel`
         */
        "dataLinks"?: string;
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
        "accesibleLabel"?: string;
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
    interface IntrinsicElements {
        "ui-button": UiButton;
        "ui-header": UiHeader;
        "ui-icon": UiIcon;
        "ui-link": UiLink;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ui-button": LocalJSX.UiButton & JSXBase.HTMLAttributes<HTMLUiButtonElement>;
            "ui-header": LocalJSX.UiHeader & JSXBase.HTMLAttributes<HTMLUiHeaderElement>;
            "ui-icon": LocalJSX.UiIcon & JSXBase.HTMLAttributes<HTMLUiIconElement>;
            "ui-link": LocalJSX.UiLink & JSXBase.HTMLAttributes<HTMLUiLinkElement>;
        }
    }
}
