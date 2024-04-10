/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { ref, getCurrentInstance } from "vue";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { u as useEventListener } from "./useEventListener-B3_nr73L.mjs";
import { i as isClient } from "./ssr-BIBU2UWo.mjs";
function useMatchMedia(mobileBreakpoint) {
  var _a;
  const isMobile = ref(false);
  const mediaQuery = ref();
  const vm = getCurrentInstance();
  if (!vm)
    throw new Error(
      "useMatchMedia must be called within a component setup function."
    );
  const props = vm.props;
  const configField = (_a = vm.proxy) == null ? void 0 : _a.$options.configField;
  if (!configField)
    throw new Error("component must define the 'configField' option.");
  let width = props.mobileBreakpoint;
  if (!width) {
    const defaultWidth = getOption(
      `mobileBreakpoint`,
      mobileBreakpoint || "1023px"
    );
    width = getOption(`${configField}.mobileBreakpoint`, defaultWidth);
  }
  mediaQuery.value = isClient ? window.matchMedia(`(max-width: ${width})`) : void 0;
  if (mediaQuery.value) {
    isMobile.value = mediaQuery.value.matches;
    useEventListener("change", onMatchMedia, mediaQuery.value);
  } else {
    isMobile.value = false;
  }
  function onMatchMedia(event) {
    isMobile.value = event.matches;
  }
  return { isMobile };
}
export {
  useMatchMedia as u
};
//# sourceMappingURL=useMatchMedia-G3BPCbzR.mjs.map
