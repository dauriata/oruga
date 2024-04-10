/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, ref, computed, onMounted, watch, openBlock, createElementBlock, normalizeClass, unref, createBlock, createCommentVNode, withDirectives, createElementVNode, mergeProps, isRef, Fragment, renderSlot, createTextVNode, toDisplayString, renderList, vModelSelect, nextTick } from "vue";
import { _ as _sfc_main$1 } from "./Icon.vue_vue_type_script_setup_true_lang-BfJM6xYp.mjs";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { uuid } from "./helpers.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useVModelBinding } from "./usePropValue-DLZTRe_e.mjs";
import { u as useInputHandler } from "./useInputHandler-BGDwfETo.mjs";
import { i as injectField } from "./useFieldShare-rUPsRYD7.mjs";
const _hoisted_1 = ["autocomplete", "multiple", "size", "disabled", "aria-labelledby"];
const _hoisted_2 = {
  key: 0,
  value: null,
  disabled: "",
  hidden: ""
};
const _hoisted_3 = ["value"];
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      default: () => getOption("select.size")
    },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => getOption("select.variant")
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
      default: () => getOption("select.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => getOption("select.icon", void 0)
    },
    /** Makes the icon clickable */
    iconClickable: { type: Boolean, default: false },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => getOption("select.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: false },
    /** Variant of right icon */
    iconRightVariant: { type: String, default: void 0 },
    /** Accessibility label to establish relationship between the input and control label */
    ariaLabelledby: { type: String, default: () => uuid() },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => getOption("useHtml5Validation", true)
    },
    /** The message which is shown when a validation error occurs */
    validationMessage: { type: String, default: void 0 },
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => getOption("select.autocomplete", "off")
    },
    /** Show status icon using field and variant prop */
    statusIcon: {
      type: Boolean,
      default: () => getOption("statusIcon", true)
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
    const selectRef = ref();
    const { checkHtml5Validity, onBlur, onFocus, onInvalid, setFocus } = useInputHandler(selectRef, emits, props);
    const { parentField, statusVariant, statusVariantIcon } = injectField();
    const vmodel = useVModelBinding(props, emits, { passive: true });
    const placeholderVisible = computed(() => vmodel.value === null);
    onMounted(() => {
      watch(
        () => vmodel.value,
        (value) => {
          if (parentField == null ? void 0 : parentField.value)
            parentField.value.setFilled(!!value);
          checkHtml5Validity();
        },
        { immediate: true }
      );
    });
    const selectOptions = computed(() => {
      if (!props.options || !Array.isArray(props.options))
        return [];
      return props.options.map(
        (option) => typeof option === "string" ? { value: option, label: option, key: uuid() } : { ...option, key: uuid() }
      );
    });
    const hasIconRight = computed(
      () => props.iconRight && !props.multiple || props.statusIcon && statusVariantIcon.value
    );
    const rightIcon = computed(
      () => props.iconRight ? props.iconRight : statusVariantIcon.value
    );
    const rightIconVariant = computed(
      () => props.iconRight ? props.iconRightVariant || props.variant || null : statusVariant.value
    );
    function iconClick(emit, event) {
      emits(emit, event);
      nextTick(() => setFocus());
    }
    function rightIconClick(event) {
      if (props.iconRightClickable)
        iconClick("icon-right-click", event);
    }
    const rootClasses = defineClasses(
      ["rootClass", "o-ctrl-sel"],
      [
        "expandedClass",
        "o-ctrl-sel--expanded",
        null,
        computed(() => props.expanded)
      ],
      [
        "rootVariantClass",
        "o-ctrl-sel--",
        computed(() => statusVariant.value || props.variant),
        computed(() => !!statusVariant.value || !!props.variant)
      ]
    );
    const selectClasses = defineClasses(
      ["selectClass", "o-sel"],
      ["roundedClass", "o-sel--rounded", null, computed(() => props.rounded)],
      ["multipleClass", "o-sel--multiple", null, computed(() => props.multiple)],
      [
        "sizeClass",
        "o-sel--",
        computed(() => props.size),
        computed(() => !!props.size)
      ],
      [
        "variantClass",
        "o-sel--",
        computed(() => statusVariant.value || props.variant),
        computed(() => !!statusVariant.value || !!props.variant)
      ],
      ["disabledClass", "o-sel--disabled", null, computed(() => props.disabled)],
      [
        "iconLeftSpaceClass",
        "o-sel-iconspace-left",
        null,
        computed(() => !!props.icon)
      ],
      [
        "iconRightSpaceClass",
        "o-sel-iconspace-right",
        null,
        computed(() => !!props.iconRight)
      ],
      ["placeholderClass", "o-sel--placeholder", null, placeholderVisible],
      [
        "arrowClass",
        "o-sel-arrow",
        null,
        computed(() => !props.iconRight && !props.multiple)
      ]
    );
    const iconLeftClasses = defineClasses(["iconLeftClass", "o-sel__icon-left"]);
    const iconRightClasses = defineClasses(["iconRightClass", "o-sel__icon-right"]);
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootClasses)),
        "data-oruga": "select"
      }, [
        __props.icon ? (openBlock(), createBlock(_sfc_main$1, {
          key: 0,
          class: normalizeClass(unref(iconLeftClasses)),
          clickable: __props.iconClickable,
          icon: __props.icon,
          pack: __props.iconPack,
          size: __props.size,
          onClick: _cache[0] || (_cache[0] = ($event) => iconClick("icon-click", $event))
        }, null, 8, ["class", "clickable", "icon", "pack", "size"])) : createCommentVNode("", true),
        withDirectives(createElementVNode("select", mergeProps(_ctx.$attrs, {
          ref_key: "selectRef",
          ref: selectRef,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(vmodel) ? vmodel.value = $event : null),
          "data-oruga-input": "select",
          class: unref(selectClasses),
          autocomplete: __props.autocomplete,
          multiple: __props.multiple,
          size: __props.nativeSize,
          disabled: __props.disabled,
          "aria-labelledby": __props.ariaLabelledby,
          onBlur: _cache[2] || (_cache[2] = //@ts-ignore
          (...args) => unref(onBlur) && unref(onBlur)(...args)),
          onFocus: _cache[3] || (_cache[3] = //@ts-ignore
          (...args) => unref(onFocus) && unref(onFocus)(...args)),
          onInvalid: _cache[4] || (_cache[4] = //@ts-ignore
          (...args) => unref(onInvalid) && unref(onInvalid)(...args))
        }), [
          __props.placeholder || _ctx.$slots.placeholder ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            placeholderVisible.value ? (openBlock(), createElementBlock("option", _hoisted_2, [
              renderSlot(_ctx.$slots, "placeholder", {}, () => [
                createTextVNode(toDisplayString(__props.placeholder), 1)
              ])
            ])) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default", {}, () => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(selectOptions.value, (option) => {
              return openBlock(), createElementBlock("option", mergeProps({
                key: option.key,
                value: option.value
              }, option.attrs), toDisplayString(option.label), 17, _hoisted_3);
            }), 128))
          ])
        ], 16, _hoisted_1), [
          [vModelSelect, unref(vmodel)]
        ]),
        hasIconRight.value ? (openBlock(), createBlock(_sfc_main$1, {
          key: 1,
          class: normalizeClass(unref(iconRightClasses)),
          clickable: __props.iconRightClickable,
          icon: rightIcon.value,
          pack: __props.iconPack,
          size: __props.size,
          variant: rightIconVariant.value,
          both: "",
          onClick: rightIconClick
        }, null, 8, ["class", "clickable", "icon", "pack", "size", "variant"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Select.vue_vue_type_script_setup_true_lang-sENSiXta.mjs.map
