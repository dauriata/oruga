/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, withModifiers, withKeys, withDirectives, createElementVNode, mergeProps, isRef, vModelCheckbox, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { uuid } from "./helpers.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useVModelBinding, a as usePropBinding } from "./usePropValue-DLZTRe_e.mjs";
import { u as useInputHandler } from "./useInputHandler-BGDwfETo.mjs";
const _hoisted_1 = ["aria-checked"];
const _hoisted_2 = ["disabled", "required", "name", "autocomplete", "value", ".indeterminate", "true-value", "false-value", "aria-labelledby"];
const _hoisted_3 = ["id"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OCheckbox",
    configField: "checkbox",
    inheritAttrs: false
  },
  __name: "Checkbox",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: [String, Number, Boolean, Array], default: void 0 },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => getOption("checkbox.variant")
    },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => getOption("checkbox.size")
    },
    /** Input label, unnecessary when default slot is used */
    label: { type: String, default: void 0 },
    /** Same as native indeterminate */
    indeterminate: { type: Boolean, default: false },
    /** Same as native value */
    nativeValue: { type: [String, Number, Boolean], default: void 0 },
    /** Same as native disabled */
    disabled: { type: Boolean, default: false },
    /** Same as native required */
    required: { type: Boolean, default: false },
    /** Same as native name */
    name: { type: String, default: void 0 },
    /** Overrides the returned value when it's checked */
    trueValue: { type: [String, Number, Boolean], default: true },
    /** Overrides the returned value when it's not checked */
    falseValue: { type: [String, Number, Boolean], default: false },
    /** Accessibility label to establish relationship between the checkbox and control label */
    ariaLabelledby: { type: String, default: () => uuid() },
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => getOption("checkbox.autocomplete", "off")
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
    /** Class when checkbox is disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the root element when checked */
    checkedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the checkbox input */
    inputClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the checkbox input when checked */
    inputCheckedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when checkbox is indeterminate */
    indeterminateClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the checkbox labe */
    labelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the checkbox size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the checkbox variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "update:indeterminate", "focus", "blur", "invalid"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const inputRef = ref();
    const { onBlur, onFocus, onInvalid, setFocus } = useInputHandler(
      inputRef,
      emits,
      props
    );
    const vmodel = useVModelBinding(props, emits, { passive: true });
    const isIndeterminate = usePropBinding("indeterminate", props, emits);
    const isChecked = computed(
      () => vmodel.value === props.trueValue || Array.isArray(vmodel.value) && vmodel.value.includes(props.nativeValue)
    );
    function onInput(event) {
      emits("input", vmodel.value, event);
    }
    const rootClasses = defineClasses(
      ["rootClass", "o-chk"],
      ["checkedClass", "o-chk--checked", null, isChecked],
      [
        "sizeClass",
        "o-chk--",
        computed(() => props.size),
        computed(() => !!props.size)
      ],
      ["disabledClass", "o-chk--disabled", null, computed(() => props.disabled)],
      [
        "variantClass",
        "o-chk--",
        computed(() => props.variant),
        computed(() => !!props.variant)
      ]
    );
    const inputClasses = defineClasses(
      ["inputClass", "o-chk__input"],
      ["inputCheckedClass", "o-chk__input--checked", null, isChecked],
      [
        "indeterminateClass",
        "o-chk__input--indeterminate",
        null,
        isIndeterminate
      ]
    );
    const labelClasses = defineClasses(["labelClass", "o-chk__label"]);
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        ref: "label",
        class: normalizeClass(unref(rootClasses)),
        "data-oruga": "checkbox",
        role: "checkbox",
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
          type: "checkbox",
          "data-oruga-input": "checkbox",
          class: unref(inputClasses),
          disabled: __props.disabled,
          required: __props.required,
          name: __props.name,
          autocomplete: __props.autocomplete,
          value: __props.nativeValue,
          ".indeterminate": __props.indeterminate,
          "true-value": __props.trueValue,
          "false-value": __props.falseValue,
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
        }), null, 48, _hoisted_2), [
          [vModelCheckbox, unref(vmodel)]
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
export {
  _sfc_main as _
};
//# sourceMappingURL=Checkbox.vue_vue_type_script_setup_true_lang-BinxQJLz.mjs.map
