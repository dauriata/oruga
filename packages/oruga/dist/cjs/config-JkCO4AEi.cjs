"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const helpers = require("./helpers.cjs");
const oruga = vue.ref({});
function addProgrammatic(property, component) {
  oruga.value[property] = component;
}
function useOruga() {
  return oruga.value;
}
exports.VueInstance = void 0;
const setVueInstance = (Vue) => {
  exports.VueInstance = Vue;
};
const registerPlugin = (app, plugin) => {
  app.use(plugin);
};
const registerComponent = (app, component) => {
  app.component(component.name, component);
};
const registerComponentProgrammatic = (app, property, component) => {
  setVueInstance(app);
  const oruga2 = useOruga();
  addProgrammatic(property, component);
  if (!(app._context.provides && app._context.provides.oruga))
    app.provide("oruga", oruga2);
  if (!app.config.globalProperties.$oruga)
    app.config.globalProperties.$oruga = oruga2;
};
const globalOptions = vue.ref({
  iconPack: "mdi",
  useHtml5Validation: true,
  statusIcon: true,
  transformClasses: void 0
});
const setOptions = (options) => {
  globalOptions.value = options;
};
const getOptions = () => {
  return helpers.clone(vue.toRaw(globalOptions.value));
};
const getOption = (path, defaultValue) => {
  return helpers.getValueByPath(globalOptions.value, path, defaultValue);
};
const setOption = (path, defaultValue) => {
  helpers.setValueByPath(globalOptions.value, path, defaultValue);
};
const ConfigProgrammatic = {
  getOption,
  getOptions,
  setOption,
  setOptions(options) {
    setOptions(helpers.merge(getOptions(), options, true));
  }
};
const OrugaConfig = {
  install(app, options) {
    setVueInstance(app);
    setOptions(helpers.merge(getOptions(), options, true));
  }
};
exports.ConfigProgrammatic = ConfigProgrammatic;
exports.OrugaConfig = OrugaConfig;
exports.getOption = getOption;
exports.getOptions = getOptions;
exports.registerComponent = registerComponent;
exports.registerComponentProgrammatic = registerComponentProgrammatic;
exports.registerPlugin = registerPlugin;
exports.setOption = setOption;
exports.setOptions = setOptions;
exports.useOruga = useOruga;
//# sourceMappingURL=config-JkCO4AEi.cjs.map
