/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { _ as _sfc_main } from "./Loading.vue_vue_type_script_setup_true_lang-tMXeR7UA.mjs";
import { createVNode, render } from "vue";
import { I as InstanceRegistry } from "./InstanceRegistry-CnSXgFAg.mjs";
import { V as VueInstance, b as registerComponent, a as registerComponentProgrammatic } from "./config-zKhnAIV0.mjs";
import { merge } from "./helpers.mjs";
const instances = new InstanceRegistry();
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
    const propsData = merge(defaultParams, componentParams);
    propsData.promise = new Promise((p1, p2) => {
      propsData.programmatic.resolve = p1;
      propsData.programmatic.reject = p2;
    });
    const defaultSlot = () => slot;
    const app = VueInstance;
    const vnode = createVNode(_sfc_main, propsData, defaultSlot);
    vnode.appContext = app._context;
    render(vnode, document.createElement("div"));
    return vnode.component.exposed;
  },
  closeAll(...args) {
    instances.walk((entry) => entry.exposed.close(...args));
  }
};
const LoadingProgrammatic$1 = LoadingProgrammatic;
const index = {
  install(app) {
    registerComponent(app, _sfc_main);
    registerComponentProgrammatic(app, "loading", LoadingProgrammatic$1);
  }
};
export {
  LoadingProgrammatic$1 as LoadingProgrammatic,
  _sfc_main as OLoading,
  index as default
};
//# sourceMappingURL=loading.mjs.map
