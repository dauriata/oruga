import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Menu label */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** If sub menu items are collapsible */
    accordion: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** If the menu items are clickable */
    activable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Role attribute to be passed to the list container for better accessibility.
     * Use menu only in situations where your dropdown is related to a navigation menu.
     * @values list, menu, dialog
     */
    ariaRole: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    /** Icon to be shown */
    icon: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the menu list */
    listClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the menu list label */
    listLabelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Menu label */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** If sub menu items are collapsible */
    accordion: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** If the menu items are clickable */
    activable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Role attribute to be passed to the list container for better accessibility.
     * Use menu only in situations where your dropdown is related to a navigation menu.
     * @values list, menu, dialog
     */
    ariaRole: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    /** Icon to be shown */
    icon: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the menu list */
    listClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the menu list label */
    listLabelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>>, {
    label: string;
    override: boolean;
    iconPack: string;
    rootClass: ComponentClass;
    icon: string;
    ariaRole: string;
    iconSize: string;
    accordion: boolean;
    activable: boolean;
    listClass: ComponentClass;
    listLabelClass: ComponentClass;
}, {}>, {
    label?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
