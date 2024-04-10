"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const config = require("./config-JkCO4AEi.cjs");
const useEventListener = require("./useEventListener-rp1-mRkR.cjs");
const ssr = require("./ssr-BN_zM9RT.cjs");
function useMatchMedia(mobileBreakpoint) {
  var _a;
  const isMobile = vue.ref(false);
  const mediaQuery = vue.ref();
  const vm = vue.getCurrentInstance();
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
    const defaultWidth = config.getOption(
      `mobileBreakpoint`,
      mobileBreakpoint || "1023px"
    );
    width = config.getOption(`${configField}.mobileBreakpoint`, defaultWidth);
  }
  mediaQuery.value = ssr.isClient ? window.matchMedia(`(max-width: ${width})`) : void 0;
  if (mediaQuery.value) {
    isMobile.value = mediaQuery.value.matches;
    useEventListener.useEventListener("change", onMatchMedia, mediaQuery.value);
  } else {
    isMobile.value = false;
  }
  function onMatchMedia(event) {
    isMobile.value = event.matches;
  }
  return { isMobile };
}
exports.useMatchMedia = useMatchMedia;
//# sourceMappingURL=useMatchMedia-gcwLqHTY.cjs.map
