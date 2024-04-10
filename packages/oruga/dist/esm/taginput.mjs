/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, mergeModels, ref, useModel, computed, watch, watchEffect, useAttrs, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, Fragment, renderList, toDisplayString, createBlock, createCommentVNode, withDirectives, createVNode, mergeProps, createSlots, withCtx, vShow, createTextVNode, nextTick } from "vue";
import { _ as _sfc_main$1 } from "./Icon.vue_vue_type_script_setup_true_lang-BfJM6xYp.mjs";
import { _ as _sfc_main$2 } from "./Autocomplete.vue_vue_type_script_setup_true_lang-yBJqm2bq.mjs";
import { g as getOption, b as registerComponent } from "./config-zKhnAIV0.mjs";
import { getValueByPath } from "./helpers.mjs";
import { d as defineClasses, g as getActiveClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useInputHandler } from "./useInputHandler-BGDwfETo.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OTaginput",
    configField: "taginput",
    inheritAttrs: false
  },
  __name: "Taginput",
  props: /* @__PURE__ */ mergeModels({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: Array, default: () => [] },
    /** Items data */
    data: { type: Array, default: () => [] },
    /** Property of the object (if data is array of objects) to use as display text */
    field: { type: String, default: "value" },
    /** Property of the object (if `data` is array of objects) to use as display text of group */
    groupField: { type: String, default: void 0 },
    /** Property of the object (if `data` is array of objects) to use as key to get items array of each group */
    groupOptions: { type: String, default: void 0 },
    /**
     * Vertical size of the input control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => getOption("taginput.size")
    },
    /**
     * Color of the each item
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => getOption("taginput.variant")
    },
    /** Limits the number of items, plus item counter */
    maxitems: { type: Number, default: void 0 },
    /** Same as native maxlength, plus character counter */
    maxlength: { type: Number, default: void 0 },
    /** Show counter when maxlength or maxtags props are passed */
    counter: {
      type: Boolean,
      default: () => getOption("taginput.counter", true)
    },
    /** Opens a dropdown with choices when the input field is focused */
    openOnFocus: { type: Boolean, default: false },
    /** Keep open dropdown list after select */
    keepOpen: {
      type: Boolean,
      default: () => getOption("autocomplete.keepOpen", false)
    },
    /** Input placeholder */
    placeholder: { type: String, default: void 0 },
    /** Makes input full width when inside a grouped or addon field */
    expanded: { type: Boolean, default: false },
    /** Same as native input disabled */
    disabled: { type: Boolean, default: false },
    /**
     * Array of keys
     * (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)
     * which will add a item when typing
     */
    confirmKeys: {
      type: Array,
      default: () => getOption("taginput.confirmKeys", [",", "Tab", "Enter"])
    },
    /** Array of chars used to split when pasting a new string */
    separators: {
      type: Array,
      default: () => getOption("taginput.separators", [","])
    },
    /** The first option will always be pre-selected (easier to just hit enter or tab) */
    keepFirst: { type: Boolean, default: false },
    /** When autocomplete, it allow to add new items */
    allowNew: { type: Boolean, default: false },
    /** Allows adding the same item multiple time */
    allowDuplicates: { type: Boolean, default: false },
    /** Add autocomplete feature (if true, any Autocomplete props may be used too) */
    allowAutocomplete: { type: Boolean, default: false },
    /** Allow removing last item when pressing given keys, if input is empty */
    removeOnKeys: {
      type: Array,
      default: () => getOption("taginput.removeOnKeys", ["Backspace"])
    },
    /** Function to validate the value of the item before adding */
    beforeAdding: {
      type: Function,
      default: () => true
    },
    /** Function to create a new item to push into v-model (items) */
    createItem: {
      type: Function,
      default: (item) => item
    },
    /** Makes the component check if list reached scroll start or end and emit scroll events. */
    checkScroll: {
      type: Boolean,
      default: () => getOption("taginput.checkScroll", false)
    },
    /** Add close/delete button to the item */
    closable: {
      type: Boolean,
      default: () => getOption("taginput.closable", true)
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => getOption("taginput.iconPack")
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => getOption("taginput.icon")
    },
    /** Icon name of close icon on selected item */
    closeIcon: {
      type: String,
      default: () => getOption("taginput.closeIcon", "close")
    },
    /** Accessibility label for the close button */
    ariaCloseLabel: {
      type: String,
      default: () => getOption("taginput.ariaCloseLabel")
    },
    /** Native options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => getOption("taginput.autocomplete", "off")
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => getOption("useHtml5Validation", true)
    },
    /** The message which is shown when a validation error occurs */
    validationMessage: { type: String, default: void 0 },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => getOption("taginput.teleport", false)
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of input when expanded */
    expandedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the input container */
    containerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the input container size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the entered item variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the close button of entered item */
    closeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the entered item */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the counter element */
    counterClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /**
     * Class configuration for the underlying autocomplete component
     * @ignore
     */
    autocompleteClasses: {
      type: Object,
      default: () => getOption("taginput.autocompleteClasses", {})
    }
  }, {
    "modelValue": { default: [] },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "input", "add", "remove", "focus", "blur", "invalid", "icon-click", "icon-right-click", "scroll-start", "scroll-end"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const autocompleteRef = ref();
    const items = useModel(__props, "modelValue");
    const { setFocus, onFocus, onBlur, onInvalid } = useInputHandler(
      autocompleteRef,
      emits,
      props
    );
    const newItem = ref("");
    const isComposing = ref(false);
    const valueLength = computed(() => newItem.value.trim().length);
    const itemsLength = computed(() => items.value.length);
    watch(
      () => props.modelValue,
      (value) => {
        items.value = Array.isArray(value) ? value.slice(0) : value || [];
      }
    );
    const hasInput = computed(
      () => props.maxitems == null || itemsLength.value < props.maxitems
    );
    watchEffect(() => {
      if (!hasInput.value)
        onBlur();
    });
    const separatorsAsRegExp = computed(
      () => props.separators.length ? new RegExp(
        props.separators.map(
          (s) => s ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : null
        ).join("|"),
        "g"
      ) : null
    );
    function getNormalizedItemText(item) {
      if (typeof item === "object")
        item = getValueByPath(item, props.field);
      return `${item}`;
    }
    function addItem(item) {
      item = item || newItem.value.trim();
      if (item) {
        if (typeof item === "string") {
          const reg = separatorsAsRegExp.value;
          if (reg && item.match(reg)) {
            item.split(reg).map((t) => t.trim()).filter((t) => t.length !== 0).map(addItem);
            return;
          }
        }
        const itemToAdd = props.createItem(item);
        const add = !props.allowDuplicates ? items.value.indexOf(itemToAdd) === -1 : true;
        if (add && props.beforeAdding(item)) {
          items.value.push(itemToAdd);
          emits("add", itemToAdd);
        }
      }
      requestAnimationFrame(() => {
        newItem.value = "";
        emits("input", newItem.value);
      });
    }
    function removeItem(index2, event) {
      const item = items.value.splice(index2, 1)[0];
      emits("remove", item);
      if (event)
        event.stopPropagation();
      if (props.openOnFocus && autocompleteRef.value)
        setFocus();
    }
    function onSelect(option) {
      if (!option)
        return;
      addItem(option);
      nextTick(() => newItem.value = "");
    }
    function onKeydown(event) {
      var _a;
      if (props.removeOnKeys.indexOf(event.key) !== -1 && !((_a = newItem.value) == null ? void 0 : _a.length) && itemsLength.value > 0) {
        removeItem(itemsLength.value - 1);
      }
      if (props.allowAutocomplete && !props.allowNew)
        return;
      if (props.confirmKeys.indexOf(event.key) >= 0) {
        if (event.key !== "Tab")
          event.preventDefault();
        if (event.key === "Enter" && isComposing.value)
          return;
        addItem();
      }
    }
    function onInput(value) {
      emits("input", String(value).trim());
    }
    function handleOnBlur(event) {
      if (!props.allowAutocomplete)
        addItem();
      onBlur(event);
    }
    const attrs = useAttrs();
    const autocompleteRootClasses = defineClasses([
      "autocompleteClasses.rootClass",
      "o-taginput__autocomplete"
    ]);
    const autocompleteInputClasses = defineClasses([
      "autocompleteClasses.inputClasses.inputClass",
      "o-taginput__input"
    ]);
    const autocompleteBind = computed(() => ({
      ...attrs,
      "root-class": getActiveClasses(autocompleteRootClasses.value),
      "input-classes": {
        "input-class": getActiveClasses(autocompleteInputClasses.value)
      },
      ...props.autocompleteClasses
    }));
    const rootClasses = defineClasses(
      ["rootClass", "o-taginput"],
      [
        "expandedClass",
        "o-taginput--expanded",
        null,
        computed(() => props.expanded)
      ]
    );
    const containerClasses = defineClasses(
      ["containerClass", "o-taginput__container"],
      [
        "sizeClass",
        "o-taginput__container--",
        computed(() => props.size),
        computed(() => !!props.size)
      ]
    );
    const itemClasses = defineClasses(
      ["itemClass", "o-taginput__item"],
      [
        "variantClass",
        "o-taginput__item--",
        computed(() => props.variant),
        computed(() => !!props.variant)
      ]
    );
    const closeClasses = defineClasses(["closeClass", "o-taginput__item__close"]);
    const counterClasses = defineClasses(["counterClass", "o-taginput__counter"]);
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-oruga": "taginput",
        class: normalizeClass(unref(rootClasses))
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(containerClasses)),
          onFocus: _cache[7] || (_cache[7] = //@ts-ignore
          (...args) => unref(onFocus) && unref(onFocus)(...args)),
          onBlur: _cache[8] || (_cache[8] = //@ts-ignore
          (...args) => unref(onBlur) && unref(onBlur)(...args))
        }, [
          renderSlot(_ctx.$slots, "selected", { items: items.value }, () => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, index2) => {
              return openBlock(), createElementBlock("span", {
                key: getNormalizedItemText(item) + index2,
                class: normalizeClass(unref(itemClasses))
              }, [
                createElementVNode("span", null, toDisplayString(getNormalizedItemText(item)), 1),
                __props.closable ? (openBlock(), createBlock(_sfc_main$1, {
                  key: 0,
                  class: normalizeClass(unref(closeClasses)),
                  clickable: "",
                  pack: __props.iconPack,
                  icon: __props.closeIcon,
                  "aria-label": __props.ariaCloseLabel,
                  both: "",
                  onClick: ($event) => removeItem(index2, $event)
                }, null, 8, ["class", "pack", "icon", "aria-label", "onClick"])) : createCommentVNode("", true)
              ], 2);
            }), 128))
          ]),
          withDirectives(createVNode(_sfc_main$2, mergeProps({
            ref_key: "autocompleteRef",
            ref: autocompleteRef,
            modelValue: newItem.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newItem.value = $event)
          }, autocompleteBind.value, {
            data: __props.data,
            field: __props.field,
            icon: __props.icon,
            "icon-pack": __props.iconPack,
            maxlength: __props.maxlength,
            size: __props.size,
            disabled: __props.disabled,
            autocomplete: __props.autocomplete,
            "open-on-focus": __props.openOnFocus,
            "keep-first": __props.keepFirst,
            "keep-open": __props.keepOpen,
            "group-field": __props.groupField,
            "group-options": __props.groupOptions,
            "has-counter": false,
            "use-html5-validation": __props.useHtml5Validation,
            "check-scroll": __props.checkScroll,
            teleport: __props.teleport,
            "confirm-keys": __props.confirmKeys,
            placeholder: __props.placeholder,
            "validation-message": __props.validationMessage,
            expanded: __props.expanded,
            onInput,
            onFocus: unref(onFocus),
            onBlur: handleOnBlur,
            onInvalid: unref(onInvalid),
            onKeydown,
            onCompositionstart: _cache[1] || (_cache[1] = ($event) => isComposing.value = true),
            onCompositionend: _cache[2] || (_cache[2] = ($event) => isComposing.value = false),
            onSelect,
            onScrollStart: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("scroll-start")),
            onScrollEnd: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("scroll-end")),
            onIconClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("icon-click", $event)),
            onIconRightClick: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("icon-right-click", $event))
          }), createSlots({ _: 2 }, [
            _ctx.$slots.header ? {
              name: "header",
              fn: withCtx(() => [
                renderSlot(_ctx.$slots, "header")
              ]),
              key: "0"
            } : void 0,
            _ctx.$slots.default ? {
              name: "default",
              fn: withCtx((props2) => [
                renderSlot(_ctx.$slots, "default", {
                  option: props2.option,
                  index: props2.index,
                  value: props2.value
                })
              ]),
              key: "1"
            } : void 0,
            _ctx.$slots.empty ? {
              name: "empty",
              fn: withCtx(() => [
                renderSlot(_ctx.$slots, "empty")
              ]),
              key: "2"
            } : void 0,
            _ctx.$slots.footer ? {
              name: "footer",
              fn: withCtx(() => [
                renderSlot(_ctx.$slots, "footer")
              ]),
              key: "3"
            } : void 0
          ]), 1040, ["modelValue", "data", "field", "icon", "icon-pack", "maxlength", "size", "disabled", "autocomplete", "open-on-focus", "keep-first", "keep-open", "group-field", "group-options", "use-html5-validation", "check-scroll", "teleport", "confirm-keys", "placeholder", "validation-message", "expanded", "onFocus", "onInvalid"]), [
            [vShow, hasInput.value]
          ])
        ], 34),
        __props.counter && (__props.maxitems || __props.maxlength) ? (openBlock(), createElementBlock("small", {
          key: 0,
          class: normalizeClass(unref(counterClasses))
        }, [
          __props.maxlength && valueLength.value > 0 ? renderSlot(_ctx.$slots, "counter", {
            key: 0,
            items: valueLength.value,
            total: __props.maxlength
          }, () => [
            createTextVNode(toDisplayString(valueLength.value) + " / " + toDisplayString(__props.maxlength), 1)
          ]) : __props.maxitems ? renderSlot(_ctx.$slots, "counter", {
            key: 1,
            items: itemsLength.value,
            total: __props.maxitems
          }, () => [
            createTextVNode(toDisplayString(itemsLength.value) + " / " + toDisplayString(__props.maxitems), 1)
          ]) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const index = {
  install(Vue) {
    registerComponent(Vue, _sfc_main);
  }
};
export {
  _sfc_main as OTaginput,
  index as default
};
//# sourceMappingURL=taginput.mjs.map
