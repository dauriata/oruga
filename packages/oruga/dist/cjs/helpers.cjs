"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const uuid = () => Math.random().toString(36).substring(2, 15);
function signPoly(value) {
  if (value < 0)
    return -1;
  return value > 0 ? 1 : 0;
}
const sign = Math.sign || signPoly;
const mod = (n, mod2) => (n % mod2 + mod2) % mod2;
function bound(val, min, max) {
  return Math.max(min, Math.min(max, val));
}
const isObject = (obj) => obj && typeof obj === "object" && !Array.isArray(obj);
const isDefined = (d) => d !== null && d !== void 0;
const blankIfUndefined = (value) => typeof value !== "undefined" && value !== null ? value : "";
const defaultIfUndefined = (value, defaultValue) => typeof value !== "undefined" && value !== null ? value : defaultValue;
const toCssDimension = (width) => !isDefined(width) ? null : isNaN(width) ? width : width + "px";
function indexOf(array, obj, fn) {
  if (!array)
    return -1;
  if (!fn || typeof fn !== "function")
    return array.indexOf(obj);
  return array.findIndex((value, index, arr) => fn(value, arr));
}
function isEqual(valueA, valueB) {
  if (!valueA && !!valueB || !!valueA && !valueB)
    return false;
  if (valueA === valueB)
    return true;
  if (isObject(valueA) && isObject(valueB)) {
    const keys1 = Object.keys(valueA);
    const keys2 = Object.keys(valueB);
    if (keys1.length !== keys2.length)
      return false;
    for (const key of keys1) {
      const val1 = valueA[key];
      const val2 = valueB[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (areObjects && !isEqual(val1, val2) || !areObjects && val1 !== val2)
        return false;
    }
    return true;
  }
  if (Array.isArray(valueA) && Array.isArray(valueB)) {
    if (valueA.length !== valueB.length)
      return false;
    if (!valueA.every((val, index) => val === valueB[index]))
      return false;
    return true;
  }
  return false;
}
function clone(obj) {
  return Object.assign({}, obj);
}
function merge(target, source, deep = false) {
  if (!isObject(target) || !isObject(source))
    return source;
  if (!deep)
    return Object.assign(target, source);
  else
    return mergeDeep(target, source);
}
function mergeDeep(target, source) {
  if (!isObject(target) || !isObject(source))
    return source;
  Object.getOwnPropertyNames(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(
        Object.assign({}, targetValue),
        sourceValue
      );
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
}
function getValueByPath(obj, path, defaultValue) {
  const value = path.split(".").reduce(
    (o, i) => typeof o !== "undefined" ? o[i] : void 0,
    obj
  );
  return typeof value !== "undefined" ? value : defaultValue;
}
function setValueByPath(obj, path, value) {
  const p = path.split(".");
  if (p.length === 1) {
    obj[path] = value;
    return;
  }
  const field = p[0];
  if (typeof obj[field] === "undefined")
    obj[field] = {};
  return setValueByPath(obj[field], p.slice(1).join("."), value);
}
function removeElement(el) {
  if (typeof el.remove !== "undefined") {
    el.remove();
  } else if (typeof el.parentNode !== "undefined" && el.parentNode !== null) {
    el.parentNode.removeChild(el);
  }
}
function createAbsoluteElement(el) {
  const root = document.createElement("div");
  root.style.position = "absolute";
  root.style.left = "0px";
  root.style.top = "0px";
  const wrapper = document.createElement("div");
  root.appendChild(wrapper);
  wrapper.appendChild(el);
  document.body.appendChild(root);
  return root;
}
function escapeRegExpChars(value) {
  if (!value)
    return value;
  return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function removeDiacriticsFromString(value) {
  if (!value)
    return value;
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const isMobileAgent = {
  Android: () => typeof window !== "undefined" && !!window.navigator.userAgent.match(/Android/i),
  BlackBerry: () => typeof window !== "undefined" && !!window.navigator.userAgent.match(/BlackBerry/i),
  iOS: () => typeof window !== "undefined" && !!window.navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera: () => typeof window !== "undefined" && !!window.navigator.userAgent.match(/Opera Mini/i),
  Windows: () => typeof window !== "undefined" && !!window.navigator.userAgent.match(/IEMobile/i),
  any: () => isMobileAgent.Android() || isMobileAgent.BlackBerry() || isMobileAgent.iOS() || isMobileAgent.Opera() || isMobileAgent.Windows()
};
exports.blankIfUndefined = blankIfUndefined;
exports.bound = bound;
exports.clone = clone;
exports.createAbsoluteElement = createAbsoluteElement;
exports.defaultIfUndefined = defaultIfUndefined;
exports.escapeRegExpChars = escapeRegExpChars;
exports.getValueByPath = getValueByPath;
exports.indexOf = indexOf;
exports.isDefined = isDefined;
exports.isEqual = isEqual;
exports.isMobileAgent = isMobileAgent;
exports.isObject = isObject;
exports.merge = merge;
exports.mergeDeep = mergeDeep;
exports.mod = mod;
exports.removeDiacriticsFromString = removeDiacriticsFromString;
exports.removeElement = removeElement;
exports.setValueByPath = setValueByPath;
exports.sign = sign;
exports.toCssDimension = toCssDimension;
exports.uuid = uuid;
//# sourceMappingURL=helpers.cjs.map
