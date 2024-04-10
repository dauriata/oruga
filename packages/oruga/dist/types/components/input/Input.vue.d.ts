import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: import("vue").DefineComponent<{
    modelValue: PropType<string | number>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * Input type, like native
     * @values Any native input type, and textarea
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Size of the control
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
    /** Input placeholder */
    placeholder: {
        type: StringConstructor;
        default: any;
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
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Adds the reveal password functionality */
    passwordReveal: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native maxlength, plus character counter */
    maxlength: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Show character counter when maxlength prop is passed */
    counter: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Automatically adjust height in textarea */
    autosize: {
        type: BooleanConstructor;
        default: boolean;
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
    /** Add a button/icon to clear the inputed text */
    clearable: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Icon name to be added on the clear button */
    clearIcon: {
        type: StringConstructor;
        default: () => string;
    };
    /** Show status icon using field and variant prop */
    statusIcon: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Native options to use in HTML5 validation */
    autocomplete: {
        type: StringConstructor;
        default: () => string;
    };
    /** Accessibility label to establish relationship between the checkbox and control label */
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
    /** Class of input when expanded */
    expandedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of input when type textarea */
    textareaClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the left icon space inside the input */
    iconLeftSpaceClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the right icon space inside the input */
    iconRightSpaceClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the native input element */
    inputClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of input when rounded */
    roundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of input when disabled */
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
    /** Class to display when a right icon is used */
    hasIconRightClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the counter element */
    counterClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the input size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the input variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => void;
    input: (value: string | number, event: Event) => void;
    focus: (event: Event) => void;
    blur: (event: Event) => void;
    invalid: (event: Event) => void;
    "icon-click": (event: Event) => void;
    "icon-right-click": (event: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: PropType<string | number>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * Input type, like native
     * @values Any native input type, and textarea
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Size of the control
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
    /** Input placeholder */
    placeholder: {
        type: StringConstructor;
        default: any;
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
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Adds the reveal password functionality */
    passwordReveal: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native maxlength, plus character counter */
    maxlength: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Show character counter when maxlength prop is passed */
    counter: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Automatically adjust height in textarea */
    autosize: {
        type: BooleanConstructor;
        default: boolean;
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
    /** Add a button/icon to clear the inputed text */
    clearable: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Icon name to be added on the clear button */
    clearIcon: {
        type: StringConstructor;
        default: () => string;
    };
    /** Show status icon using field and variant prop */
    statusIcon: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Native options to use in HTML5 validation */
    autocomplete: {
        type: StringConstructor;
        default: () => string;
    };
    /** Accessibility label to establish relationship between the checkbox and control label */
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
    /** Class of input when expanded */
    expandedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of input when type textarea */
    textareaClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the left icon space inside the input */
    iconLeftSpaceClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the right icon space inside the input */
    iconRightSpaceClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the native input element */
    inputClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of input when rounded */
    roundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of input when disabled */
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
    /** Class to display when a right icon is used */
    hasIconRightClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the counter element */
    counterClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the input size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the input variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onInput?: (value: string | number, event: Event) => any;
    onBlur?: (event: Event) => any;
    onFocus?: (event: Event) => any;
    onInvalid?: (event: Event) => any;
    "onUpdate:modelValue"?: (value: string | number) => any;
    "onIcon-click"?: (event: Event) => any;
    "onIcon-right-click"?: (event: Event) => any;
}, {
    size: string;
    override: boolean;
    iconPack: string;
    statusIcon: boolean;
    useHtml5Validation: boolean;
    type: string;
    variant: string;
    rootClass: ComponentClass;
    validationMessage: string;
    placeholder: string;
    expanded: boolean;
    rounded: boolean;
    disabled: boolean;
    maxlength: string | number;
    icon: string;
    iconClickable: boolean;
    iconRight: string;
    iconRightClickable: boolean;
    iconRightVariant: string;
    clearable: boolean;
    clearIcon: string;
    autocomplete: string;
    passwordReveal: boolean;
    counter: boolean;
    autosize: boolean;
    ariaLabelledby: string;
    expandedClass: ComponentClass;
    textareaClass: ComponentClass;
    iconLeftSpaceClass: ComponentClass;
    iconRightSpaceClass: ComponentClass;
    inputClass: ComponentClass;
    roundedClass: ComponentClass;
    disabledClass: ComponentClass;
    iconLeftClass: ComponentClass;
    iconRightClass: ComponentClass;
    hasIconRightClass: ComponentClass;
    counterClass: ComponentClass;
    sizeClass: ComponentClass;
    variantClass: ComponentClass;
}, {}>;
export default _default;
