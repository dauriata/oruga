"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const OSlotComponent = vue.defineComponent({
  name: "OSlotComponent",
  props: {
    /** Component to be get the slot from */
    component: { type: Object, required: true },
    /** Slot name */
    name: { type: String, default: "default" },
    /** Props passed to the slot */
    props: { type: Object, default: () => {
    } },
    /** Tag name of the slot wrapper element */
    tag: {
      type: [String, Object, Function],
      default: "div"
    }
  },
  render() {
    const slot = this.component.$slots[this.name] ? this.component.$slots[this.name](this.props) : {};
    return vue.h(this.tag, {}, slot);
  }
});
exports.OSlotComponent = OSlotComponent;
//# sourceMappingURL=SlotComponent-CZq-e91h.cjs.map
