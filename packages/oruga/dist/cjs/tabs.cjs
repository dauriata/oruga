"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const Icon_vue_vue_type_script_setup_true_lang = require("./Icon.vue_vue_type_script_setup_true_lang-CGDJNR6y.cjs");
const SlotComponent = require("./SlotComponent-CZq-e91h.cjs");
const config = require("./config-JkCO4AEi.cjs");
const helpers = require("./helpers.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const useParentProvider = require("./useParentProvider-BknvMzPy.cjs");
const _hoisted_1$1 = ["aria-orientation"];
const _hoisted_2 = ["aria-controls", "aria-selected"];
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OTabs",
    configField: "tabs"
  },
  __name: "Tabs",
  props: /* @__PURE__ */ vue.mergeModels({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: [String, Number], default: 0 },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => config.getOption("tabs.variant")
    },
    /**
     * Tab size
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => config.getOption("tabs.size")
    },
    /** Show tab in vertical layout */
    vertical: {
      type: Boolean,
      default: () => config.getOption("tabs.vertical", false)
    },
    /**
     * Position of the tabs
     * @values left, centered, right
     */
    position: {
      type: String,
      default: void 0,
      validator: (value) => ["left", "centered", "right"].indexOf(value) >= 0
    },
    /**
     * Tab type
     * @values boxed, toggle
     */
    type: { type: String, default: () => config.getOption("tabs.type", "default") },
    /** Tabs will be expanded (full-width) */
    expanded: { type: Boolean, default: false },
    /** Tab will have an animation */
    animated: {
      type: Boolean,
      default: () => config.getOption("tabs.animated", true)
    },
    /**
     * Transition animation name
     * @values [next, prev], [right, left, down, up]
     */
    animation: {
      type: Array,
      default: () => config.getOption("tabs.animation", [
        "slide-next",
        "slide-prev",
        "slide-down",
        "slide-up"
      ]),
      validator: (value) => value.length === 2 || value.length === 4
    },
    /** Apply animation on the initial render */
    animateInitially: {
      type: Boolean,
      default: () => config.getOption("tabs.animateInitially", false)
    },
    /** Show tab items multiline when there is no space */
    multiline: { type: Boolean, default: false },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of Tabs component when when is vertical and its position changes */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of Tabs component when expanded */
    expandedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of Tabs component when vertical */
    verticalClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of Tabs component when multiline */
    multilineClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Tabs component nav tabs */
    navTabsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Size of the navigation */
    navSizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Tabs component nav position */
    navPositionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Type of the navigation */
    navTypeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab content */
    contentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab content when transitioning */
    transitioningClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item wrapper */
    itemWrapperClass: {
      type: [String, Array, Function],
      default: void 0
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ vue.mergeModels(["update:modelValue", "change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootRef = vue.ref();
    const provideData = vue.computed(() => ({
      activeValue: vmodel.value,
      type: props.type,
      vertical: props.vertical,
      animated: props.animated,
      animation: props.animation,
      animateInitially: props.animateInitially
    }));
    const { sortedItems } = useParentProvider.useProviderParent(rootRef, {
      data: provideData
    });
    const items = vue.computed(
      () => sortedItems.value.map((column) => ({
        index: column.index,
        identifier: column.identifier,
        ...vue.toValue(column.data)
      }))
    );
    const vmodel = vue.useModel(__props, "modelValue");
    vue.watch(
      () => props.modelValue,
      (value) => {
        if (vmodel.value !== value)
          performAction(value);
      }
    );
    const activeItem = vue.computed(
      () => helpers.isDefined(vmodel.value) ? items.value.find((item) => item.value === vmodel.value) || items.value[0] : items.value[0]
    );
    const activeIndex = vue.computed(() => activeItem.value.index);
    function isActive(item) {
      return item.value === activeItem.value.value;
    }
    const isTransitioning = vue.computed(
      () => items.value.some((item) => item.isTransitioning)
    );
    function itemClick(item) {
      if (vmodel.value !== item.value)
        performAction(item.value);
    }
    function next() {
      const newIndex = helpers.mod(activeIndex.value + 1, items.value.length);
      clickFirstViableChild(newIndex, true);
    }
    function prev() {
      const newIndex = helpers.mod(activeIndex.value - 1, items.value.length);
      clickFirstViableChild(newIndex, false);
    }
    function homePressed() {
      if (items.value.length < 1)
        return;
      clickFirstViableChild(0, true);
    }
    function endPressed() {
      if (items.value.length < 1)
        return;
      clickFirstViableChild(items.value.length - 1, false);
    }
    function clickFirstViableChild(startingIndex, forward) {
      const direction = forward ? 1 : -1;
      let newIndex = startingIndex;
      for (; newIndex !== activeIndex.value; newIndex = helpers.mod(newIndex + direction, items.value.length)) {
        if (items.value[newIndex].visible && !items.value[newIndex].disabled)
          break;
      }
      itemClick(items.value[newIndex]);
    }
    function performAction(newId) {
      const oldId = vmodel.value;
      const oldItem = activeItem.value;
      const newItem = items.value.find((item) => item.value === newId) || items.value[0];
      if (oldItem && newItem) {
        oldItem.deactivate(newItem.index);
        newItem.activate(oldItem.index);
      }
      vue.nextTick(() => {
        vmodel.value = newId;
        emits("change", newId, oldId);
      });
    }
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-tabs"],
      [
        "positionClass",
        "o-tabs--",
        vue.computed(() => props.position),
        vue.computed(() => props.position && props.vertical)
      ],
      [
        "expandedClass",
        "o-tabs--fullwidth",
        null,
        vue.computed(() => props.expanded)
      ],
      ["verticalClass", "o-tabs--vertical", null, vue.computed(() => props.vertical)],
      [
        "multilineClass",
        "o-tabs--multiline",
        null,
        vue.computed(() => props.multiline)
      ]
    );
    const itemWrapperClasses = defineClasses.defineClasses([
      "itemWrapperClass",
      "o-tabs__nav-item-wrapper"
    ]);
    const navClasses = defineClasses.defineClasses(
      ["navTabsClass", "o-tabs__nav"],
      [
        "navSizeClass",
        "o-tabs__nav--",
        vue.computed(() => props.size),
        vue.computed(() => !!props.size)
      ],
      [
        "navPositionClass",
        "o-tabs__nav--",
        vue.computed(() => props.position),
        vue.computed(() => props.position && !props.vertical)
      ],
      [
        "navTypeClass",
        "o-tabs__nav--",
        vue.computed(() => props.type),
        vue.computed(() => !!props.type)
      ]
    );
    const contentClasses = defineClasses.defineClasses(
      ["contentClass", "o-tabs__content"],
      [
        "transitioningClass",
        "o-tabs__content--transitioning",
        null,
        isTransitioning
      ]
    );
    function itemHeaderClasses(childItem) {
      const classes = defineClasses.defineClasses(
        ["itemHeaderClass", "o-tabs__nav-item"],
        ["itemHeaderTypeClass", "o-tabs__nav-item-", props.type, !!props.type],
        [
          "itemHeaderActiveClass",
          "o-tabs__nav-item-{*}--active",
          props.type,
          isActive(childItem)
        ],
        [
          "itemHeaderDisabledClass",
          "o-tabs__nav-item-{*}--disabled",
          props.type,
          childItem.disabled
        ]
      );
      const headerClass = { [childItem.headerClass || ""]: true };
      return [headerClass, ...classes.value];
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "rootRef",
        ref: rootRef,
        class: vue.normalizeClass(vue.unref(rootClasses)),
        "data-oruga": "tabs"
      }, [
        vue.createElementVNode("nav", {
          class: vue.normalizeClass(vue.unref(navClasses)),
          role: "tablist",
          "aria-orientation": __props.vertical ? "vertical" : "horizontal"
        }, [
          vue.renderSlot(_ctx.$slots, "start"),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(items.value, (childItem) => {
            return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
              key: childItem.value,
              class: vue.normalizeClass(vue.unref(itemWrapperClasses)),
              role: "tab",
              "aria-controls": `${childItem.value}-content`,
              "aria-selected": isActive(childItem) ? "true" : "false"
            }, [
              childItem.$slots.header ? (vue.openBlock(), vue.createBlock(vue.unref(SlotComponent.OSlotComponent), {
                key: 0,
                component: childItem,
                tag: childItem.tag,
                name: "header",
                class: vue.normalizeClass(itemHeaderClasses(childItem)),
                onClick: ($event) => itemClick(childItem),
                onKeydown: [
                  vue.withKeys(($event) => itemClick(childItem), ["enter"]),
                  vue.withKeys(vue.withModifiers(prev, ["prevent"]), ["left"]),
                  vue.withKeys(vue.withModifiers(next, ["prevent"]), ["right"]),
                  vue.withKeys(vue.withModifiers(prev, ["prevent"]), ["up"]),
                  vue.withKeys(vue.withModifiers(next, ["prevent"]), ["down"]),
                  vue.withKeys(vue.withModifiers(homePressed, ["prevent"]), ["home"]),
                  vue.withKeys(vue.withModifiers(endPressed, ["prevent"]), ["end"])
                ]
              }, null, 8, ["component", "tag", "class", "onClick", "onKeydown"])) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(childItem.tag), {
                key: 1,
                role: "button",
                tabindex: 0,
                class: vue.normalizeClass(itemHeaderClasses(childItem)),
                onClick: ($event) => itemClick(childItem),
                onKeydown: [
                  vue.withKeys(($event) => itemClick(childItem), ["enter"]),
                  vue.withKeys(vue.withModifiers(prev, ["prevent"]), ["left"]),
                  vue.withKeys(vue.withModifiers(next, ["prevent"]), ["right"]),
                  vue.withKeys(vue.withModifiers(prev, ["prevent"]), ["up"]),
                  vue.withKeys(vue.withModifiers(next, ["prevent"]), ["down"]),
                  vue.withKeys(vue.withModifiers(homePressed, ["prevent"]), ["home"]),
                  vue.withKeys(vue.withModifiers(endPressed, ["prevent"]), ["end"])
                ]
              }, {
                default: vue.withCtx(() => [
                  childItem.icon ? (vue.openBlock(), vue.createBlock(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
                    key: 0,
                    "root-class": vue.unref(defineClasses.getActiveClasses)(childItem.headerIconClasses),
                    icon: childItem.icon,
                    pack: childItem.iconPack,
                    size: __props.size
                  }, null, 8, ["root-class", "icon", "pack", "size"])) : vue.createCommentVNode("", true),
                  vue.createElementVNode("span", {
                    class: vue.normalizeClass(childItem.headerTextClasses)
                  }, vue.toDisplayString(childItem.label), 3)
                ]),
                _: 2
              }, 1064, ["class", "onClick", "onKeydown"]))
            ], 10, _hoisted_2)), [
              [vue.vShow, childItem.visible]
            ]);
          }), 128)),
          vue.renderSlot(_ctx.$slots, "end")
        ], 10, _hoisted_1$1),
        vue.createElementVNode("section", {
          class: vue.normalizeClass(vue.unref(contentClasses))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 2);
    };
  }
});
const _hoisted_1 = ["data-id", "tabindex", "role"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OTabItem",
    configField: "tabs",
    inheritAttrs: false
  },
  __name: "TabItem",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Item value (it will be used as v-model of wrapper component) */
    value: { type: [String, Number], default: () => helpers.uuid() },
    /** Item label */
    label: { type: String, default: void 0 },
    /** Item will be disabled */
    disabled: { type: Boolean, default: false },
    /** Icon on the left */
    icon: {
      type: String,
      default: () => config.getOption("tabs.icon")
    },
    /** Icon pack */
    iconPack: {
      type: String,
      default: () => config.getOption("tabs.iconPack")
    },
    /** Show/hide item */
    visible: { type: Boolean, default: true },
    /** Tabs item tag name */
    tag: {
      type: [String, Object, Function],
      default: () => config.getOption("tabs.itemTag", "button")
    },
    /** Role attribute to be passed to the div wrapper for better accessibility. */
    ariaRole: {
      type: String,
      default: () => config.getOption("tabs.ariaRole", "tab")
    },
    /** Sets a class to the item header */
    headerClass: { type: String, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the tab item */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item header */
    itemHeaderClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item header when active */
    itemHeaderActiveClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item header when disabled */
    itemHeaderDisabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item header type */
    itemHeaderTypeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item header icon */
    itemHeaderIconClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item header text */
    itemHeaderTextClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["activate", "deactivate"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = vue.useSlots();
    const providedData = vue.computed(() => ({
      ...props,
      $slots: slots,
      headerIconClasses: headerIconClasses.value,
      headerTextClasses: headerTextClasses.value,
      isTransitioning: isTransitioning.value,
      activate,
      deactivate
    }));
    const { parent, item } = useParentProvider.useProviderChild({
      data: providedData
    });
    const transitionName = vue.ref();
    const isActive = vue.computed(() => helpers.isEqual(props.value, parent.value.activeValue));
    const isTransitioning = vue.ref(false);
    const nextAnimation = vue.computed(() => {
      const idx = parent.value.vertical && parent.value.animation.length === 4 ? 2 : 0;
      return parent.value.animation[idx];
    });
    const prevAnimation = vue.computed(() => {
      const idx = parent.value.vertical && parent.value.animation.length === 4 ? 3 : 1;
      return parent.value.animation[idx];
    });
    function activate(oldIndex) {
      transitionName.value = item.value.index < oldIndex ? nextAnimation.value : prevAnimation.value;
      emits("activate");
    }
    function deactivate(newIndex) {
      transitionName.value = newIndex < item.value.index ? nextAnimation.value : prevAnimation.value;
      emits("deactivate");
    }
    function afterEnter() {
      isTransitioning.value = true;
    }
    function beforeLeave() {
      isTransitioning.value = true;
    }
    const elementClasses = defineClasses.defineClasses(["itemClass", "o-tab-item__content"]);
    const headerIconClasses = defineClasses.defineClasses([
      "itemHeaderIconClass",
      "o-tabs__nav-item-icon"
    ]);
    const headerTextClasses = defineClasses.defineClasses([
      "itemHeaderTextClass",
      "o-tabs__nav-item-text"
    ]);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        css: vue.unref(parent).animated,
        name: transitionName.value,
        appear: vue.unref(parent).animateInitially,
        onAfterEnter: afterEnter,
        onBeforeLeave: beforeLeave
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("div", vue.mergeProps({ ref: "rootRef" }, _ctx.$attrs, {
            class: vue.unref(elementClasses),
            "data-id": `tabs-${vue.unref(item).identifier}`,
            "data-oruga": "tabs-item",
            tabindex: isActive.value ? 0 : -1,
            role: __props.ariaRole,
            "aria-roledescription": "item"
          }), [
            vue.renderSlot(_ctx.$slots, "default")
          ], 16, _hoisted_1), [
            [vue.vShow, isActive.value && __props.visible]
          ])
        ]),
        _: 3
      }, 8, ["css", "name", "appear"]);
    };
  }
});
const index = {
  install(app) {
    config.registerComponent(app, _sfc_main$1);
    config.registerComponent(app, _sfc_main);
  }
};
exports.OTabItem = _sfc_main;
exports.OTabs = _sfc_main$1;
exports.default = index;
//# sourceMappingURL=tabs.cjs.map
