"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const Icon_vue_vue_type_script_setup_true_lang = require("./Icon.vue_vue_type_script_setup_true_lang-CGDJNR6y.cjs");
const config = require("./config-JkCO4AEi.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
      default: () => config.getOption("button.tag", "button")
    },
    /**
     * Color variant of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => config.getOption("button.variant")
    },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => config.getOption("button.size")
    },
    /** Button label, unnecessary when default slot is used */
    label: { type: String, default: void 0 },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => config.getOption("button.iconPack", void 0)
    },
    /** Icon name to show on the left */
    iconLeft: { type: String, default: void 0 },
    /** Icon name to show on the right */
    iconRight: { type: String, default: void 0 },
    /** Enable rounded style */
    rounded: {
      type: Boolean,
      default: () => config.getOption("button.rounded", false)
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
      default: () => config.getOption("button.role", "button")
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
    const computedTag = vue.computed(
      () => typeof props.disabled !== "undefined" && props.disabled !== false ? "button" : props.tag
    );
    const computedNativeType = vue.computed(
      () => props.tag === "button" || props.tag === "input" ? props.nativeType : null
    );
    const computedDisabled = vue.computed(() => props.disabled ? true : null);
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-btn"],
      [
        "sizeClass",
        "o-btn--",
        vue.computed(() => props.size),
        vue.computed(() => !!props.size)
      ],
      [
        "variantClass",
        "o-btn--",
        vue.computed(() => props.variant),
        vue.computed(() => !!props.variant)
      ],
      [
        "outlinedClass",
        "o-btn--outlined",
        null,
        vue.computed(() => props.outlined && !props.variant)
      ],
      [
        "invertedClass",
        "o-btn--inverted",
        null,
        vue.computed(() => props.inverted && !props.variant)
      ],
      [
        "outlinedClass",
        "o-btn--outlined-",
        vue.computed(() => props.variant),
        vue.computed(() => props.outlined && !!props.variant)
      ],
      [
        "invertedClass",
        "o-btn--inverted-",
        vue.computed(() => props.variant),
        vue.computed(() => props.inverted && !!props.variant)
      ],
      ["expandedClass", "o-btn--expanded", null, vue.computed(() => props.expanded)],
      ["loadingClass", "o-btn--loading", null, vue.computed(() => props.loading)],
      ["roundedClass", "o-btn--rounded", null, vue.computed(() => props.rounded)],
      ["disabledClass", "o-btn--disabled", null, vue.computed(() => props.disabled)]
    );
    const labelClasses = defineClasses.defineClasses(["labelClass", "o-btn__label"]);
    const iconClasses = defineClasses.defineClasses(["iconClass", "o-btn__icon"]);
    const iconLeftClasses = defineClasses.defineClasses(["iconLeftClass", "o-btn__icon-left"]);
    const iconRightClasses = defineClasses.defineClasses(["iconRightClass", "o-btn__icon-right"]);
    const wrapperClasses = defineClasses.defineClasses(["wrapperClass", "o-btn__wrapper"]);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(computedTag.value), {
        disabled: computedDisabled.value,
        type: computedNativeType.value,
        class: vue.normalizeClass(vue.unref(rootClasses)),
        role: __props.role,
        "data-oruga": "button"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("span", {
            class: vue.normalizeClass(vue.unref(wrapperClasses))
          }, [
            __props.iconLeft ? (vue.openBlock(), vue.createBlock(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
              key: 0,
              pack: __props.iconPack,
              icon: __props.iconLeft,
              size: __props.size,
              both: __props.iconBoth,
              class: vue.normalizeClass([...vue.unref(iconClasses), ...vue.unref(iconLeftClasses)])
            }, null, 8, ["pack", "icon", "size", "both", "class"])) : vue.createCommentVNode("", true),
            __props.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 1,
              class: vue.normalizeClass(vue.unref(labelClasses))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createTextVNode(vue.toDisplayString(__props.label), 1)
              ])
            ], 2)) : vue.createCommentVNode("", true),
            __props.iconRight ? (vue.openBlock(), vue.createBlock(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
              key: 2,
              pack: __props.iconPack,
              icon: __props.iconRight,
              size: __props.size,
              both: __props.iconBoth,
              class: vue.normalizeClass([...vue.unref(iconClasses), ...vue.unref(iconRightClasses)])
            }, null, 8, ["pack", "icon", "size", "both", "class"])) : vue.createCommentVNode("", true)
          ], 2)
        ]),
        _: 3
      }, 8, ["disabled", "type", "class", "role"]);
    };
  }
});
exports._sfc_main = _sfc_main;
//# sourceMappingURL=Button.vue_vue_type_script_setup_true_lang-VSBsF4Wj.cjs.map
