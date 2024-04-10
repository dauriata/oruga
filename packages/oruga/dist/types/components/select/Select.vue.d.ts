import { type PropType } from "vue";
import type { OptionsItem } from "./types";
import type { ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** @model */
    modelValue: {
        type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Select options, unnecessary when default slot is used */
    options: {
        type: PropType<string[] | OptionsItem[]>;
        default: any;
    };
    /**
     * Vertical size of input
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Text when nothing is selected */
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    /** Allow multiple selection */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Makes input full width when inside a grouped or addon field */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Makes the element rounded */
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native size */
    nativeSize: {
        type: (StringConstructor | NumberConstructor)[];
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
    /** Icon to be shown */
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    /** Makes the icon clickable */
    iconClickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Icon to be added on the right side */
    iconRight: {
        type: StringConstructor;
        default: () => any;
    };
    /** Make the icon right clickable */
    iconRightClickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Variant of right icon */
    iconRightVariant: {
        type: StringConstructor;
        default: any;
    };
    /** Accessibility label to establish relationship between the input and control label */
    ariaLabelledby: {
        type: StringConstructor;
        default: () => string;
    };
    /** Enable html 5 native validation */
    useHtml5Validation: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** The message which is shown when a validation error occurs */
    validationMessage: {
        type: StringConstructor;
        default: any;
    };
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
        type: StringConstructor;
        default: () => string;
    };
    /** Show status icon using field and variant prop */
    statusIcon: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the native select element */
    selectClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the left icon space inside the select */
    iconLeftSpaceClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the right icon space inside the select */
    iconRightSpaceClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of select when rounded */
    roundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the select when multiple mode is active */
    multipleClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of select when expanded */
    expandedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of select when disabled */
    disabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the left icon */
    iconLeftClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the right icon */
    iconRightClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the select size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the select variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the select placeholder */
    placeholderClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the select arrow */
    arrowClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the select variant for the root element*/
    rootVariantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | boolean | object | any[]) => void;
    focus: (event: Event) => void;
    blur: (event: Event) => void;
    invalid: (event: Event) => void;
    "icon-click": (event: Event) => void;
    "icon-right-click": (event: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** @model */
    modelValue: {
        type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Select options, unnecessary when default slot is used */
    options: {
        type: PropType<string[] | OptionsItem[]>;
        default: any;
    };
    /**
     * Vertical size of input
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Text when nothing is selected */
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    /** Allow multiple selection */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Makes input full width when inside a grouped or addon field */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Makes the element rounded */
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native size */
    nativeSize: {
        type: (StringConstructor | NumberConstructor)[];
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
    /** Icon to be shown */
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    /** Makes the icon clickable */
    iconClickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Icon to be added on the right side */
    iconRight: {
        type: StringConstructor;
        default: () => any;
    };
    /** Make the icon right clickable */
    iconRightClickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Variant of right icon */
    iconRightVariant: {
        type: StringConstructor;
        default: any;
    };
    /** Accessibility label to establish relationship between the input and control label */
    ariaLabelledby: {
        type: StringConstructor;
        default: () => string;
    };
    /** Enable html 5 native validation */
    useHtml5Validation: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** The message which is shown when a validation error occurs */
    validationMessage: {
        type: StringConstructor;
        default: any;
    };
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
        type: StringConstructor;
        default: () => string;
    };
    /** Show status icon using field and variant prop */
    statusIcon: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the native select element */
    selectClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the left icon space inside the select */
    iconLeftSpaceClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the right icon space inside the select */
    iconRightSpaceClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of select when rounded */
    roundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the select when multiple mode is active */
    multipleClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of select when expanded */
    expandedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of select when disabled */
    disabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the left icon */
    iconLeftClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the right icon */
    iconRightClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the select size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the select variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the select placeholder */
    placeholderClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the select arrow */
    arrowClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the select variant for the root element*/
    rootVariantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onBlur?: (event: Event) => any;
    onFocus?: (event: Event) => any;
    onInvalid?: (event: Event) => any;
    "onUpdate:modelValue"?: (value: string | number | boolean | object | any[]) => any;
    "onIcon-click"?: (event: Event) => any;
    "onIcon-right-click"?: (event: Event) => any;
}, {
    size: string;
    override: boolean;
    iconPack: string;
    statusIcon: boolean;
    useHtml5Validation: boolean;
    modelValue: string | number | boolean | Record<string, any> | unknown[];
    variant: string;
    rootClass: ComponentClass;
    validationMessage: string;
    placeholder: string;
    expanded: boolean;
    rounded: boolean;
    disabled: boolean;
    icon: string;
    iconClickable: boolean;
    iconRight: string;
    iconRightClickable: boolean;
    iconRightVariant: string;
    autocomplete: string;
    ariaLabelledby: string;
    expandedClass: ComponentClass;
    iconLeftSpaceClass: ComponentClass;
    iconRightSpaceClass: ComponentClass;
    roundedClass: ComponentClass;
    disabledClass: ComponentClass;
    iconLeftClass: ComponentClass;
    iconRightClass: ComponentClass;
    sizeClass: ComponentClass;
    variantClass: ComponentClass;
    multiple: boolean;
    options: string[] | OptionsItem[];
    nativeSize: string | number;
    selectClass: ComponentClass;
    multipleClass: ComponentClass;
    placeholderClass: ComponentClass;
    arrowClass: ComponentClass;
    rootVariantClass: ComponentClass;
}, {}>, {
    placeholder?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
