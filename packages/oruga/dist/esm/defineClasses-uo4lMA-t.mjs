/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { getCurrentInstance, effectScope, ref, isRef, watch, toValue, getCurrentScope, onScopeDispose } from "vue";
import { c as getOptions } from "./config-zKhnAIV0.mjs";
import { isDefined, getValueByPath, blankIfUndefined } from "./helpers.mjs";
const getActiveClasses = (classes) => {
  if (!classes)
    return [];
  return classes.flatMap(
    (bind) => Object.keys(bind).filter((key) => key && bind[key])
  );
};
function defineClasses(...classDefinitions) {
  const vm = getCurrentInstance();
  if (!vm)
    throw new Error(
      "defineClasses must be called within a component setup function."
    );
  const scope = effectScope();
  const classes = ref([]);
  classes.value = classDefinitions.map((defintion, index) => {
    const className = defintion[0];
    const defaultClass = defintion[1];
    const suffix = defintion[2];
    const apply = defintion[3];
    function getClassBind() {
      const computedClass = computeClass(
        vm,
        className,
        defaultClass,
        toValue(suffix)
      );
      const applied = !isDefined(apply) || toValue(apply);
      return { [computedClass]: applied };
    }
    if (isDefined(suffix) && isRef(suffix)) {
      scope.run(() => {
        watch(
          () => toValue(suffix),
          (value, oldValue) => {
            if (value === oldValue)
              return;
            const classBind = getClassBind();
            classes.value[index] = classBind;
          }
        );
      });
    }
    if (isDefined(apply) && isRef(apply)) {
      scope.run(() => {
        watch(
          () => toValue(apply),
          (applied, oldValue) => {
            if (applied === oldValue)
              return;
            const classBind = classes.value[index];
            Object.keys(classBind).forEach(
              (key) => classBind[key] = applied
            );
            classes.value[index] = classBind;
          }
        );
      });
    }
    return getClassBind();
  });
  if (getCurrentScope())
    onScopeDispose(() => {
      if (scope)
        scope.stop();
    });
  return classes;
}
function computeClass(vm, field, defaultValue, suffix = "") {
  var _a;
  const props = vm.props;
  const configField = (_a = vm.proxy) == null ? void 0 : _a.$options.configField;
  if (!configField)
    throw new Error("component must define the 'configField' option.");
  const config = props.override === true ? {} : getOptions();
  const globalOverride = props.override || getValueByPath(config, "override", false);
  const localOverride = getValueByPath(
    config,
    `${configField}.override`,
    globalOverride
  );
  const overrideClass = getValueByPath(
    config,
    `${configField}.${field}.override`,
    localOverride
  );
  const globalTransformClasses = getValueByPath(
    config,
    "transformClasses",
    void 0
  );
  const localTransformClasses = getValueByPath(
    config,
    `${configField}.transformClasses`,
    void 0
  );
  let globalClass = getValueByPath(
    config,
    `${configField}.${field}.class`,
    ""
  ) || getValueByPath(config, `${configField}.${field}`, "");
  let currentClass = getValueByPath(props, field, "");
  if (Array.isArray(currentClass)) {
    currentClass = currentClass.join(" ");
  }
  if (typeof currentClass === "function") {
    const props2 = getProps(vm);
    currentClass = currentClass(suffix, props2);
  } else {
    currentClass = suffixProcessor(currentClass, suffix);
  }
  if (Array.isArray(globalClass)) {
    globalClass = globalClass.join(" ");
  }
  if (typeof globalClass === "function") {
    const props2 = getProps(vm);
    globalClass = globalClass(suffix, props2);
  } else {
    globalClass = suffixProcessor(globalClass, suffix);
  }
  if (defaultValue.includes("{*}")) {
    defaultValue = defaultValue.replace(
      /\{\*\}/g,
      blankIfUndefined(suffix)
    );
  } else {
    defaultValue = defaultValue + blankIfUndefined(suffix);
  }
  let appliedClasses = `${!overrideClass ? defaultValue : ""} ${blankIfUndefined(globalClass)} ${blankIfUndefined(currentClass)}`.trim().replace(/\s\s+/g, " ");
  if (localTransformClasses) {
    appliedClasses = localTransformClasses(appliedClasses);
  } else if (globalTransformClasses) {
    appliedClasses = globalTransformClasses(appliedClasses);
  }
  return appliedClasses;
}
function suffixProcessor(input, suffix) {
  return blankIfUndefined(input).split(" ").filter((cls) => cls.length > 0).map((cls) => cls + blankIfUndefined(suffix)).join(" ");
}
const getProps = (vm) => {
  let props = vm.proxy.$props;
  Object.keys(props).filter((key) => key.endsWith("Props")).forEach((key) => props = { ...props, ...props[key] });
  return { props };
};
export {
  defineClasses as d,
  getActiveClasses as g
};
//# sourceMappingURL=defineClasses-uo4lMA-t.mjs.map
