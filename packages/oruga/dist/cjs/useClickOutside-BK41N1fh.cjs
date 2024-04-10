"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
require("vue");
const useEventListener = require("./useEventListener-rp1-mRkR.cjs");
const unrefElement = require("./unrefElement-Dt2e7Nao.cjs");
function useClickOutside(target, handler, ignore = []) {
  if (!window)
    return;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(
          window.document.querySelectorAll(target2)
        ).some(
          (el) => el === event.target || event.composedPath().includes(el)
        );
      } else {
        const el = unrefElement.unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement.unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (shouldIgnore(event))
      return;
    handler(event);
  };
  const stop = useEventListener.useEventListener("click", listener, window, {
    immediate: true,
    passive: true
  });
  return stop;
}
exports.useClickOutside = useClickOutside;
//# sourceMappingURL=useClickOutside-BK41N1fh.cjs.map
