/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, ref, watch, computed, onMounted, onBeforeUnmount, openBlock, createBlock, Teleport, withDirectives, createElementVNode, mergeProps, unref, createElementBlock, normalizeClass, createCommentVNode, createVNode, Transition, withCtx, renderSlot, resolveDynamicComponent, toHandlers, vShow, render } from "vue";
import { g as getOption, V as VueInstance, b as registerComponent, a as registerComponentProgrammatic } from "./config-zKhnAIV0.mjs";
import { i as isClient } from "./ssr-BIBU2UWo.mjs";
import { d as defineClasses, g as getActiveClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useMatchMedia } from "./useMatchMedia-G3BPCbzR.mjs";
import { u as useProgrammaticComponent } from "./useProgrammatic-DM-iIXR9.mjs";
import { u as useClickOutside } from "./useClickOutside-BFumA2Sw.mjs";
import { I as InstanceRegistry } from "./InstanceRegistry-CnSXgFAg.mjs";
import { merge } from "./helpers.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OSidebar",
    configField: "sidebar",
    inheritAttrs: false
  },
  __name: "Sidebar",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether siedbar is active or not, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: false },
    /**
     * Color of the sidebar
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => getOption("sidebar.variant")
    },
    /** Show an overlay like modal */
    overlay: { type: Boolean, default: getOption("sidebar.overlay", false) },
    /** Display the Sidebear inline */
    inline: { type: Boolean, default: false },
    /**
     * Sidebar position
     * @values top, right, bottom, left
     */
    position: {
      type: String,
      default: () => getOption("sidebar.position", "left")
    },
    /** Show sidebar in fullheight */
    fullheight: {
      type: Boolean,
      default: getOption("sidebar.fullheight", false)
    },
    /** Show sidebar in fullwidth */
    fullwidth: {
      type: Boolean,
      default: getOption("sidebar.fullwidth", false)
    },
    /** Show a small sidebar */
    reduce: { type: Boolean, default: getOption("sidebar.reduce", false) },
    /**
     * Custom layout on mobile
     * @values fullwidth, reduced, hidden
     */
    mobile: {
      type: String,
      default: getOption("sidebar.mobile"),
      validator: (value) => ["fullwidth", "reduced", "hidden"].indexOf(value) >= 0
    },
    /** Expand sidebar on hover when reduced or mobile is reduce */
    expandOnHover: {
      type: Boolean,
      default: getOption("sidebar.expandOnHover", false)
    },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => getOption("sidebar.animation")
    },
    /**
     * Is Sidebar cancleable by pressing escape or clicking outside.
     * @values escape, outside, true, false
     */
    cancelable: {
      type: [Array, Boolean],
      default: () => getOption("sidebar.cancelable", ["escape", "outside"])
    },
    /** Callback function to call after user canceled (pressed escape / clicked outside) */
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
      default: () => getOption("sidebar.scroll", "clip"),
      validator: (value) => ["clip", "keep"].indexOf(value) >= 0
    },
    /** Destroy sidebar on hide */
    destroyOnHide: {
      type: Boolean,
      default: () => getOption("sidebar.destroyOnHide", false)
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => getOption("sidebar.mobileBreakpoint")
    },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => getOption("sidebar.teleport", false)
    },
    /**
     * Component to be injected, used to open a component sidebar programmatically.
     * Close sidebar within the component by emitting a 'close' event — emits('close')
     */
    component: {
      type: [Object, Function],
      default: void 0
    },
    /** Props to be binded to the injected component. */
    props: { type: Object, default: void 0 },
    /** Events to be binded to the injected component. */
    events: { type: Object, default: () => ({}) },
    /** DOM element where the sidebar component will be created on (for programmatic usage). */
    container: {
      type: [Object, String],
      default: () => getOption("sidebar.container", "body")
    },
    /**
     * This is used internally for programmatic usage.
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
    /** Class of sidebar component when its active */
    activeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of sidebar when teleported */
    teleportClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar overlay */
    overlayClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar content */
    contentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar position */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar when is fullheight */
    fullheightClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar when is fullwidth */
    fullwidthClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar when its inlined */
    inlineClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar when reduced */
    reduceClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar when expanded on hover */
    expandOnHoverClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of sidebar component when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the body when sidebar clipped */
    crollClipClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the body when sidebar is not clipped */
    noScrollClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar content when sidebar is hidden */
    hiddenClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar content when sidebar is visible */
    visibleClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:active", "close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootRef = ref();
    const sidebarContent = ref();
    const { isActive, close, cancel } = useProgrammaticComponent(
      rootRef,
      props,
      emits,
      {
        destroyOnHide: props.destroyOnHide,
        cancelOptions: getOption("sidebar.cancelable", ["escape", "outside"])
      }
    );
    const { isMobile } = useMatchMedia(props.mobileBreakpoint);
    const savedScrollTop = ref(null);
    const isAnimating = ref(!props.active);
    watch(isActive, (value) => {
      if (props.overlay)
        handleScroll();
      if (value)
        addHandler();
      else
        removeHandler();
    });
    const _teleport = computed(
      () => typeof props.teleport === "boolean" ? { to: "body", disabled: !props.teleport } : { to: props.teleport, disabled: false }
    );
    const transitionName = computed(() => {
      if (props.animation)
        return props.animation;
      const vertical = props.position === "top" || props.position === "bottom";
      const right = props.position === "right";
      const open = right ? !isActive.value : isActive.value;
      return open ? vertical ? "slide-down" : "slide-next" : vertical ? "slide-up" : "slide-prev";
    });
    const hideOnMobile = computed(
      () => props.mobile === "hidden" && isMobile.value
    );
    onMounted(() => {
      if (props.active)
        addHandler();
    });
    onBeforeUnmount(() => {
      removeHandler();
      if (isClient) {
        if (props.overlay) {
          const scrollto = savedScrollTop.value ? savedScrollTop.value : document.documentElement.scrollTop;
          if (scrollClass.value) {
            document.body.classList.remove(...scrollClass.value);
            document.documentElement.classList.remove(...scrollClass.value);
          }
          document.documentElement.scrollTop = scrollto;
          document.body.style.top = null;
        }
      }
    });
    let removeOutsideListener = null;
    function addHandler() {
      if (isClient && !props.overlay) {
        removeOutsideListener = useClickOutside(sidebarContent, clickedOutside);
      }
    }
    function removeHandler() {
      if (removeOutsideListener !== null)
        removeOutsideListener();
    }
    function clickedOutside(event) {
      if (props.inline || !isActive.value || isAnimating.value)
        return;
      if (props.overlay || !event.composedPath().includes(sidebarContent.value))
        event.preventDefault();
      cancel("outside");
    }
    function handleScroll() {
      var _a;
      if (!isClient)
        return;
      if (props.scroll === "clip") {
        if ((_a = scrollClass.value) == null ? void 0 : _a.length) {
          if (isActive.value) {
            document.documentElement.classList.add(...scrollClass.value);
          } else {
            document.documentElement.classList.remove(...scrollClass.value);
          }
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
      ["rootClass", "o-side"],
      ["mobileClass", "o-side--mobile", null, isMobile],
      ["activeClass", "o-side--active", null, isActive],
      [
        "teleportClass",
        "o-side--teleport",
        null,
        computed(() => !!props.teleport)
      ],
      ["inlineClass", "o-side--inline", null, computed(() => props.inline)]
    );
    const overlayClasses = defineClasses(["overlayClass", "o-side__overlay"]);
    const contentClasses = defineClasses(
      ["contentClass", "o-side__content"],
      [
        "variantClass",
        "o-side__content--",
        computed(() => props.variant),
        computed(() => !!props.variant)
      ],
      [
        "positionClass",
        "o-side__content--",
        computed(() => props.position),
        computed(() => !!props.position)
      ],
      [
        "fullheightClass",
        "o-side__content--fullheight",
        null,
        computed(() => props.fullheight)
      ],
      [
        "fullwidthClass",
        "o-side__content--fullwidth",
        null,
        computed(
          () => props.fullwidth || props.mobile === "fullwidth" && isMobile.value
        )
      ],
      [
        "reduceClass",
        "o-side__content--reduced",
        null,
        computed(
          () => props.reduce || props.mobile === "reduced" && isMobile.value
        )
      ],
      [
        "expandOnHoverClass",
        "o-side__content--reduced-expand",
        null,
        computed(
          () => props.expandOnHover && (!isMobile.value || props.mobile !== "fullwidth")
        )
      ],
      ["visibleClass", "o-side__content--visible", null, isActive],
      [
        "hiddenClass",
        "o-side__content--hidden",
        null,
        computed(() => !isActive.value)
      ]
    );
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
        withDirectives(createElementVNode("div", mergeProps({
          ref_key: "rootRef",
          ref: rootRef
        }, _ctx.$attrs, {
          class: unref(rootClasses),
          "data-oruga": "sidebar"
        }), [
          __props.overlay && unref(isActive) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(overlayClasses)),
            tabindex: -1,
            "aria-hidden": "true",
            onClick: _cache[0] || (_cache[0] = (evt) => clickedOutside(evt))
          }, null, 2)) : createCommentVNode("", true),
          createVNode(Transition, {
            name: transitionName.value,
            onAfterEnter: afterEnter,
            onBeforeLeave: beforeLeave
          }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", {
                ref_key: "sidebarContent",
                ref: sidebarContent,
                class: normalizeClass(unref(contentClasses))
              }, [
                renderSlot(_ctx.$slots, "default", { close: unref(close) }, () => [
                  __props.component ? (openBlock(), createBlock(resolveDynamicComponent(__props.component), mergeProps({ key: 0 }, _ctx.$props.props, toHandlers(_ctx.$props.events), { onClose: unref(close) }), null, 16, ["onClose"])) : createCommentVNode("", true)
                ])
              ], 2), [
                [vShow, unref(isActive)]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ], 16), [
          [vShow, !hideOnMobile.value]
        ])
      ], 8, ["to", "disabled"]);
    };
  }
});
const instances = new InstanceRegistry();
const SidebarProgrammatic = {
  open(params) {
    const defaultParams = {
      programmatic: { instances },
      active: true
      // set the active state to true
    };
    const propsData = merge(defaultParams, params);
    propsData.promise = new Promise((p1, p2) => {
      propsData.programmatic.resolve = p1;
      propsData.programmatic.reject = p2;
    });
    const app = VueInstance;
    const vnode = createVNode(_sfc_main, propsData);
    vnode.appContext = app._context;
    render(vnode, document.createElement("div"));
    return vnode.component.exposed;
  },
  closeAll(...args) {
    instances.walk((entry) => entry.exposed.close(...args));
  }
};
const SidebarProgrammatic$1 = SidebarProgrammatic;
const index = {
  install(app) {
    registerComponent(app, _sfc_main);
    registerComponentProgrammatic(app, "sidebar", SidebarProgrammatic$1);
  }
};
export {
  _sfc_main as OSidebar,
  SidebarProgrammatic$1 as SidebarProgrammatic,
  index as default
};
//# sourceMappingURL=sidebar.mjs.map
