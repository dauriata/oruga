/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, ref, computed, watch, nextTick, onBeforeUnmount, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, withDirectives, createElementBlock, mergeProps, unref, createElementVNode, normalizeClass, normalizeStyle, resolveDynamicComponent, toHandlers, renderSlot, toDisplayString, createCommentVNode, vShow, render } from "vue";
import { _ as _sfc_main$1 } from "./Icon.vue_vue_type_script_setup_true_lang-BfJM6xYp.mjs";
import { v as vTrapFocus } from "./trapFocus-BXmCENX1.mjs";
import { g as getOption, V as VueInstance, b as registerComponent, a as registerComponentProgrammatic } from "./config-zKhnAIV0.mjs";
import { removeElement, toCssDimension, merge } from "./helpers.mjs";
import { i as isClient } from "./ssr-BIBU2UWo.mjs";
import { d as defineClasses, g as getActiveClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useMatchMedia } from "./useMatchMedia-G3BPCbzR.mjs";
import { u as useProgrammaticComponent } from "./useProgrammatic-DM-iIXR9.mjs";
import { I as InstanceRegistry } from "./InstanceRegistry-CnSXgFAg.mjs";
const _hoisted_1 = ["role", "aria-label", "aria-modal"];
const _hoisted_2 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OModal",
    configField: "modal",
    inheritAttrs: false
  },
  __name: "Modal",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether modal is active or not, use v-model:active to make it two-way binding */
    active: { type: Boolean, default: false },
    /** Display modal as full screen */
    fullScreen: { type: Boolean, default: false },
    /** Text content, unnecessary when default slot is used */
    content: { type: String, default: void 0 },
    /** Width of the Modal */
    width: {
      type: [String, Number],
      default: () => getOption("modal.width", 960)
    },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => getOption("modal.animation", "zoom-out")
    },
    /**
     * Is Modal cancleable by clicking 'X', pressing escape or clicking outside
     * @values escape, x, outside, button, true, false
     */
    cancelable: {
      type: [Array, Boolean],
      default: () => getOption("modal.cancelable", ["escape", "x", "outside", "button"])
    },
    /** Callback function to call after user canceled (clicked 'X' / pressed escape / clicked outside) */
    onCancel: { type: Function, default: () => {
    } },
    /** Callback function to call after close (programmatically close or user canceled) */
    onClose: { type: Function, default: () => {
    } },
    /**
     * Use `clip` to remove the body scrollbar, `keep` to have a non scrollable scrollbar to avoid shifting background,
     * but will set body to position fixed, might break some layouts.
     * @values keep, clip
     */
    scroll: {
      type: String,
      default: () => getOption("modal.scroll", "keep"),
      validator: (value) => ["keep", "clip"].indexOf(value) >= 0
    },
    /** Trap focus inside the modal */
    trapFocus: {
      type: Boolean,
      default: () => getOption("modal.trapFocus", true)
    },
    /**
     * Role attribute to be passed to the div wrapper for better accessibility.
     * @values dialog, alertdialog
     */
    ariaRole: {
      type: String,
      default: () => getOption("modal.ariaRole"),
      validator: (value) => ["dialog", "alertdialog"].indexOf(value) >= 0
    },
    /** Accessibility aria-label to be passed to the div wrapper element */
    ariaLabel: { type: String, default: () => getOption("modal.ariaLabel") },
    /** Destroy modal on hide */
    destroyOnHide: {
      type: Boolean,
      default: () => getOption("modal.destroyOnHide", false)
    },
    /** Automatically focus modal when active */
    autoFocus: {
      type: Boolean,
      default: () => getOption("modal.autoFocus", true)
    },
    /** Close icon name */
    closeIcon: {
      type: String,
      default: () => getOption("modal.closeIcon", "close")
    },
    /**
     * Size of close icon
     * @values small, medium, large
     */
    closeIconSize: {
      type: String,
      default: () => getOption("modal.closeIconSize", "medium")
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => getOption("modal.mobileBreakpoint")
    },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => getOption("modal.teleport", false)
    },
    /**
     * Component to be injected, used to open a component modal programmatically.
     * Close modal within the component by emitting a 'close' event — emits('close')
     */
    component: {
      type: [Object, Function],
      default: void 0
    },
    /** Props to be binded to the injected component */
    props: { type: Object, default: void 0 },
    /** Events to be binded to the injected component */
    events: { type: Object, default: () => ({}) },
    /** DOM element where the modal component will be created on (for programmatic usage) */
    container: {
      type: [Object, String],
      default: () => getOption("modal.container", "body")
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
     * This is used internally for programmatic usage
     * @ignore
     */
    promise: { type: Promise, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of modal component when its active */
    activeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the modal overlay */
    overlayClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the modal content */
    contentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the close button */
    closeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the modal when fullscreen */
    fullScreenClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of modal component when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the modal when scroll is clip */
    scrollClipClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the modal when scroll is not clip */
    noScrollClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:active", "close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootRef = ref();
    const { isActive, close, cancel } = useProgrammaticComponent(
      rootRef,
      props,
      emits,
      {
        destroyOnHide: props.destroyOnHide,
        cancelOptions: getOption("modal.cancelable", [
          "escape",
          "x",
          "outside",
          "button"
        ])
      }
    );
    const { isMobile } = useMatchMedia(props.mobileBreakpoint);
    const _teleport = computed(
      () => typeof props.teleport === "boolean" ? { to: "body", disabled: !props.teleport } : { to: props.teleport, disabled: false }
    );
    const savedScrollTop = ref(null);
    const isAnimating = ref(!props.active);
    watch(isActive, (value) => {
      handleScroll();
      if (value && rootRef.value && props.autoFocus)
        nextTick(() => rootRef.value.focus());
      if (!value && props.destroyOnHide)
        setTimeout(() => removeElement(rootRef.value));
    });
    const showX = computed(
      () => Array.isArray(props.cancelable) ? props.cancelable.indexOf("x") >= 0 : props.cancelable
    );
    const customStyle = computed(
      () => !props.fullScreen ? { maxWidth: toCssDimension(props.width) } : null
    );
    onBeforeUnmount(() => {
      if (isClient) {
        const scrollto = savedScrollTop.value ? savedScrollTop.value : document.documentElement.scrollTop;
        if (scrollClass.value) {
          document.body.classList.remove(...scrollClass.value);
          document.documentElement.classList.remove(...scrollClass.value);
        }
        document.documentElement.scrollTop = scrollto;
        document.body.style.top = null;
      }
    });
    function handleScroll() {
      if (!isClient)
        return;
      if (props.scroll === "clip") {
        if (scrollClass.value) {
          if (isActive.value)
            document.documentElement.classList.add(...scrollClass.value);
          else
            document.documentElement.classList.remove(...scrollClass.value);
        }
        return;
      }
      savedScrollTop.value = savedScrollTop.value ? savedScrollTop.value : document.documentElement.scrollTop;
      if (scrollClass.value) {
        if (isActive.value)
          document.body.classList.add(...scrollClass.value);
        else
          document.body.classList.remove(...scrollClass.value);
      }
      if (isActive.value) {
        document.body.style.top = `-${savedScrollTop.value}px`;
        return;
      }
      document.documentElement.scrollTop = savedScrollTop.value;
      document.body.style.top = null;
      savedScrollTop.value = null;
    }
    function afterEnter() {
      isAnimating.value = false;
    }
    function beforeLeave() {
      isAnimating.value = true;
    }
    const rootClasses = defineClasses(
      ["rootClass", "o-modal"],
      ["mobileClass", "o-modal--mobile", null, isMobile],
      ["activeClass", "o-modal--active", null, isActive]
    );
    const overlayClasses = defineClasses(["overlayClass", "o-modal__overlay"]);
    const contentClasses = defineClasses(
      ["contentClass", "o-modal__content"],
      [
        "fullScreenClass",
        "o-modal__content--full-screen",
        null,
        computed(() => props.fullScreen)
      ]
    );
    const closeClasses = defineClasses(["closeClass", "o-modal__close"]);
    const scrollClasses = defineClasses(["scrollClipClass", "o-clipped"]);
    const noScrollClasses = defineClasses(["noScrollClass", "o-noscroll"]);
    const scrollClass = computed(
      () => getActiveClasses(
        props.scroll === "clip" ? scrollClasses.value : noScrollClasses.value
      )
    );
    scrollClass.value;
    __expose({ close, promise: props.promise });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: _teleport.value.to,
        disabled: _teleport.value.disabled
      }, [
        createVNode(Transition, {
          name: __props.animation,
          onAfterEnter: afterEnter,
          onBeforeLeave: beforeLeave
        }, {
          default: withCtx(() => [
            withDirectives((openBlock(), createElementBlock("div", mergeProps(_ctx.$attrs, {
              ref_key: "rootRef",
              ref: rootRef,
              "data-oruga": "modal",
              class: unref(rootClasses),
              tabindex: -1,
              role: __props.ariaRole,
              "aria-label": __props.ariaLabel,
              "aria-modal": unref(isActive)
            }), [
              createElementVNode("div", {
                class: normalizeClass(unref(overlayClasses)),
                tabindex: "-1",
                "aria-hidden": "true",
                onClick: _cache[0] || (_cache[0] = ($event) => unref(cancel)("outside"))
              }, null, 2),
              createElementVNode("div", {
                class: normalizeClass(unref(contentClasses)),
                style: normalizeStyle(customStyle.value)
              }, [
                __props.component ? (openBlock(), createBlock(resolveDynamicComponent(__props.component), mergeProps({ key: 0 }, _ctx.$props.props, toHandlers(_ctx.$props.events), { onClose: unref(close) }), null, 16, ["onClose"])) : renderSlot(_ctx.$slots, "default", {
                  key: 1,
                  close: unref(close)
                }, () => [
                  __props.content ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(__props.content), 1)) : createCommentVNode("", true)
                ]),
                showX.value ? withDirectives((openBlock(), createBlock(_sfc_main$1, {
                  key: 2,
                  clickable: "",
                  both: "",
                  class: normalizeClass(unref(closeClasses)),
                  icon: __props.closeIcon,
                  size: __props.closeIconSize,
                  onClick: _cache[1] || (_cache[1] = ($event) => unref(cancel)("x"))
                }, null, 8, ["class", "icon", "size"])), [
                  [vShow, !isAnimating.value]
                ]) : createCommentVNode("", true)
              ], 6)
            ], 16, _hoisted_1)), [
              [vShow, unref(isActive)],
              [unref(vTrapFocus), __props.trapFocus]
            ])
          ]),
          _: 3
        }, 8, ["name"])
      ], 8, ["to", "disabled"]);
    };
  }
});
const instances = new InstanceRegistry();
const ModalProgrammatic = {
  open(params) {
    const componentParams = typeof params === "string" ? {
      content: params
    } : { ...params };
    let slot;
    if (Array.isArray(componentParams.content)) {
      slot = componentParams.content;
      delete componentParams.content;
    }
    const defaultParams = {
      programmatic: { instances },
      active: true
      // set the active state to true
    };
    const propsData = merge(defaultParams, componentParams);
    propsData.promise = new Promise((p1, p2) => {
      propsData.programmatic.resolve = p1;
      propsData.programmatic.reject = p2;
    });
    const defaultSlot = () => slot;
    const app = VueInstance;
    const vnode = createVNode(_sfc_main, propsData, defaultSlot);
    vnode.appContext = app._context;
    render(vnode, document.createElement("div"));
    return vnode.component.exposed;
  },
  closeAll(...args) {
    instances.walk((entry) => entry.exposed.close(...args));
  }
};
const ModalProgrammatic$1 = ModalProgrammatic;
const index = {
  install(app) {
    registerComponent(app, _sfc_main);
    registerComponentProgrammatic(app, "modal", ModalProgrammatic$1);
  }
};
export {
  ModalProgrammatic$1 as ModalProgrammatic,
  _sfc_main as OModal,
  index as default
};
//# sourceMappingURL=modal.mjs.map
