"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const Icon_vue_vue_type_script_setup_true_lang = require("./Icon.vue_vue_type_script_setup_true_lang-CGDJNR6y.cjs");
const config = require("./config-JkCO4AEi.cjs");
const helpers = require("./helpers.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const usePropValue = require("./usePropValue-CHGN8et-.cjs");
const useInputHandler = require("./useInputHandler-jezRcEW8.cjs");
const useFieldShare = require("./useFieldShare-DArg23Mc.cjs");
const _hoisted_1 = ["autocomplete", "multiple", "size", "disabled", "aria-labelledby"];
const _hoisted_2 = {
  key: 0,
  value: null,
  disabled: "",
  hidden: ""
};
const _hoisted_3 = ["value"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OSelect",
    configField: "select",
    inheritAttrs: false
  },
  __name: "Select",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: null
    },
    /** Select options, unnecessary when default slot is used */
    options: {
      type: Array,
      default: void 0
    },
    /**
     * Vertical size of input
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => config.getOption("select.size")
    },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => config.getOption("select.variant")
    },
    /** Text when nothing is selected */
    placeholder: { type: String, default: void 0 },
    /** Allow multiple selection */
    multiple: { type: Boolean, default: false },
    /** Same as native disabled */
    disabled: { type: Boolean, default: false },
    /** Makes input full width when inside a grouped or addon field */
    expanded: { type: Boolean, default: false },
    /** Makes the element rounded */
    rounded: { type: Boolean, default: false },
    /** Same as native size */
    nativeSize: { type: [String, Number], default: void 0 },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => config.getOption("select.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => config.getOption("select.icon", void 0)
    },
    /** Makes the icon clickable */
    iconClickable: { type: Boolean, default: false },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => config.getOption("select.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: false },
    /** Variant of right icon */
    iconRightVariant: { type: String, default: void 0 },
    /** Accessibility label to establish relationship between the input and control label */
    ariaLabelledby: { type: String, default: () => helpers.uuid() },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => config.getOption("useHtml5Validation", true)
    },
    /** The message which is shown when a validation error occurs */
    validationMessage: { type: String, default: void 0 },
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => config.getOption("select.autocomplete", "off")
    },
    /** Show status icon using field and variant prop */
    statusIcon: {
      type: Boolean,
      default: () => config.getOption("statusIcon", true)
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the native select element */
    selectClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the left icon space inside the select */
    iconLeftSpaceClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the right icon space inside the select */
    iconRightSpaceClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of select when rounded */
    roundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the select when multiple mode is active */
    multipleClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of select when expanded */
    expandedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of select when disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the left icon */
    iconLeftClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the right icon */
    iconRightClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the select size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the select variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the select placeholder */
    placeholderClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the select arrow */
    arrowClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the select variant for the root element*/
    rootVariantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:modelValue", "focus", "blur", "invalid", "icon-click", "icon-right-click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const selectRef = vue.ref();
    const { checkHtml5Validity, onBlur, onFocus, onInvalid, setFocus } = useInputHandler.useInputHandler(selectRef, emits, props);
    const { parentField, statusVariant, statusVariantIcon } = useFieldShare.injectField();
    const vmodel = usePropValue.useVModelBinding(props, emits, { passive: true });
    const placeholderVisible = vue.computed(() => vmodel.value === null);
    vue.onMounted(() => {
      vue.watch(
        () => vmodel.value,
        (value) => {
          if (parentField == null ? void 0 : parentField.value)
            parentField.value.setFilled(!!value);
          checkHtml5Validity();
        },
        { immediate: true }
      );
    });
    const selectOptions = vue.computed(() => {
      if (!props.options || !Array.isArray(props.options))
        return [];
      return props.options.map(
        (option) => typeof option === "string" ? { value: option, label: option, key: helpers.uuid() } : { ...option, key: helpers.uuid() }
      );
    });
    const hasIconRight = vue.computed(
      () => props.iconRight && !props.multiple || props.statusIcon && statusVariantIcon.value
    );
    const rightIcon = vue.computed(
      () => props.iconRight ? props.iconRight : statusVariantIcon.value
    );
    const rightIconVariant = vue.computed(
      () => props.iconRight ? props.iconRightVariant || props.variant || null : statusVariant.value
    );
    function iconClick(emit, event) {
      emits(emit, event);
      vue.nextTick(() => setFocus());
    }
    function rightIconClick(event) {
      if (props.iconRightClickable)
        iconClick("icon-right-click", event);
    }
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-ctrl-sel"],
      [
        "expandedClass",
        "o-ctrl-sel--expanded",
        null,
        vue.computed(() => props.expanded)
      ],
      [
        "rootVariantClass",
        "o-ctrl-sel--",
        vue.computed(() => statusVariant.value || props.variant),
        vue.computed(() => !!statusVariant.value || !!props.variant)
      ]
    );
    const selectClasses = defineClasses.defineClasses(
      ["selectClass", "o-sel"],
      ["roundedClass", "o-sel--rounded", null, vue.computed(() => props.rounded)],
      ["multipleClass", "o-sel--multiple", null, vue.computed(() => props.multiple)],
      [
        "sizeClass",
        "o-sel--",
        vue.computed(() => props.size),
        vue.computed(() => !!props.size)
      ],
      [
        "variantClass",
        "o-sel--",
        vue.computed(() => statusVariant.value || props.variant),
        vue.computed(() => !!statusVariant.value || !!props.variant)
      ],
      ["disabledClass", "o-sel--disabled", null, vue.computed(() => props.disabled)],
      [
        "iconLeftSpaceClass",
        "o-sel-iconspace-left",
        null,
        vue.computed(() => !!props.icon)
      ],
      [
        "iconRightSpaceClass",
        "o-sel-iconspace-right",
        null,
        vue.computed(() => !!props.iconRight)
      ],
      ["placeholderClass", "o-sel--placeholder", null, placeholderVisible],
      [
        "arrowClass",
        "o-sel-arrow",
        null,
        vue.computed(() => !props.iconRight && !props.multiple)
      ]
    );
    const iconLeftClasses = defineClasses.defineClasses(["iconLeftClass", "o-sel__icon-left"]);
    const iconRightClasses = defineClasses.defineClasses(["iconRightClass", "o-sel__icon-right"]);
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(rootClasses)),
        "data-oruga": "select"
      }, [
        __props.icon ? (vue.openBlock(), vue.createBlock(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
          key: 0,
          class: vue.normalizeClass(vue.unref(iconLeftClasses)),
          clickable: __props.iconClickable,
          icon: __props.icon,
          pack: __props.iconPack,
          size: __props.size,
          onClick: _cache[0] || (_cache[0] = ($event) => iconClick("icon-click", $event))
        }, null, 8, ["class", "clickable", "icon", "pack", "size"])) : vue.createCommentVNode("", true),
        vue.withDirectives(vue.createElementVNode("select", vue.mergeProps(_ctx.$attrs, {
          ref_key: "selectRef",
          ref: selectRef,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(vmodel) ? vmodel.value = $event : null),
          "data-oruga-input": "select",
          class: vue.unref(selectClasses),
          autocomplete: __props.autocomplete,
          multiple: __props.multiple,
          size: __props.nativeSize,
          disabled: __props.disabled,
          "aria-labelledby": __props.ariaLabelledby,
          onBlur: _cache[2] || (_cache[2] = //@ts-ignore
          (...args) => vue.unref(onBlur) && vue.unref(onBlur)(...args)),
          onFocus: _cache[3] || (_cache[3] = //@ts-ignore
          (...args) => vue.unref(onFocus) && vue.unref(onFocus)(...args)),
          onInvalid: _cache[4] || (_cache[4] = //@ts-ignore
          (...args) => vue.unref(onInvalid) && vue.unref(onInvalid)(...args))
        }), [
          __props.placeholder || _ctx.$slots.placeholder ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            placeholderVisible.value ? (vue.openBlock(), vue.createElementBlock("option", _hoisted_2, [
              vue.renderSlot(_ctx.$slots, "placeholder", {}, () => [
                vue.createTextVNode(vue.toDisplayString(__props.placeholder), 1)
              ])
            ])) : vue.createCommentVNode("", true)
          ], 64)) : vue.createCommentVNode("", true),
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(selectOptions.value, (option) => {
              return vue.openBlock(), vue.createElementBlock("option", vue.mergeProps({
                key: option.key,
                value: option.value
              }, option.attrs), vue.toDisplayString(option.label), 17, _hoisted_3);
            }), 128))
          ])
        ], 16, _hoisted_1), [
          [vue.vModelSelect, vue.unref(vmodel)]
        ]),
        hasIconRight.value ? (vue.openBlock(), vue.createBlock(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
          key: 1,
          class: vue.normalizeClass(vue.unref(iconRightClasses)),
          clickable: __props.iconRightClickable,
          icon: rightIcon.value,
          pack: __props.iconPack,
          size: __props.size,
          variant: rightIconVariant.value,
          both: "",
          onClick: rightIconClick
        }, null, 8, ["class", "clickable", "icon", "pack", "size", "variant"])) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
exports._sfc_main = _sfc_main;
//# sourceMappingURL=Select.vue_vue_type_script_setup_true_lang-CepSUurg.cjs.map
