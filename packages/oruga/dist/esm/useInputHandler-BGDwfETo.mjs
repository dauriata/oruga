/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { computed, ref, nextTick } from "vue";
import { i as injectField } from "./useFieldShare-rUPsRYD7.mjs";
import { u as unrefElement } from "./unrefElement-bvPf341v.mjs";
import { g as getOption } from "./config-zKhnAIV0.mjs";
import { a as isSSR } from "./ssr-BIBU2UWo.mjs";
const validatableFormElementTypes = isSSR ? [] : [
  HTMLButtonElement,
  HTMLFieldSetElement,
  HTMLInputElement,
  HTMLObjectElement,
  HTMLOutputElement,
  HTMLSelectElement,
  HTMLTextAreaElement
];
function asValidatableFormElement(el) {
  return validatableFormElementTypes.some((t) => el instanceof t) ? el : null;
}
function useInputHandler(inputRef, emits, props) {
  const { parentField } = injectField();
  const element = computed(() => {
    const el = unrefElement(inputRef);
    if (!el) {
      console.warn("useInputHandler: inputRef contains no element");
      return void 0;
    }
    if (el.getAttribute("data-oruga-input"))
      return el;
    const inputs = el.querySelector("[data-oruga-input]");
    if (!inputs) {
      console.warn(
        "useInputHandler: Underlaying Oruga input component not found"
      );
      return void 0;
    }
    return inputs;
  });
  const isFocused = ref(false);
  function setFocus() {
    nextTick(() => {
      if (element.value)
        element.value.focus();
    });
  }
  function doClick() {
    nextTick(() => {
      if (element.value)
        element.value.click();
    });
  }
  function onBlur(event) {
    isFocused.value = false;
    if (parentField == null ? void 0 : parentField.value)
      parentField.value.setFocus(false);
    emits("blur", event);
    checkHtml5Validity();
  }
  function onFocus(event) {
    isFocused.value = true;
    if (parentField == null ? void 0 : parentField.value)
      parentField.value.setFocus(true);
    emits("focus", event);
  }
  const isValid = ref(true);
  function setFieldValidity(variant, message) {
    nextTick(() => {
      if (parentField == null ? void 0 : parentField.value) {
        if (!parentField.value.props.variant) {
          parentField.value.setVariant(variant);
        }
        if (!parentField.value.props.message) {
          parentField.value.setMessage(message);
        }
      }
    });
  }
  function checkHtml5Validity() {
    if (!props.useHtml5Validation)
      return;
    if (!element.value)
      return;
    if (element.value.validity.valid) {
      setFieldValidity(null, null);
      isValid.value = true;
    } else {
      setInvalid();
      isValid.value = false;
    }
    return isValid.value;
  }
  function setInvalid() {
    const variant = "danger";
    const message = props.validationMessage || element.value.validationMessage;
    setFieldValidity(variant, message);
  }
  function onInvalid(event) {
    checkHtml5Validity();
    const validatable = asValidatableFormElement(event.target);
    if (validatable && (parentField == null ? void 0 : parentField.value) && props.useHtml5Validation) {
      event.preventDefault();
      let isFirstInvalid = false;
      if (validatable.form != null) {
        const formElements = validatable.form.elements;
        for (let i = 0; i < formElements.length; ++i) {
          const element2 = asValidatableFormElement(
            formElements.item(i)
          );
          if ((element2 == null ? void 0 : element2.willValidate) && !element2.validity.valid) {
            isFirstInvalid = validatable === element2;
            break;
          }
        }
      }
      if (isFirstInvalid) {
        const fieldElement = parentField.value.$el;
        const invalidHandler = getOption("invalidHandler");
        if (invalidHandler instanceof Function) {
          invalidHandler(validatable, fieldElement);
        } else {
          const canScrollToField = fieldElement ? fieldElement.scrollIntoView != void 0 : false;
          validatable.focus({ preventScroll: canScrollToField });
          if (canScrollToField) {
            fieldElement.scrollIntoView({ block: "nearest" });
          }
        }
      }
    }
    emits("invalid", event);
  }
  return {
    isFocused,
    isValid,
    setFocus,
    doClick,
    onFocus,
    onBlur,
    checkHtml5Validity,
    onInvalid
  };
}
export {
  useInputHandler as u
};
//# sourceMappingURL=useInputHandler-BGDwfETo.mjs.map
