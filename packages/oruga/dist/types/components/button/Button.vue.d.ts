import { type PropType } from "vue";
import type { ComponentClass, DynamicComponent } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * Button tag name
     * @values button, a, input, router-link, nuxt-link (or other nuxt alias)
     */
    tag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /**
     * Color variant of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Button label, unnecessary when default slot is used */
    label: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => any;
    };
    /** Icon name to show on the left */
    iconLeft: {
        type: StringConstructor;
        default: any;
    };
    /** Icon name to show on the right */
    iconRight: {
        type: StringConstructor;
        default: any;
    };
    /** Enable rounded style */
    rounded: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Button will be expanded (full-width) */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Button will be disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable outlined style */
    outlined: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable loading style */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable inverted style */
    inverted: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Button type, like native */
    nativeType: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    /** Accessibility Role attribute to be passed to the button. */
    role: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * This is used internally
     * @ignore
     */
    iconBoth: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button elements wrapper */
    wrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button when outlined */
    outlinedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button with loading */
    loadingClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button when inverted */
    invertedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button when expanded */
    expandedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button when rounded */
    roundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button when disabled */
    disabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button icon */
    iconClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button icon on the left */
    iconLeftClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button icon on the right */
    iconRightClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button label */
    labelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * Button tag name
     * @values button, a, input, router-link, nuxt-link (or other nuxt alias)
     */
    tag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /**
     * Color variant of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Button label, unnecessary when default slot is used */
    label: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => any;
    };
    /** Icon name to show on the left */
    iconLeft: {
        type: StringConstructor;
        default: any;
    };
    /** Icon name to show on the right */
    iconRight: {
        type: StringConstructor;
        default: any;
    };
    /** Enable rounded style */
    rounded: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Button will be expanded (full-width) */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Button will be disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable outlined style */
    outlined: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable loading style */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable inverted style */
    inverted: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Button type, like native */
    nativeType: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    /** Accessibility Role attribute to be passed to the button. */
    role: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * This is used internally
     * @ignore
     */
    iconBoth: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button elements wrapper */
    wrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button when outlined */
    outlinedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button with loading */
    loadingClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button when inverted */
    invertedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button when expanded */
    expandedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button when rounded */
    roundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button when disabled */
    disabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button icon */
    iconClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button icon on the left */
    iconLeftClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button icon on the right */
    iconRightClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button label */
    labelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the button variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>>, {
    label: string;
    size: string;
    override: boolean;
    iconPack: string;
    variant: string;
    rootClass: ComponentClass;
    labelClass: ComponentClass;
    expanded: boolean;
    rounded: boolean;
    disabled: boolean;
    iconRight: string;
    expandedClass: ComponentClass;
    roundedClass: ComponentClass;
    disabledClass: ComponentClass;
    iconLeftClass: ComponentClass;
    iconRightClass: ComponentClass;
    sizeClass: ComponentClass;
    variantClass: ComponentClass;
    tag: DynamicComponent;
    iconLeft: string;
    outlined: boolean;
    loading: boolean;
    inverted: boolean;
    nativeType: string;
    role: string;
    iconBoth: boolean;
    wrapperClass: ComponentClass;
    outlinedClass: ComponentClass;
    loadingClass: ComponentClass;
    invertedClass: ComponentClass;
    iconClass: ComponentClass;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
