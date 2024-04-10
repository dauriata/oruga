"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const config = require("./config-JkCO4AEi.cjs");
const $field = Symbol();
function provideField(data) {
  vue.provide($field, data);
}
function injectField() {
  const parentField = vue.inject($field, void 0);
  const statusVariant = vue.computed(() => {
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
  const statusMessage = vue.computed(
    () => !parentField.value ? parentField.value.fieldMessage || parentField.value.hasMessage : ""
  );
  const statusVariantIcon = vue.computed(() => {
    const statusVariantIcon2 = config.getOption("statusVariantIcon", {
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
exports.injectField = injectField;
exports.provideField = provideField;
//# sourceMappingURL=useFieldShare-DArg23Mc.cjs.map
