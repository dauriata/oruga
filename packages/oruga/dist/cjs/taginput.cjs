"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const Icon_vue_vue_type_script_setup_true_lang = require("./Icon.vue_vue_type_script_setup_true_lang-CGDJNR6y.cjs");
const Autocomplete_vue_vue_type_script_setup_true_lang = require("./Autocomplete.vue_vue_type_script_setup_true_lang-CAyT8Fls.cjs");
const config = require("./config-JkCO4AEi.cjs");
const helpers = require("./helpers.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const useInputHandler = require("./useInputHandler-jezRcEW8.cjs");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OTaginput",
    configField: "taginput",
    inheritAttrs: false
  },
  __name: "Taginput",
  props: /* @__PURE__ */ vue.mergeModels({
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
      default: () => config.getOption("taginput.size")
    },
    /**
     * Color of the each item
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => config.getOption("taginput.variant")
    },
    /** Limits the number of items, plus item counter */
    maxitems: { type: Number, default: void 0 },
    /** Same as native maxlength, plus character counter */
    maxlength: { type: Number, default: void 0 },
    /** Show counter when maxlength or maxtags props are passed */
    counter: {
      type: Boolean,
      default: () => config.getOption("taginput.counter", true)
    },
    /** Opens a dropdown with choices when the input field is focused */
    openOnFocus: { type: Boolean, default: false },
    /** Keep open dropdown list after select */
    keepOpen: {
      type: Boolean,
      default: () => config.getOption("autocomplete.keepOpen", false)
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
      default: () => config.getOption("taginput.confirmKeys", [",", "Tab", "Enter"])
    },
    /** Array of chars used to split when pasting a new string */
    separators: {
      type: Array,
      default: () => config.getOption("taginput.separators", [","])
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
      default: () => config.getOption("taginput.removeOnKeys", ["Backspace"])
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
      default: () => config.getOption("taginput.checkScroll", false)
    },
    /** Add close/delete button to the item */
    closable: {
      type: Boolean,
      default: () => config.getOption("taginput.closable", true)
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => config.getOption("taginput.iconPack")
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => config.getOption("taginput.icon")
    },
    /** Icon name of close icon on selected item */
    closeIcon: {
      type: String,
      default: () => config.getOption("taginput.closeIcon", "close")
    },
    /** Accessibility label for the close button */
    ariaCloseLabel: {
      type: String,
      default: () => config.getOption("taginput.ariaCloseLabel")
    },
    /** Native options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => config.getOption("taginput.autocomplete", "off")
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => config.getOption("useHtml5Validation", true)
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
      default: () => config.getOption("taginput.teleport", false)
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
      default: () => config.getOption("taginput.autocompleteClasses", {})
    }
  }, {
    "modelValue": { default: [] },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ vue.mergeModels(["update:modelValue", "input", "add", "remove", "focus", "blur", "invalid", "icon-click", "icon-right-click", "scroll-start", "scroll-end"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const autocompleteRef = vue.ref();
    const items = vue.useModel(__props, "modelValue");
    const { setFocus, onFocus, onBlur, onInvalid } = useInputHandler.useInputHandler(
      autocompleteRef,
      emits,
      props
    );
    const newItem = vue.ref("");
    const isComposing = vue.ref(false);
    const valueLength = vue.computed(() => newItem.value.trim().length);
    const itemsLength = vue.computed(() => items.value.length);
    vue.watch(
      () => props.modelValue,
      (value) => {
        items.value = Array.isArray(value) ? value.slice(0) : value || [];
      }
    );
    const hasInput = vue.computed(
      () => props.maxitems == null || itemsLength.value < props.maxitems
    );
    vue.watchEffect(() => {
      if (!hasInput.value)
        onBlur();
    });
    const separatorsAsRegExp = vue.computed(
      () => props.separators.length ? new RegExp(
        props.separators.map(
          (s) => s ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : null
        ).join("|"),
        "g"
      ) : null
    );
    function getNormalizedItemText(item) {
      if (typeof item === "object")
        item = helpers.getValueByPath(item, props.field);
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
      vue.nextTick(() => newItem.value = "");
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
    const attrs = vue.useAttrs();
    const autocompleteRootClasses = defineClasses.defineClasses([
      "autocompleteClasses.rootClass",
      "o-taginput__autocomplete"
    ]);
    const autocompleteInputClasses = defineClasses.defineClasses([
      "autocompleteClasses.inputClasses.inputClass",
      "o-taginput__input"
    ]);
    const autocompleteBind = vue.computed(() => ({
      ...attrs,
      "root-class": defineClasses.getActiveClasses(autocompleteRootClasses.value),
      "input-classes": {
        "input-class": defineClasses.getActiveClasses(autocompleteInputClasses.value)
      },
      ...props.autocompleteClasses
    }));
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-taginput"],
      [
        "expandedClass",
        "o-taginput--expanded",
        null,
        vue.computed(() => props.expanded)
      ]
    );
    const containerClasses = defineClasses.defineClasses(
      ["containerClass", "o-taginput__container"],
      [
        "sizeClass",
        "o-taginput__container--",
        vue.computed(() => props.size),
        vue.computed(() => !!props.size)
      ]
    );
    const itemClasses = defineClasses.defineClasses(
      ["itemClass", "o-taginput__item"],
      [
        "variantClass",
        "o-taginput__item--",
        vue.computed(() => props.variant),
        vue.computed(() => !!props.variant)
      ]
    );
    const closeClasses = defineClasses.defineClasses(["closeClass", "o-taginput__item__close"]);
    const counterClasses = defineClasses.defineClasses(["counterClass", "o-taginput__counter"]);
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        "data-oruga": "taginput",
        class: vue.normalizeClass(vue.unref(rootClasses))
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(containerClasses)),
          onFocus: _cache[7] || (_cache[7] = //@ts-ignore
          (...args) => vue.unref(onFocus) && vue.unref(onFocus)(...args)),
          onBlur: _cache[8] || (_cache[8] = //@ts-ignore
          (...args) => vue.unref(onBlur) && vue.unref(onBlur)(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "selected", { items: items.value }, () => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(items.value, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("span", {
                key: getNormalizedItemText(item) + index2,
                class: vue.normalizeClass(vue.unref(itemClasses))
              }, [
                vue.createElementVNode("span", null, vue.toDisplayString(getNormalizedItemText(item)), 1),
                __props.closable ? (vue.openBlock(), vue.createBlock(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
                  key: 0,
                  class: vue.normalizeClass(vue.unref(closeClasses)),
                  clickable: "",
                  pack: __props.iconPack,
                  icon: __props.closeIcon,
                  "aria-label": __props.ariaCloseLabel,
                  both: "",
                  onClick: ($event) => removeItem(index2, $event)
                }, null, 8, ["class", "pack", "icon", "aria-label", "onClick"])) : vue.createCommentVNode("", true)
              ], 2);
            }), 128))
          ]),
          vue.withDirectives(vue.createVNode(Autocomplete_vue_vue_type_script_setup_true_lang._sfc_main, vue.mergeProps({
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
            onFocus: vue.unref(onFocus),
            onBlur: handleOnBlur,
            onInvalid: vue.unref(onInvalid),
            onKeydown,
            onCompositionstart: _cache[1] || (_cache[1] = ($event) => isComposing.value = true),
            onCompositionend: _cache[2] || (_cache[2] = ($event) => isComposing.value = false),
            onSelect,
            onScrollStart: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("scroll-start")),
            onScrollEnd: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("scroll-end")),
            onIconClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("icon-click", $event)),
            onIconRightClick: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("icon-right-click", $event))
          }), vue.createSlots({ _: 2 }, [
            _ctx.$slots.header ? {
              name: "header",
              fn: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "header")
              ]),
              key: "0"
            } : void 0,
            _ctx.$slots.default ? {
              name: "default",
              fn: vue.withCtx((props2) => [
                vue.renderSlot(_ctx.$slots, "default", {
                  option: props2.option,
                  index: props2.index,
                  value: props2.value
                })
              ]),
              key: "1"
            } : void 0,
            _ctx.$slots.empty ? {
              name: "empty",
              fn: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "empty")
              ]),
              key: "2"
            } : void 0,
            _ctx.$slots.footer ? {
              name: "footer",
              fn: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "footer")
              ]),
              key: "3"
            } : void 0
          ]), 1040, ["modelValue", "data", "field", "icon", "icon-pack", "maxlength", "size", "disabled", "autocomplete", "open-on-focus", "keep-first", "keep-open", "group-field", "group-options", "use-html5-validation", "check-scroll", "teleport", "confirm-keys", "placeholder", "validation-message", "expanded", "onFocus", "onInvalid"]), [
            [vue.vShow, hasInput.value]
          ])
        ], 34),
        __props.counter && (__props.maxitems || __props.maxlength) ? (vue.openBlock(), vue.createElementBlock("small", {
          key: 0,
          class: vue.normalizeClass(vue.unref(counterClasses))
        }, [
          __props.maxlength && valueLength.value > 0 ? vue.renderSlot(_ctx.$slots, "counter", {
            key: 0,
            items: valueLength.value,
            total: __props.maxlength
          }, () => [
            vue.createTextVNode(vue.toDisplayString(valueLength.value) + " / " + vue.toDisplayString(__props.maxlength), 1)
          ]) : __props.maxitems ? vue.renderSlot(_ctx.$slots, "counter", {
            key: 1,
            items: itemsLength.value,
            total: __props.maxitems
          }, () => [
            vue.createTextVNode(vue.toDisplayString(itemsLength.value) + " / " + vue.toDisplayString(__props.maxitems), 1)
          ]) : vue.createCommentVNode("", true)
        ], 2)) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
const index = {
  install(Vue) {
    config.registerComponent(Vue, _sfc_main);
  }
};
exports.OTaginput = _sfc_main;
exports.default = index;
//# sourceMappingURL=taginput.cjs.map
