import { type Component, type PropType } from "vue";
type Position = "top" | "bottom" | "left" | "right";
declare const contentRef: import("vue").Ref<HTMLElement | Component>;
declare function setContent<T extends typeof contentRef.value>(el: T): typeof el;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    teleport: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor)[];
        required: true;
    };
    trigger: {
        type: PropType<HTMLElement | Component>;
        default: any;
    };
    /**
     * Position of the component relative to the trigger
     * @values auto, top, bottom, left, right, top-right, top-left, bottom-left, bottom-right
     */
    position: {
        type: StringConstructor;
        validator: (value: string) => boolean;
        default: any;
    };
    /** Used for calculation position auto */
    defaultPosition: {
        type: PropType<Position>;
        validator: (value: string) => boolean;
        default: string;
    };
    /** disable the position calculation */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** update positioning on teleport */
    disablePositioning: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:position": (value: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    teleport: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor)[];
        required: true;
    };
    trigger: {
        type: PropType<HTMLElement | Component>;
        default: any;
    };
    /**
     * Position of the component relative to the trigger
     * @values auto, top, bottom, left, right, top-right, top-left, bottom-left, bottom-right
     */
    position: {
        type: StringConstructor;
        validator: (value: string) => boolean;
        default: any;
    };
    /** Used for calculation position auto */
    defaultPosition: {
        type: PropType<Position>;
        validator: (value: string) => boolean;
        default: string;
    };
    /** disable the position calculation */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** update positioning on teleport */
    disablePositioning: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:position"?: (value: string) => any;
}, {
    position: string;
    disabled: boolean;
    trigger: any;
    defaultPosition: Position;
    disablePositioning: boolean;
}, {}>, {
    default?(_: {
        setContent: typeof setContent;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
