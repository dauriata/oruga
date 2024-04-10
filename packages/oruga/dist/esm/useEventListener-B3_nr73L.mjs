/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { onMounted, onBeforeUnmount } from "vue";
import { isObject } from "./helpers.mjs";
import { u as unrefElement } from "./unrefElement-bvPf341v.mjs";
function useEventListener(event, listener, el = document, options) {
  let cleanup;
  const register = () => {
    if (!el)
      return;
    const target = unrefElement(el);
    const optionsClone = isObject(options) ? { ...options } : options;
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
    onMounted(() => register());
    onBeforeUnmount(() => stop());
  }
  return stop;
}
export {
  useEventListener as u
};
//# sourceMappingURL=useEventListener-B3_nr73L.mjs.map
