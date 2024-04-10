/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, mergeModels, ref, computed, watch, useModel, openBlock, createBlock, mergeProps, unref, withCtx, createElementVNode, normalizeClass, createVNode, renderSlot, createCommentVNode } from "vue";
import { _ as _sfc_main$1 } from "./Datepicker.vue_vue_type_script_setup_true_lang-DjoFZoIQ.mjs";
import { _ as _sfc_main$2 } from "./Timepicker.vue_vue_type_script_setup_true_lang-BBG_Q_e1.mjs";
import { _ as _sfc_main$3 } from "./Input.vue_vue_type_script_setup_true_lang-Cne1qVCn.mjs";
import { g as getOption, b as registerComponent } from "./config-zKhnAIV0.mjs";
import { isMobileAgent } from "./helpers.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useInputHandler } from "./useInputHandler-BGDwfETo.mjs";
import { m as matchWithGroups } from "./utils-MP_2djm2.mjs";
const AM = "AM";
const PM = "PM";
const HOUR_FORMAT_24 = "24";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "ODatetimepicker",
    configField: "datetimepicker",
    inheritAttrs: false
  },
  __name: "Datetimepicker",
  props: /* @__PURE__ */ mergeModels({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: Date, default: void 0 },
    /** The active state of the dropdown, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: false },
    /** Define props for the underlying datepicker component */
    datepicker: {
      type: Object,
      default: void 0
    },
    /** Define props for the underlying timepicker component */
    timepicker: {
      type: Object,
      default: void 0
    },
    /** Min date to select */
    minDatetime: { type: Date, default: void 0 },
    /** Max date to select */
    maxDatetime: { type: Date, default: void 0 },
    /**
     * Size of the input control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => getOption("datetimepicker.size")
    },
    expanded: { type: Boolean, default: false },
    /** Makes the input rounded */
    rounded: { type: Boolean, default: false },
    /** Input placeholder */
    placeholder: { type: String, default: void 0 },
    /** Same as native input readonly */
    readonly: { type: Boolean, default: false },
    /** Same as native disabled */
    disabled: { type: Boolean, default: false },
    /** Display datetimepicker inline */
    inline: { type: Boolean, default: false },
    /** Open dropdown on focus */
    openOnFocus: {
      type: Boolean,
      default: () => getOption("datetimepicker.openOnFocus", true)
    },
    /** Date format locale */
    locale: {
      type: String,
      default: () => getOption("locale")
    },
    /** Custom function to format a date into a string */
    datetimeFormatter: {
      type: Function,
      default: (date, defaultFunction) => getOption("datetimepicker.dateFormatter", defaultFunction)(date)
    },
    /** Custom function to parse a string into a date */
    datetimeParser: {
      type: Function,
      default: (date, defaultFunction) => getOption("datetimepicker.dateParser", defaultFunction)(date)
    },
    /** Date creator function, default is `new Date()` */
    datetimeCreator: {
      type: Function,
      default: (date) => getOption(
        "datetimepicker.datetimeCreator",
        (d) => new Date(d)
      )(date)
    },
    /** Dropdown position */
    position: { type: String, default: void 0 },
    /** Enable mobile native input if mobile agent */
    mobileNative: {
      type: Boolean,
      default: () => getOption("datetimepicker.mobileNative", true)
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => getOption("datetimepicker.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => getOption("datetimepicker.icon", void 0)
    },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => getOption("datetimepicker.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: false },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => getOption("datetimepicker.teleport", false)
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => getOption("useHtml5Validation", true)
    },
    /** The message which is shown when a validation error occurs */
    validationMessage: { type: String, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the Datepicker wrapper */
    datepickerWrapperClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Timepicker wrapper */
    timepickerWrapperClass: {
      type: [String, Array, Function],
      default: void 0
    }
  }, {
    "active": { type: Boolean },
    "activeModifiers": {},
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "update:active", "range-start", "range-end", "change-month", "change-year", "focus", "blur", "invalid", "icon-click", "icon-right-click"], ["update:active", "update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const datepickerRef = ref();
    const timepickerRef = ref();
    const nativeInputRef = ref();
    const elementRef = computed(
      () => isMobileNative.value ? nativeInputRef.value : datepickerRef.value
    );
    const { setFocus, onBlur, onFocus, onInvalid } = useInputHandler(
      elementRef,
      emits,
      props
    );
    const isMobileNative = computed(
      () => props.mobileNative && isMobileAgent.any()
    );
    watch([() => isMobileNative.value, () => props.inline], () => {
      if (datepickerRef.value)
        datepickerRef.value.$forceUpdate();
    });
    const isActive = useModel(__props, "active");
    const vmodel = useModel(__props, "modelValue");
    function updateVModel(value) {
      if (!value) {
        vmodel.value = void 0;
        return;
      }
      if (Array.isArray(value)) {
        updateVModel(value[0]);
        return;
      }
      let date = new Date(value.getTime());
      if (!props.modelValue) {
        date = props.datetimeCreator(value);
      } else {
        if ((value.getDate() !== props.modelValue.getDate() || value.getMonth() !== props.modelValue.getMonth() || value.getFullYear() !== props.modelValue.getFullYear()) && value.getHours() === 0 && value.getMinutes() === 0 && value.getSeconds() === 0) {
          date.setHours(
            props.modelValue.getHours(),
            props.modelValue.getMinutes(),
            props.modelValue.getSeconds(),
            0
          );
        }
      }
      if (props.minDatetime && date < props.minDatetime) {
        date = props.minDatetime;
      } else if (props.maxDatetime && date > props.maxDatetime) {
        date = props.maxDatetime;
      }
      vmodel.value = new Date(date.getTime());
    }
    const minDate = computed(() => {
      if (!props.minDatetime)
        return props.datepicker ? props.datepicker.minDate : null;
      return new Date(
        props.minDatetime.getFullYear(),
        props.minDatetime.getMonth(),
        props.minDatetime.getDate(),
        0,
        0,
        0,
        0
      );
    });
    const maxDate = computed(() => {
      if (!props.maxDatetime)
        return props.datepicker ? props.datepicker.maxDate : null;
      return new Date(
        props.maxDatetime.getFullYear(),
        props.maxDatetime.getMonth(),
        props.maxDatetime.getDate(),
        0,
        0,
        0,
        0
      );
    });
    const minTime = computed(() => {
      if (!props.minDatetime || vmodel.value === null || typeof vmodel.value === "undefined" || vmodel.value.getFullYear() != props.minDatetime.getFullYear() || vmodel.value.getMonth() != props.minDatetime.getMonth() || vmodel.value.getDate() != props.minDatetime.getDate()) {
        return props.timepicker ? props.timepicker.minTime : null;
      }
      return props.minDatetime;
    });
    const maxTime = computed(() => {
      if (!props.maxDatetime || vmodel.value === null || typeof vmodel.value === "undefined" || vmodel.value.getFullYear() != props.maxDatetime.getFullYear() || vmodel.value.getMonth() != props.maxDatetime.getMonth() || vmodel.value.getDate() != props.maxDatetime.getDate()) {
        return props.timepicker ? props.timepicker.maxTime : null;
      }
      return props.maxDatetime;
    });
    const datepickerSize = computed(
      () => {
        var _a;
        return ((_a = props.datepicker) == null ? void 0 : _a.size) ? props.datepicker.size : props.size;
      }
    );
    const timepickerSize = computed(
      () => {
        var _a;
        return ((_a = props.timepicker) == null ? void 0 : _a.size) ? props.timepicker.size : props.size;
      }
    );
    const timepickerDisabled = computed(
      () => {
        var _a;
        return ((_a = props.timepicker) == null ? void 0 : _a.disabled) ? props.timepicker.disabled : props.disabled;
      }
    );
    function formatNative(value) {
      const date = new Date(value);
      if (value && !isNaN(date.getTime())) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return year + "-" + ((month < 10 ? "0" : "") + month) + "-" + ((day < 10 ? "0" : "") + day) + "T" + ((hours < 10 ? "0" : "") + hours) + ":" + ((minutes < 10 ? "0" : "") + minutes) + ":" + ((seconds < 10 ? "0" : "") + seconds);
      }
      return "";
    }
    const enableSeconds = computed(
      () => {
        var _a;
        return ((_a = timepickerRef.value) == null ? void 0 : _a.enableSeconds) ? timepickerRef.value.enableSeconds : false;
      }
    );
    const localeOptions = computed(
      () => new Intl.DateTimeFormat(props.locale, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: enableSeconds.value ? "numeric" : void 0
      }).resolvedOptions()
    );
    const isHourFormat24 = computed(
      () => {
        var _a;
        return ((_a = props.timepicker) == null ? void 0 : _a.hourFormat) === HOUR_FORMAT_24 || !localeOptions.value.hour12;
      }
    );
    const dtf = computed(
      () => new Intl.DateTimeFormat(props.locale, {
        year: localeOptions.value.year || "numeric",
        month: localeOptions.value.month || "numeric",
        day: localeOptions.value.day || "numeric",
        hour: localeOptions.value.hour || "numeric",
        minute: localeOptions.value.minute || "numeric",
        second: enableSeconds.value ? localeOptions.value.second || "numeric" : void 0,
        hourCycle: !isHourFormat24.value ? "h12" : "h23"
      })
    );
    const amString = computed(() => {
      if (dtf.value.formatToParts && typeof dtf.value.formatToParts === "function") {
        const d = props.datetimeCreator(/* @__PURE__ */ new Date());
        d.setHours(10);
        const dayPeriod = dtf.value.formatToParts(d).find((part) => part.type === "dayPeriod");
        if (dayPeriod)
          return dayPeriod.value;
      }
      return AM;
    });
    const pmString = computed(() => {
      if (dtf.value.formatToParts && typeof dtf.value.formatToParts === "function") {
        const d = props.datetimeCreator(/* @__PURE__ */ new Date());
        d.setHours(20);
        const dayPeriod = dtf.value.formatToParts(d).find((part) => part.type === "dayPeriod");
        if (dayPeriod)
          return dayPeriod.value;
      }
      return PM;
    });
    function defaultDatetimeParser(value) {
      function defaultParser(date2) {
        if (dtf.value.formatToParts && typeof dtf.value.formatToParts === "function") {
          const dayPeriods = [AM, PM, AM.toLowerCase(), PM.toLowerCase()];
          if (timepickerRef.value) {
            dayPeriods.push(amString.value);
            dayPeriods.push(pmString.value);
          }
          const parts = this.dtf.formatToParts(/* @__PURE__ */ new Date());
          const formatRegex = parts.map((part, idx) => {
            if (part.type === "literal") {
              if (idx + 1 < parts.length && parts[idx + 1].type === "hour") {
                return `[^\\d]+`;
              }
              return part.value.replace(/ /g, "\\s?");
            } else if (part.type === "dayPeriod") {
              return `((?!=<${part.type}>)(${dayPeriods.join(
                "|"
              )})?)`;
            }
            return `((?!=<${part.type}>)\\d+)`;
          }).join("");
          const datetimeGroups = matchWithGroups(formatRegex, date2);
          if (datetimeGroups.year && datetimeGroups.year.length === 4 && datetimeGroups.month && datetimeGroups.month <= 12 && datetimeGroups.day && datetimeGroups.day <= 31 && datetimeGroups.hour && datetimeGroups.hour >= 0 && datetimeGroups.hour < 24 && datetimeGroups.minute && datetimeGroups.minute >= 0 && datetimeGroups.minute <= 59) {
            const d = new Date(
              datetimeGroups.year,
              datetimeGroups.month - 1,
              datetimeGroups.day,
              datetimeGroups.hour,
              datetimeGroups.minute,
              datetimeGroups.second || 0
            );
            return d;
          }
        }
        return new Date(Date.parse(date2));
      }
      const date = props.datetimeParser(value, defaultParser);
      return date;
    }
    function defaultDatetimeFormatter(date) {
      return props.datetimeFormatter(
        date,
        (date2) => date2 ? dtf.value.format(date2) : ""
      );
    }
    function onChangeNativePicker(event) {
      const date = event.target.value;
      const s = date ? date.split(/\D/) : [];
      if (s.length >= 5) {
        const year = parseInt(s[0], 10);
        const month = parseInt(s[1], 10) - 1;
        const day = parseInt(s[2], 10);
        const hours = parseInt(s[3], 10);
        const minutes = parseInt(s[4], 10);
        updateVModel(new Date(year, month, day, hours, minutes));
      } else {
        updateVModel(null);
      }
    }
    const datepickerWrapperClasses = defineClasses([
      "datepickerWrapperClass",
      "o-dtpck__date"
    ]);
    const timepickerWrapperClasses = defineClasses([
      "timepickerWrapperClass",
      "o-dtpck__time"
    ]);
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return !isMobileNative.value || __props.inline ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
        key: 0,
        ref_key: "datepickerRef",
        ref: datepickerRef
      }, { ..._ctx.$attrs, ...__props.datepicker }, {
        active: isActive.value,
        "onUpdate:active": _cache[1] || (_cache[1] = ($event) => isActive.value = $event),
        "model-value": vmodel.value,
        "data-oruga": "datetimepicker",
        class: unref(datepickerWrapperClasses),
        rounded: __props.rounded,
        "open-on-focus": __props.openOnFocus,
        position: __props.position,
        inline: __props.inline,
        readonly: __props.readonly,
        expanded: __props.expanded,
        "close-on-click": false,
        "date-formatter": defaultDatetimeFormatter,
        "date-parser": defaultDatetimeParser,
        "min-date": minDate.value,
        "max-date": maxDate.value,
        icon: __props.icon,
        "icon-right": __props.iconRight,
        "icon-right-clickable": __props.iconRightClickable,
        "icon-pack": __props.iconPack,
        size: datepickerSize.value,
        placeholder: __props.placeholder,
        range: false,
        disabled: __props.disabled,
        "mobile-native": isMobileNative.value,
        locale: __props.locale,
        teleport: __props.teleport,
        "onUpdate:modelValue": updateVModel,
        onFocus: unref(onFocus),
        onBlur: unref(onBlur),
        onChangeMonth: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("change-month", $event)),
        onChangeYear: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("change-year", $event)),
        onIconClick: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("icon-click", $event)),
        onIconRightClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("icon-right-click", $event))
      }), {
        footer: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(unref(timepickerWrapperClasses))
          }, [
            createVNode(_sfc_main$2, mergeProps({
              ref_key: "timepickerRef",
              ref: timepickerRef
            }, __props.timepicker, {
              modelValue: vmodel.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vmodel.value = $event),
              inline: "",
              readonly: __props.readonly,
              "min-time": minTime.value,
              "max-time": maxTime.value,
              size: timepickerSize.value,
              disabled: timepickerDisabled.value,
              "mobile-native": isMobileNative.value,
              locale: __props.locale
            }), null, 16, ["modelValue", "readonly", "min-time", "max-time", "size", "disabled", "mobile-native", "locale"])
          ], 2),
          _ctx.$slots.footer !== void 0 ? renderSlot(_ctx.$slots, "footer", { key: 0 }) : createCommentVNode("", true)
        ]),
        _: 3
      }, 16, ["active", "model-value", "class", "rounded", "open-on-focus", "position", "inline", "readonly", "expanded", "min-date", "max-date", "icon", "icon-right", "icon-right-clickable", "icon-pack", "size", "placeholder", "disabled", "mobile-native", "locale", "teleport", "onFocus", "onBlur"])) : (openBlock(), createBlock(_sfc_main$3, mergeProps({ key: 1 }, _ctx.$attrs, {
        ref_key: "nativeInputRef",
        ref: nativeInputRef,
        type: "datetime-local",
        autocomplete: "off",
        value: formatNative(vmodel.value),
        max: formatNative(maxDate.value),
        min: formatNative(minDate.value),
        placeholder: __props.placeholder,
        size: datepickerSize.value,
        "icon-pack": __props.iconPack,
        icon: __props.icon,
        rounded: __props.rounded,
        disabled: __props.disabled,
        readonly: false,
        "use-html5-validation": false,
        onChange: onChangeNativePicker,
        onFocus: unref(onFocus),
        onBlur: unref(onBlur),
        onInvalid: unref(onInvalid)
      }), null, 16, ["value", "max", "min", "placeholder", "size", "icon-pack", "icon", "rounded", "disabled", "onFocus", "onBlur", "onInvalid"]));
    };
  }
});
const index = {
  install(app) {
    registerComponent(app, _sfc_main);
  }
};
export {
  _sfc_main as ODatetimepicker,
  index as default
};
//# sourceMappingURL=datetimepicker.mjs.map
