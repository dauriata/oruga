/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, withModifiers, withKeys, withDirectives, createElementVNode, mergeProps, isRef, vModelRadio, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import { g as getOption, b as registerComponent } from "./config-zKhnAIV0.mjs";
import { uuid } from "./helpers.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useVModelBinding } from "./usePropValue-DLZTRe_e.mjs";
import { u as useInputHandler } from "./useInputHandler-BGDwfETo.mjs";
const _hoisted_1 = ["aria-checked"];
const _hoisted_2 = ["disabled", "required", "name", "autocomplete", "value", "aria-labelledby"];
const _hoisted_3 = ["id"];
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      default: () => getOption("radio.variant")
    },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => getOption("radio.size")
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
    ariaLabelledby: { type: String, default: () => uuid() },
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => getOption("radio.autocomplete", "off")
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => getOption("useHtml5Validation", true)
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
    const inputRef = ref();
    const { onBlur, onFocus, onInvalid, setFocus } = useInputHandler(
      inputRef,
      emits,
      props
    );
    const vmodel = useVModelBinding(props, emits);
    const isChecked = computed(() => vmodel.value === props.nativeValue);
    function onInput(event) {
      emits("input", vmodel.value, event);
    }
    const rootClasses = defineClasses(
      ["rootClass", "o-radio"],
      ["checkedClass", "o-radio--checked", null, isChecked],
      [
        "sizeClass",
        "o-radio--",
        computed(() => props.size),
        computed(() => !!props.size)
      ],
      [
        "disabledClass",
        "o-radio--disabled",
        null,
        computed(() => props.disabled)
      ],
      [
        "variantClass",
        "o-radio--",
        computed(() => props.variant),
        computed(() => !!props.variant)
      ]
    );
    const inputClasses = defineClasses(
      ["inputClass", "o-radio__input"],
      ["inputCheckedClass", "o-radio__input--checked", null, isChecked]
    );
    const labelClasses = defineClasses(["labelClass", "o-radio__label"]);
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        ref: "label",
        class: normalizeClass(unref(rootClasses)),
        "data-oruga": "radio",
        role: "radio",
        "aria-checked": isChecked.value,
        onClick: _cache[5] || (_cache[5] = withModifiers(
          //@ts-ignore
          (...args) => unref(setFocus) && unref(setFocus)(...args),
          ["stop"]
        )),
        onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(
          //@ts-ignore
          (...args) => unref(setFocus) && unref(setFocus)(...args),
          ["prevent"]
        ), ["enter"]))
      }, [
        withDirectives(createElementVNode("input", mergeProps(_ctx.$attrs, {
          ref_key: "inputRef",
          ref: inputRef,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(vmodel) ? vmodel.value = $event : null),
          type: "radio",
          "data-oruga-input": "radio",
          class: unref(inputClasses),
          disabled: __props.disabled,
          required: __props.required,
          name: __props.name,
          autocomplete: __props.autocomplete,
          value: __props.nativeValue,
          "aria-labelledby": __props.ariaLabelledby,
          onClick: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["stop"])),
          onBlur: _cache[2] || (_cache[2] = //@ts-ignore
          (...args) => unref(onBlur) && unref(onBlur)(...args)),
          onFocus: _cache[3] || (_cache[3] = //@ts-ignore
          (...args) => unref(onFocus) && unref(onFocus)(...args)),
          onInvalid: _cache[4] || (_cache[4] = //@ts-ignore
          (...args) => unref(onInvalid) && unref(onInvalid)(...args)),
          onInput
        }), null, 16, _hoisted_2), [
          [vModelRadio, unref(vmodel)]
        ]),
        __props.label || _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 0,
          id: __props.ariaLabelledby,
          class: normalizeClass(unref(labelClasses))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.label), 1)
          ])
        ], 10, _hoisted_3)) : createCommentVNode("", true)
      ], 42, _hoisted_1);
    };
  }
});
const index = {
  install(app) {
    registerComponent(app, _sfc_main);
  }
};
export {
  _sfc_main as ORadio,
  index as default
};
//# sourceMappingURL=radio.mjs.map
