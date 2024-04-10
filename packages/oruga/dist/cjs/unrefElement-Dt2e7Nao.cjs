"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
function unrefElement(elRef) {
  const plain = vue.toValue(elRef);
  return (plain == null ? void 0 : plain.$el) ?? plain;
}
exports.unrefElement = unrefElement;
//# sourceMappingURL=unrefElement-Dt2e7Nao.cjs.map
