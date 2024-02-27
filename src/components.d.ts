/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BaseButton {
        "color": string;
        "hasRoundedCorners": boolean;
        "text": string;
    }
    interface BaseIcon {
        "isDisabled": boolean;
        "name": string;
    }
    interface BaseSpacing {
    }
    interface ContentWrapper {
        "constraintSize": string;
        "paddingSize": string;
    }
}
declare global {
    interface HTMLBaseButtonElement extends Components.BaseButton, HTMLStencilElement {
    }
    var HTMLBaseButtonElement: {
        prototype: HTMLBaseButtonElement;
        new (): HTMLBaseButtonElement;
    };
    interface HTMLBaseIconElement extends Components.BaseIcon, HTMLStencilElement {
    }
    var HTMLBaseIconElement: {
        prototype: HTMLBaseIconElement;
        new (): HTMLBaseIconElement;
    };
    interface HTMLBaseSpacingElement extends Components.BaseSpacing, HTMLStencilElement {
    }
    var HTMLBaseSpacingElement: {
        prototype: HTMLBaseSpacingElement;
        new (): HTMLBaseSpacingElement;
    };
    interface HTMLContentWrapperElement extends Components.ContentWrapper, HTMLStencilElement {
    }
    var HTMLContentWrapperElement: {
        prototype: HTMLContentWrapperElement;
        new (): HTMLContentWrapperElement;
    };
    interface HTMLElementTagNameMap {
        "base-button": HTMLBaseButtonElement;
        "base-icon": HTMLBaseIconElement;
        "base-spacing": HTMLBaseSpacingElement;
        "content-wrapper": HTMLContentWrapperElement;
    }
}
declare namespace LocalJSX {
    interface BaseButton {
        "color"?: string;
        "hasRoundedCorners"?: boolean;
        "text"?: string;
    }
    interface BaseIcon {
        "isDisabled"?: boolean;
        "name"?: string;
    }
    interface BaseSpacing {
    }
    interface ContentWrapper {
        "constraintSize"?: string;
        "paddingSize"?: string;
    }
    interface IntrinsicElements {
        "base-button": BaseButton;
        "base-icon": BaseIcon;
        "base-spacing": BaseSpacing;
        "content-wrapper": ContentWrapper;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "base-button": LocalJSX.BaseButton & JSXBase.HTMLAttributes<HTMLBaseButtonElement>;
            "base-icon": LocalJSX.BaseIcon & JSXBase.HTMLAttributes<HTMLBaseIconElement>;
            "base-spacing": LocalJSX.BaseSpacing & JSXBase.HTMLAttributes<HTMLBaseSpacingElement>;
            "content-wrapper": LocalJSX.ContentWrapper & JSXBase.HTMLAttributes<HTMLContentWrapperElement>;
        }
    }
}
