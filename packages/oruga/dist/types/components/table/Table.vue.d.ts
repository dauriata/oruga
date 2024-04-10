import { type PropType } from "vue";
import type { ComponentClass } from '../../types';
/**
 * Header checkbox click listener.
 * Add or remove all rows in current page.
 */
declare function checkAll(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Table data */
    data: {
        type: PropType<unknown[]>;
        default: () => any[];
    };
    /** Table columns */
    columns: {
        type: PropType<NonNullable<Partial<{
            label: string;
            meta: string | number | boolean | Function | Record<string, any> | unknown[];
            field: string;
            position: string;
            sticky: boolean;
            width: string | number;
            numeric: boolean;
            visible: boolean;
            subheading: string;
            searchable: boolean;
            sortable: boolean;
            customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
            customSearch: (row: unknown, filter: string) => boolean;
            headerSelectable: boolean;
            thAttrs: (column: any) => object;
            tdAttrs: (row: unknown, column: any) => object;
        }> & Omit<{
            readonly sticky: boolean;
            readonly numeric: boolean;
            readonly visible: boolean;
            readonly searchable: boolean;
            readonly sortable: boolean;
            readonly headerSelectable: boolean;
            readonly thAttrs: (column: any) => object;
            readonly tdAttrs: (row: unknown, column: any) => object;
            readonly label?: string;
            readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
            readonly field?: string;
            readonly position?: string;
            readonly width?: string | number;
            readonly subheading?: string;
            readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
            readonly customSearch?: (row: unknown, filter: string) => boolean;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            label: {
                type: StringConstructor;
                default: any;
            };
            field: {
                type: StringConstructor;
                default: any;
            };
            subheading: {
                type: StringConstructor;
                default: any;
            };
            meta: {
                type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
                default: any;
            };
            width: {
                type: (StringConstructor | NumberConstructor)[];
                default: any;
            }; /** Class of the root element */
            numeric: {
                type: BooleanConstructor;
                default: boolean;
            };
            position: {
                type: StringConstructor;
                default: any;
                validator: (value: string) => boolean;
            };
            searchable: {
                type: BooleanConstructor;
                default: boolean;
            };
            /** Class of the Table footer */
            sortable: {
                type: BooleanConstructor;
                default: boolean;
            };
            visible: {
                type: BooleanConstructor;
                default: boolean;
            };
            customSort: {
                type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
                default: any;
            };
            customSearch: {
                type: PropType<(row: unknown, filter: string) => boolean>;
                default: any;
            };
            sticky: {
                type: BooleanConstructor;
                default: boolean; /** Class of the Table when rows are striped */
            };
            headerSelectable: {
                type: BooleanConstructor;
                default: boolean;
            };
            thAttrs: {
                type: PropType<(column: any) => object>;
                default: () => {};
            };
            tdAttrs: {
                type: PropType<(row: unknown, column: any) => object>;
                default: () => {};
            };
        }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>[]>;
        default: () => any[];
    };
    /** Border to all cells */
    bordered: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Whether table is striped */
    striped: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Makes the cells narrower */
    narrowed: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Rows are highlighted when hovering */
    hoverable: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Enable loading state */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Allow row details  */
    detailed: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Rows can be checked (multiple) */
    checkable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show check/uncheck all checkbox in table header when checkable */
    headerCheckable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Position of the checkbox when checkable
     * @values left, right
     */
    checkboxPosition: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /**
     * Color of the checkbox when checkable
     * @values primary, info, success, warning, danger, and any other custom color
     */
    checkboxVariant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Set which row is selected, use v-model:selected to make it two-way binding */
    selected: {
        type: ObjectConstructor;
        default: any;
    };
    /** Custom method to verify if a row is selectable, works when is selected. */
    isRowSelectable: {
        type: FunctionConstructor;
        default: () => boolean;
    };
    /** Table can be focused and user can navigate with keyboard arrows (require selected) and rows are highlighted when hovering */
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Custom method to verify if row is checked, works when is checkable. Useful for backend pagination */
    customIsChecked: {
        type: PropType<(row: unknown, data: unknown[]) => boolean>;
        default: any;
    };
    /** Custom method to verify if a row is checkable, works when is checkable */
    isRowCheckable: {
        type: PropType<(row: unknown) => boolean>;
        default: (row: unknown) => true;
    };
    /** Set which rows are checked, use v-model:checkedRows to make it two-way binding */
    checkedRows: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /** Rows appears as cards on mobile (collapse rows) */
    mobileCards: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Sets the default sort column and order — e.g. ['first_name', 'desc'] */
    defaultSort: {
        type: PropType<string | string[]>;
        default: () => unknown;
    };
    /**
     * Sets the default sort column direction on the first click
     * @values asc, desc
     */
    defaultSortDirection: {
        type: StringConstructor;
        default: () => string;
    };
    /** Sets the header sorting icon */
    sortIcon: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Sets the size of the sorting icon
     * @values small, medium, large
     */
    sortIconSize: {
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
    /** Columns won't be sorted with Javascript, use with sort event to sort in your backend */
    backendSorting: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Columns won't be filtered with Javascript, use with searchable prop to the columns to filter in your backend */
    backendFiltering: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Add a class to row based on the return */
    rowClass: {
        type: PropType<(row: unknown, index: number) => string>;
        default: (row: unknown, index: number) => "";
    };
    /** Allow pre-defined opened details. Ideal to open details via vue-router. (A unique key is required; check detail-key prop) */
    openedDetailed: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /** Controls the visibility of the trigger that toggles the detailed rows. */
    hasDetailedVisible: {
        type: PropType<(row: unknown) => boolean>;
        default: (row: unknown) => true;
    };
    /** Use a unique key of your data Object when use detailed or opened detailed. (id recommended) */
    detailKey: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Allow chevron icon and column to be visible */
    showDetailIcon: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Icon name of detail action */
    detailIcon: {
        type: StringConstructor;
        default: () => string;
    };
    /** Custom style on details */
    customDetailRow: {
        type: BooleanConstructor;
        default: boolean;
    };
    detailTransition: {
        type: StringConstructor;
        default: () => string;
    };
    /** Text when nothing is selected */
    mobileSortPlaceholder: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Use a unique key of your data Object for each row. Useful if your data prop has dynamic indices. (id recommended) */
    customRowKey: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Allows rows to be draggable */
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Allows columns to be draggable */
    draggableColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Add a horizontal scrollbar when table is too wide */
    scrollable: {
        type: BooleanConstructor;
        default: any;
    };
    /** Show a sticky table header */
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Table fixed height */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Add a native event to filter */
    filtersEvent: {
        type: StringConstructor;
        default: string;
    };
    /** Filtering debounce time (in milliseconds) */
    debounceSearch: {
        type: NumberConstructor;
        default: any;
    };
    /** Show header */
    showHeader: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Make the checkbox column sticky when checkable */
    stickyCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Adds pagination to the table */
    paginated: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Rows won't be paginated with Javascript, use with page-change event to paginate in your backend */
    backendPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Total number of table data if backend-pagination is enabled */
    total: {
        type: NumberConstructor;
        default: number;
    };
    /** Current page of table data (if paginated), use v-model:currentPage to make it two-way binding */
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    /** How many rows per page (if paginated) */
    perPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    /**
     * Pagination position (if paginated)
     * @values bottom, top, both
     */
    paginationPosition: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Rounded pagination if paginated */
    paginationRounded: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Size of pagination if paginated */
    paginationSize: {
        type: StringConstructor;
        default: () => string;
    };
    /** Enable simple style pagination if paginated */
    paginationSimple: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Pagination buttons order if paginated
     * @values centered, right, left
     */
    paginationOrder: {
        type: StringConstructor;
        default: () => unknown;
        validator: (value: string) => boolean;
    };
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility label for the pagination next page button. */
    ariaNextLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility label for the pagination previous page button. */
    ariaPreviousLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility label for the pagination page button. */
    ariaPageLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility label for the pagination current page button. */
    ariaCurrentLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table */
    tableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table wrapper */
    wrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table footer */
    footerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table when it is empty */
    emptyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table row detail */
    detailedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table when is bordered */
    borderedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table when rows are striped */
    stripedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table when rows are narrowed */
    narrowedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table when is hoverable */
    hoverableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table wrapper when header is sticky */
    stickyHeaderClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table wrapper when its content is scrollable */
    scrollableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table row when selected */
    trSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table row when checkable and checked */
    trCheckedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element */
    thClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element when component is positioned */
    thPositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element when component is sticky" */
    thStickyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element when is checkable */
    thCheckboxClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element currently sorted */
    thCurrentSortClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sortable Table `th` element */
    thSortableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element that is unsortable */
    thUnselectableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table sort icon in the header */
    thSortIconClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element of the detail column of triggers */
    thDetailedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` subheading element */
    thSubheadingClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `td` element */
    tdClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `td` element when component is positioned */
    tdPositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `td` element when component is sticky */
    tdStickyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `td` element when is checkable */
    tdCheckboxClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `td` element that contains the chevron to trigger details */
    tdDetailedChevronClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sortable form wrapper on mobile */
    mobileSortClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table pagination wrapper */
    paginationWrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table component when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:currentPage": (value: number) => void;
    "page-change": (page: number) => void;
    "update:selected": (value: unknown) => void;
    select: (newrow: unknown, oldrow: unknown) => void;
    check: (value: unknown[], row?: unknown) => void;
    "check-all": (value: unknown[]) => void;
    "update:checkedRows": (value: unknown[]) => void;
    sort: (column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, direction: "desc" | "asc", event: Event) => void;
    "filters-change": (value: Record<string, string>) => void;
    "filters-event": (filtersEvent: string, filters: Record<string, string>, event: Event) => void;
    "update:openedDetailed": (value: unknown[]) => void;
    "details-open": (row: unknown) => void;
    "details-close": (row: unknown) => void;
    click: (row: unknown, index: number, event: Event) => void;
    dblclick: (row: unknown, index: number, event: Event) => void;
    contextmenu: (row: unknown, index: number, event: Event) => void;
    mouseenter: (row: unknown, index: number, event: Event) => void;
    mouseleave: (row: unknown, index: number, event: Event) => void;
    "cell-click": (row: unknown, column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, index: number, colindex: number, event: Event) => void;
    dragstart: (row: unknown, index: number, event: DragEvent) => void;
    dragend: (row: unknown, index: number, event: DragEvent) => void;
    drop: (row: unknown, index: number, event: DragEvent) => void;
    dragleave: (row: unknown, index: number, event: DragEvent) => void;
    dragover: (row: unknown, index: number, event: DragEvent) => void;
    columndragstart: (column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, index: number, event: DragEvent) => void;
    columndragend: (column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, index: number, event: DragEvent) => void;
    columndrop: (column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, index: number, event: DragEvent) => void;
    columndragleave: (column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, index: number, event: DragEvent) => void;
    columndragover: (column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, index: number, event: DragEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Override existing theme classes completely */
    override: {
        type: BooleanConstructor;
        default: any;
    };
    /** Table data */
    data: {
        type: PropType<unknown[]>;
        default: () => any[];
    };
    /** Table columns */
    columns: {
        type: PropType<NonNullable<Partial<{
            label: string;
            meta: string | number | boolean | Function | Record<string, any> | unknown[];
            field: string;
            position: string;
            sticky: boolean;
            width: string | number;
            numeric: boolean;
            visible: boolean;
            subheading: string;
            searchable: boolean;
            sortable: boolean;
            customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
            customSearch: (row: unknown, filter: string) => boolean;
            headerSelectable: boolean;
            thAttrs: (column: any) => object;
            tdAttrs: (row: unknown, column: any) => object;
        }> & Omit<{
            readonly sticky: boolean;
            readonly numeric: boolean;
            readonly visible: boolean;
            readonly searchable: boolean;
            readonly sortable: boolean;
            readonly headerSelectable: boolean;
            readonly thAttrs: (column: any) => object;
            readonly tdAttrs: (row: unknown, column: any) => object;
            readonly label?: string;
            readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
            readonly field?: string;
            readonly position?: string;
            readonly width?: string | number;
            readonly subheading?: string;
            readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
            readonly customSearch?: (row: unknown, filter: string) => boolean;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            label: {
                type: StringConstructor;
                default: any;
            };
            field: {
                type: StringConstructor;
                default: any;
            };
            subheading: {
                type: StringConstructor;
                default: any;
            };
            meta: {
                type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
                default: any;
            };
            width: {
                type: (StringConstructor | NumberConstructor)[];
                default: any;
            }; /** Class of the root element */
            numeric: {
                type: BooleanConstructor;
                default: boolean;
            };
            position: {
                type: StringConstructor;
                default: any;
                validator: (value: string) => boolean;
            };
            searchable: {
                type: BooleanConstructor;
                default: boolean;
            };
            /** Class of the Table footer */
            sortable: {
                type: BooleanConstructor;
                default: boolean;
            };
            visible: {
                type: BooleanConstructor;
                default: boolean;
            };
            customSort: {
                type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
                default: any;
            };
            customSearch: {
                type: PropType<(row: unknown, filter: string) => boolean>;
                default: any;
            };
            sticky: {
                type: BooleanConstructor;
                default: boolean; /** Class of the Table when rows are striped */
            };
            headerSelectable: {
                type: BooleanConstructor;
                default: boolean;
            };
            thAttrs: {
                type: PropType<(column: any) => object>;
                default: () => {};
            };
            tdAttrs: {
                type: PropType<(row: unknown, column: any) => object>;
                default: () => {};
            };
        }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>[]>;
        default: () => any[];
    };
    /** Border to all cells */
    bordered: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Whether table is striped */
    striped: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Makes the cells narrower */
    narrowed: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Rows are highlighted when hovering */
    hoverable: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Enable loading state */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Allow row details  */
    detailed: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Rows can be checked (multiple) */
    checkable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Show check/uncheck all checkbox in table header when checkable */
    headerCheckable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Position of the checkbox when checkable
     * @values left, right
     */
    checkboxPosition: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /**
     * Color of the checkbox when checkable
     * @values primary, info, success, warning, danger, and any other custom color
     */
    checkboxVariant: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Set which row is selected, use v-model:selected to make it two-way binding */
    selected: {
        type: ObjectConstructor;
        default: any;
    };
    /** Custom method to verify if a row is selectable, works when is selected. */
    isRowSelectable: {
        type: FunctionConstructor;
        default: () => boolean;
    };
    /** Table can be focused and user can navigate with keyboard arrows (require selected) and rows are highlighted when hovering */
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Custom method to verify if row is checked, works when is checkable. Useful for backend pagination */
    customIsChecked: {
        type: PropType<(row: unknown, data: unknown[]) => boolean>;
        default: any;
    };
    /** Custom method to verify if a row is checkable, works when is checkable */
    isRowCheckable: {
        type: PropType<(row: unknown) => boolean>;
        default: (row: unknown) => true;
    };
    /** Set which rows are checked, use v-model:checkedRows to make it two-way binding */
    checkedRows: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /** Rows appears as cards on mobile (collapse rows) */
    mobileCards: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Sets the default sort column and order — e.g. ['first_name', 'desc'] */
    defaultSort: {
        type: PropType<string | string[]>;
        default: () => unknown;
    };
    /**
     * Sets the default sort column direction on the first click
     * @values asc, desc
     */
    defaultSortDirection: {
        type: StringConstructor;
        default: () => string;
    };
    /** Sets the header sorting icon */
    sortIcon: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * Sets the size of the sorting icon
     * @values small, medium, large
     */
    sortIconSize: {
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
    /** Columns won't be sorted with Javascript, use with sort event to sort in your backend */
    backendSorting: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Columns won't be filtered with Javascript, use with searchable prop to the columns to filter in your backend */
    backendFiltering: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Add a class to row based on the return */
    rowClass: {
        type: PropType<(row: unknown, index: number) => string>;
        default: (row: unknown, index: number) => "";
    };
    /** Allow pre-defined opened details. Ideal to open details via vue-router. (A unique key is required; check detail-key prop) */
    openedDetailed: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /** Controls the visibility of the trigger that toggles the detailed rows. */
    hasDetailedVisible: {
        type: PropType<(row: unknown) => boolean>;
        default: (row: unknown) => true;
    };
    /** Use a unique key of your data Object when use detailed or opened detailed. (id recommended) */
    detailKey: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Allow chevron icon and column to be visible */
    showDetailIcon: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Icon name of detail action */
    detailIcon: {
        type: StringConstructor;
        default: () => string;
    };
    /** Custom style on details */
    customDetailRow: {
        type: BooleanConstructor;
        default: boolean;
    };
    detailTransition: {
        type: StringConstructor;
        default: () => string;
    };
    /** Text when nothing is selected */
    mobileSortPlaceholder: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Use a unique key of your data Object for each row. Useful if your data prop has dynamic indices. (id recommended) */
    customRowKey: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Allows rows to be draggable */
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Allows columns to be draggable */
    draggableColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Add a horizontal scrollbar when table is too wide */
    scrollable: {
        type: BooleanConstructor;
        default: any;
    };
    /** Show a sticky table header */
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Table fixed height */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Add a native event to filter */
    filtersEvent: {
        type: StringConstructor;
        default: string;
    };
    /** Filtering debounce time (in milliseconds) */
    debounceSearch: {
        type: NumberConstructor;
        default: any;
    };
    /** Show header */
    showHeader: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Make the checkbox column sticky when checkable */
    stickyCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Adds pagination to the table */
    paginated: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Rows won't be paginated with Javascript, use with page-change event to paginate in your backend */
    backendPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Total number of table data if backend-pagination is enabled */
    total: {
        type: NumberConstructor;
        default: number;
    };
    /** Current page of table data (if paginated), use v-model:currentPage to make it two-way binding */
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    /** How many rows per page (if paginated) */
    perPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    /**
     * Pagination position (if paginated)
     * @values bottom, top, both
     */
    paginationPosition: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Rounded pagination if paginated */
    paginationRounded: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** Size of pagination if paginated */
    paginationSize: {
        type: StringConstructor;
        default: () => string;
    };
    /** Enable simple style pagination if paginated */
    paginationSimple: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /**
     * Pagination buttons order if paginated
     * @values centered, right, left
     */
    paginationOrder: {
        type: StringConstructor;
        default: () => unknown;
        validator: (value: string) => boolean;
    };
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility label for the pagination next page button. */
    ariaNextLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility label for the pagination previous page button. */
    ariaPreviousLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility label for the pagination page button. */
    ariaPageLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Accessibility label for the pagination current page button. */
    ariaCurrentLabel: {
        type: StringConstructor;
        default: () => unknown;
    };
    /** Class of the root element */
    rootClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table */
    tableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table wrapper */
    wrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table footer */
    footerClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table when it is empty */
    emptyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table row detail */
    detailedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table when is bordered */
    borderedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table when rows are striped */
    stripedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table when rows are narrowed */
    narrowedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table when is hoverable */
    hoverableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table wrapper when header is sticky */
    stickyHeaderClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table wrapper when its content is scrollable */
    scrollableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table row when selected */
    trSelectedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table row when checkable and checked */
    trCheckedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element */
    thClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element when component is positioned */
    thPositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element when component is sticky" */
    thStickyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element when is checkable */
    thCheckboxClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element currently sorted */
    thCurrentSortClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sortable Table `th` element */
    thSortableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element that is unsortable */
    thUnselectableClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table sort icon in the header */
    thSortIconClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` element of the detail column of triggers */
    thDetailedClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `th` subheading element */
    thSubheadingClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `td` element */
    tdClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `td` element when component is positioned */
    tdPositionClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `td` element when component is sticky */
    tdStickyClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `td` element when is checkable */
    tdCheckboxClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table `td` element that contains the chevron to trigger details */
    tdDetailedChevronClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the sortable form wrapper on mobile */
    mobileSortClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table pagination wrapper */
    paginationWrapperClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
    /** Class of the Table component when on mobile */
    mobileClass: {
        type: PropType<ComponentClass>;
        default: any;
    };
}>> & {
    onSelect?: (newrow: unknown, oldrow: unknown) => any;
    onClick?: (row: unknown, index: number, event: Event) => any;
    onContextmenu?: (row: unknown, index: number, event: Event) => any;
    onDblclick?: (row: unknown, index: number, event: Event) => any;
    onDragend?: (row: unknown, index: number, event: DragEvent) => any;
    onDragleave?: (row: unknown, index: number, event: DragEvent) => any;
    onDragover?: (row: unknown, index: number, event: DragEvent) => any;
    onDragstart?: (row: unknown, index: number, event: DragEvent) => any;
    onDrop?: (row: unknown, index: number, event: DragEvent) => any;
    onMouseenter?: (row: unknown, index: number, event: Event) => any;
    onMouseleave?: (row: unknown, index: number, event: Event) => any;
    onSort?: (column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, direction: "desc" | "asc", event: Event) => any;
    onCheck?: (value: unknown[], row?: unknown) => any;
    "onUpdate:currentPage"?: (value: number) => any;
    "onPage-change"?: (page: number) => any;
    "onUpdate:selected"?: (value: unknown) => any;
    "onCheck-all"?: (value: unknown[]) => any;
    "onUpdate:checkedRows"?: (value: unknown[]) => any;
    "onFilters-change"?: (value: Record<string, string>) => any;
    "onFilters-event"?: (filtersEvent: string, filters: Record<string, string>, event: Event) => any;
    "onUpdate:openedDetailed"?: (value: unknown[]) => any;
    "onDetails-open"?: (row: unknown) => any;
    "onDetails-close"?: (row: unknown) => any;
    "onCell-click"?: (row: unknown, column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, index: number, colindex: number, event: Event) => any;
    onColumndragstart?: (column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, index: number, event: DragEvent) => any;
    onColumndragend?: (column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, index: number, event: DragEvent) => any;
    onColumndrop?: (column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, index: number, event: DragEvent) => any;
    onColumndragleave?: (column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, index: number, event: DragEvent) => any;
    onColumndragover?: (column: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>, index: number, event: DragEvent) => any;
}, {
    data: unknown[];
    override: boolean;
    iconPack: string;
    mobileBreakpoint: string;
    rootClass: ComponentClass;
    mobileClass: ComponentClass;
    scrollable: boolean;
    hoverableClass: ComponentClass;
    loading: boolean;
    wrapperClass: ComponentClass;
    draggable: boolean;
    ariaNextLabel: string;
    ariaPreviousLabel: string;
    footerClass: ComponentClass;
    tableClass: ComponentClass;
    total: number;
    perPage: string | number;
    ariaPageLabel: string;
    ariaCurrentLabel: string;
    height: string | number;
    columns: NonNullable<Partial<{
        label: string;
        meta: string | number | boolean | Function | Record<string, any> | unknown[];
        field: string;
        position: string;
        sticky: boolean;
        width: string | number;
        numeric: boolean;
        visible: boolean;
        subheading: string;
        searchable: boolean;
        sortable: boolean;
        customSort: (a: unknown, b: unknown, isAsc: boolean) => number;
        customSearch: (row: unknown, filter: string) => boolean;
        headerSelectable: boolean;
        thAttrs: (column: any) => object;
        tdAttrs: (row: unknown, column: any) => object;
    }> & Omit<{
        readonly sticky: boolean;
        readonly numeric: boolean;
        readonly visible: boolean;
        readonly searchable: boolean;
        readonly sortable: boolean;
        readonly headerSelectable: boolean;
        readonly thAttrs: (column: any) => object;
        readonly tdAttrs: (row: unknown, column: any) => object;
        readonly label?: string;
        readonly meta?: string | number | boolean | Function | Record<string, any> | unknown[];
        readonly field?: string;
        readonly position?: string;
        readonly width?: string | number;
        readonly subheading?: string;
        readonly customSort?: (a: unknown, b: unknown, isAsc: boolean) => number;
        readonly customSearch?: (row: unknown, filter: string) => boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            default: any;
        };
        field: {
            type: StringConstructor;
            default: any;
        };
        subheading: {
            type: StringConstructor;
            default: any;
        };
        meta: {
            type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
            default: any;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        }; /** Class of the root element */
        numeric: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: StringConstructor;
            default: any;
            validator: (value: string) => boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** Class of the Table footer */
        sortable: {
            type: BooleanConstructor;
            default: boolean;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        customSort: {
            type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
            default: any;
        };
        customSearch: {
            type: PropType<(row: unknown, filter: string) => boolean>;
            default: any;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean; /** Class of the Table when rows are striped */
        };
        headerSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        thAttrs: {
            type: PropType<(column: any) => object>;
            default: () => {};
        };
        tdAttrs: {
            type: PropType<(row: unknown, column: any) => object>;
            default: () => {};
        };
    }>>, "label" | "meta" | "field" | "position" | "sticky" | "width" | "numeric" | "visible" | "subheading" | "searchable" | "sortable" | "customSort" | "customSearch" | "headerSelectable" | "thAttrs" | "tdAttrs">>[];
    sortIcon: string;
    sortIconSize: string;
    selected: Record<string, any>;
    paginated: boolean;
    currentPage: number;
    bordered: boolean;
    striped: boolean;
    narrowed: boolean;
    hoverable: boolean;
    detailed: boolean;
    checkable: boolean;
    headerCheckable: boolean;
    checkboxPosition: string;
    checkboxVariant: string;
    isRowSelectable: Function;
    focusable: boolean;
    customIsChecked: (row: unknown, data: unknown[]) => boolean;
    isRowCheckable: (row: unknown) => boolean;
    checkedRows: unknown[];
    mobileCards: boolean;
    defaultSort: string | string[];
    defaultSortDirection: string;
    backendSorting: boolean;
    backendFiltering: boolean;
    rowClass: (row: unknown, index: number) => string;
    openedDetailed: unknown[];
    hasDetailedVisible: (row: unknown) => boolean;
    detailKey: string;
    showDetailIcon: boolean;
    detailIcon: string;
    customDetailRow: boolean;
    detailTransition: string;
    mobileSortPlaceholder: string;
    customRowKey: string;
    draggableColumn: boolean;
    stickyHeader: boolean;
    filtersEvent: string;
    debounceSearch: number;
    showHeader: boolean;
    stickyCheckbox: boolean;
    backendPagination: boolean;
    paginationPosition: string;
    paginationRounded: boolean;
    paginationSize: string;
    paginationSimple: boolean;
    paginationOrder: string;
    emptyClass: ComponentClass;
    detailedClass: ComponentClass;
    borderedClass: ComponentClass;
    stripedClass: ComponentClass;
    narrowedClass: ComponentClass;
    stickyHeaderClass: ComponentClass;
    scrollableClass: ComponentClass;
    trSelectedClass: ComponentClass;
    trCheckedClass: ComponentClass;
    thClass: ComponentClass;
    thPositionClass: ComponentClass;
    thStickyClass: ComponentClass;
    thCheckboxClass: ComponentClass;
    thCurrentSortClass: ComponentClass;
    thSortableClass: ComponentClass;
    thUnselectableClass: ComponentClass;
    thSortIconClass: ComponentClass;
    thDetailedClass: ComponentClass;
    thSubheadingClass: ComponentClass;
    tdClass: ComponentClass;
    tdPositionClass: ComponentClass;
    tdStickyClass: ComponentClass;
    tdCheckboxClass: ComponentClass;
    tdDetailedChevronClass: ComponentClass;
    mobileSortClass: ComponentClass;
    paginationWrapperClass: ComponentClass;
}, {}>, {
    default?(_: {}): any;
    pagination?(_: {
        current: number;
        perPage: string | number;
        total: number;
        change: (page: any) => any;
    }): any;
    "top-left"?(_: {}): any;
    caption?(_: {}): any;
    preheader?(_: {}): any;
    "check-all"?(_: {
        isAllChecked: boolean;
        isAllUncheckable: boolean;
        checkAll: typeof checkAll;
    }): any;
    detail?(_: {
        row: unknown;
        index: number;
    }): any;
    empty?(_: {}): any;
    footer?(_: {
        columnCount: number;
        rowCount: number;
    }): any;
    loading?(_: {
        loading: boolean;
    }): any;
    "bottom-left"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
