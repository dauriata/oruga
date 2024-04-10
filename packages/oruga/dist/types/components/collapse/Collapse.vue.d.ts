import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Whether collapse is open or not, use v-model:open to make it two-way binding */
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Custom animation (transition name) */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /** Id property of the content container */
    contentId: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Trigger position
     * @values top, bottom
     */
    position: {
        type: PropType<"top" | "bottom">;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the trigger element */
    triggerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the content */
    contentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => void;
    open: () => void;
    close: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Whether collapse is open or not, use v-model:open to make it two-way binding */
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Custom animation (transition name) */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /** Id property of the content container */
    contentId: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Trigger position
     * @values top, bottom
     */
    position: {
        type: PropType<"top" | "bottom">;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the trigger element */
    triggerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the content */
    contentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onClose?: () => any;
    onOpen?: () => any;
    "onUpdate:open"?: (value: boolean) => any;
}, {
    override: boolean;
    rootClass: ComponentClass;
    position: "top" | "bottom";
    animation: string;
    triggerClass: ComponentClass;
    open: boolean;
    contentId: string;
    contentClass: ComponentClass;
}, {}>, {
    trigger?(_: {
        open: boolean;
    }): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
