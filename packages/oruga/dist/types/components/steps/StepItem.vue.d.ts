import { type PropType } from "vue";
import type { ComponentClass, DynamicComponent } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Item value (it will be used as v-model of wrapper component) */
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => string;
    };
    /** Item label */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** Step marker content (when there is no icon) */
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /**
     * Default style for the step.
     * This will override parent type.
     * Could be used to set a completed step to "success" for example
     */
    variant: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Item can be used directly to navigate.
     * If undefined, previous steps are clickable while the others are not
     */
    clickable: {
        type: BooleanConstructor;
        default: any;
    };
    /** Show/hide item */
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Icon on the left */
    icon: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Icon pack */
    iconPack: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Step item tag name */
    tag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /** Role attribute to be passed to the div wrapper for better accessibility */
    ariaRole: {
        type: StringConstructor;
        default: () => string;
    };
    /** Sets a class to the item header */
    headerClass: {
        type: StringConstructor;
        default: any;
    };
    /** Class of the content item */
    itemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the nav item */
    itemHeaderClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the nav item when active */
    itemHeaderActiveClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the nav item behind the active one */
    itemHeaderPreviousClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the nav item with variant (default value by parent steps component) */
    itemHeaderVariantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    activate: () => void;
    deactivate: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Item value (it will be used as v-model of wrapper component) */
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => string;
    };
    /** Item label */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** Step marker content (when there is no icon) */
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /**
     * Default style for the step.
     * This will override parent type.
     * Could be used to set a completed step to "success" for example
     */
    variant: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Item can be used directly to navigate.
     * If undefined, previous steps are clickable while the others are not
     */
    clickable: {
        type: BooleanConstructor;
        default: any;
    };
    /** Show/hide item */
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Icon on the left */
    icon: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Icon pack */
    iconPack: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Step item tag name */
    tag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /** Role attribute to be passed to the div wrapper for better accessibility */
    ariaRole: {
        type: StringConstructor;
        default: () => string;
    };
    /** Sets a class to the item header */
    headerClass: {
        type: StringConstructor;
        default: any;
    };
    /** Class of the content item */
    itemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the nav item */
    itemHeaderClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the nav item when active */
    itemHeaderActiveClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the nav item behind the active one */
    itemHeaderPreviousClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the nav item with variant (default value by parent steps component) */
    itemHeaderVariantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onActivate?: () => any;
    onDeactivate?: () => any;
}, {
    label: string;
    override: boolean;
    iconPack: string;
    value: string | number;
    variant: string;
    icon: string;
    itemClass: ComponentClass;
    itemHeaderClass: ComponentClass;
    ariaRole: string;
    clickable: boolean;
    tag: DynamicComponent;
    step: string | number;
    headerClass: string;
    visible: boolean;
    itemHeaderActiveClass: ComponentClass;
    itemHeaderPreviousClass: ComponentClass;
    itemHeaderVariantClass: ComponentClass;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
