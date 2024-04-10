/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { computed, defineComponent, ref, watch, openBlock, createBlock, unref, isRef, createSlots, withCtx, createVNode, mergeProps, createElementBlock, Fragment, renderList, toDisplayString, createElementVNode, normalizeClass, createCommentVNode, renderSlot } from "vue";
import { _ as _sfc_main$2 } from "./Select.vue_vue_type_script_setup_true_lang-sENSiXta.mjs";
import { m as matchWithGroups, _ as _sfc_main$1 } from "./utils-MP_2djm2.mjs";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { d as defineClasses, g as getActiveClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useVModelBinding, a as usePropBinding } from "./usePropValue-DLZTRe_e.mjs";
import { u as useMatchMedia } from "./useMatchMedia-G3BPCbzR.mjs";
const AM = "AM";
const PM = "PM";
const HOUR_FORMAT_24 = "24";
const HOUR_FORMAT_12 = "12";
function useTimepickerMixins(props) {
  const localeOptions = computed(
    () => new Intl.DateTimeFormat(props.locale, {
      hour: "numeric",
      minute: "numeric",
      second: props.enableSeconds ? "numeric" : void 0
    }).resolvedOptions()
  );
  const dtf = computed(
    () => new Intl.DateTimeFormat(props.locale, {
      hour: localeOptions.value.hour || "numeric",
      minute: localeOptions.value.minute || "numeric",
      second: props.enableSeconds ? localeOptions.value.second || "numeric" : void 0,
      hourCycle: !isHourFormat24.value ? "h12" : "h23"
    })
  );
  const computedHourFormat = computed(
    () => props.hourFormat || (localeOptions.value.hour12 ? HOUR_FORMAT_12 : HOUR_FORMAT_24)
  );
  const isHourFormat24 = computed(
    () => computedHourFormat.value === HOUR_FORMAT_24
  );
  const sampleTime = computed(() => {
    const d = props.timeCreator();
    d.setHours(10);
    d.setSeconds(0);
    d.setMinutes(0);
    d.setMilliseconds(0);
    return d;
  });
  const amString = computed(() => {
    if (dtf.value.formatToParts && typeof dtf.value.formatToParts === "function") {
      const d = sampleTime.value;
      d.setHours(10);
      const dayPeriod = dtf.value.formatToParts(d).find((part) => part.type === "dayPeriod");
      if (dayPeriod)
        return dayPeriod.value;
    }
    return AM;
  });
  const pmString = computed(() => {
    if (dtf.value.formatToParts && typeof dtf.value.formatToParts === "function") {
      const d = sampleTime.value;
      d.setHours(20);
      const dayPeriod = dtf.value.formatToParts(d).find((part) => part.type === "dayPeriod");
      if (dayPeriod) {
        return dayPeriod.value;
      }
    }
    return PM;
  });
  const meridiens = computed(() => [amString.value, pmString.value]);
  const hourLiteral = computed(() => {
    if (dtf.value.formatToParts && typeof dtf.value.formatToParts === "function") {
      const d = sampleTime.value;
      const parts = dtf.value.formatToParts(d);
      const literal = parts.find(
        (part, idx) => idx > 0 && parts[idx - 1].type === "hour"
      );
      if (literal)
        return literal.value;
    }
    return ":";
  });
  const minuteLiteral = computed(() => {
    if (dtf.value.formatToParts && typeof dtf.value.formatToParts === "function") {
      const d = sampleTime.value;
      const parts = dtf.value.formatToParts(d);
      const literal = parts.find(
        (part, idx) => idx > 0 && parts[idx - 1].type === "minute"
      );
      if (literal)
        return literal.value;
    }
    return ":";
  });
  const secondLiteral = computed(() => {
    if (dtf.value.formatToParts && typeof dtf.value.formatToParts === "function") {
      const d = sampleTime.value;
      const parts = dtf.value.formatToParts(d);
      const literal = parts.find(
        (part, idx) => idx > 0 && parts[idx - 1].type === "second"
      );
      if (literal)
        return literal.value;
    }
    return void 0;
  });
  function defaultTimeFormatter(time) {
    return dtf.value.format(time);
  }
  function defaultTimeParser(time) {
    if (!time)
      return null;
    if (dtf.value.formatToParts && typeof dtf.value.formatToParts === "function") {
      const formatRegex = dtf.value.formatToParts(sampleTime.value).map((part) => {
        if (part.type === "literal") {
          return part.value.replace(/ /g, "\\s?");
        } else if (part.type === "dayPeriod") {
          return `((?!=<${part.type}>)(${amString.value}|${pmString.value}|${AM}|${PM}|${AM.toLowerCase()}|${PM.toLowerCase()})?)`;
        }
        return `((?!=<${part.type}>)\\d+)`;
      }).join("");
      const timeGroups = matchWithGroups(formatRegex, time);
      timeGroups.hour = timeGroups.hour ? parseInt(timeGroups.hour, 10) : null;
      timeGroups.minute = timeGroups.minute ? parseInt(timeGroups.minute, 10) : null;
      timeGroups.second = timeGroups.second ? parseInt(timeGroups.second, 10) : null;
      if (timeGroups.hour && timeGroups.hour >= 0 && timeGroups.hour < 24 && timeGroups.minute && timeGroups.minute >= 0 && timeGroups.minute < 59) {
        if (timeGroups.dayPeriod && (timeGroups.dayPeriod.toLowerCase() === pmString.value.toLowerCase() || timeGroups.dayPeriod.toLowerCase() === PM.toLowerCase()) && timeGroups.hour < 12) {
          timeGroups.hour += 12;
        }
        const date2 = sampleTime.value;
        date2.setHours(timeGroups.hour);
        date2.setMinutes(timeGroups.minute);
        date2.setSeconds(timeGroups.second || 0);
        return date2;
      }
    }
    let am = false;
    if (props.hourFormat === HOUR_FORMAT_12) {
      const dateString12 = time.split(" ");
      time = dateString12[0];
      am = dateString12[1] === amString.value || dateString12[1] === AM;
    }
    const timeSplit = time.split(":");
    let hours = parseInt(timeSplit[0], 10);
    const minutes = parseInt(timeSplit[1], 10);
    const seconds = props.enableSeconds ? parseInt(timeSplit[2], 10) : 0;
    if (isNaN(hours) || hours < 0 || hours > 23 || props.hourFormat === HOUR_FORMAT_12 && (hours < 1 || hours > 12) || isNaN(minutes) || minutes < 0 || minutes > 59) {
      return null;
    }
    const date = sampleTime.value;
    date.setSeconds(seconds);
    date.setMinutes(minutes);
    if (props.hourFormat === HOUR_FORMAT_12) {
      if (am && hours === 12) {
        hours = 0;
      } else if (!am && hours !== 12) {
        hours += 12;
      }
    }
    date.setHours(hours);
    return new Date(date.getTime());
  }
  return {
    defaultTimeFormatter,
    defaultTimeParser,
    pmString,
    amString,
    meridiens,
    isHourFormat24,
    hourLiteral,
    minuteLiteral,
    secondLiteral
  };
}
const _hoisted_1 = ["value", "disabled"];
const _hoisted_2 = ["value", "disabled"];
const _hoisted_3 = ["value", "disabled"];
const _hoisted_4 = ["value", "disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "OTimepicker",
    configField: "timepicker"
  },
  __name: "Timepicker",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: Date, default: void 0 },
    /** The active state of the dropdown */
    active: { type: Boolean, default: false },
    /** Min time to select */
    minTime: { type: Date, default: void 0 },
    /** Max time to select */
    maxTime: { type: Date, default: void 0 },
    /** Display datepicker inline */
    inline: { type: Boolean, default: false },
    /** Input placeholder */
    placeholder: { type: String, default: void 0 },
    /** Makes input full width when inside a grouped or addon field */
    expanded: { type: Boolean, default: false },
    /** Makes the input rounded */
    rounded: { type: Boolean, default: false },
    /** Same as native input readonly */
    readonly: { type: Boolean, default: false },
    /** Same as native disabled */
    disabled: { type: Boolean, default: false },
    /**
     * Size of the button
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => getOption("timepicker.size")
    },
    hourFormat: { type: String, default: void 0 },
    incrementHours: { type: Number, default: 1 },
    incrementMinutes: { type: Number, default: 1 },
    incrementSeconds: { type: Number, default: 1 },
    /** Open dropdown on focus */
    openOnFocus: {
      type: Boolean,
      default: () => getOption("timepicker.openOnFocus", true)
    },
    /** Close dropdown on click */
    closeOnClick: {
      type: Boolean,
      default: () => getOption("timepicker.closeOnClick", true)
    },
    enableSeconds: { type: Boolean, default: false },
    defaultMinutes: { type: Number, default: void 0 },
    defaultSeconds: { type: Number, default: void 0 },
    /** Date format locale */
    locale: {
      type: String,
      default: () => getOption("locale")
    },
    /** Custom function to format a date into a string */
    timeFormatter: {
      type: Function,
      default: (date, defaultFunction) => getOption("timepicker.timeFormatter", defaultFunction)(date)
    },
    /** Custom function to parse a string into a date */
    timeParser: {
      type: Function,
      default: (date, defaultFunction) => getOption("timepicker.timeParser", defaultFunction)(date)
    },
    /** time creator function, default is `new Date()` */
    timeCreator: {
      type: Function,
      default: () => getOption("timepicker.timeCreator", () => /* @__PURE__ */ new Date())()
    },
    /** Define a list of times which can not be selected */
    unselectableTimes: {
      type: [Array, Function],
      default: () => []
    },
    /** Reset the time inputs when meridian changes */
    resetOnMeridianChange: {
      type: Boolean,
      default: false
    },
    /** Dropdown trapFocus */
    trapFocus: {
      type: Boolean,
      default: () => getOption("timepicker.trapFocus", true)
    },
    /** Dropdown position */
    position: { type: String, default: void 0 },
    /** Enable dropdown mobile modal */
    mobileModal: {
      type: Boolean,
      default: () => getOption("timepicker.mobileModal", true)
    },
    /** Enable mobile native input if mobile agent */
    mobileNative: {
      type: Boolean,
      default: () => getOption("timepicker.mobileNative", true)
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => getOption("timepicker.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => getOption("timepicker.icon", void 0)
    },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => getOption("timepicker.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: false },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => getOption("timepicker.mobileBreakpoint")
    },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => getOption("timepicker.teleport", false)
    },
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
    /** Class of the Timepicker component size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Timepicker component box where you choose the date */
    boxClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Timepicker separator */
    separatorClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Timepicker footer */
    footerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /**
     * Class configuration for the internal input component
     * @ignore
     */
    inputClasses: {
      type: Object,
      default: () => getOption("timepicker.inputClasses", {})
    },
    /**
     * Class configuration for the internal dropdown component
     * @ignore
     */
    dropdownClasses: {
      type: Object,
      default: () => getOption("timepicker.dropdownClasses", {})
    },
    /**
     * Class configuration for the internal select component
     * @ignore
     */
    selectClasses: {
      type: Object,
      default: () => getOption("timepicker.selectClasses", {})
    }
  },
  emits: ["update:modelValue", "update:active", "focus", "blur", "invalid", "icon-click", "icon-right-click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { isMobile } = useMatchMedia(props.mobileBreakpoint);
    const {
      defaultTimeFormatter,
      defaultTimeParser,
      pmString,
      amString,
      meridiens,
      isHourFormat24,
      hourLiteral,
      minuteLiteral,
      secondLiteral
    } = useTimepickerMixins(props);
    const pickerRef = ref();
    const vmodel = useVModelBinding(props, emits);
    const isActive = usePropBinding("active", props, emits);
    const hoursSelected = ref();
    const minutesSelected = ref();
    const secondsSelected = ref();
    const meridienSelected = ref();
    watch(
      () => props.modelValue,
      (value) => {
        if (value) {
          hoursSelected.value = value.getHours();
          minutesSelected.value = value.getMinutes();
          secondsSelected.value = value.getSeconds();
          meridienSelected.value = value.getHours() >= 12 ? pmString.value : amString.value;
        } else {
          hoursSelected.value = null;
          minutesSelected.value = null;
          secondsSelected.value = null;
          meridienSelected.value = amString.value;
        }
      },
      { immediate: true }
    );
    const formattedValue = computed(
      () => props.timeFormatter(props.modelValue, defaultTimeFormatter)
    );
    const nativeStep = computed(() => props.enableSeconds ? "1" : null);
    watch(
      () => props.hourFormat,
      () => {
        if (hoursSelected.value !== null) {
          meridienSelected.value = hoursSelected.value >= 12 ? pmString.value : amString.value;
        }
      }
    );
    watch(
      () => props.locale,
      (value) => {
        if (!value)
          meridienSelected.value = amString.value;
      }
    );
    function formatNumber(value, prependZero) {
      return isHourFormat24.value || prependZero ? pad(value) : String(value);
    }
    function pad(value) {
      return (value < 10 ? "0" : "") + value;
    }
    const hours = computed(() => {
      if (!props.incrementHours || props.incrementHours < 1)
        throw new Error("Hour increment cannot be null or less than 1.");
      const hours2 = [];
      const numberOfHours = isHourFormat24.value ? 24 : 12;
      for (let i = 0; i < numberOfHours; i += props.incrementHours) {
        let value = i;
        let label = value;
        if (!isHourFormat24.value) {
          value = i + 1;
          label = value;
          if (meridienSelected.value === amString.value) {
            if (value === 12) {
              value = 0;
            }
          } else if (meridienSelected.value === pmString.value) {
            if (value !== 12) {
              value += 12;
            }
          }
        }
        hours2.push({
          label: formatNumber(label, false),
          value
        });
      }
      return hours2;
    });
    const minutes = computed(() => {
      if (!props.incrementMinutes || props.incrementMinutes < 1)
        throw new Error("Minute increment cannot be null or less than 1.");
      const minutes2 = [];
      for (let i = 0; i < 60; i += props.incrementMinutes) {
        minutes2.push({
          label: formatNumber(i, true),
          value: i
        });
      }
      return minutes2;
    });
    const seconds = computed(() => {
      if (!props.incrementSeconds || props.incrementSeconds < 1)
        throw new Error("Second increment cannot be null or less than 1.");
      const seconds2 = [];
      for (let i = 0; i < 60; i += props.incrementSeconds) {
        seconds2.push({
          label: formatNumber(i, true),
          value: i
        });
      }
      return seconds2;
    });
    function isHourDisabled(hour) {
      let disabled = false;
      if (props.minTime) {
        const minHours = props.minTime.getHours();
        const noMinutesAvailable = minutes.value.every((minute) => {
          return isMinuteDisabledForHour(hour, minute.value);
        });
        disabled = hour < minHours || noMinutesAvailable;
      }
      if (props.maxTime) {
        if (!disabled) {
          const maxHours = props.maxTime.getHours();
          disabled = hour > maxHours;
        }
      }
      if (props.unselectableTimes) {
        if (!disabled) {
          if (typeof props.unselectableTimes === "function") {
            const date = /* @__PURE__ */ new Date();
            date.setHours(hour);
            date.setMinutes(minutesSelected.value);
            date.setSeconds(secondsSelected.value);
            return props.unselectableTimes(date);
          } else {
            const unselectable = props.unselectableTimes.filter((time) => {
              if (props.enableSeconds && secondsSelected.value !== null) {
                return time.getHours() === hour && time.getMinutes() === minutesSelected.value && time.getSeconds() === secondsSelected.value;
              } else if (minutesSelected.value !== null) {
                return time.getHours() === hour && time.getMinutes() === minutesSelected.value;
              }
              return false;
            });
            if (unselectable.length > 0) {
              disabled = true;
            } else {
              disabled = minutes.value.every((minute) => {
                return props.unselectableTimes.filter(
                  (time) => {
                    return time.getHours() === hour && time.getMinutes() === minute.value;
                  }
                ).length > 0;
              });
            }
          }
        }
      }
      return disabled;
    }
    function isMinuteDisabledForHour(hour, minute) {
      let disabled = false;
      if (props.minTime) {
        const minHours = props.minTime.getHours();
        const minMinutes = props.minTime.getMinutes();
        disabled = hour === minHours && minute < minMinutes;
      }
      if (props.maxTime) {
        if (!disabled) {
          const maxHours = props.maxTime.getHours();
          const maxMinutes = props.maxTime.getMinutes();
          disabled = hour === maxHours && minute > maxMinutes;
        }
      }
      return disabled;
    }
    function isMinuteDisabled(minute) {
      if (hoursSelected.value === null)
        return false;
      let disabled = false;
      if (isHourDisabled(hoursSelected.value)) {
        disabled = true;
      } else {
        disabled = isMinuteDisabledForHour(hoursSelected.value, minute);
      }
      if (props.unselectableTimes) {
        if (!disabled) {
          if (typeof props.unselectableTimes === "function") {
            const date = /* @__PURE__ */ new Date();
            date.setHours(hoursSelected.value);
            date.setMinutes(minute);
            date.setSeconds(secondsSelected.value);
            return props.unselectableTimes(date);
          } else {
            const unselectable = props.unselectableTimes.filter((time) => {
              if (props.enableSeconds && secondsSelected.value !== null) {
                return time.getHours() === hoursSelected.value && time.getMinutes() === minute && time.getSeconds() === secondsSelected.value;
              } else {
                return time.getHours() === hoursSelected.value && time.getMinutes() === minute;
              }
            });
            disabled = unselectable.length > 0;
          }
        }
      }
    }
    function isSecondDisabled(second) {
      if (minutesSelected.value == null)
        return false;
      let disabled = false;
      if (isMinuteDisabled(minutesSelected.value)) {
        disabled = true;
      } else {
        if (props.minTime) {
          const minHours = props.minTime.getHours();
          const minMinutes = props.minTime.getMinutes();
          const minSeconds = props.minTime.getSeconds();
          disabled = hoursSelected.value === minHours && minutesSelected.value === minMinutes && second < minSeconds;
        }
        if (props.maxTime) {
          if (!disabled) {
            const maxHours = props.maxTime.getHours();
            const maxMinutes = props.maxTime.getMinutes();
            const maxSeconds = props.maxTime.getSeconds();
            disabled = hoursSelected.value === maxHours && minutesSelected.value === maxMinutes && second > maxSeconds;
          }
        }
      }
      if (props.unselectableTimes) {
        if (!disabled) {
          if (typeof props.unselectableTimes === "function") {
            const date = /* @__PURE__ */ new Date();
            date.setHours(hoursSelected.value);
            date.setMinutes(minutesSelected.value);
            date.setSeconds(second);
            return props.unselectableTimes(date);
          } else {
            const unselectable = props.unselectableTimes.filter((time) => {
              return time.getHours() === hoursSelected.value && time.getMinutes() === minutesSelected.value && time.getSeconds() === second;
            });
            disabled = unselectable.length > 0;
          }
        }
      }
    }
    function isMeridienDisabled(meridienString) {
      const offset = meridienString == "AM" ? 0 : 12;
      for (let i = 0; i < 12; i++) {
        if (!isHourDisabled(i + offset))
          return false;
      }
      return true;
    }
    function updateDateSelected(hours2, minutes2, seconds2, meridiens2) {
      if (hours2 != null && minutes2 != null && (!isHourFormat24.value && meridiens2 !== null || isHourFormat24.value)) {
        let time = null;
        if (vmodel.value) {
          time = new Date(vmodel.value);
        } else {
          time = props.timeCreator();
          time.setMilliseconds(0);
        }
        time.setHours(hours2);
        time.setMinutes(minutes2);
        time.setSeconds(seconds2);
        if (!isNaN(time.getTime())) {
          vmodel.value = new Date(time.getTime());
        }
      }
    }
    function formatNative(value) {
      const date = new Date(value);
      if (value && !isNaN(date.getTime())) {
        const hours2 = date.getHours();
        const minutes2 = date.getMinutes();
        const seconds2 = date.getSeconds();
        return formatNumber(hours2, true) + ":" + formatNumber(minutes2, true) + ":" + formatNumber(seconds2, true);
      }
      return "";
    }
    function onMeridienChange(value) {
      if (hoursSelected.value !== null && props.resetOnMeridianChange) {
        hoursSelected.value = null;
        minutesSelected.value = null;
        secondsSelected.value = null;
        vmodel.value = null;
      } else if (hoursSelected.value !== null) {
        if (value === pmString.value)
          hoursSelected.value += 12;
        else if (value === amString.value)
          hoursSelected.value -= 12;
      }
      updateDateSelected(
        hoursSelected.value,
        minutesSelected.value,
        props.enableSeconds ? secondsSelected.value : 0,
        value
      );
    }
    function onHoursChange(value) {
      if (!minutesSelected.value && typeof props.defaultMinutes !== "undefined")
        minutesSelected.value = props.defaultMinutes;
      if (!secondsSelected.value && typeof props.defaultSeconds !== "undefined")
        secondsSelected.value = props.defaultSeconds;
      updateDateSelected(
        parseInt(value, 10),
        minutesSelected.value,
        props.enableSeconds ? secondsSelected.value : 0,
        meridienSelected.value
      );
    }
    function onMinutesChange(value) {
      if (!secondsSelected.value && props.defaultSeconds)
        secondsSelected.value = props.defaultSeconds;
      updateDateSelected(
        hoursSelected.value,
        parseInt(value, 10),
        props.enableSeconds ? secondsSelected.value : 0,
        meridienSelected.value
      );
    }
    function onSecondsChange(value) {
      updateDateSelected(
        hoursSelected.value,
        minutesSelected.value,
        parseInt(value, 10),
        meridienSelected.value
      );
    }
    function onChange(value) {
      const date = props.timeParser(value, defaultTimeParser);
      vmodel.value = date ? date : null;
    }
    function onChangeNativePicker(date) {
      if (date) {
        let time = null;
        if (vmodel.value) {
          time = new Date(vmodel.value);
        } else {
          time = props.timeCreator();
          time.setMilliseconds(0);
        }
        const t = date.split(":");
        time.setHours(parseInt(t[0], 10));
        time.setMinutes(parseInt(t[1], 10));
        time.setSeconds(t[2] ? parseInt(t[2], 10) : 0);
        vmodel.value = new Date(time.getTime());
      } else {
        vmodel.value = null;
      }
    }
    const selectSelectClasses = defineClasses([
      "selectClasses.selectClass",
      "o-tpck__select"
    ]);
    const selectPlaceholderClasses = defineClasses([
      "selectClasses.placeholderClass",
      "o-tpck__select-placeholder"
    ]);
    const selectBind = computed(() => ({
      "select-class": getActiveClasses(selectSelectClasses.value),
      "placeholder-class": getActiveClasses(selectPlaceholderClasses.value),
      ...props.selectClasses
    }));
    const rootClasses = defineClasses(
      ["rootClass", "o-tpck"],
      [
        "sizeClass",
        "o-tpck--",
        computed(() => props.size),
        computed(() => !!props.size)
      ],
      ["mobileClass", "o-tpck--mobile", null, isMobile]
    );
    const separatorClasses = defineClasses(["separatorClass", "o-tpck__separtor"]);
    const footerClasses = defineClasses(["footerClass", "o-tpck__footer"]);
    const dropdownClass = defineClasses([
      "dropdownClasses.rootClass",
      "o-tpck__dropdown"
    ]);
    const boxClasses = defineClasses(["boxClass", "o-tpck__box"]);
    const boxClassBind = computed(() => getActiveClasses(boxClasses.value));
    __expose({ focus: () => {
      var _a;
      return (_a = pickerRef.value) == null ? void 0 : _a.focus();
    } });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        ref_key: "pickerRef",
        ref: pickerRef,
        active: unref(isActive),
        "onUpdate:active": _cache[8] || (_cache[8] = ($event) => isRef(isActive) ? isActive.value = $event : null),
        "data-oruga": "timepicker",
        value: unref(vmodel),
        "picker-props": props,
        "formatted-value": formattedValue.value,
        "native-type": "time",
        "native-value": formatNative(unref(vmodel)),
        "native-max": formatNative(__props.maxTime),
        "native-min": formatNative(__props.minTime),
        "native-step": nativeStep.value,
        "dropdown-classes": unref(dropdownClass),
        "root-classes": unref(rootClasses),
        "box-class": boxClassBind.value,
        onChange,
        onNativeChange: onChangeNativePicker,
        onFocus: _cache[9] || (_cache[9] = ($event) => _ctx.$emit("focus", $event)),
        onBlur: _cache[10] || (_cache[10] = ($event) => _ctx.$emit("blur", $event)),
        onInvalid: _cache[11] || (_cache[11] = ($event) => _ctx.$emit("invalid", $event)),
        onIconClick: _cache[12] || (_cache[12] = ($event) => _ctx.$emit("icon-click", $event)),
        onIconRightClick: _cache[13] || (_cache[13] = ($event) => _ctx.$emit("icon-right-click", $event))
      }, createSlots({
        default: withCtx(() => [
          createVNode(_sfc_main$2, mergeProps(selectBind.value, {
            modelValue: hoursSelected.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => hoursSelected.value = $event),
            override: "",
            disabled: __props.disabled,
            placeholder: "00",
            onChange: _cache[1] || (_cache[1] = ($event) => onHoursChange($event.target.value))
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(hours.value, (hour) => {
                return openBlock(), createElementBlock("option", {
                  key: hour.value,
                  value: hour.value,
                  disabled: isHourDisabled(hour.value)
                }, toDisplayString(hour.label), 9, _hoisted_1);
              }), 128))
            ]),
            _: 1
          }, 16, ["modelValue", "disabled"]),
          createElementVNode("span", {
            class: normalizeClass(unref(separatorClasses))
          }, toDisplayString(unref(hourLiteral)), 3),
          createVNode(_sfc_main$2, mergeProps(selectBind.value, {
            modelValue: minutesSelected.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => minutesSelected.value = $event),
            override: "",
            disabled: __props.disabled,
            placeholder: "00",
            onChange: _cache[3] || (_cache[3] = ($event) => onMinutesChange($event.target.value))
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(minutes.value, (minute) => {
                return openBlock(), createElementBlock("option", {
                  key: minute.value,
                  value: minute.value,
                  disabled: isMinuteDisabled(minute.value)
                }, toDisplayString(minute.label), 9, _hoisted_2);
              }), 128))
            ]),
            _: 1
          }, 16, ["modelValue", "disabled"]),
          __props.enableSeconds ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createElementVNode("span", {
              class: normalizeClass(unref(separatorClasses))
            }, toDisplayString(unref(minuteLiteral)), 3),
            createVNode(_sfc_main$2, mergeProps(selectBind.value, {
              modelValue: secondsSelected.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => secondsSelected.value = $event),
              override: "",
              disabled: __props.disabled,
              placeholder: "00",
              onChange: _cache[5] || (_cache[5] = ($event) => onSecondsChange($event.target.value))
            }), {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(seconds.value, (second) => {
                  return openBlock(), createElementBlock("option", {
                    key: second.value,
                    value: second.value,
                    disabled: isSecondDisabled(second.value)
                  }, toDisplayString(second.label), 9, _hoisted_3);
                }), 128))
              ]),
              _: 1
            }, 16, ["modelValue", "disabled"]),
            createElementVNode("span", {
              class: normalizeClass(unref(separatorClasses))
            }, toDisplayString(unref(secondLiteral)), 3)
          ], 64)) : createCommentVNode("", true),
          !unref(isHourFormat24) ? (openBlock(), createBlock(_sfc_main$2, mergeProps({ key: 1 }, selectBind.value, {
            modelValue: meridienSelected.value,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => meridienSelected.value = $event),
            override: "",
            disabled: __props.disabled,
            onChange: _cache[7] || (_cache[7] = ($event) => onMeridienChange($event.target.value))
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(meridiens), (meridien) => {
                return openBlock(), createElementBlock("option", {
                  key: meridien,
                  value: meridien,
                  disabled: isMeridienDisabled(meridien)
                }, toDisplayString(meridien), 9, _hoisted_4);
              }), 128))
            ]),
            _: 1
          }, 16, ["modelValue", "disabled"])) : createCommentVNode("", true),
          _ctx.$slots.default ? (openBlock(), createElementBlock("footer", {
            key: 2,
            class: normalizeClass(unref(footerClasses))
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 2
      }, [
        _ctx.$slots.trigger ? {
          name: "trigger",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "trigger")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["active", "value", "picker-props", "formatted-value", "native-value", "native-max", "native-min", "native-step", "dropdown-classes", "root-classes", "box-class"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Timepicker.vue_vue_type_script_setup_true_lang-BBG_Q_e1.mjs.map
