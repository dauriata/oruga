import { type PropType, type Component } from "vue";
import type { ProgrammaticInstance, ComponentClass } from '../../types';
declare function handleClose(...args: any[]): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Whether notification is active or not, use v-model:active to make it two-way binding. */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Which position the notification will appear when programmatically.
     * @values top-right, top, top-left, bottom-right, bottom, bottom-left
     */
    position: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Hide notification after duration (in miliseconds) */
    duration: {
        type: NumberConstructor;
        default: () => number;
    };
    /** Show the Notification infinitely until it is dismissed. */
    infinite: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** If notice should queue with others notices (snackbar/toast/notification). */
    queue: {
        type: BooleanConstructor;
        default: () => unknown;
    };
    /** Callback function to call after user canceled (pressed escape / clicked outside). */
    onCancel: {
        type: PropType<() => void>;
        default: () => void;
    };
    /** Callback function to call after close (programmatically close or user canceled). */
    onClose: {
        type: PropType<() => void>;
        default: () => void;
    };
    /**
     * Component to be injected.
     * Close notification within the component by emitting a 'close' event — $emit('close').
     */
    component: {
        type: PropType<Component>;
        default: any;
    };
    /** Props to be binded to the injected component. */
    props: {
        type: ObjectConstructor;
        default: any;
    };
    /** Events to be binded to the injected component. */
    events: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * DOM element the toast will be created on (for programmatic usage).
     * Note that this also changes the position of the toast from fixed to absolute.
     * Meaning that the container should be fixed.
     */
    container: {
        type: PropType<string | HTMLElement>;
        default: () => string;
    };
    /**
     * Props passed to the internal notification component.
     * @ignore
     */
    notification: {
        type: PropType<NonNullable<Partial<{
            override: boolean;
            iconPack: string;
            type: string;
            variant: string;
            message: string | string[];
            rootClass: ComponentClass;
            position: string;
            animation: string;
            icon: string;
            variantClass: ComponentClass;
            active: boolean;
            positionClass: ComponentClass;
            wrapperClass: ComponentClass;
            iconClass: ComponentClass;
            iconSize: string;
            contentClass: ComponentClass;
            closeIcon: string;
            closeIconSize: string;
            closeClass: ComponentClass;
            ariaCloseLabel: string;
            closable: boolean;
        }> & Omit<{
            readonly iconPack: string;
            readonly variant: string;
            readonly position: string;
            readonly animation: string;
            readonly active: boolean;
            readonly iconSize: string;
            readonly closeIcon: string;
            readonly closeIconSize: string;
            readonly ariaCloseLabel: string;
            readonly closable: boolean;
            readonly override?: boolean;
            readonly type?: string;
            readonly message?: string | string[];
            readonly rootClass?: ComponentClass;
            readonly icon?: string;
            readonly variantClass?: ComponentClass;
            readonly positionClass?: ComponentClass;
            readonly wrapperClass?: ComponentClass;
            readonly iconClass?: ComponentClass;
            readonly contentClass?: ComponentClass;
            readonly closeClass?: ComponentClass;
            onClose?: (...args: any[]) => any;
            "onUpdate:active"?: (value: boolean) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            override: {
                type: BooleanConstructor;
                default: any;
            };
            active: {
                type: BooleanConstructor;
                default: boolean;
            };
            type: {
                type: StringConstructor;
                default: any;
                validator: (value: string) => boolean;
            };
            variant: {
                type: StringConstructor;
                default: () => unknown;
            };
            position: {
                type: StringConstructor;
                default: () => string;
                validator: (value: string) => boolean;
            };
            message: {
                type: PropType<string | string[]>;
                default: any;
            };
            animation: {
                type: StringConstructor;
                default: () => string;
            };
            ariaCloseLabel: {
                type: StringConstructor;
                default: () => string;
            };
            iconPack: {
                type: StringConstructor;
                default: () => unknown;
            };
            icon: {
                type: StringConstructor;
                default: any;
            };
            iconSize: {
                type: StringConstructor;
                default: () => string;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            closeIcon: {
                type: StringConstructor;
                default: () => string;
            };
            closeIconSize: {
                type: StringConstructor;
                default: () => unknown;
            };
            rootClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            closeClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            contentClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            iconClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            positionClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            variantClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            wrapperClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
        }>> & {
            onClose?: (...args: any[]) => any;
            "onUpdate:active"?: (value: boolean) => any;
        }, "override" | "iconPack" | "type" | "variant" | "message" | "rootClass" | "position" | "animation" | "icon" | "variantClass" | "active" | "positionClass" | "wrapperClass" | "iconClass" | "iconSize" | "contentClass" | "closeIcon" | "closeIconSize" | "closeClass" | "ariaCloseLabel" | "closable">>>;
        default: () => {};
    };
    /**
     * This is used internally for programmatic usage.
     * @ignore
     */
    programmatic: {
        type: PropType<ProgrammaticInstance<import("vue").ComponentInternalInstance>>;
        default: any;
    };
    /**
     * This is used internally for programmatic usage.
     * @ignore
     */
    promise: {
        type: PromiseConstructor;
        default: any;
    };
    /** Root class of the notice */
    noticeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the notice when positioned */
    noticePositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the custom container element */
    noticeCustomContainerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {
    close: typeof handleClose;
    promise: Promise<unknown>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:active": (value: boolean) => void;
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Whether notification is active or not, use v-model:active to make it two-way binding. */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Which position the notification will appear when programmatically.
     * @values top-right, top, top-left, bottom-right, bottom, bottom-left
     */
    position: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Hide notification after duration (in miliseconds) */
    duration: {
        type: NumberConstructor;
        default: () => number;
    };
    /** Show the Notification infinitely until it is dismissed. */
    infinite: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** If notice should queue with others notices (snackbar/toast/notification). */
    queue: {
        type: BooleanConstructor;
        default: () => unknown;
    };
    /** Callback function to call after user canceled (pressed escape / clicked outside). */
    onCancel: {
        type: PropType<() => void>;
        default: () => void;
    };
    /** Callback function to call after close (programmatically close or user canceled). */
    onClose: {
        type: PropType<() => void>;
        default: () => void;
    };
    /**
     * Component to be injected.
     * Close notification within the component by emitting a 'close' event — $emit('close').
     */
    component: {
        type: PropType<Component>;
        default: any;
    };
    /** Props to be binded to the injected component. */
    props: {
        type: ObjectConstructor;
        default: any;
    };
    /** Events to be binded to the injected component. */
    events: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * DOM element the toast will be created on (for programmatic usage).
     * Note that this also changes the position of the toast from fixed to absolute.
     * Meaning that the container should be fixed.
     */
    container: {
        type: PropType<string | HTMLElement>;
        default: () => string;
    };
    /**
     * Props passed to the internal notification component.
     * @ignore
     */
    notification: {
        type: PropType<NonNullable<Partial<{
            override: boolean;
            iconPack: string;
            type: string;
            variant: string;
            message: string | string[];
            rootClass: ComponentClass;
            position: string;
            animation: string;
            icon: string;
            variantClass: ComponentClass;
            active: boolean;
            positionClass: ComponentClass;
            wrapperClass: ComponentClass;
            iconClass: ComponentClass;
            iconSize: string;
            contentClass: ComponentClass;
            closeIcon: string;
            closeIconSize: string;
            closeClass: ComponentClass;
            ariaCloseLabel: string;
            closable: boolean;
        }> & Omit<{
            readonly iconPack: string;
            readonly variant: string;
            readonly position: string;
            readonly animation: string;
            readonly active: boolean;
            readonly iconSize: string;
            readonly closeIcon: string;
            readonly closeIconSize: string;
            readonly ariaCloseLabel: string;
            readonly closable: boolean;
            readonly override?: boolean;
            readonly type?: string;
            readonly message?: string | string[];
            readonly rootClass?: ComponentClass;
            readonly icon?: string;
            readonly variantClass?: ComponentClass;
            readonly positionClass?: ComponentClass;
            readonly wrapperClass?: ComponentClass;
            readonly iconClass?: ComponentClass;
            readonly contentClass?: ComponentClass;
            readonly closeClass?: ComponentClass;
            onClose?: (...args: any[]) => any;
            "onUpdate:active"?: (value: boolean) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            override: {
                type: BooleanConstructor;
                default: any;
            };
            active: {
                type: BooleanConstructor;
                default: boolean;
            };
            type: {
                type: StringConstructor;
                default: any;
                validator: (value: string) => boolean;
            };
            variant: {
                type: StringConstructor;
                default: () => unknown;
            };
            position: {
                type: StringConstructor;
                default: () => string;
                validator: (value: string) => boolean;
            };
            message: {
                type: PropType<string | string[]>;
                default: any;
            };
            animation: {
                type: StringConstructor;
                default: () => string;
            };
            ariaCloseLabel: {
                type: StringConstructor;
                default: () => string;
            };
            iconPack: {
                type: StringConstructor;
                default: () => unknown;
            };
            icon: {
                type: StringConstructor;
                default: any;
            };
            iconSize: {
                type: StringConstructor;
                default: () => string;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            closeIcon: {
                type: StringConstructor;
                default: () => string;
            };
            closeIconSize: {
                type: StringConstructor;
                default: () => unknown;
            };
            rootClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            closeClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            contentClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            iconClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            positionClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            variantClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            wrapperClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
        }>> & {
            onClose?: (...args: any[]) => any;
            "onUpdate:active"?: (value: boolean) => any;
        }, "override" | "iconPack" | "type" | "variant" | "message" | "rootClass" | "position" | "animation" | "icon" | "variantClass" | "active" | "positionClass" | "wrapperClass" | "iconClass" | "iconSize" | "contentClass" | "closeIcon" | "closeIconSize" | "closeClass" | "ariaCloseLabel" | "closable">>>;
        default: () => {};
    };
    /**
     * This is used internally for programmatic usage.
     * @ignore
     */
    programmatic: {
        type: PropType<ProgrammaticInstance<import("vue").ComponentInternalInstance>>;
        default: any;
    };
    /**
     * This is used internally for programmatic usage.
     * @ignore
     */
    promise: {
        type: PromiseConstructor;
        default: any;
    };
    /** Root class of the notice */
    noticeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the notice when positioned */
    noticePositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the custom container element */
    noticeCustomContainerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onClose?: (...args: any[]) => any;
    "onUpdate:active"?: (value: boolean) => any;
}, {
    override: boolean;
    props: Record<string, any>;
    onCancel: () => void;
    onClose: () => void;
    component: any;
    position: string;
    active: boolean;
    events: Record<string, any>;
    container: string | HTMLElement;
    programmatic: ProgrammaticInstance<import("vue").ComponentInternalInstance>;
    promise: Promise<unknown>;
    notification: {};
    duration: number;
    infinite: boolean;
    queue: boolean;
    noticeClass: ComponentClass;
    noticePositionClass: ComponentClass;
    noticeCustomContainerClass: ComponentClass;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
