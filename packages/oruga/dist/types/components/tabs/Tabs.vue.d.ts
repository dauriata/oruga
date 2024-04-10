import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: PropType<string | number>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Tab size
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Show tab in vertical layout */
    vertical: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Position of the tabs
     * @values left, centered, right
     */
    position: {
        type: StringConstructor;
        default: any;
        validator: (value: string) => boolean;
    };
    /**
     * Tab type
     * @values boxed, toggle
     */
    type: {
        type: StringConstructor;
        default: () => string;
    };
    /** Tabs will be expanded (full-width) */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Tab will have an animation */
    animated: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Transition animation name
     * @values [next, prev], [right, left, down, up]
     */
    animation: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (value: string[]) => boolean;
    };
    /** Apply animation on the initial render */
    animateInitially: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Show tab items multiline when there is no space */
    multiline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of Tabs component when when is vertical and its position changes */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of Tabs component when expanded */
    expandedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of Tabs component when vertical */
    verticalClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of Tabs component when multiline */
    multilineClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Tabs component nav tabs */
    navTabsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Size of the navigation */
    navSizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Tabs component nav position */
    navPositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Type of the navigation */
    navTypeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab content */
    contentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab content when transitioning */
    transitioningClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item wrapper */
    itemWrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => void;
    change: (newValue: string | number, oldValue: string | number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: PropType<string | number>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Tab size
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Show tab in vertical layout */
    vertical: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Position of the tabs
     * @values left, centered, right
     */
    position: {
        type: StringConstructor;
        default: any;
        validator: (value: string) => boolean;
    };
    /**
     * Tab type
     * @values boxed, toggle
     */
    type: {
        type: StringConstructor;
        default: () => string;
    };
    /** Tabs will be expanded (full-width) */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Tab will have an animation */
    animated: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Transition animation name
     * @values [next, prev], [right, left, down, up]
     */
    animation: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (value: string[]) => boolean;
    };
    /** Apply animation on the initial render */
    animateInitially: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Show tab items multiline when there is no space */
    multiline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of Tabs component when when is vertical and its position changes */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of Tabs component when expanded */
    expandedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of Tabs component when vertical */
    verticalClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of Tabs component when multiline */
    multilineClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Tabs component nav tabs */
    navTabsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Size of the navigation */
    navSizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Tabs component nav position */
    navPositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Type of the navigation */
    navTypeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab content */
    contentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab content when transitioning */
    transitioningClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item wrapper */
    itemWrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onChange?: (newValue: string | number, oldValue: string | number) => any;
    "onUpdate:modelValue"?: (value: string | number) => any;
}, {
    size: string;
    override: boolean;
    type: string;
    variant: string;
    rootClass: ComponentClass;
    position: string;
    expanded: boolean;
    animation: string[];
    expandedClass: ComponentClass;
    positionClass: ComponentClass;
    multiline: boolean;
    contentClass: ComponentClass;
    itemWrapperClass: ComponentClass;
    animated: boolean;
    multilineClass: ComponentClass;
    vertical: boolean;
    animateInitially: boolean;
    verticalClass: ComponentClass;
    navTabsClass: ComponentClass;
    navSizeClass: ComponentClass;
    navPositionClass: ComponentClass;
    navTypeClass: ComponentClass;
    transitioningClass: ComponentClass;
}, {}>, {
    start?(_: {}): any;
    end?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
