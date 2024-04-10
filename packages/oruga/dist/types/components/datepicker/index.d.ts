import type { Plugin } from "vue";
import Datepicker from "./Datepicker.vue";
/** export datepicker specific types */
export type { DatepickerEvent, FocusedDate } from "./types";
/** export datepicker plugin */
declare const _default: Plugin;
export default _default;
/** export datepicker components */
export { Datepicker as ODatepicker };
