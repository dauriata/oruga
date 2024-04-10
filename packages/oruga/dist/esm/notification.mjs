/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, computed, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, mergeProps, unref, createElementBlock, normalizeClass, createVNode, createCommentVNode, renderSlot, vShow, ref, watch, onBeforeMount, onMounted, resolveComponent, isRef, resolveDynamicComponent, toHandlers, render } from "vue";
import { _ as _sfc_main$2 } from "./Icon.vue_vue_type_script_setup_true_lang-BfJM6xYp.mjs";
import { g as getOption, V as VueInstance, b as registerComponent, a as registerComponentProgrammatic } from "./config-zKhnAIV0.mjs";
import { d as defineClasses, g as getActiveClasses } from "./defineClasses-uo4lMA-t.mjs";
import { a as usePropBinding } from "./usePropValue-DLZTRe_e.mjs";
import { u as useProgrammaticComponent } from "./useProgrammatic-DM-iIXR9.mjs";
import { I as InstanceRegistry } from "./InstanceRegistry-CnSXgFAg.mjs";
import { merge } from "./helpers.mjs";
const _hoisted_1 = ["aria-label"];
const _hoisted_2 = ["innerHTML"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      default: () => getOption("notification.variant")
    },
    /**
     * Which position the notification will appear when programmatically
     * @values top-right, top, top-left, bottom-right, bottom, bottom-left
     */
    position: {
      type: String,
      default: () => getOption("notification.position", "top"),
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
      default: () => getOption("notification.animation", "fade")
    },
    /** Accessibility label for the close button */
    ariaCloseLabel: {
      type: String,
      default: () => getOption("notification.ariaCloseLabel", "Close")
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => getOption("notification.iconPack")
    },
    /** Icon name to use */
    icon: { type: String, default: void 0 },
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
      type: String,
      default: () => getOption("notification.iconSize", "large")
    },
    /** Add close button to the item that closes the notification */
    closable: { type: Boolean, default: false },
    /** Close icon name */
    closeIcon: {
      type: String,
      default: () => getOption("notification.closeIcon", "close")
    },
    /**
     * Size of close icon
     * @values small, medium, large
     */
    closeIconSize: {
      type: String,
      default: () => getOption("notification.closeIconSize")
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
    const isActive = usePropBinding("active", props, emits, {
      passive: true
    });
    const computedIcon = computed(() => {
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
    const rootClasses = defineClasses(
      ["rootClass", "o-notification"],
      [
        "variantClass",
        "o-notification--",
        computed(() => props.variant),
        computed(() => !!props.variant)
      ],
      [
        "positionClass",
        "o-notification--",
        computed(() => props.position),
        computed(() => !!props.position)
      ]
    );
    const wrapperClasses = defineClasses([
      "wrapperClass",
      "o-notification__wrapper"
    ]);
    const iconClasses = defineClasses(["iconClass", "o-notification__icon"]);
    const contentClasses = defineClasses([
      "contentClass",
      "o-notification__content"
    ]);
    const closeClasses = defineClasses(["closeClass", "o-notification__close"]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: __props.animation }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("article", mergeProps(_ctx.$attrs, {
            class: unref(rootClasses),
            "data-oruga": "notification"
          }), [
            __props.closable ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: normalizeClass(unref(closeClasses)),
              type: "button",
              "aria-label": __props.ariaCloseLabel,
              onClick: _cache[0] || (_cache[0] = ($event) => close({ action: "close", method: "x" }))
            }, [
              createVNode(_sfc_main$2, {
                clickable: "",
                pack: __props.iconPack,
                both: "",
                icon: __props.closeIcon,
                size: __props.closeIconSize
              }, null, 8, ["pack", "icon", "size"])
            ], 10, _hoisted_1)) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "inner", { close }),
            _ctx.$slots.default || __props.message ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(unref(wrapperClasses))
            }, [
              computedIcon.value ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                icon: computedIcon.value,
                pack: __props.iconPack,
                class: normalizeClass(unref(iconClasses)),
                both: "",
                size: __props.iconSize,
                "aria-hidden": ""
              }, null, 8, ["icon", "pack", "class", "size"])) : createCommentVNode("", true),
              createElementVNode("div", {
                class: normalizeClass(unref(contentClasses))
              }, [
                renderSlot(_ctx.$slots, "default", { close }, () => [
                  __props.message ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    innerHTML: __props.message
                  }, null, 8, _hoisted_2)) : createCommentVNode("", true)
                ])
              ], 2)
            ], 2)) : createCommentVNode("", true)
          ], 16), [
            [vShow, unref(isActive)]
          ])
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      default: () => getOption("notification.position", "top"),
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
      default: () => getOption("notification.duration", 2e3)
    },
    /** Show the Notification infinitely until it is dismissed. */
    infinite: { type: Boolean, default: false },
    /** If notice should queue with others notices (snackbar/toast/notification). */
    queue: {
      type: Boolean,
      default: () => getOption("notification.queue")
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
      default: () => getOption("notification.container", "body")
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
    const notificationRef = ref();
    const { isActive, close, container } = useProgrammaticComponent(
      () => notificationRef.value.$el,
      props,
      emits,
      {
        cancelOptions: ["escape", "x"]
      }
    );
    const parentTop = ref(null);
    const parentBottom = ref(null);
    const timer = ref();
    watch(
      () => isActive,
      (value) => {
        if (value)
          setAutoClose();
        else if (timer.value)
          clearTimeout(timer.value);
      }
    );
    onBeforeMount(() => {
      if (noticeClasses.value && positionBottomClasses.value && positionTopClasses.value) {
        const rootClasses = getActiveClasses(noticeClasses.value);
        const topClasses = getActiveClasses(positionTopClasses.value);
        const bottomClasses = getActiveClasses(positionBottomClasses.value);
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
          const classes = getActiveClasses(
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
    onMounted(() => {
      showNotice();
      setAutoClose();
    });
    const correctParent = computed(() => {
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
    const shouldQueue = computed(
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
    const noticeClasses = defineClasses(["noticeClass", "o-notices"]);
    const positionTopClasses = defineClasses([
      "noticePositionClass",
      "o-notices--",
      "top"
    ]);
    const positionBottomClasses = defineClasses([
      "noticePositionClass",
      "o-notices--",
      "bottom"
    ]);
    const noticeCustomContainerClasses = defineClasses([
      "noticeCustomContainerClass",
      "o-notices__custom-container"
    ]);
    __expose({ close: handleClose, promise: props.promise });
    return (_ctx, _cache) => {
      const _component_o_notification = resolveComponent("o-notification");
      return openBlock(), createBlock(_component_o_notification, mergeProps(__props.notification, {
        ref_key: "notificationRef",
        ref: notificationRef,
        active: unref(isActive),
        "onUpdate:active": _cache[0] || (_cache[0] = ($event) => isRef(isActive) ? isActive.value = $event : null),
        position: __props.position,
        onClose: handleClose
      }), {
        inner: withCtx(({ close: close2 }) => [
          __props.component ? (openBlock(), createBlock(resolveDynamicComponent(__props.component), mergeProps({ key: 0 }, _ctx.$props.props, toHandlers(_ctx.$props.events), { onClose: close2 }), null, 16, ["onClose"])) : createCommentVNode("", true)
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["active", "position"]);
    };
  }
});
const instances = new InstanceRegistry();
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
      position: getOption("notification.position", "top-right")
    };
    const notificationParams = componentParams.notification ? componentParams.notification : componentParams;
    const propsData = merge(defaultParams, componentParams);
    propsData.notification = merge({}, notificationParams);
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
const NotificationProgrammatic$1 = NotificationProgrammatic;
const index = {
  install(app) {
    registerComponent(app, _sfc_main$1);
    registerComponentProgrammatic(
      app,
      "notification",
      NotificationProgrammatic$1
    );
  }
};
export {
  NotificationProgrammatic$1 as NotificationProgrammatic,
  _sfc_main$1 as ONotification,
  index as default
};
//# sourceMappingURL=notification.mjs.map
