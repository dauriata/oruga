import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
/** Close the Message and emit events. */
declare function close(...args: any[]): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Whether modal is active or not, use v-model:active to make it two-way binding */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Type (color) of the notification
     * @values info, success, warning, danger
     */
    type: {
        type: StringConstructor;
        default: any;
        validator: (value: string) => boolean;
    };
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Which position the notification will appear when programmatically
     * @values top-right, top, top-left, bottom-right, bottom, bottom-left
     */
    position: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Message text (can contain HTML), unnecessary when default slot is used */
    message: {
        type: PropType<string | string[]>;
        default: any;
    };
    /** Custom animation (transition name) */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /** Accessibility label for the close button */
    ariaCloseLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Icon name to use */
    icon: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
        type: StringConstructor;
        default: () => string;
    };
    /** Add close button to the item that closes the notification */
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Close icon name */
    closeIcon: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Size of close icon
     * @values small, medium, large
     */
    closeIconSize: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the close button container */
    closeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the content element */
    contentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the icon on the left */
    iconClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the element when positioned */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the notification variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the wrapper element */
    wrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:active": (value: boolean) => void;
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Whether modal is active or not, use v-model:active to make it two-way binding */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Type (color) of the notification
     * @values info, success, warning, danger
     */
    type: {
        type: StringConstructor;
        default: any;
        validator: (value: string) => boolean;
    };
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Which position the notification will appear when programmatically
     * @values top-right, top, top-left, bottom-right, bottom, bottom-left
     */
    position: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Message text (can contain HTML), unnecessary when default slot is used */
    message: {
        type: PropType<string | string[]>;
        default: any;
    };
    /** Custom animation (transition name) */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /** Accessibility label for the close button */
    ariaCloseLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Icon name to use */
    icon: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
        type: StringConstructor;
        default: () => string;
    };
    /** Add close button to the item that closes the notification */
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Close icon name */
    closeIcon: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Size of close icon
     * @values small, medium, large
     */
    closeIconSize: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the close button container */
    closeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the content element */
    contentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the icon on the left */
    iconClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the element when positioned */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the notification variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the wrapper element */
    wrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onClose?: (...args: any[]) => any;
    "onUpdate:active"?: (value: boolean) => any;
}, {
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
}, {}>, {
    inner?(_: {
        close: typeof close;
    }): any;
    default?(_: {
        close: typeof close;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
