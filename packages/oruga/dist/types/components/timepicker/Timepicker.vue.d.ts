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
        type: PropType<Date>;
        default: any;
    };
    /** The active state of the dropdown */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Min time to select */
    minTime: {
        type: PropType<Date>;
        default: any;
    };
    /** Max time to select */
    maxTime: {
        type: PropType<Date>;
        default: any;
    };
    /** Display datepicker inline */
    inline: {
        type: BooleanConstructor;
        default: boolean;
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
    /** Makes the input rounded */
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native input readonly */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Size of the button
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    hourFormat: {
        type: StringConstructor;
        default: any;
    };
    incrementHours: {
        type: NumberConstructor;
        default: number;
    };
    incrementMinutes: {
        type: NumberConstructor;
        default: number;
    };
    incrementSeconds: {
        type: NumberConstructor;
        default: number;
    };
    /** Open dropdown on focus */
    openOnFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Close dropdown on click */
    closeOnClick: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    enableSeconds: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultMinutes: {
        type: NumberConstructor;
        default: any;
    };
    defaultSeconds: {
        type: NumberConstructor;
        default: any;
    };
    /** Date format locale */
    locale: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Custom function to format a date into a string */
    timeFormatter: {
        type: PropType<(date: Date) => string>;
        default: (date: Date | Date[], defaultFunction: (date: Date | Date[]) => string) => string;
    };
    /** Custom function to parse a string into a date */
    timeParser: {
        type: PropType<(date: string) => Date>;
        default: (date: string, defaultFunction: (date: string) => Date) => Date;
    };
    /** time creator function, default is `new Date()` */
    timeCreator: {
        type: PropType<() => Date>;
        default: () => Date;
    };
    /** Define a list of times which can not be selected */
    unselectableTimes: {
        type: PropType<Date[] | ((date: Date) => boolean)>;
        default: () => any[];
    };
    /** Reset the time inputs when meridian changes */
    resetOnMeridianChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Dropdown trapFocus */
    trapFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Dropdown position */
    position: {
        type: StringConstructor;
        default: any;
    };
    /** Enable dropdown mobile modal */
    mobileModal: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Enable mobile native input if mobile agent */
    mobileNative: {
        type: BooleanConstructor;
        default: () => boolean;
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
    /** Class of the Timepicker component size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Timepicker component box where you choose the date */
    boxClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Timepicker separator */
    separatorClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Timepicker footer */
    footerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /**
     * Class configuration for the internal input component
     * @ignore
     */
    inputClasses: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Class configuration for the internal dropdown component
     * @ignore
     */
    dropdownClasses: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Class configuration for the internal select component
     * @ignore
     */
    selectClasses: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: Date) => void;
    "update:active": (value: boolean) => void;
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
        type: PropType<Date>;
        default: any;
    };
    /** The active state of the dropdown */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Min time to select */
    minTime: {
        type: PropType<Date>;
        default: any;
    };
    /** Max time to select */
    maxTime: {
        type: PropType<Date>;
        default: any;
    };
    /** Display datepicker inline */
    inline: {
        type: BooleanConstructor;
        default: boolean;
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
    /** Makes the input rounded */
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native input readonly */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Size of the button
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    hourFormat: {
        type: StringConstructor;
        default: any;
    };
    incrementHours: {
        type: NumberConstructor;
        default: number;
    };
    incrementMinutes: {
        type: NumberConstructor;
        default: number;
    };
    incrementSeconds: {
        type: NumberConstructor;
        default: number;
    };
    /** Open dropdown on focus */
    openOnFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Close dropdown on click */
    closeOnClick: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    enableSeconds: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultMinutes: {
        type: NumberConstructor;
        default: any;
    };
    defaultSeconds: {
        type: NumberConstructor;
        default: any;
    };
    /** Date format locale */
    locale: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Custom function to format a date into a string */
    timeFormatter: {
        type: PropType<(date: Date) => string>;
        default: (date: Date | Date[], defaultFunction: (date: Date | Date[]) => string) => string;
    };
    /** Custom function to parse a string into a date */
    timeParser: {
        type: PropType<(date: string) => Date>;
        default: (date: string, defaultFunction: (date: string) => Date) => Date;
    };
    /** time creator function, default is `new Date()` */
    timeCreator: {
        type: PropType<() => Date>;
        default: () => Date;
    };
    /** Define a list of times which can not be selected */
    unselectableTimes: {
        type: PropType<Date[] | ((date: Date) => boolean)>;
        default: () => any[];
    };
    /** Reset the time inputs when meridian changes */
    resetOnMeridianChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Dropdown trapFocus */
    trapFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Dropdown position */
    position: {
        type: StringConstructor;
        default: any;
    };
    /** Enable dropdown mobile modal */
    mobileModal: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Enable mobile native input if mobile agent */
    mobileNative: {
        type: BooleanConstructor;
        default: () => boolean;
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
    /** Class of the Timepicker component size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Timepicker component box where you choose the date */
    boxClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Timepicker separator */
    separatorClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Timepicker footer */
    footerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /**
     * Class configuration for the internal input component
     * @ignore
     */
    inputClasses: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Class configuration for the internal dropdown component
     * @ignore
     */
    dropdownClasses: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Class configuration for the internal select component
     * @ignore
     */
    selectClasses: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    onBlur?: (event: Event) => any;
    onFocus?: (event: Event) => any;
    onInvalid?: (event: Event) => any;
    "onUpdate:modelValue"?: (value: Date) => any;
    "onIcon-click"?: (event: Event) => any;
    "onIcon-right-click"?: (event: Event) => any;
    "onUpdate:active"?: (value: boolean) => any;
}, {
    size: string;
    override: boolean;
    iconPack: string;
    useHtml5Validation: boolean;
    modelValue: Date;
    mobileBreakpoint: string;
    rootClass: ComponentClass;
    validationMessage: string;
    position: string;
    placeholder: string;
    expanded: boolean;
    rounded: boolean;
    disabled: boolean;
    openOnFocus: boolean;
    mobileModal: boolean;
    icon: string;
    iconRight: string;
    iconRightClickable: boolean;
    teleport: string | boolean | Record<string, any>;
    inputClasses: Record<string, any>;
    sizeClass: ComponentClass;
    active: boolean;
    inline: boolean;
    trapFocus: boolean;
    selectClasses: Record<string, any>;
    dropdownClasses: Record<string, any>;
    boxClass: ComponentClass;
    readonly: boolean;
    closeOnClick: boolean;
    locale: string;
    mobileNative: boolean;
    footerClass: ComponentClass;
    minTime: Date;
    maxTime: Date;
    hourFormat: string;
    incrementHours: number;
    incrementMinutes: number;
    incrementSeconds: number;
    enableSeconds: boolean;
    defaultMinutes: number;
    defaultSeconds: number;
    timeFormatter: (date: Date) => string;
    timeParser: (date: string) => Date;
    timeCreator: () => Date;
    unselectableTimes: Date[] | ((date: Date) => boolean);
    resetOnMeridianChange: boolean;
    separatorClass: ComponentClass;
}, {}>, {
    trigger?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
