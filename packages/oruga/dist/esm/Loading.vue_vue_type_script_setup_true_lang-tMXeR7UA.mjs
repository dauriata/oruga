/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, ref, onMounted, openBlock, createBlock, Transition, withCtx, unref, createElementBlock, normalizeClass, createElementVNode, renderSlot, createVNode, toDisplayString, createCommentVNode } from "vue";
import { _ as _sfc_main$1 } from "./Icon.vue_vue_type_script_setup_true_lang-BfJM6xYp.mjs";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { a as usePropBinding } from "./usePropValue-DLZTRe_e.mjs";
import { u as useProgrammaticComponent } from "./useProgrammatic-DM-iIXR9.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      default: () => getOption("loading.animation", "fade")
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
      default: () => getOption("loading.icon", "loading")
    },
    /** Enable spin effect on icon */
    iconSpin: {
      type: Boolean,
      default: () => getOption("loading.iconSpin", true)
    },
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
      type: String,
      default: () => getOption("loading.iconSize", "medium")
    },
    /**
     * DOM element where the loading component will be created on (for programmatic usage).
     * Note that this also changes fullPage to false.
     */
    container: {
      type: [Object, String],
      default: () => getOption("loading.container", "body")
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
    const rootRef = ref();
    const displayInFullPage = usePropBinding("fullPage", props, emits);
    const { isActive, close, cancel } = useProgrammaticComponent(
      rootRef,
      props,
      emits,
      {
        cancelOptions: ["escape", "outside"]
      }
    );
    onMounted(() => {
      if (props.programmatic && props.container)
        displayInFullPage.value = false;
    });
    const rootClasses = defineClasses(
      ["rootClass", "o-load"],
      ["fullPageClass", "o-load--fullpage", null, displayInFullPage]
    );
    const overlayClasses = defineClasses(["overlayClass", "o-load__overlay"]);
    const iconClasses = defineClasses(["iconClass", "o-load__icon"]);
    const labelClasses = defineClasses(["labelClass", "o-load__label"]);
    __expose({ close, promise: props.promise });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: __props.animation }, {
        default: withCtx(() => [
          unref(isActive) ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "rootRef",
            ref: rootRef,
            "data-oruga": "loading",
            role: "dialog",
            class: normalizeClass(unref(rootClasses))
          }, [
            createElementVNode("div", {
              class: normalizeClass(unref(overlayClasses)),
              tabindex: -1,
              "aria-hidden": "true",
              onClick: _cache[0] || (_cache[0] = ($event) => unref(cancel)("outside"))
            }, null, 2),
            renderSlot(_ctx.$slots, "default", { close: unref(close) }, () => [
              createVNode(_sfc_main$1, {
                icon: __props.icon,
                spin: __props.iconSpin,
                size: __props.iconSize,
                class: normalizeClass(unref(iconClasses)),
                both: ""
              }, null, 8, ["icon", "spin", "size", "class"]),
              __props.label ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(unref(labelClasses))
              }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
            ])
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Loading.vue_vue_type_script_setup_true_lang-tMXeR7UA.mjs.map
