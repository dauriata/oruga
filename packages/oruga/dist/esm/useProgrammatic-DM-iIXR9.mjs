/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { getCurrentInstance, computed, onMounted } from "vue";
import { i as isClient } from "./ssr-BIBU2UWo.mjs";
import { a as usePropBinding } from "./usePropValue-DLZTRe_e.mjs";
import { u as useEventListener } from "./useEventListener-B3_nr73L.mjs";
import { removeElement } from "./helpers.mjs";
function useProgrammaticComponent(elementRef, props, emits, options = { cancelOptions: ["escape", "outside"] }) {
  const vm = getCurrentInstance();
  if (!vm)
    throw new Error(
      "useProgrammaticComponent must be called within a component setup function."
    );
  const isActive = usePropBinding("active", props, emits);
  const cancelOptions = computed(
    () => typeof props.cancelable === "boolean" ? props.cancelable ? options.cancelOptions : [] : props.cancelable
  );
  function getElement() {
    return typeof elementRef === "function" ? elementRef() : elementRef.value;
  }
  const container = computed(
    () => typeof props.container === "string" ? document.querySelector(props.container) : props.container || document.body
  );
  onMounted(() => {
    if (props.programmatic) {
      if (props.programmatic.instances) {
        props.programmatic.instances.add(vm);
      }
      const el = getElement();
      container.value.appendChild(el);
      isActive.value = true;
    }
  });
  if (isClient)
    useEventListener("keyup", onKeyPress, container.value);
  function onKeyPress(event) {
    if (isActive.value && (event.key === "Escape" || event.key === "Esc")) {
      cancel("escape");
    }
  }
  function cancel(method) {
    if (!props.cancelable || !isActive.value)
      return;
    if (cancelOptions.value.indexOf(method) < 0)
      return;
    props.onCancel.apply(null);
    close({ action: "cancel", method });
  }
  function close(...args) {
    vm.emit("close");
    props.onClose.apply(null, args);
    if (props.programmatic) {
      if (props.programmatic.instances)
        props.programmatic.instances.remove(vm);
      if (props.programmatic.resolve)
        props.programmatic.resolve.apply(null, args);
      setTimeout(() => {
        vm.props.active = false;
        vm.emit("update:active", false);
        if (typeof options.destroyOnHide === "undefined" || options.destroyOnHide)
          if (isClient)
            window.requestAnimationFrame(() => {
              const el = getElement();
              if (el)
                removeElement(el);
            });
          else {
            const el = getElement();
            if (el)
              removeElement(el);
          }
      });
    } else {
      vm.props.active = false;
      vm.emit("update:active", false);
    }
  }
  return { close, cancel, isActive, container };
}
export {
  useProgrammaticComponent as u
};
//# sourceMappingURL=useProgrammatic-DM-iIXR9.mjs.map
