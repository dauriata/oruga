"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const Tooltip_vue_vue_type_script_setup_true_lang = require("./Tooltip.vue_vue_type_script_setup_true_lang-BY53t3kF.cjs");
const ssr = require("./ssr-BN_zM9RT.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const useParentProvider = require("./useParentProvider-BknvMzPy.cjs");
const config = require("./config-JkCO4AEi.cjs");
const _hoisted_1 = ["tabindex", "aria-label", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-disabled", "onKeydown"];
const _hoisted_2 = { key: 0 };
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OSliderThumb",
    configField: "slider",
    inheritAttrs: false
  },
  __name: "SliderThumb",
  props: {
    /** parent slider component props  */
    sliderProps: { type: Object, required: true },
    modelValue: { type: Number, required: true },
    sliderSize: { type: Function, required: true },
    thumbWrapperClasses: {
      type: Array,
      required: true
    },
    thumbClasses: {
      type: Array,
      required: true
    }
  },
  emits: ["update:modelValue", "change", "dragstart", "dragend"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slider = vue.computed(() => props.sliderProps);
    const isFocused = vue.ref(false);
    const dragging = vue.ref(false);
    const startX = vue.ref(0);
    const startPosition = vue.ref(0);
    const newPosition = vue.ref(null);
    const oldValue = vue.ref(props.modelValue);
    const tooltip = vue.computed(() => slider.value.tooltip);
    const tooltipAlways = vue.computed(() => slider.value.tooltipAlways);
    const disabled = vue.computed(() => slider.value.disabled);
    const max = vue.computed(() => slider.value.max);
    const min = vue.computed(() => slider.value.min);
    const step = vue.computed(() => slider.value.step);
    const indicator = vue.computed(() => slider.value.indicator);
    const ariaLabel = vue.computed(
      () => Array.isArray(slider.value.ariaLabel) ? slider.value.ariaLabel[0] : slider.value.ariaLabel
    );
    const precision = vue.computed(() => {
      const precisions = [min.value, max.value, step.value].map((item) => {
        const decimal = ("" + item).split(".")[1];
        return decimal ? decimal.length : 0;
      });
      return Math.max(...precisions);
    });
    const computedTooltipVariant = vue.computed(
      () => slider.value.tooltipVariant ? slider.value.tooltipVariant : slider.value.variant
    );
    const currentPosition = vue.computed(
      () => `${(props.modelValue - min.value) / (max.value - min.value) * 100}%`
    );
    const wrapperStyle = vue.computed(() => ({ left: currentPosition.value }));
    const formattedValue = vue.computed(() => {
      if (typeof slider.value.customFormatter !== "undefined")
        return slider.value.customFormatter(props.modelValue);
      if (slider.value.format === "percent")
        return new Intl.NumberFormat(slider.value.locale, {
          style: "percent"
        }).format((props.modelValue - min.value) / (max.value - min.value));
      return new Intl.NumberFormat(slider.value.locale).format(props.modelValue);
    });
    function onFocus() {
      isFocused.value = true;
    }
    function onBlur() {
      isFocused.value = false;
    }
    function onButtonDown(event) {
      if (disabled.value)
        return;
      event.preventDefault();
      onDragStart(event);
      if (ssr.isClient) {
        document.addEventListener("mousemove", onDragging);
        document.addEventListener("touchmove", onDragging);
        document.addEventListener("mouseup", onDragEnd);
        document.addEventListener("touchend", onDragEnd);
        document.addEventListener("contextmenu", onDragEnd);
      }
    }
    function onLeftKeyDown() {
      if (disabled.value || props.modelValue === min.value)
        return;
      newPosition.value = parseFloat(currentPosition.value) - step.value / (max.value - min.value) * 100;
      setPosition(newPosition.value);
      emits("change");
    }
    function onRightKeyDown() {
      if (disabled.value || props.modelValue === max.value)
        return;
      newPosition.value = parseFloat(currentPosition.value) + step.value / (max.value - min.value) * 100;
      setPosition(newPosition.value);
      emits("change");
    }
    function onHomeKeyDown() {
      if (disabled.value || props.modelValue === min.value)
        return;
      newPosition.value = 0;
      setPosition(newPosition.value);
      emits("change");
    }
    function onEndKeyDown() {
      if (disabled.value || props.modelValue === max.value)
        return;
      newPosition.value = 100;
      setPosition(newPosition.value);
      emits("change");
    }
    function onDragStart(event) {
      dragging.value = true;
      emits("dragstart");
      if (event.type === "touchstart")
        event.clientX = event.touches[0].clientX;
      startX.value = event.clientX;
      startPosition.value = parseFloat(currentPosition.value);
      newPosition.value = startPosition.value;
    }
    function onDragging(event) {
      if (dragging.value) {
        if (event.type === "touchmove")
          event.clientX = event.touches[0].clientX;
        const diff = (event.clientX - startX.value) / props.sliderSize() * 100;
        newPosition.value = startPosition.value + diff;
        setPosition(newPosition.value);
      }
    }
    function onDragEnd() {
      dragging.value = false;
      emits("dragend");
      if (props.modelValue !== oldValue.value)
        emits("change");
      setPosition(newPosition.value);
      if (ssr.isClient) {
        document.removeEventListener("mousemove", onDragging);
        document.removeEventListener("touchmove", onDragging);
        document.removeEventListener("mouseup", onDragEnd);
        document.removeEventListener("touchend", onDragEnd);
        document.removeEventListener("contextmenu", onDragEnd);
      }
    }
    function setPosition(percent) {
      if (percent === null || isNaN(percent))
        return;
      if (percent < 0)
        percent = 0;
      else if (percent > 100)
        percent = 100;
      const stepLength = 100 / ((max.value - min.value) / step.value);
      const steps = Math.round(percent / stepLength);
      let value = steps * stepLength / 100 * (max.value - min.value) + min.value;
      value = parseFloat(value.toFixed(precision.value));
      emits("update:modelValue", value);
      if (!dragging.value && value !== oldValue.value)
        oldValue.value = value;
    }
    __expose({ setPosition });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(__props.thumbWrapperClasses),
        style: vue.normalizeStyle(wrapperStyle.value),
        "data-oruga": "slider-thumb"
      }, [
        vue.createVNode(Tooltip_vue_vue_type_script_setup_true_lang._sfc_main, {
          label: formattedValue.value,
          variant: computedTooltipVariant.value,
          disabled: disabled.value || !tooltip.value,
          always: tooltipAlways.value || dragging.value || isFocused.value
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", vue.mergeProps(_ctx.$attrs, {
              class: __props.thumbClasses,
              tabindex: disabled.value ? null : 0,
              role: "slider",
              "aria-label": ariaLabel.value,
              "aria-valuenow": __props.modelValue,
              "aria-valuemin": min.value,
              "aria-valuemax": max.value,
              "aria-disabled": disabled.value,
              "aria-orientation": "horizontal",
              onMousedown: onButtonDown,
              onTouchstart: onButtonDown,
              onFocus,
              onBlur,
              onKeydown: [
                vue.withKeys(vue.withModifiers(onLeftKeyDown, ["prevent"]), ["left"]),
                vue.withKeys(vue.withModifiers(onRightKeyDown, ["prevent"]), ["right"]),
                vue.withKeys(vue.withModifiers(onLeftKeyDown, ["prevent"]), ["down"]),
                vue.withKeys(vue.withModifiers(onRightKeyDown, ["prevent"]), ["up"]),
                vue.withKeys(vue.withModifiers(onHomeKeyDown, ["prevent"]), ["home"]),
                vue.withKeys(vue.withModifiers(onEndKeyDown, ["prevent"]), ["end"])
              ]
            }), [
              indicator.value ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(formattedValue.value), 1)) : vue.createCommentVNode("", true)
            ], 16, _hoisted_1)
          ]),
          _: 1
        }, 8, ["label", "variant", "disabled", "always"])
      ], 6);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OSliderTick",
    configField: "slider"
  },
  __name: "SliderTick",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Value of single tick */
    value: { type: Number, required: true },
    /** Tick label */
    label: { type: String, default: void 0 },
    tickClass: {
      type: [String, Function, Array],
      default: void 0
    },
    /** Class when slider tick is hidden */
    tickHiddenClass: {
      type: [String, Function, Array],
      default: void 0
    },
    /** Class of tick label */
    tickLabelClass: {
      type: [String, Function, Array],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const { parent } = useParentProvider.useProviderChild();
    const position = vue.computed(() => {
      const pos = (props.value - parent.value.min) / (parent.value.max - parent.value.min) * 100;
      return pos >= 0 && pos <= 100 ? pos : 0;
    });
    const hidden = vue.computed(
      () => props.value === parent.value.min || props.value === parent.value.max
    );
    const tickStyle = vue.computed(() => ({ left: position.value + "%" }));
    const rootClasses = defineClasses.defineClasses(
      ["tickClass", "o-slide__tick"],
      ["tickHiddenClass", "o-slide__tick--hidden", null, hidden]
    );
    const tickLabelClasses = defineClasses.defineClasses([
      "tickLabelClass",
      "o-slide__tick-label"
    ]);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(rootClasses)),
        style: vue.normalizeStyle(tickStyle.value),
        "data-oruga": "slider-tick"
      }, [
        _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: vue.normalizeClass(vue.unref(tickLabelClasses))
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createTextVNode(vue.toDisplayString(__props.label), 1)
          ])
        ], 2)) : vue.createCommentVNode("", true)
      ], 6);
    };
  }
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OSlider",
    configField: "slider"
  },
  __name: "Slider",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: {
      type: [Number, Array],
      default: 0
    },
    /** Minimum value */
    min: { type: Number, default: 0 },
    /** Maximum  value */
    max: { type: Number, default: 100 },
    /** Step interval of ticks */
    step: { type: Number, default: 1 },
    /**
     * Color of the slider
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => config.getOption("slider.variant")
    },
    /**
     * Vertical size of slider
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => config.getOption("slider.size")
    },
    /** Show tick marks */
    ticks: { type: Boolean, default: false },
    /** Show tooltip when thumb is being dragged */
    tooltip: {
      type: Boolean,
      default: () => config.getOption("slider.tooltip", true)
    },
    /**
     * Color of the tooltip
     * @values primary, info, success, warning, danger, and any other custom color
     */
    tooltipVariant: {
      type: String,
      default: () => config.getOption("slider.tooltipVariant")
    },
    /** Tooltip displays always */
    tooltipAlways: { type: Boolean, default: false },
    /** Rounded thumb */
    rounded: {
      type: Boolean,
      default: () => config.getOption("slider.rounded", false)
    },
    /** Slider will be disabled */
    disabled: { type: Boolean, default: false },
    /** Update v-model only when dragging is finished */
    lazy: { type: Boolean, default: false },
    /** Function to format the tooltip label for display */
    customFormatter: { type: Function, default: void 0 },
    /** Increases slider size on focus */
    biggerSliderFocus: { type: Boolean, default: false },
    /** Show indicators */
    indicator: { type: Boolean, default: false },
    /**
     * Define v-model format
     * @values row, percent
     */
    format: {
      type: String,
      default: () => config.getOption("slider.format", "raw"),
      validator: (value) => ["raw", "percent"].indexOf(value) >= 0
    },
    /** Date format locale */
    locale: {
      type: [String, Array],
      default: () => config.getOption("locale")
    },
    /** Accessibility aria-label to to be passed to the slider thumb element. */
    ariaLabel: {
      type: [String, Array],
      default: () => config.getOption("slider.ariaLabel")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the vertical slider size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the slider track */
    trackClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the filled part of the slider */
    fillClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when the slider is rounded */
    thumbRoundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when the thumb gets dragged */
    thumbDraggingClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when slider is disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the thumb wrapper */
    thumbWrapperClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the thumb */
    thumbClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the slider variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of slider tick */
    tickClass: {
      type: [String, Function, Array],
      default: void 0
    },
    /** Class when slider tick is hidden */
    tickHiddenClass: {
      type: [String, Function, Array],
      default: void 0
    },
    /** Class of tick label */
    tickLabelClass: {
      type: [String, Function, Array],
      default: void 0
    },
    /** Class to display on the wrapper element when the slider is dragged */
    thumbWrapperDraggingClass: {
      type: [String, Function, Array],
      default: void 0
    }
  },
  emits: ["update:modelValue", "change", "dragging", "dragstart", "dragend"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    function emitValue(event) {
      const val = isRange.value ? [minValue.value, maxValue.value] : valueStart.value || 0;
      emits(event, val);
    }
    const provideData = vue.computed(() => ({
      max: props.max,
      min: props.min
    }));
    useParentProvider.useProviderParent(void 0, { data: provideData });
    const sliderRef = vue.ref();
    const thumbStartRef = vue.ref();
    const thumbEndRef = vue.ref();
    const valueStart = vue.ref(null);
    const valueEnd = vue.ref(null);
    const dragging = vue.ref(false);
    const isRange = vue.ref(false);
    const isThumbReversed = vue.ref();
    const isTrackClickDisabled = vue.ref();
    setValues(props.modelValue);
    vue.watch([valueStart, valueEnd], () => onInternalValueUpdate());
    vue.watch(
      [() => props.min, () => props.max, () => props.modelValue],
      () => setValues(props.modelValue)
    );
    const tickValues = vue.computed(() => {
      if (!props.ticks || props.min > props.max || props.step === 0)
        return [];
      const result = [];
      for (let i = props.min + props.step; i < props.max; i = i + props.step) {
        result.push(i);
      }
      return result;
    });
    const minValue = vue.computed(() => Math.min(valueStart.value, valueEnd.value));
    const maxValue = vue.computed(() => Math.max(valueStart.value, valueEnd.value));
    const barSize = vue.computed(
      () => isRange.value ? `${100 * (maxValue.value - minValue.value) / (props.max - props.min)}%` : `${100 * (valueStart.value - props.min) / (props.max - props.min)}%`
    );
    const barStart = vue.computed(
      () => isRange.value ? `${100 * (minValue.value - props.min) / (props.max - props.min)}%` : "0%"
    );
    const barStyle = vue.computed(() => ({
      width: barSize.value,
      left: barStart.value
    }));
    function setValues(newValue) {
      if (props.min > props.max)
        return;
      if (Array.isArray(newValue)) {
        isRange.value = true;
        const smallValue = typeof newValue[0] !== "number" || isNaN(newValue[0]) ? props.min : Math.min(Math.max(props.min, newValue[0]), props.max);
        const largeValue = typeof newValue[1] !== "number" || isNaN(newValue[1]) ? props.max : Math.max(Math.min(props.max, newValue[1]), props.min);
        valueStart.value = isThumbReversed.value ? largeValue : smallValue;
        valueEnd.value = isThumbReversed.value ? smallValue : largeValue;
      } else {
        isRange.value = false;
        valueStart.value = isNaN(newValue) ? props.min : Math.min(props.max, Math.max(props.min, newValue));
        valueEnd.value = null;
      }
    }
    function onInternalValueUpdate() {
      if (isRange.value)
        isThumbReversed.value = valueStart.value > valueEnd.value;
      if (!props.lazy || !dragging.value)
        emitValue("update:modelValue");
      if (dragging.value)
        emitValue("dragging");
    }
    function sliderSize() {
      return sliderRef.value.getBoundingClientRect().width;
    }
    function onSliderClick(event) {
      if (props.disabled || isTrackClickDisabled.value)
        return;
      const sliderOffsetLeft = sliderRef.value.getBoundingClientRect().left;
      const percent = (event.clientX - sliderOffsetLeft) / sliderSize() * 100;
      const targetValue = props.min + percent * (props.max - props.min) / 100;
      const diffFirst = Math.abs(targetValue - valueStart.value);
      if (!isRange.value) {
        if (diffFirst < props.step / 2)
          return;
        thumbStartRef.value.setPosition(percent);
      } else {
        const diffSecond = Math.abs(targetValue - valueEnd.value);
        if (diffFirst <= diffSecond) {
          if (diffFirst < props.step / 2)
            return;
          thumbStartRef.value.setPosition(percent);
        } else {
          if (diffSecond < props.step / 2)
            return;
          thumbEndRef.value.setPosition(percent);
        }
      }
      emitValue("change");
    }
    function onDragStart() {
      dragging.value = true;
      emits("dragstart");
    }
    function onDragEnd() {
      isTrackClickDisabled.value = true;
      setTimeout(() => isTrackClickDisabled.value = false);
      dragging.value = false;
      emits("dragend");
      if (props.lazy)
        emitValue("update:modelValue");
    }
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-slide"],
      [
        "sizeClass",
        "o-slide--",
        vue.computed(() => props.size),
        vue.computed(() => !!props.size)
      ],
      [
        "disabledClass",
        "o-slide--disabled",
        null,
        vue.computed(() => props.disabled)
      ]
    );
    const trackClasses = defineClasses.defineClasses(["trackClass", "o-slide__track"]);
    const fillClasses = defineClasses.defineClasses(
      ["fillClass", "o-slide__fill"],
      [
        "variantClass",
        "o-slide__fill--",
        vue.computed(() => props.variant),
        vue.computed(() => !!props.variant)
      ]
    );
    const thumbClasses = defineClasses.defineClasses(
      ["thumbClass", "o-slide__thumb"],
      ["thumbDraggingClass", "o-slide__thumb--dragging", null, dragging],
      [
        "thumbRoundedClass",
        "o-slide__thumb--rounded",
        null,
        vue.computed(() => props.rounded)
      ]
    );
    const thumbWrapperClasses = defineClasses.defineClasses(
      ["thumbWrapperClass", "o-slide__thumb-wrapper"],
      [
        "thumbWrapperDraggingClass",
        "o-slide__thumb-wrapper--dragging",
        null,
        dragging
      ]
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(rootClasses)),
        "data-oruga": "slider",
        onClick: onSliderClick
      }, [
        vue.createElementVNode("div", {
          ref_key: "sliderRef",
          ref: sliderRef,
          class: vue.normalizeClass(vue.unref(trackClasses))
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(fillClasses)),
            style: vue.normalizeStyle(barStyle.value)
          }, null, 6),
          __props.ticks ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(tickValues.value, (val, key) => {
            return vue.openBlock(), vue.createBlock(_sfc_main$1, {
              key,
              value: val,
              "tick-class": __props.tickClass,
              "tick-hidden-class": __props.tickHiddenClass,
              "tick-label-class": __props.tickLabelClass
            }, null, 8, ["value", "tick-class", "tick-hidden-class", "tick-label-class"]);
          }), 128)) : vue.createCommentVNode("", true),
          vue.renderSlot(_ctx.$slots, "default"),
          vue.createVNode(_sfc_main$2, {
            ref_key: "thumbStartRef",
            ref: thumbStartRef,
            modelValue: valueStart.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => valueStart.value = $event),
            "slider-props": props,
            "slider-size": sliderSize,
            "thumb-classes": vue.unref(thumbClasses),
            "thumb-wrapper-classes": vue.unref(thumbWrapperClasses),
            onChange: _cache[1] || (_cache[1] = ($event) => emitValue("change")),
            onDragstart: onDragStart,
            onDragend: onDragEnd
          }, null, 8, ["modelValue", "slider-props", "thumb-classes", "thumb-wrapper-classes"]),
          isRange.value ? (vue.openBlock(), vue.createBlock(_sfc_main$2, {
            key: 1,
            ref_key: "thumbEndRef",
            ref: thumbEndRef,
            modelValue: valueEnd.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => valueEnd.value = $event),
            "slider-props": props,
            "slider-size": sliderSize,
            "thumb-classes": vue.unref(thumbClasses),
            "thumb-wrapper-classes": vue.unref(thumbWrapperClasses),
            onChange: _cache[3] || (_cache[3] = ($event) => emitValue("change")),
            onDragstart: onDragStart,
            onDragend: onDragEnd
          }, null, 8, ["modelValue", "slider-props", "thumb-classes", "thumb-wrapper-classes"])) : vue.createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
const index = {
  install(app) {
    config.registerComponent(app, _sfc_main);
    config.registerComponent(app, _sfc_main$1);
  }
};
exports.OSlider = _sfc_main;
exports.OSliderTick = _sfc_main$1;
exports.default = index;
//# sourceMappingURL=slider.cjs.map
