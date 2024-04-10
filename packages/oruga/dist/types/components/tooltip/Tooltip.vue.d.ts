import { type PropType } from "vue";
import type { ComponentClass, DynamicComponent } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Whether tooltip is active or not, use v-model:active to make it two-way binding */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Tooltip text, unnecessary when content slot is used */
    label: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Color of the tooltip
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Position of the Tooltip relative to the trigger
     * @values auto, top, bottom, left, right, top-right, top-left, bottom-left, bottom-right
     */
    position: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Tooltip will be always active */
    always: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Tooltip will be disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Tooltip default animation */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /** Tooltip will be multilined */
    multiline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Tooltip trigger tag name */
    triggerTag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /**
     * Tooltip trigger events
     * @values hover, click, focus, contextmenu
     */
    triggers: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (values: string[]) => boolean;
    };
    /** Tooltip delay before it appears (number in ms) */
    delay: {
        type: NumberConstructor;
        default: any;
    };
    /**
     * Tooltip auto close options (pressing escape, clicking the content or outside)
     * @values true, false, content, outside, escape
     */
    closeable: {
        type: PropType<boolean | string[]>;
        default: () => string[];
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
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when the dropdown is teleported */
    teleportClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip content */
    contentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip trigger position */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip trigger */
    triggerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip content when is multiline */
    multilineClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip trigger when is always visible */
    alwaysClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip arrow */
    arrowClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip arrow position */
    arrowPositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:active": (value: boolean) => void;
    close: () => void;
    open: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Whether tooltip is active or not, use v-model:active to make it two-way binding */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Tooltip text, unnecessary when content slot is used */
    label: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Color of the tooltip
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Position of the Tooltip relative to the trigger
     * @values auto, top, bottom, left, right, top-right, top-left, bottom-left, bottom-right
     */
    position: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Tooltip will be always active */
    always: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Tooltip will be disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Tooltip default animation */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /** Tooltip will be multilined */
    multiline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Tooltip trigger tag name */
    triggerTag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /**
     * Tooltip trigger events
     * @values hover, click, focus, contextmenu
     */
    triggers: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (values: string[]) => boolean;
    };
    /** Tooltip delay before it appears (number in ms) */
    delay: {
        type: NumberConstructor;
        default: any;
    };
    /**
     * Tooltip auto close options (pressing escape, clicking the content or outside)
     * @values true, false, content, outside, escape
     */
    closeable: {
        type: PropType<boolean | string[]>;
        default: () => string[];
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
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when the dropdown is teleported */
    teleportClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip content */
    contentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip trigger position */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip trigger */
    triggerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip content when is multiline */
    multilineClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip trigger when is always visible */
    alwaysClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip arrow */
    arrowClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip arrow position */
    arrowPositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onClose?: () => any;
    "onUpdate:active"?: (value: boolean) => any;
    onOpen?: () => any;
}, {
    label: string;
    override: boolean;
    variant: string;
    rootClass: ComponentClass;
    position: string;
    disabled: boolean;
    animation: string;
    teleport: string | boolean | Record<string, any>;
    variantClass: ComponentClass;
    active: boolean;
    triggerTag: DynamicComponent;
    triggers: string[];
    delay: number;
    closeable: boolean | string[];
    teleportClass: ComponentClass;
    triggerClass: ComponentClass;
    positionClass: ComponentClass;
    multiline: boolean;
    contentClass: ComponentClass;
    arrowClass: ComponentClass;
    always: boolean;
    multilineClass: ComponentClass;
    alwaysClass: ComponentClass;
    arrowPositionClass: ComponentClass;
}, {}>, {
    content?(_: {}): any;
    default?(_: {
        active: boolean;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
