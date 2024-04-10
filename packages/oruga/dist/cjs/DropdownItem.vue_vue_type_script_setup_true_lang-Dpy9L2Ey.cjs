"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const PositionWrapper_vue_vue_type_script_setup_true_lang = require("./PositionWrapper.vue_vue_type_script_setup_true_lang-D5xcBodh.cjs");
const config = require("./config-JkCO4AEi.cjs");
const trapFocus = require("./trapFocus-BdXZCQ-C.cjs");
const helpers = require("./helpers.cjs");
const ssr = require("./ssr-BN_zM9RT.cjs");
const unrefElement = require("./unrefElement-Dt2e7Nao.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const useEventListener = require("./useEventListener-rp1-mRkR.cjs");
const useMatchMedia = require("./useMatchMedia-gcwLqHTY.cjs");
const useParentProvider = require("./useParentProvider-BknvMzPy.cjs");
const useClickOutside = require("./useClickOutside-BK41N1fh.cjs");
const _hoisted_1 = ["aria-hidden"];
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "ODropdown",
    configField: "dropdown"
  },
  __name: "Dropdown",
  props: /* @__PURE__ */ vue.mergeModels({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: void 0
    },
    /** The active state of the dropdown, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: false },
    /** Trigger label, unnecessary when trgger slot is used */
    label: { type: String, default: void 0 },
    /** Dropdown is disabled */
    disabled: { type: Boolean, default: false },
    /** Dropdown content (items) are shown inline, trigger is removed */
    inline: { type: Boolean, default: false },
    /** Dropdown content will be scrollable */
    scrollable: { type: Boolean, default: false },
    /** Max height of dropdown content */
    maxHeight: {
      type: [String, Number],
      default: () => config.getOption("dropdown.maxHeight", 200)
    },
    /**
     * Position of the dropdown relative to the trigger
     * @values auto, top, bottom, left, right, top-right, top-left, bottom-left, bottom-right
     */
    position: {
      type: String,
      default: () => config.getOption("dropdown.position", "bottom-left"),
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
    /** Dropdown content (items) are shown into a modal on mobile */
    mobileModal: {
      type: Boolean,
      default: () => config.getOption("dropdown.mobileModal", true)
    },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => config.getOption("dropdown.animation", "fade")
    },
    /** Allows multiple selections */
    multiple: { type: Boolean, default: false },
    /** Trap focus inside the dropdown. */
    trapFocus: {
      type: Boolean,
      default: () => config.getOption("dropdown.trapFocus", true)
    },
    /** Makes the component check if menu reached scroll start or end and emit scroll events. */
    checkScroll: {
      type: Boolean,
      default: () => config.getOption("dropdown.checkScroll", false)
    },
    /** Dropdown will be expanded (full-width) */
    expanded: { type: Boolean, default: false },
    /** HTML element ID of the dropdown menu element */
    menuId: { type: String, default: null },
    /** Tabindex of the dropdown menu element */
    menuTabindex: { type: Number, default: null },
    /** Dropdown menu tag name */
    menuTag: {
      type: [String, Object, Function],
      default: () => config.getOption("dropdown.menuTag", "div")
    },
    /** Dropdown trigger tag name */
    triggerTag: {
      type: [String, Object, Function],
      default: () => config.getOption("dropdown.triggerTag", "div")
    },
    /**
     * Dropdown will be triggered by any events
     * @values click, hover, contextmenu, focus
     */
    triggers: {
      type: Array,
      default: () => config.getOption("dropdown.triggers", ["click"]),
      validator: (values) => values.filter(
        (value) => ["click", "hover", "contextmenu", "focus"].indexOf(value) > -1
      ).length === values.length
    },
    /** Dropdown delay before it appears (number in ms) */
    delay: { type: Number, default: void 0 },
    /**
     * Dropdown close options (pressing escape, clicking the content or outside)
     * @values true, false, escape, outside, content
     */
    closeable: {
      type: [Array, Boolean],
      default: () => config.getOption("dropdown.closeable", ["escape", "outside", "content"])
    },
    /** Set the tabindex attribute on the dropdown trigger div (-1 to prevent selection via tab key) */
    tabindex: { type: Number, default: 0 },
    /**
     * Role attribute to be passed to the list container for better accessibility.
     * Use menu only in situations where your dropdown is related to a navigation menu.
     * @values list, listbox, menu, dialog
     */
    ariaRole: {
      type: String,
      default: config.getOption("dropdown.ariaRole", "list"),
      validator: (value) => ["list", "listbox", "menu", "dialog"].indexOf(value) > -1
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => config.getOption("dropdown.mobileBreakpoint")
    },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => config.getOption("dropdown.teleport", false)
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
    /** Class of the trigger element */
    triggerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of dropdown menu when inline */
    inlineClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the overlay when on mobile */
    menuMobileOverlayClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the dropdown menu */
    menuClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of dropdown menu position */
    menuPositionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of dropdown menu when active */
    menuActiveClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of dropdown when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of dropdown when disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of dropdown when expanded */
    expandedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the root element indicating position of dropdown */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the root element indicating whether the dropdown is open */
    activeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the root element when the dropdown is hoverable */
    hoverableClass: {
      type: [String, Array, Function],
      default: void 0
    }
  }, {
    "modelValue": {},
    "modelModifiers": {},
    "active": { type: Boolean },
    "activeModifiers": {}
  }),
  emits: /* @__PURE__ */ vue.mergeModels(["update:modelValue", "update:active", "change", "close", "scroll-start", "scroll-end"], ["update:modelValue", "update:active"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const vmodel = vue.useModel(__props, "modelValue");
    const isActive = vue.useModel(__props, "active");
    const autoPosition = vue.ref(props.position);
    vue.watch(
      () => props.position,
      (v) => autoPosition.value = v
    );
    const { isMobile } = useMatchMedia.useMatchMedia(props.mobileBreakpoint);
    const isMobileModal = vue.computed(
      () => isMobile.value && props.mobileModal && !props.inline
    );
    const isMobileNative = vue.computed(() => props.mobileModal && helpers.isMobileAgent.any());
    const menuStyle = vue.computed(() => ({
      maxHeight: props.scrollable ? helpers.toCssDimension(props.maxHeight) : null,
      overflow: props.scrollable ? "auto" : null
    }));
    const hoverable = vue.computed(() => props.triggers.indexOf("hover") >= 0);
    const contentRef = vue.ref();
    const triggerRef = vue.ref();
    const eventCleanups = [];
    let timer;
    vue.watch(
      isActive,
      (value) => {
        if (value && ssr.isClient) {
          setTimeout(() => {
            if (cancelOptions.value.indexOf("outside") >= 0) {
              eventCleanups.push(
                useClickOutside.useClickOutside(contentRef, onClickedOutside, [
                  triggerRef
                ])
              );
            }
            if (cancelOptions.value.indexOf("escape") >= 0) {
              eventCleanups.push(
                useEventListener.useEventListener("keyup", onKeyPress, document, {
                  immediate: true
                })
              );
            }
          });
        } else if (!value) {
          eventCleanups.forEach((fn) => fn());
          eventCleanups.length = 0;
        }
      },
      { immediate: true }
    );
    vue.onUnmounted(() => {
      eventCleanups.forEach((fn) => fn());
      eventCleanups.length = 0;
    });
    const cancelOptions = vue.computed(
      () => typeof props.closeable === "boolean" ? props.closeable ? ["escape", "outside", "content"] : [] : props.closeable
    );
    function onClickedOutside() {
      if (!isActive.value || props.inline)
        return;
      if (cancelOptions.value.indexOf("outside") < 0)
        return;
      emits("close", "outside");
      isActive.value = false;
    }
    function onKeyPress(event) {
      if (isActive.value && (event.key === "Escape" || event.key === "Esc")) {
        if (cancelOptions.value.indexOf("escape") < 0)
          return;
        emits("close", "escape");
        isActive.value = false;
      }
    }
    function onClick() {
      if (props.triggers.indexOf("click") < 0)
        return;
      toggle();
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
    const isHovered = vue.ref(false);
    function onHover() {
      if (!isMobileNative.value && props.triggers.indexOf("hover") >= 0) {
        isHovered.value = true;
        open();
      }
    }
    function onHoverLeave() {
      if (!isMobileNative.value && isHovered.value) {
        isHovered.value = false;
        onClose();
      }
    }
    function toggle() {
      if (props.disabled)
        return;
      if (isActive.value)
        isActive.value = !isActive.value;
      else
        vue.nextTick(() => isActive.value = !isActive.value);
    }
    function open() {
      if (props.disabled)
        return;
      if (props.delay) {
        timer = setTimeout(() => {
          isActive.value = true;
          timer = null;
        }, props.delay);
      } else {
        isActive.value = true;
      }
    }
    function onClose() {
      if (cancelOptions.value.indexOf("content") < 0)
        return;
      emits("close", "content");
      isActive.value = !props.closeable;
      if (timer && props.closeable)
        clearTimeout(timer);
    }
    if (ssr.isClient && props.checkScroll)
      useEventListener.useEventListener("scroll", checkDropdownScroll, contentRef);
    function checkDropdownScroll() {
      const dropdown = unrefElement.unrefElement(contentRef.value);
      if (dropdown.clientHeight !== dropdown.scrollHeight) {
        if (dropdown.scrollTop + dropdown.clientHeight >= dropdown.scrollHeight) {
          emits("scroll-end");
        } else if (dropdown.scrollTop <= 0) {
          emits("scroll-start");
        }
      }
    }
    function selectItem(value) {
      if (props.multiple) {
        if (vmodel.value && Array.isArray(vmodel.value)) {
          if (vmodel.value.indexOf(value) === -1) {
            vmodel.value = [...vmodel.value, value];
          } else {
            vmodel.value = vmodel.value.filter((val) => val !== value);
          }
        } else {
          vmodel.value = [value];
        }
        vue.nextTick(() => emits("change", vmodel.value));
      } else {
        if (vmodel.value !== value) {
          vmodel.value = value;
          vue.nextTick(() => emits("change", vmodel.value));
        }
      }
      if (!props.multiple) {
        if (cancelOptions.value.indexOf("content") < 0)
          return;
        emits("close", "content");
        isActive.value = false;
        isHovered.value = false;
      }
    }
    const provideData = vue.computed(() => ({
      props,
      selected: vmodel.value,
      selectItem
    }));
    useParentProvider.useProviderParent(contentRef, { data: provideData });
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-drop"],
      ["disabledClass", "o-drop--disabled", null, vue.computed(() => props.disabled)],
      ["expandedClass", "o-drop--expanded", null, vue.computed(() => props.expanded)],
      ["inlineClass", "o-drop--inline", null, vue.computed(() => props.inline)],
      [
        "mobileClass",
        "o-drop--mobile",
        null,
        vue.computed(() => isMobileModal.value && !hoverable.value)
      ],
      [
        "positionClass",
        "o-drop--position-",
        autoPosition,
        vue.computed(() => !!autoPosition.value)
      ],
      [
        "activeClass",
        "o-drop--active",
        null,
        vue.computed(() => isActive.value || props.inline)
      ],
      ["hoverableClass", "o-drop--hoverable", null, hoverable]
    );
    const triggerClasses = defineClasses.defineClasses(["triggerClass", "o-drop__trigger"]);
    const positionWrapperClasses = defineClasses.defineClasses([
      "teleportClass",
      "o-drop--teleport",
      null,
      vue.computed(() => !!props.teleport)
    ]);
    const menuMobileOverlayClasses = defineClasses.defineClasses([
      "menuMobileOverlayClass",
      "o-drop__overlay"
    ]);
    const menuClasses = defineClasses.defineClasses(
      ["menuClass", "o-drop__menu"],
      [
        "menuPositionClass",
        "o-drop__menu--",
        autoPosition,
        vue.computed(() => !!autoPosition.value)
      ],
      [
        "menuActiveClass",
        "o-drop__menu--active",
        null,
        vue.computed(() => isActive.value || props.inline)
      ]
    );
    __expose({ $trigger: triggerRef, $content: contentRef });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        "data-oruga": "dropdown",
        class: vue.normalizeClass(vue.unref(rootClasses)),
        onMouseleave: onHoverLeave,
        onFocusout: onHoverLeave
      }, [
        !__props.inline ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.triggerTag), {
          key: 0,
          ref_key: "triggerRef",
          ref: triggerRef,
          tabindex: __props.disabled ? null : __props.tabindex,
          class: vue.normalizeClass(vue.unref(triggerClasses)),
          "aria-haspopup": __props.ariaRole === "list" ? true : __props.ariaRole,
          onClick,
          onContextmenu: onContextMenu,
          onMouseenter: onHover,
          onFocusCapture: onFocus
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "trigger", { active: isActive.value }, () => [
              vue.createTextVNode(vue.toDisplayString(__props.label), 1)
            ])
          ]),
          _: 3
        }, 40, ["tabindex", "class", "aria-haspopup"])) : vue.createCommentVNode("", true),
        vue.createVNode(PositionWrapper_vue_vue_type_script_setup_true_lang._sfc_main, {
          position: autoPosition.value,
          "onUpdate:position": _cache[0] || (_cache[0] = ($event) => autoPosition.value = $event),
          teleport: __props.teleport,
          class: vue.normalizeClass([...vue.unref(rootClasses), ...vue.unref(positionWrapperClasses)]),
          trigger: triggerRef.value,
          disabled: !isActive.value,
          "default-position": "bottom",
          "disable-positioning": !isMobileModal.value
        }, {
          default: vue.withCtx(({ setContent }) => [
            vue.createVNode(vue.Transition, { name: __props.animation }, {
              default: vue.withCtx(() => [
                isMobileModal.value ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  tabindex: -1,
                  class: vue.normalizeClass(vue.unref(menuMobileOverlayClasses)),
                  "aria-hidden": __props.disabled || !isActive.value
                }, null, 10, _hoisted_1)), [
                  [vue.vShow, isActive.value]
                ]) : vue.createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["name"]),
            vue.createVNode(vue.Transition, { name: __props.animation }, {
              default: vue.withCtx(() => [
                vue.withDirectives((vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.menuTag), {
                  id: __props.menuId,
                  ref: (el) => contentRef.value = setContent(el),
                  tabindex: __props.menuTabindex,
                  class: vue.normalizeClass(vue.unref(menuClasses)),
                  style: vue.normalizeStyle(menuStyle.value),
                  role: __props.ariaRole,
                  "aria-hidden": __props.disabled || !isActive.value,
                  "aria-modal": !__props.inline && __props.trapFocus
                }, {
                  default: vue.withCtx(() => [
                    vue.renderSlot(_ctx.$slots, "default", {
                      active: isActive.value,
                      toggle
                    })
                  ]),
                  _: 2
                }, 1032, ["id", "tabindex", "class", "style", "role", "aria-hidden", "aria-modal"])), [
                  [vue.vShow, !__props.disabled && (isActive.value || isHovered.value) || __props.inline],
                  [vue.unref(trapFocus.vTrapFocus), __props.trapFocus]
                ])
              ]),
              _: 2
            }, 1032, ["name"])
          ]),
          _: 3
        }, 8, ["position", "teleport", "class", "trigger", "disabled", "disable-positioning"])
      ], 34);
    };
  }
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "ODropdownItem",
    configField: "dropdown"
  },
  __name: "DropdownItem",
  props: {
    /** The value that will be returned on events and v-model - default is a uuid */
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: void 0
      // () => uuid(),
    },
    /** Item label, unnecessary when default slot is used */
    label: { type: String, default: void 0 },
    /** Item is disabled */
    disabled: { type: Boolean, default: false },
    /** Item is clickable and emit an event */
    clickable: { type: Boolean, default: true },
    /** Dropdown item tag name */
    tag: {
      type: [String, Object, Function],
      default: () => config.getOption("dropdown.itemTag", "div")
    },
    /** Set the tabindex attribute on the dropdown item div (-1 to prevent selection via tab key) */
    tabindex: { type: [Number, String], default: 0 },
    /**
     * Role attribute to be passed to the list item for better accessibility.
     * Use menuitem only in situations where your dropdown is related to a navigation menu.
     * @values listitem, menuitem, button
     */
    ariaRole: {
      type: String,
      default: config.getOption("dropdown.itemAriaRole", "listitem")
    },
    // class props (will not be displayed in the docs)
    /** Class of the dropdown item */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the dropdown item when active  */
    itemActiveClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the dropdown item when clickable */
    itemClickableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the dropdown item when disabled */
    itemDisabledClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const itemValue = vue.computed(() => props.value || helpers.uuid());
    const { parent } = useParentProvider.useProviderChild();
    const isClickable = vue.computed(
      () => !parent.value.props.disabled && !props.disabled && props.clickable
    );
    const isActive = vue.computed(() => {
      if (parent.value.selected === null)
        return false;
      if (parent.value.props.multiple && Array.isArray(parent.value.selected))
        return parent.value.selected.some(
          (selected) => helpers.isEqual(itemValue.value, selected)
        );
      return helpers.isEqual(itemValue.value, parent.value.selected);
    });
    function selectItem(event) {
      if (!isClickable.value)
        return;
      parent.value.selectItem(itemValue.value);
      emits("click", itemValue.value, event);
    }
    const rootClasses = defineClasses.defineClasses(
      ["itemClass", "o-drop__item"],
      [
        "itemDisabledClass",
        "o-drop__item--disabled",
        null,
        vue.computed(() => parent.value.props.disabled || props.disabled)
      ],
      ["itemActiveClass", "o-drop__item--active", null, isActive],
      ["itemClickableClass", "o-drop__item--clickable", null, isClickable]
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.tag), {
        class: vue.normalizeClass(vue.unref(rootClasses)),
        role: __props.ariaRole,
        tabindex: __props.tabindex,
        "data-oruga": "dropdown-item",
        onClick: selectItem
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createTextVNode(vue.toDisplayString(__props.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "role", "tabindex"]);
    };
  }
});
exports._sfc_main = _sfc_main$1;
exports._sfc_main$1 = _sfc_main;
//# sourceMappingURL=DropdownItem.vue_vue_type_script_setup_true_lang-Dpy9L2Ey.cjs.map
