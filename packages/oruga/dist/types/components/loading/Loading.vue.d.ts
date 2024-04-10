import { type PropType } from "vue";
import type { ComponentClass, ProgrammaticInstance } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Whether loading is active or not, use v-model:active to make it two-way binding. */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Loader will overlay the full page. */
    fullPage: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Notification label, unnecessary when default slot is used. */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** Custom animation (transition name) */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /** Is Loading cancable by pressing escape or clicking outside. */
    cancelable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Callback function to call after user canceled (pressed escape / clicked outside). */
    onCancel: {
        type: PropType<() => void>;
        default: () => void;
    };
    /** Callback function to call after close (programmatically close or user canceled). */
    onClose: {
        type: PropType<() => void>;
        default: () => void;
    };
    /** Icon name to show, unnecessary when default slot is used. */
    icon: {
        type: StringConstructor;
        default: () => string;
    };
    /** Enable spin effect on icon */
    iconSpin: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * DOM element where the loading component will be created on (for programmatic usage).
     * Note that this also changes fullPage to false.
     */
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
    /** Class for the root element when fullpage */
    fullPageClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the loading overlay */
    overlayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the loading icon */
    iconClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the loading label */
    labelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {
    close: (...args: any[]) => void;
    promise: Promise<unknown>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:active": (value: boolean) => void;
    "update:fullPage": (value: boolean) => void;
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Whether loading is active or not, use v-model:active to make it two-way binding. */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Loader will overlay the full page. */
    fullPage: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Notification label, unnecessary when default slot is used. */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** Custom animation (transition name) */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /** Is Loading cancable by pressing escape or clicking outside. */
    cancelable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Callback function to call after user canceled (pressed escape / clicked outside). */
    onCancel: {
        type: PropType<() => void>;
        default: () => void;
    };
    /** Callback function to call after close (programmatically close or user canceled). */
    onClose: {
        type: PropType<() => void>;
        default: () => void;
    };
    /** Icon name to show, unnecessary when default slot is used. */
    icon: {
        type: StringConstructor;
        default: () => string;
    };
    /** Enable spin effect on icon */
    iconSpin: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * DOM element where the loading component will be created on (for programmatic usage).
     * Note that this also changes fullPage to false.
     */
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
    /** Class for the root element when fullpage */
    fullPageClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the loading overlay */
    overlayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the loading icon */
    iconClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the loading label */
    labelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onClose?: (...args: any[]) => any;
    "onUpdate:active"?: (value: boolean) => any;
    "onUpdate:fullPage"?: (value: boolean) => any;
}, {
    label: string;
    override: boolean;
    onCancel: () => void;
    onClose: () => void;
    rootClass: ComponentClass;
    labelClass: ComponentClass;
    animation: string;
    icon: string;
    active: boolean;
    iconClass: ComponentClass;
    iconSize: string;
    overlayClass: ComponentClass;
    fullPage: boolean;
    cancelable: boolean;
    iconSpin: boolean;
    container: string | HTMLElement;
    programmatic: ProgrammaticInstance<import("vue").ComponentInternalInstance>;
    promise: Promise<unknown>;
    fullPageClass: ComponentClass;
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
