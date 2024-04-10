import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Icon component name */
    component: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    pack: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * 	Color of the icon
     *  @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Icon name */
    icon: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Icon size
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Overrides icon font size
     * @values Depends on library: null (smallest), fa-sm, fa-lg, fa-xl, mdi-18px, mdi-24px, mdi-36px, mdi-48px
     */
    customSize: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Add class to icon font.
     * See icon library documentation for custom classes.
     */
    customClass: {
        type: StringConstructor;
        default: any;
    };
    /** When true makes icon clickable */
    clickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable spin effect on icon */
    spin: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Rotation 0-360 */
    rotation: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /**
     * This is used internally
     * @ignore
     */
    both: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the icon when clickable */
    clickableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the element when spin */
    spinClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the icon size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the icon variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Icon component name */
    component: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    pack: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * 	Color of the icon
     *  @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Icon name */
    icon: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Icon size
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /**
     * Overrides icon font size
     * @values Depends on library: null (smallest), fa-sm, fa-lg, fa-xl, mdi-18px, mdi-24px, mdi-36px, mdi-48px
     */
    customSize: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Add class to icon font.
     * See icon library documentation for custom classes.
     */
    customClass: {
        type: StringConstructor;
        default: any;
    };
    /** When true makes icon clickable */
    clickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable spin effect on icon */
    spin: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Rotation 0-360 */
    rotation: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /**
     * This is used internally
     * @ignore
     */
    both: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the icon when clickable */
    clickableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the element when spin */
    spinClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the icon size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the icon variant */
    variantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>>, {
    size: string;
    override: boolean;
    variant: string;
    rootClass: ComponentClass;
    component: string;
    icon: string;
    sizeClass: ComponentClass;
    variantClass: ComponentClass;
    clickable: boolean;
    pack: string;
    customSize: string;
    customClass: string;
    spin: boolean;
    rotation: string | number;
    both: boolean;
    clickableClass: ComponentClass;
    spinClass: ComponentClass;
}, {}>;
export default _default;
