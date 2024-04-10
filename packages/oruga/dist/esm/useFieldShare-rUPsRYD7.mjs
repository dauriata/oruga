/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { provide, inject, computed } from "vue";
import { g as getOption } from "./config-zKhnAIV0.mjs";
const $field = Symbol();
function provideField(data) {
  provide($field, data);
}
function injectField() {
  const parentField = inject($field, void 0);
  const statusVariant = computed(() => {
    if (!(parentField == null ? void 0 : parentField.value))
      return void 0;
    else if (!parentField.value.fieldVariant)
      return void 0;
    else {
      if (typeof parentField.value.fieldVariant === "string") {
        return parentField.value.fieldVariant;
      } else if (Array.isArray(parentField.value.fieldVariant)) {
        for (const key in parentField.value.fieldVariant) {
          if (parentField.value.fieldVariant[key]) {
            return key;
          }
        }
      }
    }
    return void 0;
  });
  const statusMessage = computed(
    () => !parentField.value ? parentField.value.fieldMessage || parentField.value.hasMessage : ""
  );
  const statusVariantIcon = computed(() => {
    const statusVariantIcon2 = getOption("statusVariantIcon", {
      success: "check",
      danger: "alert-circle",
      info: "information",
      warning: "alert"
    });
    return statusVariantIcon2[statusVariant.value] || "";
  });
  return {
    parentField,
    statusVariant,
    statusVariantIcon,
    statusMessage
  };
}
export {
  injectField as i,
  provideField as p
};
//# sourceMappingURL=useFieldShare-rUPsRYD7.mjs.map
