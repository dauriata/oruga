/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { toValue } from "vue";
function unrefElement(elRef) {
  const plain = toValue(elRef);
  return (plain == null ? void 0 : plain.$el) ?? plain;
}
export {
  unrefElement as u
};
//# sourceMappingURL=unrefElement-bvPf341v.mjs.map
