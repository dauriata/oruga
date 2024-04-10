"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const config = require("./config-JkCO4AEi.cjs");
const helpers = require("./helpers.cjs");
const getActiveClasses = (classes) => {
  if (!classes)
    return [];
  return classes.flatMap(
    (bind) => Object.keys(bind).filter((key) => key && bind[key])
  );
};
function defineClasses(...classDefinitions) {
  const vm = vue.getCurrentInstance();
  if (!vm)
    throw new Error(
      "defineClasses must be called within a component setup function."
    );
  const scope = vue.effectScope();
  const classes = vue.ref([]);
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
        vue.toValue(suffix)
      );
      const applied = !helpers.isDefined(apply) || vue.toValue(apply);
      return { [computedClass]: applied };
    }
    if (helpers.isDefined(suffix) && vue.isRef(suffix)) {
      scope.run(() => {
        vue.watch(
          () => vue.toValue(suffix),
          (value, oldValue) => {
            if (value === oldValue)
              return;
            const classBind = getClassBind();
            classes.value[index] = classBind;
          }
        );
      });
    }
    if (helpers.isDefined(apply) && vue.isRef(apply)) {
      scope.run(() => {
        vue.watch(
          () => vue.toValue(apply),
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
  if (vue.getCurrentScope())
    vue.onScopeDispose(() => {
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
  const config$1 = props.override === true ? {} : config.getOptions();
  const globalOverride = props.override || helpers.getValueByPath(config$1, "override", false);
  const localOverride = helpers.getValueByPath(
    config$1,
    `${configField}.override`,
    globalOverride
  );
  const overrideClass = helpers.getValueByPath(
    config$1,
    `${configField}.${field}.override`,
    localOverride
  );
  const globalTransformClasses = helpers.getValueByPath(
    config$1,
    "transformClasses",
    void 0
  );
  const localTransformClasses = helpers.getValueByPath(
    config$1,
    `${configField}.transformClasses`,
    void 0
  );
  let globalClass = helpers.getValueByPath(
    config$1,
    `${configField}.${field}.class`,
    ""
  ) || helpers.getValueByPath(config$1, `${configField}.${field}`, "");
  let currentClass = helpers.getValueByPath(props, field, "");
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
      helpers.blankIfUndefined(suffix)
    );
  } else {
    defaultValue = defaultValue + helpers.blankIfUndefined(suffix);
  }
  let appliedClasses = `${!overrideClass ? defaultValue : ""} ${helpers.blankIfUndefined(globalClass)} ${helpers.blankIfUndefined(currentClass)}`.trim().replace(/\s\s+/g, " ");
  if (localTransformClasses) {
    appliedClasses = localTransformClasses(appliedClasses);
  } else if (globalTransformClasses) {
    appliedClasses = globalTransformClasses(appliedClasses);
  }
  return appliedClasses;
}
function suffixProcessor(input, suffix) {
  return helpers.blankIfUndefined(input).split(" ").filter((cls) => cls.length > 0).map((cls) => cls + helpers.blankIfUndefined(suffix)).join(" ");
}
const getProps = (vm) => {
  let props = vm.proxy.$props;
  Object.keys(props).filter((key) => key.endsWith("Props")).forEach((key) => props = { ...props, ...props[key] });
  return { props };
};
exports.defineClasses = defineClasses;
exports.getActiveClasses = getActiveClasses;
//# sourceMappingURL=defineClasses-BgXL7M9C.cjs.map
