/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import index from "./autocomplete.mjs";
import index$1 from "./button.mjs";
import index$2 from "./carousel.mjs";
import { OCarousel, OCarouselItem } from "./carousel.mjs";
import index$3 from "./checkbox.mjs";
import index$4 from "./collapse.mjs";
import { OCollapse } from "./collapse.mjs";
import index$5 from "./datepicker.mjs";
import index$6 from "./datetimepicker.mjs";
import { ODatetimepicker } from "./datetimepicker.mjs";
import index$7 from "./dropdown.mjs";
import index$8 from "./field.mjs";
import index$9 from "./icon.mjs";
import index$a from "./input.mjs";
import index$b from "./loading.mjs";
import { LoadingProgrammatic } from "./loading.mjs";
import index$c from "./menu.mjs";
import { OMenu, OMenuItem } from "./menu.mjs";
import index$d from "./modal.mjs";
import { ModalProgrammatic, OModal } from "./modal.mjs";
import index$e from "./notification.mjs";
import { NotificationProgrammatic, ONotification } from "./notification.mjs";
import index$f from "./pagination.mjs";
import index$g from "./radio.mjs";
import { ORadio } from "./radio.mjs";
import index$h from "./select.mjs";
import index$j from "./skeleton.mjs";
import { OSkeleton } from "./skeleton.mjs";
import index$i from "./sidebar.mjs";
import { OSidebar, SidebarProgrammatic } from "./sidebar.mjs";
import index$k from "./slider.mjs";
import { OSlider, OSliderTick } from "./slider.mjs";
import index$l from "./steps.mjs";
import { OStepItem, OSteps } from "./steps.mjs";
import index$m from "./switch.mjs";
import { OSwitch } from "./switch.mjs";
import index$n from "./table.mjs";
import { OTable, OTableColumn } from "./table.mjs";
import index$o from "./tabs.mjs";
import { OTabItem, OTabs } from "./tabs.mjs";
import index$p from "./taginput.mjs";
import { OTaginput } from "./taginput.mjs";
import index$q from "./timepicker.mjs";
import index$r from "./tooltip.mjs";
import index$s from "./upload.mjs";
import { OUpload } from "./upload.mjs";
import { O as OrugaConfig, r as registerPlugin, a as registerComponentProgrammatic, C as ConfigProgrammatic } from "./config-zKhnAIV0.mjs";
import { u } from "./config-zKhnAIV0.mjs";
import { _ } from "./Autocomplete.vue_vue_type_script_setup_true_lang-yBJqm2bq.mjs";
import { _ as _2 } from "./Button.vue_vue_type_script_setup_true_lang-D7iwVqb3.mjs";
import { _ as _3 } from "./Checkbox.vue_vue_type_script_setup_true_lang-BinxQJLz.mjs";
import { _ as _4 } from "./Datepicker.vue_vue_type_script_setup_true_lang-DjoFZoIQ.mjs";
import { _ as _5 } from "./Field.vue_vue_type_script_setup_true_lang-Zwwy0kfN.mjs";
import { _ as _6 } from "./Loading.vue_vue_type_script_setup_true_lang-tMXeR7UA.mjs";
import { _ as _7 } from "./Pagination.vue_vue_type_script_setup_true_lang-BT7MLogp.mjs";
import { _ as _8, a } from "./DropdownItem.vue_vue_type_script_setup_true_lang-BYhM_Anu.mjs";
import { _ as _9 } from "./Icon.vue_vue_type_script_setup_true_lang-BfJM6xYp.mjs";
import { _ as _10 } from "./Input.vue_vue_type_script_setup_true_lang-Cne1qVCn.mjs";
import { _ as _11 } from "./Select.vue_vue_type_script_setup_true_lang-sENSiXta.mjs";
import { _ as _12 } from "./Timepicker.vue_vue_type_script_setup_true_lang-BBG_Q_e1.mjs";
import { _ as _13 } from "./Tooltip.vue_vue_type_script_setup_true_lang-Bw2K4plP.mjs";
const plugins = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Autocomplete: index,
  Button: index$1,
  Carousel: index$2,
  Checkbox: index$3,
  Collapse: index$4,
  Datepicker: index$5,
  Datetimepicker: index$6,
  Dropdown: index$7,
  Field: index$8,
  Icon: index$9,
  Input: index$a,
  Loading: index$b,
  Menu: index$c,
  Modal: index$d,
  Notification: index$e,
  Pagination: index$f,
  Radio: index$g,
  Select: index$h,
  Sidebar: index$i,
  Skeleton: index$j,
  Slider: index$k,
  Steps: index$l,
  Switch: index$m,
  Table: index$n,
  Tabs: index$o,
  Taginput: index$p,
  Timepicker: index$q,
  Tooltip: index$r,
  Upload: index$s
}, Symbol.toStringTag, { value: "Module" }));
const plugin = {
  install(app, options = {}) {
    app.use(OrugaConfig, options);
    for (const componentKey in plugins) {
      registerPlugin(app, plugins[componentKey]);
    }
    registerComponentProgrammatic(app, "config", ConfigProgrammatic);
  }
};
export {
  index as Autocomplete,
  index$1 as Button,
  index$2 as Carousel,
  index$3 as Checkbox,
  index$4 as Collapse,
  OrugaConfig as ConfigPlugin,
  ConfigProgrammatic,
  index$5 as Datepicker,
  index$6 as Datetimepicker,
  index$7 as Dropdown,
  index$8 as Field,
  index$9 as Icon,
  index$a as Input,
  index$b as Loading,
  LoadingProgrammatic,
  index$c as Menu,
  index$d as Modal,
  ModalProgrammatic,
  index$e as Notification,
  NotificationProgrammatic,
  _ as OAutocomplete,
  _2 as OButton,
  OCarousel,
  OCarouselItem,
  _3 as OCheckbox,
  OCollapse,
  _4 as ODatepicker,
  ODatetimepicker,
  _8 as ODropdown,
  a as ODropdownItem,
  _5 as OField,
  _9 as OIcon,
  _10 as OInput,
  _6 as OLoading,
  OMenu,
  OMenuItem,
  OModal,
  ONotification,
  _7 as OPagination,
  ORadio,
  _11 as OSelect,
  OSidebar,
  OSkeleton,
  OSlider,
  OSliderTick,
  OStepItem,
  OSteps,
  OSwitch,
  OTabItem,
  OTable,
  OTableColumn,
  OTabs,
  OTaginput,
  _12 as OTimepicker,
  _13 as OTooltip,
  OUpload,
  plugin as Oruga,
  OrugaConfig,
  index$f as Pagination,
  index$g as Radio,
  index$h as Select,
  index$i as Sidebar,
  SidebarProgrammatic,
  index$j as Skeleton,
  index$k as Slider,
  index$l as Steps,
  index$m as Switch,
  index$n as Table,
  index$o as Tabs,
  index$p as Taginput,
  index$q as Timepicker,
  index$r as Tooltip,
  index$s as Upload,
  plugin as default,
  u as useOruga
};
//# sourceMappingURL=index.mjs.map
