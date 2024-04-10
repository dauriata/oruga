/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import "vue";
import { u as useEventListener } from "./useEventListener-B3_nr73L.mjs";
import { u as unrefElement } from "./unrefElement-bvPf341v.mjs";
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
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (shouldIgnore(event))
      return;
    handler(event);
  };
  const stop = useEventListener("click", listener, window, {
    immediate: true,
    passive: true
  });
  return stop;
}
export {
  useClickOutside as u
};
//# sourceMappingURL=useClickOutside-BFumA2Sw.mjs.map
