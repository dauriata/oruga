"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Loading_vue_vue_type_script_setup_true_lang = require("./Loading.vue_vue_type_script_setup_true_lang-CBsJmoJ6.cjs");
const vue = require("vue");
const InstanceRegistry = require("./InstanceRegistry-B5VLbWN4.cjs");
const config = require("./config-JkCO4AEi.cjs");
const helpers = require("./helpers.cjs");
const instances = new InstanceRegistry.InstanceRegistry();
const LoadingProgrammatic = {
  open(params) {
    const componentParams = typeof params === "string" ? {
      label: params
    } : { ...params };
    let slot;
    if (Array.isArray(componentParams.label)) {
      slot = componentParams.label;
      delete componentParams.label;
    }
    const defaultParams = {
      programmatic: { instances },
      active: true
      // set the active state to true
    };
    const propsData = helpers.merge(defaultParams, componentParams);
    propsData.promise = new Promise((p1, p2) => {
      propsData.programmatic.resolve = p1;
      propsData.programmatic.reject = p2;
    });
    const defaultSlot = () => slot;
    const app = config.VueInstance;
    const vnode = vue.createVNode(Loading_vue_vue_type_script_setup_true_lang._sfc_main, propsData, defaultSlot);
    vnode.appContext = app._context;
    vue.render(vnode, document.createElement("div"));
    return vnode.component.exposed;
  },
  closeAll(...args) {
    instances.walk((entry) => entry.exposed.close(...args));
  }
};
const LoadingProgrammatic$1 = LoadingProgrammatic;
const index = {
  install(app) {
    config.registerComponent(app, Loading_vue_vue_type_script_setup_true_lang._sfc_main);
    config.registerComponentProgrammatic(app, "loading", LoadingProgrammatic$1);
  }
};
exports.OLoading = Loading_vue_vue_type_script_setup_true_lang._sfc_main;
exports.LoadingProgrammatic = LoadingProgrammatic$1;
exports.default = index;
//# sourceMappingURL=loading.cjs.map
