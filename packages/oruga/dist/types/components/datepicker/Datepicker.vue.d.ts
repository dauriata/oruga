import { type PropType } from "vue";
import type { DatepickerEvent } from "./types";
import type { ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: PropType<Date | Date[]>;
    active: PropType<boolean>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * Define picker mode
     * @values date, month
     */
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    /** Set custom day names, else use names based on locale */
    dayNames: {
        type: PropType<string[]>;
        default: () => any;
    };
    /** Set custom month names, else use names based on locale */
    monthNames: {
        type: PropType<string[]>;
        default: () => any;
    };
    /**
     * Size of the control input
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Set default date to focus on */
    focusedDate: {
        type: DateConstructor;
        default: any;
    };
    /** Events to display on picker */
    events: {
        type: PropType<DatepickerEvent[]>;
        default: any;
    };
    /** Event indicators for style class definiton */
    indicators: {
        type: StringConstructor;
        default: string;
    };
    /** Min date to select */
    minDate: {
        type: DateConstructor;
        default: any;
    };
    /** Max date to select */
    maxDate: {
        type: DateConstructor;
        default: any;
    };
    /** Enable date range selection */
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Makes input full width when inside a grouped or addon field */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Makes the input rounded */
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Display datepicker inline */
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Input placeholder */
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    /** Same as native input readonly */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native, also push new item to v-model instead of replacing */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Open dropdown on focus */
    openOnFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Close dropdown on click */
    closeOnClick: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Date format locale */
    locale: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Custom function to format a date into a string */
    dateFormatter: {
        type: PropType<(date: Date | Date[]) => string>;
        default: (date: Date | Date[], defaultFunction: (date: Date | Date[]) => string) => string;
    };
    /** Custom function to parse a string into a date */
    dateParser: {
        type: PropType<(date: string) => Date>;
        default: (date: string, defaultFunction: (date: string) => Date) => Date;
    };
    /** Date creator function, default is `new Date()` */
    dateCreator: {
        type: PropType<() => Date>;
        default: () => Date;
    };
    /** Define a list of dates which can be selected */
    selectableDates: {
        type: PropType<Date[] | ((date: Date) => boolean)>;
        default: () => any[];
    };
    /** Define a list of dates which can not be selected */
    unselectableDates: {
        type: PropType<Date[] | ((date: Date) => boolean)>;
        default: () => any[];
    };
    /** Define a list of weeks which can not be selected */
    unselectableDaysOfWeek: {
        type: PropType<number[]>;
        default: () => any;
    };
    /** Show nearby month days */
    nearbyMonthDays: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Define if nearby month days can be selected */
    nearbySelectableMonthDays: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Show weeek numbers */
    showWeekNumber: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Define if weeek numbers are clickable */
    weekNumberClickable: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Set the first day of a week */
    firstDayOfWeek: {
        type: NumberConstructor;
        default: () => number;
    };
    /** Rules for the first week : 1 for the 1st January, 4 for the 4th January */
    rulesForFirstWeek: {
        type: NumberConstructor;
        default: () => number;
    };
    /** Define the range of years to show */
    yearsRange: {
        type: PropType<number[]>;
        default: () => number[];
    };
    /** Trap dropdown on focus */
    trapFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Position of the dropdown relative to the input */
    position: {
        type: StringConstructor;
        default: any;
    };
    /** Enable dropdown mobile modal */
    mobileModal: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Enable mobile native input if mobile agent */
    mobileNative: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => any;
    };
    /** Icon to be shown */
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    /** Icon to be added on the right side */
    iconRight: {
        type: StringConstructor;
        default: () => any;
    };
    /** Make the icon right clickable */
    iconRightClickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Icon name for previous icon */
    iconPrev: {
        type: StringConstructor;
        default: () => string;
    };
    /** Icon name for next icon */
    iconNext: {
        type: StringConstructor;
        default: () => string;
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
    /** Enable html 5 native validation */
    useHtml5Validation: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** The message which is shown when a validation error occurs */
    validationMessage: {
        type: StringConstructor;
        default: any;
    };
    /** Accessibility next button aria label */
    ariaNextLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /** Accessibility previous button aria label  */
    ariaPreviousLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker box where you choose the date */
    boxClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker header inside the box */
    headerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker buttons inside the box */
    headerButtonsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker buttons inside the box when a size is choosen */
    headerButtonsSizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the prev button inside the Datepicker box */
    prevButtonClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the next button inside the Datepicker box */
    nextButtonClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the month and year selects container inside the Datepicker box */
    listsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker footer */
    footerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker table inside the box */
    tableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of Datepicker header with days of the week inside the table */
    tableHeadClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the cell inside the table header */
    tableHeadCellClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table body inside the box */
    tableBodyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table row */
    tableRowClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell */
    tableCellClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell when nearby month days are hidden */
    tableCellInvisibleClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of table cell when it's selected */
    tableCellSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the first selected table cell when in range */
    tableCellFirstSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cells within the range when the range is selected */
    tableCellWithinSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the last selected table cell during range selection */
    tableCellLastSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the first hovered table cell during range selection */
    tableCellFirstHoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell when hovered during range selection */
    tableCellWithinHoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the last table cell hovered during range selection */
    tableCellLastHoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell of the current day */
    tableCellTodayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell that is selectable */
    tableCellSelectableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell that is unselectable */
    tableCellUnselectableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell when nearby days (prev/next month) are selectable */
    tableCellNearbyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the cell of a row when at least one event is present */
    tableCellEventsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the events container */
    tableEventsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the event */
    tableEventClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the event indicator when a `variant` is specified */
    tableEventVariantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the event indicator */
    tableEventIndicatorsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker table inside the box when type is month */
    monthClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table body inside the box when type is month */
    monthBodyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table container when type is month */
    monthTableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell when type is month */
    monthCellClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of table cell when it's selected when type is month */
    monthCellSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the first selected table cell when in range when type is month */
    monthCellFirstSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cells within the range when the range is selected when type is month */
    monthCellWithinSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the last selected table cell during range selection when type is month */
    monthCellLastSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the first hovered table cell during range selection when type is month */
    monthCellWithinHoveredRangeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell when hovered during range selection when type is month */
    monthCellFirstHoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell when hovered during range selection and cell is in range when type is month */
    monthCellWithinHoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the last table cell hovered during range selection when type is month */
    monthCellLastHoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell of the current day when type is month */
    monthCellTodayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell that is selectable when type is month */
    monthCellSelectableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell that is unselectable when type is month */
    monthCellUnselectableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /**Class of the events container when type is month */
    monthCellEventsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /**
     * Class configuration for the internal input component
     * @ignore
     */
    inputClasses: {
        type: ObjectConstructor;
        default: () => Partial<{
            override: boolean;
            transformClasses: import('../../types').TransformFunction; /** Override existing theme classes completely */
        }> & Partial<{
            clearable: boolean;
            disabledClass: import('../../types').ClassDefinition;
            expandedClass: import('../../types').ClassDefinition;
            roundedClass: import('../../types').ClassDefinition;
            textareaClass: import('../../types').ClassDefinition;
            /** Parse string into date */
            counterClass: import('../../types').ClassDefinition;
            sizeClass: import('../../types').ClassDefinition;
            variantClass: import('../../types').ClassDefinition;
            iconLeftClass: import('../../types').ClassDefinition;
            iconLeftSpaceClass: import('../../types').ClassDefinition;
            inputClass: import('../../types').ClassDefinition;
            iconRightClass: import('../../types').ClassDefinition;
            iconRightSpaceClass: import('../../types').ClassDefinition;
            rootClass: import('../../types').ClassDefinition;
            hasIconRightClass: import('../../types').ClassDefinition;
            variant: string;
            clearIcon: string;
            iconPack: string;
            iconRight: string;
            icon: string;
            autocomplete: string;
            counter: boolean;
            size: string;
        }>;
    };
    /**
     * Class configuration for the internal dropdown component
     * @ignore
     */
    dropdownClasses: {
        type: ObjectConstructor;
        default: () => Partial<{
            override: boolean;
            transformClasses: import('../../types').TransformFunction; /** Override existing theme classes completely */
        }> & Partial<{
            teleport: string | boolean | Record<string, any>;
            positionClass: import('../../types').ClassDefinition;
            activeClass: import('../../types').ClassDefinition;
            hoverableClass: import('../../types').ClassDefinition;
            menuPositionClass: import('../../types').ClassDefinition;
            menuActiveClass: import('../../types').ClassDefinition;
            inlineClass: import('../../types').ClassDefinition;
            disabledClass: import('../../types').ClassDefinition;
            expandedClass: import('../../types').ClassDefinition;
            mobileClass: import('../../types').ClassDefinition;
            itemClass: import('../../types').ClassDefinition;
            itemActiveClass: import('../../types').ClassDefinition;
            itemClickableClass: import('../../types').ClassDefinition;
            itemDisabledClass: import('../../types').ClassDefinition;
            menuClass: import('../../types').ClassDefinition;
            menuMobileOverlayClass: import('../../types').ClassDefinition;
            rootClass: import('../../types').ClassDefinition;
            triggerClass: import('../../types').ClassDefinition;
            teleportClass: import('../../types').ClassDefinition;
            animation: string;
            closeable: boolean | string[];
            mobileModal: boolean;
            itemTag: import('../../types').DynamicComponent;
            menuTag: import('../../types').DynamicComponent;
            triggerTag: import('../../types').DynamicComponent;
            triggers: string[];
            checkScroll: boolean;
            maxHeight: string | number;
            mobileBreakpoint: string;
            position: string;
            ariaRole: string;
            itemAriaRole: string;
            trapFocus: boolean;
        }>;
    };
    /**
     * Class configuration for the internal select component
     * @ignore
     */
    selectClasses: {
        type: ObjectConstructor;
        default: () => Partial<{
            override: boolean;
            transformClasses: import('../../types').TransformFunction; /** Override existing theme classes completely */
        }> & Partial<{
            disabledClass: import('../../types').ClassDefinition;
            expandedClass: import('../../types').ClassDefinition;
            roundedClass: import('../../types').ClassDefinition;
            iconLeftClass: import('../../types').ClassDefinition;
            iconLeftSpaceClass: import('../../types').ClassDefinition;
            selectClass: import('../../types').ClassDefinition;
            iconRightClass: import('../../types').ClassDefinition;
            iconRightSpaceClass: import('../../types').ClassDefinition;
            rootClass: import('../../types').ClassDefinition;
            arrowClass: import('../../types').ClassDefinition;
            placeholderClass: import('../../types').ClassDefinition;
            sizeClass: import('../../types').ClassDefinition;
            variantClass: import('../../types').ClassDefinition;
            rootVariantClass: import('../../types').ClassDefinition;
            multipleClass: import('../../types').ClassDefinition;
            variant: string;
            iconPack: string;
            iconRight: string;
            icon: string;
            autocomplete: string;
            size: string;
        }>;
    };
}, {
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: Date | Date[]) => void;
    "update:active": (value: boolean) => void;
    "range-start": (value: Date) => void;
    "range-end": (value: Date) => void;
    "change-month": (value: number) => void;
    "change-year": (value: number) => void;
    focus: (event: Event) => void;
    blur: (event: Event) => void;
    invalid: (event: Event) => void;
    "icon-click": (event: Event) => void;
    "icon-right-click": (event: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: PropType<Date | Date[]>;
    active: PropType<boolean>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * Define picker mode
     * @values date, month
     */
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    /** Set custom day names, else use names based on locale */
    dayNames: {
        type: PropType<string[]>;
        default: () => any;
    };
    /** Set custom month names, else use names based on locale */
    monthNames: {
        type: PropType<string[]>;
        default: () => any;
    };
    /**
     * Size of the control input
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Set default date to focus on */
    focusedDate: {
        type: DateConstructor;
        default: any;
    };
    /** Events to display on picker */
    events: {
        type: PropType<DatepickerEvent[]>;
        default: any;
    };
    /** Event indicators for style class definiton */
    indicators: {
        type: StringConstructor;
        default: string;
    };
    /** Min date to select */
    minDate: {
        type: DateConstructor;
        default: any;
    };
    /** Max date to select */
    maxDate: {
        type: DateConstructor;
        default: any;
    };
    /** Enable date range selection */
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Makes input full width when inside a grouped or addon field */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Makes the input rounded */
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Display datepicker inline */
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Input placeholder */
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    /** Same as native input readonly */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native, also push new item to v-model instead of replacing */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Open dropdown on focus */
    openOnFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Close dropdown on click */
    closeOnClick: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Date format locale */
    locale: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Custom function to format a date into a string */
    dateFormatter: {
        type: PropType<(date: Date | Date[]) => string>;
        default: (date: Date | Date[], defaultFunction: (date: Date | Date[]) => string) => string;
    };
    /** Custom function to parse a string into a date */
    dateParser: {
        type: PropType<(date: string) => Date>;
        default: (date: string, defaultFunction: (date: string) => Date) => Date;
    };
    /** Date creator function, default is `new Date()` */
    dateCreator: {
        type: PropType<() => Date>;
        default: () => Date;
    };
    /** Define a list of dates which can be selected */
    selectableDates: {
        type: PropType<Date[] | ((date: Date) => boolean)>;
        default: () => any[];
    };
    /** Define a list of dates which can not be selected */
    unselectableDates: {
        type: PropType<Date[] | ((date: Date) => boolean)>;
        default: () => any[];
    };
    /** Define a list of weeks which can not be selected */
    unselectableDaysOfWeek: {
        type: PropType<number[]>;
        default: () => any;
    };
    /** Show nearby month days */
    nearbyMonthDays: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Define if nearby month days can be selected */
    nearbySelectableMonthDays: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Show weeek numbers */
    showWeekNumber: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Define if weeek numbers are clickable */
    weekNumberClickable: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Set the first day of a week */
    firstDayOfWeek: {
        type: NumberConstructor;
        default: () => number;
    };
    /** Rules for the first week : 1 for the 1st January, 4 for the 4th January */
    rulesForFirstWeek: {
        type: NumberConstructor;
        default: () => number;
    };
    /** Define the range of years to show */
    yearsRange: {
        type: PropType<number[]>;
        default: () => number[];
    };
    /** Trap dropdown on focus */
    trapFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Position of the dropdown relative to the input */
    position: {
        type: StringConstructor;
        default: any;
    };
    /** Enable dropdown mobile modal */
    mobileModal: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Enable mobile native input if mobile agent */
    mobileNative: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
        type: StringConstructor;
        default: () => any;
    };
    /** Icon to be shown */
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    /** Icon to be added on the right side */
    iconRight: {
        type: StringConstructor;
        default: () => any;
    };
    /** Make the icon right clickable */
    iconRightClickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Icon name for previous icon */
    iconPrev: {
        type: StringConstructor;
        default: () => string;
    };
    /** Icon name for next icon */
    iconNext: {
        type: StringConstructor;
        default: () => string;
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
    /** Enable html 5 native validation */
    useHtml5Validation: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** The message which is shown when a validation error occurs */
    validationMessage: {
        type: StringConstructor;
        default: any;
    };
    /** Accessibility next button aria label */
    ariaNextLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /** Accessibility previous button aria label  */
    ariaPreviousLabel: {
        type: StringConstructor;
        default: () => string;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker size */
    sizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker box where you choose the date */
    boxClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker header inside the box */
    headerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker buttons inside the box */
    headerButtonsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker buttons inside the box when a size is choosen */
    headerButtonsSizeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the prev button inside the Datepicker box */
    prevButtonClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the next button inside the Datepicker box */
    nextButtonClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the month and year selects container inside the Datepicker box */
    listsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker footer */
    footerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker table inside the box */
    tableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of Datepicker header with days of the week inside the table */
    tableHeadClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the cell inside the table header */
    tableHeadCellClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table body inside the box */
    tableBodyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table row */
    tableRowClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell */
    tableCellClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell when nearby month days are hidden */
    tableCellInvisibleClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of table cell when it's selected */
    tableCellSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the first selected table cell when in range */
    tableCellFirstSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cells within the range when the range is selected */
    tableCellWithinSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the last selected table cell during range selection */
    tableCellLastSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the first hovered table cell during range selection */
    tableCellFirstHoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell when hovered during range selection */
    tableCellWithinHoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the last table cell hovered during range selection */
    tableCellLastHoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell of the current day */
    tableCellTodayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell that is selectable */
    tableCellSelectableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell that is unselectable */
    tableCellUnselectableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell when nearby days (prev/next month) are selectable */
    tableCellNearbyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the cell of a row when at least one event is present */
    tableCellEventsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the events container */
    tableEventsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the event */
    tableEventClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the event indicator when a `variant` is specified */
    tableEventVariantClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the event indicator */
    tableEventIndicatorsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker table inside the box when type is month */
    monthClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table body inside the box when type is month */
    monthBodyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table container when type is month */
    monthTableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell when type is month */
    monthCellClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of table cell when it's selected when type is month */
    monthCellSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the first selected table cell when in range when type is month */
    monthCellFirstSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cells within the range when the range is selected when type is month */
    monthCellWithinSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the last selected table cell during range selection when type is month */
    monthCellLastSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the first hovered table cell during range selection when type is month */
    monthCellWithinHoveredRangeClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell when hovered during range selection when type is month */
    monthCellFirstHoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell when hovered during range selection and cell is in range when type is month */
    monthCellWithinHoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the last table cell hovered during range selection when type is month */
    monthCellLastHoveredClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell of the current day when type is month */
    monthCellTodayClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell that is selectable when type is month */
    monthCellSelectableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the table cell that is unselectable when type is month */
    monthCellUnselectableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /**Class of the events container when type is month */
    monthCellEventsClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Datepicker when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /**
     * Class configuration for the internal input component
     * @ignore
     */
    inputClasses: {
        type: ObjectConstructor;
        default: () => Partial<{
            override: boolean;
            transformClasses: import('../../types').TransformFunction; /** Override existing theme classes completely */
        }> & Partial<{
            clearable: boolean;
            disabledClass: import('../../types').ClassDefinition;
            expandedClass: import('../../types').ClassDefinition;
            roundedClass: import('../../types').ClassDefinition;
            textareaClass: import('../../types').ClassDefinition;
            /** Parse string into date */
            counterClass: import('../../types').ClassDefinition;
            sizeClass: import('../../types').ClassDefinition;
            variantClass: import('../../types').ClassDefinition;
            iconLeftClass: import('../../types').ClassDefinition;
            iconLeftSpaceClass: import('../../types').ClassDefinition;
            inputClass: import('../../types').ClassDefinition;
            iconRightClass: import('../../types').ClassDefinition;
            iconRightSpaceClass: import('../../types').ClassDefinition;
            rootClass: import('../../types').ClassDefinition;
            hasIconRightClass: import('../../types').ClassDefinition;
            variant: string;
            clearIcon: string;
            iconPack: string;
            iconRight: string;
            icon: string;
            autocomplete: string;
            counter: boolean;
            size: string;
        }>;
    };
    /**
     * Class configuration for the internal dropdown component
     * @ignore
     */
    dropdownClasses: {
        type: ObjectConstructor;
        default: () => Partial<{
            override: boolean;
            transformClasses: import('../../types').TransformFunction; /** Override existing theme classes completely */
        }> & Partial<{
            teleport: string | boolean | Record<string, any>;
            positionClass: import('../../types').ClassDefinition;
            activeClass: import('../../types').ClassDefinition;
            hoverableClass: import('../../types').ClassDefinition;
            menuPositionClass: import('../../types').ClassDefinition;
            menuActiveClass: import('../../types').ClassDefinition;
            inlineClass: import('../../types').ClassDefinition;
            disabledClass: import('../../types').ClassDefinition;
            expandedClass: import('../../types').ClassDefinition;
            mobileClass: import('../../types').ClassDefinition;
            itemClass: import('../../types').ClassDefinition;
            itemActiveClass: import('../../types').ClassDefinition;
            itemClickableClass: import('../../types').ClassDefinition;
            itemDisabledClass: import('../../types').ClassDefinition;
            menuClass: import('../../types').ClassDefinition;
            menuMobileOverlayClass: import('../../types').ClassDefinition;
            rootClass: import('../../types').ClassDefinition;
            triggerClass: import('../../types').ClassDefinition;
            teleportClass: import('../../types').ClassDefinition;
            animation: string;
            closeable: boolean | string[];
            mobileModal: boolean;
            itemTag: import('../../types').DynamicComponent;
            menuTag: import('../../types').DynamicComponent;
            triggerTag: import('../../types').DynamicComponent;
            triggers: string[];
            checkScroll: boolean;
            maxHeight: string | number;
            mobileBreakpoint: string;
            position: string;
            ariaRole: string;
            itemAriaRole: string;
            trapFocus: boolean;
        }>;
    };
    /**
     * Class configuration for the internal select component
     * @ignore
     */
    selectClasses: {
        type: ObjectConstructor;
        default: () => Partial<{
            override: boolean;
            transformClasses: import('../../types').TransformFunction; /** Override existing theme classes completely */
        }> & Partial<{
            disabledClass: import('../../types').ClassDefinition;
            expandedClass: import('../../types').ClassDefinition;
            roundedClass: import('../../types').ClassDefinition;
            iconLeftClass: import('../../types').ClassDefinition;
            iconLeftSpaceClass: import('../../types').ClassDefinition;
            selectClass: import('../../types').ClassDefinition;
            iconRightClass: import('../../types').ClassDefinition;
            iconRightSpaceClass: import('../../types').ClassDefinition;
            rootClass: import('../../types').ClassDefinition;
            arrowClass: import('../../types').ClassDefinition;
            placeholderClass: import('../../types').ClassDefinition;
            sizeClass: import('../../types').ClassDefinition;
            variantClass: import('../../types').ClassDefinition;
            rootVariantClass: import('../../types').ClassDefinition;
            multipleClass: import('../../types').ClassDefinition;
            variant: string;
            iconPack: string;
            iconRight: string;
            icon: string;
            autocomplete: string;
            size: string;
        }>;
    };
}>> & {
    onBlur?: (event: Event) => any;
    onFocus?: (event: Event) => any;
    onInvalid?: (event: Event) => any;
    "onUpdate:modelValue"?: (value: Date | Date[]) => any;
    "onIcon-click"?: (event: Event) => any;
    "onIcon-right-click"?: (event: Event) => any;
    "onUpdate:active"?: (value: boolean) => any;
    "onRange-start"?: (value: Date) => any;
    "onRange-end"?: (value: Date) => any;
    "onChange-month"?: (value: number) => any;
    "onChange-year"?: (value: number) => any;
}, {
    size: string;
    override: boolean;
    iconPack: string;
    useHtml5Validation: boolean;
    type: string;
    mobileBreakpoint: string;
    rootClass: ComponentClass;
    mobileClass: ComponentClass;
    validationMessage: string;
    position: string;
    placeholder: string;
    expanded: boolean;
    rounded: boolean;
    disabled: boolean;
    openOnFocus: boolean;
    mobileModal: boolean;
    icon: string;
    iconRight: string;
    iconRightClickable: boolean;
    teleport: string | boolean | Record<string, any>;
    inputClasses: Record<string, any>;
    sizeClass: ComponentClass;
    inline: boolean;
    multiple: boolean;
    trapFocus: boolean;
    indicators: string;
    iconPrev: string;
    iconNext: string;
    range: boolean;
    selectClasses: Record<string, any>;
    dropdownClasses: Record<string, any>;
    boxClass: ComponentClass;
    readonly: boolean;
    dayNames: string[];
    monthNames: string[];
    focusedDate: Date;
    events: DatepickerEvent[];
    minDate: Date;
    maxDate: Date;
    closeOnClick: boolean;
    locale: string;
    dateFormatter: (date: Date | Date[]) => string;
    dateParser: (date: string) => Date;
    dateCreator: () => Date;
    selectableDates: Date[] | ((date: Date) => boolean);
    unselectableDates: Date[] | ((date: Date) => boolean);
    unselectableDaysOfWeek: number[];
    nearbyMonthDays: boolean;
    nearbySelectableMonthDays: boolean;
    showWeekNumber: boolean;
    weekNumberClickable: boolean;
    firstDayOfWeek: number;
    rulesForFirstWeek: number;
    yearsRange: number[];
    mobileNative: boolean;
    ariaNextLabel: string;
    ariaPreviousLabel: string;
    headerClass: ComponentClass;
    headerButtonsClass: ComponentClass;
    headerButtonsSizeClass: ComponentClass;
    prevButtonClass: ComponentClass;
    nextButtonClass: ComponentClass;
    listsClass: ComponentClass;
    footerClass: ComponentClass;
    tableClass: ComponentClass;
    tableHeadClass: ComponentClass;
    tableHeadCellClass: ComponentClass;
    tableBodyClass: ComponentClass;
    tableRowClass: ComponentClass;
    tableCellClass: ComponentClass;
    tableCellInvisibleClass: ComponentClass;
    tableCellSelectedClass: ComponentClass;
    tableCellFirstSelectedClass: ComponentClass;
    tableCellWithinSelectedClass: ComponentClass;
    tableCellLastSelectedClass: ComponentClass;
    tableCellFirstHoveredClass: ComponentClass;
    tableCellWithinHoveredClass: ComponentClass;
    tableCellLastHoveredClass: ComponentClass;
    tableCellTodayClass: ComponentClass;
    tableCellSelectableClass: ComponentClass;
    tableCellUnselectableClass: ComponentClass;
    tableCellNearbyClass: ComponentClass;
    tableCellEventsClass: ComponentClass;
    tableEventsClass: ComponentClass;
    tableEventClass: ComponentClass;
    tableEventVariantClass: ComponentClass;
    tableEventIndicatorsClass: ComponentClass;
    monthClass: ComponentClass;
    monthBodyClass: ComponentClass;
    monthTableClass: ComponentClass;
    monthCellClass: ComponentClass;
    monthCellSelectedClass: ComponentClass;
    monthCellFirstSelectedClass: ComponentClass;
    monthCellWithinSelectedClass: ComponentClass;
    monthCellLastSelectedClass: ComponentClass;
    monthCellWithinHoveredRangeClass: ComponentClass;
    monthCellFirstHoveredClass: ComponentClass;
    monthCellWithinHoveredClass: ComponentClass;
    monthCellLastHoveredClass: ComponentClass;
    monthCellTodayClass: ComponentClass;
    monthCellSelectableClass: ComponentClass;
    monthCellUnselectableClass: ComponentClass;
    monthCellEventsClass: ComponentClass;
}, {}>, {
    trigger?(_: {}): any;
    header?(_: {}): any;
    body?(_: {}): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
