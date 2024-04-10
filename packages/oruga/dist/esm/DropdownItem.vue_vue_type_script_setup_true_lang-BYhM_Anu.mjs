/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, mergeModels, useModel, ref, watch, computed, onUnmounted, openBlock, createElementBlock, normalizeClass, unref, createBlock, resolveDynamicComponent, withCtx, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createVNode, Transition, withDirectives, vShow, normalizeStyle, nextTick } from "vue";
import { _ as _sfc_main$2 } from "./PositionWrapper.vue_vue_type_script_setup_true_lang-D14-2-mO.mjs";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { v as vTrapFocus } from "./trapFocus-BXmCENX1.mjs";
import { isMobileAgent, toCssDimension, uuid, isEqual } from "./helpers.mjs";
import { i as isClient } from "./ssr-BIBU2UWo.mjs";
import { u as unrefElement } from "./unrefElement-bvPf341v.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useEventListener } from "./useEventListener-B3_nr73L.mjs";
import { u as useMatchMedia } from "./useMatchMedia-G3BPCbzR.mjs";
import { u as useProviderParent, a as useProviderChild } from "./useParentProvider-C8ssHz7C.mjs";
import { u as useClickOutside } from "./useClickOutside-BFumA2Sw.mjs";
const _hoisted_1 = ["aria-hidden"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "ODropdown",
    configField: "dropdown"
  },
  __name: "Dropdown",
  props: /* @__PURE__ */ mergeModels({
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
      default: () => getOption("dropdown.maxHeight", 200)
    },
    /**
     * Position of the dropdown relative to the trigger
     * @values auto, top, bottom, left, right, top-right, top-left, bottom-left, bottom-right
     */
    position: {
      type: String,
      default: () => getOption("dropdown.position", "bottom-left"),
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
      default: () => getOption("dropdown.mobileModal", true)
    },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => getOption("dropdown.animation", "fade")
    },
    /** Allows multiple selections */
    multiple: { type: Boolean, default: false },
    /** Trap focus inside the dropdown. */
    trapFocus: {
      type: Boolean,
      default: () => getOption("dropdown.trapFocus", true)
    },
    /** Makes the component check if menu reached scroll start or end and emit scroll events. */
    checkScroll: {
      type: Boolean,
      default: () => getOption("dropdown.checkScroll", false)
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
      default: () => getOption("dropdown.menuTag", "div")
    },
    /** Dropdown trigger tag name */
    triggerTag: {
      type: [String, Object, Function],
      default: () => getOption("dropdown.triggerTag", "div")
    },
    /**
     * Dropdown will be triggered by any events
     * @values click, hover, contextmenu, focus
     */
    triggers: {
      type: Array,
      default: () => getOption("dropdown.triggers", ["click"]),
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
      default: () => getOption("dropdown.closeable", ["escape", "outside", "content"])
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
      default: getOption("dropdown.ariaRole", "list"),
      validator: (value) => ["list", "listbox", "menu", "dialog"].indexOf(value) > -1
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => getOption("dropdown.mobileBreakpoint")
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
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "update:active", "change", "close", "scroll-start", "scroll-end"], ["update:modelValue", "update:active"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const vmodel = useModel(__props, "modelValue");
    const isActive = useModel(__props, "active");
    const autoPosition = ref(props.position);
    watch(
      () => props.position,
      (v) => autoPosition.value = v
    );
    const { isMobile } = useMatchMedia(props.mobileBreakpoint);
    const isMobileModal = computed(
      () => isMobile.value && props.mobileModal && !props.inline
    );
    const isMobileNative = computed(() => props.mobileModal && isMobileAgent.any());
    const menuStyle = computed(() => ({
      maxHeight: props.scrollable ? toCssDimension(props.maxHeight) : null,
      overflow: props.scrollable ? "auto" : null
    }));
    const hoverable = computed(() => props.triggers.indexOf("hover") >= 0);
    const contentRef = ref();
    const triggerRef = ref();
    const eventCleanups = [];
    let timer;
    watch(
      isActive,
      (value) => {
        if (value && isClient) {
          setTimeout(() => {
            if (cancelOptions.value.indexOf("outside") >= 0) {
              eventCleanups.push(
                useClickOutside(contentRef, onClickedOutside, [
                  triggerRef
                ])
              );
            }
            if (cancelOptions.value.indexOf("escape") >= 0) {
              eventCleanups.push(
                useEventListener("keyup", onKeyPress, document, {
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
    onUnmounted(() => {
      eventCleanups.forEach((fn) => fn());
      eventCleanups.length = 0;
    });
    const cancelOptions = computed(
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
    const isHovered = ref(false);
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
        nextTick(() => isActive.value = !isActive.value);
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
    if (isClient && props.checkScroll)
      useEventListener("scroll", checkDropdownScroll, contentRef);
    function checkDropdownScroll() {
      const dropdown = unrefElement(contentRef.value);
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
        nextTick(() => emits("change", vmodel.value));
      } else {
        if (vmodel.value !== value) {
          vmodel.value = value;
          nextTick(() => emits("change", vmodel.value));
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
    const provideData = computed(() => ({
      props,
      selected: vmodel.value,
      selectItem
    }));
    useProviderParent(contentRef, { data: provideData });
    const rootClasses = defineClasses(
      ["rootClass", "o-drop"],
      ["disabledClass", "o-drop--disabled", null, computed(() => props.disabled)],
      ["expandedClass", "o-drop--expanded", null, computed(() => props.expanded)],
      ["inlineClass", "o-drop--inline", null, computed(() => props.inline)],
      [
        "mobileClass",
        "o-drop--mobile",
        null,
        computed(() => isMobileModal.value && !hoverable.value)
      ],
      [
        "positionClass",
        "o-drop--position-",
        autoPosition,
        computed(() => !!autoPosition.value)
      ],
      [
        "activeClass",
        "o-drop--active",
        null,
        computed(() => isActive.value || props.inline)
      ],
      ["hoverableClass", "o-drop--hoverable", null, hoverable]
    );
    const triggerClasses = defineClasses(["triggerClass", "o-drop__trigger"]);
    const positionWrapperClasses = defineClasses([
      "teleportClass",
      "o-drop--teleport",
      null,
      computed(() => !!props.teleport)
    ]);
    const menuMobileOverlayClasses = defineClasses([
      "menuMobileOverlayClass",
      "o-drop__overlay"
    ]);
    const menuClasses = defineClasses(
      ["menuClass", "o-drop__menu"],
      [
        "menuPositionClass",
        "o-drop__menu--",
        autoPosition,
        computed(() => !!autoPosition.value)
      ],
      [
        "menuActiveClass",
        "o-drop__menu--active",
        null,
        computed(() => isActive.value || props.inline)
      ]
    );
    __expose({ $trigger: triggerRef, $content: contentRef });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-oruga": "dropdown",
        class: normalizeClass(unref(rootClasses)),
        onMouseleave: onHoverLeave,
        onFocusout: onHoverLeave
      }, [
        !__props.inline ? (openBlock(), createBlock(resolveDynamicComponent(__props.triggerTag), {
          key: 0,
          ref_key: "triggerRef",
          ref: triggerRef,
          tabindex: __props.disabled ? null : __props.tabindex,
          class: normalizeClass(unref(triggerClasses)),
          "aria-haspopup": __props.ariaRole === "list" ? true : __props.ariaRole,
          onClick,
          onContextmenu: onContextMenu,
          onMouseenter: onHover,
          onFocusCapture: onFocus
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "trigger", { active: isActive.value }, () => [
              createTextVNode(toDisplayString(__props.label), 1)
            ])
          ]),
          _: 3
        }, 40, ["tabindex", "class", "aria-haspopup"])) : createCommentVNode("", true),
        createVNode(_sfc_main$2, {
          position: autoPosition.value,
          "onUpdate:position": _cache[0] || (_cache[0] = ($event) => autoPosition.value = $event),
          teleport: __props.teleport,
          class: normalizeClass([...unref(rootClasses), ...unref(positionWrapperClasses)]),
          trigger: triggerRef.value,
          disabled: !isActive.value,
          "default-position": "bottom",
          "disable-positioning": !isMobileModal.value
        }, {
          default: withCtx(({ setContent }) => [
            createVNode(Transition, { name: __props.animation }, {
              default: withCtx(() => [
                isMobileModal.value ? withDirectives((openBlock(), createElementBlock("div", {
                  key: 0,
                  tabindex: -1,
                  class: normalizeClass(unref(menuMobileOverlayClasses)),
                  "aria-hidden": __props.disabled || !isActive.value
                }, null, 10, _hoisted_1)), [
                  [vShow, isActive.value]
                ]) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["name"]),
            createVNode(Transition, { name: __props.animation }, {
              default: withCtx(() => [
                withDirectives((openBlock(), createBlock(resolveDynamicComponent(__props.menuTag), {
                  id: __props.menuId,
                  ref: (el) => contentRef.value = setContent(el),
                  tabindex: __props.menuTabindex,
                  class: normalizeClass(unref(menuClasses)),
                  style: normalizeStyle(menuStyle.value),
                  role: __props.ariaRole,
                  "aria-hidden": __props.disabled || !isActive.value,
                  "aria-modal": !__props.inline && __props.trapFocus
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", {
                      active: isActive.value,
                      toggle
                    })
                  ]),
                  _: 2
                }, 1032, ["id", "tabindex", "class", "style", "role", "aria-hidden", "aria-modal"])), [
                  [vShow, !__props.disabled && (isActive.value || isHovered.value) || __props.inline],
                  [unref(vTrapFocus), __props.trapFocus]
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
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      default: () => getOption("dropdown.itemTag", "div")
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
      default: getOption("dropdown.itemAriaRole", "listitem")
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
    const itemValue = computed(() => props.value || uuid());
    const { parent } = useProviderChild();
    const isClickable = computed(
      () => !parent.value.props.disabled && !props.disabled && props.clickable
    );
    const isActive = computed(() => {
      if (parent.value.selected === null)
        return false;
      if (parent.value.props.multiple && Array.isArray(parent.value.selected))
        return parent.value.selected.some(
          (selected) => isEqual(itemValue.value, selected)
        );
      return isEqual(itemValue.value, parent.value.selected);
    });
    function selectItem(event) {
      if (!isClickable.value)
        return;
      parent.value.selectItem(itemValue.value);
      emits("click", itemValue.value, event);
    }
    const rootClasses = defineClasses(
      ["itemClass", "o-drop__item"],
      [
        "itemDisabledClass",
        "o-drop__item--disabled",
        null,
        computed(() => parent.value.props.disabled || props.disabled)
      ],
      ["itemActiveClass", "o-drop__item--active", null, isActive],
      ["itemClickableClass", "o-drop__item--clickable", null, isClickable]
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        class: normalizeClass(unref(rootClasses)),
        role: __props.ariaRole,
        tabindex: __props.tabindex,
        "data-oruga": "dropdown-item",
        onClick: selectItem
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "role", "tabindex"]);
    };
  }
});
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
//# sourceMappingURL=DropdownItem.vue_vue_type_script_setup_true_lang-BYhM_Anu.mjs.map
