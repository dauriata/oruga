import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
/** Previous button click listener. */
declare function prev(): void;
/** Previous button click listener. */
declare function next(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: PropType<string | number>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
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
     * Tab size
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Show tab in vertical layout */
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Position of the tab
     * @values left, centered, right
     */
    position: {
        type: StringConstructor;
        default: any;
        validator: (value: string) => boolean;
    };
    /**
     * Icon pack to use for the navigation
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Icon to use for navigation button */
    iconPrev: {
        type: StringConstructor;
        default: () => string;
    };
    /** Icon to use for navigation button */
    iconNext: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Next and previous buttons below the component. You can use this property if you want to use your own custom navigation items.
     */
    hasNavigation: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Step navigation is animated */
    animated: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Transition animation name
     * @values [next, prev], [right, left, down, up]
     */
    animation: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (value: string[]) => boolean;
    };
    /** Apply animation on the initial render */
    animateInitially: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Position of the marker label
     * @values bottom, right, left
     */
    labelPosition: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Rounded step markers */
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility next button aria label */
    ariaNextLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility previous button aria label  */
    ariaPreviousLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Size of the steps */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip trigger */
    verticalClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component when is vertical and its position changes */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the steps container */
    stepsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of Steps component when animation gets triggered */
    animatedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps markers trigger when are rounded */
    stepMarkerRoundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component dividers */
    stepDividerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component marker */
    stepMarkerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component content */
    stepContentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component content when transition is happening */
    stepContentTransitioningClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component navigation element */
    stepNavigationClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component link */
    stepLinkClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component link when clickable */
    stepLinkClickableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Step component link label */
    stepLinkLabelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Step component link label when positioned */
    stepLinkLabelPositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of steps component when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => void;
    change: (newValue: string | number, oldValue: string | number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: PropType<string | number>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
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
     * Tab size
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Show tab in vertical layout */
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Position of the tab
     * @values left, centered, right
     */
    position: {
        type: StringConstructor;
        default: any;
        validator: (value: string) => boolean;
    };
    /**
     * Icon pack to use for the navigation
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Icon to use for navigation button */
    iconPrev: {
        type: StringConstructor;
        default: () => string;
    };
    /** Icon to use for navigation button */
    iconNext: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Next and previous buttons below the component. You can use this property if you want to use your own custom navigation items.
     */
    hasNavigation: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Step navigation is animated */
    animated: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Transition animation name
     * @values [next, prev], [right, left, down, up]
     */
    animation: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (value: string[]) => boolean;
    };
    /** Apply animation on the initial render */
    animateInitially: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Position of the marker label
     * @values bottom, right, left
     */
    labelPosition: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Rounded step markers */
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility next button aria label */
    ariaNextLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility previous button aria label  */
    ariaPreviousLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Size of the steps */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the tooltip trigger */
    verticalClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component when is vertical and its position changes */
    positionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the steps container */
    stepsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of Steps component when animation gets triggered */
    animatedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps markers trigger when are rounded */
    stepMarkerRoundedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component dividers */
    stepDividerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component marker */
    stepMarkerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component content */
    stepContentClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component content when transition is happening */
    stepContentTransitioningClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component navigation element */
    stepNavigationClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component link */
    stepLinkClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Steps component link when clickable */
    stepLinkClickableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Step component link label */
    stepLinkLabelClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Step component link label when positioned */
    stepLinkLabelPositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of steps component when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onChange?: (newValue: string | number, oldValue: string | number) => any;
    "onUpdate:modelValue"?: (value: string | number) => any;
}, {
    size: string;
    override: boolean;
    iconPack: string;
    mobileBreakpoint: string;
    variant: string;
    rootClass: ComponentClass;
    mobileClass: ComponentClass;
    position: string;
    rounded: boolean;
    animation: string[];
    sizeClass: ComponentClass;
    positionClass: ComponentClass;
    iconPrev: string;
    iconNext: string;
    ariaNextLabel: string;
    ariaPreviousLabel: string;
    animated: boolean;
    vertical: boolean;
    hasNavigation: boolean;
    animateInitially: boolean;
    labelPosition: string;
    verticalClass: ComponentClass;
    stepsClass: ComponentClass;
    animatedClass: ComponentClass;
    stepMarkerRoundedClass: ComponentClass;
    stepDividerClass: ComponentClass;
    stepMarkerClass: ComponentClass;
    stepContentClass: ComponentClass;
    stepContentTransitioningClass: ComponentClass;
    stepNavigationClass: ComponentClass;
    stepLinkClass: ComponentClass;
    stepLinkClickableClass: ComponentClass;
    stepLinkLabelClass: ComponentClass;
    stepLinkLabelPositionClass: ComponentClass;
}, {}>, {
    default?(_: {}): any;
    navigation?(_: {
        previous: {
            disabled: boolean;
            action: typeof prev;
        };
        next: {
            disabled: boolean;
            action: typeof next;
        };
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
