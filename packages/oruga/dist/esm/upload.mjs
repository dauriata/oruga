/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, mergeModels, ref, useModel, watch, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, withModifiers, createElementVNode, mergeProps } from "vue";
import { g as getOption, b as registerComponent } from "./config-zKhnAIV0.mjs";
import { uuid } from "./helpers.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useInputHandler } from "./useInputHandler-BGDwfETo.mjs";
const _hoisted_1 = ["id"];
const _hoisted_2 = ["multiple", "accept", "disabled", "aria-labelledby"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OUpload",
    configField: "upload",
    inheritAttrs: false
  },
  __name: "Upload",
  props: /* @__PURE__ */ mergeModels({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: {
      type: [Object, Array],
      default: void 0
    },
    /** Same as native, also push new item to v-model instead of replacing */
    multiple: { type: Boolean, default: false },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => getOption("upload.variant")
    },
    /** Same as native disabled */
    disabled: { type: Boolean, default: false },
    /** Same as native accept */
    accept: { type: String, default: void 0 },
    /** Accepts drag & drop and change its style */
    dragDrop: { type: Boolean, default: false },
    /** Upload will be expanded (full-width) */
    expanded: { type: Boolean, default: false },
    /** Replace last chosen files every time (like native file input element) */
    native: { type: Boolean, default: true },
    /** Accessibility label to establish relationship between the input and control label */
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
    /** Class of the Upload when draggable */
    draggableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Upload variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Upload when expanded */
    expandedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Upload when disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Upload when hovered */
    hoveredClass: {
      type: [String, Array, Function],
      default: void 0
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "focus", "blur", "invalid"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const inputRef = ref();
    const vmodel = useModel(__props, "modelValue");
    const { checkHtml5Validity, onFocus, onBlur, isValid, setFocus } = useInputHandler(inputRef, emits, props);
    const dragDropFocus = ref(false);
    watch(vmodel, (value) => {
      if (!value || Array.isArray(value) && value.length === 0)
        inputRef.value.value = null;
      if (!isValid.value && !props.dragDrop)
        checkHtml5Validity();
    });
    function onFileChange(event) {
      if (props.disabled)
        return;
      if (props.dragDrop)
        updateDragDropFocus(false);
      const value = event.target.files || event.dataTransfer.files;
      if (value.length === 0) {
        if (!vmodel.value)
          return;
        if (props.native)
          vmodel.value = null;
      }
      if (props.multiple) {
        const values = props.native || !vmodel.value || !Array.isArray(vmodel.value) ? [] : [...vmodel.value];
        for (let i = 0; i < value.length; i++) {
          const file = value[i];
          if (checkType(file))
            values.push(file);
        }
        vmodel.value = values;
      } else {
        if (props.dragDrop && value.length !== 1)
          return;
        else {
          const file = value[0];
          if (checkType(file))
            vmodel.value = file;
          else if (vmodel.value) {
            vmodel.value = null;
            clearInput();
          } else {
            clearInput();
            checkHtml5Validity();
            return;
          }
        }
      }
      if (!props.dragDrop)
        checkHtml5Validity();
    }
    function clearInput() {
      inputRef.value.value = null;
    }
    function updateDragDropFocus(focus) {
      if (!props.disabled)
        dragDropFocus.value = focus;
    }
    function checkType(file) {
      if (!props.accept)
        return true;
      const types = props.accept.split(",");
      if (types.length === 0)
        return true;
      for (let i = 0; i < types.length; i++) {
        const type = types[i].trim();
        if (type) {
          if (type.substring(0, 1) === ".") {
            const extension = file.name.toLowerCase().slice(-type.length);
            if (extension === type.toLowerCase())
              return true;
          } else {
            if (file.type.match(type))
              return true;
          }
        }
      }
      return false;
    }
    function onClick(event) {
      if (props.disabled)
        return;
      if (!props.dragDrop) {
        event.preventDefault();
        inputRef.value.click();
      }
    }
    const rootClasses = defineClasses(
      ["rootClass", "o-upl"],
      ["expandedClass", "o-upl--expanded", null, computed(() => props.expanded)],
      ["disabledClass", "o-upl--disabled", null, computed(() => props.disabled)]
    );
    const draggableClasses = defineClasses(
      ["draggableClass", "o-upl__draggable"],
      [
        "hoveredClass",
        "o-upl__draggable--hovered",
        null,
        computed(() => !props.variant && dragDropFocus.value)
      ],
      [
        "variantClass",
        "o-upl__draggable--hovered-",
        computed(() => props.variant),
        computed(() => props.variant && dragDropFocus.value)
      ]
    );
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        id: __props.ariaLabelledby,
        class: normalizeClass(unref(rootClasses)),
        "data-oruga": "upload"
      }, [
        !__props.dragDrop ? renderSlot(_ctx.$slots, "default", {
          key: 0,
          onclick: onClick
        }) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(draggableClasses)),
          role: "button",
          tabindex: "0",
          onMouseenter: _cache[0] || (_cache[0] = ($event) => updateDragDropFocus(true)),
          onMouseleave: _cache[1] || (_cache[1] = ($event) => updateDragDropFocus(false)),
          onDragover: _cache[2] || (_cache[2] = withModifiers(($event) => updateDragDropFocus(true), ["prevent"])),
          onDragleave: _cache[3] || (_cache[3] = withModifiers(($event) => updateDragDropFocus(false), ["prevent"])),
          onDragenter: _cache[4] || (_cache[4] = withModifiers(($event) => updateDragDropFocus(true), ["prevent"])),
          onDrop: withModifiers(onFileChange, ["prevent"])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 34)),
        createElementVNode("input", mergeProps(_ctx.$attrs, {
          ref_key: "inputRef",
          ref: inputRef,
          type: "file",
          "data-oruga-input": "file",
          multiple: __props.multiple,
          accept: __props.accept,
          disabled: __props.disabled,
          "aria-labelledby": __props.ariaLabelledby,
          onChange: onFileChange,
          onFocus: _cache[5] || (_cache[5] = //@ts-ignore
          (...args) => unref(onFocus) && unref(onFocus)(...args)),
          onBlur: _cache[6] || (_cache[6] = //@ts-ignore
          (...args) => unref(onBlur) && unref(onBlur)(...args))
        }), null, 16, _hoisted_2)
      ], 10, _hoisted_1);
    };
  }
});
const index = {
  install(app) {
    registerComponent(app, _sfc_main);
  }
};
export {
  _sfc_main as OUpload,
  index as default
};
//# sourceMappingURL=upload.mjs.map
