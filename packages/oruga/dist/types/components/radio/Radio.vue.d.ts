import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** @model */
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
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
     * Size of the control
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Input label, unnecessary when default slot is used */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** Same as native value */
    nativeValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native required */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native name */
    name: {
        type: StringConstructor;
        default: any;
    };
    /** Accessibility label to establish relationship between the checkbox and control label */
    ariaLabelledby: {
        type: StringConstructor;
        default: () => string;
    };
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
        type: StringConstructor;
        default: () => string;
    };
    /** Enable html 5 native validation */
    useHtml5Validation: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when radio is disabled */
    disabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the root element when checked */
    checkedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the native input element */
    inputClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the native input element when checked */
    inputCheckedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the radio label */
    labelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the radio size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the radio variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | boolean) => void;
    input: (value: string | number | boolean, event: Event) => void;
    focus: (event: Event) => void;
    blur: (event: Event) => void;
    invalid: (event: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** @model */
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
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
     * Size of the control
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Input label, unnecessary when default slot is used */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** Same as native value */
    nativeValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native required */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native name */
    name: {
        type: StringConstructor;
        default: any;
    };
    /** Accessibility label to establish relationship between the checkbox and control label */
    ariaLabelledby: {
        type: StringConstructor;
        default: () => string;
    };
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
        type: StringConstructor;
        default: () => string;
    };
    /** Enable html 5 native validation */
    useHtml5Validation: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when radio is disabled */
    disabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the root element when checked */
    checkedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the native input element */
    inputClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the native input element when checked */
    inputCheckedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the radio label */
    labelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the radio size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the radio variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onInput?: (value: string | number | boolean, event: Event) => any;
    onBlur?: (event: Event) => any;
    onFocus?: (event: Event) => any;
    onInvalid?: (event: Event) => any;
    "onUpdate:modelValue"?: (value: string | number | boolean) => any;
}, {
    label: string;
    size: string;
    override: boolean;
    useHtml5Validation: boolean;
    required: boolean;
    modelValue: string | number | boolean;
    name: string;
    variant: string;
    rootClass: ComponentClass;
    labelClass: ComponentClass;
    disabled: boolean;
    autocomplete: string;
    ariaLabelledby: string;
    inputClass: ComponentClass;
    disabledClass: ComponentClass;
    sizeClass: ComponentClass;
    variantClass: ComponentClass;
    nativeValue: string | number | boolean;
    checkedClass: ComponentClass;
    inputCheckedClass: ComponentClass;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
