/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, watch, ref, computed, openBlock, createElementBlock, normalizeClass, unref, createVNode, withCtx, Transition, withDirectives, createElementVNode, renderSlot, createTextVNode, toDisplayString, vShow, createBlock, resolveDynamicComponent, nextTick } from "vue";
import { _ as _sfc_main$1 } from "./PositionWrapper.vue_vue_type_script_setup_true_lang-D14-2-mO.mjs";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { i as isClient } from "./ssr-BIBU2UWo.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { a as usePropBinding } from "./usePropValue-DLZTRe_e.mjs";
import { u as useEventListener } from "./useEventListener-B3_nr73L.mjs";
import { u as useClickOutside } from "./useClickOutside-BFumA2Sw.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OTooltip",
    configField: "tooltip"
  },
  __name: "Tooltip",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether tooltip is active or not, use v-model:active to make it two-way binding */
    active: { type: Boolean, default: false },
    /** Tooltip text, unnecessary when content slot is used */
    label: { type: String, default: void 0 },
    /**
     * Color of the tooltip
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => getOption("tooltip.variant")
    },
    /**
     * Position of the Tooltip relative to the trigger
     * @values auto, top, bottom, left, right, top-right, top-left, bottom-left, bottom-right
     */
    position: {
      type: String,
      default: () => getOption("tooltip.position", "auto"),
      validator: (value) => [
        "auto",
        "top",
        "bottom",
        "left",
        "right",
        "top-right",
        "top-left",
        "bottom-left",
        "bottom-right"
      ].indexOf(value) > -1
    },
    /** Tooltip will be always active */
    always: { type: Boolean, default: false },
    /** Tooltip will be disabled */
    disabled: { type: Boolean, default: false },
    /** Tooltip default animation */
    animation: {
      type: String,
      default: () => getOption("tooltip.animation", "fade")
    },
    /** Tooltip will be multilined */
    multiline: { type: Boolean, default: false },
    /** Tooltip trigger tag name */
    triggerTag: {
      type: [String, Object, Function],
      default: () => getOption("tooltip.triggerTag", "div")
    },
    /**
     * Tooltip trigger events
     * @values hover, click, focus, contextmenu
     */
    triggers: {
      type: Array,
      default: () => getOption("tooltip.triggers", ["hover"]),
      validator: (values) => values.filter(
        (value) => ["click", "hover", "contextmenu", "focus"].indexOf(value) > -1
      ).length === values.length
    },
    /** Tooltip delay before it appears (number in ms) */
    delay: { type: Number, default: void 0 },
    /**
     * Tooltip auto close options (pressing escape, clicking the content or outside)
     * @values true, false, content, outside, escape
     */
    closeable: {
      type: [Array, Boolean],
      default: () => getOption("tooltip.closeable", ["escape", "outside", "content"])
    },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => getOption("dropdown.teleport", false)
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when the dropdown is teleported */
    teleportClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip content */
    contentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip trigger position */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip trigger */
    triggerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip content when is multiline */
    multilineClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip trigger when is always visible */
    alwaysClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip arrow */
    arrowClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip arrow position */
    arrowPositionClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:active", "close", "open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const isActive = usePropBinding("active", props, emits, {
      passive: true
    });
    watch(isActive, (value) => {
      if (value)
        emits("open");
      else
        emits("close");
    });
    const timer = ref();
    const autoPosition = ref(props.position);
    watch(
      () => props.position,
      (v) => autoPosition.value = v
    );
    const contentRef = ref();
    const triggerRef = ref();
    const eventCleanups = ref([]);
    watch(isActive, (value) => {
      if (value && isClient) {
        setTimeout(() => {
          if (cancelOptions.value.indexOf("outside") >= 0) {
            eventCleanups.value.push(
              useClickOutside(contentRef, onClickedOutside, [triggerRef])
            );
          }
          if (cancelOptions.value.indexOf("escape") >= 0) {
            eventCleanups.value.push(
              useEventListener("keyup", onKeyPress, document, {
                immediate: true
              })
            );
          }
        });
      } else if (!value) {
        eventCleanups.value.forEach((fn) => fn());
        eventCleanups.value.length = 0;
      }
    });
    const cancelOptions = computed(
      () => typeof props.closeable === "boolean" ? props.closeable ? ["escape", "outside", "content"] : [] : props.closeable
    );
    function onClickedOutside() {
      if (!isActive.value || props.always)
        return;
      if (cancelOptions.value.indexOf("outside") < 0)
        return;
      isActive.value = false;
    }
    function onKeyPress(event) {
      if (isActive.value && (event.key === "Escape" || event.key === "Esc")) {
        if (cancelOptions.value.indexOf("escape") < 0)
          return;
        isActive.value = false;
      }
    }
    function onClick() {
      if (props.triggers.indexOf("click") < 0)
        return;
      nextTick(() => setTimeout(() => open()));
    }
    function onContextMenu(event) {
      if (props.triggers.indexOf("contextmenu") < 0)
        return;
      event.preventDefault();
      open();
    }
    function onFocus() {
      if (props.triggers.indexOf("focus") < 0)
        return;
      open();
    }
    function onHover() {
      if (props.triggers.indexOf("hover") < 0)
        return;
      open();
    }
    function open() {
      if (props.disabled)
        return;
      if (props.delay) {
        timer.value = setTimeout(() => {
          isActive.value = true;
          timer.value = null;
        }, props.delay);
      } else {
        isActive.value = true;
      }
    }
    function onClose() {
      if (cancelOptions.value.indexOf("content") < 0)
        return;
      isActive.value = !props.closeable;
      if (timer.value && props.closeable)
        clearTimeout(timer.value);
    }
    const rootClasses = defineClasses(
      ["rootClass", "o-tip"],
      [
        "teleportClass",
        "o-tip--teleport",
        null,
        computed(() => !!props.teleport)
      ]
    );
    const triggerClasses = defineClasses(["triggerClass", "o-tip__trigger"]);
    const arrowClasses = defineClasses(
      ["arrowClass", "o-tip__arrow"],
      [
        "arrowPositionClass",
        "o-tip__arrow--",
        autoPosition,
        computed(() => !!autoPosition.value)
      ],
      [
        "variantArrowClass",
        "o-tip__arrow--",
        computed(() => props.variant),
        computed(() => !!props.variant)
      ]
    );
    const contentClasses = defineClasses(
      ["contentClass", "o-tip__content"],
      [
        "positionClass",
        "o-tip__content--",
        autoPosition,
        computed(() => !!autoPosition.value)
      ],
      [
        "variantClass",
        "o-tip__content--",
        computed(() => props.variant),
        computed(() => !!props.variant)
      ],
      [
        "multilineClass",
        "o-tip__content--multiline",
        null,
        computed(() => props.multiline)
      ],
      [
        "alwaysClass",
        "o-tip__content--always",
        null,
        computed(() => props.always)
      ]
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootClasses)),
        "data-oruga": "tooltip"
      }, [
        createVNode(_sfc_main$1, {
          position: autoPosition.value,
          "onUpdate:position": _cache[0] || (_cache[0] = ($event) => autoPosition.value = $event),
          teleport: __props.teleport,
          class: normalizeClass(unref(rootClasses)),
          trigger: triggerRef.value,
          "default-position": "top",
          disabled: !unref(isActive)
        }, {
          default: withCtx(({ setContent }) => [
            createVNode(Transition, { name: __props.animation }, {
              default: withCtx(() => [
                withDirectives(createElementVNode("div", {
                  ref: (el) => contentRef.value = setContent(el),
                  class: normalizeClass(unref(contentClasses))
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(unref(arrowClasses))
                  }, null, 2),
                  renderSlot(_ctx.$slots, "content", {}, () => [
                    createTextVNode(toDisplayString(__props.label), 1)
                  ])
                ], 2), [
                  [vShow, unref(isActive) || __props.always && !__props.disabled]
                ])
              ]),
              _: 2
            }, 1032, ["name"])
          ]),
          _: 3
        }, 8, ["position", "teleport", "class", "trigger", "disabled"]),
        (openBlock(), createBlock(resolveDynamicComponent(__props.triggerTag), {
          ref_key: "triggerRef",
          ref: triggerRef,
          class: normalizeClass(unref(triggerClasses)),
          "aria-haspopup": "true",
          onClick,
          onContextmenu: onContextMenu,
          onMouseenter: onHover,
          onFocusCapture: onFocus,
          onBlurCapture: onClose,
          onMouseleave: onClose
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", { active: unref(isActive) })
          ]),
          _: 3
        }, 40, ["class"]))
      ], 2);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Tooltip.vue_vue_type_script_setup_true_lang-Bw2K4plP.mjs.map
