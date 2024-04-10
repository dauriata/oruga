import { type PropType } from "vue";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Define the column label */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** Define an object property key if data is an object */
    field: {
        type: StringConstructor;
        default: any;
    };
    /** Define a column sub heading  */
    subheading: {
        type: StringConstructor;
        default: any;
    };
    /** Add addtional meta information for the column for custom purpose*/
    meta: {
        type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
        default: any;
    };
    /** Column fixed width */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Define column value as number */
    numeric: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Position of the column content
     * @values left, centered, right
     */
    position: {
        type: StringConstructor;
        default: any;
        validator: (value: string) => boolean;
    };
    /** Enable an additional searchbar below the column header */
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable column sortability */
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Define whether the column is visible or not */
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Define a custom sort function */
    customSort: {
        type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
        default: any;
    };
    /** Define a custom funtion for the filter search */
    customSearch: {
        type: PropType<(row: unknown, filter: string) => boolean>;
        default: any;
    };
    /** Whether the column is sticky or not */
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Make header selectable */
    headerSelectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Adds native attributes to th
     * @deprecated will be moved to table component in v0.9
     */
    thAttrs: {
        type: PropType<(column: any) => object>;
        default: () => {};
    };
    /**
     * Adds native attributes to td
     * @deprecated will be moved to table component in v0.9
     */
    tdAttrs: {
        type: PropType<(row: unknown, column: any) => object>;
        default: () => {};
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Define the column label */
    label: {
        type: StringConstructor;
        default: any;
    };
    /** Define an object property key if data is an object */
    field: {
        type: StringConstructor;
        default: any;
    };
    /** Define a column sub heading  */
    subheading: {
        type: StringConstructor;
        default: any;
    };
    /** Add addtional meta information for the column for custom purpose*/
    meta: {
        type: (ObjectConstructor | ArrayConstructor | BooleanConstructor | StringConstructor | FunctionConstructor | NumberConstructor)[];
        default: any;
    };
    /** Column fixed width */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    /** Define column value as number */
    numeric: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Position of the column content
     * @values left, centered, right
     */
    position: {
        type: StringConstructor;
        default: any;
        validator: (value: string) => boolean;
    };
    /** Enable an additional searchbar below the column header */
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Enable column sortability */
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Define whether the column is visible or not */
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Define a custom sort function */
    customSort: {
        type: PropType<(a: unknown, b: unknown, isAsc: boolean) => number>;
        default: any;
    };
    /** Define a custom funtion for the filter search */
    customSearch: {
        type: PropType<(row: unknown, filter: string) => boolean>;
        default: any;
    };
    /** Whether the column is sticky or not */
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Make header selectable */
    headerSelectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Adds native attributes to th
     * @deprecated will be moved to table component in v0.9
     */
    thAttrs: {
        type: PropType<(column: any) => object>;
        default: () => {};
    };
    /**
     * Adds native attributes to td
     * @deprecated will be moved to table component in v0.9
     */
    tdAttrs: {
        type: PropType<(row: unknown, column: any) => object>;
        default: () => {};
    };
}>>, {
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
}, {}>, {
    default?(_: {
        row: any;
        column: any;
        index: any;
        colindex: any;
        toggleDetails: any;
    }): any;
    header?(_: {
        column: any;
        index: any;
    }): any;
    subheading?(_: {
        column: any;
        index: any;
    }): any;
    searchable?(_: {
        column: any;
        index: any;
        filters: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
