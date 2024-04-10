"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const useFieldShare = require("./useFieldShare-DArg23Mc.cjs");
const config = require("./config-JkCO4AEi.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const useMatchMedia = require("./useMatchMedia-gcwLqHTY.cjs");
const _sfc_main$1 = vue.defineComponent({
  name: "OFieldBody",
  configField: "field",
  props: {
    classes: {
      type: Array,
      default: void 0
    }
  },
  setup(props) {
    const { parentField } = useFieldShare.injectField();
    const slots = vue.useSlots();
    return () => {
      let first = true;
      const slot = slots.default();
      const children = slot.length === 1 && Array.isArray(slot[0].children) ? slot[0].children : slot;
      return vue.h(
        "div",
        { class: props.classes },
        children.map((element) => {
          let message;
          if (element.type === vue.Comment || element.type === vue.Text) {
            return element;
          }
          if (first) {
            message = parentField.value.fieldMessage;
            first = false;
          }
          return vue.h(
            vue.resolveComponent("OField"),
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
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
      default: () => config.getOption("field.labelsize")
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
      default: () => config.getOption("field.mobileBreakpoint")
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
    const { isMobile } = useMatchMedia.useMatchMedia(props.mobileBreakpoint);
    const fieldVariant = vue.ref(props.variant);
    vue.watch(
      () => props.variant,
      (v) => fieldVariant.value = v
    );
    const fieldMessage = vue.ref(props.message);
    vue.watch(
      () => props.message,
      (v) => fieldMessage.value = v
    );
    const isFocused = vue.ref(false);
    const isFilled = vue.ref(false);
    const { parentField } = useFieldShare.injectField();
    vue.watch(
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
    const slots = vue.useSlots();
    const hasLabel = vue.computed(() => props.label || !!slots.label);
    const hasMessage = vue.computed(
      () => {
        var _a;
        return !!(!((_a = parentField == null ? void 0 : parentField.value) == null ? void 0 : _a.hasInnerField) && fieldMessage.value) || !!slots.message;
      }
    );
    const hasInnerField = vue.computed(
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
    const rootRef = vue.ref();
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
    const provideData = vue.computed(() => ({
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
    useFieldShare.provideField(provideData);
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-field"],
      [
        "horizontalClass",
        "o-field--horizontal",
        null,
        vue.computed(() => !!props.horizontal)
      ],
      ["mobileClass", "o-field--mobile", null, isMobile],
      ["focusedClass", "o-field--focused", null, isFocused],
      ["filledClass", "o-field--filled", null, isFilled]
    );
    const messageClasses = defineClasses.defineClasses(
      ["messageClass", "o-field__message"],
      [
        "variantMessageClass",
        "o-field__message-",
        fieldVariant,
        vue.computed(() => !!fieldVariant.value)
      ]
    );
    const labelClasses = defineClasses.defineClasses(
      ["labelClass", "o-field__label"],
      [
        "labelSizeClass",
        "o-field__label-",
        vue.computed(() => props.labelSize),
        vue.computed(() => !!props.labelSize)
      ],
      [
        "variantLabelClass",
        "o-field__label-",
        fieldVariant,
        vue.computed(() => !!fieldVariant.value)
      ]
    );
    const labelHorizontalClasses = defineClasses.defineClasses([
      "labelHorizontalClass",
      "o-field__horizontal-label"
    ]);
    const bodyClasses = defineClasses.defineClasses(["bodyClass", "o-field__body"]);
    const bodyHorizontalClasses = defineClasses.defineClasses([
      "bodyHorizontalClass",
      "o-field__horizontal-body"
    ]);
    const innerFieldClasses = defineClasses.defineClasses(
      ["rootClass", "o-field"],
      [
        "groupMultilineClass",
        "o-field--grouped-multiline",
        null,
        vue.computed(() => props.groupMultiline)
      ],
      ["groupedClass", "o-field--grouped", null, vue.computed(() => props.grouped)],
      [
        "addonsClass",
        "o-field--addons",
        null,
        vue.computed(() => !props.grouped && hasAddons())
      ]
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "rootRef",
        ref: rootRef,
        "data-oruga": "field",
        class: vue.normalizeClass(vue.unref(rootClasses))
      }, [
        __props.horizontal ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(vue.unref(labelHorizontalClasses))
        }, [
          hasLabel.value ? (vue.openBlock(), vue.createElementBlock("label", {
            key: 0,
            for: __props.labelFor,
            class: vue.normalizeClass(vue.unref(labelClasses))
          }, [
            vue.renderSlot(_ctx.$slots, "label", {}, () => [
              vue.createTextVNode(vue.toDisplayString(__props.label), 1)
            ])
          ], 10, _hoisted_1)) : vue.createCommentVNode("", true)
        ], 2)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          hasLabel.value ? (vue.openBlock(), vue.createElementBlock("label", {
            key: 0,
            for: __props.labelFor,
            class: vue.normalizeClass(vue.unref(labelClasses))
          }, [
            vue.renderSlot(_ctx.$slots, "label", {}, () => [
              vue.createTextVNode(vue.toDisplayString(__props.label), 1)
            ])
          ], 10, _hoisted_2)) : vue.createCommentVNode("", true)
        ], 64)),
        __props.horizontal ? (vue.openBlock(), vue.createBlock(_sfc_main$1, {
          key: 2,
          classes: vue.unref(bodyHorizontalClasses)
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["classes"])) : hasInnerField.value ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 3,
          class: vue.normalizeClass(vue.unref(bodyClasses))
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(innerFieldClasses))
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 2)
        ], 2)) : vue.renderSlot(_ctx.$slots, "default", { key: 4 }),
        hasMessage.value && !__props.horizontal ? (vue.openBlock(), vue.createElementBlock("p", {
          key: 5,
          class: vue.normalizeClass(vue.unref(messageClasses))
        }, [
          vue.renderSlot(_ctx.$slots, "message", {}, () => [
            vue.createTextVNode(vue.toDisplayString(fieldMessage.value), 1)
          ])
        ], 2)) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
exports._sfc_main = _sfc_main;
//# sourceMappingURL=Field.vue_vue_type_script_setup_true_lang-BwJT5C6k.cjs.map
