"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const helpers = require("./helpers.cjs");
const unrefElement = require("./unrefElement-Dt2e7Nao.cjs");
function useEventListener(event, listener, el = document, options) {
  let cleanup;
  const register = () => {
    if (!el)
      return;
    const target = unrefElement.unrefElement(el);
    const optionsClone = helpers.isObject(options) ? { ...options } : options;
    target.addEventListener(event, listener, optionsClone);
    cleanup = () => target.removeEventListener(event, listener, optionsClone);
  };
  const stop = () => {
    if (typeof cleanup === "function")
      cleanup();
  };
  if (options == null ? void 0 : options.immediate)
    register();
  else {
    vue.onMounted(() => register());
    vue.onBeforeUnmount(() => stop());
  }
  return stop;
}
exports.useEventListener = useEventListener;
//# sourceMappingURL=useEventListener-rp1-mRkR.cjs.map
