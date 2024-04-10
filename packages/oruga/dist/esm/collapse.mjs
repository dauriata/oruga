/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, withKeys, renderSlot, createCommentVNode, createVNode, Transition, withCtx, withDirectives, createElementVNode, vShow } from "vue";
import { g as getOption, b as registerComponent } from "./config-zKhnAIV0.mjs";
import { uuid } from "./helpers.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { a as usePropBinding } from "./usePropValue-DLZTRe_e.mjs";
const _hoisted_1 = ["id"];
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      default: () => getOption("collapse.animation", "fade")
    },
    /** Id property of the content container */
    contentId: { type: String, default: () => uuid() },
    /**
     * Trigger position
     * @values top, bottom
     */
    position: {
      type: String,
      default: () => getOption("collapse.position", "top"),
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
    const isOpen = usePropBinding("open", props, emits, { passive: true });
    function toggle() {
      isOpen.value = !isOpen.value;
      isOpen.value ? emits("open") : emits("close");
    }
    const rootClasses = defineClasses(["rootClass", "o-clps"]);
    const triggerClasses = defineClasses(["triggerClass", "o-clps__trigger"]);
    const contentClasses = defineClasses(["contentClass", "o-clps__content"]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootClasses)),
        "data-oruga": "collapse"
      }, [
        __props.position === "top" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(triggerClasses)),
          role: "button",
          tabindex: "0",
          onClick: toggle,
          onKeydown: withKeys(toggle, ["enter"])
        }, [
          renderSlot(_ctx.$slots, "trigger", { open: unref(isOpen) })
        ], 34)) : createCommentVNode("", true),
        createVNode(Transition, { name: __props.animation }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              id: __props.contentId,
              class: normalizeClass(unref(contentClasses))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 10, _hoisted_1), [
              [vShow, unref(isOpen)]
            ])
          ]),
          _: 3
        }, 8, ["name"]),
        __props.position === "bottom" ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(triggerClasses)),
          role: "button",
          tabindex: "0",
          onClick: toggle,
          onKeydown: withKeys(toggle, ["enter"])
        }, [
          renderSlot(_ctx.$slots, "trigger", { open: unref(isOpen) })
        ], 34)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const index = {
  install(app) {
    registerComponent(app, _sfc_main);
  }
};
export {
  _sfc_main as OCollapse,
  index as default
};
//# sourceMappingURL=collapse.mjs.map
