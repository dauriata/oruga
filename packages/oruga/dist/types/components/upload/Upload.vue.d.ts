import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: PropType<object | File | object[] | File[]>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Same as native, also push new item to v-model instead of replacing */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native accept */
    accept: {
        type: StringConstructor;
        default: any;
    };
    /** Accepts drag & drop and change its style */
    dragDrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Upload will be expanded (full-width) */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Replace last chosen files every time (like native file input element) */
    native: {
        type: BooleanConstructor;
        default: boolean;
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
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Upload when draggable */
    draggableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Upload variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Upload when expanded */
    expandedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Upload when disabled */
    disabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Upload when hovered */
    hoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: object | File | object[] | File[]) => void;
    focus: (event: Event) => void;
    blur: (event: Event) => void;
    invalid: (event: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: PropType<object | File | object[] | File[]>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Same as native, also push new item to v-model instead of replacing */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native accept */
    accept: {
        type: StringConstructor;
        default: any;
    };
    /** Accepts drag & drop and change its style */
    dragDrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Upload will be expanded (full-width) */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Replace last chosen files every time (like native file input element) */
    native: {
        type: BooleanConstructor;
        default: boolean;
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
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Upload when draggable */
    draggableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Upload variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Upload when expanded */
    expandedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Upload when disabled */
    disabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Upload when hovered */
    hoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onBlur?: (event: Event) => any;
    onFocus?: (event: Event) => any;
    onInvalid?: (event: Event) => any;
    "onUpdate:modelValue"?: (value: object | File | object[] | File[]) => any;
}, {
    override: boolean;
    useHtml5Validation: boolean;
    variant: string;
    rootClass: ComponentClass;
    validationMessage: string;
    expanded: boolean;
    disabled: boolean;
    ariaLabelledby: string;
    expandedClass: ComponentClass;
    disabledClass: ComponentClass;
    variantClass: ComponentClass;
    multiple: boolean;
    accept: string;
    dragDrop: boolean;
    native: boolean;
    draggableClass: ComponentClass;
    hoveredClass: ComponentClass;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
