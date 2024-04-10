"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
function usePropBinding(name, props, emit, options) {
  const event = (options == null ? void 0 : options.eventName) || `update:${name.toString()}`;
  if (options == null ? void 0 : options.passive) {
    const proxy = vue.ref(props[name]);
    let isUpdating = false;
    vue.watch(
      () => props[name],
      (value) => {
        if (!isUpdating) {
          isUpdating = true;
          proxy.value = value;
          vue.nextTick(() => isUpdating = false);
        }
      }
    );
    vue.watch(
      proxy,
      (value) => {
        if (!isUpdating && value !== props[name] || options.deep)
          emit(event, value);
      },
      { deep: options.deep }
    );
    return proxy;
  } else {
    return vue.computed({
      get() {
        return props[name];
      },
      set(value) {
        emit(event, value);
      }
    });
  }
}
function useVModelBinding(props, emit, options) {
  return usePropBinding("modelValue", props, emit, options);
}
exports.usePropBinding = usePropBinding;
exports.useVModelBinding = useVModelBinding;
//# sourceMappingURL=usePropValue-CHGN8et-.cjs.map
