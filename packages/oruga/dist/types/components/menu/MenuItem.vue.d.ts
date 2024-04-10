import { type PropType } from "vue";
import type { ComponentClass, DynamicComponent } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** The active state of the menu item, use v-model:active to make it two-way binding. */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Menu item label */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** Menu item will be expanded */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Menu item will be disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
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
    /** Transition name to apply on menu list */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /** Menu item tag name */
    tag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /**
     * Role attribute to be passed to the list item for better accessibility.
     * @values listitem, menuitem
     */
    ariaRole: {
        type: StringConstructor;
        default: string;
    };
    /** Class of the menu item */
    itemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the active menu item */
    itemActiveClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the disabled menu item */
    itemDisabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the icon of menu item */
    itemIconTextClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the menu item when is a submenu */
    itemSubmenuClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the root element of menu item */
    itemWrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    "update:expanded": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** The active state of the menu item, use v-model:active to make it two-way binding. */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Menu item label */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** Menu item will be expanded */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Menu item will be disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
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
    /** Transition name to apply on menu list */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /** Menu item tag name */
    tag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /**
     * Role attribute to be passed to the list item for better accessibility.
     * @values listitem, menuitem
     */
    ariaRole: {
        type: StringConstructor;
        default: string;
    };
    /** Class of the menu item */
    itemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the active menu item */
    itemActiveClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the disabled menu item */
    itemDisabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the icon of menu item */
    itemIconTextClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the menu item when is a submenu */
    itemSubmenuClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the root element of menu item */
    itemWrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    "onUpdate:modelValue"?: (value: boolean) => any;
    "onUpdate:expanded"?: (value: boolean) => any;
}, {
    label: string;
    override: boolean;
    iconPack: string;
    expanded: boolean;
    disabled: boolean;
    animation: string;
    icon: string;
    itemClass: ComponentClass;
    active: boolean;
    ariaRole: string;
    tag: DynamicComponent;
    itemActiveClass: ComponentClass;
    itemDisabledClass: ComponentClass;
    iconSize: string;
    itemIconTextClass: ComponentClass;
    itemSubmenuClass: ComponentClass;
    itemWrapperClass: ComponentClass;
}, {}>, {
    label?(_: {
        expanded: boolean;
        active: boolean;
    }): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
