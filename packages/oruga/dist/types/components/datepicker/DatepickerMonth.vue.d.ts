import { type PropType } from "vue";
import type { DatepickerEvent, FocusedDate } from "./types";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<Date | Date[]>;
        default: any;
    };
    monthNames: {
        type: PropType<string[]>;
        required: true;
    };
    focusedDate: {
        type: PropType<FocusedDate>;
        required: true;
    };
    pickerProps: {
        type: PropType<NonNullable<Partial<{
            size: string;
            override: boolean;
            iconPack: string;
            useHtml5Validation: boolean;
            type: string;
            mobileBreakpoint: string;
            rootClass: import('../../types').ComponentClass;
            mobileClass: import('../../types').ComponentClass;
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
            sizeClass: import('../../types').ComponentClass;
            inline: boolean;
            multiple: boolean;
            trapFocus: boolean;
            indicators: string;
            iconPrev: string;
            iconNext: string;
            range: boolean;
            selectClasses: Record<string, any>;
            dropdownClasses: Record<string, any>;
            boxClass: import('../../types').ComponentClass;
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
            headerClass: import('../../types').ComponentClass;
            headerButtonsClass: import('../../types').ComponentClass;
            headerButtonsSizeClass: import('../../types').ComponentClass;
            prevButtonClass: import('../../types').ComponentClass;
            nextButtonClass: import('../../types').ComponentClass;
            listsClass: import('../../types').ComponentClass;
            footerClass: import('../../types').ComponentClass;
            tableClass: import('../../types').ComponentClass;
            tableHeadClass: import('../../types').ComponentClass;
            tableHeadCellClass: import('../../types').ComponentClass;
            tableBodyClass: import('../../types').ComponentClass;
            tableRowClass: import('../../types').ComponentClass;
            tableCellClass: import('../../types').ComponentClass;
            tableCellInvisibleClass: import('../../types').ComponentClass;
            tableCellSelectedClass: import('../../types').ComponentClass;
            tableCellFirstSelectedClass: import('../../types').ComponentClass;
            tableCellWithinSelectedClass: import('../../types').ComponentClass;
            tableCellLastSelectedClass: import('../../types').ComponentClass;
            tableCellFirstHoveredClass: import('../../types').ComponentClass;
            tableCellWithinHoveredClass: import('../../types').ComponentClass;
            tableCellLastHoveredClass: import('../../types').ComponentClass;
            tableCellTodayClass: import('../../types').ComponentClass;
            tableCellSelectableClass: import('../../types').ComponentClass;
            tableCellUnselectableClass: import('../../types').ComponentClass;
            tableCellNearbyClass: import('../../types').ComponentClass;
            tableCellEventsClass: import('../../types').ComponentClass;
            tableEventsClass: import('../../types').ComponentClass;
            tableEventClass: import('../../types').ComponentClass;
            tableEventVariantClass: import('../../types').ComponentClass;
            tableEventIndicatorsClass: import('../../types').ComponentClass;
            monthClass: import('../../types').ComponentClass;
            monthBodyClass: import('../../types').ComponentClass;
            monthTableClass: import('../../types').ComponentClass;
            monthCellClass: import('../../types').ComponentClass;
            monthCellSelectedClass: import('../../types').ComponentClass;
            monthCellFirstSelectedClass: import('../../types').ComponentClass;
            monthCellWithinSelectedClass: import('../../types').ComponentClass;
            monthCellLastSelectedClass: import('../../types').ComponentClass;
            monthCellWithinHoveredRangeClass: import('../../types').ComponentClass;
            monthCellFirstHoveredClass: import('../../types').ComponentClass;
            monthCellWithinHoveredClass: import('../../types').ComponentClass;
            monthCellLastHoveredClass: import('../../types').ComponentClass;
            monthCellTodayClass: import('../../types').ComponentClass;
            monthCellSelectableClass: import('../../types').ComponentClass;
            monthCellUnselectableClass: import('../../types').ComponentClass;
            monthCellEventsClass: import('../../types').ComponentClass;
        }> & Omit<{
            readonly size: string;
            readonly useHtml5Validation: boolean;
            readonly type: string;
            readonly mobileBreakpoint: string;
            readonly expanded: boolean;
            readonly rounded: boolean;
            readonly disabled: boolean;
            readonly openOnFocus: boolean;
            readonly mobileModal: boolean;
            readonly iconRightClickable: boolean;
            readonly teleport: string | boolean | Record<string, any>;
            readonly inputClasses: Record<string, any>;
            readonly inline: boolean;
            readonly multiple: boolean;
            readonly trapFocus: boolean;
            readonly indicators: string;
            readonly iconPrev: string;
            readonly iconNext: string;
            readonly range: boolean;
            readonly selectClasses: Record<string, any>;
            readonly dropdownClasses: Record<string, any>;
            readonly readonly: boolean;
            readonly closeOnClick: boolean;
            readonly locale: string;
            readonly dateFormatter: (date: Date | Date[]) => string;
            readonly dateParser: (date: string) => Date;
            readonly dateCreator: () => Date;
            readonly selectableDates: Date[] | ((date: Date) => boolean);
            readonly unselectableDates: Date[] | ((date: Date) => boolean);
            readonly nearbyMonthDays: boolean;
            readonly nearbySelectableMonthDays: boolean;
            readonly showWeekNumber: boolean;
            readonly weekNumberClickable: boolean;
            readonly firstDayOfWeek: number;
            readonly rulesForFirstWeek: number;
            readonly yearsRange: number[];
            readonly mobileNative: boolean;
            readonly ariaNextLabel: string;
            readonly ariaPreviousLabel: string;
            readonly override?: boolean;
            readonly iconPack?: string;
            readonly modelValue?: Date | Date[];
            readonly rootClass?: import('../../types').ComponentClass;
            readonly mobileClass?: import('../../types').ComponentClass;
            readonly validationMessage?: string;
            readonly position?: string;
            readonly placeholder?: string;
            readonly icon?: string;
            readonly iconRight?: string;
            readonly sizeClass?: import('../../types').ComponentClass;
            readonly active?: boolean;
            readonly boxClass?: import('../../types').ComponentClass;
            readonly dayNames?: string[];
            readonly monthNames?: string[];
            readonly focusedDate?: Date;
            readonly events?: DatepickerEvent[];
            readonly minDate?: Date;
            readonly maxDate?: Date;
            readonly unselectableDaysOfWeek?: number[];
            readonly headerClass?: import('../../types').ComponentClass;
            readonly headerButtonsClass?: import('../../types').ComponentClass;
            readonly headerButtonsSizeClass?: import('../../types').ComponentClass;
            readonly prevButtonClass?: import('../../types').ComponentClass;
            readonly nextButtonClass?: import('../../types').ComponentClass;
            readonly listsClass?: import('../../types').ComponentClass;
            readonly footerClass?: import('../../types').ComponentClass;
            readonly tableClass?: import('../../types').ComponentClass;
            readonly tableHeadClass?: import('../../types').ComponentClass;
            readonly tableHeadCellClass?: import('../../types').ComponentClass;
            readonly tableBodyClass?: import('../../types').ComponentClass;
            readonly tableRowClass?: import('../../types').ComponentClass;
            readonly tableCellClass?: import('../../types').ComponentClass;
            readonly tableCellInvisibleClass?: import('../../types').ComponentClass;
            readonly tableCellSelectedClass?: import('../../types').ComponentClass;
            readonly tableCellFirstSelectedClass?: import('../../types').ComponentClass;
            readonly tableCellWithinSelectedClass?: import('../../types').ComponentClass;
            readonly tableCellLastSelectedClass?: import('../../types').ComponentClass;
            readonly tableCellFirstHoveredClass?: import('../../types').ComponentClass;
            readonly tableCellWithinHoveredClass?: import('../../types').ComponentClass;
            readonly tableCellLastHoveredClass?: import('../../types').ComponentClass;
            readonly tableCellTodayClass?: import('../../types').ComponentClass;
            readonly tableCellSelectableClass?: import('../../types').ComponentClass;
            readonly tableCellUnselectableClass?: import('../../types').ComponentClass;
            readonly tableCellNearbyClass?: import('../../types').ComponentClass;
            readonly tableCellEventsClass?: import('../../types').ComponentClass;
            readonly tableEventsClass?: import('../../types').ComponentClass;
            readonly tableEventClass?: import('../../types').ComponentClass;
            readonly tableEventVariantClass?: import('../../types').ComponentClass;
            readonly tableEventIndicatorsClass?: import('../../types').ComponentClass;
            readonly monthClass?: import('../../types').ComponentClass;
            readonly monthBodyClass?: import('../../types').ComponentClass;
            readonly monthTableClass?: import('../../types').ComponentClass;
            readonly monthCellClass?: import('../../types').ComponentClass;
            readonly monthCellSelectedClass?: import('../../types').ComponentClass;
            readonly monthCellFirstSelectedClass?: import('../../types').ComponentClass;
            readonly monthCellWithinSelectedClass?: import('../../types').ComponentClass;
            readonly monthCellLastSelectedClass?: import('../../types').ComponentClass;
            readonly monthCellWithinHoveredRangeClass?: import('../../types').ComponentClass;
            readonly monthCellFirstHoveredClass?: import('../../types').ComponentClass;
            readonly monthCellWithinHoveredClass?: import('../../types').ComponentClass;
            readonly monthCellLastHoveredClass?: import('../../types').ComponentClass;
            readonly monthCellTodayClass?: import('../../types').ComponentClass;
            readonly monthCellSelectableClass?: import('../../types').ComponentClass;
            readonly monthCellUnselectableClass?: import('../../types').ComponentClass;
            readonly monthCellEventsClass?: import('../../types').ComponentClass;
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
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            modelValue: PropType<Date | Date[]>;
            active: PropType<boolean>;
            override: {
                type: BooleanConstructor;
                default: any;
            };
            type: {
                type: StringConstructor;
                default: string;
                validator: (value: string) => boolean;
            };
            dayNames: {
                type: PropType<string[]>;
                default: () => any;
            };
            monthNames: {
                type: PropType<string[]>;
                default: () => any;
            };
            size: {
                type: StringConstructor;
                default: () => unknown;
            };
            focusedDate: {
                type: DateConstructor;
                default: any;
            };
            events: {
                type: PropType<DatepickerEvent[]>;
                default: any;
            };
            indicators: {
                type: StringConstructor;
                default: string;
            };
            minDate: {
                type: DateConstructor;
                default: any;
            };
            maxDate: {
                type: DateConstructor;
                default: any;
            };
            range: {
                type: BooleanConstructor;
                default: boolean;
            };
            expanded: {
                type: BooleanConstructor;
                default: boolean;
            };
            rounded: {
                type: BooleanConstructor;
                default: boolean;
            };
            inline: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: {
                type: StringConstructor;
                default: any;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            openOnFocus: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            closeOnClick: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            locale: {
                type: StringConstructor;
                default: () => unknown;
            };
            dateFormatter: {
                type: PropType<(date: Date | Date[]) => string>;
                default: (date: Date | Date[], defaultFunction: (date: Date | Date[]) => string) => string;
            };
            dateParser: {
                type: PropType<(date: string) => Date>;
                default: (date: string, defaultFunction: (date: string) => Date) => Date;
            };
            dateCreator: {
                type: PropType<() => Date>;
                default: () => Date;
            };
            selectableDates: {
                type: PropType<Date[] | ((date: Date) => boolean)>;
                default: () => any[];
            };
            unselectableDates: {
                type: PropType<Date[] | ((date: Date) => boolean)>;
                default: () => any[];
            };
            unselectableDaysOfWeek: {
                type: PropType<number[]>;
                default: () => any;
            };
            nearbyMonthDays: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            nearbySelectableMonthDays: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            showWeekNumber: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            weekNumberClickable: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            firstDayOfWeek: {
                type: NumberConstructor;
                default: () => number;
            };
            rulesForFirstWeek: {
                type: NumberConstructor;
                default: () => number;
            };
            yearsRange: {
                type: PropType<number[]>;
                default: () => number[];
            };
            trapFocus: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            position: {
                type: StringConstructor;
                default: any;
            };
            mobileModal: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            mobileNative: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            iconPack: {
                type: StringConstructor;
                default: () => any;
            };
            icon: {
                type: StringConstructor;
                default: () => any;
            };
            iconRight: {
                type: StringConstructor;
                default: () => any;
            };
            iconRightClickable: {
                type: BooleanConstructor;
                default: boolean;
            };
            iconPrev: {
                type: StringConstructor;
                default: () => string;
            };
            iconNext: {
                type: StringConstructor;
                default: () => string;
            };
            mobileBreakpoint: {
                type: StringConstructor;
                default: () => unknown;
            };
            teleport: {
                type: (ObjectConstructor | BooleanConstructor | StringConstructor)[];
                default: () => boolean;
            };
            useHtml5Validation: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            validationMessage: {
                type: StringConstructor;
                default: any;
            };
            ariaNextLabel: {
                type: StringConstructor;
                default: () => string;
            };
            ariaPreviousLabel: {
                type: StringConstructor;
                default: () => string;
            };
            rootClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            sizeClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            boxClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            headerClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            headerButtonsClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            headerButtonsSizeClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            prevButtonClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            nextButtonClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            listsClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            footerClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableHeadClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableHeadCellClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableBodyClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableRowClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellInvisibleClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellFirstSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellWithinSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellLastSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellFirstHoveredClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellWithinHoveredClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellLastHoveredClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellTodayClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellSelectableClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellUnselectableClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellNearbyClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellEventsClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableEventsClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableEventClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableEventVariantClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableEventIndicatorsClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthBodyClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthTableClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellFirstSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellWithinSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellLastSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellWithinHoveredRangeClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellFirstHoveredClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellWithinHoveredClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellLastHoveredClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellTodayClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellSelectableClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellUnselectableClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellEventsClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            mobileClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            inputClasses: {
                type: ObjectConstructor;
                default: () => Partial<{
                    override: boolean;
                    transformClasses: import('../../types').TransformFunction;
                }> & Partial<{
                    clearable: boolean;
                    disabledClass: import('../../types').ClassDefinition;
                    expandedClass: import('../../types').ClassDefinition;
                    roundedClass: import('../../types').ClassDefinition;
                    textareaClass: import('../../types').ClassDefinition;
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
            dropdownClasses: {
                type: ObjectConstructor;
                default: () => Partial<{
                    override: boolean;
                    transformClasses: import('../../types').TransformFunction;
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
            selectClasses: {
                type: ObjectConstructor;
                default: () => Partial<{
                    override: boolean;
                    transformClasses: import('../../types').TransformFunction;
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
        }, "size" | "override" | "iconPack" | "useHtml5Validation" | "type" | "mobileBreakpoint" | "rootClass" | "mobileClass" | "validationMessage" | "position" | "placeholder" | "expanded" | "rounded" | "disabled" | "openOnFocus" | "mobileModal" | "icon" | "iconRight" | "iconRightClickable" | "teleport" | "inputClasses" | "sizeClass" | "inline" | "multiple" | "trapFocus" | "indicators" | "iconPrev" | "iconNext" | "range" | "selectClasses" | "dropdownClasses" | "boxClass" | "readonly" | "dayNames" | "monthNames" | "focusedDate" | "events" | "minDate" | "maxDate" | "closeOnClick" | "locale" | "dateFormatter" | "dateParser" | "dateCreator" | "selectableDates" | "unselectableDates" | "unselectableDaysOfWeek" | "nearbyMonthDays" | "nearbySelectableMonthDays" | "showWeekNumber" | "weekNumberClickable" | "firstDayOfWeek" | "rulesForFirstWeek" | "yearsRange" | "mobileNative" | "ariaNextLabel" | "ariaPreviousLabel" | "headerClass" | "headerButtonsClass" | "headerButtonsSizeClass" | "prevButtonClass" | "nextButtonClass" | "listsClass" | "footerClass" | "tableClass" | "tableHeadClass" | "tableHeadCellClass" | "tableBodyClass" | "tableRowClass" | "tableCellClass" | "tableCellInvisibleClass" | "tableCellSelectedClass" | "tableCellFirstSelectedClass" | "tableCellWithinSelectedClass" | "tableCellLastSelectedClass" | "tableCellFirstHoveredClass" | "tableCellWithinHoveredClass" | "tableCellLastHoveredClass" | "tableCellTodayClass" | "tableCellSelectableClass" | "tableCellUnselectableClass" | "tableCellNearbyClass" | "tableCellEventsClass" | "tableEventsClass" | "tableEventClass" | "tableEventVariantClass" | "tableEventIndicatorsClass" | "monthClass" | "monthBodyClass" | "monthTableClass" | "monthCellClass" | "monthCellSelectedClass" | "monthCellFirstSelectedClass" | "monthCellWithinSelectedClass" | "monthCellLastSelectedClass" | "monthCellWithinHoveredRangeClass" | "monthCellFirstHoveredClass" | "monthCellWithinHoveredClass" | "monthCellLastHoveredClass" | "monthCellTodayClass" | "monthCellSelectableClass" | "monthCellUnselectableClass" | "monthCellEventsClass">>>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: Date | Date[]) => void;
    "update:focusedDate": (value: FocusedDate) => void;
    "range-start": (value: Date) => void;
    "range-end": (value: Date) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<Date | Date[]>;
        default: any;
    };
    monthNames: {
        type: PropType<string[]>;
        required: true;
    };
    focusedDate: {
        type: PropType<FocusedDate>;
        required: true;
    };
    pickerProps: {
        type: PropType<NonNullable<Partial<{
            size: string;
            override: boolean;
            iconPack: string;
            useHtml5Validation: boolean;
            type: string;
            mobileBreakpoint: string;
            rootClass: import('../../types').ComponentClass;
            mobileClass: import('../../types').ComponentClass;
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
            sizeClass: import('../../types').ComponentClass;
            inline: boolean;
            multiple: boolean;
            trapFocus: boolean;
            indicators: string;
            iconPrev: string;
            iconNext: string;
            range: boolean;
            selectClasses: Record<string, any>;
            dropdownClasses: Record<string, any>;
            boxClass: import('../../types').ComponentClass;
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
            headerClass: import('../../types').ComponentClass;
            headerButtonsClass: import('../../types').ComponentClass;
            headerButtonsSizeClass: import('../../types').ComponentClass;
            prevButtonClass: import('../../types').ComponentClass;
            nextButtonClass: import('../../types').ComponentClass;
            listsClass: import('../../types').ComponentClass;
            footerClass: import('../../types').ComponentClass;
            tableClass: import('../../types').ComponentClass;
            tableHeadClass: import('../../types').ComponentClass;
            tableHeadCellClass: import('../../types').ComponentClass;
            tableBodyClass: import('../../types').ComponentClass;
            tableRowClass: import('../../types').ComponentClass;
            tableCellClass: import('../../types').ComponentClass;
            tableCellInvisibleClass: import('../../types').ComponentClass;
            tableCellSelectedClass: import('../../types').ComponentClass;
            tableCellFirstSelectedClass: import('../../types').ComponentClass;
            tableCellWithinSelectedClass: import('../../types').ComponentClass;
            tableCellLastSelectedClass: import('../../types').ComponentClass;
            tableCellFirstHoveredClass: import('../../types').ComponentClass;
            tableCellWithinHoveredClass: import('../../types').ComponentClass;
            tableCellLastHoveredClass: import('../../types').ComponentClass;
            tableCellTodayClass: import('../../types').ComponentClass;
            tableCellSelectableClass: import('../../types').ComponentClass;
            tableCellUnselectableClass: import('../../types').ComponentClass;
            tableCellNearbyClass: import('../../types').ComponentClass;
            tableCellEventsClass: import('../../types').ComponentClass;
            tableEventsClass: import('../../types').ComponentClass;
            tableEventClass: import('../../types').ComponentClass;
            tableEventVariantClass: import('../../types').ComponentClass;
            tableEventIndicatorsClass: import('../../types').ComponentClass;
            monthClass: import('../../types').ComponentClass;
            monthBodyClass: import('../../types').ComponentClass;
            monthTableClass: import('../../types').ComponentClass;
            monthCellClass: import('../../types').ComponentClass;
            monthCellSelectedClass: import('../../types').ComponentClass;
            monthCellFirstSelectedClass: import('../../types').ComponentClass;
            monthCellWithinSelectedClass: import('../../types').ComponentClass;
            monthCellLastSelectedClass: import('../../types').ComponentClass;
            monthCellWithinHoveredRangeClass: import('../../types').ComponentClass;
            monthCellFirstHoveredClass: import('../../types').ComponentClass;
            monthCellWithinHoveredClass: import('../../types').ComponentClass;
            monthCellLastHoveredClass: import('../../types').ComponentClass;
            monthCellTodayClass: import('../../types').ComponentClass;
            monthCellSelectableClass: import('../../types').ComponentClass;
            monthCellUnselectableClass: import('../../types').ComponentClass;
            monthCellEventsClass: import('../../types').ComponentClass;
        }> & Omit<{
            readonly size: string;
            readonly useHtml5Validation: boolean;
            readonly type: string;
            readonly mobileBreakpoint: string;
            readonly expanded: boolean;
            readonly rounded: boolean;
            readonly disabled: boolean;
            readonly openOnFocus: boolean;
            readonly mobileModal: boolean;
            readonly iconRightClickable: boolean;
            readonly teleport: string | boolean | Record<string, any>;
            readonly inputClasses: Record<string, any>;
            readonly inline: boolean;
            readonly multiple: boolean;
            readonly trapFocus: boolean;
            readonly indicators: string;
            readonly iconPrev: string;
            readonly iconNext: string;
            readonly range: boolean;
            readonly selectClasses: Record<string, any>;
            readonly dropdownClasses: Record<string, any>;
            readonly readonly: boolean;
            readonly closeOnClick: boolean;
            readonly locale: string;
            readonly dateFormatter: (date: Date | Date[]) => string;
            readonly dateParser: (date: string) => Date;
            readonly dateCreator: () => Date;
            readonly selectableDates: Date[] | ((date: Date) => boolean);
            readonly unselectableDates: Date[] | ((date: Date) => boolean);
            readonly nearbyMonthDays: boolean;
            readonly nearbySelectableMonthDays: boolean;
            readonly showWeekNumber: boolean;
            readonly weekNumberClickable: boolean;
            readonly firstDayOfWeek: number;
            readonly rulesForFirstWeek: number;
            readonly yearsRange: number[];
            readonly mobileNative: boolean;
            readonly ariaNextLabel: string;
            readonly ariaPreviousLabel: string;
            readonly override?: boolean;
            readonly iconPack?: string;
            readonly modelValue?: Date | Date[];
            readonly rootClass?: import('../../types').ComponentClass;
            readonly mobileClass?: import('../../types').ComponentClass;
            readonly validationMessage?: string;
            readonly position?: string;
            readonly placeholder?: string;
            readonly icon?: string;
            readonly iconRight?: string;
            readonly sizeClass?: import('../../types').ComponentClass;
            readonly active?: boolean;
            readonly boxClass?: import('../../types').ComponentClass;
            readonly dayNames?: string[];
            readonly monthNames?: string[];
            readonly focusedDate?: Date;
            readonly events?: DatepickerEvent[];
            readonly minDate?: Date;
            readonly maxDate?: Date;
            readonly unselectableDaysOfWeek?: number[];
            readonly headerClass?: import('../../types').ComponentClass;
            readonly headerButtonsClass?: import('../../types').ComponentClass;
            readonly headerButtonsSizeClass?: import('../../types').ComponentClass;
            readonly prevButtonClass?: import('../../types').ComponentClass;
            readonly nextButtonClass?: import('../../types').ComponentClass;
            readonly listsClass?: import('../../types').ComponentClass;
            readonly footerClass?: import('../../types').ComponentClass;
            readonly tableClass?: import('../../types').ComponentClass;
            readonly tableHeadClass?: import('../../types').ComponentClass;
            readonly tableHeadCellClass?: import('../../types').ComponentClass;
            readonly tableBodyClass?: import('../../types').ComponentClass;
            readonly tableRowClass?: import('../../types').ComponentClass;
            readonly tableCellClass?: import('../../types').ComponentClass;
            readonly tableCellInvisibleClass?: import('../../types').ComponentClass;
            readonly tableCellSelectedClass?: import('../../types').ComponentClass;
            readonly tableCellFirstSelectedClass?: import('../../types').ComponentClass;
            readonly tableCellWithinSelectedClass?: import('../../types').ComponentClass;
            readonly tableCellLastSelectedClass?: import('../../types').ComponentClass;
            readonly tableCellFirstHoveredClass?: import('../../types').ComponentClass;
            readonly tableCellWithinHoveredClass?: import('../../types').ComponentClass;
            readonly tableCellLastHoveredClass?: import('../../types').ComponentClass;
            readonly tableCellTodayClass?: import('../../types').ComponentClass;
            readonly tableCellSelectableClass?: import('../../types').ComponentClass;
            readonly tableCellUnselectableClass?: import('../../types').ComponentClass;
            readonly tableCellNearbyClass?: import('../../types').ComponentClass;
            readonly tableCellEventsClass?: import('../../types').ComponentClass;
            readonly tableEventsClass?: import('../../types').ComponentClass;
            readonly tableEventClass?: import('../../types').ComponentClass;
            readonly tableEventVariantClass?: import('../../types').ComponentClass;
            readonly tableEventIndicatorsClass?: import('../../types').ComponentClass;
            readonly monthClass?: import('../../types').ComponentClass;
            readonly monthBodyClass?: import('../../types').ComponentClass;
            readonly monthTableClass?: import('../../types').ComponentClass;
            readonly monthCellClass?: import('../../types').ComponentClass;
            readonly monthCellSelectedClass?: import('../../types').ComponentClass;
            readonly monthCellFirstSelectedClass?: import('../../types').ComponentClass;
            readonly monthCellWithinSelectedClass?: import('../../types').ComponentClass;
            readonly monthCellLastSelectedClass?: import('../../types').ComponentClass;
            readonly monthCellWithinHoveredRangeClass?: import('../../types').ComponentClass;
            readonly monthCellFirstHoveredClass?: import('../../types').ComponentClass;
            readonly monthCellWithinHoveredClass?: import('../../types').ComponentClass;
            readonly monthCellLastHoveredClass?: import('../../types').ComponentClass;
            readonly monthCellTodayClass?: import('../../types').ComponentClass;
            readonly monthCellSelectableClass?: import('../../types').ComponentClass;
            readonly monthCellUnselectableClass?: import('../../types').ComponentClass;
            readonly monthCellEventsClass?: import('../../types').ComponentClass;
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
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            modelValue: PropType<Date | Date[]>;
            active: PropType<boolean>;
            override: {
                type: BooleanConstructor;
                default: any;
            };
            type: {
                type: StringConstructor;
                default: string;
                validator: (value: string) => boolean;
            };
            dayNames: {
                type: PropType<string[]>;
                default: () => any;
            };
            monthNames: {
                type: PropType<string[]>;
                default: () => any;
            };
            size: {
                type: StringConstructor;
                default: () => unknown;
            };
            focusedDate: {
                type: DateConstructor;
                default: any;
            };
            events: {
                type: PropType<DatepickerEvent[]>;
                default: any;
            };
            indicators: {
                type: StringConstructor;
                default: string;
            };
            minDate: {
                type: DateConstructor;
                default: any;
            };
            maxDate: {
                type: DateConstructor;
                default: any;
            };
            range: {
                type: BooleanConstructor;
                default: boolean;
            };
            expanded: {
                type: BooleanConstructor;
                default: boolean;
            };
            rounded: {
                type: BooleanConstructor;
                default: boolean;
            };
            inline: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: {
                type: StringConstructor;
                default: any;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            openOnFocus: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            closeOnClick: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            locale: {
                type: StringConstructor;
                default: () => unknown;
            };
            dateFormatter: {
                type: PropType<(date: Date | Date[]) => string>;
                default: (date: Date | Date[], defaultFunction: (date: Date | Date[]) => string) => string;
            };
            dateParser: {
                type: PropType<(date: string) => Date>;
                default: (date: string, defaultFunction: (date: string) => Date) => Date;
            };
            dateCreator: {
                type: PropType<() => Date>;
                default: () => Date;
            };
            selectableDates: {
                type: PropType<Date[] | ((date: Date) => boolean)>;
                default: () => any[];
            };
            unselectableDates: {
                type: PropType<Date[] | ((date: Date) => boolean)>;
                default: () => any[];
            };
            unselectableDaysOfWeek: {
                type: PropType<number[]>;
                default: () => any;
            };
            nearbyMonthDays: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            nearbySelectableMonthDays: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            showWeekNumber: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            weekNumberClickable: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            firstDayOfWeek: {
                type: NumberConstructor;
                default: () => number;
            };
            rulesForFirstWeek: {
                type: NumberConstructor;
                default: () => number;
            };
            yearsRange: {
                type: PropType<number[]>;
                default: () => number[];
            };
            trapFocus: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            position: {
                type: StringConstructor;
                default: any;
            };
            mobileModal: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            mobileNative: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            iconPack: {
                type: StringConstructor;
                default: () => any;
            };
            icon: {
                type: StringConstructor;
                default: () => any;
            };
            iconRight: {
                type: StringConstructor;
                default: () => any;
            };
            iconRightClickable: {
                type: BooleanConstructor;
                default: boolean;
            };
            iconPrev: {
                type: StringConstructor;
                default: () => string;
            };
            iconNext: {
                type: StringConstructor;
                default: () => string;
            };
            mobileBreakpoint: {
                type: StringConstructor;
                default: () => unknown;
            };
            teleport: {
                type: (ObjectConstructor | BooleanConstructor | StringConstructor)[];
                default: () => boolean;
            };
            useHtml5Validation: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            validationMessage: {
                type: StringConstructor;
                default: any;
            };
            ariaNextLabel: {
                type: StringConstructor;
                default: () => string;
            };
            ariaPreviousLabel: {
                type: StringConstructor;
                default: () => string;
            };
            rootClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            sizeClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            boxClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            headerClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            headerButtonsClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            headerButtonsSizeClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            prevButtonClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            nextButtonClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            listsClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            footerClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableHeadClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableHeadCellClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableBodyClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableRowClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellInvisibleClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellFirstSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellWithinSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellLastSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellFirstHoveredClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellWithinHoveredClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellLastHoveredClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellTodayClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellSelectableClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellUnselectableClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellNearbyClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableCellEventsClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableEventsClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableEventClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableEventVariantClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            tableEventIndicatorsClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthBodyClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthTableClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellFirstSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellWithinSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellLastSelectedClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellWithinHoveredRangeClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellFirstHoveredClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellWithinHoveredClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellLastHoveredClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellTodayClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellSelectableClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellUnselectableClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            monthCellEventsClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            mobileClass: {
                type: PropType<import('../../types').ComponentClass>;
                default: any;
            };
            inputClasses: {
                type: ObjectConstructor;
                default: () => Partial<{
                    override: boolean;
                    transformClasses: import('../../types').TransformFunction;
                }> & Partial<{
                    clearable: boolean;
                    disabledClass: import('../../types').ClassDefinition;
                    expandedClass: import('../../types').ClassDefinition;
                    roundedClass: import('../../types').ClassDefinition;
                    textareaClass: import('../../types').ClassDefinition;
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
            dropdownClasses: {
                type: ObjectConstructor;
                default: () => Partial<{
                    override: boolean;
                    transformClasses: import('../../types').TransformFunction;
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
            selectClasses: {
                type: ObjectConstructor;
                default: () => Partial<{
                    override: boolean;
                    transformClasses: import('../../types').TransformFunction;
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
        }, "size" | "override" | "iconPack" | "useHtml5Validation" | "type" | "mobileBreakpoint" | "rootClass" | "mobileClass" | "validationMessage" | "position" | "placeholder" | "expanded" | "rounded" | "disabled" | "openOnFocus" | "mobileModal" | "icon" | "iconRight" | "iconRightClickable" | "teleport" | "inputClasses" | "sizeClass" | "inline" | "multiple" | "trapFocus" | "indicators" | "iconPrev" | "iconNext" | "range" | "selectClasses" | "dropdownClasses" | "boxClass" | "readonly" | "dayNames" | "monthNames" | "focusedDate" | "events" | "minDate" | "maxDate" | "closeOnClick" | "locale" | "dateFormatter" | "dateParser" | "dateCreator" | "selectableDates" | "unselectableDates" | "unselectableDaysOfWeek" | "nearbyMonthDays" | "nearbySelectableMonthDays" | "showWeekNumber" | "weekNumberClickable" | "firstDayOfWeek" | "rulesForFirstWeek" | "yearsRange" | "mobileNative" | "ariaNextLabel" | "ariaPreviousLabel" | "headerClass" | "headerButtonsClass" | "headerButtonsSizeClass" | "prevButtonClass" | "nextButtonClass" | "listsClass" | "footerClass" | "tableClass" | "tableHeadClass" | "tableHeadCellClass" | "tableBodyClass" | "tableRowClass" | "tableCellClass" | "tableCellInvisibleClass" | "tableCellSelectedClass" | "tableCellFirstSelectedClass" | "tableCellWithinSelectedClass" | "tableCellLastSelectedClass" | "tableCellFirstHoveredClass" | "tableCellWithinHoveredClass" | "tableCellLastHoveredClass" | "tableCellTodayClass" | "tableCellSelectableClass" | "tableCellUnselectableClass" | "tableCellNearbyClass" | "tableCellEventsClass" | "tableEventsClass" | "tableEventClass" | "tableEventVariantClass" | "tableEventIndicatorsClass" | "monthClass" | "monthBodyClass" | "monthTableClass" | "monthCellClass" | "monthCellSelectedClass" | "monthCellFirstSelectedClass" | "monthCellWithinSelectedClass" | "monthCellLastSelectedClass" | "monthCellWithinHoveredRangeClass" | "monthCellFirstHoveredClass" | "monthCellWithinHoveredClass" | "monthCellLastHoveredClass" | "monthCellTodayClass" | "monthCellSelectableClass" | "monthCellUnselectableClass" | "monthCellEventsClass">>>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: (value: Date | Date[]) => any;
    "onRange-start"?: (value: Date) => any;
    "onRange-end"?: (value: Date) => any;
    "onUpdate:focusedDate"?: (value: FocusedDate) => any;
}, {
    modelValue: Date | Date[];
}, {}>;
export default _default;
