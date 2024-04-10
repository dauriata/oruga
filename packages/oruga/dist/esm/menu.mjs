/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, ref, computed, toRaw, resolveComponent, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createBlock, createCommentVNode, createElementVNode, toDisplayString, resolveDynamicComponent, mergeProps, withCtx, Transition, withDirectives, vShow } from "vue";
import { g as getOption, b as registerComponent } from "./config-zKhnAIV0.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useProviderParent, a as useProviderChild } from "./useParentProvider-C8ssHz7C.mjs";
import { a as usePropBinding } from "./usePropValue-DLZTRe_e.mjs";
const _hoisted_1$1 = ["role"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OMenu",
    configField: "menu"
  },
  __name: "Menu",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Menu label */
    label: { type: String, default: void 0 },
    /** If sub menu items are collapsible */
    accordion: { type: Boolean, default: true },
    /** If the menu items are clickable */
    activable: { type: Boolean, default: true },
    /**
     * Role attribute to be passed to the list container for better accessibility.
     * Use menu only in situations where your dropdown is related to a navigation menu.
     * @values list, menu, dialog
     */
    ariaRole: {
      type: String,
      default: getOption("menu.ariaRole", "menu"),
      validator: (value) => ["menu", "list", "dialog"].indexOf(value) > -1
    },
    /** Icon to be shown */
    icon: { type: String, default: void 0 },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => getOption("menu.iconPack")
    },
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
      type: String,
      default: () => getOption("menu.iconSize")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the menu list */
    listClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the menu list label */
    listLabelClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const rootRef = ref();
    const provideData = computed(() => ({
      activable: props.activable,
      accordion: props.accordion,
      resetMenu
    }));
    const { childItems } = useProviderParent(rootRef, {
      data: provideData
    });
    function resetMenu(excludedItems = []) {
      childItems.value.forEach((item) => {
        if (!excludedItems.includes(toRaw(item)))
          item.data.reset();
      });
    }
    const rootClasses = defineClasses(["rootClass", "o-menu"]);
    const listClasses = defineClasses(["listClass", "o-menu__list"]);
    const labelClasses = defineClasses(["listLabelClass", "o-menu__label"]);
    return (_ctx, _cache) => {
      const _component_o_icon = resolveComponent("o-icon");
      return openBlock(), createElementBlock("div", {
        ref_key: "rootRef",
        ref: rootRef,
        "data-oruga": "menu",
        class: normalizeClass(unref(rootClasses))
      }, [
        __props.label || _ctx.$slots.label ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(labelClasses))
        }, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            __props.icon ? (openBlock(), createBlock(_component_o_icon, {
              key: 0,
              icon: __props.icon,
              pack: __props.iconPack,
              size: __props.iconSize
            }, null, 8, ["icon", "pack", "size"])) : createCommentVNode("", true),
            createElementVNode("span", null, toDisplayString(__props.label), 1)
          ])
        ], 2)) : createCommentVNode("", true),
        createElementVNode("ul", {
          class: normalizeClass(unref(listClasses)),
          role: __props.ariaRole
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10, _hoisted_1$1)
      ], 2);
    };
  }
});
const _hoisted_1 = ["role", "data-id"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OMenuItem",
    configField: "menu",
    inheritAttrs: false
  },
  __name: "MenuItem",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** The active state of the menu item, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: false },
    /** Menu item label */
    label: { type: String, default: void 0 },
    /** Menu item will be expanded */
    expanded: { type: Boolean, default: false },
    /** Menu item will be disabled */
    disabled: { type: Boolean, default: false },
    /** Icon to be shown */
    icon: { type: String, default: void 0 },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => getOption("menu.iconPack")
    },
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
      type: String,
      default: () => getOption("menu.iconSize")
    },
    /** Transition name to apply on menu list */
    animation: {
      type: String,
      default: () => getOption("menu.animation", "slide")
    },
    /** Menu item tag name */
    tag: {
      type: [String, Object, Function],
      default: () => getOption("menu.menuTag", "a")
    },
    /**
     * Role attribute to be passed to the list item for better accessibility.
     * @values listitem, menuitem
     */
    ariaRole: {
      type: String,
      default: getOption("menu.itemAriaRole", "menuitem")
    },
    // class props (will not be displayed in the docs)
    /** Class of the menu item */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the active menu item */
    itemActiveClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the disabled menu item */
    itemDisabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the icon of menu item */
    itemIconTextClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the menu item when is a submenu */
    itemSubmenuClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the root element of menu item */
    itemWrapperClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:modelValue", "update:expanded"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const providedData = computed(() => ({
      reset
    }));
    const { parent, item } = useProviderChild({
      data: providedData
    });
    const providedItem = useProviderChild({
      key: "menu-item",
      needParent: false
    });
    const itemParent = computed(() => {
      var _a;
      return (_a = providedItem.parent) == null ? void 0 : _a.value;
    });
    const isActive = usePropBinding("active", props, emits, { passive: true });
    const isExpanded = usePropBinding("expanded", props, emits, { passive: true });
    const identifier = computed(
      () => itemParent.value ? `menu-item-${providedItem.item.value.identifier}` : `menu-${item.value.identifier}`
    );
    function onClick() {
      if (props.disabled)
        return;
      triggerReset();
      isExpanded.value = props.expanded || !isExpanded.value;
      if (parent.value.activable)
        isActive.value = true;
    }
    function triggerReset(child) {
      var _a;
      if ((_a = itemParent.value) == null ? void 0 : _a.triggerReset) {
        itemParent.value.triggerReset(toRaw(item.value));
      } else if (parent.value.resetMenu) {
        parent.value.resetMenu([toRaw(item.value), child]);
      }
    }
    function reset() {
      if (parent.value.accordion)
        isExpanded.value = false;
      if (parent.value.activable)
        isActive.value = false;
    }
    const rootRef = ref();
    const provideData = computed(() => ({
      triggerReset
    }));
    useProviderParent(rootRef, { key: "menu-item", data: provideData });
    const itemClasses = defineClasses(
      ["itemClass", "o-menu__item"],
      ["itemActiveClass", "o-menu__item--active", null, isActive],
      [
        "itemDisabledClass",
        "o-menu__item--disabled",
        null,
        computed(() => props.disabled)
      ],
      [
        "itemIconTextClass",
        "o-menu__item--icon-text",
        null,
        computed(() => !!props.icon)
      ]
    );
    const submenuClasses = defineClasses([
      "itemSubmenuClass",
      "o-menu__item__submenu"
    ]);
    const wrapperClasses = defineClasses([
      "itemWrapperClass",
      "o-menu__item__wrapper"
    ]);
    return (_ctx, _cache) => {
      const _component_o_icon = resolveComponent("o-icon");
      return openBlock(), createElementBlock("li", {
        ref_key: "rootRef",
        ref: rootRef,
        role: __props.ariaRole,
        class: normalizeClass(unref(wrapperClasses)),
        "data-id": identifier.value,
        "data-oruga": "menu-item",
        "aria-roledescription": "item"
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps(_ctx.$attrs, {
          class: unref(itemClasses),
          onClick: _cache[0] || (_cache[0] = ($event) => onClick())
        }), {
          default: withCtx(() => [
            __props.icon ? (openBlock(), createBlock(_component_o_icon, {
              key: 0,
              icon: __props.icon,
              pack: __props.iconPack,
              size: __props.iconSize
            }, null, 8, ["icon", "pack", "size"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "label", {
              expanded: unref(isExpanded),
              active: unref(isActive)
            }, () => [
              createElementVNode("span", null, toDisplayString(__props.label), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])),
        _ctx.$slots.default ? (openBlock(), createBlock(Transition, {
          key: 0,
          name: __props.animation
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("ul", {
              class: normalizeClass(unref(submenuClasses))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2), [
              [vShow, unref(isExpanded)]
            ])
          ]),
          _: 3
        }, 8, ["name"])) : createCommentVNode("", true)
      ], 10, _hoisted_1);
    };
  }
});
const index = {
  install(app) {
    registerComponent(app, _sfc_main$1);
    registerComponent(app, _sfc_main);
  }
};
export {
  _sfc_main$1 as OMenu,
  _sfc_main as OMenuItem,
  index as default
};
//# sourceMappingURL=menu.mjs.map
