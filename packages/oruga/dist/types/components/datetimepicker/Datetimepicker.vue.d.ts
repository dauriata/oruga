import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    active: PropType<boolean>;
    modelValue: PropType<Date>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Define props for the underlying datepicker component */
    datepicker: {
        type: PropType<NonNullable<Partial<{
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
            events: import("../datepicker/types").DatepickerEvent[];
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
            readonly rootClass?: ComponentClass;
            readonly mobileClass?: ComponentClass;
            readonly validationMessage?: string;
            readonly position?: string;
            readonly placeholder?: string;
            readonly icon?: string;
            readonly iconRight?: string;
            readonly sizeClass?: ComponentClass;
            readonly active?: boolean;
            readonly boxClass?: ComponentClass;
            readonly dayNames?: string[];
            readonly monthNames?: string[];
            readonly focusedDate?: Date;
            readonly events?: import("../datepicker/types").DatepickerEvent[];
            readonly minDate?: Date;
            readonly maxDate?: Date;
            readonly unselectableDaysOfWeek?: number[];
            readonly headerClass?: ComponentClass;
            readonly headerButtonsClass?: ComponentClass;
            readonly headerButtonsSizeClass?: ComponentClass;
            readonly prevButtonClass?: ComponentClass;
            readonly nextButtonClass?: ComponentClass;
            readonly listsClass?: ComponentClass;
            readonly footerClass?: ComponentClass;
            readonly tableClass?: ComponentClass;
            readonly tableHeadClass?: ComponentClass;
            readonly tableHeadCellClass?: ComponentClass;
            readonly tableBodyClass?: ComponentClass;
            readonly tableRowClass?: ComponentClass;
            readonly tableCellClass?: ComponentClass;
            readonly tableCellInvisibleClass?: ComponentClass;
            readonly tableCellSelectedClass?: ComponentClass;
            readonly tableCellFirstSelectedClass?: ComponentClass;
            readonly tableCellWithinSelectedClass?: ComponentClass;
            readonly tableCellLastSelectedClass?: ComponentClass;
            readonly tableCellFirstHoveredClass?: ComponentClass;
            readonly tableCellWithinHoveredClass?: ComponentClass;
            readonly tableCellLastHoveredClass?: ComponentClass;
            readonly tableCellTodayClass?: ComponentClass;
            readonly tableCellSelectableClass?: ComponentClass;
            readonly tableCellUnselectableClass?: ComponentClass;
            readonly tableCellNearbyClass?: ComponentClass;
            readonly tableCellEventsClass?: ComponentClass;
            readonly tableEventsClass?: ComponentClass;
            readonly tableEventClass?: ComponentClass;
            readonly tableEventVariantClass?: ComponentClass;
            readonly tableEventIndicatorsClass?: ComponentClass;
            readonly monthClass?: ComponentClass;
            readonly monthBodyClass?: ComponentClass;
            readonly monthTableClass?: ComponentClass;
            readonly monthCellClass?: ComponentClass;
            readonly monthCellSelectedClass?: ComponentClass;
            readonly monthCellFirstSelectedClass?: ComponentClass;
            readonly monthCellWithinSelectedClass?: ComponentClass;
            readonly monthCellLastSelectedClass?: ComponentClass;
            readonly monthCellWithinHoveredRangeClass?: ComponentClass;
            readonly monthCellFirstHoveredClass?: ComponentClass;
            readonly monthCellWithinHoveredClass?: ComponentClass;
            readonly monthCellLastHoveredClass?: ComponentClass;
            readonly monthCellTodayClass?: ComponentClass;
            readonly monthCellSelectableClass?: ComponentClass;
            readonly monthCellUnselectableClass?: ComponentClass;
            readonly monthCellEventsClass?: ComponentClass;
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
                type: PropType<import("../datepicker/types").DatepickerEvent[]>;
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
                type: PropType<ComponentClass>;
                default: any;
            };
            sizeClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            boxClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            headerClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            headerButtonsClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            headerButtonsSizeClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            prevButtonClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            nextButtonClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            listsClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            footerClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableHeadClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableHeadCellClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableBodyClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableRowClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellInvisibleClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellFirstSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellWithinSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellLastSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellFirstHoveredClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellWithinHoveredClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellLastHoveredClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellTodayClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellSelectableClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellUnselectableClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellNearbyClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellEventsClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableEventsClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableEventClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableEventVariantClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableEventIndicatorsClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthBodyClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthTableClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellFirstSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellWithinSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellLastSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellWithinHoveredRangeClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellFirstHoveredClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellWithinHoveredClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellLastHoveredClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellTodayClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellSelectableClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellUnselectableClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellEventsClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            mobileClass: {
                type: PropType<ComponentClass>;
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
                    iconRightClass: import('../../types').ClassDefinition; /** Open dropdown on focus */
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
        default: any;
    };
    /** Define props for the underlying timepicker component */
    timepicker: {
        type: PropType<NonNullable<Partial<{
            size: string;
            override: boolean;
            iconPack: string;
            useHtml5Validation: boolean;
            modelValue: Date;
            mobileBreakpoint: string;
            rootClass: ComponentClass;
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
            active: boolean;
            inline: boolean;
            trapFocus: boolean;
            selectClasses: Record<string, any>;
            dropdownClasses: Record<string, any>;
            boxClass: ComponentClass;
            readonly: boolean;
            closeOnClick: boolean;
            locale: string;
            mobileNative: boolean;
            footerClass: ComponentClass;
            minTime: Date;
            maxTime: Date;
            hourFormat: string;
            incrementHours: number;
            incrementMinutes: number;
            incrementSeconds: number;
            enableSeconds: boolean;
            defaultMinutes: number;
            defaultSeconds: number;
            timeFormatter: (date: Date) => string;
            timeParser: (date: string) => Date;
            timeCreator: () => Date;
            unselectableTimes: Date[] | ((date: Date) => boolean);
            resetOnMeridianChange: boolean;
            separatorClass: ComponentClass;
        }> & Omit<{
            readonly size: string;
            readonly useHtml5Validation: boolean;
            readonly mobileBreakpoint: string;
            readonly expanded: boolean;
            readonly rounded: boolean;
            readonly disabled: boolean;
            readonly openOnFocus: boolean;
            readonly mobileModal: boolean;
            readonly iconRightClickable: boolean;
            readonly teleport: string | boolean | Record<string, any>;
            readonly inputClasses: Record<string, any>;
            readonly active: boolean;
            readonly inline: boolean;
            readonly trapFocus: boolean;
            readonly selectClasses: Record<string, any>;
            readonly dropdownClasses: Record<string, any>;
            readonly readonly: boolean;
            readonly closeOnClick: boolean;
            readonly locale: string;
            readonly mobileNative: boolean;
            readonly incrementHours: number;
            readonly incrementMinutes: number;
            readonly incrementSeconds: number;
            readonly enableSeconds: boolean;
            readonly timeFormatter: (date: Date) => string;
            readonly timeParser: (date: string) => Date;
            readonly timeCreator: () => Date;
            readonly unselectableTimes: Date[] | ((date: Date) => boolean);
            readonly resetOnMeridianChange: boolean;
            readonly override?: boolean;
            readonly iconPack?: string;
            readonly modelValue?: Date;
            readonly rootClass?: ComponentClass;
            readonly validationMessage?: string;
            readonly position?: string;
            readonly placeholder?: string;
            readonly icon?: string;
            readonly iconRight?: string;
            readonly sizeClass?: ComponentClass;
            readonly boxClass?: ComponentClass;
            readonly footerClass?: ComponentClass;
            readonly minTime?: Date;
            readonly maxTime?: Date;
            readonly hourFormat?: string;
            readonly defaultMinutes?: number;
            readonly defaultSeconds?: number;
            readonly separatorClass?: ComponentClass;
            onBlur?: (event: Event) => any;
            onFocus?: (event: Event) => any;
            onInvalid?: (event: Event) => any;
            "onUpdate:modelValue"?: (value: Date) => any;
            "onIcon-click"?: (event: Event) => any;
            "onIcon-right-click"?: (event: Event) => any;
            "onUpdate:active"?: (value: boolean) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            override: {
                type: BooleanConstructor;
                default: any;
            };
            modelValue: {
                type: PropType<Date>;
                default: any;
            };
            active: {
                type: BooleanConstructor;
                default: boolean;
            };
            minTime: {
                type: PropType<Date>;
                default: any;
            };
            maxTime: {
                type: PropType<Date>;
                default: any;
            };
            inline: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: {
                type: StringConstructor;
                default: any;
            };
            expanded: {
                type: BooleanConstructor;
                default: boolean;
            };
            rounded: {
                type: BooleanConstructor;
                default: boolean;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: StringConstructor;
                default: () => unknown;
            };
            hourFormat: {
                type: StringConstructor;
                default: any;
            };
            incrementHours: {
                type: NumberConstructor;
                default: number;
            };
            incrementMinutes: {
                type: NumberConstructor;
                default: number;
            };
            incrementSeconds: {
                type: NumberConstructor;
                default: number;
            };
            openOnFocus: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            closeOnClick: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            enableSeconds: {
                type: BooleanConstructor;
                default: boolean;
            };
            defaultMinutes: {
                type: NumberConstructor;
                default: any;
            };
            defaultSeconds: {
                type: NumberConstructor;
                default: any;
            };
            locale: {
                type: StringConstructor;
                default: () => unknown;
            };
            timeFormatter: {
                type: PropType<(date: Date) => string>;
                default: (date: Date | Date[], defaultFunction: (date: Date | Date[]) => string) => string;
            };
            timeParser: {
                type: PropType<(date: string) => Date>;
                default: (date: string, defaultFunction: (date: string) => Date) => Date;
            };
            timeCreator: {
                type: PropType<() => Date>;
                default: () => Date;
            };
            unselectableTimes: {
                type: PropType<Date[] | ((date: Date) => boolean)>;
                default: () => any[];
            };
            resetOnMeridianChange: {
                type: BooleanConstructor;
                default: boolean;
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
            rootClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            sizeClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            boxClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            separatorClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            footerClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            inputClasses: {
                type: ObjectConstructor;
                default: () => {};
            };
            dropdownClasses: {
                type: ObjectConstructor;
                default: () => {};
            };
            selectClasses: {
                type: ObjectConstructor;
                default: () => {};
            };
        }>> & {
            onBlur?: (event: Event) => any;
            onFocus?: (event: Event) => any;
            onInvalid?: (event: Event) => any;
            "onUpdate:modelValue"?: (value: Date) => any;
            "onIcon-click"?: (event: Event) => any;
            "onIcon-right-click"?: (event: Event) => any;
            "onUpdate:active"?: (value: boolean) => any;
        }, "size" | "override" | "iconPack" | "useHtml5Validation" | "modelValue" | "mobileBreakpoint" | "rootClass" | "validationMessage" | "position" | "placeholder" | "expanded" | "rounded" | "disabled" | "openOnFocus" | "mobileModal" | "icon" | "iconRight" | "iconRightClickable" | "teleport" | "inputClasses" | "sizeClass" | "active" | "inline" | "trapFocus" | "selectClasses" | "dropdownClasses" | "boxClass" | "readonly" | "closeOnClick" | "locale" | "mobileNative" | "footerClass" | "minTime" | "maxTime" | "hourFormat" | "incrementHours" | "incrementMinutes" | "incrementSeconds" | "enableSeconds" | "defaultMinutes" | "defaultSeconds" | "timeFormatter" | "timeParser" | "timeCreator" | "unselectableTimes" | "resetOnMeridianChange" | "separatorClass">>>;
        default: any;
    };
    /** Min date to select */
    minDatetime: {
        type: DateConstructor;
        default: any;
    };
    /** Max date to select */
    maxDatetime: {
        type: DateConstructor;
        default: any;
    };
    /**
     * Size of the input control
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    }; /** Makes input full width when inside a grouped or addon field */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Makes the input rounded */
    rounded: {
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
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Display datetimepicker inline */
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Open dropdown on focus */
    openOnFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Date format locale */
    locale: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Custom function to format a date into a string */
    datetimeFormatter: {
        type: PropType<(date: Date) => string>;
        default: (date: Date | Date[], defaultFunction: (date: Date | Date[]) => string) => string;
    };
    /** Custom function to parse a string into a date */
    datetimeParser: {
        type: PropType<(date: string) => Date>;
        default: (date: string, defaultFunction: (date: string) => Date) => Date;
    };
    /** Date creator function, default is `new Date()` */
    datetimeCreator: {
        type: PropType<(date: Date) => Date>;
        default: (date: Date) => Date;
    };
    /** Dropdown position */
    position: {
        type: StringConstructor;
        default: any;
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
    /** Class of the Datepicker wrapper */
    datepickerWrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Timepicker wrapper */
    timepickerWrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
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
    active: PropType<boolean>;
    modelValue: PropType<Date>;
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Define props for the underlying datepicker component */
    datepicker: {
        type: PropType<NonNullable<Partial<{
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
            events: import("../datepicker/types").DatepickerEvent[];
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
            readonly rootClass?: ComponentClass;
            readonly mobileClass?: ComponentClass;
            readonly validationMessage?: string;
            readonly position?: string;
            readonly placeholder?: string;
            readonly icon?: string;
            readonly iconRight?: string;
            readonly sizeClass?: ComponentClass;
            readonly active?: boolean;
            readonly boxClass?: ComponentClass;
            readonly dayNames?: string[];
            readonly monthNames?: string[];
            readonly focusedDate?: Date;
            readonly events?: import("../datepicker/types").DatepickerEvent[];
            readonly minDate?: Date;
            readonly maxDate?: Date;
            readonly unselectableDaysOfWeek?: number[];
            readonly headerClass?: ComponentClass;
            readonly headerButtonsClass?: ComponentClass;
            readonly headerButtonsSizeClass?: ComponentClass;
            readonly prevButtonClass?: ComponentClass;
            readonly nextButtonClass?: ComponentClass;
            readonly listsClass?: ComponentClass;
            readonly footerClass?: ComponentClass;
            readonly tableClass?: ComponentClass;
            readonly tableHeadClass?: ComponentClass;
            readonly tableHeadCellClass?: ComponentClass;
            readonly tableBodyClass?: ComponentClass;
            readonly tableRowClass?: ComponentClass;
            readonly tableCellClass?: ComponentClass;
            readonly tableCellInvisibleClass?: ComponentClass;
            readonly tableCellSelectedClass?: ComponentClass;
            readonly tableCellFirstSelectedClass?: ComponentClass;
            readonly tableCellWithinSelectedClass?: ComponentClass;
            readonly tableCellLastSelectedClass?: ComponentClass;
            readonly tableCellFirstHoveredClass?: ComponentClass;
            readonly tableCellWithinHoveredClass?: ComponentClass;
            readonly tableCellLastHoveredClass?: ComponentClass;
            readonly tableCellTodayClass?: ComponentClass;
            readonly tableCellSelectableClass?: ComponentClass;
            readonly tableCellUnselectableClass?: ComponentClass;
            readonly tableCellNearbyClass?: ComponentClass;
            readonly tableCellEventsClass?: ComponentClass;
            readonly tableEventsClass?: ComponentClass;
            readonly tableEventClass?: ComponentClass;
            readonly tableEventVariantClass?: ComponentClass;
            readonly tableEventIndicatorsClass?: ComponentClass;
            readonly monthClass?: ComponentClass;
            readonly monthBodyClass?: ComponentClass;
            readonly monthTableClass?: ComponentClass;
            readonly monthCellClass?: ComponentClass;
            readonly monthCellSelectedClass?: ComponentClass;
            readonly monthCellFirstSelectedClass?: ComponentClass;
            readonly monthCellWithinSelectedClass?: ComponentClass;
            readonly monthCellLastSelectedClass?: ComponentClass;
            readonly monthCellWithinHoveredRangeClass?: ComponentClass;
            readonly monthCellFirstHoveredClass?: ComponentClass;
            readonly monthCellWithinHoveredClass?: ComponentClass;
            readonly monthCellLastHoveredClass?: ComponentClass;
            readonly monthCellTodayClass?: ComponentClass;
            readonly monthCellSelectableClass?: ComponentClass;
            readonly monthCellUnselectableClass?: ComponentClass;
            readonly monthCellEventsClass?: ComponentClass;
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
                type: PropType<import("../datepicker/types").DatepickerEvent[]>;
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
                type: PropType<ComponentClass>;
                default: any;
            };
            sizeClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            boxClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            headerClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            headerButtonsClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            headerButtonsSizeClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            prevButtonClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            nextButtonClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            listsClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            footerClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableHeadClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableHeadCellClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableBodyClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableRowClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellInvisibleClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellFirstSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellWithinSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellLastSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellFirstHoveredClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellWithinHoveredClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellLastHoveredClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellTodayClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellSelectableClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellUnselectableClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellNearbyClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableCellEventsClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableEventsClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableEventClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableEventVariantClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            tableEventIndicatorsClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthBodyClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthTableClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellFirstSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellWithinSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellLastSelectedClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellWithinHoveredRangeClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellFirstHoveredClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellWithinHoveredClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellLastHoveredClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellTodayClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellSelectableClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellUnselectableClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            monthCellEventsClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            mobileClass: {
                type: PropType<ComponentClass>;
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
                    iconRightClass: import('../../types').ClassDefinition; /** Open dropdown on focus */
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
        default: any;
    };
    /** Define props for the underlying timepicker component */
    timepicker: {
        type: PropType<NonNullable<Partial<{
            size: string;
            override: boolean;
            iconPack: string;
            useHtml5Validation: boolean;
            modelValue: Date;
            mobileBreakpoint: string;
            rootClass: ComponentClass;
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
            active: boolean;
            inline: boolean;
            trapFocus: boolean;
            selectClasses: Record<string, any>;
            dropdownClasses: Record<string, any>;
            boxClass: ComponentClass;
            readonly: boolean;
            closeOnClick: boolean;
            locale: string;
            mobileNative: boolean;
            footerClass: ComponentClass;
            minTime: Date;
            maxTime: Date;
            hourFormat: string;
            incrementHours: number;
            incrementMinutes: number;
            incrementSeconds: number;
            enableSeconds: boolean;
            defaultMinutes: number;
            defaultSeconds: number;
            timeFormatter: (date: Date) => string;
            timeParser: (date: string) => Date;
            timeCreator: () => Date;
            unselectableTimes: Date[] | ((date: Date) => boolean);
            resetOnMeridianChange: boolean;
            separatorClass: ComponentClass;
        }> & Omit<{
            readonly size: string;
            readonly useHtml5Validation: boolean;
            readonly mobileBreakpoint: string;
            readonly expanded: boolean;
            readonly rounded: boolean;
            readonly disabled: boolean;
            readonly openOnFocus: boolean;
            readonly mobileModal: boolean;
            readonly iconRightClickable: boolean;
            readonly teleport: string | boolean | Record<string, any>;
            readonly inputClasses: Record<string, any>;
            readonly active: boolean;
            readonly inline: boolean;
            readonly trapFocus: boolean;
            readonly selectClasses: Record<string, any>;
            readonly dropdownClasses: Record<string, any>;
            readonly readonly: boolean;
            readonly closeOnClick: boolean;
            readonly locale: string;
            readonly mobileNative: boolean;
            readonly incrementHours: number;
            readonly incrementMinutes: number;
            readonly incrementSeconds: number;
            readonly enableSeconds: boolean;
            readonly timeFormatter: (date: Date) => string;
            readonly timeParser: (date: string) => Date;
            readonly timeCreator: () => Date;
            readonly unselectableTimes: Date[] | ((date: Date) => boolean);
            readonly resetOnMeridianChange: boolean;
            readonly override?: boolean;
            readonly iconPack?: string;
            readonly modelValue?: Date;
            readonly rootClass?: ComponentClass;
            readonly validationMessage?: string;
            readonly position?: string;
            readonly placeholder?: string;
            readonly icon?: string;
            readonly iconRight?: string;
            readonly sizeClass?: ComponentClass;
            readonly boxClass?: ComponentClass;
            readonly footerClass?: ComponentClass;
            readonly minTime?: Date;
            readonly maxTime?: Date;
            readonly hourFormat?: string;
            readonly defaultMinutes?: number;
            readonly defaultSeconds?: number;
            readonly separatorClass?: ComponentClass;
            onBlur?: (event: Event) => any;
            onFocus?: (event: Event) => any;
            onInvalid?: (event: Event) => any;
            "onUpdate:modelValue"?: (value: Date) => any;
            "onIcon-click"?: (event: Event) => any;
            "onIcon-right-click"?: (event: Event) => any;
            "onUpdate:active"?: (value: boolean) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            override: {
                type: BooleanConstructor;
                default: any;
            };
            modelValue: {
                type: PropType<Date>;
                default: any;
            };
            active: {
                type: BooleanConstructor;
                default: boolean;
            };
            minTime: {
                type: PropType<Date>;
                default: any;
            };
            maxTime: {
                type: PropType<Date>;
                default: any;
            };
            inline: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: {
                type: StringConstructor;
                default: any;
            };
            expanded: {
                type: BooleanConstructor;
                default: boolean;
            };
            rounded: {
                type: BooleanConstructor;
                default: boolean;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: StringConstructor;
                default: () => unknown;
            };
            hourFormat: {
                type: StringConstructor;
                default: any;
            };
            incrementHours: {
                type: NumberConstructor;
                default: number;
            };
            incrementMinutes: {
                type: NumberConstructor;
                default: number;
            };
            incrementSeconds: {
                type: NumberConstructor;
                default: number;
            };
            openOnFocus: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            closeOnClick: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            enableSeconds: {
                type: BooleanConstructor;
                default: boolean;
            };
            defaultMinutes: {
                type: NumberConstructor;
                default: any;
            };
            defaultSeconds: {
                type: NumberConstructor;
                default: any;
            };
            locale: {
                type: StringConstructor;
                default: () => unknown;
            };
            timeFormatter: {
                type: PropType<(date: Date) => string>;
                default: (date: Date | Date[], defaultFunction: (date: Date | Date[]) => string) => string;
            };
            timeParser: {
                type: PropType<(date: string) => Date>;
                default: (date: string, defaultFunction: (date: string) => Date) => Date;
            };
            timeCreator: {
                type: PropType<() => Date>;
                default: () => Date;
            };
            unselectableTimes: {
                type: PropType<Date[] | ((date: Date) => boolean)>;
                default: () => any[];
            };
            resetOnMeridianChange: {
                type: BooleanConstructor;
                default: boolean;
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
            rootClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            sizeClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            boxClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            separatorClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            footerClass: {
                type: PropType<ComponentClass>;
                default: any;
            };
            inputClasses: {
                type: ObjectConstructor;
                default: () => {};
            };
            dropdownClasses: {
                type: ObjectConstructor;
                default: () => {};
            };
            selectClasses: {
                type: ObjectConstructor;
                default: () => {};
            };
        }>> & {
            onBlur?: (event: Event) => any;
            onFocus?: (event: Event) => any;
            onInvalid?: (event: Event) => any;
            "onUpdate:modelValue"?: (value: Date) => any;
            "onIcon-click"?: (event: Event) => any;
            "onIcon-right-click"?: (event: Event) => any;
            "onUpdate:active"?: (value: boolean) => any;
        }, "size" | "override" | "iconPack" | "useHtml5Validation" | "modelValue" | "mobileBreakpoint" | "rootClass" | "validationMessage" | "position" | "placeholder" | "expanded" | "rounded" | "disabled" | "openOnFocus" | "mobileModal" | "icon" | "iconRight" | "iconRightClickable" | "teleport" | "inputClasses" | "sizeClass" | "active" | "inline" | "trapFocus" | "selectClasses" | "dropdownClasses" | "boxClass" | "readonly" | "closeOnClick" | "locale" | "mobileNative" | "footerClass" | "minTime" | "maxTime" | "hourFormat" | "incrementHours" | "incrementMinutes" | "incrementSeconds" | "enableSeconds" | "defaultMinutes" | "defaultSeconds" | "timeFormatter" | "timeParser" | "timeCreator" | "unselectableTimes" | "resetOnMeridianChange" | "separatorClass">>>;
        default: any;
    };
    /** Min date to select */
    minDatetime: {
        type: DateConstructor;
        default: any;
    };
    /** Max date to select */
    maxDatetime: {
        type: DateConstructor;
        default: any;
    };
    /**
     * Size of the input control
     * @values small, medium, large
     */
    size: {
        type: StringConstructor;
        default: () => unknown;
    }; /** Makes input full width when inside a grouped or addon field */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Makes the input rounded */
    rounded: {
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
    /** Same as native disabled */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Display datetimepicker inline */
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Open dropdown on focus */
    openOnFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Date format locale */
    locale: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Custom function to format a date into a string */
    datetimeFormatter: {
        type: PropType<(date: Date) => string>;
        default: (date: Date | Date[], defaultFunction: (date: Date | Date[]) => string) => string;
    };
    /** Custom function to parse a string into a date */
    datetimeParser: {
        type: PropType<(date: string) => Date>;
        default: (date: string, defaultFunction: (date: string) => Date) => Date;
    };
    /** Date creator function, default is `new Date()` */
    datetimeCreator: {
        type: PropType<(date: Date) => Date>;
        default: (date: Date) => Date;
    };
    /** Dropdown position */
    position: {
        type: StringConstructor;
        default: any;
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
    /** Class of the Datepicker wrapper */
    datepickerWrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Timepicker wrapper */
    timepickerWrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
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
    validationMessage: string;
    position: string;
    placeholder: string;
    expanded: boolean;
    rounded: boolean;
    disabled: boolean;
    openOnFocus: boolean;
    icon: string;
    iconRight: string;
    iconRightClickable: boolean;
    teleport: string | boolean | Record<string, any>;
    inline: boolean;
    readonly: boolean;
    locale: string;
    mobileNative: boolean;
    datepicker: any;
    timepicker: any;
    minDatetime: Date;
    maxDatetime: Date;
    datetimeFormatter: (date: Date) => string;
    datetimeParser: (date: string) => Date;
    datetimeCreator: (date: Date) => Date;
    datepickerWrapperClass: ComponentClass;
    timepickerWrapperClass: ComponentClass;
}, {}>, {
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
