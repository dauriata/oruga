/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { ref, toRaw } from "vue";
import { clone, getValueByPath, setValueByPath, merge } from "./helpers.mjs";
const oruga = ref({});
function addProgrammatic(property, component) {
  oruga.value[property] = component;
}
function useOruga() {
  return oruga.value;
}
let VueInstance;
const setVueInstance = (Vue) => {
  VueInstance = Vue;
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
const globalOptions = ref({
  iconPack: "mdi",
  useHtml5Validation: true,
  statusIcon: true,
  transformClasses: void 0
});
const setOptions = (options) => {
  globalOptions.value = options;
};
const getOptions = () => {
  return clone(toRaw(globalOptions.value));
};
const getOption = (path, defaultValue) => {
  return getValueByPath(globalOptions.value, path, defaultValue);
};
const setOption = (path, defaultValue) => {
  setValueByPath(globalOptions.value, path, defaultValue);
};
const ConfigProgrammatic = {
  getOption,
  getOptions,
  setOption,
  setOptions(options) {
    setOptions(merge(getOptions(), options, true));
  }
};
const OrugaConfig = {
  install(app, options) {
    setVueInstance(app);
    setOptions(merge(getOptions(), options, true));
  }
};
export {
  ConfigProgrammatic as C,
  OrugaConfig as O,
  VueInstance as V,
  registerComponentProgrammatic as a,
  registerComponent as b,
  getOptions as c,
  setOption as d,
  getOption as g,
  registerPlugin as r,
  setOptions as s,
  useOruga as u
};
//# sourceMappingURL=config-zKhnAIV0.mjs.map
