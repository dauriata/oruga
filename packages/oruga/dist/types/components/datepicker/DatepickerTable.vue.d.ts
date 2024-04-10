import { type PropType } from "vue";
import type { DatepickerEvent, FocusedDate } from "./types";
declare const _default: import("vue").DefineComponent<{
    focusedDate: PropType<FocusedDate>;
    modelValue: {
        type: PropType<Date | Date[]>;
        default: any;
    };
    dayNames: {
        type: PropType<string[]>;
        required: true;
    };
    monthNames: {
        type: PropType<string[]>;
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
            rootClass: import('../../index').ComponentClass;
            mobileClass: import('../../index').ComponentClass;
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
            sizeClass: import('../../index').ComponentClass;
            inline: boolean;
            multiple: boolean;
            trapFocus: boolean;
            indicators: string;
            iconPrev: string;
            iconNext: string;
            range: boolean;
            selectClasses: Record<string, any>;
            dropdownClasses: Record<string, any>;
            boxClass: import('../../index').ComponentClass;
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
            headerClass: import('../../index').ComponentClass;
            headerButtonsClass: import('../../index').ComponentClass;
            headerButtonsSizeClass: import('../../index').ComponentClass;
            prevButtonClass: import('../../index').ComponentClass;
            nextButtonClass: import('../../index').ComponentClass;
            listsClass: import('../../index').ComponentClass;
            footerClass: import('../../index').ComponentClass;
            tableClass: import('../../index').ComponentClass;
            tableHeadClass: import('../../index').ComponentClass;
            tableHeadCellClass: import('../../index').ComponentClass;
            tableBodyClass: import('../../index').ComponentClass;
            tableRowClass: import('../../index').ComponentClass;
            tableCellClass: import('../../index').ComponentClass;
            tableCellInvisibleClass: import('../../index').ComponentClass;
            tableCellSelectedClass: import('../../index').ComponentClass;
            tableCellFirstSelectedClass: import('../../index').ComponentClass;
            tableCellWithinSelectedClass: import('../../index').ComponentClass;
            tableCellLastSelectedClass: import('../../index').ComponentClass;
            tableCellFirstHoveredClass: import('../../index').ComponentClass;
            tableCellWithinHoveredClass: import('../../index').ComponentClass;
            tableCellLastHoveredClass: import('../../index').ComponentClass;
            tableCellTodayClass: import('../../index').ComponentClass;
            tableCellSelectableClass: import('../../index').ComponentClass;
            tableCellUnselectableClass: import('../../index').ComponentClass;
            tableCellNearbyClass: import('../../index').ComponentClass;
            tableCellEventsClass: import('../../index').ComponentClass;
            tableEventsClass: import('../../index').ComponentClass;
            tableEventClass: import('../../index').ComponentClass;
            tableEventVariantClass: import('../../index').ComponentClass;
            tableEventIndicatorsClass: import('../../index').ComponentClass;
            monthClass: import('../../index').ComponentClass;
            monthBodyClass: import('../../index').ComponentClass;
            monthTableClass: import('../../index').ComponentClass;
            monthCellClass: import('../../index').ComponentClass;
            monthCellSelectedClass: import('../../index').ComponentClass;
            monthCellFirstSelectedClass: import('../../index').ComponentClass;
            monthCellWithinSelectedClass: import('../../index').ComponentClass;
            monthCellLastSelectedClass: import('../../index').ComponentClass;
            monthCellWithinHoveredRangeClass: import('../../index').ComponentClass;
            monthCellFirstHoveredClass: import('../../index').ComponentClass;
            monthCellWithinHoveredClass: import('../../index').ComponentClass;
            monthCellLastHoveredClass: import('../../index').ComponentClass;
            monthCellTodayClass: import('../../index').ComponentClass;
            monthCellSelectableClass: import('../../index').ComponentClass;
            monthCellUnselectableClass: import('../../index').ComponentClass;
            monthCellEventsClass: import('../../index').ComponentClass;
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
            readonly rootClass?: import('../../index').ComponentClass;
            readonly mobileClass?: import('../../index').ComponentClass;
            readonly validationMessage?: string;
            readonly position?: string;
            readonly placeholder?: string;
            readonly icon?: string;
            readonly iconRight?: string;
            readonly sizeClass?: import('../../index').ComponentClass;
            readonly active?: boolean;
            readonly boxClass?: import('../../index').ComponentClass;
            readonly dayNames?: string[];
            readonly monthNames?: string[];
            readonly focusedDate?: Date;
            readonly events?: DatepickerEvent[];
            readonly minDate?: Date;
            readonly maxDate?: Date;
            readonly unselectableDaysOfWeek?: number[];
            readonly headerClass?: import('../../index').ComponentClass;
            readonly headerButtonsClass?: import('../../index').ComponentClass;
            readonly headerButtonsSizeClass?: import('../../index').ComponentClass;
            readonly prevButtonClass?: import('../../index').ComponentClass;
            readonly nextButtonClass?: import('../../index').ComponentClass;
            readonly listsClass?: import('../../index').ComponentClass;
            readonly footerClass?: import('../../index').ComponentClass;
            readonly tableClass?: import('../../index').ComponentClass;
            readonly tableHeadClass?: import('../../index').ComponentClass;
            readonly tableHeadCellClass?: import('../../index').ComponentClass;
            readonly tableBodyClass?: import('../../index').ComponentClass;
            readonly tableRowClass?: import('../../index').ComponentClass;
            readonly tableCellClass?: import('../../index').ComponentClass;
            readonly tableCellInvisibleClass?: import('../../index').ComponentClass;
            readonly tableCellSelectedClass?: import('../../index').ComponentClass;
            readonly tableCellFirstSelectedClass?: import('../../index').ComponentClass;
            readonly tableCellWithinSelectedClass?: import('../../index').ComponentClass;
            readonly tableCellLastSelectedClass?: import('../../index').ComponentClass;
            readonly tableCellFirstHoveredClass?: import('../../index').ComponentClass;
            readonly tableCellWithinHoveredClass?: import('../../index').ComponentClass;
            readonly tableCellLastHoveredClass?: import('../../index').ComponentClass;
            readonly tableCellTodayClass?: import('../../index').ComponentClass;
            readonly tableCellSelectableClass?: import('../../index').ComponentClass;
            readonly tableCellUnselectableClass?: import('../../index').ComponentClass;
            readonly tableCellNearbyClass?: import('../../index').ComponentClass;
            readonly tableCellEventsClass?: import('../../index').ComponentClass;
            readonly tableEventsClass?: import('../../index').ComponentClass;
            readonly tableEventClass?: import('../../index').ComponentClass;
            readonly tableEventVariantClass?: import('../../index').ComponentClass;
            readonly tableEventIndicatorsClass?: import('../../index').ComponentClass;
            readonly monthClass?: import('../../index').ComponentClass;
            readonly monthBodyClass?: import('../../index').ComponentClass;
            readonly monthTableClass?: import('../../index').ComponentClass;
            readonly monthCellClass?: import('../../index').ComponentClass;
            readonly monthCellSelectedClass?: import('../../index').ComponentClass;
            readonly monthCellFirstSelectedClass?: import('../../index').ComponentClass;
            readonly monthCellWithinSelectedClass?: import('../../index').ComponentClass;
            readonly monthCellLastSelectedClass?: import('../../index').ComponentClass;
            readonly monthCellWithinHoveredRangeClass?: import('../../index').ComponentClass;
            readonly monthCellFirstHoveredClass?: import('../../index').ComponentClass;
            readonly monthCellWithinHoveredClass?: import('../../index').ComponentClass;
            readonly monthCellLastHoveredClass?: import('../../index').ComponentClass;
            readonly monthCellTodayClass?: import('../../index').ComponentClass;
            readonly monthCellSelectableClass?: import('../../index').ComponentClass;
            readonly monthCellUnselectableClass?: import('../../index').ComponentClass;
            readonly monthCellEventsClass?: import('../../index').ComponentClass;
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
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            sizeClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            boxClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            headerClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            headerButtonsClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            headerButtonsSizeClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            prevButtonClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            nextButtonClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            listsClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            footerClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableHeadClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableHeadCellClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableBodyClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableRowClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellInvisibleClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellFirstSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellWithinSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellLastSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellFirstHoveredClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellWithinHoveredClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellLastHoveredClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellTodayClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellSelectableClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellUnselectableClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellNearbyClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellEventsClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableEventsClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableEventClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableEventVariantClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableEventIndicatorsClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthBodyClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthTableClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellFirstSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellWithinSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellLastSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellWithinHoveredRangeClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellFirstHoveredClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellWithinHoveredClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellLastHoveredClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellTodayClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellSelectableClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellUnselectableClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellEventsClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            mobileClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            inputClasses: {
                type: ObjectConstructor;
                default: () => Partial<{
                    override: boolean;
                    transformClasses: import('../../index').TransformFunction;
                }> & Partial<{
                    clearable: boolean;
                    disabledClass: import('../../index').ClassDefinition;
                    expandedClass: import('../../index').ClassDefinition;
                    roundedClass: import('../../index').ClassDefinition;
                    textareaClass: import('../../index').ClassDefinition;
                    counterClass: import('../../index').ClassDefinition;
                    sizeClass: import('../../index').ClassDefinition;
                    variantClass: import('../../index').ClassDefinition;
                    iconLeftClass: import('../../index').ClassDefinition;
                    iconLeftSpaceClass: import('../../index').ClassDefinition;
                    inputClass: import('../../index').ClassDefinition;
                    iconRightClass: import('../../index').ClassDefinition;
                    iconRightSpaceClass: import('../../index').ClassDefinition;
                    rootClass: import('../../index').ClassDefinition;
                    hasIconRightClass: import('../../index').ClassDefinition;
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
                    transformClasses: import('../../index').TransformFunction;
                }> & Partial<{
                    teleport: string | boolean | Record<string, any>;
                    positionClass: import('../../index').ClassDefinition;
                    activeClass: import('../../index').ClassDefinition;
                    hoverableClass: import('../../index').ClassDefinition;
                    menuPositionClass: import('../../index').ClassDefinition;
                    menuActiveClass: import('../../index').ClassDefinition;
                    inlineClass: import('../../index').ClassDefinition;
                    disabledClass: import('../../index').ClassDefinition;
                    expandedClass: import('../../index').ClassDefinition;
                    mobileClass: import('../../index').ClassDefinition;
                    itemClass: import('../../index').ClassDefinition;
                    itemActiveClass: import('../../index').ClassDefinition;
                    itemClickableClass: import('../../index').ClassDefinition;
                    itemDisabledClass: import('../../index').ClassDefinition;
                    menuClass: import('../../index').ClassDefinition;
                    menuMobileOverlayClass: import('../../index').ClassDefinition;
                    rootClass: import('../../index').ClassDefinition;
                    triggerClass: import('../../index').ClassDefinition;
                    teleportClass: import('../../index').ClassDefinition;
                    animation: string;
                    closeable: boolean | string[];
                    mobileModal: boolean;
                    itemTag: import('../../index').DynamicComponent;
                    menuTag: import('../../index').DynamicComponent;
                    triggerTag: import('../../index').DynamicComponent;
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
                    transformClasses: import('../../index').TransformFunction;
                }> & Partial<{
                    disabledClass: import('../../index').ClassDefinition;
                    expandedClass: import('../../index').ClassDefinition;
                    roundedClass: import('../../index').ClassDefinition;
                    iconLeftClass: import('../../index').ClassDefinition;
                    iconLeftSpaceClass: import('../../index').ClassDefinition;
                    selectClass: import('../../index').ClassDefinition;
                    iconRightClass: import('../../index').ClassDefinition;
                    iconRightSpaceClass: import('../../index').ClassDefinition;
                    rootClass: import('../../index').ClassDefinition;
                    arrowClass: import('../../index').ClassDefinition;
                    placeholderClass: import('../../index').ClassDefinition;
                    sizeClass: import('../../index').ClassDefinition;
                    variantClass: import('../../index').ClassDefinition;
                    rootVariantClass: import('../../index').ClassDefinition;
                    multipleClass: import('../../index').ClassDefinition;
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
    "week-number-click": (value: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    focusedDate: PropType<FocusedDate>;
    modelValue: {
        type: PropType<Date | Date[]>;
        default: any;
    };
    dayNames: {
        type: PropType<string[]>;
        required: true;
    };
    monthNames: {
        type: PropType<string[]>;
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
            rootClass: import('../../index').ComponentClass;
            mobileClass: import('../../index').ComponentClass;
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
            sizeClass: import('../../index').ComponentClass;
            inline: boolean;
            multiple: boolean;
            trapFocus: boolean;
            indicators: string;
            iconPrev: string;
            iconNext: string;
            range: boolean;
            selectClasses: Record<string, any>;
            dropdownClasses: Record<string, any>;
            boxClass: import('../../index').ComponentClass;
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
            headerClass: import('../../index').ComponentClass;
            headerButtonsClass: import('../../index').ComponentClass;
            headerButtonsSizeClass: import('../../index').ComponentClass;
            prevButtonClass: import('../../index').ComponentClass;
            nextButtonClass: import('../../index').ComponentClass;
            listsClass: import('../../index').ComponentClass;
            footerClass: import('../../index').ComponentClass;
            tableClass: import('../../index').ComponentClass;
            tableHeadClass: import('../../index').ComponentClass;
            tableHeadCellClass: import('../../index').ComponentClass;
            tableBodyClass: import('../../index').ComponentClass;
            tableRowClass: import('../../index').ComponentClass;
            tableCellClass: import('../../index').ComponentClass;
            tableCellInvisibleClass: import('../../index').ComponentClass;
            tableCellSelectedClass: import('../../index').ComponentClass;
            tableCellFirstSelectedClass: import('../../index').ComponentClass;
            tableCellWithinSelectedClass: import('../../index').ComponentClass;
            tableCellLastSelectedClass: import('../../index').ComponentClass;
            tableCellFirstHoveredClass: import('../../index').ComponentClass;
            tableCellWithinHoveredClass: import('../../index').ComponentClass;
            tableCellLastHoveredClass: import('../../index').ComponentClass;
            tableCellTodayClass: import('../../index').ComponentClass;
            tableCellSelectableClass: import('../../index').ComponentClass;
            tableCellUnselectableClass: import('../../index').ComponentClass;
            tableCellNearbyClass: import('../../index').ComponentClass;
            tableCellEventsClass: import('../../index').ComponentClass;
            tableEventsClass: import('../../index').ComponentClass;
            tableEventClass: import('../../index').ComponentClass;
            tableEventVariantClass: import('../../index').ComponentClass;
            tableEventIndicatorsClass: import('../../index').ComponentClass;
            monthClass: import('../../index').ComponentClass;
            monthBodyClass: import('../../index').ComponentClass;
            monthTableClass: import('../../index').ComponentClass;
            monthCellClass: import('../../index').ComponentClass;
            monthCellSelectedClass: import('../../index').ComponentClass;
            monthCellFirstSelectedClass: import('../../index').ComponentClass;
            monthCellWithinSelectedClass: import('../../index').ComponentClass;
            monthCellLastSelectedClass: import('../../index').ComponentClass;
            monthCellWithinHoveredRangeClass: import('../../index').ComponentClass;
            monthCellFirstHoveredClass: import('../../index').ComponentClass;
            monthCellWithinHoveredClass: import('../../index').ComponentClass;
            monthCellLastHoveredClass: import('../../index').ComponentClass;
            monthCellTodayClass: import('../../index').ComponentClass;
            monthCellSelectableClass: import('../../index').ComponentClass;
            monthCellUnselectableClass: import('../../index').ComponentClass;
            monthCellEventsClass: import('../../index').ComponentClass;
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
            readonly rootClass?: import('../../index').ComponentClass;
            readonly mobileClass?: import('../../index').ComponentClass;
            readonly validationMessage?: string;
            readonly position?: string;
            readonly placeholder?: string;
            readonly icon?: string;
            readonly iconRight?: string;
            readonly sizeClass?: import('../../index').ComponentClass;
            readonly active?: boolean;
            readonly boxClass?: import('../../index').ComponentClass;
            readonly dayNames?: string[];
            readonly monthNames?: string[];
            readonly focusedDate?: Date;
            readonly events?: DatepickerEvent[];
            readonly minDate?: Date;
            readonly maxDate?: Date;
            readonly unselectableDaysOfWeek?: number[];
            readonly headerClass?: import('../../index').ComponentClass;
            readonly headerButtonsClass?: import('../../index').ComponentClass;
            readonly headerButtonsSizeClass?: import('../../index').ComponentClass;
            readonly prevButtonClass?: import('../../index').ComponentClass;
            readonly nextButtonClass?: import('../../index').ComponentClass;
            readonly listsClass?: import('../../index').ComponentClass;
            readonly footerClass?: import('../../index').ComponentClass;
            readonly tableClass?: import('../../index').ComponentClass;
            readonly tableHeadClass?: import('../../index').ComponentClass;
            readonly tableHeadCellClass?: import('../../index').ComponentClass;
            readonly tableBodyClass?: import('../../index').ComponentClass;
            readonly tableRowClass?: import('../../index').ComponentClass;
            readonly tableCellClass?: import('../../index').ComponentClass;
            readonly tableCellInvisibleClass?: import('../../index').ComponentClass;
            readonly tableCellSelectedClass?: import('../../index').ComponentClass;
            readonly tableCellFirstSelectedClass?: import('../../index').ComponentClass;
            readonly tableCellWithinSelectedClass?: import('../../index').ComponentClass;
            readonly tableCellLastSelectedClass?: import('../../index').ComponentClass;
            readonly tableCellFirstHoveredClass?: import('../../index').ComponentClass;
            readonly tableCellWithinHoveredClass?: import('../../index').ComponentClass;
            readonly tableCellLastHoveredClass?: import('../../index').ComponentClass;
            readonly tableCellTodayClass?: import('../../index').ComponentClass;
            readonly tableCellSelectableClass?: import('../../index').ComponentClass;
            readonly tableCellUnselectableClass?: import('../../index').ComponentClass;
            readonly tableCellNearbyClass?: import('../../index').ComponentClass;
            readonly tableCellEventsClass?: import('../../index').ComponentClass;
            readonly tableEventsClass?: import('../../index').ComponentClass;
            readonly tableEventClass?: import('../../index').ComponentClass;
            readonly tableEventVariantClass?: import('../../index').ComponentClass;
            readonly tableEventIndicatorsClass?: import('../../index').ComponentClass;
            readonly monthClass?: import('../../index').ComponentClass;
            readonly monthBodyClass?: import('../../index').ComponentClass;
            readonly monthTableClass?: import('../../index').ComponentClass;
            readonly monthCellClass?: import('../../index').ComponentClass;
            readonly monthCellSelectedClass?: import('../../index').ComponentClass;
            readonly monthCellFirstSelectedClass?: import('../../index').ComponentClass;
            readonly monthCellWithinSelectedClass?: import('../../index').ComponentClass;
            readonly monthCellLastSelectedClass?: import('../../index').ComponentClass;
            readonly monthCellWithinHoveredRangeClass?: import('../../index').ComponentClass;
            readonly monthCellFirstHoveredClass?: import('../../index').ComponentClass;
            readonly monthCellWithinHoveredClass?: import('../../index').ComponentClass;
            readonly monthCellLastHoveredClass?: import('../../index').ComponentClass;
            readonly monthCellTodayClass?: import('../../index').ComponentClass;
            readonly monthCellSelectableClass?: import('../../index').ComponentClass;
            readonly monthCellUnselectableClass?: import('../../index').ComponentClass;
            readonly monthCellEventsClass?: import('../../index').ComponentClass;
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
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            sizeClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            boxClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            headerClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            headerButtonsClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            headerButtonsSizeClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            prevButtonClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            nextButtonClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            listsClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            footerClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableHeadClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableHeadCellClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableBodyClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableRowClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellInvisibleClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellFirstSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellWithinSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellLastSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellFirstHoveredClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellWithinHoveredClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellLastHoveredClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellTodayClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellSelectableClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellUnselectableClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellNearbyClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableCellEventsClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableEventsClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableEventClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableEventVariantClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            tableEventIndicatorsClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthBodyClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthTableClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellFirstSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellWithinSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellLastSelectedClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellWithinHoveredRangeClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellFirstHoveredClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellWithinHoveredClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellLastHoveredClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellTodayClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellSelectableClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellUnselectableClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            monthCellEventsClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            mobileClass: {
                type: PropType<import('../../index').ComponentClass>;
                default: any;
            };
            inputClasses: {
                type: ObjectConstructor;
                default: () => Partial<{
                    override: boolean;
                    transformClasses: import('../../index').TransformFunction;
                }> & Partial<{
                    clearable: boolean;
                    disabledClass: import('../../index').ClassDefinition;
                    expandedClass: import('../../index').ClassDefinition;
                    roundedClass: import('../../index').ClassDefinition;
                    textareaClass: import('../../index').ClassDefinition;
                    counterClass: import('../../index').ClassDefinition;
                    sizeClass: import('../../index').ClassDefinition;
                    variantClass: import('../../index').ClassDefinition;
                    iconLeftClass: import('../../index').ClassDefinition;
                    iconLeftSpaceClass: import('../../index').ClassDefinition;
                    inputClass: import('../../index').ClassDefinition;
                    iconRightClass: import('../../index').ClassDefinition;
                    iconRightSpaceClass: import('../../index').ClassDefinition;
                    rootClass: import('../../index').ClassDefinition;
                    hasIconRightClass: import('../../index').ClassDefinition;
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
                    transformClasses: import('../../index').TransformFunction;
                }> & Partial<{
                    teleport: string | boolean | Record<string, any>;
                    positionClass: import('../../index').ClassDefinition;
                    activeClass: import('../../index').ClassDefinition;
                    hoverableClass: import('../../index').ClassDefinition;
                    menuPositionClass: import('../../index').ClassDefinition;
                    menuActiveClass: import('../../index').ClassDefinition;
                    inlineClass: import('../../index').ClassDefinition;
                    disabledClass: import('../../index').ClassDefinition;
                    expandedClass: import('../../index').ClassDefinition;
                    mobileClass: import('../../index').ClassDefinition;
                    itemClass: import('../../index').ClassDefinition;
                    itemActiveClass: import('../../index').ClassDefinition;
                    itemClickableClass: import('../../index').ClassDefinition;
                    itemDisabledClass: import('../../index').ClassDefinition;
                    menuClass: import('../../index').ClassDefinition;
                    menuMobileOverlayClass: import('../../index').ClassDefinition;
                    rootClass: import('../../index').ClassDefinition;
                    triggerClass: import('../../index').ClassDefinition;
                    teleportClass: import('../../index').ClassDefinition;
                    animation: string;
                    closeable: boolean | string[];
                    mobileModal: boolean;
                    itemTag: import('../../index').DynamicComponent;
                    menuTag: import('../../index').DynamicComponent;
                    triggerTag: import('../../index').DynamicComponent;
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
                    transformClasses: import('../../index').TransformFunction;
                }> & Partial<{
                    disabledClass: import('../../index').ClassDefinition;
                    expandedClass: import('../../index').ClassDefinition;
                    roundedClass: import('../../index').ClassDefinition;
                    iconLeftClass: import('../../index').ClassDefinition;
                    iconLeftSpaceClass: import('../../index').ClassDefinition;
                    selectClass: import('../../index').ClassDefinition;
                    iconRightClass: import('../../index').ClassDefinition;
                    iconRightSpaceClass: import('../../index').ClassDefinition;
                    rootClass: import('../../index').ClassDefinition;
                    arrowClass: import('../../index').ClassDefinition;
                    placeholderClass: import('../../index').ClassDefinition;
                    sizeClass: import('../../index').ClassDefinition;
                    variantClass: import('../../index').ClassDefinition;
                    rootVariantClass: import('../../index').ClassDefinition;
                    multipleClass: import('../../index').ClassDefinition;
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
    "onWeek-number-click"?: (value: number) => any;
    "onUpdate:focusedDate"?: (value: FocusedDate) => any;
}, {
    modelValue: Date | Date[];
}, {}>;
export default _default;
