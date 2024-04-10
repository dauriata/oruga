"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const ssr = require("./ssr-BN_zM9RT.cjs");
const usePropValue = require("./usePropValue-CHGN8et-.cjs");
const useEventListener = require("./useEventListener-rp1-mRkR.cjs");
const helpers = require("./helpers.cjs");
function useProgrammaticComponent(elementRef, props, emits, options = { cancelOptions: ["escape", "outside"] }) {
  const vm = vue.getCurrentInstance();
  if (!vm)
    throw new Error(
      "useProgrammaticComponent must be called within a component setup function."
    );
  const isActive = usePropValue.usePropBinding("active", props, emits);
  const cancelOptions = vue.computed(
    () => typeof props.cancelable === "boolean" ? props.cancelable ? options.cancelOptions : [] : props.cancelable
  );
  function getElement() {
    return typeof elementRef === "function" ? elementRef() : elementRef.value;
  }
  const container = vue.computed(
    () => typeof props.container === "string" ? document.querySelector(props.container) : props.container || document.body
  );
  vue.onMounted(() => {
    if (props.programmatic) {
      if (props.programmatic.instances) {
        props.programmatic.instances.add(vm);
      }
      const el = getElement();
      container.value.appendChild(el);
      isActive.value = true;
    }
  });
  if (ssr.isClient)
    useEventListener.useEventListener("keyup", onKeyPress, container.value);
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
          if (ssr.isClient)
            window.requestAnimationFrame(() => {
              const el = getElement();
              if (el)
                helpers.removeElement(el);
            });
          else {
            const el = getElement();
            if (el)
              helpers.removeElement(el);
          }
      });
    } else {
      vm.props.active = false;
      vm.emit("update:active", false);
    }
  }
  return { close, cancel, isActive, container };
}
exports.useProgrammaticComponent = useProgrammaticComponent;
//# sourceMappingURL=useProgrammatic-CV--sv7g.cjs.map
