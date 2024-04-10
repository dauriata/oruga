/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createBlock, resolveDynamicComponent } from "vue";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { merge } from "./helpers.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
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
  const iconComponent = getOption("iconComponent");
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
  const customIconPacks = getOption("customIconPacks");
  if (customIconPacks)
    icons = merge(icons, customIconPacks, true);
  return icons;
};
const getIcons$1 = getIcons;
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      default: () => getOption("iconComponent")
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    pack: {
      type: String,
      default: () => getOption("iconPack", "mdi")
    },
    /**
     * 	Color of the icon
     *  @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => getOption("icon.variant")
    },
    /** Icon name */
    icon: { type: String, default: void 0 },
    /**
     * Icon size
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => getOption("icon.size")
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
    const rootStyle = computed(() => {
      const style = {};
      if (props.rotation) {
        style["transform"] = `rotate(${props.rotation}deg)`;
      }
      return style;
    });
    const iconConfig = computed(() => getIcons$1()[props.pack]);
    const iconPrefix = computed(
      () => {
        var _a;
        return ((_a = iconConfig.value) == null ? void 0 : _a.iconPrefix) ? iconConfig.value.iconPrefix : "";
      }
    );
    const customSizeByPack = computed(() => {
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
    const computedIcon = computed(
      () => `${iconPrefix.value}${getEquivalentIconOf(props.icon)}`
    );
    const computedSize = computed(() => props.customSize || customSizeByPack.value);
    const computedVariant = computed(() => {
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
    const rootClasses = defineClasses(
      ["rootClass", "o-icon"],
      [
        "clickableClass",
        "o-icon--clickable",
        null,
        computed(() => props.clickable)
      ],
      ["spinClass", "o-icon--spin", null, computed(() => props.spin)],
      [
        "sizeClass",
        "o-icon--",
        computed(() => props.size),
        computed(() => !!props.size)
      ],
      [
        "variantClass",
        "o-icon--",
        computedVariant,
        computed(() => !!computedVariant.value)
      ]
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(rootClasses)),
        "data-oruga": "icon",
        style: normalizeStyle(rootStyle.value)
      }, [
        __props.component ? (openBlock(), createBlock(resolveDynamicComponent(__props.component), {
          key: 0,
          icon: [__props.pack, computedIcon.value],
          size: computedSize.value,
          class: normalizeClass([__props.customClass])
        }, null, 8, ["icon", "size", "class"])) : (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass([__props.pack, computedIcon.value, computedSize.value, __props.customClass])
        }, null, 2))
      ], 6);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Icon.vue_vue_type_script_setup_true_lang-BfJM6xYp.mjs.map
