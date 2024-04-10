/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, Fragment, renderList, normalizeStyle, createCommentVNode } from "vue";
import { g as getOption, b as registerComponent } from "./config-zKhnAIV0.mjs";
import { toCssDimension } from "./helpers.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      default: () => getOption("skeleton.animated", true)
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
      default: () => getOption("skeleton.rounded", true)
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
    const itemStyle = computed(() => ({
      height: toCssDimension(props.height),
      width: toCssDimension(props.width),
      borderRadius: props.circle ? "50%" : null
    }));
    const rootClasses = defineClasses(
      ["rootClass", "o-sklt"],
      [
        "positionClass",
        "o-sklt--",
        computed(() => props.position),
        computed(() => !!props.position)
      ]
    );
    const itemClasses = defineClasses(
      ["itemClass", "o-sklt__item"],
      [
        "itemRoundedClass",
        "o-sklt__item--rounded",
        null,
        computed(() => props.rounded)
      ],
      [
        "animationClass",
        "o-sklt__item--animated",
        null,
        computed(() => props.animated)
      ],
      [
        "sizeClass",
        "o-sklt__item--",
        computed(() => props.size),
        computed(() => !!props.size)
      ]
    );
    return (_ctx, _cache) => {
      return __props.active ? (openBlock(), createElementBlock("div", {
        key: 0,
        "data-oruga": "skeleton",
        class: normalizeClass(unref(rootClasses))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.count, (i) => {
          return openBlock(), createElementBlock("div", {
            key: i,
            class: normalizeClass(unref(itemClasses)),
            style: normalizeStyle(itemStyle.value)
          }, null, 6);
        }), 128))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const index = {
  install(app) {
    registerComponent(app, _sfc_main);
  }
};
export {
  _sfc_main as OSkeleton,
  index as default
};
//# sourceMappingURL=skeleton.mjs.map
