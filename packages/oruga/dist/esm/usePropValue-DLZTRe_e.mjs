/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { ref, watch, nextTick, computed } from "vue";
function usePropBinding(name, props, emit, options) {
  const event = (options == null ? void 0 : options.eventName) || `update:${name.toString()}`;
  if (options == null ? void 0 : options.passive) {
    const proxy = ref(props[name]);
    let isUpdating = false;
    watch(
      () => props[name],
      (value) => {
        if (!isUpdating) {
          isUpdating = true;
          proxy.value = value;
          nextTick(() => isUpdating = false);
        }
      }
    );
    watch(
      proxy,
      (value) => {
        if (!isUpdating && value !== props[name] || options.deep)
          emit(event, value);
      },
      { deep: options.deep }
    );
    return proxy;
  } else {
    return computed({
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
export {
  usePropBinding as a,
  useVModelBinding as u
};
//# sourceMappingURL=usePropValue-DLZTRe_e.mjs.map
