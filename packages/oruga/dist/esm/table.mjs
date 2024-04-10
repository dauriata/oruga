/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, ref, computed, watch, openBlock, createElementBlock, normalizeClass, createVNode, withCtx, withDirectives, toDisplayString, vShow, createCommentVNode, Fragment, renderList, getCurrentInstance, toRaw, unref, createTextVNode, createElementVNode, renderSlot, createBlock, mergeProps, toValue, useSlots, onMounted, nextTick, isRef, normalizeStyle, withKeys, withModifiers, toHandlerKey, Transition } from "vue";
import { _ as _sfc_main$9 } from "./Checkbox.vue_vue_type_script_setup_true_lang-BinxQJLz.mjs";
import { _ as _sfc_main$7 } from "./Icon.vue_vue_type_script_setup_true_lang-BfJM6xYp.mjs";
import { _ as _sfc_main$a } from "./Input.vue_vue_type_script_setup_true_lang-Cne1qVCn.mjs";
import { _ as _sfc_main$b } from "./Loading.vue_vue_type_script_setup_true_lang-tMXeR7UA.mjs";
import { O as OSlotComponent } from "./SlotComponent-CZTZMuvj.mjs";
import { _ as _sfc_main$6 } from "./Button.vue_vue_type_script_setup_true_lang-D7iwVqb3.mjs";
import { _ as _sfc_main$5 } from "./Select.vue_vue_type_script_setup_true_lang-sENSiXta.mjs";
import { _ as _sfc_main$4 } from "./Field.vue_vue_type_script_setup_true_lang-Zwwy0kfN.mjs";
import { getValueByPath, toCssDimension, uuid, escapeRegExpChars, removeDiacriticsFromString, indexOf } from "./helpers.mjs";
import { a as useProviderChild, u as useProviderParent } from "./useParentProvider-C8ssHz7C.mjs";
import { _ as _sfc_main$8 } from "./Pagination.vue_vue_type_script_setup_true_lang-BT7MLogp.mjs";
import { a as usePropBinding } from "./usePropValue-DLZTRe_e.mjs";
import { g as getOption, b as registerComponent } from "./config-zKhnAIV0.mjs";
import { d as defineClasses, g as getActiveClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useMatchMedia } from "./useMatchMedia-G3BPCbzR.mjs";
import { u as useDebounce } from "./useDebounce-DlhXWMqv.mjs";
const _hoisted_1$2 = ["value"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OTableMobileSort",
    configField: "table"
  },
  __name: "TableMobileSort",
  props: {
    currentSortColumn: {
      type: Object,
      default: void 0
    },
    columns: {
      type: Array,
      default: void 0
    },
    placeholder: { type: String, default: void 0 },
    iconPack: { type: String, default: void 0 },
    sortIcon: { type: String, default: "arrow-up" },
    sortIconSize: { type: String, default: "small" },
    isAsc: { type: Boolean, default: false },
    mobileSortClasses: { type: Array, required: true }
  },
  emits: ["sort"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const mobileSort = ref(
      getValueByPath(props.currentSortColumn, "identifier")
    );
    const showPlaceholder = computed(
      () => !props.columns || !props.columns.some(
        (column) => getValueByPath(column, "identifier") === mobileSort.value
      )
    );
    const sortableColumns = computed(
      () => props.columns ? props.columns.filter((c) => c.sortable) : []
    );
    const isCurrentSort = computed(
      () => getValueByPath(props.currentSortColumn, "identifier") === mobileSort.value
    );
    watch(mobileSort, (value) => {
      if (props.currentSortColumn.identifier === value)
        return;
      sort();
    });
    watch(
      () => props.currentSortColumn,
      (column) => {
        mobileSort.value = getValueByPath(column, "identifier");
      }
    );
    function sort(event) {
      const column = sortableColumns.value.filter(
        (c) => getValueByPath(c, "identifier") === mobileSort.value
      )[0];
      emits("sort", column, event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(__props.mobileSortClasses)
      }, [
        createVNode(_sfc_main$4, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$5, {
              modelValue: mobileSort.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => mobileSort.value = $event),
              expanded: ""
            }, {
              default: withCtx(() => [
                __props.placeholder ? withDirectives((openBlock(), createElementBlock("option", {
                  key: 0,
                  value: {},
                  selected: "",
                  disabled: "",
                  hidden: ""
                }, toDisplayString(__props.placeholder), 513)), [
                  [vShow, showPlaceholder.value]
                ]) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(sortableColumns.value, (column, index2) => {
                  return openBlock(), createElementBlock("option", {
                    key: index2,
                    value: column.identifier
                  }, toDisplayString(column.label), 9, _hoisted_1$2);
                }), 128))
              ]),
              _: 1
            }, 8, ["modelValue"]),
            createVNode(_sfc_main$6, {
              onClick: _cache[1] || (_cache[1] = ($event) => sort($event))
            }, {
              default: withCtx(() => [
                withDirectives(createVNode(_sfc_main$7, {
                  icon: __props.sortIcon,
                  pack: __props.iconPack,
                  size: __props.sortIconSize,
                  both: "",
                  rotation: !__props.isAsc ? 180 : 0
                }, null, 8, ["icon", "pack", "size", "rotation"]), [
                  [vShow, isCurrentSort.value]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const _hoisted_1$1 = ["data-id"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OTableColumn",
    configField: "table"
  },
  __name: "TableColumn",
  props: {
    /** Define the column label */
    label: { type: String, default: void 0 },
    /** Define an object property key if data is an object */
    field: { type: String, default: void 0 },
    /** Define a column sub heading  */
    subheading: { type: String, default: void 0 },
    /** Add addtional meta information for the column for custom purpose*/
    meta: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: void 0
    },
    /** Column fixed width */
    width: { type: [Number, String], default: void 0 },
    /** Define column value as number */
    numeric: { type: Boolean, default: false },
    /**
     * Position of the column content
     * @values left, centered, right
     */
    position: {
      type: String,
      default: void 0,
      validator: (value) => ["left", "centered", "right"].indexOf(value) > -1
    },
    /** Enable an additional searchbar below the column header */
    searchable: { type: Boolean, default: false },
    /** Enable column sortability */
    sortable: { type: Boolean, default: false },
    /** Define whether the column is visible or not */
    visible: { type: Boolean, default: true },
    /** Define a custom sort function */
    customSort: {
      type: Function,
      default: void 0
    },
    /** Define a custom funtion for the filter search */
    customSearch: {
      type: Function,
      default: void 0
    },
    /** Whether the column is sticky or not */
    sticky: { type: Boolean, default: false },
    /** Make header selectable */
    headerSelectable: { type: Boolean, default: false },
    /**
     * Adds native attributes to th
     * @deprecated will be moved to table component in v0.9
     */
    thAttrs: {
      type: Function,
      default: () => ({})
    },
    /**
     * Adds native attributes to td
     * @deprecated will be moved to table component in v0.9
     */
    tdAttrs: {
      type: Function,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const style = computed(() => ({
      width: toCssDimension(props.width)
    }));
    const isHeaderUnselectable = computed(
      () => !props.headerSelectable && props.sortable
    );
    const vm = getCurrentInstance();
    const providedData = computed(() => ({
      ...toRaw(props),
      // TODO: remove toRaw when tdAttrs/thAttrs are moved to table component
      label: props.label,
      field: props.field,
      subheading: props.subheading,
      meta: props.meta,
      width: props.width,
      numeric: props.numeric,
      position: props.position,
      searchable: props.searchable,
      sortable: props.sortable,
      visible: props.visible,
      customSort: props.customSort,
      customSearch: props.customSearch,
      sticky: props.sticky,
      headerSelectable: props.headerSelectable,
      $el: vm.proxy,
      $slots: vm.slots,
      style: style.value,
      isHeaderUnselectable: isHeaderUnselectable.value
    }));
    const { item } = useProviderChild({ data: providedData });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        "data-id": unref(item).identifier,
        "data-oruga": "table-column"
      }, [
        createTextVNode(toDisplayString(__props.label) + " ", 1),
        createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OTablePagination",
    configField: "table"
  },
  __name: "TablePagination",
  props: {
    current: { type: Number, default: void 0 },
    paginated: { type: Boolean, default: false },
    rootClass: {
      type: [String, Array, Object],
      default: void 0
    }
  },
  emits: ["update:current", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const currentPage = usePropBinding("current", props, emits);
    function pageChanged(page) {
      const newPage = page > 0 ? page : 1;
      currentPage.value = newPage;
      emits("change", newPage);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(__props.rootClass)
      }, [
        createElementVNode("div", null, [
          renderSlot(_ctx.$slots, "default")
        ]),
        createElementVNode("div", null, [
          __props.paginated ? (openBlock(), createBlock(_sfc_main$8, mergeProps({ key: 0 }, _ctx.$attrs, {
            current: unref(currentPage),
            onChange: pageChanged
          }), null, 16, ["current"])) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const _hoisted_1 = ["tabindex"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = ["draggable", "onClick", "onDragstart", "onDragend", "onDrop", "onDragover", "onDragleave"];
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { key: 1 };
const _hoisted_8 = { key: 2 };
const _hoisted_9 = { key: 1 };
const _hoisted_10 = { key: 1 };
const _hoisted_11 = { key: 2 };
const _hoisted_12 = ["draggable", "onClick", "onDblclick", "onMouseenter", "onMouseleave", "onContextmenu", "onDragstart", "onDragend", "onDrop", "onDragover", "onDragleave"];
const _hoisted_13 = ["colspan"];
const _hoisted_14 = { key: 0 };
const _hoisted_15 = ["colspan"];
const _hoisted_16 = { key: 2 };
const _hoisted_17 = ["colspan"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OTable",
    configField: "table",
    inheritAttrs: false
  },
  __name: "Table",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Table data */
    data: { type: Array, default: () => [] },
    /** Table columns */
    columns: { type: Array, default: () => [] },
    /** Border to all cells */
    bordered: {
      type: Boolean,
      default: () => getOption("table.bordered", false)
    },
    /** Whether table is striped */
    striped: {
      type: Boolean,
      default: () => getOption("table.striped", false)
    },
    /** Makes the cells narrower */
    narrowed: {
      type: Boolean,
      default: () => getOption("table.narrowed", false)
    },
    /** Rows are highlighted when hovering */
    hoverable: {
      type: Boolean,
      default: () => getOption("table.hoverable", false)
    },
    /** Enable loading state */
    loading: { type: Boolean, default: false },
    /** Allow row details  */
    detailed: { type: Boolean, default: false },
    /** Rows can be checked (multiple) */
    checkable: { type: Boolean, default: false },
    /** Show check/uncheck all checkbox in table header when checkable */
    headerCheckable: { type: Boolean, default: true },
    /**
     * Position of the checkbox when checkable
     * @values left, right
     */
    checkboxPosition: {
      type: String,
      default: () => getOption("table.checkboxPosition", "left"),
      validator: (value) => ["left", "right"].indexOf(value) >= 0
    },
    /**
     * Color of the checkbox when checkable
     * @values primary, info, success, warning, danger, and any other custom color
     */
    checkboxVariant: {
      type: String,
      default: () => getOption("table.checkboxVariant")
    },
    /** Set which row is selected, use v-model:selected to make it two-way binding */
    selected: { type: Object, default: void 0 },
    /** Custom method to verify if a row is selectable, works when is selected. */
    isRowSelectable: { type: Function, default: () => true },
    /** Table can be focused and user can navigate with keyboard arrows (require selected) and rows are highlighted when hovering */
    focusable: { type: Boolean, default: false },
    /** Custom method to verify if row is checked, works when is checkable. Useful for backend pagination */
    customIsChecked: {
      type: Function,
      default: void 0
    },
    /** Custom method to verify if a row is checkable, works when is checkable */
    isRowCheckable: {
      type: Function,
      default: (row) => (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getOption("table.isRowCheckable", (row2) => true)(row)
      )
    },
    /** Set which rows are checked, use v-model:checkedRows to make it two-way binding */
    checkedRows: { type: Array, default: () => [] },
    /** Rows appears as cards on mobile (collapse rows) */
    mobileCards: {
      type: Boolean,
      default: () => getOption("table.mobileCards", true)
    },
    /** Sets the default sort column and order — e.g. ['first_name', 'desc'] */
    defaultSort: {
      type: [String, Array],
      default: () => getOption("table.defaultSort")
    },
    /**
     * Sets the default sort column direction on the first click
     * @values asc, desc
     */
    defaultSortDirection: {
      type: String,
      default: () => getOption("table.defaultSortDirection", "asc")
    },
    /** Sets the header sorting icon */
    sortIcon: {
      type: String,
      default: () => getOption("table.sortIcon", "arrow-up")
    },
    /**
     * Sets the size of the sorting icon
     * @values small, medium, large
     */
    sortIconSize: {
      type: String,
      default: () => getOption("table.sortIconSize", "small")
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => getOption("table.iconPack")
    },
    /** Columns won't be sorted with Javascript, use with sort event to sort in your backend */
    backendSorting: {
      type: Boolean,
      default: () => getOption("table.backendSorting", false)
    },
    /** Columns won't be filtered with Javascript, use with searchable prop to the columns to filter in your backend */
    backendFiltering: {
      type: Boolean,
      default: () => getOption("table.backendFiltering", false)
    },
    /** Add a class to row based on the return */
    rowClass: {
      type: Function,
      default: (row, index2) => (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getOption("table.rowClass", (row2, index22) => "")(row, index2)
      )
    },
    /** Allow pre-defined opened details. Ideal to open details via vue-router. (A unique key is required; check detail-key prop) */
    openedDetailed: { type: Array, default: () => [] },
    /** Controls the visibility of the trigger that toggles the detailed rows. */
    hasDetailedVisible: {
      type: Function,
      default: (row) => (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getOption("table.hasDetailedVisible", (row2) => true)(row)
      )
    },
    /** Use a unique key of your data Object when use detailed or opened detailed. (id recommended) */
    detailKey: {
      type: String,
      default: () => getOption("table.detailKey")
    },
    /** Allow chevron icon and column to be visible */
    showDetailIcon: {
      type: Boolean,
      default: () => getOption("table.showDetailIcon", true)
    },
    /** Icon name of detail action */
    detailIcon: {
      type: String,
      default: () => getOption("table.detailIcon", "chevron-right")
    },
    /** Custom style on details */
    customDetailRow: { type: Boolean, default: false },
    /* Transition name to use when toggling row details. */
    detailTransition: {
      type: String,
      default: () => getOption("table.detailTransition", "slide")
    },
    /** Text when nothing is selected */
    mobileSortPlaceholder: {
      type: String,
      default: () => getOption("table.mobileSortPlaceholder")
    },
    /** Use a unique key of your data Object for each row. Useful if your data prop has dynamic indices. (id recommended) */
    customRowKey: {
      type: String,
      default: () => getOption("table.customRowKey")
    },
    /** Allows rows to be draggable */
    draggable: { type: Boolean, default: false },
    /** Allows columns to be draggable */
    draggableColumn: { type: Boolean, default: false },
    /** Add a horizontal scrollbar when table is too wide */
    scrollable: { type: Boolean, default: void 0 },
    /** Show a sticky table header */
    stickyHeader: { type: Boolean, default: false },
    /** Table fixed height */
    height: { type: [Number, String], default: void 0 },
    /** Add a native event to filter */
    filtersEvent: { type: String, default: "" },
    /** Filtering debounce time (in milliseconds) */
    debounceSearch: { type: Number, default: void 0 },
    /** Show header */
    showHeader: {
      type: Boolean,
      default: () => getOption("table.showHeader", true)
    },
    /** Make the checkbox column sticky when checkable */
    stickyCheckbox: { type: Boolean, default: false },
    /** Adds pagination to the table */
    paginated: {
      type: Boolean,
      default: () => getOption("table.paginated", false)
    },
    /** Rows won't be paginated with Javascript, use with page-change event to paginate in your backend */
    backendPagination: { type: Boolean, default: false },
    /** Total number of table data if backend-pagination is enabled */
    total: { type: Number, default: 0 },
    /** Current page of table data (if paginated), use v-model:currentPage to make it two-way binding */
    currentPage: { type: Number, default: 1 },
    /** How many rows per page (if paginated) */
    perPage: {
      type: [Number, String],
      default: () => getOption("table.perPage", 20)
    },
    /**
     * Pagination position (if paginated)
     * @values bottom, top, both
     */
    paginationPosition: {
      type: String,
      default: () => getOption("table.paginationPosition", "bottom"),
      validator: (value) => ["bottom", "top", "both"].indexOf(value) >= 0
    },
    /** Rounded pagination if paginated */
    paginationRounded: {
      type: Boolean,
      default: () => getOption("table.paginationRounded", false)
    },
    /** Size of pagination if paginated */
    paginationSize: {
      type: String,
      default: () => getOption("table.paginationSize", "small")
    },
    /** Enable simple style pagination if paginated */
    paginationSimple: {
      type: Boolean,
      default: () => getOption("table.paginationSimple", false)
    },
    /**
     * Pagination buttons order if paginated
     * @values centered, right, left
     */
    paginationOrder: {
      type: String,
      default: () => getOption("table.paginationOrder"),
      validator: (value) => ["centered", "right", "left"].indexOf(value) >= 0
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => getOption("table.mobileBreakpoint")
    },
    /** Accessibility label for the pagination next page button. */
    ariaNextLabel: {
      type: String,
      default: () => getOption("table.ariaNextLabel")
    },
    /** Accessibility label for the pagination previous page button. */
    ariaPreviousLabel: {
      type: String,
      default: () => getOption("table.ariaPreviousLabel")
    },
    /** Accessibility label for the pagination page button. */
    ariaPageLabel: {
      type: String,
      default: () => getOption("table.ariaPageLabel")
    },
    /** Accessibility label for the pagination current page button. */
    ariaCurrentLabel: {
      type: String,
      default: () => getOption("table.ariaCurrentLabel")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table */
    tableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table wrapper */
    wrapperClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table footer */
    footerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table when it is empty */
    emptyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table row detail */
    detailedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table when is bordered */
    borderedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table when rows are striped */
    stripedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table when rows are narrowed */
    narrowedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table when is hoverable */
    hoverableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table wrapper when header is sticky */
    stickyHeaderClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table wrapper when its content is scrollable */
    scrollableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table row when selected */
    trSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table row when checkable and checked */
    trCheckedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element */
    thClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element when component is positioned */
    thPositionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element when component is sticky" */
    thStickyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element when is checkable */
    thCheckboxClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element currently sorted */
    thCurrentSortClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sortable Table `th` element */
    thSortableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element that is unsortable */
    thUnselectableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table sort icon in the header */
    thSortIconClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element of the detail column of triggers */
    thDetailedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` subheading element */
    thSubheadingClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `td` element */
    tdClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `td` element when component is positioned */
    tdPositionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `td` element when component is sticky */
    tdStickyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `td` element when is checkable */
    tdCheckboxClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `td` element that contains the chevron to trigger details */
    tdDetailedChevronClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sortable form wrapper on mobile */
    mobileSortClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table pagination wrapper */
    paginationWrapperClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table component when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:currentPage", "page-change", "update:selected", "select", "check", "check-all", "update:checkedRows", "sort", "filters-change", "filters-event", "update:openedDetailed", "details-open", "details-close", "click", "dblclick", "contextmenu", "mouseenter", "mouseleave", "cell-click", "dragstart", "dragend", "drop", "dragleave", "dragover", "columndragstart", "columndragend", "columndrop", "columndragleave", "columndragover"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { isMobile } = useMatchMedia(props.mobileBreakpoint);
    const isMobileActive = computed(() => props.mobileCards && isMobile.value);
    const rootRef = ref();
    const slotRef = ref();
    const provider = useProviderParent(slotRef);
    const tableColumns = computed(
      () => provider.sortedItems.value.map((column) => ({
        index: column.index,
        identifier: column.identifier,
        ...toValue(column.data),
        thAttrsData: {},
        tdAttrsData: []
      }))
    );
    const tableData = computed(() => {
      var _a;
      if (!((_a = props.data) == null ? void 0 : _a.length))
        return [...props.data];
      return props.data.map(
        (row) => !props.customRowKey && typeof row === "object" ? Object.assign({ __rowKey: uuid() }, row) : row
      );
    });
    const tableRows = ref(tableData.value);
    const dataTotal = ref(
      props.backendPagination ? props.total : tableData.value.length
    );
    const tableCurrentPage = usePropBinding("currentPage", props, emits, {
      passive: true
    });
    watch(
      () => tableData.value,
      (value) => {
        if (!props.backendFiltering)
          tableRows.value = value.filter((row) => isRowFiltered(row));
        else
          tableRows.value = [...value];
        if (!props.backendSorting)
          sort(currentSortColumn.value, true);
        if (!props.backendPagination)
          dataTotal.value = tableRows.value.length;
      },
      { deep: true }
    );
    watch(
      () => props.total,
      (newTotal) => {
        if (!props.backendPagination)
          return;
        dataTotal.value = newTotal;
      }
    );
    const tableWrapperStyle = computed(() => ({
      height: toCssDimension(props.height)
    }));
    const visibleRows = computed(() => {
      if (!props.paginated)
        return tableRows.value;
      const currentPage = tableCurrentPage.value;
      const perPage = Number(props.perPage);
      if (tableRows.value.length <= perPage) {
        return tableRows.value;
      } else {
        const start = (currentPage - 1) * perPage;
        const end = start + perPage;
        return tableRows.value.slice(start, end);
      }
    });
    const visibleColumns = computed(() => {
      if (!tableColumns.value)
        return [];
      return tableColumns.value.filter(
        (column) => column.visible || column.visible === void 0
      );
    });
    watch([visibleRows, visibleColumns], () => {
      if (visibleColumns.value.length && visibleRows.value.length) {
        for (let i = 0; i < visibleColumns.value.length; i++) {
          const col = visibleColumns.value[i];
          col.thAttrsData = typeof col.thAttrs === "function" ? col.thAttrs(col) : {};
          col.tdAttrsData = visibleRows.value.map(
            (data) => typeof col.tdAttrs === "function" ? col.tdAttrs(data, col) : {}
          );
        }
      }
    });
    const columnCount = computed(() => {
      let count = visibleColumns.value.length;
      count += props.checkable ? 1 : 0;
      count += props.detailed && props.showDetailIcon ? 1 : 0;
      return count;
    });
    const hasSearchablenewColumns = computed(
      () => tableColumns.value.some((column) => column.searchable)
    );
    const isScrollable = computed(() => {
      if (props.scrollable)
        return true;
      if (!tableColumns.value)
        return false;
      return tableColumns.value.some((column) => column.sticky);
    });
    const slots = useSlots();
    const hasCustomSubheadings = computed(() => {
      if (slots.subheading)
        return true;
      return tableColumns.value.some((column) => !!column.subheading);
    });
    function hasCustomFooterSlot() {
      if (slots.footer) {
        const footer = slots.footer();
        if (footer.length > 1)
          return true;
        const tag = footer[0]["tag"];
        if (tag !== "th" && tag !== "td")
          return false;
      }
      return true;
    }
    function onArrowPressed(pos, event) {
      if (!visibleRows.value.length)
        return;
      let index2 = visibleRows.value.indexOf(props.selected) + pos;
      index2 = index2 < 0 ? 0 : index2 > visibleRows.value.length - 1 ? visibleRows.value.length - 1 : index2;
      const row = visibleRows.value[index2];
      if (!props.isRowSelectable(row)) {
        let newIndex = null;
        if (pos > 0) {
          for (let i = index2; i < visibleRows.value.length && newIndex === null; i++) {
            if (props.isRowSelectable(visibleRows.value[i]))
              newIndex = i;
          }
        } else {
          for (let i = index2; i >= 0 && newIndex === null; i--) {
            if (props.isRowSelectable(visibleRows.value[i]))
              newIndex = i;
          }
        }
        if (newIndex >= 0) {
          selectRow(visibleRows.value[newIndex], index2, event);
        }
      } else {
        selectRow(row, index2, event);
      }
    }
    function selectRow(row, index2, event) {
      emits("click", row, index2, event);
      if (props.selected === row)
        return;
      if (!props.isRowSelectable(row))
        return;
      emits("select", row, props.selected);
      emits("update:selected", row);
    }
    function isRowSelected(row, selectedRow) {
      return selectedRow ? getRowKey(row) === getRowKey(selectedRow) : false;
    }
    function getRowKey(row) {
      if (props.customRowKey)
        return row[props.customRowKey];
      if (typeof row === "object")
        return row["__rowKey"];
      return row;
    }
    const filters = ref({});
    watch(
      filters.value,
      (value) => {
        if (props.debounceSearch)
          useDebounce(() => handleFiltersChange(value), props.debounceSearch);
        else
          handleFiltersChange(value);
      },
      { deep: true }
    );
    function onFiltersEvent(event) {
      emits("filters-event", props.filtersEvent, filters.value, event);
    }
    function handleFiltersChange(value) {
      if (props.backendFiltering) {
        emits("filters-change", value);
      } else {
        tableRows.value = props.data.filter((row) => isRowFiltered(row));
        if (!props.backendPagination) {
          dataTotal.value = tableRows.value.length;
        }
        if (!props.backendSorting) {
          if (Object.keys(currentSortColumn.value).length > 0) {
            doSortSingleColumn(currentSortColumn.value);
          }
        }
      }
    }
    function isRowFiltered(row) {
      for (const key in filters.value) {
        if (!filters.value[key])
          continue;
        const input = filters.value[key];
        const column = tableColumns.value.filter((c) => c.field === key)[0];
        if (typeof (column == null ? void 0 : column.customSearch) === "function") {
          if (!column.customSearch(row, input))
            return false;
        } else {
          const value = getValueByPath(row, key);
          if (value == null)
            return false;
          if (Number.isInteger(value)) {
            if (value !== Number(input))
              return false;
          } else {
            const re = new RegExp(escapeRegExpChars(input), "i");
            if (Array.isArray(value)) {
              const valid = value.some(
                (val) => re.test(removeDiacriticsFromString(val)) || re.test(val)
              );
              if (!valid)
                return false;
            } else {
              if (!re.test(removeDiacriticsFromString(value)) && !re.test(value)) {
                return false;
              }
            }
          }
        }
      }
      return true;
    }
    const currentSortColumn = ref();
    const isAsc = ref(true);
    onMounted(() => nextTick(() => checkSort()));
    const hasSortablenewColumns = computed(
      () => tableColumns.value.some((column) => column.sortable)
    );
    function isColumnSorted(column) {
      var _a;
      return ((_a = currentSortColumn.value) == null ? void 0 : _a.identifier) === column.identifier;
    }
    function checkSort() {
      if (tableColumns.value.length && !currentSortColumn.value) {
        initSort();
      } else if (tableColumns.value.length) {
        if (currentSortColumn.value && Object.keys(currentSortColumn.value).length > 0) {
          for (let i = 0; i < tableColumns.value.length; i++) {
            if (currentSortColumn.value.field === tableColumns.value[i].field) {
              currentSortColumn.value = tableColumns.value[i];
              break;
            }
          }
        }
      }
    }
    function initSort() {
      if (!props.defaultSort)
        return;
      let sortField = "";
      let sortDirection = props.defaultSortDirection;
      if (Array.isArray(props.defaultSort)) {
        sortField = props.defaultSort[0];
        if (props.defaultSort[1]) {
          sortDirection = props.defaultSort[1];
        }
      } else {
        sortField = props.defaultSort;
      }
      const sortColumn = tableColumns.value.filter(
        (column) => column.field === sortField
      )[0];
      if (sortColumn) {
        isAsc.value = sortDirection.toLowerCase() !== "desc";
        sort(sortColumn, true);
      }
    }
    function sort(column, updateDirection = false, event) {
      if (!column || !column.sortable)
        return;
      if (!updateDirection)
        isAsc.value = isColumnSorted(column) ? !isAsc.value : props.defaultSortDirection.toLowerCase() !== "desc";
      if (currentSortColumn.value)
        emits("sort", column, isAsc.value ? "asc" : "desc", event);
      if (!props.backendSorting)
        doSortSingleColumn(column);
      currentSortColumn.value = column;
    }
    function doSortSingleColumn(column) {
      tableRows.value = sortBy(
        tableRows.value,
        column.field,
        column.customSort,
        isAsc.value
      );
    }
    function sortBy(array, key, fn, isAsc2) {
      let sorted = [];
      if (fn && typeof fn === "function") {
        sorted = [...array].sort((a, b) => fn(a, b, isAsc2));
      } else {
        sorted = [...array].sort((a, b) => {
          let newA = getValueByPath(a, key);
          let newB = getValueByPath(b, key);
          if (typeof newA === "boolean" && typeof newB === "boolean") {
            return isAsc2 ? newA > newB ? 1 : -1 : newA > newB ? -1 : 1;
          }
          if (!newA && newA !== 0)
            return 1;
          if (!newB && newB !== 0)
            return -1;
          if (newA === newB)
            return 0;
          newA = typeof newA === "string" ? newA.toUpperCase() : newA;
          newB = typeof newB === "string" ? newB.toUpperCase() : newB;
          return isAsc2 ? newA > newB ? 1 : -1 : newA > newB ? -1 : 1;
        });
      }
      return sorted;
    }
    const newCheckedRows = ref([...props.checkedRows]);
    const lastCheckedRowIndex = ref(null);
    watch(
      () => props.checkedRows,
      (rows) => {
        newCheckedRows.value = [...rows];
      },
      { deep: true }
    );
    const isAllChecked = computed(() => {
      const validVisibleData = visibleRows.value.filter(
        (row) => props.isRowCheckable(row)
      );
      if (validVisibleData.length === 0)
        return false;
      const isAllChecked2 = validVisibleData.some(
        (currentVisibleRow) => indexOf(
          newCheckedRows.value,
          currentVisibleRow,
          props.customIsChecked
        ) < 0
      );
      return !isAllChecked2;
    });
    const isAllUncheckable = computed(() => {
      const validVisibleData = visibleRows.value.filter(
        (row) => props.isRowCheckable(row)
      );
      return validVisibleData.length === 0;
    });
    function isRowChecked(row) {
      return indexOf(newCheckedRows.value, row, props.customIsChecked) >= 0;
    }
    function removeCheckedRow(row) {
      const index2 = indexOf(newCheckedRows.value, row, props.customIsChecked);
      if (index2 >= 0)
        newCheckedRows.value.splice(index2, 1);
    }
    function checkAll() {
      const allChecked = isAllChecked.value;
      visibleRows.value.forEach((currentRow) => {
        if (props.isRowCheckable(currentRow))
          removeCheckedRow(currentRow);
        if (!allChecked) {
          if (props.isRowCheckable(currentRow))
            newCheckedRows.value.push(currentRow);
        }
      });
      emits("check", newCheckedRows.value);
      emits("check-all", newCheckedRows.value);
      emits("update:checkedRows", newCheckedRows.value);
    }
    function checkRow(row, index2) {
      if (!props.isRowCheckable(row))
        return;
      lastCheckedRowIndex.value;
      lastCheckedRowIndex.value = index2;
      if (!isRowChecked(row))
        newCheckedRows.value.push(row);
      else
        removeCheckedRow(row);
      emits("check", newCheckedRows.value, row);
      emits("update:checkedRows", newCheckedRows.value);
    }
    const visibleDetailRows = ref(props.openedDetailed);
    const showDetailRowIcon = computed(
      () => props.detailed && props.showDetailIcon
    );
    watch(
      () => props.openedDetailed,
      (expandedRows) => {
        visibleDetailRows.value = expandedRows;
      }
    );
    function toggleDetails(row) {
      const found = isVisibleDetailRow(row);
      if (found) {
        closeDetailRow(row);
        emits("details-close", row);
      } else {
        openDetailRow(row);
        emits("details-open", row);
      }
      emits("update:openedDetailed", visibleDetailRows.value);
    }
    function openDetailRow(row) {
      const index2 = handleDetailKey(row);
      visibleDetailRows.value.push(index2);
    }
    function closeDetailRow(row) {
      const index2 = handleDetailKey(row);
      const i = visibleDetailRows.value.indexOf(index2);
      if (i >= 0)
        visibleDetailRows.value.splice(i, 1);
    }
    function isVisibleDetailRow(row) {
      const index2 = handleDetailKey(row);
      return visibleDetailRows.value.indexOf(index2) >= 0;
    }
    function isActiveDetailRow(row) {
      return props.detailed && !props.customDetailRow && isVisibleDetailRow(row);
    }
    function isActiveCustomDetailRow(row) {
      return props.detailed && props.customDetailRow && isVisibleDetailRow(row);
    }
    function handleDetailKey(row) {
      const key = props.detailKey;
      return !(key == null ? void 0 : key.length) || !row ? row : row[key];
    }
    const isDraggingRow = ref(false);
    const isDraggingColumn = ref(false);
    const canDragRow = computed(() => props.draggable && !isDraggingColumn.value);
    const canDragColumn = computed(
      () => props.draggableColumn && !isDraggingRow.value
    );
    function handleDragStart(row, index2, event) {
      if (!props.draggable)
        return;
      emits("dragstart", row, index2, event);
    }
    function handleDragEnd(row, index2, event) {
      if (!props.draggable)
        return;
      emits("dragend", row, index2, event);
    }
    function handleDrop(row, index2, event) {
      if (!props.draggable)
        return;
      emits("drop", row, index2, event);
    }
    function handleDragOver(row, index2, event) {
      if (!props.draggable)
        return;
      emits("dragover", row, index2, event);
    }
    function handleDragLeave(row, index2, event) {
      if (!props.draggable)
        return;
      emits("dragleave", row, index2, event);
    }
    function handleColumnDragStart(column, index2, event) {
      if (!canDragColumn.value)
        return;
      isDraggingColumn.value = true;
      emits("columndragstart", column, index2, event);
    }
    function handleColumnDragEnd(column, index2, event) {
      if (!canDragColumn.value)
        return;
      isDraggingColumn.value = false;
      emits("columndragend", column, index2, event);
    }
    function handleColumnDrop(column, index2, event) {
      if (!canDragColumn.value)
        return;
      emits("columndrop", column, index2, event);
    }
    function handleColumnDragOver(column, index2, event) {
      if (!canDragColumn.value)
        return;
      emits("columndragover", column, index2, event);
    }
    function handleColumnDragLeave(column, index2, event) {
      if (!canDragColumn.value)
        return;
      emits("columndragleave", column, index2, event);
    }
    const rootClasses = defineClasses(
      ["rootClass", "o-table__root"],
      ["mobileClass", "o-table__wrapper--mobile", null, isMobileActive]
    );
    const tableClasses = defineClasses(
      ["tableClass", "o-table"],
      [
        "borderedClass",
        "o-table--bordered",
        null,
        computed(() => props.bordered)
      ],
      ["stripedClass", "o-table--striped", null, computed(() => props.striped)],
      [
        "narrowedClass",
        "o-table--narrowed",
        null,
        computed(() => props.narrowed)
      ],
      [
        "hoverableClass",
        "o-table--hoverable",
        null,
        computed(
          () => (props.hoverable || props.focusable) && !!visibleRows.value.length
        )
      ],
      [
        "emptyClass",
        "o-table--table__empty",
        null,
        computed(() => !visibleRows.value.length)
      ]
    );
    const tableWrapperClasses = defineClasses(
      ["wrapperClass", "o-table__wrapper"],
      [
        "stickyHeaderClass",
        "o-table__wrapper--sticky-header",
        null,
        computed(() => props.stickyHeader)
      ],
      ["scrollableClass", "o-table__wrapper--scrollable", null, isScrollable],
      ["mobileClass", "o-table__wrapper--mobile", null, isMobileActive]
    );
    const footerClasses = defineClasses(["footerClass", "o-table__footer"]);
    const thBaseClasses = defineClasses(["thClass", "o-table__th"]);
    const tdBaseClasses = defineClasses(["tdClass", "o-table__td"]);
    const thCheckboxClasses = defineClasses([
      "thCheckboxClass",
      "o-table__th-checkbox"
    ]);
    const thDetailedClasses = defineClasses([
      "thDetailedClass",
      "o-table__th--detailed"
    ]);
    const thSubheadingClasses = defineClasses(["thSubheadingClass", "o-table__th"]);
    const tdCheckboxClasses = defineClasses(
      ["tdCheckboxClass", "o-table__td-checkbox"],
      [
        "thStickyClass",
        "o-table__th--sticky",
        null,
        computed(() => props.stickyCheckbox)
      ]
    );
    const detailedClasses = defineClasses(["detailedClass", "o-table__detail"]);
    const tdDetailedChevronClasses = defineClasses([
      "tdDetailedChevronClass",
      "o-table__td-chevron"
    ]);
    const mobileSortClasses = defineClasses([
      "mobileSortClass",
      "o-table__mobile-sort"
    ]);
    const paginationWrapperClasses = defineClasses([
      "paginationWrapperClass",
      "o-table__pagination"
    ]);
    const paginationWrapperRootClasses = computed(
      () => getActiveClasses(paginationWrapperClasses.value)
    );
    const thSortIconClasses = defineClasses([
      "thSortIconClass",
      "o-table__th__sort-icon"
    ]);
    function thClasses(column) {
      const classes = defineClasses(
        [
          "thCurrentSortClass",
          "o-table__th-current-sort",
          null,
          isColumnSorted(column)
        ],
        ["thSortableClass", "o-table__th--sortable", null, column.sortable],
        [
          "thUnselectableClass",
          "o-table__th--unselectable",
          null,
          column.isHeaderUnselectable
        ],
        [
          "thPositionClass",
          "o-table__th--",
          column.position,
          !!column.position
        ],
        ["thStickyClass", "o-table__th--sticky", null, column.sticky]
      );
      return [...thBaseClasses.value, ...classes.value];
    }
    function rowClasses(row, index2) {
      const classes = defineClasses(
        [
          "trSelectedClass",
          "o-table__tr--selected",
          null,
          isRowSelected(row, props.selected)
        ],
        ["trCheckedClass", "o-table__tr--checked", null, isRowChecked(row)]
      );
      const rowClass = props.rowClass(row, index2);
      return [...classes.value, { [rowClass]: true }];
    }
    function tdClasses(row, column) {
      const classes = defineClasses(
        [
          "tdPositionClass",
          "o-table__td--",
          column.position,
          !!column.position
        ],
        ["tdStickyClass", "o-table__td--sticky", null, column.sticky]
      );
      return [...tdBaseClasses.value, ...classes.value];
    }
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", {
        ref_key: "rootRef",
        ref: rootRef,
        class: normalizeClass(unref(rootClasses)),
        "data-oruga": "table"
      }, [
        createElementVNode("div", {
          ref_key: "slotRef",
          ref: slotRef,
          style: { "display": "none" }
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => {
            var _a2;
            return [
              ((_a2 = __props.columns) == null ? void 0 : _a2.length) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.columns, (column, idx) => {
                return openBlock(), createBlock(_sfc_main$2, mergeProps({ key: idx }, column), {
                  default: withCtx(({ row }) => [
                    createTextVNode(toDisplayString(column.field ? row[column.field] : row), 1)
                  ]),
                  _: 2
                }, 1040);
              }), 128)) : createCommentVNode("", true)
            ];
          })
        ], 512),
        isMobileActive.value && hasSortablenewColumns.value ? (openBlock(), createBlock(_sfc_main$3, {
          key: 0,
          "current-sort-column": currentSortColumn.value,
          columns: tableColumns.value,
          placeholder: __props.mobileSortPlaceholder,
          "icon-pack": __props.iconPack,
          "sort-icon": __props.sortIcon,
          "sort-icon-size": __props.sortIconSize,
          "is-asc": isAsc.value,
          "mobile-sort-classes": unref(mobileSortClasses),
          onSort: _cache[0] || (_cache[0] = (column, event) => sort(column, null, event))
        }, null, 8, ["current-sort-column", "columns", "placeholder", "icon-pack", "sort-icon", "sort-icon-size", "is-asc", "mobile-sort-classes"])) : createCommentVNode("", true),
        __props.paginated && (__props.paginationPosition === "top" || __props.paginationPosition === "both") ? renderSlot(_ctx.$slots, "pagination", {
          key: 1,
          current: unref(tableCurrentPage),
          perPage: __props.perPage,
          total: dataTotal.value,
          change: (page) => tableCurrentPage.value = page
        }, () => [
          createVNode(_sfc_main$1, mergeProps(_ctx.$attrs, {
            current: unref(tableCurrentPage),
            "onUpdate:current": _cache[1] || (_cache[1] = ($event) => isRef(tableCurrentPage) ? tableCurrentPage.value = $event : null),
            paginated: __props.paginated,
            "per-page": __props.perPage,
            total: dataTotal.value,
            rounded: __props.paginationRounded,
            size: __props.paginationSize,
            order: __props.paginationOrder,
            simple: __props.paginationSimple,
            "icon-pack": __props.iconPack,
            "aria-next-label": __props.ariaNextLabel,
            "aria-previous-label": __props.ariaPreviousLabel,
            "aria-page-label": __props.ariaPageLabel,
            "aria-current-label": __props.ariaCurrentLabel,
            "root-class": paginationWrapperRootClasses.value,
            onChange: _cache[2] || (_cache[2] = (page) => _ctx.$emit("page-change", page))
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "top-left")
            ]),
            _: 3
          }, 16, ["current", "paginated", "per-page", "total", "rounded", "size", "order", "simple", "icon-pack", "aria-next-label", "aria-previous-label", "aria-page-label", "aria-current-label", "root-class"])
        ]) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(unref(tableWrapperClasses)),
          style: normalizeStyle(tableWrapperStyle.value)
        }, [
          createElementVNode("table", {
            class: normalizeClass(unref(tableClasses)),
            tabindex: !__props.focusable ? null : 0,
            onKeydown: [
              _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => onArrowPressed(-1, $event), ["self", "prevent"]), ["up"])),
              _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => onArrowPressed(1, $event), ["self", "prevent"]), ["down"]))
            ]
          }, [
            _ctx.$slots.caption ? (openBlock(), createElementBlock("caption", _hoisted_2, [
              renderSlot(_ctx.$slots, "caption")
            ])) : createCommentVNode("", true),
            tableColumns.value.length && __props.showHeader ? (openBlock(), createElementBlock("thead", _hoisted_3, [
              renderSlot(_ctx.$slots, "preheader"),
              createElementVNode("tr", null, [
                showDetailRowIcon.value ? (openBlock(), createElementBlock("th", {
                  key: 0,
                  class: normalizeClass([...unref(thBaseClasses), ...unref(thDetailedClasses)])
                }, null, 2)) : createCommentVNode("", true),
                __props.checkable && __props.checkboxPosition === "left" ? (openBlock(), createElementBlock("th", {
                  key: 1,
                  class: normalizeClass([...unref(thBaseClasses), ...unref(thCheckboxClasses)])
                }, [
                  renderSlot(_ctx.$slots, "check-all", {
                    isAllChecked: isAllChecked.value,
                    isAllUncheckable: isAllUncheckable.value,
                    checkAll
                  }, () => [
                    __props.headerCheckable ? (openBlock(), createBlock(_sfc_main$9, {
                      key: 0,
                      "model-value": isAllChecked.value,
                      autocomplete: "off",
                      variant: __props.checkboxVariant,
                      disabled: isAllUncheckable.value,
                      "onUpdate:modelValue": checkAll
                    }, null, 8, ["model-value", "variant", "disabled"])) : createCommentVNode("", true)
                  ])
                ], 2)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(visibleColumns.value, (column, index2) => {
                  var _a2;
                  return openBlock(), createElementBlock("th", mergeProps({
                    key: column.identifier + ":" + index2 + "header"
                  }, column.thAttrsData, {
                    class: thClasses(column),
                    style: isMobileActive.value ? {} : column.style,
                    draggable: canDragColumn.value,
                    onClick: withModifiers(($event) => sort(column, null, $event), ["stop"]),
                    onDragstart: ($event) => handleColumnDragStart(column, index2, $event),
                    onDragend: ($event) => handleColumnDragEnd(column, index2, $event),
                    onDrop: ($event) => handleColumnDrop(column, index2, $event),
                    onDragover: ($event) => handleColumnDragOver(column, index2, $event),
                    onDragleave: ($event) => handleColumnDragLeave(column, index2, $event)
                  }), [
                    ((_a2 = column.$slots) == null ? void 0 : _a2.header) ? (openBlock(), createBlock(unref(OSlotComponent), {
                      key: 0,
                      component: column.$el,
                      name: "header",
                      tag: "span",
                      props: { column, index: index2 }
                    }, null, 8, ["component", "props"])) : (openBlock(), createElementBlock("span", _hoisted_5, [
                      createTextVNode(toDisplayString(column.label) + " ", 1),
                      withDirectives(createElementVNode("span", {
                        class: normalizeClass(unref(thSortIconClasses))
                      }, [
                        createVNode(_sfc_main$7, {
                          icon: __props.sortIcon,
                          pack: __props.iconPack,
                          both: "",
                          size: __props.sortIconSize,
                          rotation: !isAsc.value ? 180 : 0
                        }, null, 8, ["icon", "pack", "size", "rotation"])
                      ], 2), [
                        [
                          vShow,
                          column.sortable && isColumnSorted(column)
                        ]
                      ])
                    ]))
                  ], 16, _hoisted_4);
                }), 128)),
                __props.checkable && __props.checkboxPosition === "right" ? (openBlock(), createElementBlock("th", {
                  key: 2,
                  class: normalizeClass([...unref(thBaseClasses), ...unref(thCheckboxClasses)])
                }, [
                  __props.headerCheckable ? renderSlot(_ctx.$slots, "check-all", {
                    key: 0,
                    isAllChecked: isAllChecked.value,
                    isAllUncheckable: isAllUncheckable.value,
                    checkAll
                  }, () => [
                    createVNode(_sfc_main$9, {
                      "model-value": isAllChecked.value,
                      autocomplete: "off",
                      variant: __props.checkboxVariant,
                      disabled: isAllUncheckable.value,
                      "onUpdate:modelValue": checkAll
                    }, null, 8, ["model-value", "variant", "disabled"])
                  ]) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true)
              ]),
              hasSearchablenewColumns.value ? (openBlock(), createElementBlock("tr", _hoisted_6, [
                showDetailRowIcon.value ? (openBlock(), createElementBlock("th", {
                  key: 0,
                  class: normalizeClass([...unref(thBaseClasses), ...unref(thDetailedClasses)])
                }, null, 2)) : createCommentVNode("", true),
                __props.checkable && __props.checkboxPosition === "left" ? (openBlock(), createElementBlock("th", _hoisted_7)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(visibleColumns.value, (column, index2) => {
                  var _a2;
                  return openBlock(), createElementBlock("th", mergeProps({
                    key: column.identifier + ":" + index2 + "searchable"
                  }, column.thAttrsData, {
                    class: thClasses(column),
                    style: isMobileActive.value ? {} : column.style
                  }), [
                    column.searchable ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      ((_a2 = column.$slots) == null ? void 0 : _a2.searchable) ? (openBlock(), createBlock(unref(OSlotComponent), {
                        key: 0,
                        component: column.$el,
                        name: "searchable",
                        tag: "span",
                        props: { column, index: index2, filters: filters.value }
                      }, null, 8, ["component", "props"])) : (openBlock(), createBlock(_sfc_main$a, mergeProps({
                        key: 1,
                        modelValue: filters.value[column.field],
                        "onUpdate:modelValue": ($event) => filters.value[column.field] = $event,
                        type: column.numeric ? "number" : "text"
                      }, { [toHandlerKey(__props.filtersEvent)]: onFiltersEvent }), null, 16, ["modelValue", "onUpdate:modelValue", "type"]))
                    ], 64)) : createCommentVNode("", true)
                  ], 16);
                }), 128)),
                __props.checkable && __props.checkboxPosition === "right" ? (openBlock(), createElementBlock("th", _hoisted_8)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              hasCustomSubheadings.value ? (openBlock(), createElementBlock("tr", _hoisted_9, [
                showDetailRowIcon.value ? (openBlock(), createElementBlock("th", {
                  key: 0,
                  class: normalizeClass([...unref(thBaseClasses), ...unref(thDetailedClasses)])
                }, null, 2)) : createCommentVNode("", true),
                __props.checkable && __props.checkboxPosition === "left" ? (openBlock(), createElementBlock("th", _hoisted_10)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(visibleColumns.value, (column, index2) => {
                  var _a2;
                  return openBlock(), createElementBlock("th", {
                    key: column.identifier + ":" + index2 + "subheading",
                    style: normalizeStyle(isMobileActive.value ? {} : column.style),
                    class: normalizeClass([...unref(thBaseClasses), ...unref(thSubheadingClasses)])
                  }, [
                    ((_a2 = column.$slots) == null ? void 0 : _a2.subheading) ? (openBlock(), createBlock(unref(OSlotComponent), {
                      key: 0,
                      component: column.$el,
                      name: "subheading",
                      tag: "span",
                      props: { column, index: index2 }
                    }, null, 8, ["component", "props"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(column.subheading), 1)
                    ], 64))
                  ], 6);
                }), 128)),
                __props.checkable && __props.checkboxPosition === "right" ? (openBlock(), createElementBlock("th", _hoisted_11)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            createElementVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(visibleRows.value, (row, index2) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: getRowKey(row) + "row"
                }, [
                  createElementVNode("tr", {
                    class: normalizeClass(rowClasses(row, index2)),
                    draggable: canDragRow.value,
                    onClick: ($event) => selectRow(row, index2, $event),
                    onDblclick: ($event) => _ctx.$emit("dblclick", row, index2, $event),
                    onMouseenter: ($event) => _ctx.$emit("mouseenter", row, index2, $event),
                    onMouseleave: ($event) => _ctx.$emit("mouseleave", row, index2, $event),
                    onContextmenu: ($event) => _ctx.$emit("contextmenu", row, index2, $event),
                    onDragstart: ($event) => handleDragStart(row, index2, $event),
                    onDragend: ($event) => handleDragEnd(row, index2, $event),
                    onDrop: ($event) => handleDrop(row, index2, $event),
                    onDragover: ($event) => handleDragOver(row, index2, $event),
                    onDragleave: ($event) => handleDragLeave(row, index2, $event)
                  }, [
                    showDetailRowIcon.value ? (openBlock(), createElementBlock("td", {
                      key: 0,
                      class: normalizeClass([
                        ...unref(tdBaseClasses),
                        ...unref(tdDetailedChevronClasses)
                      ])
                    }, [
                      __props.hasDetailedVisible(row) ? (openBlock(), createBlock(_sfc_main$7, {
                        key: 0,
                        icon: __props.detailIcon,
                        pack: __props.iconPack,
                        rotation: isVisibleDetailRow(row) ? 90 : 0,
                        role: "button",
                        clickable: "",
                        both: "",
                        onClick: withModifiers(($event) => toggleDetails(row), ["stop"])
                      }, null, 8, ["icon", "pack", "rotation", "onClick"])) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true),
                    __props.checkable && __props.checkboxPosition === "left" ? (openBlock(), createElementBlock("td", {
                      key: 1,
                      class: normalizeClass([
                        ...unref(thBaseClasses),
                        ...unref(tdCheckboxClasses)
                      ])
                    }, [
                      createVNode(_sfc_main$9, {
                        "model-value": isRowChecked(row),
                        autocomplete: "off",
                        variant: __props.checkboxVariant,
                        disabled: !__props.isRowCheckable(row),
                        "onUpdate:modelValue": ($event) => checkRow(row, index2)
                      }, null, 8, ["model-value", "variant", "disabled", "onUpdate:modelValue"])
                    ], 2)) : createCommentVNode("", true),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(visibleColumns.value, (column, colindex) => {
                      return openBlock(), createBlock(unref(OSlotComponent), mergeProps({
                        key: column.identifier + index2 + ":" + colindex
                      }, column.tdAttrsData[index2], {
                        component: column.$el,
                        name: "default",
                        tag: "td",
                        class: tdClasses(row, column),
                        style: isMobileActive.value ? {} : column.style,
                        "data-label": column.label,
                        props: {
                          row,
                          column,
                          index: index2,
                          colindex,
                          toggleDetails
                        },
                        onClick: ($event) => _ctx.$emit(
                          "cell-click",
                          row,
                          column,
                          index2,
                          colindex,
                          $event
                        )
                      }), null, 16, ["component", "class", "style", "data-label", "props", "onClick"]);
                    }), 128)),
                    __props.checkable && __props.checkboxPosition === "right" ? (openBlock(), createElementBlock("td", {
                      key: 2,
                      class: normalizeClass([
                        ...unref(thBaseClasses),
                        ...unref(tdCheckboxClasses)
                      ])
                    }, [
                      createVNode(_sfc_main$9, {
                        "model-value": isRowChecked(row),
                        autocomplete: "off",
                        variant: __props.checkboxVariant,
                        disabled: !__props.isRowCheckable(row),
                        "onUpdate:modelValue": ($event) => checkRow(row, index2)
                      }, null, 8, ["model-value", "variant", "disabled", "onUpdate:modelValue"])
                    ], 2)) : createCommentVNode("", true)
                  ], 42, _hoisted_12),
                  createVNode(Transition, { name: __props.detailTransition }, {
                    default: withCtx(() => [
                      isActiveDetailRow(row) ? (openBlock(), createElementBlock("tr", {
                        key: getRowKey(row) + "detail",
                        class: normalizeClass(unref(detailedClasses))
                      }, [
                        createElementVNode("td", { colspan: columnCount.value }, [
                          renderSlot(_ctx.$slots, "detail", {
                            row,
                            index: index2
                          })
                        ], 8, _hoisted_13)
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["name"]),
                  isActiveCustomDetailRow(row) ? renderSlot(_ctx.$slots, "detail", {
                    key: 0,
                    row,
                    index: index2
                  }) : createCommentVNode("", true)
                ], 64);
              }), 128)),
              !visibleRows.value.length ? (openBlock(), createElementBlock("tr", _hoisted_14, [
                createElementVNode("td", { colspan: columnCount.value }, [
                  renderSlot(_ctx.$slots, "empty")
                ], 8, _hoisted_15)
              ])) : createCommentVNode("", true)
            ]),
            _ctx.$slots.footer ? (openBlock(), createElementBlock("tfoot", _hoisted_16, [
              createElementVNode("tr", {
                class: normalizeClass(unref(footerClasses))
              }, [
                hasCustomFooterSlot() ? renderSlot(_ctx.$slots, "footer", {
                  key: 0,
                  columnCount: columnCount.value,
                  rowCount: (_a = visibleRows.value) == null ? void 0 : _a.length
                }) : (openBlock(), createElementBlock("th", {
                  key: 1,
                  colspan: columnCount.value
                }, [
                  renderSlot(_ctx.$slots, "footer", {
                    columnCount: columnCount.value,
                    rowCount: (_b = visibleRows.value) == null ? void 0 : _b.length
                  })
                ], 8, _hoisted_17))
              ], 2)
            ])) : createCommentVNode("", true)
          ], 42, _hoisted_1),
          renderSlot(_ctx.$slots, "loading", { loading: __props.loading }, () => [
            createVNode(_sfc_main$b, {
              "full-page": false,
              active: __props.loading
            }, null, 8, ["active"])
          ])
        ], 6),
        __props.checkable && _ctx.$slots["bottom-left"] || __props.paginated && (__props.paginationPosition === "bottom" || __props.paginationPosition === "both") ? renderSlot(_ctx.$slots, "pagination", {
          key: 2,
          current: unref(tableCurrentPage),
          perPage: __props.perPage,
          total: dataTotal.value,
          change: (page) => tableCurrentPage.value = page
        }, () => [
          createVNode(_sfc_main$1, mergeProps(_ctx.$attrs, {
            current: unref(tableCurrentPage),
            "onUpdate:current": _cache[5] || (_cache[5] = ($event) => isRef(tableCurrentPage) ? tableCurrentPage.value = $event : null),
            paginated: __props.paginated,
            "per-page": __props.perPage,
            total: dataTotal.value,
            rounded: __props.paginationRounded,
            size: __props.paginationSize,
            order: __props.paginationOrder,
            simple: __props.paginationSimple,
            "icon-pack": __props.iconPack,
            "aria-next-label": __props.ariaNextLabel,
            "aria-previous-label": __props.ariaPreviousLabel,
            "aria-page-label": __props.ariaPageLabel,
            "aria-current-label": __props.ariaCurrentLabel,
            "root-class": paginationWrapperRootClasses.value,
            onChange: _cache[6] || (_cache[6] = (page) => _ctx.$emit("page-change", page))
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "bottom-left")
            ]),
            _: 3
          }, 16, ["current", "paginated", "per-page", "total", "rounded", "size", "order", "simple", "icon-pack", "aria-next-label", "aria-previous-label", "aria-page-label", "aria-current-label", "root-class"])
        ]) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const index = {
  install(app) {
    registerComponent(app, _sfc_main);
    registerComponent(app, _sfc_main$2);
  }
};
export {
  _sfc_main as OTable,
  _sfc_main$2 as OTableColumn,
  index as default
};
//# sourceMappingURL=table.mjs.map
