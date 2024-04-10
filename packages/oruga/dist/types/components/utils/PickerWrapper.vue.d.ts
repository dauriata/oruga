import { type PropType } from "vue";
import type { ClassBind, ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** parent picker component props  */
    pickerProps: {
        type: ObjectConstructor;
        required: true;
    };
    /** data-oruga attribute value */
    dataOruga: {
        type: StringConstructor;
        required: true;
    };
    /** the input value */
    value: {
        type: (ArrayConstructor | DateConstructor)[];
        default: any;
    };
    /** the active state of the dropdown */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    formattedValue: {
        type: StringConstructor;
        default: any;
    };
    nativeType: {
        type: StringConstructor;
        required: true;
    };
    nativeStep: {
        type: StringConstructor;
        default: any;
    };
    nativeValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    nativeMin: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    nativeMax: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    stayOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    rootClasses: {
        type: PropType<ClassBind[]>;
        required: true;
    };
    dropdownClasses: {
        type: PropType<ClassBind[]>;
        required: true;
    };
    boxClass: {
        type: PropType<ComponentClass>;
        required: true;
    };
}, {
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:active": (value: boolean) => void;
    change: (value: string) => void;
    "native-change": (value: string) => void;
    focus: (evt: Event) => void;
    blur: (evt: Event) => void;
    invalid: (evt: Event) => void;
    "icon-click": (evt: Event) => void;
    "icon-right-click": (evt: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** parent picker component props  */
    pickerProps: {
        type: ObjectConstructor;
        required: true;
    };
    /** data-oruga attribute value */
    dataOruga: {
        type: StringConstructor;
        required: true;
    };
    /** the input value */
    value: {
        type: (ArrayConstructor | DateConstructor)[];
        default: any;
    };
    /** the active state of the dropdown */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    formattedValue: {
        type: StringConstructor;
        default: any;
    };
    nativeType: {
        type: StringConstructor;
        required: true;
    };
    nativeStep: {
        type: StringConstructor;
        default: any;
    };
    nativeValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    nativeMin: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    nativeMax: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    stayOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    rootClasses: {
        type: PropType<ClassBind[]>;
        required: true;
    };
    dropdownClasses: {
        type: PropType<ClassBind[]>;
        required: true;
    };
    boxClass: {
        type: PropType<ComponentClass>;
        required: true;
    };
}>> & {
    onBlur?: (evt: Event) => any;
    onChange?: (value: string) => any;
    onFocus?: (evt: Event) => any;
    onInvalid?: (evt: Event) => any;
    "onIcon-click"?: (evt: Event) => any;
    "onIcon-right-click"?: (evt: Event) => any;
    "onUpdate:active"?: (value: boolean) => any;
    "onNative-change"?: (value: string) => any;
}, {
    value: unknown[] | Date;
    active: boolean;
    nativeValue: string | number;
    formattedValue: string;
    nativeStep: string;
    nativeMin: string | number;
    nativeMax: string | number;
    stayOpen: boolean;
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
