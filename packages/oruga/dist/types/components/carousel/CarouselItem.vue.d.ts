import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Make item clickable */
    clickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Role attribute to be passed to the div wrapper for better accessibility */
    ariaRole: {
        type: StringConstructor;
        default: () => string;
    };
    /** Class of carousel item */
    itemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of carousel item when is active */
    itemActiveClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of carousel item when is clickable */
    itemClickableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Make item clickable */
    clickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Role attribute to be passed to the div wrapper for better accessibility */
    ariaRole: {
        type: StringConstructor;
        default: () => string;
    };
    /** Class of carousel item */
    itemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of carousel item when is active */
    itemActiveClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of carousel item when is clickable */
    itemClickableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>>, {
    override: boolean;
    itemClass: ComponentClass;
    ariaRole: string;
    clickable: boolean;
    itemActiveClass: ComponentClass;
    itemClickableClass: ComponentClass;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
