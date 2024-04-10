import { type PropType, type Component } from "vue";
import type { ComponentClass, DynamicComponent } from '../../types';
/** Toggle dropdown if it's not disabled. */
declare function toggle(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: PropType<any>;
    active: PropType<boolean>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Trigger label, unnecessary when trgger slot is used */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** Dropdown is disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Dropdown content (items) are shown inline, trigger is removed */
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Dropdown content will be scrollable */
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Max height of dropdown content */
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    /**
     * Position of the dropdown relative to the trigger
     * @values auto, top, bottom, left, right, top-right, top-left, bottom-left, bottom-right
     */
    position: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Dropdown content (items) are shown into a modal on mobile */
    mobileModal: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Custom animation (transition name) */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /** Allows multiple selections */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Trap focus inside the dropdown. */
    trapFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Makes the component check if menu reached scroll start or end and emit scroll events. */
    checkScroll: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Dropdown will be expanded (full-width) */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** HTML element ID of the dropdown menu element */
    menuId: {
        type: StringConstructor;
        default: any;
    };
    /** Tabindex of the dropdown menu element */
    menuTabindex: {
        type: NumberConstructor;
        default: any;
    };
    /** Dropdown menu tag name */
    menuTag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /** Dropdown trigger tag name */
    triggerTag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /**
     * Dropdown will be triggered by any events
     * @values click, hover, contextmenu, focus
     */
    triggers: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (values: string[]) => boolean;
    };
    /** Dropdown delay before it appears (number in ms) */
    delay: {
        type: NumberConstructor;
        default: any;
    };
    /**
     * Dropdown close options (pressing escape, clicking the content or outside)
     * @values true, false, escape, outside, content
     */
    closeable: {
        type: PropType<boolean | string[]>;
        default: () => string[];
    };
    /** Set the tabindex attribute on the dropdown trigger div (-1 to prevent selection via tab key) */
    tabindex: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Role attribute to be passed to the list container for better accessibility.
     * Use menu only in situations where your dropdown is related to a navigation menu.
     * @values list, listbox, menu, dialog
     */
    ariaRole: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor)[];
        default: () => boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when the dropdown is teleported */
    teleportClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the trigger element */
    triggerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of dropdown menu when inline */
    inlineClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the overlay when on mobile */
    menuMobileOverlayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the dropdown menu */
    menuClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of dropdown menu position */
    menuPositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of dropdown menu when active */
    menuActiveClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of dropdown when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of dropdown when disabled */
    disabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of dropdown when expanded */
    expandedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the root element indicating position of dropdown */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the root element indicating whether the dropdown is open */
    activeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the root element when the dropdown is hoverable */
    hoverableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {
    $trigger: import("vue").Ref<HTMLElement>;
    $content: import("vue").Ref<HTMLElement | Component>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: [string, number, boolean, object, any[]]) => void;
    "update:active": (value: boolean) => void;
    change: (value: any) => void;
    close: (method: string) => void;
    "scroll-start": () => void;
    "scroll-end": () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: PropType<any>;
    active: PropType<boolean>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Trigger label, unnecessary when trgger slot is used */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** Dropdown is disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Dropdown content (items) are shown inline, trigger is removed */
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Dropdown content will be scrollable */
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Max height of dropdown content */
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    /**
     * Position of the dropdown relative to the trigger
     * @values auto, top, bottom, left, right, top-right, top-left, bottom-left, bottom-right
     */
    position: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Dropdown content (items) are shown into a modal on mobile */
    mobileModal: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Custom animation (transition name) */
    animation: {
        type: StringConstructor;
        default: () => string;
    };
    /** Allows multiple selections */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Trap focus inside the dropdown. */
    trapFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Makes the component check if menu reached scroll start or end and emit scroll events. */
    checkScroll: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Dropdown will be expanded (full-width) */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** HTML element ID of the dropdown menu element */
    menuId: {
        type: StringConstructor;
        default: any;
    };
    /** Tabindex of the dropdown menu element */
    menuTabindex: {
        type: NumberConstructor;
        default: any;
    };
    /** Dropdown menu tag name */
    menuTag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /** Dropdown trigger tag name */
    triggerTag: {
        type: PropType<DynamicComponent>;
        default: () => DynamicComponent;
    };
    /**
     * Dropdown will be triggered by any events
     * @values click, hover, contextmenu, focus
     */
    triggers: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (values: string[]) => boolean;
    };
    /** Dropdown delay before it appears (number in ms) */
    delay: {
        type: NumberConstructor;
        default: any;
    };
    /**
     * Dropdown close options (pressing escape, clicking the content or outside)
     * @values true, false, escape, outside, content
     */
    closeable: {
        type: PropType<boolean | string[]>;
        default: () => string[];
    };
    /** Set the tabindex attribute on the dropdown trigger div (-1 to prevent selection via tab key) */
    tabindex: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Role attribute to be passed to the list container for better accessibility.
     * Use menu only in situations where your dropdown is related to a navigation menu.
     * @values list, listbox, menu, dialog
     */
    ariaRole: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor)[];
        default: () => boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class when the dropdown is teleported */
    teleportClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the trigger element */
    triggerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of dropdown menu when inline */
    inlineClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the overlay when on mobile */
    menuMobileOverlayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the dropdown menu */
    menuClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of dropdown menu position */
    menuPositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of dropdown menu when active */
    menuActiveClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of dropdown when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of dropdown when disabled */
    disabledClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of dropdown when expanded */
    expandedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the root element indicating position of dropdown */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the root element indicating whether the dropdown is open */
    activeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class for the root element when the dropdown is hoverable */
    hoverableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onChange?: (value: any) => any;
    onClose?: (method: string) => any;
    "onUpdate:modelValue"?: (value: [string, number, boolean, object, any[]]) => any;
    "onScroll-start"?: () => any;
    "onScroll-end"?: () => any;
    "onUpdate:active"?: (value: boolean) => any;
}, {
    label: string;
    override: boolean;
    mobileBreakpoint: string;
    rootClass: ComponentClass;
    mobileClass: ComponentClass;
    menuTag: DynamicComponent;
    position: string;
    expanded: boolean;
    disabled: boolean;
    checkScroll: boolean;
    maxHeight: string | number;
    mobileModal: boolean;
    animation: string;
    teleport: string | boolean | Record<string, any>;
    expandedClass: ComponentClass;
    disabledClass: ComponentClass;
    inline: boolean;
    scrollable: boolean;
    multiple: boolean;
    trapFocus: boolean;
    menuId: string;
    menuTabindex: number;
    triggerTag: DynamicComponent;
    triggers: string[];
    delay: number;
    closeable: boolean | string[];
    tabindex: number;
    ariaRole: string;
    teleportClass: ComponentClass;
    triggerClass: ComponentClass;
    inlineClass: ComponentClass;
    menuMobileOverlayClass: ComponentClass;
    menuClass: ComponentClass;
    menuPositionClass: ComponentClass;
    menuActiveClass: ComponentClass;
    positionClass: ComponentClass;
    activeClass: ComponentClass;
    hoverableClass: ComponentClass;
}, {}>, {
    trigger?(_: {
        active: boolean;
    }): any;
    default?(_: {
        active: boolean;
        toggle: typeof toggle;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
