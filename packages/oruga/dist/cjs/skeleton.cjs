"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const config = require("./config-JkCO4AEi.cjs");
const helpers = require("./helpers.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OSkeleton",
    configField: "skeleton"
  },
  __name: "Skeleton",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Show or hide loader	 */
    active: { type: Boolean, default: true },
    /** Show a loading animation */
    animated: {
      type: Boolean,
      default: () => config.getOption("skeleton.animated", true)
    },
    /** Custom width */
    width: { type: [Number, String], default: void 0 },
    /** Custom height */
    height: { type: [Number, String], default: void 0 },
    /** Show a circle shape */
    circle: { type: Boolean, default: false },
    /** Enable rounded style */
    rounded: {
      type: Boolean,
      default: () => config.getOption("skeleton.rounded", true)
    },
    /** Number of shapes to display */
    count: { type: Number, default: 1 },
    /**
     * Size of skeleton
     * @values small, medium, large
     */
    size: { type: String, default: void 0 },
    /**
     * Skeleton position in relation to the element
     * @values left, centered, right
     */
    position: {
      type: String,
      default: "left",
      validator: (value) => ["left", "centered", "right"].indexOf(value) > -1
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the skeleton animation */
    animationClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the skeleton position */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the skeleton item */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the skeleton item rounded */
    itemRoundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the skeleton size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const itemStyle = vue.computed(() => ({
      height: helpers.toCssDimension(props.height),
      width: helpers.toCssDimension(props.width),
      borderRadius: props.circle ? "50%" : null
    }));
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-sklt"],
      [
        "positionClass",
        "o-sklt--",
        vue.computed(() => props.position),
        vue.computed(() => !!props.position)
      ]
    );
    const itemClasses = defineClasses.defineClasses(
      ["itemClass", "o-sklt__item"],
      [
        "itemRoundedClass",
        "o-sklt__item--rounded",
        null,
        vue.computed(() => props.rounded)
      ],
      [
        "animationClass",
        "o-sklt__item--animated",
        null,
        vue.computed(() => props.animated)
      ],
      [
        "sizeClass",
        "o-sklt__item--",
        vue.computed(() => props.size),
        vue.computed(() => !!props.size)
      ]
    );
    return (_ctx, _cache) => {
      return __props.active ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        "data-oruga": "skeleton",
        class: vue.normalizeClass(vue.unref(rootClasses))
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.count, (i) => {
          return vue.openBlock(), vue.createElementBlock("div", {
            key: i,
            class: vue.normalizeClass(vue.unref(itemClasses)),
            style: vue.normalizeStyle(itemStyle.value)
          }, null, 6);
        }), 128))
      ], 2)) : vue.createCommentVNode("", true);
    };
  }
});
const index = {
  install(app) {
    config.registerComponent(app, _sfc_main);
  }
};
exports.OSkeleton = _sfc_main;
exports.default = index;
//# sourceMappingURL=skeleton.cjs.map
