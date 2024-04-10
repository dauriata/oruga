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
    /** Item will be disabled */
    disabled: {
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
    /** Show/hide item */
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Tabs item tag name */
    tag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /** Role attribute to be passed to the div wrapper for better accessibility. */
    ariaRole: {
        type: StringConstructor;
        default: () => string;
    };
    /** Sets a class to the item header */
    headerClass: {
        type: StringConstructor;
        default: any;
    };
    /** Class of the tab item */
    itemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item header */
    itemHeaderClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item header when active */
    itemHeaderActiveClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item header when disabled */
    itemHeaderDisabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item header type */
    itemHeaderTypeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item header icon */
    itemHeaderIconClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item header text */
    itemHeaderTextClass: {
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
    /** Item will be disabled */
    disabled: {
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
    /** Show/hide item */
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Tabs item tag name */
    tag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /** Role attribute to be passed to the div wrapper for better accessibility. */
    ariaRole: {
        type: StringConstructor;
        default: () => string;
    };
    /** Sets a class to the item header */
    headerClass: {
        type: StringConstructor;
        default: any;
    };
    /** Class of the tab item */
    itemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item header */
    itemHeaderClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item header when active */
    itemHeaderActiveClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item header when disabled */
    itemHeaderDisabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item header type */
    itemHeaderTypeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item header icon */
    itemHeaderIconClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tab item header text */
    itemHeaderTextClass: {
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
    disabled: boolean;
    icon: string;
    itemClass: ComponentClass;
    itemHeaderClass: ComponentClass;
    ariaRole: string;
    tag: DynamicComponent;
    headerClass: string;
    visible: boolean;
    itemHeaderActiveClass: ComponentClass;
    itemHeaderDisabledClass: ComponentClass;
    itemHeaderTypeClass: ComponentClass;
    itemHeaderIconClass: ComponentClass;
    itemHeaderTextClass: ComponentClass;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
