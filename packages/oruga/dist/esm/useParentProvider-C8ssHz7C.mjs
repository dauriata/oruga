/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { getCurrentInstance, ref, computed, provide, inject, onUnmounted, nextTick } from "vue";
import { u as unrefElement } from "./unrefElement-bvPf341v.mjs";
function useProviderParent(rootRef, options) {
  var _a;
  const vm = getCurrentInstance();
  if (!vm)
    throw new Error(
      "useProviderChild must be called within a component setup function."
    );
  const configField = (_a = vm.proxy) == null ? void 0 : _a.$options.configField;
  const key = (options == null ? void 0 : options.key) ? options.key : configField;
  const childItems = ref([]);
  const sequence = ref(1);
  const sortedItems = computed(
    () => childItems.value.slice().sort((a, b) => a.index - b.index)
  );
  function registerItem(data) {
    const index = childItems.value.length;
    const identifier = nextSequence();
    const item = { index, data, identifier };
    childItems.value.push(item);
    if (rootRef == null ? void 0 : rootRef.value) {
      nextTick(() => {
        const ids = childItems.value.map((item2) => `[data-id="${key}-${item2.identifier}"]`).join(",");
        const parent = unrefElement(rootRef);
        const children = parent.querySelectorAll(ids);
        const sortedIds = Array.from(children).map(
          (el) => el.getAttribute("data-id").replace(`${key}-`, "")
        );
        childItems.value.forEach(
          (item2) => item2.index = sortedIds.indexOf(`${item2.identifier}`)
        );
      });
    }
    return item;
  }
  function unregisterItem(item) {
    childItems.value = childItems.value.filter((i) => i !== item);
  }
  function nextSequence() {
    return String(sequence.value++);
  }
  provide("$o-" + key, {
    registerItem,
    unregisterItem,
    data: options == null ? void 0 : options.data
  });
  return {
    childItems,
    sortedItems
  };
}
function useProviderChild(options = { needParent: true }) {
  var _a;
  const vm = getCurrentInstance();
  if (!vm)
    throw new Error(
      "useProviderChild must be called within a component setup function."
    );
  const configField = (_a = vm.proxy) == null ? void 0 : _a.$options.configField;
  const key = (options == null ? void 0 : options.key) ? options.key : configField;
  const parent = inject(
    "$o-" + key,
    void 0
  );
  const needParent = typeof options.needParent === "undefined" || options.needParent;
  const register = typeof options.register === "undefined" || options.register;
  if (needParent && !parent) {
    throw new Error(
      `You should wrap ${vm.proxy.$options.name} in a ${key} component`
    );
  }
  const item = ref();
  if (parent && register)
    item.value = parent.registerItem(options.data);
  onUnmounted(() => {
    if (parent && item.value)
      parent.unregisterItem(item.value);
  });
  return { parent: parent == null ? void 0 : parent.data, item };
}
export {
  useProviderChild as a,
  useProviderParent as u
};
//# sourceMappingURL=useParentProvider-C8ssHz7C.mjs.map
