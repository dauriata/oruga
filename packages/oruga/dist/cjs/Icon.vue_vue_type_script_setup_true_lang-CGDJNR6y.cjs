"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const config = require("./config-JkCO4AEi.cjs");
const helpers = require("./helpers.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const mdiIcons = {
  sizes: {
    default: "mdi-24px",
    small: null,
    medium: "mdi-36px",
    large: "mdi-48px"
  },
  iconPrefix: "mdi-"
};
const faIcons = () => {
  const iconComponent = config.getOption("iconComponent");
  const faIconPrefix = iconComponent ? "" : "fa-";
  return {
    sizes: {
      default: null,
      small: null,
      medium: "lg",
      large: "2xl"
    },
    iconPrefix: faIconPrefix,
    internalIcons: {
      check: "check",
      information: "info-circle",
      alert: "exclamation-triangle",
      "alert-circle": "exclamation-circle",
      "arrow-up": "arrow-up",
      "chevron-right": "angle-right",
      "chevron-left": "angle-left",
      "chevron-down": "angle-down",
      "chevron-up": "angle-up",
      eye: "eye",
      "eye-off": "eye-slash",
      "caret-down": "caret-down",
      "caret-up": "caret-up",
      "close-circle": "times-circle",
      close: "times",
      loading: "circle-notch"
    }
  };
};
const getIcons = () => {
  let icons = {
    mdi: mdiIcons,
    fa: faIcons(),
    fas: faIcons(),
    far: faIcons(),
    fad: faIcons(),
    fab: faIcons(),
    fal: faIcons()
  };
  const customIconPacks = config.getOption("customIconPacks");
  if (customIconPacks)
    icons = helpers.merge(icons, customIconPacks, true);
  return icons;
};
const getIcons$1 = getIcons;
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OIcon",
    configField: "icon"
  },
  __name: "Icon",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Icon component name */
    component: {
      type: String,
      default: () => config.getOption("iconComponent")
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    pack: {
      type: String,
      default: () => config.getOption("iconPack", "mdi")
    },
    /**
     * 	Color of the icon
     *  @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => config.getOption("icon.variant")
    },
    /** Icon name */
    icon: { type: String, default: void 0 },
    /**
     * Icon size
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => config.getOption("icon.size")
    },
    /**
     * Overrides icon font size
     * @values Depends on library: null (smallest), fa-sm, fa-lg, fa-xl, mdi-18px, mdi-24px, mdi-36px, mdi-48px
     */
    customSize: { type: String, default: void 0 },
    /**
     * Add class to icon font.
     * See icon library documentation for custom classes.
     */
    customClass: { type: String, default: void 0 },
    /** When true makes icon clickable */
    clickable: { type: Boolean, default: false },
    /** Enable spin effect on icon */
    spin: { type: Boolean, default: false },
    /** Rotation 0-360 */
    rotation: { type: [Number, String], default: void 0 },
    /**
     * This is used internally
     * @ignore
     */
    both: { type: Boolean, default: false },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the icon when clickable */
    clickableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the element when spin */
    spinClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the icon size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the icon variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const rootStyle = vue.computed(() => {
      const style = {};
      if (props.rotation) {
        style["transform"] = `rotate(${props.rotation}deg)`;
      }
      return style;
    });
    const iconConfig = vue.computed(() => getIcons$1()[props.pack]);
    const iconPrefix = vue.computed(
      () => {
        var _a;
        return ((_a = iconConfig.value) == null ? void 0 : _a.iconPrefix) ? iconConfig.value.iconPrefix : "";
      }
    );
    const customSizeByPack = vue.computed(() => {
      var _a;
      if ((_a = iconConfig.value) == null ? void 0 : _a.sizes) {
        if (props.size && iconConfig.value.sizes[props.size] !== void 0) {
          return iconConfig.value.sizes[props.size];
        } else if (iconConfig.value.sizes.default) {
          return iconConfig.value.sizes.default;
        }
      }
      return null;
    });
    const computedIcon = vue.computed(
      () => `${iconPrefix.value}${getEquivalentIconOf(props.icon)}`
    );
    const computedSize = vue.computed(() => props.customSize || customSizeByPack.value);
    const computedVariant = vue.computed(() => {
      if (!props.variant)
        return;
      let newVariant = "";
      if (typeof props.variant === "string") {
        newVariant = props.variant;
      } else {
        newVariant = Object.keys(props.variant).filter(
          (key) => props.variant[key]
        )[0];
      }
      return newVariant;
    });
    function getEquivalentIconOf(value) {
      var _a, _b;
      if (!props.both)
        return value;
      if (((_a = iconConfig.value) == null ? void 0 : _a.internalIcons) && ((_b = iconConfig.value) == null ? void 0 : _b.internalIcons[value]))
        return iconConfig.value.internalIcons[value];
      return value;
    }
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-icon"],
      [
        "clickableClass",
        "o-icon--clickable",
        null,
        vue.computed(() => props.clickable)
      ],
      ["spinClass", "o-icon--spin", null, vue.computed(() => props.spin)],
      [
        "sizeClass",
        "o-icon--",
        vue.computed(() => props.size),
        vue.computed(() => !!props.size)
      ],
      [
        "variantClass",
        "o-icon--",
        computedVariant,
        vue.computed(() => !!computedVariant.value)
      ]
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(vue.unref(rootClasses)),
        "data-oruga": "icon",
        style: vue.normalizeStyle(rootStyle.value)
      }, [
        __props.component ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.component), {
          key: 0,
          icon: [__props.pack, computedIcon.value],
          size: computedSize.value,
          class: vue.normalizeClass([__props.customClass])
        }, null, 8, ["icon", "size", "class"])) : (vue.openBlock(), vue.createElementBlock("i", {
          key: 1,
          class: vue.normalizeClass([__props.pack, computedIcon.value, computedSize.value, __props.customClass])
        }, null, 2))
      ], 6);
    };
  }
});
exports._sfc_main = _sfc_main;
//# sourceMappingURL=Icon.vue_vue_type_script_setup_true_lang-CGDJNR6y.cjs.map
