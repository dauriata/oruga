/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, mergeModels, ref, computed, toValue, useModel, watch, nextTick, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, Fragment, renderList, withDirectives, createCommentVNode, createBlock, resolveDynamicComponent, withKeys, withCtx, toDisplayString, vShow, renderSlot, createVNode, withModifiers, useSlots, Transition, mergeProps } from "vue";
import { _ as _sfc_main$3 } from "./Button.vue_vue_type_script_setup_true_lang-D7iwVqb3.mjs";
import { _ as _sfc_main$2 } from "./Icon.vue_vue_type_script_setup_true_lang-BfJM6xYp.mjs";
import { g as getOption, b as registerComponent } from "./config-zKhnAIV0.mjs";
import { isDefined, uuid, isEqual } from "./helpers.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useMatchMedia } from "./useMatchMedia-G3BPCbzR.mjs";
import { u as useProviderParent, a as useProviderChild } from "./useParentProvider-C8ssHz7C.mjs";
const _hoisted_1$1 = ["aria-current"];
const _hoisted_2 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OSteps",
    configField: "steps"
  },
  __name: "Steps",
  props: /* @__PURE__ */ mergeModels({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: [String, Number], default: void 0 },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => getOption("steps.variant")
    },
    /**
     * Tab size
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => getOption("steps.size")
    },
    /** Show tab in vertical layout */
    vertical: { type: Boolean, default: false },
    /**
     * Position of the tab
     * @values left, centered, right
     */
    position: {
      type: String,
      default: void 0,
      validator: (value) => ["left", "centered", "right"].indexOf(value) >= 0
    },
    /**
     * Icon pack to use for the navigation
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => getOption("steps.iconPack")
    },
    /** Icon to use for navigation button */
    iconPrev: {
      type: String,
      default: () => getOption("steps.iconPrev", "chevron-left")
    },
    /** Icon to use for navigation button */
    iconNext: {
      type: String,
      default: () => getOption("steps.iconNext", "chevron-right")
    },
    /**
     * Next and previous buttons below the component. You can use this property if you want to use your own custom navigation items.
     */
    hasNavigation: { type: Boolean, default: true },
    /** Step navigation is animated */
    animated: {
      type: Boolean,
      default: () => getOption("steps.animated", true)
    },
    /**
     * Transition animation name
     * @values [next, prev], [right, left, down, up]
     */
    animation: {
      type: Array,
      default: () => getOption("tabs.animation", [
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
      default: () => getOption("steps.animateInitially", false)
    },
    /**
     * Position of the marker label
     * @values bottom, right, left
     */
    labelPosition: {
      type: String,
      default: () => getOption("steps.labelPosition", "bottom"),
      validator: (value) => ["bottom", "right", "left"].indexOf(value) > -1
    },
    /** Rounded step markers */
    rounded: { type: Boolean, default: true },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => getOption("steps.mobileBreakpoint")
    },
    /** Accessibility next button aria label */
    ariaNextLabel: {
      type: String,
      default: () => getOption("steps.ariaNextLabel")
    },
    /** Accessibility previous button aria label  */
    ariaPreviousLabel: {
      type: String,
      default: () => getOption("steps.ariaPreviousLabel")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Size of the steps */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip trigger */
    verticalClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component when is vertical and its position changes */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the steps container */
    stepsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of Steps component when animation gets triggered */
    animatedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps markers trigger when are rounded */
    stepMarkerRoundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component dividers */
    stepDividerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component marker */
    stepMarkerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component content */
    stepContentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component content when transition is happening */
    stepContentTransitioningClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component navigation element */
    stepNavigationClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component link */
    stepLinkClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component link when clickable */
    stepLinkClickableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Step component link label */
    stepLinkLabelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Step component link label when positioned */
    stepLinkLabelPositionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of steps component when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { isMobile } = useMatchMedia(props.mobileBreakpoint);
    const rootRef = ref();
    const provideData = computed(() => ({
      activeValue: vmodel.value,
      vertical: props.vertical,
      animated: props.animated,
      animation: props.animation,
      animateInitially: props.animateInitially
    }));
    const { sortedItems } = useProviderParent(rootRef, {
      data: provideData
    });
    const items = computed(
      () => sortedItems.value.map((column) => ({
        index: column.index,
        identifier: column.identifier,
        ...toValue(column.data)
      }))
    );
    const vmodel = useModel(__props, "modelValue");
    watch(
      () => props.modelValue,
      (value) => {
        if (vmodel.value !== value)
          performAction(value);
      }
    );
    const activeItem = computed(
      () => isDefined(vmodel.value) ? items.value.find((item) => item.value === vmodel.value) || items.value[0] : items.value[0]
    );
    const isTransitioning = computed(
      () => items.value.some((item) => item.isTransitioning)
    );
    const hasPrev = computed(() => !!prevItem.value);
    const hasNext = computed(() => !!nextItem.value);
    const prevItem = computed(() => {
      if (!activeItem.value)
        return null;
      let prevItem2 = null;
      for (let idx = items.value.indexOf(activeItem.value) - 1; idx >= 0; idx--) {
        if (items.value[idx].visible) {
          prevItem2 = items.value[idx];
          break;
        }
      }
      return prevItem2;
    });
    const nextItem = computed(() => {
      let nextItem2 = null;
      let idx = activeItem.value ? items.value.indexOf(activeItem.value) + 1 : 0;
      for (; idx < items.value.length; idx++) {
        if (items.value[idx].visible) {
          nextItem2 = items.value[idx];
          break;
        }
      }
      return nextItem2;
    });
    function isItemClickable(item) {
      var _a;
      if (item.clickable === void 0)
        return item.index < ((_a = activeItem.value) == null ? void 0 : _a.index);
      return item.clickable;
    }
    function prev() {
      if (hasPrev.value)
        itemClick(prevItem.value);
    }
    function next() {
      if (hasNext.value)
        itemClick(nextItem.value);
    }
    function itemClick(item) {
      if (vmodel.value !== item.value)
        performAction(item.value);
    }
    function performAction(newId) {
      const oldId = activeItem.value.value;
      const oldItem = activeItem.value;
      const newItem = items.value.find((item) => item.value === newId) || items.value[0];
      if (oldItem && newItem) {
        oldItem.deactivate(newItem.index);
        newItem.activate(oldItem.index);
      }
      nextTick(() => {
        vmodel.value = newId;
        emits("change", newId, oldId);
      });
    }
    const rootClasses = defineClasses(
      ["rootClass", "o-steps__wrapper"],
      [
        "sizeClass",
        "o-steps--",
        computed(() => props.size),
        computed(() => !!props.size)
      ],
      [
        "verticalClass",
        "o-steps__wrapper-vertical",
        null,
        computed(() => props.vertical)
      ],
      [
        "positionClass",
        "o-steps__wrapper-position-",
        computed(() => props.position),
        computed(() => props.position && props.vertical)
      ],
      ["mobileClass", "o-steps--mobile", null, isMobile]
    );
    const wrapperClasses = defineClasses(
      ["stepsClass", "o-steps"],
      [
        "animatedClass",
        "o-steps--animated",
        null,
        computed(() => props.animated)
      ]
    );
    const stepDividerClasses = defineClasses([
      "stepDividerClass",
      "o-steps__divider"
    ]);
    const stepMarkerClasses = defineClasses(
      ["stepMarkerClass", "o-steps__marker"],
      [
        "stepMarkerRoundedClass",
        "o-steps__marker--rounded",
        null,
        computed(() => props.rounded)
      ]
    );
    const stepContentClasses = defineClasses(
      ["stepContentClass", "o-steps__content"],
      [
        "stepContentTransitioningClass",
        "o-steps__content-transitioning",
        null,
        isTransitioning
      ]
    );
    const stepNavigationClasses = defineClasses([
      "stepNavigationClass",
      "o-steps__navigation"
    ]);
    const stepLinkLabelClasses = defineClasses([
      "stepLinkLabelClass",
      "o-steps__title"
    ]);
    function stepLinkClasses(childItem) {
      const classes = defineClasses(
        ["stepLinkClass", "o-steps__link"],
        [
          "stepLinkLabelPositionClass",
          "o-steps__link-label-",
          props.labelPosition,
          !!props.labelPosition
        ],
        [
          "stepLinkClickableClass",
          "o-steps__link-clickable",
          null,
          isItemClickable(childItem)
        ]
      );
      return classes.value;
    }
    function itemClasses(childItem) {
      const classes = defineClasses(
        ["itemHeaderClass", "o-steps__nav-item"],
        [
          "itemHeaderVariantClass",
          "o-steps__nav-item--",
          childItem.variant || props.variant,
          !!childItem.variant || !!props.variant
        ],
        [
          "itemHeaderActiveClass",
          "o-steps__nav-item-active",
          null,
          childItem.value === activeItem.value.value
        ],
        [
          "itemHeaderPreviousClass",
          "o-steps__nav-item-previous",
          null,
          activeItem.value.index > childItem.index
        ]
      );
      const headerClass = { [childItem.headerClass || ""]: true };
      return [headerClass, ...classes.value];
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootClasses)),
        "data-oruga": "steps"
      }, [
        createElementVNode("ol", {
          class: normalizeClass(unref(wrapperClasses))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (childItem, index2) => {
            return withDirectives((openBlock(), createElementBlock("li", {
              key: childItem.value,
              "aria-current": childItem.value === activeItem.value.value ? "step" : void 0,
              class: normalizeClass(itemClasses(childItem))
            }, [
              index2 > 0 ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(unref(stepDividerClasses))
              }, null, 2)) : createCommentVNode("", true),
              (openBlock(), createBlock(resolveDynamicComponent(childItem.tag), {
                role: "button",
                tabindex: isItemClickable(childItem) ? 0 : null,
                class: normalizeClass(stepLinkClasses(childItem)),
                onClick: ($event) => isItemClickable(childItem) && itemClick(childItem),
                onKeydown: withKeys(($event) => isItemClickable(childItem) && itemClick(childItem), ["enter"])
              }, {
                default: withCtx(() => [
                  createElementVNode("div", {
                    class: normalizeClass(unref(stepMarkerClasses))
                  }, [
                    childItem.icon ? (openBlock(), createBlock(_sfc_main$2, {
                      key: 0,
                      icon: childItem.icon,
                      pack: childItem.iconPack,
                      size: __props.size
                    }, null, 8, ["icon", "pack", "size"])) : childItem.step ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(childItem.step), 1)) : createCommentVNode("", true)
                  ], 2),
                  createElementVNode("div", {
                    class: normalizeClass(unref(stepLinkLabelClasses))
                  }, toDisplayString(childItem.label), 3)
                ]),
                _: 2
              }, 1064, ["tabindex", "class", "onClick", "onKeydown"]))
            ], 10, _hoisted_1$1)), [
              [vShow, childItem.visible]
            ]);
          }), 128))
        ], 2),
        createElementVNode("section", {
          class: normalizeClass(unref(stepContentClasses))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        renderSlot(_ctx.$slots, "navigation", {
          previous: { disabled: !hasPrev.value, action: prev },
          next: { disabled: !hasNext.value, action: next }
        }, () => [
          __props.hasNavigation ? (openBlock(), createElementBlock("nav", {
            key: 0,
            class: normalizeClass(unref(stepNavigationClasses))
          }, [
            createVNode(_sfc_main$3, {
              role: "button",
              "icon-left": __props.iconPrev,
              "icon-pack": __props.iconPack,
              "icon-both": "",
              disabled: !hasPrev.value,
              "aria-label": __props.ariaPreviousLabel,
              onClick: withModifiers(prev, ["prevent"])
            }, null, 8, ["icon-left", "icon-pack", "disabled", "aria-label"]),
            createVNode(_sfc_main$3, {
              role: "button",
              "icon-left": __props.iconNext,
              "icon-pack": __props.iconPack,
              "icon-both": "",
              disabled: !hasNext.value,
              "aria-label": __props.ariaNextLabel,
              onClick: withModifiers(next, ["prevent"])
            }, null, 8, ["icon-left", "icon-pack", "disabled", "aria-label"])
          ], 2)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const _hoisted_1 = ["data-id", "tabindex", "role"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OStepItem",
    configField: "steps",
    inheritAttrs: false
  },
  __name: "StepItem",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Item value (it will be used as v-model of wrapper component) */
    value: { type: [String, Number], default: () => uuid() },
    /** Item label */
    label: { type: String, default: void 0 },
    /** Step marker content (when there is no icon) */
    step: { type: [String, Number], default: void 0 },
    /**
     * Default style for the step.
     * This will override parent type.
     * Could be used to set a completed step to "success" for example
     */
    variant: { type: String, default: void 0 },
    /**
     * Item can be used directly to navigate.
     * If undefined, previous steps are clickable while the others are not
     */
    clickable: { type: Boolean, default: void 0 },
    /** Show/hide item */
    visible: { type: Boolean, default: true },
    /** Icon on the left */
    icon: {
      type: String,
      default: () => getOption("steps.icon")
    },
    /** Icon pack */
    iconPack: {
      type: String,
      default: () => getOption("steps.iconPack")
    },
    /** Step item tag name */
    tag: {
      type: [String, Object, Function],
      default: () => getOption("steps.itemTag", "button")
    },
    /** Role attribute to be passed to the div wrapper for better accessibility */
    ariaRole: {
      type: String,
      default: () => getOption("steps.ariaRole", "tab")
    },
    /** Sets a class to the item header */
    headerClass: { type: String, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the content item */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the nav item */
    itemHeaderClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the nav item when active */
    itemHeaderActiveClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the nav item behind the active one */
    itemHeaderPreviousClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the nav item with variant (default value by parent steps component) */
    itemHeaderVariantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["activate", "deactivate"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const providedData = computed(() => ({
      ...props,
      $slots: slots,
      isTransitioning: isTransitioning.value,
      activate,
      deactivate
    }));
    const { parent, item } = useProviderChild({
      data: providedData
    });
    const transitionName = ref();
    const isActive = computed(() => isEqual(props.value, parent.value.activeValue));
    const isTransitioning = ref(false);
    const nextAnimation = computed(() => {
      const idx = parent.value.vertical && parent.value.animation.length === 4 ? 2 : 0;
      return parent.value.animation[idx];
    });
    const prevAnimation = computed(() => {
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
    const elementClasses = defineClasses(["itemClass", "o-steps__item"]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        css: unref(parent).animated,
        name: transitionName.value,
        appear: unref(parent).animateInitially,
        onAfterEnter: afterEnter,
        onBeforeLeave: beforeLeave
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", mergeProps({ ref: "rootRef" }, _ctx.$attrs, {
            class: unref(elementClasses),
            "data-id": `steps-${unref(item).identifier}`,
            "data-oruga": "steps-item",
            tabindex: isActive.value ? 0 : -1,
            role: __props.ariaRole,
            "aria-roledescription": "item"
          }), [
            renderSlot(_ctx.$slots, "default")
          ], 16, _hoisted_1), [
            [vShow, isActive.value && __props.visible]
          ])
        ]),
        _: 3
      }, 8, ["css", "name", "appear"]);
    };
  }
});
const index = {
  install(app) {
    registerComponent(app, _sfc_main$1);
    registerComponent(app, _sfc_main);
  }
};
export {
  _sfc_main as OStepItem,
  _sfc_main$1 as OSteps,
  index as default
};
//# sourceMappingURL=steps.mjs.map
