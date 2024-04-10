"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const autocomplete = require("./autocomplete.cjs");
const button = require("./button.cjs");
const carousel = require("./carousel.cjs");
const checkbox = require("./checkbox.cjs");
const collapse = require("./collapse.cjs");
const datepicker = require("./datepicker.cjs");
const datetimepicker = require("./datetimepicker.cjs");
const dropdown = require("./dropdown.cjs");
const field = require("./field.cjs");
const icon = require("./icon.cjs");
const input = require("./input.cjs");
const loading = require("./loading.cjs");
const menu = require("./menu.cjs");
const modal = require("./modal.cjs");
const notification = require("./notification.cjs");
const pagination = require("./pagination.cjs");
const radio = require("./radio.cjs");
const select = require("./select.cjs");
const skeleton = require("./skeleton.cjs");
const sidebar = require("./sidebar.cjs");
const slider = require("./slider.cjs");
const steps = require("./steps.cjs");
const _switch = require("./switch.cjs");
const table = require("./table.cjs");
const tabs = require("./tabs.cjs");
const taginput = require("./taginput.cjs");
const timepicker = require("./timepicker.cjs");
const tooltip = require("./tooltip.cjs");
const upload = require("./upload.cjs");
const config = require("./config-JkCO4AEi.cjs");
const Autocomplete_vue_vue_type_script_setup_true_lang = require("./Autocomplete.vue_vue_type_script_setup_true_lang-CAyT8Fls.cjs");
const Button_vue_vue_type_script_setup_true_lang = require("./Button.vue_vue_type_script_setup_true_lang-VSBsF4Wj.cjs");
const Checkbox_vue_vue_type_script_setup_true_lang = require("./Checkbox.vue_vue_type_script_setup_true_lang-Bu1Gdyv6.cjs");
const Datepicker_vue_vue_type_script_setup_true_lang = require("./Datepicker.vue_vue_type_script_setup_true_lang-BV46XGIX.cjs");
const Field_vue_vue_type_script_setup_true_lang = require("./Field.vue_vue_type_script_setup_true_lang-BwJT5C6k.cjs");
const Loading_vue_vue_type_script_setup_true_lang = require("./Loading.vue_vue_type_script_setup_true_lang-CBsJmoJ6.cjs");
const Pagination_vue_vue_type_script_setup_true_lang = require("./Pagination.vue_vue_type_script_setup_true_lang-C63iYxK5.cjs");
const DropdownItem_vue_vue_type_script_setup_true_lang = require("./DropdownItem.vue_vue_type_script_setup_true_lang-Dpy9L2Ey.cjs");
const Icon_vue_vue_type_script_setup_true_lang = require("./Icon.vue_vue_type_script_setup_true_lang-CGDJNR6y.cjs");
const Input_vue_vue_type_script_setup_true_lang = require("./Input.vue_vue_type_script_setup_true_lang-CWmlmVsP.cjs");
const Select_vue_vue_type_script_setup_true_lang = require("./Select.vue_vue_type_script_setup_true_lang-CepSUurg.cjs");
const Timepicker_vue_vue_type_script_setup_true_lang = require("./Timepicker.vue_vue_type_script_setup_true_lang-De78V57H.cjs");
const Tooltip_vue_vue_type_script_setup_true_lang = require("./Tooltip.vue_vue_type_script_setup_true_lang-BY53t3kF.cjs");
const plugins = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Autocomplete: autocomplete.default,
  Button: button.default,
  Carousel: carousel.default,
  Checkbox: checkbox.default,
  Collapse: collapse.default,
  Datepicker: datepicker.default,
  Datetimepicker: datetimepicker.default,
  Dropdown: dropdown.default,
  Field: field.default,
  Icon: icon.default,
  Input: input.default,
  Loading: loading.default,
  Menu: menu.default,
  Modal: modal.default,
  Notification: notification.default,
  Pagination: pagination.default,
  Radio: radio.default,
  Select: select.default,
  Sidebar: sidebar.default,
  Skeleton: skeleton.default,
  Slider: slider.default,
  Steps: steps.default,
  Switch: _switch.default,
  Table: table.default,
  Tabs: tabs.default,
  Taginput: taginput.default,
  Timepicker: timepicker.default,
  Tooltip: tooltip.default,
  Upload: upload.default
}, Symbol.toStringTag, { value: "Module" }));
const plugin = {
  install(app, options = {}) {
    app.use(config.OrugaConfig, options);
    for (const componentKey in plugins) {
      config.registerPlugin(app, plugins[componentKey]);
    }
    config.registerComponentProgrammatic(app, "config", config.ConfigProgrammatic);
  }
};
exports.Autocomplete = autocomplete.default;
exports.Button = button.default;
exports.Carousel = carousel.default;
exports.OCarousel = carousel.OCarousel;
exports.OCarouselItem = carousel.OCarouselItem;
exports.Checkbox = checkbox.default;
exports.Collapse = collapse.default;
exports.OCollapse = collapse.OCollapse;
exports.Datepicker = datepicker.default;
exports.Datetimepicker = datetimepicker.default;
exports.ODatetimepicker = datetimepicker.ODatetimepicker;
exports.Dropdown = dropdown.default;
exports.Field = field.default;
exports.Icon = icon.default;
exports.Input = input.default;
exports.Loading = loading.default;
exports.LoadingProgrammatic = loading.LoadingProgrammatic;
exports.Menu = menu.default;
exports.OMenu = menu.OMenu;
exports.OMenuItem = menu.OMenuItem;
exports.Modal = modal.default;
exports.ModalProgrammatic = modal.ModalProgrammatic;
exports.OModal = modal.OModal;
exports.Notification = notification.default;
exports.NotificationProgrammatic = notification.NotificationProgrammatic;
exports.ONotification = notification.ONotification;
exports.Pagination = pagination.default;
exports.ORadio = radio.ORadio;
exports.Radio = radio.default;
exports.Select = select.default;
exports.OSkeleton = skeleton.OSkeleton;
exports.Skeleton = skeleton.default;
exports.OSidebar = sidebar.OSidebar;
exports.Sidebar = sidebar.default;
exports.SidebarProgrammatic = sidebar.SidebarProgrammatic;
exports.OSlider = slider.OSlider;
exports.OSliderTick = slider.OSliderTick;
exports.Slider = slider.default;
exports.OStepItem = steps.OStepItem;
exports.OSteps = steps.OSteps;
exports.Steps = steps.default;
exports.OSwitch = _switch.OSwitch;
exports.Switch = _switch.default;
exports.OTable = table.OTable;
exports.OTableColumn = table.OTableColumn;
exports.Table = table.default;
exports.OTabItem = tabs.OTabItem;
exports.OTabs = tabs.OTabs;
exports.Tabs = tabs.default;
exports.OTaginput = taginput.OTaginput;
exports.Taginput = taginput.default;
exports.Timepicker = timepicker.default;
exports.Tooltip = tooltip.default;
exports.OUpload = upload.OUpload;
exports.Upload = upload.default;
exports.ConfigPlugin = config.OrugaConfig;
exports.ConfigProgrammatic = config.ConfigProgrammatic;
exports.OrugaConfig = config.OrugaConfig;
exports.useOruga = config.useOruga;
exports.OAutocomplete = Autocomplete_vue_vue_type_script_setup_true_lang._sfc_main;
exports.OButton = Button_vue_vue_type_script_setup_true_lang._sfc_main;
exports.OCheckbox = Checkbox_vue_vue_type_script_setup_true_lang._sfc_main;
exports.ODatepicker = Datepicker_vue_vue_type_script_setup_true_lang._sfc_main;
exports.OField = Field_vue_vue_type_script_setup_true_lang._sfc_main;
exports.OLoading = Loading_vue_vue_type_script_setup_true_lang._sfc_main;
exports.OPagination = Pagination_vue_vue_type_script_setup_true_lang._sfc_main;
exports.ODropdown = DropdownItem_vue_vue_type_script_setup_true_lang._sfc_main;
exports.ODropdownItem = DropdownItem_vue_vue_type_script_setup_true_lang._sfc_main$1;
exports.OIcon = Icon_vue_vue_type_script_setup_true_lang._sfc_main;
exports.OInput = Input_vue_vue_type_script_setup_true_lang._sfc_main;
exports.OSelect = Select_vue_vue_type_script_setup_true_lang._sfc_main;
exports.OTimepicker = Timepicker_vue_vue_type_script_setup_true_lang._sfc_main;
exports.OTooltip = Tooltip_vue_vue_type_script_setup_true_lang._sfc_main;
exports.Oruga = plugin;
exports.default = plugin;
//# sourceMappingURL=index.cjs.map
