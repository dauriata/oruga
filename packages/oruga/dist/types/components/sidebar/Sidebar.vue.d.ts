import { type Component, type PropType } from "vue";
import type { ComponentClass, ProgrammaticInstance } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Whether siedbar is active or not, use v-model:active to make it two-way binding. */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Color of the sidebar
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Show an overlay like modal */
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Display the Sidebear inline */
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Sidebar position
     * @values top, right, bottom, left
     */
    position: {
        type: PropType<"top" | "bottom" | "left" | "right">;
        default: () => string;
    };
    /** Show sidebar in fullheight */
    fullheight: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show sidebar in fullwidth */
    fullwidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show a small sidebar */
    reduce: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Custom layout on mobile
     * @values fullwidth, reduced, hidden
     */
    mobile: {
        type: StringConstructor;
        default: unknown;
        validator: (value: string) => boolean;
    };
    /** Expand sidebar on hover when reduced or mobile is reduce */
    expandOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Custom animation (transition name) */
    animation: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Is Sidebar cancleable by pressing escape or clicking outside.
     * @values escape, outside, true, false
     */
    cancelable: {
        type: PropType<boolean | string[]>;
        default: () => string[];
    };
    /** Callback function to call after user canceled (pressed escape / clicked outside) */
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
    /** Destroy sidebar on hide */
    destroyOnHide: {
        type: BooleanConstructor;
        default: () => boolean;
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
     * Component to be injected, used to open a component sidebar programmatically.
     * Close sidebar within the component by emitting a 'close' event — emits('close')
     */
    component: {
        type: PropType<Component>;
        default: any;
    };
    /** Props to be binded to the injected component. */
    props: {
        type: ObjectConstructor;
        default: any;
    };
    /** Events to be binded to the injected component. */
    events: {
        type: ObjectConstructor;
        default: () => {};
    };
    /** DOM element where the sidebar component will be created on (for programmatic usage). */
    container: {
        type: PropType<string | HTMLElement>;
        default: () => string;
    };
    /**
     * This is used internally for programmatic usage.
     * @ignore
     */
    programmatic: {
        type: PropType<ProgrammaticInstance<import("vue").ComponentInternalInstance>>;
        default: any;
    };
    /**
     * This is used internally for programmatic usage.
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
    /** Class of sidebar component when its active */
    activeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of sidebar when teleported */
    teleportClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar overlay */
    overlayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar content */
    contentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar position */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar when is fullheight */
    fullheightClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar when is fullwidth */
    fullwidthClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar when its inlined */
    inlineClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar when reduced */
    reduceClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar when expanded on hover */
    expandOnHoverClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of sidebar component when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the body when sidebar clipped */
    crollClipClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the body when sidebar is not clipped */
    noScrollClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar content when sidebar is hidden */
    hiddenClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar content when sidebar is visible */
    visibleClass: {
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
    /** Whether siedbar is active or not, use v-model:active to make it two-way binding. */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Color of the sidebar
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Show an overlay like modal */
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Display the Sidebear inline */
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Sidebar position
     * @values top, right, bottom, left
     */
    position: {
        type: PropType<"top" | "bottom" | "left" | "right">;
        default: () => string;
    };
    /** Show sidebar in fullheight */
    fullheight: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show sidebar in fullwidth */
    fullwidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show a small sidebar */
    reduce: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Custom layout on mobile
     * @values fullwidth, reduced, hidden
     */
    mobile: {
        type: StringConstructor;
        default: unknown;
        validator: (value: string) => boolean;
    };
    /** Expand sidebar on hover when reduced or mobile is reduce */
    expandOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Custom animation (transition name) */
    animation: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Is Sidebar cancleable by pressing escape or clicking outside.
     * @values escape, outside, true, false
     */
    cancelable: {
        type: PropType<boolean | string[]>;
        default: () => string[];
    };
    /** Callback function to call after user canceled (pressed escape / clicked outside) */
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
    /** Destroy sidebar on hide */
    destroyOnHide: {
        type: BooleanConstructor;
        default: () => boolean;
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
     * Component to be injected, used to open a component sidebar programmatically.
     * Close sidebar within the component by emitting a 'close' event — emits('close')
     */
    component: {
        type: PropType<Component>;
        default: any;
    };
    /** Props to be binded to the injected component. */
    props: {
        type: ObjectConstructor;
        default: any;
    };
    /** Events to be binded to the injected component. */
    events: {
        type: ObjectConstructor;
        default: () => {};
    };
    /** DOM element where the sidebar component will be created on (for programmatic usage). */
    container: {
        type: PropType<string | HTMLElement>;
        default: () => string;
    };
    /**
     * This is used internally for programmatic usage.
     * @ignore
     */
    programmatic: {
        type: PropType<ProgrammaticInstance<import("vue").ComponentInternalInstance>>;
        default: any;
    };
    /**
     * This is used internally for programmatic usage.
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
    /** Class of sidebar component when its active */
    activeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of sidebar when teleported */
    teleportClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar overlay */
    overlayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar content */
    contentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar position */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar when is fullheight */
    fullheightClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar when is fullwidth */
    fullwidthClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar when its inlined */
    inlineClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar when reduced */
    reduceClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar when expanded on hover */
    expandOnHoverClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of sidebar component when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the body when sidebar clipped */
    crollClipClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the body when sidebar is not clipped */
    noScrollClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar content when sidebar is hidden */
    hiddenClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sidebar content when sidebar is visible */
    visibleClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onClose?: (...args: any[]) => any;
    "onUpdate:active"?: (value: boolean) => any;
}, {
    reduce: boolean;
    override: boolean;
    props: Record<string, any>;
    scroll: string;
    mobileBreakpoint: string;
    onCancel: () => void;
    onClose: () => void;
    variant: string;
    rootClass: ComponentClass;
    mobileClass: ComponentClass;
    component: any;
    mobile: string;
    position: "top" | "bottom" | "left" | "right";
    animation: string;
    teleport: string | boolean | Record<string, any>;
    variantClass: ComponentClass;
    active: boolean;
    inline: boolean;
    teleportClass: ComponentClass;
    inlineClass: ComponentClass;
    positionClass: ComponentClass;
    activeClass: ComponentClass;
    overlay: boolean;
    overlayClass: ComponentClass;
    contentClass: ComponentClass;
    events: Record<string, any>;
    cancelable: boolean | string[];
    container: string | HTMLElement;
    programmatic: ProgrammaticInstance<import("vue").ComponentInternalInstance>;
    promise: Promise<unknown>;
    destroyOnHide: boolean;
    noScrollClass: ComponentClass;
    fullheight: boolean;
    fullwidth: boolean;
    expandOnHover: boolean;
    fullheightClass: ComponentClass;
    fullwidthClass: ComponentClass;
    reduceClass: ComponentClass;
    expandOnHoverClass: ComponentClass;
    crollClipClass: ComponentClass;
    hiddenClass: ComponentClass;
    visibleClass: ComponentClass;
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
