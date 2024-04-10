/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, withKeys, withModifiers, withDirectives, createElementVNode, mergeProps, isRef, vModelCheckbox, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import { g as getOption, b as registerComponent } from "./config-zKhnAIV0.mjs";
import { uuid } from "./helpers.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useVModelBinding } from "./usePropValue-DLZTRe_e.mjs";
import { u as useInputHandler } from "./useInputHandler-BGDwfETo.mjs";
const _hoisted_1 = ["aria-checked"];
const _hoisted_2 = ["disabled", "required", "name", "autocomplete", "value", "true-value", "false-value", "aria-labelledby"];
const _hoisted_3 = ["id"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OSwitch",
    configField: "switch",
    inheritAttrs: false
  },
  __name: "Switch",
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
      default: () => getOption("switch.variant")
    },
    /**
     * Color of the switch when is passive
     * @values primary, info, success, warning, danger, and any other custom color
     */
    passiveVariant: {
      type: String,
      default: () => getOption("switch.passiveVariant")
    },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => getOption("switch.size")
    },
    /** Input label, unnecessary when default slot is used */
    label: { type: String, default: void 0 },
    /** Same as native value */
    nativeValue: { type: [String, Number, Boolean], default: void 0 },
    /** Same as native disabled */
    disabled: { type: Boolean, default: false },
    /** Same as native required */
    required: { type: Boolean, default: false },
    /** Name attribute on native checkbox */
    name: { type: String, default: void 0 },
    /** Overrides the returned value when it's checked */
    trueValue: { type: [String, Number, Boolean], default: true },
    /** Overrides the returned value when it's not checked */
    falseValue: { type: [String, Number, Boolean], default: false },
    /** Rounded style */
    rounded: { type: Boolean, default: true },
    /** Label position */
    position: { type: String, default: "right" },
    /** Accessibility label to establish relationship between the switch and control label' */
    ariaLabelledby: { type: String, default: () => uuid() },
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => getOption("switch.autocomplete", "off")
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
    /** Class when switch is disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the outer switch check */
    switchClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the outer switch check when checked */
    switchCheckedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the inner switch check */
    switchCheckClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the switch when rounded */
    roundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the switch passive variant */
    passiveVariantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of switch label position */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Root class of the native input checkbox */
    inputClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the native input element when checked */
    inputCheckedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the switch label */
    labelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the switch size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the switch variant */
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
    const vmodel = useVModelBinding(props, emits, {
      passive: true
    });
    const isChecked = computed(
      () => vmodel.value === props.trueValue || Array.isArray(vmodel.value) && vmodel.value.includes(props.nativeValue)
    );
    function onInput(event) {
      emits("input", vmodel.value, event);
    }
    const rootClasses = defineClasses(
      ["rootClass", "o-switch"],
      [
        "sizeClass",
        "o-switch--",
        computed(() => props.size),
        computed(() => !!props.size)
      ],
      [
        "disabledClass",
        "o-switch--disabled",
        null,
        computed(() => props.disabled)
      ],
      [
        "variantClass",
        "o-switch--",
        computed(() => props.variant),
        computed(() => !!props.variant)
      ],
      [
        "positionClass",
        "o-switch--",
        computed(() => props.position),
        computed(() => !!props.position)
      ],
      [
        "passiveVariantClass",
        "o-switch--",
        computed(() => props.passiveVariant + "-passive"),
        computed(() => !!props.passiveVariant)
      ]
    );
    const inputClasses = defineClasses(
      ["inputClass", "o-switch__input"],
      ["inputCheckedClass", "o-switch__input--checked", null, isChecked]
    );
    const switchClasses = defineClasses(
      ["switchClass", "o-switch__check"],
      ["switchCheckedClass", "o-switch__check--checked", null, isChecked],
      ["roundedClass", "o-switch--rounded", null, computed(() => props.rounded)]
    );
    const switchCheckClasses = defineClasses(
      ["switchCheckClass", "o-switch__check-switch"],
      ["roundedClass", "o-switch--rounded", null, computed(() => props.rounded)]
    );
    const labelClasses = defineClasses(["labelClass", "o-switch__label"]);
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        ref: "label",
        class: normalizeClass(unref(rootClasses)),
        "data-oruga": "switch",
        role: "switch",
        "aria-checked": isChecked.value,
        onClick: _cache[5] || (_cache[5] = //@ts-ignore
        (...args) => unref(setFocus) && unref(setFocus)(...args)),
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
          role: "switch",
          "data-oruga-input": "switch",
          class: unref(inputClasses),
          disabled: __props.disabled,
          required: __props.required,
          name: __props.name,
          autocomplete: __props.autocomplete,
          value: __props.nativeValue,
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
        }), null, 16, _hoisted_2), [
          [vModelCheckbox, unref(vmodel)]
        ]),
        createElementVNode("span", {
          class: normalizeClass(unref(switchClasses))
        }, [
          createElementVNode("span", {
            class: normalizeClass(unref(switchCheckClasses))
          }, null, 2)
        ], 2),
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
  _sfc_main as OSwitch,
  index as default
};
//# sourceMappingURL=switch.mjs.map
