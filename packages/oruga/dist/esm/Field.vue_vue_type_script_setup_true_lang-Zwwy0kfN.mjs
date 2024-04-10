/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, useSlots, h, Comment, Text, resolveComponent, ref, watch, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createTextVNode, toDisplayString, createCommentVNode, Fragment, createBlock, withCtx, createElementVNode } from "vue";
import { i as injectField, p as provideField } from "./useFieldShare-rUPsRYD7.mjs";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useMatchMedia } from "./useMatchMedia-G3BPCbzR.mjs";
const _sfc_main$1 = defineComponent({
  name: "OFieldBody",
  configField: "field",
  props: {
    classes: {
      type: Array,
      default: void 0
    }
  },
  setup(props) {
    const { parentField } = injectField();
    const slots = useSlots();
    return () => {
      let first = true;
      const slot = slots.default();
      const children = slot.length === 1 && Array.isArray(slot[0].children) ? slot[0].children : slot;
      return h(
        "div",
        { class: props.classes },
        children.map((element) => {
          let message;
          if (element.type === Comment || element.type === Text) {
            return element;
          }
          if (first) {
            message = parentField.value.fieldMessage;
            first = false;
          }
          return h(
            resolveComponent("OField"),
            {
              variant: parentField.value.fieldVariant,
              message
            },
            () => [element]
          );
        })
      );
    };
  }
});
const _hoisted_1 = ["for"];
const _hoisted_2 = ["for"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OField",
    configField: "field"
  },
  __name: "Field",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /**
     * Color of the field and help message, also adds a matching icon.
     * Used by Input, Select and Autocomplete.
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: { type: String, default: void 0 },
    /** Field label */
    label: { type: String, default: void 0 },
    /**
     * Vertical size of input
     * @values small, medium, large
     */
    labelSize: {
      type: String,
      default: () => getOption("field.labelsize")
    },
    /** Same as native for set on the label */
    labelFor: { type: String, default: void 0 },
    /** Help message text */
    message: { type: String, default: void 0 },
    /**
     * Direct child components/elements of Field will be grouped horizontally
     * (see which ones at the top of the page).
     */
    grouped: { type: Boolean, default: false },
    /** Allow controls to fill up multiple lines, making it responsive */
    groupMultiline: { type: Boolean, default: false },
    /** Group label and control on the same line for horizontal forms */
    horizontal: { type: Boolean, default: false },
    /** Field automatically attach controls together */
    addons: { type: Boolean, default: true },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => getOption("field.mobileBreakpoint")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class to align label and control in horizontal forms */
    horizontalClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when fields are grouped together */
    groupedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when fields fill up multiple lines */
    groupMultilineClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for field label */
    labelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for field label size */
    labelSizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for field label when horizontal */
    labelHorizontalClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for field body */
    bodyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** "Class for field body when horizontal */
    bodyHorizontalClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for components automatically attached together when inside a field */
    addonsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the field message */
    messageClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the message field variant */
    variantMessageClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the label field variant */
    variantLabelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of file component when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the focused field */
    focusedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the filled field */
    filledClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const { isMobile } = useMatchMedia(props.mobileBreakpoint);
    const fieldVariant = ref(props.variant);
    watch(
      () => props.variant,
      (v) => fieldVariant.value = v
    );
    const fieldMessage = ref(props.message);
    watch(
      () => props.message,
      (v) => fieldMessage.value = v
    );
    const isFocused = ref(false);
    const isFilled = ref(false);
    const { parentField } = injectField();
    watch(
      () => fieldMessage.value,
      (value) => {
        var _a;
        if ((_a = parentField == null ? void 0 : parentField.value) == null ? void 0 : _a.hasInnerField) {
          if (!parentField.value.fieldVariant)
            parentField.value.setVariant(fieldVariant.value);
          if (!parentField.value.fieldMessage)
            parentField.value.setMessage(value);
        }
      }
    );
    const slots = useSlots();
    const hasLabel = computed(() => props.label || !!slots.label);
    const hasMessage = computed(
      () => {
        var _a;
        return !!(!((_a = parentField == null ? void 0 : parentField.value) == null ? void 0 : _a.hasInnerField) && fieldMessage.value) || !!slots.message;
      }
    );
    const hasInnerField = computed(
      () => props.grouped || props.groupMultiline || hasAddons()
    );
    function hasAddons() {
      if (!props.addons || props.horizontal)
        return false;
      let renderedNode = 0;
      const slot = slots.default();
      if (slot) {
        const children = slot.length === 1 && Array.isArray(slot[0].children) ? slot[0].children : slot;
        renderedNode = children.filter((n) => !!n).length;
      }
      return renderedNode > 1 && props.addons && !props.horizontal;
    }
    const rootRef = ref();
    function setFocus(value) {
      isFocused.value = value;
    }
    function setFilled(value) {
      isFilled.value = value;
    }
    function setVariant(value) {
      fieldVariant.value = value;
    }
    function setMessage(value) {
      fieldMessage.value = value;
    }
    const provideData = computed(() => ({
      $el: rootRef.value,
      props,
      hasInnerField: hasInnerField.value,
      hasMessage: hasMessage.value,
      fieldVariant: fieldVariant.value,
      fieldMessage: fieldMessage.value,
      setFocus,
      setFilled,
      setVariant,
      setMessage
    }));
    provideField(provideData);
    const rootClasses = defineClasses(
      ["rootClass", "o-field"],
      [
        "horizontalClass",
        "o-field--horizontal",
        null,
        computed(() => !!props.horizontal)
      ],
      ["mobileClass", "o-field--mobile", null, isMobile],
      ["focusedClass", "o-field--focused", null, isFocused],
      ["filledClass", "o-field--filled", null, isFilled]
    );
    const messageClasses = defineClasses(
      ["messageClass", "o-field__message"],
      [
        "variantMessageClass",
        "o-field__message-",
        fieldVariant,
        computed(() => !!fieldVariant.value)
      ]
    );
    const labelClasses = defineClasses(
      ["labelClass", "o-field__label"],
      [
        "labelSizeClass",
        "o-field__label-",
        computed(() => props.labelSize),
        computed(() => !!props.labelSize)
      ],
      [
        "variantLabelClass",
        "o-field__label-",
        fieldVariant,
        computed(() => !!fieldVariant.value)
      ]
    );
    const labelHorizontalClasses = defineClasses([
      "labelHorizontalClass",
      "o-field__horizontal-label"
    ]);
    const bodyClasses = defineClasses(["bodyClass", "o-field__body"]);
    const bodyHorizontalClasses = defineClasses([
      "bodyHorizontalClass",
      "o-field__horizontal-body"
    ]);
    const innerFieldClasses = defineClasses(
      ["rootClass", "o-field"],
      [
        "groupMultilineClass",
        "o-field--grouped-multiline",
        null,
        computed(() => props.groupMultiline)
      ],
      ["groupedClass", "o-field--grouped", null, computed(() => props.grouped)],
      [
        "addonsClass",
        "o-field--addons",
        null,
        computed(() => !props.grouped && hasAddons())
      ]
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "rootRef",
        ref: rootRef,
        "data-oruga": "field",
        class: normalizeClass(unref(rootClasses))
      }, [
        __props.horizontal ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(labelHorizontalClasses))
        }, [
          hasLabel.value ? (openBlock(), createElementBlock("label", {
            key: 0,
            for: __props.labelFor,
            class: normalizeClass(unref(labelClasses))
          }, [
            renderSlot(_ctx.$slots, "label", {}, () => [
              createTextVNode(toDisplayString(__props.label), 1)
            ])
          ], 10, _hoisted_1)) : createCommentVNode("", true)
        ], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          hasLabel.value ? (openBlock(), createElementBlock("label", {
            key: 0,
            for: __props.labelFor,
            class: normalizeClass(unref(labelClasses))
          }, [
            renderSlot(_ctx.$slots, "label", {}, () => [
              createTextVNode(toDisplayString(__props.label), 1)
            ])
          ], 10, _hoisted_2)) : createCommentVNode("", true)
        ], 64)),
        __props.horizontal ? (openBlock(), createBlock(_sfc_main$1, {
          key: 2,
          classes: unref(bodyHorizontalClasses)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["classes"])) : hasInnerField.value ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass(unref(bodyClasses))
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(innerFieldClasses))
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)
        ], 2)) : renderSlot(_ctx.$slots, "default", { key: 4 }),
        hasMessage.value && !__props.horizontal ? (openBlock(), createElementBlock("p", {
          key: 5,
          class: normalizeClass(unref(messageClasses))
        }, [
          renderSlot(_ctx.$slots, "message", {}, () => [
            createTextVNode(toDisplayString(fieldMessage.value), 1)
          ])
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Field.vue_vue_type_script_setup_true_lang-Zwwy0kfN.mjs.map
