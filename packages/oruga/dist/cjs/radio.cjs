"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const config = require("./config-JkCO4AEi.cjs");
const helpers = require("./helpers.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const usePropValue = require("./usePropValue-CHGN8et-.cjs");
const useInputHandler = require("./useInputHandler-jezRcEW8.cjs");
const _hoisted_1 = ["aria-checked"];
const _hoisted_2 = ["disabled", "required", "name", "autocomplete", "value", "aria-labelledby"];
const _hoisted_3 = ["id"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "ORadio",
    configField: "radio",
    inheritAttrs: false
  },
  __name: "Radio",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: [String, Number, Boolean], default: void 0 },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => config.getOption("radio.variant")
    },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => config.getOption("radio.size")
    },
    /** Input label, unnecessary when default slot is used */
    label: { type: String, default: void 0 },
    /** Same as native value */
    nativeValue: { type: [String, Number, Boolean], default: void 0 },
    /** Same as native disabled */
    disabled: { type: Boolean, default: false },
    /** Same as native required */
    required: { type: Boolean, default: false },
    /** Same as native name */
    name: { type: String, default: void 0 },
    /** Accessibility label to establish relationship between the checkbox and control label */
    ariaLabelledby: { type: String, default: () => helpers.uuid() },
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => config.getOption("radio.autocomplete", "off")
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => config.getOption("useHtml5Validation", true)
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when radio is disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the root element when checked */
    checkedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the native input element */
    inputClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the native input element when checked */
    inputCheckedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the radio label */
    labelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the radio size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the radio variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "focus", "blur", "invalid"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const inputRef = vue.ref();
    const { onBlur, onFocus, onInvalid, setFocus } = useInputHandler.useInputHandler(
      inputRef,
      emits,
      props
    );
    const vmodel = usePropValue.useVModelBinding(props, emits);
    const isChecked = vue.computed(() => vmodel.value === props.nativeValue);
    function onInput(event) {
      emits("input", vmodel.value, event);
    }
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-radio"],
      ["checkedClass", "o-radio--checked", null, isChecked],
      [
        "sizeClass",
        "o-radio--",
        vue.computed(() => props.size),
        vue.computed(() => !!props.size)
      ],
      [
        "disabledClass",
        "o-radio--disabled",
        null,
        vue.computed(() => props.disabled)
      ],
      [
        "variantClass",
        "o-radio--",
        vue.computed(() => props.variant),
        vue.computed(() => !!props.variant)
      ]
    );
    const inputClasses = defineClasses.defineClasses(
      ["inputClass", "o-radio__input"],
      ["inputCheckedClass", "o-radio__input--checked", null, isChecked]
    );
    const labelClasses = defineClasses.defineClasses(["labelClass", "o-radio__label"]);
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("label", {
        ref: "label",
        class: vue.normalizeClass(vue.unref(rootClasses)),
        "data-oruga": "radio",
        role: "radio",
        "aria-checked": isChecked.value,
        onClick: _cache[5] || (_cache[5] = vue.withModifiers(
          //@ts-ignore
          (...args) => vue.unref(setFocus) && vue.unref(setFocus)(...args),
          ["stop"]
        )),
        onKeydown: _cache[6] || (_cache[6] = vue.withKeys(vue.withModifiers(
          //@ts-ignore
          (...args) => vue.unref(setFocus) && vue.unref(setFocus)(...args),
          ["prevent"]
        ), ["enter"]))
      }, [
        vue.withDirectives(vue.createElementVNode("input", vue.mergeProps(_ctx.$attrs, {
          ref_key: "inputRef",
          ref: inputRef,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(vmodel) ? vmodel.value = $event : null),
          type: "radio",
          "data-oruga-input": "radio",
          class: vue.unref(inputClasses),
          disabled: __props.disabled,
          required: __props.required,
          name: __props.name,
          autocomplete: __props.autocomplete,
          value: __props.nativeValue,
          "aria-labelledby": __props.ariaLabelledby,
          onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
          }, ["stop"])),
          onBlur: _cache[2] || (_cache[2] = //@ts-ignore
          (...args) => vue.unref(onBlur) && vue.unref(onBlur)(...args)),
          onFocus: _cache[3] || (_cache[3] = //@ts-ignore
          (...args) => vue.unref(onFocus) && vue.unref(onFocus)(...args)),
          onInvalid: _cache[4] || (_cache[4] = //@ts-ignore
          (...args) => vue.unref(onInvalid) && vue.unref(onInvalid)(...args)),
          onInput
        }), null, 16, _hoisted_2), [
          [vue.vModelRadio, vue.unref(vmodel)]
        ]),
        __props.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          id: __props.ariaLabelledby,
          class: vue.normalizeClass(vue.unref(labelClasses))
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createTextVNode(vue.toDisplayString(__props.label), 1)
          ])
        ], 10, _hoisted_3)) : vue.createCommentVNode("", true)
      ], 42, _hoisted_1);
    };
  }
});
const index = {
  install(app) {
    config.registerComponent(app, _sfc_main);
  }
};
exports.ORadio = _sfc_main;
exports.default = index;
//# sourceMappingURL=radio.cjs.map
