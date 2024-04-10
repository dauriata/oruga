"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
function useDebounce(func, wait, immediate) {
  let timeout;
  return (...args) => {
    const later = () => {
      timeout = null;
      if (!immediate)
        func.apply(this, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(this, args);
  };
}
exports.useDebounce = useDebounce;
//# sourceMappingURL=useDebounce-Bv06vj0r.cjs.map
