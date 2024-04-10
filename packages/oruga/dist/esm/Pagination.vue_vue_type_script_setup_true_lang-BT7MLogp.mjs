/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, computed, openBlock, createBlock, resolveDynamicComponent, mergeProps, withModifiers, withKeys, withCtx, renderSlot, createTextVNode, toDisplayString, watch, nextTick, createElementBlock, normalizeClass, unref, normalizeProps, guardReactiveProps, createVNode, Fragment, createCommentVNode, createElementVNode, renderList } from "vue";
import { _ as _sfc_main$2 } from "./Icon.vue_vue_type_script_setup_true_lang-BfJM6xYp.mjs";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { a as usePropBinding } from "./usePropValue-DLZTRe_e.mjs";
import { u as useMatchMedia } from "./useMatchMedia-G3BPCbzR.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OPaginationButton",
    configField: "pagination"
  },
  __name: "PaginationButton",
  props: {
    number: { type: Number, default: void 0 },
    isCurrent: { type: Boolean, default: false },
    click: {
      type: Function,
      required: true
    },
    ariaLabel: { type: String, default: void 0 },
    disabled: { type: Boolean, default: false },
    tag: {
      type: [String, Object, Function],
      default: "button"
    },
    class: { type: String, default: void 0 },
    linkClass: {
      type: Array,
      required: true
    },
    linkCurrentClass: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const linkClasses = computed(() => [
      ...props.linkClass,
      props.class,
      ...props.isCurrent ? props.linkCurrentClass : []
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps({
        role: "button",
        tabindex: __props.disabled ? null : 0,
        disabled: __props.disabled,
        class: linkClasses.value
      }, _ctx.$attrs, {
        "aria-label": __props.ariaLabel,
        "aria-current": __props.isCurrent,
        onClick: withModifiers(__props.click, ["prevent"]),
        onKeydown: withKeys(withModifiers(__props.click, ["prevent"]), ["enter"])
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.number), 1)
          ])
        ]),
        _: 3
      }, 16, ["tabindex", "disabled", "class", "aria-label", "aria-current", "onClick", "onKeydown"]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OPagination",
    configField: "pagination",
    inheritAttrs: false
  },
  __name: "Pagination",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Total count of items */
    total: { type: Number, default: void 0 },
    /** Items count for each page */
    perPage: {
      type: [Number, String],
      default: () => getOption("pagination.perPage", 20)
    },
    /** Current page number, use v-model:current to make it two-way binding. */
    current: { type: Number, default: 1 },
    /** Number of pagination items to show before current page. */
    rangeBefore: { type: Number, default: 1 },
    /** Number of pagination items to show after current page. */
    rangeAfter: { type: Number, default: 1 },
    /**
     * Pagination size
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => getOption("pagination.size")
    },
    /** Simple style */
    simple: {
      type: Boolean,
      default: () => getOption("pagination.simple", false)
    },
    /** Rounded button style */
    rounded: {
      type: Boolean,
      default: () => getOption("pagination.rounded", false)
    },
    /**
     * Buttons order
     * @values centered, right, left
     */
    order: {
      type: String,
      default: () => getOption("pagination.order", "right"),
      validator: (value) => ["centered", "right", "left"].indexOf(value) >= 0
    },
    /** Pagination button tag name */
    buttonTag: {
      type: [String, Object, Function],
      default: () => getOption("pagination.buttonTag", "button")
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => getOption("pagination.iconPack")
    },
    /** Icon to use for previous button */
    iconPrev: {
      type: String,
      default: () => getOption("pagination.iconPrev", "chevron-left")
    },
    /** Icon to use for next button */
    iconNext: {
      type: String,
      default: () => getOption("pagination.iconNext", "chevron-right")
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => getOption("pagination.mobileBreakpoint")
    },
    /** Accessibility label for the next page button. */
    ariaNextLabel: {
      type: String,
      default: () => getOption("pagination.ariaNextLabel", "Next page")
    },
    /** Accessibility label for the previous page button. */
    ariaPreviousLabel: {
      type: String,
      default: () => getOption("pagination.ariaPreviousLabel", "Previous page")
    },
    /** Accessibility label for the page button. */
    ariaPageLabel: {
      type: String,
      default: () => getOption("pagination.ariaPageLabel", "page")
    },
    /** Accessibility label for the current page button. */
    ariaCurrentLabel: {
      type: String,
      default: () => getOption("pagination.ariaCurrentLabel", "Current page")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the prev button */
    prevButtonClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the next button */
    nextButtonClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the pagination list */
    listClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the pagination list items */
    listItemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the link button */
    linkClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the current link */
    linkCurrentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the pagination ellipsis */
    ellipsisClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the info in `simple` mode */
    infoClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the pagination order */
    orderClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the pagination in `simple` mode */
    simpleClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the pagination when rounded */
    roundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the disabled link */
    linkDisabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the pagination size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of pagination component when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:current", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { isMobile } = useMatchMedia(props.mobileBreakpoint);
    const current = usePropBinding("current", props, emits);
    const pageCount = computed(
      () => Math.ceil(props.total / Number(props.perPage))
    );
    watch(
      () => pageCount.value,
      (value) => {
        if (props.current > value)
          last();
      }
    );
    const firstItem = computed(() => {
      const perPage = Number(props.perPage);
      const firstItem2 = props.current * perPage - perPage + 1;
      return firstItem2 >= 0 ? firstItem2 : 0;
    });
    const hasPrev = computed(() => props.current > 1);
    const hasFirst = computed(() => props.current >= 2 + props.rangeBefore);
    const hasFirstEllipsis = computed(() => props.current >= props.rangeBefore + 4);
    const hasLast = computed(
      () => props.current <= pageCount.value - (1 + props.rangeAfter)
    );
    const hasLastEllipsis = computed(
      () => props.current < pageCount.value - (2 + props.rangeAfter)
    );
    const hasNext = computed(() => props.current < pageCount.value);
    const pagesInRange = computed(() => {
      if (props.simple)
        return;
      let left = Math.max(1, props.current - props.rangeBefore);
      if (left - 1 === 2) {
        left--;
      }
      let right = Math.min(props.current + props.rangeAfter, pageCount.value);
      if (pageCount.value - right === 2) {
        right++;
      }
      const pages = [];
      for (let i = left; i <= right; i++) {
        pages.push(getPage(i));
      }
      return pages;
    });
    function getPage(num, ariaLabel) {
      return {
        number: num,
        isCurrent: props.current === num,
        click: (event) => changePage(num, event),
        ariaLabel: ariaLabel || getAriaPageLabel(num, props.current === num),
        tag: props.buttonTag
      };
    }
    function getAriaPageLabel(pageNumber, isCurrent) {
      if (props.ariaPageLabel && (!isCurrent || !props.ariaCurrentLabel))
        return props.ariaPageLabel + " " + pageNumber + ".";
      else if (props.ariaPageLabel && isCurrent && props.ariaCurrentLabel)
        return props.ariaCurrentLabel + ", " + props.ariaPageLabel + " " + pageNumber + ".";
      return null;
    }
    function prev(event) {
      changePage(props.current - 1, event);
    }
    function next(event) {
      changePage(props.current + 1, event);
    }
    function first(event) {
      changePage(1, event);
    }
    function last(event) {
      changePage(pageCount.value, event);
    }
    function changePage(page, event) {
      if (props.current === page || page < 1 || page > pageCount.value)
        return;
      emits("change", page);
      current.value = page;
      if (event && event.target)
        nextTick(() => event.target.focus());
    }
    const rootClasses = defineClasses(
      ["rootClass", "o-pag"],
      [
        "orderClass",
        "o-pag--",
        computed(() => props.order),
        computed(() => !!props.order)
      ],
      [
        "sizeClass",
        "o-pag--",
        computed(() => props.size),
        computed(() => !!props.size)
      ],
      ["simpleClass", "o-pag--simple", null, computed(() => props.simple)],
      ["mobileClass", "o-pag--mobile", null, isMobile]
    );
    const prevBtnClasses = defineClasses(
      ["prevButtonClass", "o-pag__previous"],
      [
        "linkDisabledClass",
        "o-pag__link--disabled",
        null,
        computed(() => !hasPrev.value)
      ]
    );
    const nextBtnClasses = defineClasses(
      ["nextButtonClass", "o-pag__next"],
      [
        "linkDisabledClass",
        "o-pag__link--disabled",
        null,
        computed(() => !hasNext.value)
      ]
    );
    const infoClasses = defineClasses(["infoClass", "o-pag__info"]);
    const ellipsisClasses = defineClasses(["ellipsisClass", "o-pag__ellipsis"]);
    const listClasses = defineClasses(["listClass", "o-pag__list"]);
    const linkClasses = defineClasses(
      ["linkClass", "o-pag__link"],
      [
        "roundedClass",
        "o-pag__link--rounded",
        null,
        computed(() => props.rounded)
      ]
    );
    const linkCurrentClasses = defineClasses([
      "linkCurrentClass",
      "o-pag__link--current"
    ]);
    const listItemClasses = defineClasses(["listItemClass", "o-pag__item"]);
    __expose({ last, first, prev, next });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", {
        class: normalizeClass(unref(rootClasses)),
        "data-oruga": "pagination"
      }, [
        renderSlot(_ctx.$slots, "previous", normalizeProps(guardReactiveProps(getPage(unref(current) - 1, __props.ariaPreviousLabel))), () => [
          createVNode(_sfc_main$1, mergeProps(getPage(unref(current) - 1, __props.ariaPreviousLabel), {
            class: unref(prevBtnClasses),
            "link-class": unref(linkClasses),
            "link-current-class": unref(linkCurrentClasses)
          }), {
            default: withCtx(() => [
              createVNode(_sfc_main$2, {
                icon: __props.iconPrev,
                pack: __props.iconPack,
                both: "",
                "aria-hidden": "true"
              }, null, 8, ["icon", "pack"])
            ]),
            _: 1
          }, 16, ["class", "link-class", "link-current-class"])
        ]),
        renderSlot(_ctx.$slots, "next", normalizeProps(guardReactiveProps(getPage(unref(current) + 1, __props.ariaNextLabel))), () => [
          createVNode(_sfc_main$1, mergeProps(getPage(unref(current) + 1, __props.ariaNextLabel), {
            class: unref(nextBtnClasses),
            "link-class": unref(linkClasses),
            "link-current-class": unref(linkCurrentClasses)
          }), {
            default: withCtx(() => [
              createVNode(_sfc_main$2, {
                icon: __props.iconNext,
                pack: __props.iconPack,
                both: "",
                "aria-hidden": "true"
              }, null, 8, ["icon", "pack"])
            ]),
            _: 1
          }, 16, ["class", "link-class", "link-current-class"])
        ]),
        __props.simple ? (openBlock(), createElementBlock("small", {
          key: 0,
          class: normalizeClass(unref(infoClasses))
        }, [
          __props.perPage == 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(firstItem.value) + " / " + toDisplayString(__props.total), 1)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(firstItem.value) + "-" + toDisplayString(Math.min(unref(current) * Number(__props.perPage), __props.total)) + " / " + toDisplayString(__props.total), 1)
          ], 64))
        ], 2)) : (openBlock(), createElementBlock("ul", {
          key: 1,
          class: normalizeClass(unref(listClasses))
        }, [
          hasFirst.value ? (openBlock(), createElementBlock("li", {
            key: 0,
            class: normalizeClass(unref(listItemClasses))
          }, [
            renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(getPage(1))), () => [
              createVNode(_sfc_main$1, mergeProps(getPage(1), {
                "link-class": unref(linkClasses),
                "link-current-class": unref(linkCurrentClasses)
              }), null, 16, ["link-class", "link-current-class"])
            ])
          ], 2)) : createCommentVNode("", true),
          hasFirstEllipsis.value ? (openBlock(), createElementBlock("li", {
            key: 1,
            class: normalizeClass(unref(listItemClasses))
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(ellipsisClasses))
            }, "…", 2)
          ], 2)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(pagesInRange.value, (page) => {
            return openBlock(), createElementBlock("li", {
              key: page.number,
              class: normalizeClass(unref(listItemClasses))
            }, [
              renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(page)), () => [
                createVNode(_sfc_main$1, mergeProps(page, {
                  "link-class": unref(linkClasses),
                  "link-current-class": unref(linkCurrentClasses)
                }), null, 16, ["link-class", "link-current-class"])
              ])
            ], 2);
          }), 128)),
          hasLastEllipsis.value ? (openBlock(), createElementBlock("li", {
            key: 2,
            class: normalizeClass(unref(listItemClasses))
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(ellipsisClasses))
            }, "…", 2)
          ], 2)) : createCommentVNode("", true),
          hasLast.value ? (openBlock(), createElementBlock("li", {
            key: 3,
            class: normalizeClass(unref(listItemClasses))
          }, [
            renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(getPage(pageCount.value))), () => [
              createVNode(_sfc_main$1, mergeProps(getPage(pageCount.value), {
                "link-class": unref(linkClasses),
                "link-current-class": unref(linkCurrentClasses)
              }), null, 16, ["link-class", "link-current-class"])
            ])
          ], 2)) : createCommentVNode("", true)
        ], 2))
      ], 2);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Pagination.vue_vue_type_script_setup_true_lang-BT7MLogp.mjs.map
