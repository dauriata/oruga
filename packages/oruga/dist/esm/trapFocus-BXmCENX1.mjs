/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const findFocusable = (element, programmatic = false) => {
  if (!element)
    return null;
  if (programmatic)
    return element.querySelectorAll(`*[tabindex="-1"]`);
  return element.querySelectorAll(`a[href]:not([tabindex="-1"]),
                                     area[href],
                                     input:not([disabled]),
                                     select:not([disabled]),
                                     textarea:not([disabled]),
                                     button:not([disabled]),
                                     iframe,
                                     object,
                                     embed,
                                     *[tabindex]:not([tabindex="-1"]),
                                     *[contenteditable]`);
};
let onKeyDown;
const bind = (el, { value = true }) => {
  if (value) {
    let focusable = findFocusable(el);
    let focusableProg = findFocusable(el, true);
    if (focusable && focusable.length > 0) {
      onKeyDown = (event) => {
        focusable = findFocusable(el);
        focusableProg = findFocusable(el, true);
        const firstFocusable = focusable[0];
        const lastFocusable = focusable[focusable.length - 1];
        if (event.target === firstFocusable && event.shiftKey && event.key === "Tab") {
          event.preventDefault();
          lastFocusable.focus();
        } else if ((event.target === lastFocusable || Array.from(focusableProg).indexOf(event.target) >= 0) && !event.shiftKey && event.key === "Tab") {
          event.preventDefault();
          firstFocusable.focus();
        }
      };
      el.addEventListener("keydown", onKeyDown);
    }
  }
};
const unbind = (el) => {
  el.removeEventListener("keydown", onKeyDown);
};
const directive = {
  beforeMount: bind,
  beforeUnmount: unbind
};
const vTrapFocus = directive;
export {
  vTrapFocus as v
};
//# sourceMappingURL=trapFocus-BXmCENX1.mjs.map
