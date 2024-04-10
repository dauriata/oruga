/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, mergeModels, ref, computed, useModel, onMounted, watch, nextTick, openBlock, createElementBlock, normalizeClass, unref, withDirectives, mergeProps, vModelDynamic, vModelText, createBlock, createCommentVNode, toDisplayString } from "vue";
import { _ as _sfc_main$1 } from "./Icon.vue_vue_type_script_setup_true_lang-BfJM6xYp.mjs";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { uuid } from "./helpers.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useInputHandler } from "./useInputHandler-BGDwfETo.mjs";
import { i as injectField } from "./useFieldShare-rUPsRYD7.mjs";
const _hoisted_1 = ["data-oruga-input", "type", "maxlength", "autocomplete", "placeholder", "disabled", "aria-labelledby"];
const _hoisted_2 = ["maxlength", "placeholder", "disabled", "aria-labelledby"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OInput",
    configField: "input",
    inheritAttrs: false
  },
  __name: "Input",
  props: /* @__PURE__ */ mergeModels({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: [String, Number], default: "" },
    /**
     * Input type, like native
     * @values Any native input type, and textarea
     */
    type: { type: String, default: "text" },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => getOption("input.size")
    },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => getOption("input.variant")
    },
    /** Input placeholder */
    placeholder: { type: String, default: void 0 },
    /** Makes input full width when inside a grouped or addon field */
    expanded: { type: Boolean, default: false },
    /** Makes the element rounded */
    rounded: { type: Boolean, default: false },
    /** Same as native disabled */
    disabled: { type: Boolean, default: false },
    /** Adds the reveal password functionality */
    passwordReveal: { type: Boolean, default: false },
    /** Same as native maxlength, plus character counter */
    maxlength: { type: [Number, String], default: void 0 },
    /** Show character counter when maxlength prop is passed */
    counter: {
      type: Boolean,
      default: () => getOption("input.counter", false)
    },
    /** Automatically adjust height in textarea */
    autosize: { type: Boolean, default: false },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => getOption("input.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => getOption("input.icon", void 0)
    },
    /** Makes the icon clickable */
    iconClickable: { type: Boolean, default: false },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => getOption("input.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: false },
    /** Variant of right icon */
    iconRightVariant: { type: String, default: void 0 },
    /** Add a button/icon to clear the inputed text */
    clearable: {
      type: Boolean,
      default: () => getOption("input.clearable", false)
    },
    /** Icon name to be added on the clear button */
    clearIcon: {
      type: String,
      default: () => getOption("input.clearIcon", "close-circle")
    },
    /** Show status icon using field and variant prop */
    statusIcon: {
      type: Boolean,
      default: () => getOption("statusIcon", true)
    },
    /** Native options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => getOption("input.autocomplete", "off")
    },
    /** Accessibility label to establish relationship between the checkbox and control label */
    ariaLabelledby: { type: String, default: () => uuid() },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => getOption("useHtml5Validation", true)
    },
    /** The message which is shown when a validation error occurs */
    validationMessage: { type: String, default: void 0 },
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
    /** Class of input when type textarea */
    textareaClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the left icon space inside the input */
    iconLeftSpaceClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the right icon space inside the input */
    iconRightSpaceClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the native input element */
    inputClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of input when rounded */
    roundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of input when disabled */
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
    /** Class to display when a right icon is used */
    hasIconRightClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the counter element */
    counterClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the input size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the input variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  }, {
    "modelValue": { default: "" },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "input", "focus", "blur", "invalid", "icon-click", "icon-right-click"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const inputRef = ref();
    const textareaRef = ref();
    const elementRef = computed(
      () => props.type === "textarea" ? textareaRef.value : inputRef.value
    );
    const {
      checkHtml5Validity,
      onBlur,
      onFocus,
      onInvalid,
      setFocus,
      isValid,
      isFocused
    } = useInputHandler(elementRef, emits, props);
    const { parentField, statusVariant, statusVariantIcon } = injectField();
    const vmodel = useModel(__props, "modelValue");
    const valueLength = computed(
      () => typeof vmodel.value === "string" ? vmodel.value.length : typeof vmodel.value === "number" ? vmodel.value.toString().length : 0
    );
    onMounted(() => {
      watch(
        () => vmodel.value,
        (value) => {
          if (parentField == null ? void 0 : parentField.value)
            parentField.value.setFilled(!!value);
          if (props.autosize)
            resize();
          if (!isValid.value)
            nextTick(() => checkHtml5Validity());
        },
        { immediate: true }
      );
    });
    const height = ref("auto");
    function resize() {
      height.value = "auto";
      nextTick(() => {
        if (!textareaRef.value)
          return;
        const scrollHeight = textareaRef.value.scrollHeight;
        height.value = scrollHeight + "px";
      });
    }
    const computedStyles = computed(
      () => props.autosize ? {
        resize: "none",
        height: height.value,
        overflow: "hidden"
      } : {}
    );
    function onInput(event) {
      emits("input", event.target.value, event);
    }
    const hasIconRight = computed(() => {
      return !!(props.passwordReveal || props.statusIcon && statusVariantIcon.value || props.clearable && vmodel.value && props.clearIcon || props.iconRight);
    });
    const computedIconRight = computed(() => {
      if (props.passwordReveal) {
        return passwordVisibleIcon.value;
      } else if (props.clearable && vmodel.value && props.clearIcon) {
        return props.clearIcon;
      } else if (props.iconRight) {
        return props.iconRight;
      }
      return statusVariantIcon.value;
    });
    const computedIconRightVariant = computed(
      () => props.passwordReveal || props.iconRight ? props.iconRightVariant || props.variant || null : statusVariant.value
    );
    function iconClick(event) {
      emits("icon-click", event);
      nextTick(() => setFocus());
    }
    function rightIconClick(event) {
      if (props.passwordReveal)
        togglePasswordVisibility();
      else if (props.clearable)
        vmodel.value = "";
      if (props.iconRightClickable) {
        emits("icon-right-click", event);
        nextTick(() => setFocus());
      }
    }
    const isPasswordVisible = ref(false);
    const inputType = computed(() => {
      if (props.passwordReveal) {
        return isPasswordVisible.value ? "text" : "password";
      } else {
        return props.type;
      }
    });
    const passwordVisibleIcon = computed(
      () => !isPasswordVisible.value ? "eye" : "eye-off"
    );
    function togglePasswordVisibility() {
      isPasswordVisible.value = !isPasswordVisible.value;
      nextTick(() => setFocus());
    }
    const rootClasses = defineClasses(
      ["rootClass", "o-input__wrapper"],
      [
        "expandedClass",
        "o-input__wrapper--expanded",
        null,
        computed(() => props.expanded)
      ],
      [
        "hasIconRightClass",
        "o-input__wrapper--has-icon-right",
        null,
        hasIconRight
      ]
    );
    const inputClasses = defineClasses(
      ["inputClass", "o-input"],
      ["roundedClass", "o-input--rounded", null, computed(() => props.rounded)],
      [
        "sizeClass",
        "o-input--",
        computed(() => props.size),
        computed(() => !!props.size)
      ],
      [
        "variantClass",
        "o-input--",
        computed(() => statusVariant.value || props.variant),
        computed(() => !!statusVariant.value || !!props.variant)
      ],
      [
        "disabledClass",
        "o-input--disabled",
        null,
        computed(() => props.disabled)
      ],
      [
        "textareaClass",
        "o-input__textarea",
        null,
        computed(() => props.type === "textarea")
      ],
      [
        "iconLeftSpaceClass",
        "o-input--iconspace-left",
        null,
        computed(() => !!props.icon)
      ],
      ["iconRightSpaceClass", "o-input--iconspace-right", null, hasIconRight]
    );
    const iconLeftClasses = defineClasses(["iconLeftClass", "o-input__icon-left"]);
    const iconRightClasses = defineClasses([
      "iconRightClass",
      "o-input__icon-right"
    ]);
    const counterClasses = defineClasses(["counterClass", "o-input__counter"]);
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-oruga": "input",
        class: normalizeClass(unref(rootClasses))
      }, [
        __props.type !== "textarea" ? withDirectives((openBlock(), createElementBlock("input", mergeProps({ key: 0 }, _ctx.$attrs, {
          ref_key: "inputRef",
          ref: inputRef,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vmodel.value = $event),
          "data-oruga-input": inputType.value,
          type: inputType.value,
          class: unref(inputClasses),
          maxlength: __props.maxlength,
          autocomplete: __props.autocomplete,
          placeholder: __props.placeholder,
          disabled: __props.disabled,
          "aria-labelledby": __props.ariaLabelledby,
          onBlur: _cache[1] || (_cache[1] = //@ts-ignore
          (...args) => unref(onBlur) && unref(onBlur)(...args)),
          onFocus: _cache[2] || (_cache[2] = //@ts-ignore
          (...args) => unref(onFocus) && unref(onFocus)(...args)),
          onInvalid: _cache[3] || (_cache[3] = //@ts-ignore
          (...args) => unref(onInvalid) && unref(onInvalid)(...args)),
          onInput
        }), null, 16, _hoisted_1)), [
          [vModelDynamic, vmodel.value]
        ]) : withDirectives((openBlock(), createElementBlock("textarea", mergeProps({ key: 1 }, _ctx.$attrs, {
          ref_key: "textareaRef",
          ref: textareaRef,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vmodel.value = $event),
          "data-oruga-input": "textarea",
          class: unref(inputClasses),
          maxlength: __props.maxlength,
          style: computedStyles.value,
          placeholder: __props.placeholder,
          disabled: __props.disabled,
          "aria-labelledby": __props.ariaLabelledby,
          onBlur: _cache[5] || (_cache[5] = //@ts-ignore
          (...args) => unref(onBlur) && unref(onBlur)(...args)),
          onFocus: _cache[6] || (_cache[6] = //@ts-ignore
          (...args) => unref(onFocus) && unref(onFocus)(...args)),
          onInvalid: _cache[7] || (_cache[7] = //@ts-ignore
          (...args) => unref(onInvalid) && unref(onInvalid)(...args)),
          onInput
        }), null, 16, _hoisted_2)), [
          [vModelText, vmodel.value]
        ]),
        __props.icon ? (openBlock(), createBlock(_sfc_main$1, {
          key: 2,
          class: normalizeClass(unref(iconLeftClasses)),
          clickable: __props.iconClickable,
          icon: __props.icon,
          pack: __props.iconPack,
          size: __props.size,
          onClick: iconClick
        }, null, 8, ["class", "clickable", "icon", "pack", "size"])) : createCommentVNode("", true),
        hasIconRight.value ? (openBlock(), createBlock(_sfc_main$1, {
          key: 3,
          class: normalizeClass(unref(iconRightClasses)),
          clickable: __props.passwordReveal || __props.clearable || __props.iconRightClickable,
          icon: computedIconRight.value,
          pack: __props.iconPack,
          size: __props.size,
          variant: computedIconRightVariant.value,
          both: "",
          onClick: rightIconClick
        }, null, 8, ["class", "clickable", "icon", "pack", "size", "variant"])) : createCommentVNode("", true),
        __props.maxlength && __props.counter && unref(isFocused) && __props.type !== "number" ? (openBlock(), createElementBlock("small", {
          key: 4,
          class: normalizeClass(unref(counterClasses))
        }, toDisplayString(valueLength.value) + " / " + toDisplayString(__props.maxlength), 3)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Input.vue_vue_type_script_setup_true_lang-Cne1qVCn.mjs.map
