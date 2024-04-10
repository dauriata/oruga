"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const Icon_vue_vue_type_script_setup_true_lang = require("./Icon.vue_vue_type_script_setup_true_lang-CGDJNR6y.cjs");
const config = require("./config-JkCO4AEi.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const usePropValue = require("./usePropValue-CHGN8et-.cjs");
const useProgrammatic = require("./useProgrammatic-CV--sv7g.cjs");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OLoading",
    configField: "loading",
    inheritAttrs: false
  },
  __name: "Loading",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether loading is active or not, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: false },
    /** Loader will overlay the full page. */
    fullPage: { type: Boolean, default: true },
    /** Notification label, unnecessary when default slot is used. */
    label: { type: String, default: void 0 },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => config.getOption("loading.animation", "fade")
    },
    /** Is Loading cancable by pressing escape or clicking outside. */
    cancelable: { type: Boolean, default: false },
    /** Callback function to call after user canceled (pressed escape / clicked outside). */
    onCancel: { type: Function, default: () => {
    } },
    /** Callback function to call after close (programmatically close or user canceled). */
    onClose: { type: Function, default: () => {
    } },
    /** Icon name to show, unnecessary when default slot is used. */
    icon: {
      type: String,
      default: () => config.getOption("loading.icon", "loading")
    },
    /** Enable spin effect on icon */
    iconSpin: {
      type: Boolean,
      default: () => config.getOption("loading.iconSpin", true)
    },
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
      type: String,
      default: () => config.getOption("loading.iconSize", "medium")
    },
    /**
     * DOM element where the loading component will be created on (for programmatic usage).
     * Note that this also changes fullPage to false.
     */
    container: {
      type: [Object, String],
      default: () => config.getOption("loading.container", "body")
    },
    /**
     * This is used internally for programmatic usage
     * @ignore
     */
    programmatic: {
      type: Object,
      default: void 0
    },
    /**
     * This is used internally for programmatic usage.
     * @ignore
     */
    promise: { type: Promise, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the root element when fullpage */
    fullPageClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the loading overlay */
    overlayClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the loading icon */
    iconClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the loading label */
    labelClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:active", "update:fullPage", "close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootRef = vue.ref();
    const displayInFullPage = usePropValue.usePropBinding("fullPage", props, emits);
    const { isActive, close, cancel } = useProgrammatic.useProgrammaticComponent(
      rootRef,
      props,
      emits,
      {
        cancelOptions: ["escape", "outside"]
      }
    );
    vue.onMounted(() => {
      if (props.programmatic && props.container)
        displayInFullPage.value = false;
    });
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-load"],
      ["fullPageClass", "o-load--fullpage", null, displayInFullPage]
    );
    const overlayClasses = defineClasses.defineClasses(["overlayClass", "o-load__overlay"]);
    const iconClasses = defineClasses.defineClasses(["iconClass", "o-load__icon"]);
    const labelClasses = defineClasses.defineClasses(["labelClass", "o-load__label"]);
    __expose({ close, promise: props.promise });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, { name: __props.animation }, {
        default: vue.withCtx(() => [
          vue.unref(isActive) ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            ref_key: "rootRef",
            ref: rootRef,
            "data-oruga": "loading",
            role: "dialog",
            class: vue.normalizeClass(vue.unref(rootClasses))
          }, [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(vue.unref(overlayClasses)),
              tabindex: -1,
              "aria-hidden": "true",
              onClick: _cache[0] || (_cache[0] = ($event) => vue.unref(cancel)("outside"))
            }, null, 2),
            vue.renderSlot(_ctx.$slots, "default", { close: vue.unref(close) }, () => [
              vue.createVNode(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
                icon: __props.icon,
                spin: __props.iconSpin,
                size: __props.iconSize,
                class: vue.normalizeClass(vue.unref(iconClasses)),
                both: ""
              }, null, 8, ["icon", "spin", "size", "class"]),
              __props.label ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 0,
                class: vue.normalizeClass(vue.unref(labelClasses))
              }, vue.toDisplayString(__props.label), 3)) : vue.createCommentVNode("", true)
            ])
          ], 2)) : vue.createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
exports._sfc_main = _sfc_main;
//# sourceMappingURL=Loading.vue_vue_type_script_setup_true_lang-CBsJmoJ6.cjs.map
