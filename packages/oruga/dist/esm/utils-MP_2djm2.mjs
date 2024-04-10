/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, computed, ref, watch, nextTick, useAttrs, openBlock, createElementBlock, normalizeClass, createBlock, mergeProps, unref, isRef, createSlots, withCtx, createVNode, renderSlot, withKeys } from "vue";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./DropdownItem.vue_vue_type_script_setup_true_lang-BYhM_Anu.mjs";
import { _ as _sfc_main$3 } from "./Input.vue_vue_type_script_setup_true_lang-Cne1qVCn.mjs";
import { isMobileAgent } from "./helpers.mjs";
import { i as isClient } from "./ssr-BIBU2UWo.mjs";
import { g as getActiveClasses } from "./defineClasses-uo4lMA-t.mjs";
import { a as usePropBinding } from "./usePropValue-DLZTRe_e.mjs";
import { u as useEventListener } from "./useEventListener-B3_nr73L.mjs";
import { u as useInputHandler } from "./useInputHandler-BGDwfETo.mjs";
const _hoisted_1 = ["data-oruga"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "OPickerWrapper"
  },
  __name: "PickerWrapper",
  props: {
    /** parent picker component props  */
    pickerProps: { type: Object, required: true },
    /** data-oruga attribute value */
    dataOruga: { type: String, required: true },
    /** the input value */
    value: { type: [Date, Array], default: void 0 },
    /** the active state of the dropdown */
    active: { type: Boolean, default: false },
    formattedValue: { type: String, default: void 0 },
    nativeType: { type: String, required: true },
    nativeStep: { type: String, default: void 0 },
    nativeValue: { type: [String, Number], default: void 0 },
    nativeMin: { type: [String, Number], default: void 0 },
    nativeMax: { type: [String, Number], default: void 0 },
    stayOpen: { type: Boolean, default: false },
    rootClasses: {
      type: Array,
      required: true
    },
    dropdownClasses: {
      type: Array,
      required: true
    },
    boxClass: {
      type: Array,
      required: true
    }
  },
  emits: ["update:active", "change", "native-change", "focus", "blur", "invalid", "icon-click", "icon-right-click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const picker = computed(() => props.pickerProps);
    const isMobileNative = computed(
      () => picker.value.mobileNative && isMobileAgent.any()
    );
    const dropdownRef = ref();
    const inputRef = ref();
    const nativeInputRef = ref();
    const elementRef = computed(
      () => isMobileNative.value ? nativeInputRef.value : inputRef.value
    );
    const {
      checkHtml5Validity,
      setFocus,
      doClick,
      onBlur,
      onFocus,
      onInvalid,
      isValid,
      isFocused
    } = useInputHandler(elementRef, emits, picker.value);
    const computedNativeType = computed(
      () => !picker.value.placeholder || props.nativeValue || isFocused.value ? props.nativeType : "text"
    );
    watch(
      () => props.value,
      () => {
        if (!props.stayOpen)
          togglePicker(false);
        if (isMobileNative.value && !isValid.value)
          checkHtml5Validity();
      }
    );
    const isActive = usePropBinding("active", props, emits, {
      passive: true
    });
    watch(isActive, onActiveChange);
    const ariaRole = computed(() => !picker.value.inline ? "dialog" : void 0);
    const triggers = computed(() => picker.value.openOnFocus ? ["click"] : []);
    if (isClient)
      useEventListener("keyup", onKeyPress);
    function onKeyPress(event) {
      if (isActive.value && (event.key === "Escape" || event.key === "Esc"))
        togglePicker(false);
    }
    function togglePicker(active) {
      if (isMobileNative.value) {
        setFocus();
        doClick();
      } else if (dropdownRef.value) {
        if (active || picker.value.closeOnClick)
          nextTick(() => isActive.value = active);
      }
    }
    function onInputClick(event) {
      if (isActive.value)
        event.stopPropagation();
    }
    function onActiveChange(value) {
      if (value)
        onFocus();
      else if (!value)
        onBlur();
    }
    const attrs = useAttrs();
    const inputBind = computed(() => ({
      ...attrs,
      ...picker.value.inputClasses
    }));
    const dropdownBind = computed(() => ({
      "root-class": getActiveClasses(props.dropdownClasses),
      ...picker.value.dropdownClasses
    }));
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-oruga": __props.dataOruga,
        class: normalizeClass(__props.rootClasses)
      }, [
        !isMobileNative.value || picker.value.inline ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
          key: 0,
          ref_key: "dropdownRef",
          ref: dropdownRef
        }, dropdownBind.value, {
          active: unref(isActive),
          "onUpdate:active": _cache[4] || (_cache[4] = ($event) => isRef(isActive) ? isActive.value = $event : null),
          position: picker.value.position,
          disabled: picker.value.disabled,
          inline: picker.value.inline,
          "mobile-modal": picker.value.mobileModal,
          "trap-focus": picker.value.trapFocus,
          "aria-role": ariaRole.value,
          "aria-modal": !picker.value.inline,
          tabindex: -1,
          teleport: picker.value.teleport,
          triggers: triggers.value
        }), createSlots({
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              override: "",
              tag: "div",
              "item-class": __props.boxClass,
              disabled: picker.value.disabled,
              clickable: false
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["item-class", "disabled"])
          ]),
          _: 2
        }, [
          !picker.value.inline ? {
            name: "trigger",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "trigger", {}, () => [
                createVNode(_sfc_main$3, mergeProps({
                  ref_key: "inputRef",
                  ref: inputRef
                }, inputBind.value, {
                  autocomplete: "off",
                  "model-value": __props.formattedValue,
                  placeholder: picker.value.placeholder,
                  size: picker.value.size,
                  "icon-pack": picker.value.iconPack,
                  icon: picker.value.icon,
                  "icon-right": picker.value.iconRight,
                  "icon-right-clickable": picker.value.iconRightClickable,
                  expanded: picker.value.expanded,
                  rounded: picker.value.rounded,
                  disabled: picker.value.disabled,
                  readonly: picker.value.readonly,
                  "use-html5-validation": false,
                  onClick: onInputClick,
                  onKeyup: _cache[0] || (_cache[0] = withKeys(($event) => togglePicker(true), ["enter"])),
                  onChange: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("change", $event.target.value)),
                  onFocus: unref(onFocus),
                  onBlur: unref(onBlur),
                  onIconClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("icon-click", $event)),
                  onIconRightClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("icon-right-click", $event))
                }), null, 16, ["model-value", "placeholder", "size", "icon-pack", "icon", "icon-right", "icon-right-clickable", "expanded", "rounded", "disabled", "readonly", "onFocus", "onBlur"])
              ])
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["active", "position", "disabled", "inline", "mobile-modal", "trap-focus", "aria-role", "aria-modal", "teleport", "triggers"])) : (openBlock(), createBlock(_sfc_main$3, mergeProps({
          key: 1,
          ref_key: "nativeInputRef",
          ref: nativeInputRef
        }, inputBind.value, {
          type: computedNativeType.value,
          autocomplete: "off",
          "model-value": __props.nativeValue,
          min: __props.nativeMin,
          max: __props.nativeMax,
          step: __props.nativeStep,
          placeholder: picker.value.placeholder,
          size: picker.value.size,
          "icon-pack": picker.value.iconPack,
          icon: picker.value.icon,
          "icon-right": picker.value.iconRight,
          "icon-right-clickable": picker.value.iconRightClickable,
          rounded: picker.value.rounded,
          disabled: picker.value.disabled,
          readonly: false,
          "use-html5-validation": false,
          onChange: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("native-change", $event.target.value)),
          onFocus: unref(onFocus),
          onBlur: unref(onBlur),
          onInvalid: unref(onInvalid),
          onIconClick: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("icon-click", $event)),
          onIconRightClick: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("icon-right-click", $event))
        }), null, 16, ["type", "model-value", "min", "max", "step", "placeholder", "size", "icon-pack", "icon", "icon-right", "icon-right-clickable", "rounded", "disabled", "onFocus", "onBlur", "onInvalid"]))
      ], 10, _hoisted_1);
    };
  }
});
function getMonthNames(locale = void 0, format = "long") {
  const dates = [];
  for (let i = 0; i < 12; i++) {
    dates.push(new Date(2e3, i, 15));
  }
  const dtf = new Intl.DateTimeFormat(locale, {
    month: format
    // timeZone: 'UTC'
  });
  return dates.map((d) => dtf.format(d));
}
function getWeekdayNames(locale = void 0, firstDayOfWeek = 0, format = "narrow") {
  const dates = [];
  for (let i = 1, j = 0; j < 7; i++) {
    const d = new Date(2e3, 0, i);
    const day = d.getDay();
    if (day === firstDayOfWeek || j > 0) {
      dates.push(d);
      j++;
    }
  }
  const dtf = new Intl.DateTimeFormat(locale, {
    weekday: format
    // timeZone: 'UTC'
  });
  return dates.map((d) => dtf.format(d));
}
function matchWithGroups(pattern, str) {
  const matches = str.match(pattern);
  return pattern.toString().match(/<(.+?)>/g).map((group) => {
    const groupMatches = group.match(/<(.+)>/);
    if (!groupMatches || groupMatches.length <= 0) {
      return null;
    }
    return group.match(/<(.+)>/)[1];
  }).reduce((acc, curr, index) => {
    if (matches && matches.length > index) {
      acc[curr] = matches[index + 1];
    } else {
      acc[curr] = null;
    }
    return acc;
  }, {});
}
function weekBuilder(startingDate, month, year, firstDayOfWeek) {
  const thisMonth = new Date(year, month);
  const thisWeek = [];
  const dayOfWeek = new Date(year, month, startingDate).getDay();
  const end = dayOfWeek >= firstDayOfWeek ? dayOfWeek - firstDayOfWeek : 7 - firstDayOfWeek + dayOfWeek;
  let daysAgo = 1;
  for (let i = 0; i < end; i++) {
    thisWeek.unshift(
      new Date(
        thisMonth.getFullYear(),
        thisMonth.getMonth(),
        startingDate - daysAgo
      )
    );
    daysAgo++;
  }
  thisWeek.push(new Date(year, month, startingDate));
  let daysForward = 1;
  while (thisWeek.length < 7) {
    thisWeek.push(new Date(year, month, startingDate + daysForward));
    daysForward++;
  }
  return thisWeek;
}
function firstWeekOffset(year, dow, doy) {
  const fwd = 7 + dow - doy;
  const firstJanuary = new Date(year, 0, fwd);
  const fwdlw = (7 + firstJanuary.getDay() - dow) % 7;
  return -fwdlw + fwd - 1;
}
function daysInYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 366 : 365;
}
function weeksInYear(year, dow, doy) {
  const weekOffset = firstWeekOffset(year, dow, doy);
  const weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
  return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}
export {
  _sfc_main as _,
  weekBuilder as a,
  getWeekdayNames as b,
  firstWeekOffset as f,
  getMonthNames as g,
  matchWithGroups as m,
  weeksInYear as w
};
//# sourceMappingURL=utils-MP_2djm2.mjs.map
