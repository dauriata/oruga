/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, computed, openBlock, createBlock, resolveDynamicComponent, normalizeClass, unref, withCtx, createElementVNode, createCommentVNode, createElementBlock, renderSlot, createTextVNode, toDisplayString } from "vue";
import { _ as _sfc_main$1 } from "./Icon.vue_vue_type_script_setup_true_lang-BfJM6xYp.mjs";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OButton",
    configField: "button"
  },
  __name: "Button",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /**
     * Button tag name
     * @values button, a, input, router-link, nuxt-link (or other nuxt alias)
     */
    tag: {
      type: [String, Object, Function],
      default: () => getOption("button.tag", "button")
    },
    /**
     * Color variant of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => getOption("button.variant")
    },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => getOption("button.size")
    },
    /** Button label, unnecessary when default slot is used */
    label: { type: String, default: void 0 },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => getOption("button.iconPack", void 0)
    },
    /** Icon name to show on the left */
    iconLeft: { type: String, default: void 0 },
    /** Icon name to show on the right */
    iconRight: { type: String, default: void 0 },
    /** Enable rounded style */
    rounded: {
      type: Boolean,
      default: () => getOption("button.rounded", false)
    },
    /** Button will be expanded (full-width) */
    expanded: { type: Boolean, default: false },
    /** Button will be disabled */
    disabled: { type: Boolean, default: false },
    /** Enable outlined style */
    outlined: { type: Boolean, default: false },
    /** Enable loading style */
    loading: { type: Boolean, default: false },
    /** Enable inverted style */
    inverted: { type: Boolean, default: false },
    /** Button type, like native */
    nativeType: {
      type: String,
      default: "button",
      validator: (value) => ["button", "submit", "reset"].indexOf(value) >= 0
    },
    /** Accessibility Role attribute to be passed to the button. */
    role: {
      type: String,
      default: () => getOption("button.role", "button")
    },
    /**
     * This is used internally
     * @ignore
     */
    iconBoth: { type: Boolean, default: false },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button elements wrapper */
    wrapperClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button when outlined */
    outlinedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button with loading */
    loadingClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button when inverted */
    invertedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button when expanded */
    expandedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button when rounded */
    roundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button when disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button icon */
    iconClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button icon on the left */
    iconLeftClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button icon on the right */
    iconRightClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button label */
    labelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const computedTag = computed(
      () => typeof props.disabled !== "undefined" && props.disabled !== false ? "button" : props.tag
    );
    const computedNativeType = computed(
      () => props.tag === "button" || props.tag === "input" ? props.nativeType : null
    );
    const computedDisabled = computed(() => props.disabled ? true : null);
    const rootClasses = defineClasses(
      ["rootClass", "o-btn"],
      [
        "sizeClass",
        "o-btn--",
        computed(() => props.size),
        computed(() => !!props.size)
      ],
      [
        "variantClass",
        "o-btn--",
        computed(() => props.variant),
        computed(() => !!props.variant)
      ],
      [
        "outlinedClass",
        "o-btn--outlined",
        null,
        computed(() => props.outlined && !props.variant)
      ],
      [
        "invertedClass",
        "o-btn--inverted",
        null,
        computed(() => props.inverted && !props.variant)
      ],
      [
        "outlinedClass",
        "o-btn--outlined-",
        computed(() => props.variant),
        computed(() => props.outlined && !!props.variant)
      ],
      [
        "invertedClass",
        "o-btn--inverted-",
        computed(() => props.variant),
        computed(() => props.inverted && !!props.variant)
      ],
      ["expandedClass", "o-btn--expanded", null, computed(() => props.expanded)],
      ["loadingClass", "o-btn--loading", null, computed(() => props.loading)],
      ["roundedClass", "o-btn--rounded", null, computed(() => props.rounded)],
      ["disabledClass", "o-btn--disabled", null, computed(() => props.disabled)]
    );
    const labelClasses = defineClasses(["labelClass", "o-btn__label"]);
    const iconClasses = defineClasses(["iconClass", "o-btn__icon"]);
    const iconLeftClasses = defineClasses(["iconLeftClass", "o-btn__icon-left"]);
    const iconRightClasses = defineClasses(["iconRightClass", "o-btn__icon-right"]);
    const wrapperClasses = defineClasses(["wrapperClass", "o-btn__wrapper"]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(computedTag.value), {
        disabled: computedDisabled.value,
        type: computedNativeType.value,
        class: normalizeClass(unref(rootClasses)),
        role: __props.role,
        "data-oruga": "button"
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(unref(wrapperClasses))
          }, [
            __props.iconLeft ? (openBlock(), createBlock(_sfc_main$1, {
              key: 0,
              pack: __props.iconPack,
              icon: __props.iconLeft,
              size: __props.size,
              both: __props.iconBoth,
              class: normalizeClass([...unref(iconClasses), ...unref(iconLeftClasses)])
            }, null, 8, ["pack", "icon", "size", "both", "class"])) : createCommentVNode("", true),
            __props.label || _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(labelClasses))
            }, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(__props.label), 1)
              ])
            ], 2)) : createCommentVNode("", true),
            __props.iconRight ? (openBlock(), createBlock(_sfc_main$1, {
              key: 2,
              pack: __props.iconPack,
              icon: __props.iconRight,
              size: __props.size,
              both: __props.iconBoth,
              class: normalizeClass([...unref(iconClasses), ...unref(iconRightClasses)])
            }, null, 8, ["pack", "icon", "size", "both", "class"])) : createCommentVNode("", true)
          ], 2)
        ]),
        _: 3
      }, 8, ["disabled", "type", "class", "role"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Button.vue_vue_type_script_setup_true_lang-D7iwVqb3.mjs.map
