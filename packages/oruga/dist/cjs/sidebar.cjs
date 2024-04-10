"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const config = require("./config-JkCO4AEi.cjs");
const ssr = require("./ssr-BN_zM9RT.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const useMatchMedia = require("./useMatchMedia-gcwLqHTY.cjs");
const useProgrammatic = require("./useProgrammatic-CV--sv7g.cjs");
const useClickOutside = require("./useClickOutside-BK41N1fh.cjs");
const InstanceRegistry = require("./InstanceRegistry-B5VLbWN4.cjs");
const helpers = require("./helpers.cjs");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
      default: () => config.getOption("sidebar.variant")
    },
    /** Show an overlay like modal */
    overlay: { type: Boolean, default: config.getOption("sidebar.overlay", false) },
    /** Display the Sidebear inline */
    inline: { type: Boolean, default: false },
    /**
     * Sidebar position
     * @values top, right, bottom, left
     */
    position: {
      type: String,
      default: () => config.getOption("sidebar.position", "left")
    },
    /** Show sidebar in fullheight */
    fullheight: {
      type: Boolean,
      default: config.getOption("sidebar.fullheight", false)
    },
    /** Show sidebar in fullwidth */
    fullwidth: {
      type: Boolean,
      default: config.getOption("sidebar.fullwidth", false)
    },
    /** Show a small sidebar */
    reduce: { type: Boolean, default: config.getOption("sidebar.reduce", false) },
    /**
     * Custom layout on mobile
     * @values fullwidth, reduced, hidden
     */
    mobile: {
      type: String,
      default: config.getOption("sidebar.mobile"),
      validator: (value) => ["fullwidth", "reduced", "hidden"].indexOf(value) >= 0
    },
    /** Expand sidebar on hover when reduced or mobile is reduce */
    expandOnHover: {
      type: Boolean,
      default: config.getOption("sidebar.expandOnHover", false)
    },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => config.getOption("sidebar.animation")
    },
    /**
     * Is Sidebar cancleable by pressing escape or clicking outside.
     * @values escape, outside, true, false
     */
    cancelable: {
      type: [Array, Boolean],
      default: () => config.getOption("sidebar.cancelable", ["escape", "outside"])
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
      default: () => config.getOption("sidebar.scroll", "clip"),
      validator: (value) => ["clip", "keep"].indexOf(value) >= 0
    },
    /** Destroy sidebar on hide */
    destroyOnHide: {
      type: Boolean,
      default: () => config.getOption("sidebar.destroyOnHide", false)
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => config.getOption("sidebar.mobileBreakpoint")
    },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => config.getOption("sidebar.teleport", false)
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
      default: () => config.getOption("sidebar.container", "body")
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
    const rootRef = vue.ref();
    const sidebarContent = vue.ref();
    const { isActive, close, cancel } = useProgrammatic.useProgrammaticComponent(
      rootRef,
      props,
      emits,
      {
        destroyOnHide: props.destroyOnHide,
        cancelOptions: config.getOption("sidebar.cancelable", ["escape", "outside"])
      }
    );
    const { isMobile } = useMatchMedia.useMatchMedia(props.mobileBreakpoint);
    const savedScrollTop = vue.ref(null);
    const isAnimating = vue.ref(!props.active);
    vue.watch(isActive, (value) => {
      if (props.overlay)
        handleScroll();
      if (value)
        addHandler();
      else
        removeHandler();
    });
    const _teleport = vue.computed(
      () => typeof props.teleport === "boolean" ? { to: "body", disabled: !props.teleport } : { to: props.teleport, disabled: false }
    );
    const transitionName = vue.computed(() => {
      if (props.animation)
        return props.animation;
      const vertical = props.position === "top" || props.position === "bottom";
      const right = props.position === "right";
      const open = right ? !isActive.value : isActive.value;
      return open ? vertical ? "slide-down" : "slide-next" : vertical ? "slide-up" : "slide-prev";
    });
    const hideOnMobile = vue.computed(
      () => props.mobile === "hidden" && isMobile.value
    );
    vue.onMounted(() => {
      if (props.active)
        addHandler();
    });
    vue.onBeforeUnmount(() => {
      removeHandler();
      if (ssr.isClient) {
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
      if (ssr.isClient && !props.overlay) {
        removeOutsideListener = useClickOutside.useClickOutside(sidebarContent, clickedOutside);
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
      if (!ssr.isClient)
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
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-side"],
      ["mobileClass", "o-side--mobile", null, isMobile],
      ["activeClass", "o-side--active", null, isActive],
      [
        "teleportClass",
        "o-side--teleport",
        null,
        vue.computed(() => !!props.teleport)
      ],
      ["inlineClass", "o-side--inline", null, vue.computed(() => props.inline)]
    );
    const overlayClasses = defineClasses.defineClasses(["overlayClass", "o-side__overlay"]);
    const contentClasses = defineClasses.defineClasses(
      ["contentClass", "o-side__content"],
      [
        "variantClass",
        "o-side__content--",
        vue.computed(() => props.variant),
        vue.computed(() => !!props.variant)
      ],
      [
        "positionClass",
        "o-side__content--",
        vue.computed(() => props.position),
        vue.computed(() => !!props.position)
      ],
      [
        "fullheightClass",
        "o-side__content--fullheight",
        null,
        vue.computed(() => props.fullheight)
      ],
      [
        "fullwidthClass",
        "o-side__content--fullwidth",
        null,
        vue.computed(
          () => props.fullwidth || props.mobile === "fullwidth" && isMobile.value
        )
      ],
      [
        "reduceClass",
        "o-side__content--reduced",
        null,
        vue.computed(
          () => props.reduce || props.mobile === "reduced" && isMobile.value
        )
      ],
      [
        "expandOnHoverClass",
        "o-side__content--reduced-expand",
        null,
        vue.computed(
          () => props.expandOnHover && (!isMobile.value || props.mobile !== "fullwidth")
        )
      ],
      ["visibleClass", "o-side__content--visible", null, isActive],
      [
        "hiddenClass",
        "o-side__content--hidden",
        null,
        vue.computed(() => !isActive.value)
      ]
    );
    const scrollClasses = defineClasses.defineClasses(["scrollClipClass", "o-clipped"]);
    const noScrollClasses = defineClasses.defineClasses(["noScrollClass", "o-noscroll"]);
    const scrollClass = vue.computed(
      () => defineClasses.getActiveClasses(
        props.scroll === "clip" ? scrollClasses.value : noScrollClasses.value
      )
    );
    scrollClass.value;
    __expose({ close, promise: props.promise });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, {
        to: _teleport.value.to,
        disabled: _teleport.value.disabled
      }, [
        vue.withDirectives(vue.createElementVNode("div", vue.mergeProps({
          ref_key: "rootRef",
          ref: rootRef
        }, _ctx.$attrs, {
          class: vue.unref(rootClasses),
          "data-oruga": "sidebar"
        }), [
          __props.overlay && vue.unref(isActive) ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(vue.unref(overlayClasses)),
            tabindex: -1,
            "aria-hidden": "true",
            onClick: _cache[0] || (_cache[0] = (evt) => clickedOutside(evt))
          }, null, 2)) : vue.createCommentVNode("", true),
          vue.createVNode(vue.Transition, {
            name: transitionName.value,
            onAfterEnter: afterEnter,
            onBeforeLeave: beforeLeave
          }, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("div", {
                ref_key: "sidebarContent",
                ref: sidebarContent,
                class: vue.normalizeClass(vue.unref(contentClasses))
              }, [
                vue.renderSlot(_ctx.$slots, "default", { close: vue.unref(close) }, () => [
                  __props.component ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.component), vue.mergeProps({ key: 0 }, _ctx.$props.props, vue.toHandlers(_ctx.$props.events), { onClose: vue.unref(close) }), null, 16, ["onClose"])) : vue.createCommentVNode("", true)
                ])
              ], 2), [
                [vue.vShow, vue.unref(isActive)]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ], 16), [
          [vue.vShow, !hideOnMobile.value]
        ])
      ], 8, ["to", "disabled"]);
    };
  }
});
const instances = new InstanceRegistry.InstanceRegistry();
const SidebarProgrammatic = {
  open(params) {
    const defaultParams = {
      programmatic: { instances },
      active: true
      // set the active state to true
    };
    const propsData = helpers.merge(defaultParams, params);
    propsData.promise = new Promise((p1, p2) => {
      propsData.programmatic.resolve = p1;
      propsData.programmatic.reject = p2;
    });
    const app = config.VueInstance;
    const vnode = vue.createVNode(_sfc_main, propsData);
    vnode.appContext = app._context;
    vue.render(vnode, document.createElement("div"));
    return vnode.component.exposed;
  },
  closeAll(...args) {
    instances.walk((entry) => entry.exposed.close(...args));
  }
};
const SidebarProgrammatic$1 = SidebarProgrammatic;
const index = {
  install(app) {
    config.registerComponent(app, _sfc_main);
    config.registerComponentProgrammatic(app, "sidebar", SidebarProgrammatic$1);
  }
};
exports.OSidebar = _sfc_main;
exports.SidebarProgrammatic = SidebarProgrammatic$1;
exports.default = index;
//# sourceMappingURL=sidebar.cjs.map
