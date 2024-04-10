import { type Component, type PropType } from "vue";
import type { ComponentClass, ProgrammaticInstance } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Whether modal is active or not, use v-model:active to make it two-way binding */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Display modal as full screen */
    fullScreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Text content, unnecessary when default slot is used */
    content: {
        type: StringConstructor;
        default: any;
    };
    /** Width of the Modal */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    /** Custom animation (transition name) */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Is Modal cancleable by clicking 'X', pressing escape or clicking outside
     * @values escape, x, outside, button, true, false
     */
    cancelable: {
        type: PropType<boolean | string[]>;
        default: () => string[];
    };
    /** Callback function to call after user canceled (clicked 'X' / pressed escape / clicked outside) */
    onCancel: {
        type: PropType<() => void>;
        default: () => void;
    };
    /** Callback function to call after close (programmatically close or user canceled) */
    onClose: {
        type: PropType<() => void>;
        default: () => void;
    };
    /**
     * Use `clip` to remove the body scrollbar, `keep` to have a non scrollable scrollbar to avoid shifting background,
     * but will set body to position fixed, might break some layouts.
     * @values keep, clip
     */
    scroll: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Trap focus inside the modal */
    trapFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Role attribute to be passed to the div wrapper for better accessibility.
     * @values dialog, alertdialog
     */
    ariaRole: {
        type: StringConstructor;
        default: () => unknown;
        validator: (value: string) => boolean;
    };
    /** Accessibility aria-label to be passed to the div wrapper element */
    ariaLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Destroy modal on hide */
    destroyOnHide: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Automatically focus modal when active */
    autoFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Close icon name */
    closeIcon: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Size of close icon
     * @values small, medium, large
     */
    closeIconSize: {
        type: StringConstructor;
        default: () => string;
    };
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor)[];
        default: () => boolean;
    };
    /**
     * Component to be injected, used to open a component modal programmatically.
     * Close modal within the component by emitting a 'close' event — emits('close')
     */
    component: {
        type: PropType<Component>;
        default: any;
    };
    /** Props to be binded to the injected component */
    props: {
        type: ObjectConstructor;
        default: any;
    };
    /** Events to be binded to the injected component */
    events: {
        type: ObjectConstructor;
        default: () => {};
    };
    /** DOM element where the modal component will be created on (for programmatic usage) */
    container: {
        type: PropType<string | HTMLElement>;
        default: () => string;
    };
    /**
     * This is used internally for programmatic usage
     * @ignore
     */
    programmatic: {
        type: PropType<ProgrammaticInstance<import("vue").ComponentInternalInstance>>;
        default: any;
    };
    /**
     * This is used internally for programmatic usage
     * @ignore
     */
    promise: {
        type: PromiseConstructor;
        default: any;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of modal component when its active */
    activeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the modal overlay */
    overlayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the modal content */
    contentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the close button */
    closeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the modal when fullscreen */
    fullScreenClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of modal component when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the modal when scroll is clip */
    scrollClipClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the modal when scroll is not clip */
    noScrollClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {
    close: (...args: any[]) => void;
    promise: Promise<unknown>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:active": (value: boolean) => void;
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Whether modal is active or not, use v-model:active to make it two-way binding */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Display modal as full screen */
    fullScreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Text content, unnecessary when default slot is used */
    content: {
        type: StringConstructor;
        default: any;
    };
    /** Width of the Modal */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    /** Custom animation (transition name) */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Is Modal cancleable by clicking 'X', pressing escape or clicking outside
     * @values escape, x, outside, button, true, false
     */
    cancelable: {
        type: PropType<boolean | string[]>;
        default: () => string[];
    };
    /** Callback function to call after user canceled (clicked 'X' / pressed escape / clicked outside) */
    onCancel: {
        type: PropType<() => void>;
        default: () => void;
    };
    /** Callback function to call after close (programmatically close or user canceled) */
    onClose: {
        type: PropType<() => void>;
        default: () => void;
    };
    /**
     * Use `clip` to remove the body scrollbar, `keep` to have a non scrollable scrollbar to avoid shifting background,
     * but will set body to position fixed, might break some layouts.
     * @values keep, clip
     */
    scroll: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Trap focus inside the modal */
    trapFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Role attribute to be passed to the div wrapper for better accessibility.
     * @values dialog, alertdialog
     */
    ariaRole: {
        type: StringConstructor;
        default: () => unknown;
        validator: (value: string) => boolean;
    };
    /** Accessibility aria-label to be passed to the div wrapper element */
    ariaLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Destroy modal on hide */
    destroyOnHide: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Automatically focus modal when active */
    autoFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Close icon name */
    closeIcon: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Size of close icon
     * @values small, medium, large
     */
    closeIconSize: {
        type: StringConstructor;
        default: () => string;
    };
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor)[];
        default: () => boolean;
    };
    /**
     * Component to be injected, used to open a component modal programmatically.
     * Close modal within the component by emitting a 'close' event — emits('close')
     */
    component: {
        type: PropType<Component>;
        default: any;
    };
    /** Props to be binded to the injected component */
    props: {
        type: ObjectConstructor;
        default: any;
    };
    /** Events to be binded to the injected component */
    events: {
        type: ObjectConstructor;
        default: () => {};
    };
    /** DOM element where the modal component will be created on (for programmatic usage) */
    container: {
        type: PropType<string | HTMLElement>;
        default: () => string;
    };
    /**
     * This is used internally for programmatic usage
     * @ignore
     */
    programmatic: {
        type: PropType<ProgrammaticInstance<import("vue").ComponentInternalInstance>>;
        default: any;
    };
    /**
     * This is used internally for programmatic usage
     * @ignore
     */
    promise: {
        type: PromiseConstructor;
        default: any;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of modal component when its active */
    activeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the modal overlay */
    overlayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the modal content */
    contentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the close button */
    closeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the modal when fullscreen */
    fullScreenClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of modal component when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the modal when scroll is clip */
    scrollClipClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the modal when scroll is not clip */
    noScrollClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onClose?: (...args: any[]) => any;
    "onUpdate:active"?: (value: boolean) => any;
}, {
    override: boolean;
    props: Record<string, any>;
    scroll: string;
    mobileBreakpoint: string;
    onCancel: () => void;
    onClose: () => void;
    rootClass: ComponentClass;
    mobileClass: ComponentClass;
    component: any;
    animation: string;
    teleport: string | boolean | Record<string, any>;
    active: boolean;
    trapFocus: boolean;
    ariaRole: string;
    activeClass: ComponentClass;
    content: string;
    overlayClass: ComponentClass;
    width: string | number;
    contentClass: ComponentClass;
    events: Record<string, any>;
    cancelable: boolean | string[];
    container: string | HTMLElement;
    programmatic: ProgrammaticInstance<import("vue").ComponentInternalInstance>;
    promise: Promise<unknown>;
    fullScreen: boolean;
    ariaLabel: string;
    destroyOnHide: boolean;
    autoFocus: boolean;
    closeIcon: string;
    closeIconSize: string;
    closeClass: ComponentClass;
    fullScreenClass: ComponentClass;
    scrollClipClass: ComponentClass;
    noScrollClass: ComponentClass;
}, {}>, {
    default?(_: {
        close: (...args: any[]) => void;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
