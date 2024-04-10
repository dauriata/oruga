"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const Icon_vue_vue_type_script_setup_true_lang = require("./Icon.vue_vue_type_script_setup_true_lang-CGDJNR6y.cjs");
const config = require("./config-JkCO4AEi.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const usePropValue = require("./usePropValue-CHGN8et-.cjs");
const useProgrammatic = require("./useProgrammatic-CV--sv7g.cjs");
const InstanceRegistry = require("./InstanceRegistry-B5VLbWN4.cjs");
const helpers = require("./helpers.cjs");
const _hoisted_1 = ["aria-label"];
const _hoisted_2 = ["innerHTML"];
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "ONotification",
    configField: "notification",
    inheritAttrs: false
  },
  __name: "Notification",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether modal is active or not, use v-model:active to make it two-way binding */
    active: { type: Boolean, default: true },
    /**
     * Type (color) of the notification
     * @values info, success, warning, danger
     */
    type: {
      type: String,
      default: void 0,
      validator: (value) => ["info", "success", "warning", "danger", void 0].indexOf(value) > -1
    },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => config.getOption("notification.variant")
    },
    /**
     * Which position the notification will appear when programmatically
     * @values top-right, top, top-left, bottom-right, bottom, bottom-left
     */
    position: {
      type: String,
      default: () => config.getOption("notification.position", "top"),
      validator: (value) => [
        "top-right",
        "top",
        "top-left",
        "bottom-right",
        "bottom",
        "bottom-left"
      ].indexOf(value) > -1
    },
    /** Message text (can contain HTML), unnecessary when default slot is used */
    message: {
      type: [String, Array],
      default: void 0
    },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => config.getOption("notification.animation", "fade")
    },
    /** Accessibility label for the close button */
    ariaCloseLabel: {
      type: String,
      default: () => config.getOption("notification.ariaCloseLabel", "Close")
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => config.getOption("notification.iconPack")
    },
    /** Icon name to use */
    icon: { type: String, default: void 0 },
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
      type: String,
      default: () => config.getOption("notification.iconSize", "large")
    },
    /** Add close button to the item that closes the notification */
    closable: { type: Boolean, default: false },
    /** Close icon name */
    closeIcon: {
      type: String,
      default: () => config.getOption("notification.closeIcon", "close")
    },
    /**
     * Size of close icon
     * @values small, medium, large
     */
    closeIconSize: {
      type: String,
      default: () => config.getOption("notification.closeIconSize")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the close button container */
    closeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the content element */
    contentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the icon on the left */
    iconClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the element when positioned */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the notification variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the wrapper element */
    wrapperClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:active", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const isActive = usePropValue.usePropBinding("active", props, emits, {
      passive: true
    });
    const computedIcon = vue.computed(() => {
      if (props.icon)
        return props.icon;
      switch (props.type) {
        case "info":
          return "information";
        case "success":
          return "check-circle";
        case "warning":
          return "alert";
        case "danger":
          return "alert-circle";
        default:
          return null;
      }
    });
    function close(...args) {
      isActive.value = false;
      emits("close", ...args);
    }
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-notification"],
      [
        "variantClass",
        "o-notification--",
        vue.computed(() => props.variant),
        vue.computed(() => !!props.variant)
      ],
      [
        "positionClass",
        "o-notification--",
        vue.computed(() => props.position),
        vue.computed(() => !!props.position)
      ]
    );
    const wrapperClasses = defineClasses.defineClasses([
      "wrapperClass",
      "o-notification__wrapper"
    ]);
    const iconClasses = defineClasses.defineClasses(["iconClass", "o-notification__icon"]);
    const contentClasses = defineClasses.defineClasses([
      "contentClass",
      "o-notification__content"
    ]);
    const closeClasses = defineClasses.defineClasses(["closeClass", "o-notification__close"]);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, { name: __props.animation }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("article", vue.mergeProps(_ctx.$attrs, {
            class: vue.unref(rootClasses),
            "data-oruga": "notification"
          }), [
            __props.closable ? (vue.openBlock(), vue.createElementBlock("button", {
              key: 0,
              class: vue.normalizeClass(vue.unref(closeClasses)),
              type: "button",
              "aria-label": __props.ariaCloseLabel,
              onClick: _cache[0] || (_cache[0] = ($event) => close({ action: "close", method: "x" }))
            }, [
              vue.createVNode(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
                clickable: "",
                pack: __props.iconPack,
                both: "",
                icon: __props.closeIcon,
                size: __props.closeIconSize
              }, null, 8, ["pack", "icon", "size"])
            ], 10, _hoisted_1)) : vue.createCommentVNode("", true),
            vue.renderSlot(_ctx.$slots, "inner", { close }),
            _ctx.$slots.default || __props.message ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: vue.normalizeClass(vue.unref(wrapperClasses))
            }, [
              computedIcon.value ? (vue.openBlock(), vue.createBlock(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
                key: 0,
                icon: computedIcon.value,
                pack: __props.iconPack,
                class: vue.normalizeClass(vue.unref(iconClasses)),
                both: "",
                size: __props.iconSize,
                "aria-hidden": ""
              }, null, 8, ["icon", "pack", "class", "size"])) : vue.createCommentVNode("", true),
              vue.createElementVNode("div", {
                class: vue.normalizeClass(vue.unref(contentClasses))
              }, [
                vue.renderSlot(_ctx.$slots, "default", { close }, () => [
                  __props.message ? (vue.openBlock(), vue.createElementBlock("span", {
                    key: 0,
                    innerHTML: __props.message
                  }, null, 8, _hoisted_2)) : vue.createCommentVNode("", true)
                ])
              ], 2)
            ], 2)) : vue.createCommentVNode("", true)
          ], 16), [
            [vue.vShow, vue.unref(isActive)]
          ])
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "ONotificationNotice",
    configField: "notification",
    inheritAttrs: false
  },
  __name: "NotificationNotice",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether notification is active or not, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: true },
    /**
     * Which position the notification will appear when programmatically.
     * @values top-right, top, top-left, bottom-right, bottom, bottom-left
     */
    position: {
      type: String,
      default: () => config.getOption("notification.position", "top"),
      validator: (value) => [
        "top-right",
        "top",
        "top-left",
        "bottom-right",
        "bottom",
        "bottom-left"
      ].indexOf(value) > -1
    },
    /** Hide notification after duration (in miliseconds) */
    duration: {
      type: Number,
      default: () => config.getOption("notification.duration", 2e3)
    },
    /** Show the Notification infinitely until it is dismissed. */
    infinite: { type: Boolean, default: false },
    /** If notice should queue with others notices (snackbar/toast/notification). */
    queue: {
      type: Boolean,
      default: () => config.getOption("notification.queue")
    },
    /** Callback function to call after user canceled (pressed escape / clicked outside). */
    onCancel: { type: Function, default: () => {
    } },
    /** Callback function to call after close (programmatically close or user canceled). */
    onClose: { type: Function, default: () => {
    } },
    /**
     * Component to be injected.
     * Close notification within the component by emitting a 'close' event — $emit('close').
     */
    component: {
      type: [Object, Function],
      default: void 0
    },
    /** Props to be binded to the injected component. */
    props: { type: Object, default: void 0 },
    /** Events to be binded to the injected component. */
    events: { type: Object, default: () => ({}) },
    /**
     * DOM element the toast will be created on (for programmatic usage).
     * Note that this also changes the position of the toast from fixed to absolute.
     * Meaning that the container should be fixed.
     */
    container: {
      type: [Object, String],
      default: () => config.getOption("notification.container", "body")
    },
    /**
     * Props passed to the internal notification component.
     * @ignore
     */
    notification: {
      type: Object,
      default: () => ({})
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
    /** Root class of the notice */
    noticeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the notice when positioned */
    noticePositionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the custom container element */
    noticeCustomContainerClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:active", "close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const notificationRef = vue.ref();
    const { isActive, close, container } = useProgrammatic.useProgrammaticComponent(
      () => notificationRef.value.$el,
      props,
      emits,
      {
        cancelOptions: ["escape", "x"]
      }
    );
    const parentTop = vue.ref(null);
    const parentBottom = vue.ref(null);
    const timer = vue.ref();
    vue.watch(
      () => isActive,
      (value) => {
        if (value)
          setAutoClose();
        else if (timer.value)
          clearTimeout(timer.value);
      }
    );
    vue.onBeforeMount(() => {
      if (noticeClasses.value && positionBottomClasses.value && positionTopClasses.value) {
        const rootClasses = defineClasses.getActiveClasses(noticeClasses.value);
        const topClasses = defineClasses.getActiveClasses(positionTopClasses.value);
        const bottomClasses = defineClasses.getActiveClasses(positionBottomClasses.value);
        parentTop.value = container.value.querySelector(
          `.${rootClasses.join(".")}.${topClasses.join(".")}`
        );
        parentBottom.value = container.value.querySelector(
          `.${rootClasses.join(".")}.${bottomClasses.join(".")}`
        );
        if (parentTop.value && parentBottom.value)
          return;
        if (!parentTop.value) {
          parentTop.value = document.createElement("div");
          parentTop.value.className = `${rootClasses.join(
            " "
          )} ${topClasses.join(" ")}`;
        }
        if (!parentBottom.value) {
          parentBottom.value = document.createElement("div");
          parentBottom.value.className = `${rootClasses.join(
            " "
          )} ${bottomClasses.join(" ")}`;
        }
        container.value.appendChild(parentTop.value);
        container.value.appendChild(parentBottom.value);
        if (container.value.tagName !== "BODY") {
          const classes = defineClasses.getActiveClasses(
            noticeCustomContainerClasses.value
          );
          if (classes == null ? void 0 : classes.length)
            classes.filter((c) => !!c).forEach((c) => {
              parentTop.value.classList.add(c);
              parentBottom.value.classList.add(c);
            });
        }
      }
    });
    vue.onMounted(() => {
      showNotice();
      setAutoClose();
    });
    const correctParent = vue.computed(() => {
      switch (props.position) {
        case "top-right":
        case "top":
        case "top-left":
          return parentTop.value;
        case "bottom-right":
        case "bottom":
        case "bottom-left":
          return parentBottom.value;
        default:
          return null;
      }
    });
    const shouldQueue = vue.computed(
      () => props.queue ? parentTop.value.childElementCount > 0 || parentBottom.value.childElementCount > 0 : false
    );
    function showNotice() {
      if (shouldQueue.value)
        correctParent.value.innerHTML = "";
      correctParent.value.insertAdjacentElement(
        "afterbegin",
        notificationRef.value.$el
      );
      isActive.value = true;
    }
    function setAutoClose() {
      if (!props.infinite) {
        if (timer.value)
          clearTimeout(timer.value);
        timer.value = setTimeout(() => {
          if (isActive.value)
            handleClose({ action: "close", method: "timeout" });
        }, props.duration);
      }
    }
    function handleClose(...args) {
      clearTimeout(timer.value);
      close(...args);
    }
    const noticeClasses = defineClasses.defineClasses(["noticeClass", "o-notices"]);
    const positionTopClasses = defineClasses.defineClasses([
      "noticePositionClass",
      "o-notices--",
      "top"
    ]);
    const positionBottomClasses = defineClasses.defineClasses([
      "noticePositionClass",
      "o-notices--",
      "bottom"
    ]);
    const noticeCustomContainerClasses = defineClasses.defineClasses([
      "noticeCustomContainerClass",
      "o-notices__custom-container"
    ]);
    __expose({ close: handleClose, promise: props.promise });
    return (_ctx, _cache) => {
      const _component_o_notification = vue.resolveComponent("o-notification");
      return vue.openBlock(), vue.createBlock(_component_o_notification, vue.mergeProps(__props.notification, {
        ref_key: "notificationRef",
        ref: notificationRef,
        active: vue.unref(isActive),
        "onUpdate:active": _cache[0] || (_cache[0] = ($event) => vue.isRef(isActive) ? isActive.value = $event : null),
        position: __props.position,
        onClose: handleClose
      }), {
        inner: vue.withCtx(({ close: close2 }) => [
          __props.component ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.component), vue.mergeProps({ key: 0 }, _ctx.$props.props, vue.toHandlers(_ctx.$props.events), { onClose: close2 }), null, 16, ["onClose"])) : vue.createCommentVNode("", true)
        ]),
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["active", "position"]);
    };
  }
});
const instances = new InstanceRegistry.InstanceRegistry();
const NotificationProgrammatic = {
  open(params) {
    const componentParams = typeof params === "string" ? {
      message: params
    } : { ...params };
    let slot;
    if (Array.isArray(componentParams.message)) {
      slot = componentParams.message;
      delete componentParams.message;
    }
    const defaultParams = {
      programmatic: { instances },
      active: true,
      // set the active state to true
      position: config.getOption("notification.position", "top-right")
    };
    const notificationParams = componentParams.notification ? componentParams.notification : componentParams;
    const propsData = helpers.merge(defaultParams, componentParams);
    propsData.notification = helpers.merge({}, notificationParams);
    propsData.promise = new Promise((p1, p2) => {
      propsData.programmatic.resolve = p1;
      propsData.programmatic.reject = p2;
    });
    const defaultSlot = () => slot;
    const app = config.VueInstance;
    const vnode = vue.createVNode(_sfc_main, propsData, defaultSlot);
    vnode.appContext = app._context;
    vue.render(vnode, document.createElement("div"));
    return vnode.component.exposed;
  },
  closeAll(...args) {
    instances.walk((entry) => entry.exposed.close(...args));
  }
};
const NotificationProgrammatic$1 = NotificationProgrammatic;
const index = {
  install(app) {
    config.registerComponent(app, _sfc_main$1);
    config.registerComponentProgrammatic(
      app,
      "notification",
      NotificationProgrammatic$1
    );
  }
};
exports.NotificationProgrammatic = NotificationProgrammatic$1;
exports.ONotification = _sfc_main$1;
exports.default = index;
//# sourceMappingURL=notification.cjs.map
