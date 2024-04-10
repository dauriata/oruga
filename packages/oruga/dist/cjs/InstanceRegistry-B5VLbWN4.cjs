"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
class InstanceRegistry {
  constructor() {
    __publicField(this, "entries");
    this.entries = [];
  }
  add(entry) {
    this.entries.push(entry);
  }
  remove(entry) {
    const index = this.entries.indexOf(entry);
    this.entries.splice(index, 1);
  }
  walk(callback) {
    this.entries = [...this.entries].filter((e) => {
      const ret = callback(e);
      return !(ret === true);
    });
  }
}
exports.InstanceRegistry = InstanceRegistry;
//# sourceMappingURL=InstanceRegistry-B5VLbWN4.cjs.map
