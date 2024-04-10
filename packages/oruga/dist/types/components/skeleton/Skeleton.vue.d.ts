import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Show or hide loader	 */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show a loading animation */
    animated: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Custom width */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Custom height */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Show a circle shape */
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable rounded style */
    rounded: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Number of shapes to display */
    count: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Size of skeleton
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Skeleton position in relation to the element
     * @values left, centered, right
     */
    position: {
        type: PropType<"left" | "right" | "centered">;
        default: string;
        validator: (value: string) => boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the skeleton animation */
    animationClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the skeleton position */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the skeleton item */
    itemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the skeleton item rounded */
    itemRoundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the skeleton size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Show or hide loader	 */
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show a loading animation */
    animated: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Custom width */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Custom height */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Show a circle shape */
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable rounded style */
    rounded: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Number of shapes to display */
    count: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Size of skeleton
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Skeleton position in relation to the element
     * @values left, centered, right
     */
    position: {
        type: PropType<"left" | "right" | "centered">;
        default: string;
        validator: (value: string) => boolean;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the skeleton animation */
    animationClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the skeleton position */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the skeleton item */
    itemClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the skeleton item rounded */
    itemRoundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the skeleton size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>>, {
    size: string;
    override: boolean;
    rootClass: ComponentClass;
    circle: boolean;
    position: "left" | "right" | "centered";
    rounded: boolean;
    itemClass: ComponentClass;
    sizeClass: ComponentClass;
    active: boolean;
    positionClass: ComponentClass;
    width: string | number;
    animated: boolean;
    height: string | number;
    count: number;
    animationClass: ComponentClass;
    itemRoundedClass: ComponentClass;
}, {}>;
export default _default;
