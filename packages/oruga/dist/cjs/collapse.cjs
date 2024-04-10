"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const config = require("./config-JkCO4AEi.cjs");
const helpers = require("./helpers.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const usePropValue = require("./usePropValue-CHGN8et-.cjs");
const _hoisted_1 = ["id"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OCollapse",
    configField: "collapse"
  },
  __name: "Collapse",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether collapse is open or not, use v-model:open to make it two-way binding */
    open: { type: Boolean, default: true },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => config.getOption("collapse.animation", "fade")
    },
    /** Id property of the content container */
    contentId: { type: String, default: () => helpers.uuid() },
    /**
     * Trigger position
     * @values top, bottom
     */
    position: {
      type: String,
      default: () => config.getOption("collapse.position", "top"),
      validator: (value) => ["top", "bottom"].indexOf(value) > -1
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the trigger element */
    triggerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the content */
    contentClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:open", "open", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const isOpen = usePropValue.usePropBinding("open", props, emits, { passive: true });
    function toggle() {
      isOpen.value = !isOpen.value;
      isOpen.value ? emits("open") : emits("close");
    }
    const rootClasses = defineClasses.defineClasses(["rootClass", "o-clps"]);
    const triggerClasses = defineClasses.defineClasses(["triggerClass", "o-clps__trigger"]);
    const contentClasses = defineClasses.defineClasses(["contentClass", "o-clps__content"]);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(rootClasses)),
        "data-oruga": "collapse"
      }, [
        __props.position === "top" ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(vue.unref(triggerClasses)),
          role: "button",
          tabindex: "0",
          onClick: toggle,
          onKeydown: vue.withKeys(toggle, ["enter"])
        }, [
          vue.renderSlot(_ctx.$slots, "trigger", { open: vue.unref(isOpen) })
        ], 34)) : vue.createCommentVNode("", true),
        vue.createVNode(vue.Transition, { name: __props.animation }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              id: __props.contentId,
              class: vue.normalizeClass(vue.unref(contentClasses))
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 10, _hoisted_1), [
              [vue.vShow, vue.unref(isOpen)]
            ])
          ]),
          _: 3
        }, 8, ["name"]),
        __props.position === "bottom" ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: vue.normalizeClass(vue.unref(triggerClasses)),
          role: "button",
          tabindex: "0",
          onClick: toggle,
          onKeydown: vue.withKeys(toggle, ["enter"])
        }, [
          vue.renderSlot(_ctx.$slots, "trigger", { open: vue.unref(isOpen) })
        ], 34)) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
const index = {
  install(app) {
    config.registerComponent(app, _sfc_main);
  }
};
exports.OCollapse = _sfc_main;
exports.default = index;
//# sourceMappingURL=collapse.cjs.map
