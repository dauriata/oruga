"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const Icon_vue_vue_type_script_setup_true_lang = require("./Icon.vue_vue_type_script_setup_true_lang-CGDJNR6y.cjs");
const config = require("./config-JkCO4AEi.cjs");
const helpers = require("./helpers.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const useInputHandler = require("./useInputHandler-jezRcEW8.cjs");
const useFieldShare = require("./useFieldShare-DArg23Mc.cjs");
const _hoisted_1 = ["data-oruga-input", "type", "maxlength", "autocomplete", "placeholder", "disabled", "aria-labelledby"];
const _hoisted_2 = ["maxlength", "placeholder", "disabled", "aria-labelledby"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OInput",
    configField: "input",
    inheritAttrs: false
  },
  __name: "Input",
  props: /* @__PURE__ */ vue.mergeModels({
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
      default: () => config.getOption("input.size")
    },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => config.getOption("input.variant")
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
      default: () => config.getOption("input.counter", false)
    },
    /** Automatically adjust height in textarea */
    autosize: { type: Boolean, default: false },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => config.getOption("input.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => config.getOption("input.icon", void 0)
    },
    /** Makes the icon clickable */
    iconClickable: { type: Boolean, default: false },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => config.getOption("input.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: false },
    /** Variant of right icon */
    iconRightVariant: { type: String, default: void 0 },
    /** Add a button/icon to clear the inputed text */
    clearable: {
      type: Boolean,
      default: () => config.getOption("input.clearable", false)
    },
    /** Icon name to be added on the clear button */
    clearIcon: {
      type: String,
      default: () => config.getOption("input.clearIcon", "close-circle")
    },
    /** Show status icon using field and variant prop */
    statusIcon: {
      type: Boolean,
      default: () => config.getOption("statusIcon", true)
    },
    /** Native options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => config.getOption("input.autocomplete", "off")
    },
    /** Accessibility label to establish relationship between the checkbox and control label */
    ariaLabelledby: { type: String, default: () => helpers.uuid() },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => config.getOption("useHtml5Validation", true)
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
  emits: /* @__PURE__ */ vue.mergeModels(["update:modelValue", "input", "focus", "blur", "invalid", "icon-click", "icon-right-click"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const inputRef = vue.ref();
    const textareaRef = vue.ref();
    const elementRef = vue.computed(
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
    } = useInputHandler.useInputHandler(elementRef, emits, props);
    const { parentField, statusVariant, statusVariantIcon } = useFieldShare.injectField();
    const vmodel = vue.useModel(__props, "modelValue");
    const valueLength = vue.computed(
      () => typeof vmodel.value === "string" ? vmodel.value.length : typeof vmodel.value === "number" ? vmodel.value.toString().length : 0
    );
    vue.onMounted(() => {
      vue.watch(
        () => vmodel.value,
        (value) => {
          if (parentField == null ? void 0 : parentField.value)
            parentField.value.setFilled(!!value);
          if (props.autosize)
            resize();
          if (!isValid.value)
            vue.nextTick(() => checkHtml5Validity());
        },
        { immediate: true }
      );
    });
    const height = vue.ref("auto");
    function resize() {
      height.value = "auto";
      vue.nextTick(() => {
        if (!textareaRef.value)
          return;
        const scrollHeight = textareaRef.value.scrollHeight;
        height.value = scrollHeight + "px";
      });
    }
    const computedStyles = vue.computed(
      () => props.autosize ? {
        resize: "none",
        height: height.value,
        overflow: "hidden"
      } : {}
    );
    function onInput(event) {
      emits("input", event.target.value, event);
    }
    const hasIconRight = vue.computed(() => {
      return !!(props.passwordReveal || props.statusIcon && statusVariantIcon.value || props.clearable && vmodel.value && props.clearIcon || props.iconRight);
    });
    const computedIconRight = vue.computed(() => {
      if (props.passwordReveal) {
        return passwordVisibleIcon.value;
      } else if (props.clearable && vmodel.value && props.clearIcon) {
        return props.clearIcon;
      } else if (props.iconRight) {
        return props.iconRight;
      }
      return statusVariantIcon.value;
    });
    const computedIconRightVariant = vue.computed(
      () => props.passwordReveal || props.iconRight ? props.iconRightVariant || props.variant || null : statusVariant.value
    );
    function iconClick(event) {
      emits("icon-click", event);
      vue.nextTick(() => setFocus());
    }
    function rightIconClick(event) {
      if (props.passwordReveal)
        togglePasswordVisibility();
      else if (props.clearable)
        vmodel.value = "";
      if (props.iconRightClickable) {
        emits("icon-right-click", event);
        vue.nextTick(() => setFocus());
      }
    }
    const isPasswordVisible = vue.ref(false);
    const inputType = vue.computed(() => {
      if (props.passwordReveal) {
        return isPasswordVisible.value ? "text" : "password";
      } else {
        return props.type;
      }
    });
    const passwordVisibleIcon = vue.computed(
      () => !isPasswordVisible.value ? "eye" : "eye-off"
    );
    function togglePasswordVisibility() {
      isPasswordVisible.value = !isPasswordVisible.value;
      vue.nextTick(() => setFocus());
    }
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-input__wrapper"],
      [
        "expandedClass",
        "o-input__wrapper--expanded",
        null,
        vue.computed(() => props.expanded)
      ],
      [
        "hasIconRightClass",
        "o-input__wrapper--has-icon-right",
        null,
        hasIconRight
      ]
    );
    const inputClasses = defineClasses.defineClasses(
      ["inputClass", "o-input"],
      ["roundedClass", "o-input--rounded", null, vue.computed(() => props.rounded)],
      [
        "sizeClass",
        "o-input--",
        vue.computed(() => props.size),
        vue.computed(() => !!props.size)
      ],
      [
        "variantClass",
        "o-input--",
        vue.computed(() => statusVariant.value || props.variant),
        vue.computed(() => !!statusVariant.value || !!props.variant)
      ],
      [
        "disabledClass",
        "o-input--disabled",
        null,
        vue.computed(() => props.disabled)
      ],
      [
        "textareaClass",
        "o-input__textarea",
        null,
        vue.computed(() => props.type === "textarea")
      ],
      [
        "iconLeftSpaceClass",
        "o-input--iconspace-left",
        null,
        vue.computed(() => !!props.icon)
      ],
      ["iconRightSpaceClass", "o-input--iconspace-right", null, hasIconRight]
    );
    const iconLeftClasses = defineClasses.defineClasses(["iconLeftClass", "o-input__icon-left"]);
    const iconRightClasses = defineClasses.defineClasses([
      "iconRightClass",
      "o-input__icon-right"
    ]);
    const counterClasses = defineClasses.defineClasses(["counterClass", "o-input__counter"]);
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        "data-oruga": "input",
        class: vue.normalizeClass(vue.unref(rootClasses))
      }, [
        __props.type !== "textarea" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", vue.mergeProps({ key: 0 }, _ctx.$attrs, {
          ref_key: "inputRef",
          ref: inputRef,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vmodel.value = $event),
          "data-oruga-input": inputType.value,
          type: inputType.value,
          class: vue.unref(inputClasses),
          maxlength: __props.maxlength,
          autocomplete: __props.autocomplete,
          placeholder: __props.placeholder,
          disabled: __props.disabled,
          "aria-labelledby": __props.ariaLabelledby,
          onBlur: _cache[1] || (_cache[1] = //@ts-ignore
          (...args) => vue.unref(onBlur) && vue.unref(onBlur)(...args)),
          onFocus: _cache[2] || (_cache[2] = //@ts-ignore
          (...args) => vue.unref(onFocus) && vue.unref(onFocus)(...args)),
          onInvalid: _cache[3] || (_cache[3] = //@ts-ignore
          (...args) => vue.unref(onInvalid) && vue.unref(onInvalid)(...args)),
          onInput
        }), null, 16, _hoisted_1)), [
          [vue.vModelDynamic, vmodel.value]
        ]) : vue.withDirectives((vue.openBlock(), vue.createElementBlock("textarea", vue.mergeProps({ key: 1 }, _ctx.$attrs, {
          ref_key: "textareaRef",
          ref: textareaRef,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vmodel.value = $event),
          "data-oruga-input": "textarea",
          class: vue.unref(inputClasses),
          maxlength: __props.maxlength,
          style: computedStyles.value,
          placeholder: __props.placeholder,
          disabled: __props.disabled,
          "aria-labelledby": __props.ariaLabelledby,
          onBlur: _cache[5] || (_cache[5] = //@ts-ignore
          (...args) => vue.unref(onBlur) && vue.unref(onBlur)(...args)),
          onFocus: _cache[6] || (_cache[6] = //@ts-ignore
          (...args) => vue.unref(onFocus) && vue.unref(onFocus)(...args)),
          onInvalid: _cache[7] || (_cache[7] = //@ts-ignore
          (...args) => vue.unref(onInvalid) && vue.unref(onInvalid)(...args)),
          onInput
        }), null, 16, _hoisted_2)), [
          [vue.vModelText, vmodel.value]
        ]),
        __props.icon ? (vue.openBlock(), vue.createBlock(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
          key: 2,
          class: vue.normalizeClass(vue.unref(iconLeftClasses)),
          clickable: __props.iconClickable,
          icon: __props.icon,
          pack: __props.iconPack,
          size: __props.size,
          onClick: iconClick
        }, null, 8, ["class", "clickable", "icon", "pack", "size"])) : vue.createCommentVNode("", true),
        hasIconRight.value ? (vue.openBlock(), vue.createBlock(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
          key: 3,
          class: vue.normalizeClass(vue.unref(iconRightClasses)),
          clickable: __props.passwordReveal || __props.clearable || __props.iconRightClickable,
          icon: computedIconRight.value,
          pack: __props.iconPack,
          size: __props.size,
          variant: computedIconRightVariant.value,
          both: "",
          onClick: rightIconClick
        }, null, 8, ["class", "clickable", "icon", "pack", "size", "variant"])) : vue.createCommentVNode("", true),
        __props.maxlength && __props.counter && vue.unref(isFocused) && __props.type !== "number" ? (vue.openBlock(), vue.createElementBlock("small", {
          key: 4,
          class: vue.normalizeClass(vue.unref(counterClasses))
        }, vue.toDisplayString(valueLength.value) + " / " + vue.toDisplayString(__props.maxlength), 3)) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
exports._sfc_main = _sfc_main;
//# sourceMappingURL=Input.vue_vue_type_script_setup_true_lang-CWmlmVsP.cjs.map
