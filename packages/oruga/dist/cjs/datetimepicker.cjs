"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const Datepicker_vue_vue_type_script_setup_true_lang = require("./Datepicker.vue_vue_type_script_setup_true_lang-BV46XGIX.cjs");
const Timepicker_vue_vue_type_script_setup_true_lang = require("./Timepicker.vue_vue_type_script_setup_true_lang-De78V57H.cjs");
const Input_vue_vue_type_script_setup_true_lang = require("./Input.vue_vue_type_script_setup_true_lang-CWmlmVsP.cjs");
const config = require("./config-JkCO4AEi.cjs");
const helpers = require("./helpers.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const useInputHandler = require("./useInputHandler-jezRcEW8.cjs");
const utils = require("./utils-HhLzUp4J.cjs");
const AM = "AM";
const PM = "PM";
const HOUR_FORMAT_24 = "24";
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "ODatetimepicker",
    configField: "datetimepicker",
    inheritAttrs: false
  },
  __name: "Datetimepicker",
  props: /* @__PURE__ */ vue.mergeModels({
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
      default: () => config.getOption("datetimepicker.size")
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
      default: () => config.getOption("datetimepicker.openOnFocus", true)
    },
    /** Date format locale */
    locale: {
      type: String,
      default: () => config.getOption("locale")
    },
    /** Custom function to format a date into a string */
    datetimeFormatter: {
      type: Function,
      default: (date, defaultFunction) => config.getOption("datetimepicker.dateFormatter", defaultFunction)(date)
    },
    /** Custom function to parse a string into a date */
    datetimeParser: {
      type: Function,
      default: (date, defaultFunction) => config.getOption("datetimepicker.dateParser", defaultFunction)(date)
    },
    /** Date creator function, default is `new Date()` */
    datetimeCreator: {
      type: Function,
      default: (date) => config.getOption(
        "datetimepicker.datetimeCreator",
        (d) => new Date(d)
      )(date)
    },
    /** Dropdown position */
    position: { type: String, default: void 0 },
    /** Enable mobile native input if mobile agent */
    mobileNative: {
      type: Boolean,
      default: () => config.getOption("datetimepicker.mobileNative", true)
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => config.getOption("datetimepicker.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => config.getOption("datetimepicker.icon", void 0)
    },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => config.getOption("datetimepicker.iconRight", void 0)
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
      default: () => config.getOption("datetimepicker.teleport", false)
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => config.getOption("useHtml5Validation", true)
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
  emits: /* @__PURE__ */ vue.mergeModels(["update:modelValue", "update:active", "range-start", "range-end", "change-month", "change-year", "focus", "blur", "invalid", "icon-click", "icon-right-click"], ["update:active", "update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const datepickerRef = vue.ref();
    const timepickerRef = vue.ref();
    const nativeInputRef = vue.ref();
    const elementRef = vue.computed(
      () => isMobileNative.value ? nativeInputRef.value : datepickerRef.value
    );
    const { setFocus, onBlur, onFocus, onInvalid } = useInputHandler.useInputHandler(
      elementRef,
      emits,
      props
    );
    const isMobileNative = vue.computed(
      () => props.mobileNative && helpers.isMobileAgent.any()
    );
    vue.watch([() => isMobileNative.value, () => props.inline], () => {
      if (datepickerRef.value)
        datepickerRef.value.$forceUpdate();
    });
    const isActive = vue.useModel(__props, "active");
    const vmodel = vue.useModel(__props, "modelValue");
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
    const minDate = vue.computed(() => {
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
    const maxDate = vue.computed(() => {
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
    const minTime = vue.computed(() => {
      if (!props.minDatetime || vmodel.value === null || typeof vmodel.value === "undefined" || vmodel.value.getFullYear() != props.minDatetime.getFullYear() || vmodel.value.getMonth() != props.minDatetime.getMonth() || vmodel.value.getDate() != props.minDatetime.getDate()) {
        return props.timepicker ? props.timepicker.minTime : null;
      }
      return props.minDatetime;
    });
    const maxTime = vue.computed(() => {
      if (!props.maxDatetime || vmodel.value === null || typeof vmodel.value === "undefined" || vmodel.value.getFullYear() != props.maxDatetime.getFullYear() || vmodel.value.getMonth() != props.maxDatetime.getMonth() || vmodel.value.getDate() != props.maxDatetime.getDate()) {
        return props.timepicker ? props.timepicker.maxTime : null;
      }
      return props.maxDatetime;
    });
    const datepickerSize = vue.computed(
      () => {
        var _a;
        return ((_a = props.datepicker) == null ? void 0 : _a.size) ? props.datepicker.size : props.size;
      }
    );
    const timepickerSize = vue.computed(
      () => {
        var _a;
        return ((_a = props.timepicker) == null ? void 0 : _a.size) ? props.timepicker.size : props.size;
      }
    );
    const timepickerDisabled = vue.computed(
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
    const enableSeconds = vue.computed(
      () => {
        var _a;
        return ((_a = timepickerRef.value) == null ? void 0 : _a.enableSeconds) ? timepickerRef.value.enableSeconds : false;
      }
    );
    const localeOptions = vue.computed(
      () => new Intl.DateTimeFormat(props.locale, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: enableSeconds.value ? "numeric" : void 0
      }).resolvedOptions()
    );
    const isHourFormat24 = vue.computed(
      () => {
        var _a;
        return ((_a = props.timepicker) == null ? void 0 : _a.hourFormat) === HOUR_FORMAT_24 || !localeOptions.value.hour12;
      }
    );
    const dtf = vue.computed(
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
    const amString = vue.computed(() => {
      if (dtf.value.formatToParts && typeof dtf.value.formatToParts === "function") {
        const d = props.datetimeCreator(/* @__PURE__ */ new Date());
        d.setHours(10);
        const dayPeriod = dtf.value.formatToParts(d).find((part) => part.type === "dayPeriod");
        if (dayPeriod)
          return dayPeriod.value;
      }
      return AM;
    });
    const pmString = vue.computed(() => {
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
          const datetimeGroups = utils.matchWithGroups(formatRegex, date2);
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
    const datepickerWrapperClasses = defineClasses.defineClasses([
      "datepickerWrapperClass",
      "o-dtpck__date"
    ]);
    const timepickerWrapperClasses = defineClasses.defineClasses([
      "timepickerWrapperClass",
      "o-dtpck__time"
    ]);
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return !isMobileNative.value || __props.inline ? (vue.openBlock(), vue.createBlock(Datepicker_vue_vue_type_script_setup_true_lang._sfc_main, vue.mergeProps({
        key: 0,
        ref_key: "datepickerRef",
        ref: datepickerRef
      }, { ..._ctx.$attrs, ...__props.datepicker }, {
        active: isActive.value,
        "onUpdate:active": _cache[1] || (_cache[1] = ($event) => isActive.value = $event),
        "model-value": vmodel.value,
        "data-oruga": "datetimepicker",
        class: vue.unref(datepickerWrapperClasses),
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
        onFocus: vue.unref(onFocus),
        onBlur: vue.unref(onBlur),
        onChangeMonth: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("change-month", $event)),
        onChangeYear: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("change-year", $event)),
        onIconClick: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("icon-click", $event)),
        onIconRightClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("icon-right-click", $event))
      }), {
        footer: vue.withCtx(() => [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(timepickerWrapperClasses))
          }, [
            vue.createVNode(Timepicker_vue_vue_type_script_setup_true_lang._sfc_main, vue.mergeProps({
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
          _ctx.$slots.footer !== void 0 ? vue.renderSlot(_ctx.$slots, "footer", { key: 0 }) : vue.createCommentVNode("", true)
        ]),
        _: 3
      }, 16, ["active", "model-value", "class", "rounded", "open-on-focus", "position", "inline", "readonly", "expanded", "min-date", "max-date", "icon", "icon-right", "icon-right-clickable", "icon-pack", "size", "placeholder", "disabled", "mobile-native", "locale", "teleport", "onFocus", "onBlur"])) : (vue.openBlock(), vue.createBlock(Input_vue_vue_type_script_setup_true_lang._sfc_main, vue.mergeProps({ key: 1 }, _ctx.$attrs, {
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
        onFocus: vue.unref(onFocus),
        onBlur: vue.unref(onBlur),
        onInvalid: vue.unref(onInvalid)
      }), null, 16, ["value", "max", "min", "placeholder", "size", "icon-pack", "icon", "rounded", "disabled", "onFocus", "onBlur", "onInvalid"]));
    };
  }
});
const index = {
  install(app) {
    config.registerComponent(app, _sfc_main);
  }
};
exports.ODatetimepicker = _sfc_main;
exports.default = index;
//# sourceMappingURL=datetimepicker.cjs.map
