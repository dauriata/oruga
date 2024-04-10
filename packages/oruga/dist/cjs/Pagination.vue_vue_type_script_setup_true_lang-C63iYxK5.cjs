"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const Icon_vue_vue_type_script_setup_true_lang = require("./Icon.vue_vue_type_script_setup_true_lang-CGDJNR6y.cjs");
const config = require("./config-JkCO4AEi.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const usePropValue = require("./usePropValue-CHGN8et-.cjs");
const useMatchMedia = require("./useMatchMedia-gcwLqHTY.cjs");
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
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
    const linkClasses = vue.computed(() => [
      ...props.linkClass,
      props.class,
      ...props.isCurrent ? props.linkCurrentClass : []
    ]);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.tag), vue.mergeProps({
        role: "button",
        tabindex: __props.disabled ? null : 0,
        disabled: __props.disabled,
        class: linkClasses.value
      }, _ctx.$attrs, {
        "aria-label": __props.ariaLabel,
        "aria-current": __props.isCurrent,
        onClick: vue.withModifiers(__props.click, ["prevent"]),
        onKeydown: vue.withKeys(vue.withModifiers(__props.click, ["prevent"]), ["enter"])
      }), {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createTextVNode(vue.toDisplayString(__props.number), 1)
          ])
        ]),
        _: 3
      }, 16, ["tabindex", "disabled", "class", "aria-label", "aria-current", "onClick", "onKeydown"]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
      default: () => config.getOption("pagination.perPage", 20)
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
      default: () => config.getOption("pagination.size")
    },
    /** Simple style */
    simple: {
      type: Boolean,
      default: () => config.getOption("pagination.simple", false)
    },
    /** Rounded button style */
    rounded: {
      type: Boolean,
      default: () => config.getOption("pagination.rounded", false)
    },
    /**
     * Buttons order
     * @values centered, right, left
     */
    order: {
      type: String,
      default: () => config.getOption("pagination.order", "right"),
      validator: (value) => ["centered", "right", "left"].indexOf(value) >= 0
    },
    /** Pagination button tag name */
    buttonTag: {
      type: [String, Object, Function],
      default: () => config.getOption("pagination.buttonTag", "button")
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => config.getOption("pagination.iconPack")
    },
    /** Icon to use for previous button */
    iconPrev: {
      type: String,
      default: () => config.getOption("pagination.iconPrev", "chevron-left")
    },
    /** Icon to use for next button */
    iconNext: {
      type: String,
      default: () => config.getOption("pagination.iconNext", "chevron-right")
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => config.getOption("pagination.mobileBreakpoint")
    },
    /** Accessibility label for the next page button. */
    ariaNextLabel: {
      type: String,
      default: () => config.getOption("pagination.ariaNextLabel", "Next page")
    },
    /** Accessibility label for the previous page button. */
    ariaPreviousLabel: {
      type: String,
      default: () => config.getOption("pagination.ariaPreviousLabel", "Previous page")
    },
    /** Accessibility label for the page button. */
    ariaPageLabel: {
      type: String,
      default: () => config.getOption("pagination.ariaPageLabel", "page")
    },
    /** Accessibility label for the current page button. */
    ariaCurrentLabel: {
      type: String,
      default: () => config.getOption("pagination.ariaCurrentLabel", "Current page")
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
    const { isMobile } = useMatchMedia.useMatchMedia(props.mobileBreakpoint);
    const current = usePropValue.usePropBinding("current", props, emits);
    const pageCount = vue.computed(
      () => Math.ceil(props.total / Number(props.perPage))
    );
    vue.watch(
      () => pageCount.value,
      (value) => {
        if (props.current > value)
          last();
      }
    );
    const firstItem = vue.computed(() => {
      const perPage = Number(props.perPage);
      const firstItem2 = props.current * perPage - perPage + 1;
      return firstItem2 >= 0 ? firstItem2 : 0;
    });
    const hasPrev = vue.computed(() => props.current > 1);
    const hasFirst = vue.computed(() => props.current >= 2 + props.rangeBefore);
    const hasFirstEllipsis = vue.computed(() => props.current >= props.rangeBefore + 4);
    const hasLast = vue.computed(
      () => props.current <= pageCount.value - (1 + props.rangeAfter)
    );
    const hasLastEllipsis = vue.computed(
      () => props.current < pageCount.value - (2 + props.rangeAfter)
    );
    const hasNext = vue.computed(() => props.current < pageCount.value);
    const pagesInRange = vue.computed(() => {
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
        vue.nextTick(() => event.target.focus());
    }
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-pag"],
      [
        "orderClass",
        "o-pag--",
        vue.computed(() => props.order),
        vue.computed(() => !!props.order)
      ],
      [
        "sizeClass",
        "o-pag--",
        vue.computed(() => props.size),
        vue.computed(() => !!props.size)
      ],
      ["simpleClass", "o-pag--simple", null, vue.computed(() => props.simple)],
      ["mobileClass", "o-pag--mobile", null, isMobile]
    );
    const prevBtnClasses = defineClasses.defineClasses(
      ["prevButtonClass", "o-pag__previous"],
      [
        "linkDisabledClass",
        "o-pag__link--disabled",
        null,
        vue.computed(() => !hasPrev.value)
      ]
    );
    const nextBtnClasses = defineClasses.defineClasses(
      ["nextButtonClass", "o-pag__next"],
      [
        "linkDisabledClass",
        "o-pag__link--disabled",
        null,
        vue.computed(() => !hasNext.value)
      ]
    );
    const infoClasses = defineClasses.defineClasses(["infoClass", "o-pag__info"]);
    const ellipsisClasses = defineClasses.defineClasses(["ellipsisClass", "o-pag__ellipsis"]);
    const listClasses = defineClasses.defineClasses(["listClass", "o-pag__list"]);
    const linkClasses = defineClasses.defineClasses(
      ["linkClass", "o-pag__link"],
      [
        "roundedClass",
        "o-pag__link--rounded",
        null,
        vue.computed(() => props.rounded)
      ]
    );
    const linkCurrentClasses = defineClasses.defineClasses([
      "linkCurrentClass",
      "o-pag__link--current"
    ]);
    const listItemClasses = defineClasses.defineClasses(["listItemClass", "o-pag__item"]);
    __expose({ last, first, prev, next });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("nav", {
        class: vue.normalizeClass(vue.unref(rootClasses)),
        "data-oruga": "pagination"
      }, [
        vue.renderSlot(_ctx.$slots, "previous", vue.normalizeProps(vue.guardReactiveProps(getPage(vue.unref(current) - 1, __props.ariaPreviousLabel))), () => [
          vue.createVNode(_sfc_main$1, vue.mergeProps(getPage(vue.unref(current) - 1, __props.ariaPreviousLabel), {
            class: vue.unref(prevBtnClasses),
            "link-class": vue.unref(linkClasses),
            "link-current-class": vue.unref(linkCurrentClasses)
          }), {
            default: vue.withCtx(() => [
              vue.createVNode(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
                icon: __props.iconPrev,
                pack: __props.iconPack,
                both: "",
                "aria-hidden": "true"
              }, null, 8, ["icon", "pack"])
            ]),
            _: 1
          }, 16, ["class", "link-class", "link-current-class"])
        ]),
        vue.renderSlot(_ctx.$slots, "next", vue.normalizeProps(vue.guardReactiveProps(getPage(vue.unref(current) + 1, __props.ariaNextLabel))), () => [
          vue.createVNode(_sfc_main$1, vue.mergeProps(getPage(vue.unref(current) + 1, __props.ariaNextLabel), {
            class: vue.unref(nextBtnClasses),
            "link-class": vue.unref(linkClasses),
            "link-current-class": vue.unref(linkCurrentClasses)
          }), {
            default: vue.withCtx(() => [
              vue.createVNode(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
                icon: __props.iconNext,
                pack: __props.iconPack,
                both: "",
                "aria-hidden": "true"
              }, null, 8, ["icon", "pack"])
            ]),
            _: 1
          }, 16, ["class", "link-class", "link-current-class"])
        ]),
        __props.simple ? (vue.openBlock(), vue.createElementBlock("small", {
          key: 0,
          class: vue.normalizeClass(vue.unref(infoClasses))
        }, [
          __props.perPage == 1 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.createTextVNode(vue.toDisplayString(firstItem.value) + " / " + vue.toDisplayString(__props.total), 1)
          ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
            vue.createTextVNode(vue.toDisplayString(firstItem.value) + "-" + vue.toDisplayString(Math.min(vue.unref(current) * Number(__props.perPage), __props.total)) + " / " + vue.toDisplayString(__props.total), 1)
          ], 64))
        ], 2)) : (vue.openBlock(), vue.createElementBlock("ul", {
          key: 1,
          class: vue.normalizeClass(vue.unref(listClasses))
        }, [
          hasFirst.value ? (vue.openBlock(), vue.createElementBlock("li", {
            key: 0,
            class: vue.normalizeClass(vue.unref(listItemClasses))
          }, [
            vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.guardReactiveProps(getPage(1))), () => [
              vue.createVNode(_sfc_main$1, vue.mergeProps(getPage(1), {
                "link-class": vue.unref(linkClasses),
                "link-current-class": vue.unref(linkCurrentClasses)
              }), null, 16, ["link-class", "link-current-class"])
            ])
          ], 2)) : vue.createCommentVNode("", true),
          hasFirstEllipsis.value ? (vue.openBlock(), vue.createElementBlock("li", {
            key: 1,
            class: vue.normalizeClass(vue.unref(listItemClasses))
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(vue.unref(ellipsisClasses))
            }, "…", 2)
          ], 2)) : vue.createCommentVNode("", true),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(pagesInRange.value, (page) => {
            return vue.openBlock(), vue.createElementBlock("li", {
              key: page.number,
              class: vue.normalizeClass(vue.unref(listItemClasses))
            }, [
              vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.guardReactiveProps(page)), () => [
                vue.createVNode(_sfc_main$1, vue.mergeProps(page, {
                  "link-class": vue.unref(linkClasses),
                  "link-current-class": vue.unref(linkCurrentClasses)
                }), null, 16, ["link-class", "link-current-class"])
              ])
            ], 2);
          }), 128)),
          hasLastEllipsis.value ? (vue.openBlock(), vue.createElementBlock("li", {
            key: 2,
            class: vue.normalizeClass(vue.unref(listItemClasses))
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(vue.unref(ellipsisClasses))
            }, "…", 2)
          ], 2)) : vue.createCommentVNode("", true),
          hasLast.value ? (vue.openBlock(), vue.createElementBlock("li", {
            key: 3,
            class: vue.normalizeClass(vue.unref(listItemClasses))
          }, [
            vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.guardReactiveProps(getPage(pageCount.value))), () => [
              vue.createVNode(_sfc_main$1, vue.mergeProps(getPage(pageCount.value), {
                "link-class": vue.unref(linkClasses),
                "link-current-class": vue.unref(linkCurrentClasses)
              }), null, 16, ["link-class", "link-current-class"])
            ])
          ], 2)) : vue.createCommentVNode("", true)
        ], 2))
      ], 2);
    };
  }
});
exports._sfc_main = _sfc_main;
//# sourceMappingURL=Pagination.vue_vue_type_script_setup_true_lang-C63iYxK5.cjs.map
