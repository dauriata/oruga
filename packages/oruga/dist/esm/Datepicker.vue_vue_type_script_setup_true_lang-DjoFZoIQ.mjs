/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { computed, defineComponent, ref, watch, nextTick, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, withModifiers, withKeys, createElementVNode, toDisplayString, createCommentVNode, Fragment, renderList, mergeModels, useModel, createBlock, createTextVNode, createSlots, withCtx, renderSlot, mergeProps, createVNode } from "vue";
import { _ as _sfc_main$5 } from "./Button.vue_vue_type_script_setup_true_lang-D7iwVqb3.mjs";
import { _ as _sfc_main$6 } from "./Select.vue_vue_type_script_setup_true_lang-sENSiXta.mjs";
import { m as matchWithGroups, f as firstWeekOffset, w as weeksInYear, a as weekBuilder, g as getMonthNames, b as getWeekdayNames, _ as _sfc_main$4 } from "./utils-MP_2djm2.mjs";
import { d as defineClasses, g as getActiveClasses } from "./defineClasses-uo4lMA-t.mjs";
import { isDefined } from "./helpers.mjs";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { u as useMatchMedia } from "./useMatchMedia-G3BPCbzR.mjs";
function useDatepickerMixins(props) {
  function isDateSelectable(date, month) {
    const validity = [];
    if (props.minDate)
      validity.push(date >= props.minDate);
    if (props.maxDate)
      validity.push(date <= props.maxDate);
    if (props.nearbyMonthDays && !props.nearbySelectableMonthDays)
      validity.push(date.getMonth() === month);
    if (props.selectableDates) {
      if (typeof props.selectableDates === "function") {
        if (props.selectableDates(date))
          return true;
        else
          validity.push(false);
      } else {
        for (let i = 0; i < props.selectableDates.length; i++) {
          const enabledDate = props.selectableDates[i];
          if (date.getDate() === enabledDate.getDate() && date.getFullYear() === enabledDate.getFullYear() && date.getMonth() === enabledDate.getMonth())
            return true;
          else
            validity.push(false);
        }
      }
    }
    if (props.unselectableDates) {
      if (typeof props.unselectableDates === "function") {
        validity.push(!props.unselectableDates(date));
      } else {
        for (let i = 0; i < props.unselectableDates.length; i++) {
          const disabledDate = props.unselectableDates[i];
          validity.push(
            date.getDate() !== disabledDate.getDate() || date.getFullYear() !== disabledDate.getFullYear() || date.getMonth() !== disabledDate.getMonth()
          );
        }
      }
    }
    if (props.unselectableDaysOfWeek) {
      for (let i = 0; i < props.unselectableDaysOfWeek.length; i++) {
        const dayOfWeek = props.unselectableDaysOfWeek[i];
        validity.push(date.getDay() !== dayOfWeek);
      }
    }
    return validity.indexOf(false) < 0;
  }
  const isTypeMonth = computed(() => props.type === "month");
  const localeOptions = computed(
    () => new Intl.DateTimeFormat(props.locale, {
      year: "numeric",
      month: "numeric"
    }).resolvedOptions()
  );
  const dtf = computed(
    () => new Intl.DateTimeFormat(
      props.locale
      /*, { timeZone: 'UTC' }*/
    )
  );
  const dtfMonth = computed(
    () => new Intl.DateTimeFormat(props.locale, {
      year: localeOptions.value.year || "numeric",
      month: localeOptions.value.month || "2-digit"
      // timeZone: 'UTC'
    })
  );
  const sampleTime = computed(() => {
    const d = props.dateCreator();
    d.setHours(10);
    d.setSeconds(0);
    d.setMinutes(0);
    d.setMilliseconds(0);
    return d;
  });
  const defaultDateFormatter = (date) => {
    if (!date)
      return "";
    const targetDates = Array.isArray(date) ? date : [date];
    const dates = targetDates.map((date2) => {
      const d = new Date(
        date2.getFullYear(),
        date2.getMonth(),
        date2.getDate(),
        12
      );
      return !isTypeMonth.value ? dtf.value.format(d) : dtfMonth.value.format(d);
    });
    return !props.multiple ? dates.join(" - ") : dates.join(", ");
  };
  const defaultDateParser = (date) => {
    if (!date)
      return null;
    if (dtf.value.formatToParts && typeof dtf.value.formatToParts === "function") {
      const formatRegex = (isTypeMonth.value ? dtfMonth.value : dtf.value).formatToParts(sampleTime.value).map((part) => {
        if (part.type === "literal")
          return part.value;
        return `((?!=<${part.type}>)\\d+)`;
      }).join("");
      const dateGroups = matchWithGroups(formatRegex, date);
      if (dateGroups.year && dateGroups.year.length === 4 && dateGroups.month && dateGroups.month <= 12) {
        if (isTypeMonth.value)
          return new Date(dateGroups.year, dateGroups.month - 1);
        else if (dateGroups.day && dateGroups.day <= 31) {
          return new Date(
            dateGroups.year,
            dateGroups.month - 1,
            dateGroups.day,
            12
          );
        }
      }
    }
    if (!isTypeMonth.value)
      return new Date(Date.parse(date));
    const s = date.split("/");
    const year = s[0].length === 4 ? s[0] : s[1];
    const month = s[0].length === 2 ? s[0] : s[1];
    if (year && month) {
      return new Date(
        parseInt(year, 10),
        parseInt(month, 10) - 1,
        1,
        0,
        0,
        0,
        0
      );
    }
  };
  return { isDateSelectable, defaultDateParser, defaultDateFormatter };
}
const _hoisted_1$2 = ["tabindex"];
const _hoisted_2$2 = ["tabindex", "onClick", "onMouseenter", "onFocus", "onKeydown"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    name: "ODatepickerTableRow",
    configField: "datepicker"
  },
  __name: "DatepickerTableRow",
  props: {
    day: { type: Number, required: true },
    week: { type: Array, required: true },
    month: { type: Number, required: true },
    selectedDate: {
      type: [Date, Array],
      default: void 0
    },
    events: { type: Array, default: void 0 },
    hoveredDateRange: { type: Array, default: () => [] },
    pickerProps: {
      type: Object,
      required: true
    }
  },
  emits: ["select", "hover-enddate", "change-focus", "week-number-click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { isDateSelectable } = useDatepickerMixins(props.pickerProps);
    const datepicker = computed(() => props.pickerProps);
    const hasEvents = computed(() => {
      var _a;
      return !!((_a = props.events) == null ? void 0 : _a.length);
    });
    const dayRefs = ref(/* @__PURE__ */ new Map());
    function setDayRef(date, el) {
      const refKey = `day-${date.getMonth()}-${date.getDate()}`;
      if (el)
        dayRefs.value.set(refKey, el);
    }
    watch(
      () => props.day,
      (day) => {
        if (props.week.map((d) => d.getDate()).includes(day))
          nextTick(() => {
            const refKey = `day-${props.month}-${day}`;
            const ref2 = dayRefs.value.get(refKey);
            if (ref2)
              ref2.focus();
          });
      }
    );
    watch(
      () => props.month,
      // clear day refs on month change
      () => dayRefs.value = /* @__PURE__ */ new Map()
    );
    function clickWeekNumber(week) {
      if (datepicker.value.weekNumberClickable)
        emits("week-number-click", week);
    }
    function getDayOfYear(input) {
      return Math.round(
        (input.getTime() - new Date(input.getFullYear(), 0, 1).getTime()) / 864e5
      ) + 1;
    }
    function getWeekNumber(mom) {
      const dow = datepicker.value.firstDayOfWeek;
      const doy = datepicker.value.rulesForFirstWeek;
      const weekOffset = firstWeekOffset(mom.getFullYear(), dow, doy);
      const week = Math.floor((getDayOfYear(mom) - weekOffset - 1) / 7) + 1;
      let resWeek;
      let resYear;
      if (week < 1) {
        resYear = mom.getFullYear() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.getFullYear(), dow, doy)) {
        resWeek = week - weeksInYear(mom.getFullYear(), dow, doy);
        resYear = mom.getFullYear() + 1;
      } else {
        resYear = mom.getFullYear();
        resWeek = week;
      }
      return resWeek;
    }
    function eventsDateMatch(day) {
      var _a;
      if (!((_a = props.events) == null ? void 0 : _a.length))
        return [];
      return props.events.filter((event) => event.date.getDay() === day.getDay());
    }
    function onKeydown(event, weekDay) {
      let preventDefault = true;
      switch (event.key) {
        case "Tab": {
          preventDefault = false;
          break;
        }
        case " ":
        case "Space":
        case "Spacebar":
        case "Enter": {
          selectDate(weekDay);
          break;
        }
        case "ArrowLeft":
        case "Left": {
          changeFocus(weekDay, -1);
          break;
        }
        case "ArrowRight":
        case "Right": {
          changeFocus(weekDay, 1);
          break;
        }
        case "ArrowUp":
        case "Up": {
          changeFocus(weekDay, -7);
          break;
        }
        case "ArrowDown":
        case "Down": {
          changeFocus(weekDay, 7);
          break;
        }
      }
      if (preventDefault)
        event.preventDefault();
    }
    function selectDate(date) {
      if (datepicker.value.disabled)
        return;
      if (isDateSelectable(date, props.month))
        emits("select", date);
    }
    function changeFocus(day, inc) {
      const nextDay = new Date(day.getTime());
      nextDay.setDate(day.getDate() + inc);
      while (datepicker.value.minDate && nextDay < datepicker.value.minDate || datepicker.value.maxDate && nextDay > datepicker.value.maxDate || !isDateSelectable(nextDay, nextDay.getMonth())) {
        nextDay.setDate(nextDay.getDate() - Math.sign(inc));
      }
      setRangeHoverEndDate(nextDay);
      emits("change-focus", nextDay);
    }
    function setRangeHoverEndDate(day) {
      if (datepicker.value.range)
        emits("hover-enddate", day);
    }
    function dateMatch(dateOne, dateTwo, multiple = false) {
      if (!dateOne || !dateTwo || multiple)
        return false;
      if (Array.isArray(dateTwo)) {
        return dateTwo.some(
          (date) => dateOne.getDate() === date.getDate() && dateOne.getFullYear() === date.getFullYear() && dateOne.getMonth() === date.getMonth()
        );
      }
      return dateOne.getDate() === dateTwo.getDate() && dateOne.getFullYear() === dateTwo.getFullYear() && dateOne.getMonth() === dateTwo.getMonth();
    }
    function dateWithin(dateOne, dates, multiple = false) {
      if (!Array.isArray(dates) || multiple)
        return false;
      return dateOne > dates[0] && dateOne < dates[1];
    }
    function cellClasses(day) {
      const classes = defineClasses(
        [
          "tableCellSelectedClass",
          "o-dpck__table__cell--selected",
          null,
          dateMatch(day, props.selectedDate) || dateWithin(day, props.selectedDate, datepicker.value.multiple)
        ],
        [
          "tableCellFirstSelectedClass",
          "o-dpck__table__cell--first-selected",
          null,
          dateMatch(
            day,
            Array.isArray(props.selectedDate) && props.selectedDate[0],
            datepicker.value.multiple
          )
        ],
        [
          "tableCellWithinSelectedClass",
          "o-dpck__table__cell--within-selected",
          null,
          dateWithin(day, props.selectedDate, datepicker.value.multiple)
        ],
        [
          "tableCellLastSelectedClass",
          "o-dpck__table__cell--last-selected",
          null,
          dateMatch(
            day,
            Array.isArray(props.selectedDate) && props.selectedDate[1],
            datepicker.value.multiple
          )
        ],
        [
          "tableCellFirstHoveredClass",
          "o-dpck__table__cell--first-hovered",
          null,
          dateMatch(
            day,
            Array.isArray(props.hoveredDateRange) && props.hoveredDateRange[0]
          )
        ],
        [
          "tableCellWithinHoveredClass",
          "o-dpck__table__cell--within-hovered",
          null,
          dateWithin(day, props.hoveredDateRange)
        ],
        [
          "tableCellLastHoveredClass",
          "o-dpck__table__cell--last-hovered",
          null,
          dateMatch(
            day,
            Array.isArray(props.hoveredDateRange) && props.hoveredDateRange[1]
          )
        ],
        [
          "tableCellTodayClass",
          "o-dpck__table__cell--today",
          null,
          dateMatch(day, datepicker.value.dateCreator())
        ],
        [
          "tableCellSelectableClass",
          "o-dpck__table__cell--selectable",
          null,
          isDateSelectable(day, props.month) && !datepicker.value.disabled
        ],
        [
          "tableCellUnselectableClass",
          "o-dpck__table__cell--unselectable",
          null,
          !isDateSelectable(day, props.month) || datepicker.value.disabled
        ],
        [
          "tableCellInvisibleClass",
          "o-dpck__table__cell--invisible",
          null,
          !datepicker.value.nearbyMonthDays && day.getMonth() !== props.month
        ],
        [
          "tableCellNearbyClass",
          "o-dpck__table__cell--nearby",
          null,
          datepicker.value.nearbySelectableMonthDays && day.getMonth() !== props.month
        ],
        [
          "tableCellTodayClass",
          "o-dpck__table__cell--today",
          null,
          dateMatch(day, datepicker.value.dateCreator())
        ]
      );
      return [
        ...tableCellClasses.value,
        ...cellEventsClass.value,
        ...classes.value
      ];
    }
    function eventClasses(event) {
      const classes = defineClasses(
        ["tableEventClass", "o-dpck__table__event"],
        [
          "tableEventVariantClass",
          "o-dpck__table__event--",
          event.type,
          !!event.type
        ],
        [
          "tableEventIndicatorsClass",
          "o-dpck__table__event--",
          datepicker.value.indicators,
          !!datepicker.value.indicators
        ]
      );
      return classes.value;
    }
    const tableRowClasses = defineClasses(["tableRowClass", "o-dpck__table__row"]);
    const tableCellClasses = defineClasses([
      "tableCellClass",
      "o-dpck__table__cell"
    ]);
    const tableEventsClasses = defineClasses([
      "tableEventsClass",
      "o-dpck__table__events"
    ]);
    const cellEventsClass = defineClasses([
      "tableCellEventsClass",
      "o-dpck__table__cell--events",
      null,
      hasEvents
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(tableRowClasses))
      }, [
        datepicker.value.showWeekNumber ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(tableCellClasses)),
          style: normalizeStyle({
            cursor: datepicker.value.weekNumberClickable ? "pointer" : "auto"
          }),
          tabindex: datepicker.value.weekNumberClickable ? 0 : null,
          role: "button",
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => clickWeekNumber(getWeekNumber(__props.week[6])), ["prevent"])),
          onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => clickWeekNumber(getWeekNumber(__props.week[6])), ["prevent"]), ["enter"]))
        }, [
          createElementVNode("span", null, toDisplayString(getWeekNumber(__props.week[6])), 1)
        ], 46, _hoisted_1$2)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.week, (weekDay, idx) => {
          return openBlock(), createElementBlock(Fragment, { key: idx }, [
            !datepicker.value.disabled && unref(isDateSelectable)(weekDay, __props.month) ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_for: true,
              ref: (el) => setDayRef(weekDay, el),
              class: normalizeClass(cellClasses(weekDay)),
              role: "button",
              tabindex: __props.day === weekDay.getDate() && __props.month === weekDay.getMonth() ? null : 0,
              onClick: withModifiers(($event) => selectDate(weekDay), ["prevent"]),
              onMouseenter: ($event) => setRangeHoverEndDate(weekDay),
              onFocus: ($event) => setRangeHoverEndDate(weekDay),
              onKeydown: withKeys(withModifiers(($event) => onKeydown($event, weekDay), ["prevent"]), ["enter"])
            }, [
              createElementVNode("span", null, toDisplayString(weekDay.getDate()), 1),
              eventsDateMatch(weekDay).length ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(tableEventsClasses))
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(eventsDateMatch(weekDay), (event, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: normalizeClass(eventClasses(event))
                  }, null, 2);
                }), 128))
              ], 2)) : createCommentVNode("", true)
            ], 42, _hoisted_2$2)) : (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(cellClasses(weekDay))
            }, [
              createElementVNode("span", null, toDisplayString(weekDay.getDate()), 1)
            ], 2))
          ], 64);
        }), 128))
      ], 2);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    name: "ODatepickerTable",
    configField: "datepicker"
  },
  __name: "DatepickerTable",
  props: /* @__PURE__ */ mergeModels({
    modelValue: {
      type: [Date, Array],
      default: void 0
    },
    focusedDate: { type: Object, required: true },
    dayNames: { type: Array, required: true },
    monthNames: { type: Array, required: true },
    pickerProps: {
      type: Object,
      required: true
    }
  }, {
    "focusedDate": {},
    "focusedDateModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "update:focusedDate", "range-start", "range-end", "week-number-click"], ["update:focusedDate"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { isDateSelectable } = useDatepickerMixins(props.pickerProps);
    const focusedDateModel = useModel(__props, "focusedDate");
    const selectedBeginDate = ref();
    const selectedEndDate = ref();
    const hoveredEndDate = ref();
    const datepicker = computed(() => props.pickerProps);
    const visibleDayNames = computed(() => {
      const visibleDayNames2 = [];
      let index = datepicker.value.firstDayOfWeek;
      while (visibleDayNames2.length < props.dayNames.length) {
        const currentDayName = props.dayNames[index % props.dayNames.length];
        visibleDayNames2.push(currentDayName);
        index++;
      }
      if (datepicker.value.showWeekNumber)
        visibleDayNames2.unshift("");
      return visibleDayNames2;
    });
    const eventsInThisMonth = computed(() => {
      if (!datepicker.value.events)
        return [];
      return datepicker.value.events.map(
        (event) => !event.date && event instanceof Date ? { date: event } : event
      ).filter(
        (event) => event.date.getMonth() === focusedDateModel.value.month && event.date.getFullYear() === focusedDateModel.value.year
      );
    });
    const weeksInThisMonth = computed(() => {
      validateFocusedDay();
      const month = focusedDateModel.value.month;
      const year = focusedDateModel.value.year;
      const weeksInThisMonth2 = [];
      let startingDay = 1;
      while (weeksInThisMonth2.length < 6) {
        const newWeek = weekBuilder(
          startingDay,
          month,
          year,
          datepicker.value.firstDayOfWeek
        );
        weeksInThisMonth2.push(newWeek);
        startingDay += 7;
      }
      return weeksInThisMonth2;
    });
    function eventsInThisWeek(week) {
      if (!datepicker.value.events)
        return [];
      return eventsInThisMonth.value.filter((event) => {
        const stripped = new Date(event.date);
        stripped.setHours(0, 0, 0, 0);
        const timed = stripped.getTime();
        return week.some((weekDate) => weekDate.getTime() === timed);
      });
    }
    const hoveredDateRange = computed(() => {
      if (!datepicker.value.range || selectedEndDate.value)
        return [];
      return (hoveredEndDate.value < selectedBeginDate.value ? [hoveredEndDate.value, selectedBeginDate.value] : [selectedBeginDate.value, hoveredEndDate.value]).filter(isDefined);
    });
    function validateFocusedDay() {
      const currentDate = new Date(
        focusedDateModel.value.year,
        focusedDateModel.value.month,
        focusedDateModel.value.day
      );
      if (isDateSelectable(currentDate, focusedDateModel.value.month))
        return;
      let day = 0;
      const monthDays = new Date(
        focusedDateModel.value.year,
        focusedDateModel.value.month + 1,
        0
      ).getDate();
      let firstFocusable = null;
      while (!firstFocusable && ++day < monthDays) {
        const date = new Date(
          focusedDateModel.value.year,
          focusedDateModel.value.month,
          day
        );
        if (isDateSelectable(date, focusedDateModel.value.month)) {
          firstFocusable = currentDate;
          focusedDateModel.value = {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear()
          };
        }
      }
    }
    function onSelectedDate(date) {
      if (datepicker.value.disabled)
        return;
      if (!datepicker.value.range && !datepicker.value.multiple)
        emits("update:modelValue", date);
      else if (datepicker.value.range)
        handleSelectRangeDate(date);
      else if (datepicker.value.multiple)
        handleSelectMultipleDates(date);
    }
    function handleSelectRangeDate(date) {
      if (selectedBeginDate.value && selectedEndDate.value) {
        selectedBeginDate.value = date;
        selectedEndDate.value = void 0;
        emits("range-start", date);
      } else if (selectedBeginDate.value && !selectedEndDate.value) {
        if (selectedBeginDate.value > date) {
          selectedEndDate.value = selectedBeginDate.value;
          selectedBeginDate.value = date;
        } else {
          selectedEndDate.value = date;
        }
        emits("range-end", date);
        emits("update:modelValue", [
          selectedBeginDate.value,
          selectedEndDate.value
        ]);
      } else {
        selectedBeginDate.value = date;
        emits("range-start", date);
      }
    }
    function handleSelectMultipleDates(date) {
      if (!Array.isArray(props.modelValue))
        return;
      let multipleSelectedDates = props.modelValue;
      const multipleSelect = multipleSelectedDates.filter(
        (selectedDate) => selectedDate.getDate() === date.getDate() && selectedDate.getFullYear() === date.getFullYear() && selectedDate.getMonth() === date.getMonth()
      );
      if (multipleSelect.length) {
        multipleSelectedDates = multipleSelectedDates.filter(
          (selectedDate) => selectedDate.getDate() !== date.getDate() || selectedDate.getFullYear() !== date.getFullYear() || selectedDate.getMonth() !== date.getMonth()
        );
      } else {
        multipleSelectedDates = [...multipleSelectedDates, date];
      }
      emits("update:modelValue", multipleSelectedDates);
    }
    function onRangeHoverEndDate(date) {
      hoveredEndDate.value = date;
    }
    function onChangeFocus(date) {
      focusedDateModel.value = {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
      };
    }
    const tableClasses = defineClasses(["tableClass", "o-dpck__table"]);
    const tableHeadClasses = defineClasses([
      "tableHeadClass",
      "o-dpck__table__head"
    ]);
    const tableCellClasses = defineClasses([
      "tableCellClass",
      "o-dpck__table__cell"
    ]);
    const tableHeadCellClasses = defineClasses([
      "tableHeadCellClass",
      "o-dpck__table__head-cell"
    ]);
    const tableBodyClasses = defineClasses([
      "tableBodyClass",
      "o-dpck__table__body"
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(unref(tableClasses))
      }, [
        createElementVNode("header", {
          class: normalizeClass(unref(tableHeadClasses))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(visibleDayNames.value, (day, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: normalizeClass([...unref(tableCellClasses), ...unref(tableHeadCellClasses)])
            }, [
              createElementVNode("span", null, toDisplayString(day), 1)
            ], 2);
          }), 128))
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(unref(tableBodyClasses))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(weeksInThisMonth.value, (week, index) => {
            return openBlock(), createBlock(_sfc_main$3, {
              key: index,
              "selected-date": __props.modelValue,
              day: focusedDateModel.value.day,
              week,
              month: focusedDateModel.value.month,
              events: eventsInThisWeek(week),
              "hovered-date-range": hoveredDateRange.value,
              "picker-props": props.pickerProps,
              onSelect: onSelectedDate,
              onHoverEnddate: onRangeHoverEndDate,
              onChangeFocus,
              onWeekNumberClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("week-number-click", $event))
            }, null, 8, ["selected-date", "day", "week", "month", "events", "hovered-date-range", "picker-props"]);
          }), 128))
        ], 2)
      ], 2);
    };
  }
});
const _hoisted_1$1 = ["disabled", "tabindex", "onClick", "onMouseenter", "onFocus", "onKeydown"];
const _hoisted_2$1 = {
  key: 0,
  class: "events"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    name: "ODatepickerMonth",
    configField: "datepicker",
    inheritAttrs: false
  },
  __name: "DatepickerMonth",
  props: {
    modelValue: {
      type: [Date, Array],
      default: void 0
    },
    monthNames: { type: Array, required: true },
    focusedDate: { type: Object, required: true },
    pickerProps: {
      type: Object,
      required: true
    }
  },
  emits: ["update:modelValue", "update:focusedDate", "range-start", "range-end"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const selectedBeginDate = ref();
    const selectedEndDate = ref();
    const hoveredEndDate = ref();
    const datepicker = computed(() => props.pickerProps);
    const hasEvents = computed(() => {
      var _a;
      return !!((_a = datepicker.value.events) == null ? void 0 : _a.length);
    });
    const monthRefs = ref(/* @__PURE__ */ new Map());
    function setMonthRef(date, el) {
      const refKey = `month-${date.getMonth()}`;
      if (el)
        monthRefs.value.set(refKey, el);
    }
    watch(
      () => props.focusedDate.month,
      (month) => {
        const refKey = `month-${month}`;
        nextTick(() => {
          const ref2 = monthRefs.value.get(refKey);
          if ((ref2 == null ? void 0 : ref2.length) > 0 && ref2[0]) {
            ref2[0].focus();
          }
        });
      }
    );
    const eventsInThisYear = computed(() => {
      if (!datepicker.value.events)
        return [];
      return datepicker.value.events.map((event) => {
        if (!event.date && event instanceof Date)
          event = { date: event };
        if (!event.type)
          event.type = "is-primary";
        return event;
      }).filter((event) => event.date.getFullYear() === props.focusedDate.year);
    });
    const monthDates = computed(() => {
      const year = props.focusedDate.year;
      const months = [];
      for (let i = 0; i < 12; i++) {
        const d = new Date(year, i, 1);
        d.setHours(0, 0, 0, 0);
        months.push(d);
      }
      return months;
    });
    const hoveredDateRange = computed(() => {
      if (!datepicker.value.range || !selectedEndDate.value)
        return [];
      return (hoveredEndDate.value < selectedBeginDate.value ? [hoveredEndDate.value, selectedBeginDate.value] : [selectedBeginDate.value, hoveredEndDate.value]).filter(isDefined);
    });
    function eventsDateMatch(day) {
      if (!eventsInThisYear.value.length)
        return [];
      return eventsInThisYear.value.filter(
        (event) => event.date.getMonth() === day.getMonth()
      );
    }
    function isDateSelectable(date) {
      const validity = [];
      if (datepicker.value.minDate)
        validity.push(date >= datepicker.value.minDate);
      if (datepicker.value.maxDate)
        validity.push(date <= datepicker.value.maxDate);
      validity.push(date.getFullYear() === props.focusedDate.year);
      if (datepicker.value.selectableDates) {
        if (typeof datepicker.value.selectableDates === "function") {
          if (datepicker.value.selectableDates(date))
            return true;
          else
            validity.push(false);
        } else {
          for (let i = 0; i < datepicker.value.selectableDates.length; i++) {
            const enabledDate = datepicker.value.selectableDates[i];
            if (date.getFullYear() === enabledDate.getFullYear() && date.getMonth() === enabledDate.getMonth())
              return true;
            else
              validity.push(false);
          }
        }
      }
      if (datepicker.value.unselectableDates) {
        if (typeof datepicker.value.unselectableDates === "function") {
          validity.push(!datepicker.value.unselectableDates(date));
        } else {
          for (let i = 0; i < datepicker.value.unselectableDates.length; i++) {
            const disabledDate = datepicker.value.unselectableDates[i];
            validity.push(
              date.getFullYear() !== disabledDate.getFullYear() || date.getMonth() !== disabledDate.getMonth()
            );
          }
        }
      }
      if (datepicker.value.unselectableDaysOfWeek) {
        for (let i = 0; i < datepicker.value.unselectableDaysOfWeek.length; i++) {
          const dayOfWeek = datepicker.value.unselectableDaysOfWeek[i];
          validity.push(date.getDay() !== dayOfWeek);
        }
      }
      return validity.indexOf(false) < 0;
    }
    function onKeydown(event, weekDay) {
      let preventDefault = true;
      switch (event.key) {
        case "Tab": {
          preventDefault = false;
          break;
        }
        case " ":
        case "Space":
        case "Spacebar":
        case "Enter": {
          selectDate(weekDay);
          break;
        }
        case "ArrowLeft":
        case "Left": {
          changeFocus(weekDay, -1);
          break;
        }
        case "ArrowRight":
        case "Right": {
          changeFocus(weekDay, 1);
          break;
        }
        case "ArrowUp":
        case "Up": {
          changeFocus(weekDay, -7);
          break;
        }
        case "ArrowDown":
        case "Down": {
          changeFocus(weekDay, 7);
          break;
        }
      }
      if (preventDefault)
        event.preventDefault();
    }
    function selectDate(date) {
      if (datepicker.value.disabled)
        return;
      if (!datepicker.value.range && !datepicker.value.multiple && isDateSelectable(date))
        emits("update:modelValue", date);
      else if (datepicker.value.range)
        handleSelectRangeDate(date);
      else if (datepicker.value.multiple)
        handleSelectMultipleDates(date);
    }
    function handleSelectRangeDate(date) {
      if (selectedBeginDate.value && selectedEndDate.value) {
        selectedBeginDate.value = date;
        selectedEndDate.value = void 0;
        emits("range-start", date);
      } else if (selectedBeginDate.value && !selectedEndDate.value) {
        if (selectedBeginDate.value > date) {
          selectedEndDate.value = selectedBeginDate.value;
          selectedBeginDate.value = date;
        } else {
          selectedEndDate.value = date;
        }
        emits("range-end", date);
        emits("update:modelValue", [
          selectedBeginDate.value,
          selectedEndDate.value
        ]);
      } else {
        selectedBeginDate.value = date;
        emits("range-start", date);
      }
    }
    const multipleSelectedDates = computed(
      () => datepicker.value.multiple && props.modelValue ? props.modelValue : []
    );
    function handleSelectMultipleDates(date) {
      if (!Array.isArray(props.modelValue))
        return;
      let multipleSelectedDates2 = props.modelValue;
      const multipleSelect = multipleSelectedDates2.filter(
        (selectedDate) => selectedDate.getDate() === date.getDate() && selectedDate.getFullYear() === date.getFullYear() && selectedDate.getMonth() === date.getMonth()
      );
      if (multipleSelect.length) {
        multipleSelectedDates2 = multipleSelectedDates2.filter(
          (selectedDate) => selectedDate.getDate() !== date.getDate() || selectedDate.getFullYear() !== date.getFullYear() || selectedDate.getMonth() !== date.getMonth()
        );
      } else {
        multipleSelectedDates2.push(date);
      }
      emits("update:modelValue", multipleSelectedDates2);
    }
    function changeFocus(month, inc) {
      month.setMonth(month.getMonth() + inc);
      const focused = {
        day: month.getDate(),
        month: month.getMonth(),
        year: month.getFullYear()
      };
      emits("update:focusedDate", focused);
    }
    function onRangeHoverEndDate(day) {
      if (datepicker.value.range)
        hoveredEndDate.value = day;
    }
    function dateMatch(dateOne, dateTwo, multiple = false) {
      if (!dateOne || !dateTwo || multiple)
        return false;
      if (Array.isArray(dateTwo))
        return dateTwo.some(
          (date) => dateOne.getFullYear() === date.getFullYear() && dateOne.getMonth() === date.getMonth()
        );
      return dateOne.getFullYear() === dateTwo.getFullYear() && dateOne.getMonth() === dateTwo.getMonth();
    }
    function dateWithin(dateOne, dates, multiple = false) {
      if (!Array.isArray(dates) || multiple)
        return false;
      return dateOne > dates[0] && dateOne < dates[1];
    }
    function dateMultipleSelected(dateOne, dates, multiple = false) {
      if (!Array.isArray(dates) || !multiple)
        return false;
      return dates.some(
        (date) => dateOne.getDate() === date.getDate() && dateOne.getFullYear() === date.getFullYear() && dateOne.getMonth() === date.getMonth()
      );
    }
    const monthClasses = defineClasses(["monthClass", "o-dpck__month"]);
    const monthBodyClasses = defineClasses([
      "monthBodyClass",
      "o-dpck__month__body"
    ]);
    const monthTableClasses = defineClasses([
      "monthTableClass",
      "o-dpck__month__table"
    ]);
    const monthCellClasses = defineClasses(
      ["monthCellClass", "o-dpck__month__cell"],
      ["monthCellEventsClass", "o-dpck__month__cell--events", null, hasEvents]
    );
    function cellClasses(day) {
      const classes = defineClasses(
        [
          "monthCellSelectedClass",
          "o-dpck__month__cell--selected",
          null,
          dateMatch(day, props.modelValue, datepicker.value.multiple) || dateWithin(day, props.modelValue, datepicker.value.multiple) || dateMultipleSelected(
            day,
            multipleSelectedDates.value,
            datepicker.value.multiple
          )
        ],
        [
          "monthCellFirstSelectedClass",
          "o-dpck__month__cell--first-selected",
          null,
          dateMatch(
            day,
            Array.isArray(props.modelValue) && props.modelValue[0],
            datepicker.value.multiple
          )
        ],
        [
          "monthCellWithinSelectedClass",
          "o-dpck__month__cell--within-selected",
          null,
          dateWithin(day, props.modelValue, datepicker.value.multiple)
        ],
        [
          "monthCellLastSelectedClass",
          "o-dpck__month__cell--last-selected",
          null,
          dateMatch(
            day,
            Array.isArray(props.modelValue) && props.modelValue[1],
            datepicker.value.multiple
          )
        ],
        [
          "monthCellWithinHoveredRangeClass",
          "o-dpck__month__cell--within-hovered-range",
          null,
          hoveredDateRange.value && hoveredDateRange.value.length === 2 && (dateMatch(day, hoveredDateRange.value) || dateWithin(day, hoveredDateRange.value))
        ],
        [
          "monthCellFirstHoveredClass",
          "o-dpck__month__cell--first-hovered",
          null,
          dateMatch(
            day,
            Array.isArray(hoveredDateRange.value) && hoveredDateRange.value[0]
          )
        ],
        [
          "monthCellWithinHoveredClass",
          "o-dpck__month__cell--within-hovered",
          null,
          dateWithin(day, hoveredDateRange.value)
        ],
        [
          "monthCellLastHoveredClass",
          "o-dpck__month__cell--last-hovered",
          null,
          dateMatch(
            day,
            Array.isArray(hoveredDateRange.value) && hoveredDateRange.value[1]
          )
        ],
        [
          "monthCellTodayClass",
          "o-dpck__month__cell--today",
          null,
          dateMatch(day, datepicker.value.dateCreator())
        ],
        [
          "monthCellSelectableclass",
          "o-dpck__month__cell--selectable",
          null,
          isDateSelectable(day) && !datepicker.value.disabled
        ],
        [
          "monthCellUnselectableClass",
          "o-dpck__month__cell--unselectable",
          null,
          !isDateSelectable(day) || datepicker.value.disabled
        ]
      );
      return [...monthCellClasses.value, ...classes.value];
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(unref(monthClasses))
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(monthBodyClasses))
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(monthTableClasses))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(monthDates.value, (date, idx) => {
              return openBlock(), createElementBlock(Fragment, { key: idx }, [
                !datepicker.value.disabled && isDateSelectable(date) ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  ref_for: true,
                  ref: (el) => setMonthRef(date, el),
                  class: normalizeClass(cellClasses(date)),
                  role: "button",
                  disabled: datepicker.value.disabled,
                  tabindex: __props.focusedDate.month === date.getMonth() ? null : 0,
                  onClick: withModifiers(($event) => selectDate(date), ["prevent"]),
                  onMouseenter: ($event) => onRangeHoverEndDate(date),
                  onFocus: ($event) => onRangeHoverEndDate(date),
                  onKeydown: withModifiers(($event) => onKeydown($event, date), ["prevent"])
                }, [
                  createTextVNode(toDisplayString(__props.monthNames[date.getMonth()]) + " ", 1),
                  eventsDateMatch(date).length ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(eventsDateMatch(date), (event, index) => {
                      return openBlock(), createElementBlock("div", {
                        key: index,
                        class: normalizeClass(["event", event.type])
                      }, null, 2);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ], 42, _hoisted_1$1)) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(cellClasses(date))
                }, toDisplayString(__props.monthNames[date.getMonth()]), 3))
              ], 64);
            }), 128))
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
const _hoisted_1 = ["value", "disabled"];
const _hoisted_2 = ["value"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    isOruga: true,
    name: "ODatepicker",
    configField: "datepicker"
  },
  __name: "Datepicker",
  props: /* @__PURE__ */ mergeModels({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: {
      type: [Date, Array],
      default: void 0
    },
    /** The active state of the dropdown, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: false },
    /**
     * Define picker mode
     * @values date, month
     */
    type: {
      type: String,
      default: "date",
      validator: (value) => ["month", "date"].indexOf(value) >= 0
    },
    /** Set custom day names, else use names based on locale */
    dayNames: {
      type: Array,
      default: () => getOption("datepicker.dayNames", void 0)
    },
    /** Set custom month names, else use names based on locale */
    monthNames: {
      type: Array,
      default: () => getOption("datepicker.monthNames", void 0)
    },
    /**
     * Size of the control input
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => getOption("datepicker.size")
    },
    /** Set default date to focus on */
    focusedDate: { type: Date, default: void 0 },
    /** Events to display on picker */
    events: { type: Array, default: void 0 },
    /** Event indicators for style class definiton */
    indicators: { type: String, default: "dots" },
    /** Min date to select */
    minDate: { type: Date, default: void 0 },
    /** Max date to select */
    maxDate: { type: Date, default: void 0 },
    /** Enable date range selection */
    range: { type: Boolean, default: false },
    /** Makes input full width when inside a grouped or addon field */
    expanded: { type: Boolean, default: false },
    /** Makes the input rounded */
    rounded: { type: Boolean, default: false },
    /** Display datepicker inline */
    inline: { type: Boolean, default: false },
    /** Input placeholder */
    placeholder: { type: String, default: void 0 },
    /** Same as native input readonly */
    readonly: { type: Boolean, default: true },
    /** Same as native, also push new item to v-model instead of replacing */
    multiple: { type: Boolean, default: false },
    /** Same as native disabled */
    disabled: { type: Boolean, default: false },
    /** Open dropdown on focus */
    openOnFocus: {
      type: Boolean,
      default: () => getOption("datepicker.openOnFocus", true)
    },
    /** Close dropdown on click */
    closeOnClick: {
      type: Boolean,
      default: () => getOption("datepicker.closeOnClick", true)
    },
    /** Date format locale */
    locale: {
      type: String,
      default: () => getOption("locale")
    },
    /** Custom function to format a date into a string */
    dateFormatter: {
      type: Function,
      default: (date, defaultFunction) => getOption("datepicker.dateFormatter", defaultFunction)(date)
    },
    /** Custom function to parse a string into a date */
    dateParser: {
      type: Function,
      default: (date, defaultFunction) => getOption("datepicker.dateParser", defaultFunction)(date)
    },
    /** Date creator function, default is `new Date()` */
    dateCreator: {
      type: Function,
      default: () => getOption("datepicker.dateCreator", () => /* @__PURE__ */ new Date())()
    },
    /** Define a list of dates which can be selected */
    selectableDates: {
      type: [Array, Function],
      default: () => []
    },
    /** Define a list of dates which can not be selected */
    unselectableDates: {
      type: [Array, Function],
      default: () => []
    },
    /** Define a list of weeks which can not be selected */
    unselectableDaysOfWeek: {
      type: Array,
      default: () => getOption("datepicker.unselectableDaysOfWeek", void 0)
    },
    /** Show nearby month days */
    nearbyMonthDays: {
      type: Boolean,
      default: () => getOption("datepicker.nearbyMonthDays", true)
    },
    /** Define if nearby month days can be selected */
    nearbySelectableMonthDays: {
      type: Boolean,
      default: () => getOption("datepicker.nearbySelectableMonthDays", false)
    },
    /** Show weeek numbers */
    showWeekNumber: {
      type: Boolean,
      default: () => getOption("datepicker.showWeekNumber", false)
    },
    /** Define if weeek numbers are clickable */
    weekNumberClickable: {
      type: Boolean,
      default: () => getOption("datepicker.weekNumberClickable", false)
    },
    /** Set the first day of a week */
    firstDayOfWeek: {
      type: Number,
      default: () => getOption("datepicker.firstDayOfWeek", 0)
    },
    /** Rules for the first week : 1 for the 1st January, 4 for the 4th January */
    rulesForFirstWeek: { type: Number, default: () => 4 },
    /** Define the range of years to show */
    yearsRange: {
      type: Array,
      default: () => getOption("datepicker.yearsRange", [-100, 10])
    },
    /** Trap dropdown on focus */
    trapFocus: {
      type: Boolean,
      default: () => getOption("datepicker.trapFocus", true)
    },
    /** Position of the dropdown relative to the input */
    position: { type: String, default: void 0 },
    /** Enable dropdown mobile modal */
    mobileModal: {
      type: Boolean,
      default: () => getOption("datepicker.mobileModal", true)
    },
    /** Enable mobile native input if mobile agent */
    mobileNative: {
      type: Boolean,
      default: () => getOption("datepicker.mobileNative", true)
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => getOption("datepicker.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => getOption("datepicker.icon", void 0)
    },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => getOption("datepicker.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: false },
    /** Icon name for previous icon */
    iconPrev: {
      type: String,
      default: () => getOption("datepicker.iconPrev", "chevron-left")
    },
    /** Icon name for next icon */
    iconNext: {
      type: String,
      default: () => getOption("datepicker.iconNext", "chevron-right")
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => getOption("datepicker.mobileBreakpoint")
    },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => getOption("datepicker.teleport", false)
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => getOption("useHtml5Validation", true)
    },
    /** The message which is shown when a validation error occurs */
    validationMessage: { type: String, default: void 0 },
    /** Accessibility next button aria label */
    ariaNextLabel: {
      type: String,
      default: () => getOption("datepicker.ariaNextLabel", "Next Page")
    },
    /** Accessibility previous button aria label  */
    ariaPreviousLabel: {
      type: String,
      default: () => getOption("datepicker.ariaNextLabel", "Previous Page")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker box where you choose the date */
    boxClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker header inside the box */
    headerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker buttons inside the box */
    headerButtonsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker buttons inside the box when a size is choosen */
    headerButtonsSizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the prev button inside the Datepicker box */
    prevButtonClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the next button inside the Datepicker box */
    nextButtonClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the month and year selects container inside the Datepicker box */
    listsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker footer */
    footerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker table inside the box */
    tableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of Datepicker header with days of the week inside the table */
    tableHeadClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the cell inside the table header */
    tableHeadCellClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table body inside the box */
    tableBodyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table row */
    tableRowClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell */
    tableCellClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell when nearby month days are hidden */
    tableCellInvisibleClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of table cell when it's selected */
    tableCellSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the first selected table cell when in range */
    tableCellFirstSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cells within the range when the range is selected */
    tableCellWithinSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the last selected table cell during range selection */
    tableCellLastSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the first hovered table cell during range selection */
    tableCellFirstHoveredClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell when hovered during range selection */
    tableCellWithinHoveredClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the last table cell hovered during range selection */
    tableCellLastHoveredClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell of the current day */
    tableCellTodayClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell that is selectable */
    tableCellSelectableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell that is unselectable */
    tableCellUnselectableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell when nearby days (prev/next month) are selectable */
    tableCellNearbyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the cell of a row when at least one event is present */
    tableCellEventsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the events container */
    tableEventsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the event */
    tableEventClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the event indicator when a `variant` is specified */
    tableEventVariantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the event indicator */
    tableEventIndicatorsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker table inside the box when type is month */
    monthClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table body inside the box when type is month */
    monthBodyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table container when type is month */
    monthTableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell when type is month */
    monthCellClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of table cell when it's selected when type is month */
    monthCellSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the first selected table cell when in range when type is month */
    monthCellFirstSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cells within the range when the range is selected when type is month */
    monthCellWithinSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the last selected table cell during range selection when type is month */
    monthCellLastSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the first hovered table cell during range selection when type is month */
    monthCellWithinHoveredRangeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell when hovered during range selection when type is month */
    monthCellFirstHoveredClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell when hovered during range selection and cell is in range when type is month */
    monthCellWithinHoveredClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the last table cell hovered during range selection when type is month */
    monthCellLastHoveredClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell of the current day when type is month */
    monthCellTodayClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell that is selectable when type is month */
    monthCellSelectableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell that is unselectable when type is month */
    monthCellUnselectableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /**Class of the events container when type is month */
    monthCellEventsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /**
     * Class configuration for the internal input component
     * @ignore
     */
    inputClasses: {
      type: Object,
      default: () => getOption("datepicker.inputClasses", {})
    },
    /**
     * Class configuration for the internal dropdown component
     * @ignore
     */
    dropdownClasses: {
      type: Object,
      default: () => getOption(
        "datepicker.dropdownClasses",
        {}
      )
    },
    /**
     * Class configuration for the internal select component
     * @ignore
     */
    selectClasses: {
      type: Object,
      default: () => getOption("datepicker.selectClasses", {})
    }
  }, {
    "modelValue": {},
    "modelModifiers": {},
    "active": { type: Boolean },
    "activeModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "update:active", "range-start", "range-end", "change-month", "change-year", "focus", "blur", "invalid", "icon-click", "icon-right-click"], ["update:modelValue", "update:active"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { defaultDateFormatter, defaultDateParser } = useDatepickerMixins(props);
    const { isMobile } = useMatchMedia(props.mobileBreakpoint);
    const pickerRef = ref();
    const vmodel = useModel(__props, "modelValue");
    const isActive = useModel(__props, "active");
    const formattedValue = computed(
      () => Array.isArray(vmodel.value) ? props.dateFormatter([...vmodel.value], defaultDateFormatter) : props.dateFormatter(vmodel.value, defaultDateFormatter)
    );
    const isTypeMonth = computed(() => props.type === "month");
    watch(
      () => props.modelValue,
      (value) => {
        if (vmodel.value !== value) {
          const isArray = Array.isArray(value);
          const currentDate = isArray ? !value.length ? props.dateCreator() : value[value.length - 1] : !value ? props.dateCreator() : value;
          if (!isArray || isArray && Array.isArray(vmodel.value) && value.length > vmodel.value.length) {
            focusedDateData.value = {
              day: currentDate.getDate(),
              month: currentDate.getMonth(),
              year: currentDate.getFullYear()
            };
          }
        }
      }
    );
    watch(
      () => props.focusedDate,
      (value) => {
        if (value) {
          focusedDateData.value = {
            day: value.getDate(),
            month: value.getMonth(),
            year: value.getFullYear()
          };
        }
      }
    );
    const _initialDate = (Array.isArray(props.modelValue) ? props.modelValue[0] : props.modelValue) || props.focusedDate || props.dateCreator();
    if (!props.modelValue && props.maxDate && props.maxDate.getFullYear() < _initialDate.getFullYear()) {
      _initialDate.setFullYear(props.maxDate.getFullYear());
    }
    const focusedDateData = ref({
      day: _initialDate.getDate(),
      month: _initialDate.getMonth(),
      year: _initialDate.getFullYear()
    });
    watch(
      () => focusedDateData.value.month,
      (value) => emits("change-month", value)
    );
    watch(
      () => focusedDateData.value.year,
      (value) => emits("change-year", value)
    );
    const computedMonthNames = computed(
      () => Array.isArray(props.monthNames) ? props.monthNames : getMonthNames(props.locale)
    );
    const listOfMonths = computed(() => {
      let minMonth = 0;
      let maxMonth = 12;
      if (props.minDate && focusedDateData.value.year === props.minDate.getFullYear()) {
        minMonth = props.minDate.getMonth();
      }
      if (props.maxDate && focusedDateData.value.year === props.maxDate.getFullYear()) {
        maxMonth = props.maxDate.getMonth();
      }
      return computedMonthNames.value.map((name, index) => ({
        name,
        index,
        disabled: index < minMonth || index > maxMonth
      }));
    });
    const computedDayNames = computed(() => {
      if (Array.isArray(props.dayNames))
        return props.dayNames;
      return getWeekdayNames(props.locale);
    });
    const listOfYears = computed(() => {
      let latestYear = focusedDateData.value.year + props.yearsRange[1];
      if (props.maxDate && props.maxDate.getFullYear() < latestYear) {
        latestYear = Math.max(
          props.maxDate.getFullYear(),
          focusedDateData.value.year
        );
      }
      let earliestYear = focusedDateData.value.year + props.yearsRange[0];
      if (props.minDate && props.minDate.getFullYear() > earliestYear) {
        earliestYear = Math.min(
          props.minDate.getFullYear(),
          focusedDateData.value.year
        );
      }
      return Array.from(
        { length: latestYear - earliestYear + 1 || 1 },
        (value, index) => earliestYear + index
      ).reverse();
    });
    const showPrev = computed(() => {
      if (!props.minDate)
        return true;
      if (isTypeMonth.value)
        return focusedDateData.value.year > props.minDate.getFullYear();
      const dateToCheck = new Date(
        focusedDateData.value.year,
        focusedDateData.value.month
      );
      const date = new Date(
        props.minDate.getFullYear(),
        props.minDate.getMonth()
      );
      return dateToCheck > date;
    });
    function prev() {
      if (props.disabled)
        return;
      if (isTypeMonth.value) {
        focusedDateData.value.year -= 1;
      } else {
        if (focusedDateData.value.month > 0) {
          focusedDateData.value.month -= 1;
        } else {
          focusedDateData.value.month = 11;
          focusedDateData.value.year -= 1;
        }
      }
    }
    const showNext = computed(() => {
      if (!props.maxDate)
        return true;
      if (isTypeMonth.value)
        return focusedDateData.value.year < props.maxDate.getFullYear();
      const dateToCheck = new Date(
        focusedDateData.value.year,
        focusedDateData.value.month
      );
      const date = new Date(
        props.maxDate.getFullYear(),
        props.maxDate.getMonth()
      );
      return dateToCheck < date;
    });
    function next() {
      if (props.disabled)
        return;
      if (isTypeMonth.value) {
        focusedDateData.value.year += 1;
      } else {
        if (focusedDateData.value.month < 11) {
          focusedDateData.value.month += 1;
        } else {
          focusedDateData.value.month = 0;
          focusedDateData.value.year += 1;
        }
      }
    }
    function formatNative(value) {
      if (Array.isArray(value))
        value = value[0];
      if (!value)
        return "";
      const date = new Date(value);
      if (isTypeMonth.value) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return year + "-" + ((month < 10 ? "0" : "") + month);
      } else {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return year + "-" + ((month < 10 ? "0" : "") + month) + "-" + ((day < 10 ? "0" : "") + day);
      }
    }
    function onChange(value) {
      const date = props.dateParser(value, defaultDateParser);
      if (date && Array.isArray(date) && date.length === 2 && !isNaN(date[0]) && !isNaN(date[1])) {
        vmodel.value = date;
      } else {
        vmodel.value = null;
      }
    }
    function onChangeNativePicker(value) {
      const s = value ? value.split("-") : [];
      if (s.length === 3) {
        const year = parseInt(s[0], 10);
        const month = parseInt(s[1]) - 1;
        const day = parseInt(s[2]);
        vmodel.value = new Date(year, month, day);
      } else {
        vmodel.value = null;
      }
    }
    const rootClasses = defineClasses(
      ["rootClass", "o-dpck"],
      [
        "sizeClass",
        "o-dpck--",
        computed(() => props.size),
        computed(() => !!props.size)
      ],
      ["mobileClass", "o-dpck--mobile", null, isMobile],
      ["expandedClass", "o-dpck--expanded", null, computed(() => props.expanded)]
    );
    const headerClasses = defineClasses(["headerClass", "o-dpck__header"]);
    const headerButtonsClasses = defineClasses(
      ["headerButtonsClass", "o-dpck__header__buttons"],
      [
        "headerButtonsSizeClass",
        "o-dpck__header__buttons--",
        computed(() => props.size),
        computed(() => !!props.size)
      ]
    );
    const prevButtonClasses = defineClasses([
      "prevButtonClass",
      "o-dpck__header__previous"
    ]);
    const nextButtonClasses = defineClasses([
      "nextButtonClass",
      "o-dpck__header__next"
    ]);
    const listsClasses = defineClasses(["listsClass", "o-dpck__header__list"]);
    const footerClasses = defineClasses(["footerClass", "o-dpck__footer"]);
    const dropdownClass = defineClasses([
      "dropdownClasses.rootClass",
      "o-tpck__dropdown"
    ]);
    const boxClasses = defineClasses(["boxClass", "o-dpck__box"]);
    const boxClassBind = computed(() => getActiveClasses(boxClasses.value));
    __expose({ focus: () => {
      var _a;
      return (_a = pickerRef.value) == null ? void 0 : _a.focus();
    } });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$4, {
        ref_key: "pickerRef",
        ref: pickerRef,
        active: isActive.value,
        "onUpdate:active": _cache[10] || (_cache[10] = ($event) => isActive.value = $event),
        "data-oruga": "datepicker",
        value: vmodel.value,
        "picker-props": props,
        "formatted-value": formattedValue.value,
        "native-type": !isTypeMonth.value ? "date" : "month",
        "native-value": formatNative(vmodel.value),
        "native-max": formatNative(__props.maxDate),
        "native-min": formatNative(__props.minDate),
        "stay-open": __props.multiple,
        "dropdown-classes": unref(dropdownClass),
        "root-classes": unref(rootClasses),
        "box-class": boxClassBind.value,
        onChange,
        onNativeChange: onChangeNativePicker,
        onFocus: _cache[11] || (_cache[11] = ($event) => _ctx.$emit("focus", $event)),
        onBlur: _cache[12] || (_cache[12] = ($event) => _ctx.$emit("blur", $event)),
        onInvalid: _cache[13] || (_cache[13] = ($event) => _ctx.$emit("invalid", $event)),
        onIconClick: _cache[14] || (_cache[14] = ($event) => _ctx.$emit("icon-click", $event)),
        onIconRightClick: _cache[15] || (_cache[15] = ($event) => _ctx.$emit("icon-right-click", $event))
      }, createSlots({
        default: withCtx(() => [
          createElementVNode("header", {
            class: normalizeClass(unref(headerClasses))
          }, [
            renderSlot(_ctx.$slots, "header", {}, () => [
              createElementVNode("div", {
                class: normalizeClass(unref(headerButtonsClasses))
              }, [
                !__props.disabled ? (openBlock(), createBlock(_sfc_main$5, {
                  key: 0,
                  class: normalizeClass(unref(prevButtonClasses)),
                  disabled: !showPrev.value,
                  "aria-label": __props.ariaPreviousLabel,
                  "icon-pack": __props.iconPack,
                  "icon-left": __props.iconPrev,
                  outlined: "",
                  onClick: withModifiers(prev, ["prevent"]),
                  onKeydown: [
                    withKeys(withModifiers(prev, ["prevent"]), ["enter"]),
                    withKeys(withModifiers(prev, ["prevent"]), ["space"])
                  ]
                }, null, 8, ["class", "disabled", "aria-label", "icon-pack", "icon-left", "onKeydown"])) : createCommentVNode("", true),
                !__props.disabled ? (openBlock(), createBlock(_sfc_main$5, {
                  key: 1,
                  class: normalizeClass(unref(nextButtonClasses)),
                  disabled: !showNext.value,
                  "aria-label": __props.ariaNextLabel,
                  "icon-pack": __props.iconPack,
                  "icon-left": __props.iconNext,
                  outlined: "",
                  onClick: withModifiers(next, ["prevent"]),
                  onKeydown: [
                    withKeys(withModifiers(next, ["prevent"]), ["enter"]),
                    withKeys(withModifiers(next, ["prevent"]), ["space"])
                  ]
                }, null, 8, ["class", "disabled", "aria-label", "icon-pack", "icon-left", "onKeydown"])) : createCommentVNode("", true),
                createElementVNode("div", {
                  class: normalizeClass(unref(listsClasses))
                }, [
                  !isTypeMonth.value ? (openBlock(), createBlock(_sfc_main$6, mergeProps({
                    key: 0,
                    modelValue: focusedDateData.value.month,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => focusedDateData.value.month = $event),
                    disabled: __props.disabled,
                    size: __props.size
                  }, __props.selectClasses), {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(listOfMonths.value, (month) => {
                        return openBlock(), createElementBlock("option", {
                          key: month.name,
                          value: month.index,
                          disabled: month.disabled
                        }, toDisplayString(month.name), 9, _hoisted_1);
                      }), 128))
                    ]),
                    _: 1
                  }, 16, ["modelValue", "disabled", "size"])) : createCommentVNode("", true),
                  createVNode(_sfc_main$6, mergeProps({
                    modelValue: focusedDateData.value.year,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => focusedDateData.value.year = $event),
                    disabled: __props.disabled,
                    size: __props.size
                  }, __props.selectClasses), {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(listOfYears.value, (year) => {
                        return openBlock(), createElementBlock("option", {
                          key: year,
                          value: year
                        }, toDisplayString(year), 9, _hoisted_2);
                      }), 128))
                    ]),
                    _: 1
                  }, 16, ["modelValue", "disabled", "size"])
                ], 2)
              ], 2)
            ])
          ], 2),
          renderSlot(_ctx.$slots, "body", {}, () => [
            isTypeMonth.value ? (openBlock(), createBlock(_sfc_main$1, {
              key: 0,
              modelValue: vmodel.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vmodel.value = $event),
              "focused-date": focusedDateData.value,
              "onUpdate:focusedDate": _cache[3] || (_cache[3] = ($event) => focusedDateData.value = $event),
              "month-names": computedMonthNames.value,
              "picker-props": props,
              onRangeStart: _cache[4] || (_cache[4] = (date) => _ctx.$emit("range-start", date)),
              onRangeEnd: _cache[5] || (_cache[5] = (date) => _ctx.$emit("range-end", date))
            }, null, 8, ["modelValue", "focused-date", "month-names", "picker-props"])) : (openBlock(), createBlock(_sfc_main$2, {
              key: 1,
              modelValue: vmodel.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => vmodel.value = $event),
              "focused-date": focusedDateData.value,
              "onUpdate:focusedDate": _cache[7] || (_cache[7] = ($event) => focusedDateData.value = $event),
              "day-names": computedDayNames.value,
              "month-names": computedMonthNames.value,
              "picker-props": props,
              onRangeStart: _cache[8] || (_cache[8] = (date) => _ctx.$emit("range-start", date)),
              onRangeEnd: _cache[9] || (_cache[9] = (date) => _ctx.$emit("range-end", date))
            }, null, 8, ["modelValue", "focused-date", "day-names", "month-names", "picker-props"]))
          ]),
          _ctx.$slots.footer ? (openBlock(), createElementBlock("footer", {
            key: 0,
            class: normalizeClass(unref(footerClasses))
          }, [
            renderSlot(_ctx.$slots, "footer")
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
      ]), 1032, ["active", "value", "picker-props", "formatted-value", "native-type", "native-value", "native-max", "native-min", "stay-open", "dropdown-classes", "root-classes", "box-class"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Datepicker.vue_vue_type_script_setup_true_lang-DjoFZoIQ.mjs.map
