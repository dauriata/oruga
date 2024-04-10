"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const vue = require("vue");
const Input_vue_vue_type_script_setup_true_lang = require("./Input.vue_vue_type_script_setup_true_lang-CWmlmVsP.cjs");
const DropdownItem_vue_vue_type_script_setup_true_lang = require("./DropdownItem.vue_vue_type_script_setup_true_lang-Dpy9L2Ey.cjs");
const config = require("./config-JkCO4AEi.cjs");
const helpers = require("./helpers.cjs");
const ssr = require("./ssr-BN_zM9RT.cjs");
const unrefElement = require("./unrefElement-Dt2e7Nao.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const useEventListener = require("./useEventListener-rp1-mRkR.cjs");
const useInputHandler = require("./useInputHandler-jezRcEW8.cjs");
const useDebounce = require("./useDebounce-Bv06vj0r.cjs");
const _hoisted_1 = { key: 1 };
const _hoisted_2 = { key: 1 };
var SpecialOption = /* @__PURE__ */ ((SpecialOption2) => {
  SpecialOption2[SpecialOption2["Header"] = 0] = "Header";
  SpecialOption2[SpecialOption2["Footer"] = 1] = "Footer";
  return SpecialOption2;
})(SpecialOption || {});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OAutocomplete",
    configField: "autocomplete",
    inheritAttrs: false
  },
  __name: "Autocomplete",
  props: /* @__PURE__ */ vue.mergeModels({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: [String, Number], default: void 0 },
    /** Input type */
    type: { type: String, default: "text" },
    /** Menu tag name */
    menuTag: {
      type: [String, Object, Function],
      default: () => config.getOption("autocomplete.menuTag", "div")
    },
    /** Menu item tag name */
    itemTag: {
      type: [String, Object, Function],
      default: () => config.getOption("autocomplete.itemTag", "div")
    },
    /** Options / suggestions */
    data: { type: Array, default: () => [] },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => config.getOption("autocomplete.size")
    },
    /**
     * Position of the dropdown
     * @values auto, top, bottom
     */
    position: {
      type: String,
      default: () => config.getOption("autocomplete.position", "auto"),
      validator: (value) => ["auto", "top", "bottom"].indexOf(value) >= 0
    },
    /** Property of the object (if data is array of objects) to use as display text, and to keep track of selected option */
    field: { type: String, default: void 0 },
    /** Property of the object (if `data` is array of objects) to use as display text of group */
    groupField: { type: String, default: void 0 },
    /** Property of the object (if `data` is array of objects) to use as key to get items array of each group */
    groupOptions: { type: String, default: void 0 },
    /** Function to format an option to a string for display in the input (as alternative to field prop) */
    formatter: {
      type: Function,
      default: void 0
    },
    /** Input placeholder */
    placeholder: { type: String, default: void 0 },
    /** Makes input full width when inside a grouped or addon field */
    expanded: { type: Boolean, default: false },
    /** Makes the element rounded */
    rounded: { type: Boolean, default: false },
    /** Same as native input disabled */
    disabled: { type: Boolean, default: false },
    /** Same as native maxlength, plus character counter */
    maxlength: { type: Number, default: void 0 },
    /** Makes the component check if list reached scroll start or end and emit scroll events. */
    checkScroll: {
      type: Boolean,
      default: () => config.getOption("autocomplete.checkScroll", false)
    },
    /** Number of milliseconds to delay before to emit input event */
    debounce: {
      type: Number,
      default: () => config.getOption("autocomplete.debounce", 400)
    },
    /** The first option will always be pre-selected (easier to just hit enter or tab) */
    keepFirst: {
      type: Boolean,
      default: () => config.getOption("autocomplete.keepFirst", false)
    },
    /** Clear input text on select */
    clearOnSelect: {
      type: Boolean,
      default: () => config.getOption("autocomplete.clearOnSelect", false)
    },
    /** Open dropdown list on focus */
    openOnFocus: {
      type: Boolean,
      default: () => config.getOption("autocomplete.openOnFocus", false)
    },
    /** Keep open dropdown list after select */
    keepOpen: {
      type: Boolean,
      default: () => config.getOption("autocomplete.keepOpen", false)
    },
    /** Max height of dropdown content */
    maxHeight: {
      type: [String, Number],
      default: () => config.getOption("autocomplete.maxHeight")
    },
    /** Array of keys (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) which will add a tag when typing (default tab and enter) */
    confirmKeys: {
      type: Array,
      default: () => config.getOption("autocomplete.confirmKeys", ["Tab", "Enter"])
    },
    /** Dropdown content (items) are shown into a modal on mobile */
    mobileModal: {
      type: Boolean,
      default: () => config.getOption("autocomplete.mobileModal", false)
    },
    /** Transition name to apply on dropdown list */
    animation: {
      type: String,
      default: () => config.getOption("autocomplete.animation", "fade")
    },
    /** Trigger the select event for the first pre-selected option when clicking outside and `keep-first` is enabled */
    selectOnClickOutside: { type: Boolean, default: false },
    /** Allows the header in the autocomplete to be selectable */
    selectableHeader: { type: Boolean, default: false },
    /** Allows the footer in the autocomplete to be selectable */
    selectableFooter: { type: Boolean, default: false },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => config.getOption("autocomplete.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => config.getOption("autocomplete.icon", void 0)
    },
    /** Makes the icon clickable */
    iconClickable: { type: Boolean, default: false },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => config.getOption("autocomplete.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: false },
    /** Variant of right icon */
    iconRightVariant: { type: String, default: void 0 },
    /** Add a button/icon to clear the inputed text */
    clearable: {
      type: Boolean,
      default: () => config.getOption("autocomplete.clearable", false)
    },
    /** Icon name to be added on the clear button */
    clearIcon: {
      type: String,
      default: () => config.getOption("autocomplete.clearIcon", "close-circle")
    },
    /** Show status icon using field and variant prop */
    statusIcon: {
      type: Boolean,
      default: () => config.getOption("statusIcon", true)
    },
    /** Native options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => config.getOption("autocomplete.autocomplete", "off")
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => config.getOption("useHtml5Validation", true)
    },
    /** The message which is shown when a validation error occurs */
    validationMessage: { type: String, default: void 0 },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => config.getOption("autocomplete.teleport", false)
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the menu items */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the menu items on hover */
    itemHoverClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the menu items group title */
    itemGroupTitleClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the menu empty placeholder item */
    itemEmptyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the menu header item */
    itemHeaderClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the menu footer item */
    itemFooterClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /**
     * Classes to apply on internal input component
     * @ignore
     */
    inputClasses: {
      type: Object,
      default: () => config.getOption("autocomplete.inputClasses", {})
    }
  }, {
    "modelValue": { default: void 0 },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ vue.mergeModels(["update:modelValue", "input", "select", "select-header", "select-footer", "focus", "blur", "invalid", "icon-click", "icon-right-click", "scroll-start", "scroll-end"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    function isSpecialOption(option) {
      return option in SpecialOption;
    }
    const props = __props;
    const emits = __emit;
    const slots = vue.useSlots();
    const inputRef = vue.ref();
    const dropdownRef = vue.ref();
    const footerRef = vue.ref();
    const headerRef = vue.ref();
    const itemRefs = vue.ref([]);
    function setItemRef(el, groupIndex, itemIndex) {
      if (groupIndex === 0 && itemIndex === 0)
        itemRefs.value.splice(0);
      if (el)
        itemRefs.value.push(el);
    }
    const { checkHtml5Validity, onInvalid, onFocus, onBlur, isFocused, setFocus } = useInputHandler.useInputHandler(inputRef, emits, props);
    const vmodel = vue.useModel(__props, "modelValue");
    const isActive = vue.ref(false);
    const selectedOption = vue.ref();
    const hoveredOption = vue.ref();
    const headerHovered = vue.ref(false);
    const footerHovered = vue.ref(false);
    const hoveredId = vue.ref(null);
    const menuId = helpers.uuid();
    vue.watch(
      () => vmodel.value,
      (value) => {
        const currentValue = getValue(selectedOption.value);
        if (currentValue && currentValue !== value)
          setSelected(null, false);
        vue.nextTick(() => {
          if (isEmpty.value && !slots.empty)
            isActive.value = false;
          else if (isFocused.value && (!props.openOnFocus || value))
            isActive.value = !!value;
        });
      }
    );
    vue.watch(
      () => props.data,
      () => {
        if (props.keepFirst) {
          vue.nextTick(() => {
            if (isActive.value)
              selectFirstOption();
            else
              setHovered(null);
          });
        } else if (hoveredOption.value) {
          const hoveredValue = getValue(hoveredOption.value);
          const data = computedData.value.map((d) => d.items).reduce((a, b) => [...a, ...b], []);
          const index = data.findIndex((d) => getValue(d) === hoveredValue);
          if (index >= 0)
            vue.nextTick(() => setHoveredIdToIndex(index));
          else
            setHovered(null);
        }
      }
    );
    const computedData = vue.computed(() => {
      if (props.groupField) {
        if (props.groupOptions)
          return props.data.map((option) => {
            const group = helpers.getValueByPath(option, props.groupField);
            const items = helpers.getValueByPath(option, props.groupOptions);
            return { group, items };
          });
        else
          return Object.keys(props.data).map((group) => ({
            group,
            items: props.data[group]
          }));
      }
      if (!props.openOnFocus && !props.keepOpen && vmodel.value === "") {
        return [{ items: [] }];
      }
      return [{ items: props.data }];
    });
    const isEmpty = vue.computed(
      () => {
        var _a;
        return !((_a = computedData.value) == null ? void 0 : _a.some(
          (element) => element.items && element.items.length
        ));
      }
    );
    vue.watch(isEmpty, (empty) => {
      if (isFocused.value)
        isActive.value = !empty || !!slots.empty;
    });
    const closeableOptions = vue.computed(() => {
      const options = ["escape"];
      if (!props.keepOpen) {
        options.push("content");
        options.push("outside");
      }
      return options;
    });
    function onDropdownClose(method) {
      if (method === "outside") {
        if (props.keepFirst && hoveredOption.value && props.selectOnClickOutside)
          setSelected(hoveredOption.value, true);
      }
    }
    function getValue(option) {
      if (!option)
        return "";
      const property = props.field && typeof option === "object" ? helpers.getValueByPath(option, props.field) : option;
      const label = typeof props.formatter === "function" ? props.formatter(property) : property;
      return label || "";
    }
    function setHovered(option) {
      if (option === void 0)
        return;
      hoveredOption.value = isSpecialOption(option) ? null : option;
      headerHovered.value = option === 0;
      footerHovered.value = option === 1;
      hoveredId.value = null;
    }
    function setHoveredIdToIndex(index) {
      const element = unrefElement.unrefElement(itemRefs.value[index]);
      hoveredId.value = element ? element.id : null;
    }
    function setSelected(option, closeDropdown = true, event = void 0) {
      if (option === void 0)
        return;
      selectedOption.value = option;
      emits("select", selectedOption.value, event);
      if (selectedOption.value !== null) {
        if (props.clearOnSelect) {
          const input = inputRef.value.$el.querySelector("input");
          input.value = "";
        } else {
          vmodel.value = getValue(selectedOption.value);
        }
        setHovered(null);
      }
      if (closeDropdown)
        vue.nextTick(() => isActive.value = false);
      checkHtml5Validity();
    }
    function selectFirstOption() {
      vue.nextTick(() => {
        const nonEmptyElements = computedData.value.filter(
          (element) => element.items && element.items.length
        );
        if (nonEmptyElements.length) {
          const option = nonEmptyElements[0].items[0];
          setHovered(option);
          setHoveredIdToIndex(0);
        } else {
          setHovered(null);
        }
      });
    }
    function selectHeaderOrFooterByClick(event, origin, closeDropdown = true) {
      if (props.selectableHeader && (headerHovered.value || origin === 0)) {
        emits("select-header", event);
        if (origin)
          setHovered(null);
        if (closeDropdown)
          isActive.value = false;
      }
      if (props.selectableFooter && (footerHovered.value || origin === 1)) {
        emits("select-footer", event);
        if (origin)
          setHovered(null);
        if (closeDropdown)
          isActive.value = false;
      }
    }
    function navigateItem(direction) {
      if (!isActive.value) {
        isActive.value = true;
        return;
      }
      const data = computedData.value.map((d) => d.items).reduce((a, b) => [...a, ...b], []);
      if (headerRef.value && props.selectableHeader)
        data.unshift(void 0);
      if (footerRef.value && props.selectableFooter)
        data.push(void 0);
      let index = data.map(vue.toRaw).indexOf(vue.toRaw(hoveredOption.value));
      if (headerHovered.value)
        index = 0 + direction;
      else if (footerHovered.value)
        index = data.length - 1 + direction;
      else
        index = index + direction;
      index = index > data.length - 1 ? data.length - 1 : index;
      index = index < 0 ? 0 : index;
      if (footerRef.value && props.selectableFooter && index === data.length - 1)
        setHovered(
          1
          /* Footer */
        );
      else if (headerRef.value && props.selectableHeader && index === 0)
        setHovered(
          0
          /* Header */
        );
      else
        setHovered(data[index] !== void 0 ? data[index] : null);
      let items = itemRefs.value || [];
      if (headerRef.value && props.selectableHeader)
        items = [headerRef.value, ...items];
      if (footerRef.value && props.selectableFooter)
        items = [...items, footerRef.value];
      const element = unrefElement.unrefElement(items[index]);
      if (!element)
        return;
      hoveredId.value = element.id;
      const dropdownMenu = unrefElement.unrefElement(dropdownRef.value.$content);
      const visMin = dropdownMenu.scrollTop;
      const visMax = dropdownMenu.scrollTop + dropdownMenu.clientHeight - element.clientHeight;
      if (element.offsetTop < visMin) {
        dropdownMenu.scrollTop = element.offsetTop;
      } else if (element.offsetTop >= visMax) {
        dropdownMenu.scrollTop = element.offsetTop - dropdownMenu.clientHeight + element.clientHeight;
      }
      if (props.checkScroll)
        checkDropdownScroll();
    }
    function onKeydown(event) {
      if (event.key === "Enter")
        event.preventDefault();
      if (props.confirmKeys.indexOf(event.key) >= 0) {
        if (event.key === ",")
          event.preventDefault();
        const closeDropdown = !props.keepOpen || event.key === "Tab";
        if (hoveredOption.value === null) {
          selectHeaderOrFooterByClick(event, null, closeDropdown);
          return;
        }
        setSelected(hoveredOption.value, closeDropdown, event);
      }
    }
    function handleFocus(event) {
      if (getValue(selectedOption.value) === vmodel.value) {
        inputRef.value.$el.querySelector("input").select();
      }
      if (props.openOnFocus) {
        isActive.value = true;
        if (props.keepFirst)
          selectFirstOption();
      }
      onFocus(event);
    }
    function handleBlur(event) {
      onBlur(event);
    }
    function onInput(value) {
      const currentValue = getValue(selectedOption.value);
      if (currentValue && currentValue === vmodel.value)
        return;
      debouncedInput(value);
    }
    let debouncedInput = useDebounce.useDebounce(emitInput, props.debounce || 0);
    vue.watchEffect(() => {
      debouncedInput = useDebounce.useDebounce(emitInput, props.debounce);
    });
    function emitInput(value) {
      emits("input", value);
      checkHtml5Validity();
    }
    const computedIconRight = vue.computed(
      () => props.clearable && vmodel.value && props.clearIcon ? props.clearIcon : props.iconRight
    );
    const computedIconRightClickable = vue.computed(
      () => props.clearable ? true : props.iconRightClickable
    );
    function rightIconClick(event) {
      if (props.clearable) {
        vmodel.value = "";
        setSelected(null, false);
        if (props.openOnFocus)
          setFocus();
      } else
        emits("icon-right-click", event);
    }
    vue.onMounted(() => {
      if (ssr.isClient && props.checkScroll)
        useEventListener.useEventListener(
          "scroll",
          checkDropdownScroll,
          dropdownRef.value.$content,
          { immediate: true }
        );
    });
    function checkDropdownScroll() {
      var _a, _b;
      const dropdown = unrefElement.unrefElement(dropdownRef.value.$content);
      if (!dropdown)
        return;
      const trashhold = dropdown.offsetTop;
      const headerHeight = ((_a = headerRef.value) == null ? void 0 : _a.clientHeight) || 0;
      const footerHeight = (((_b = footerRef.value) == null ? void 0 : _b.clientHeight) || 0) + trashhold;
      if (dropdown.clientHeight !== dropdown.scrollHeight) {
        if (dropdown.scrollTop + dropdown.clientHeight + footerHeight >= dropdown.scrollHeight) {
          emits("scroll-end");
        } else if (dropdown.scrollTop <= headerHeight) {
          emits("scroll-start");
        }
      }
    }
    const attrs = vue.useAttrs();
    const inputBind = vue.computed(() => ({
      ...attrs,
      ...props.inputClasses
    }));
    const rootClasses = defineClasses.defineClasses(["rootClass", "o-acp"]);
    const itemClasses = defineClasses.defineClasses(["itemClass", "o-acp__item"]);
    const itemEmptyClasses = defineClasses.defineClasses([
      "itemEmptyClass",
      "o-acp__item--empty"
    ]);
    const itemGroupClasses = defineClasses.defineClasses([
      "itemGroupTitleClass",
      "o-acp__item-group-title"
    ]);
    const itemHeaderClasses = defineClasses.defineClasses(
      ["itemHeaderClass", "o-acp__item-header"],
      ["itemHoverClass", "o-acp__item--hover", null, headerHovered]
    );
    const itemFooterClasses = defineClasses.defineClasses(
      ["itemFooterClass", "o-acp__item-footer"],
      ["itemHoverClass", "o-acp__item--hover", null, footerHovered]
    );
    function itemOptionClasses(option) {
      const optionClasses = defineClasses.defineClasses([
        "itemHoverClass",
        "o-acp__item--hover",
        null,
        vue.toRaw(option) === vue.toRaw(hoveredOption.value)
      ]);
      return [...itemClasses.value, ...optionClasses.value];
    }
    __expose({ focus: setFocus });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(DropdownItem_vue_vue_type_script_setup_true_lang._sfc_main, {
        ref_key: "dropdownRef",
        ref: dropdownRef,
        modelValue: selectedOption.value,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => selectedOption.value = $event),
        active: isActive.value,
        "onUpdate:active": _cache[8] || (_cache[8] = ($event) => isActive.value = $event),
        "data-oruga": "autocomplete",
        class: vue.normalizeClass(vue.unref(rootClasses)),
        "menu-id": vue.unref(menuId),
        "menu-tabindex": -1,
        "menu-tag": __props.menuTag,
        scrollable: "",
        "aria-role": "listbox",
        tabindex: -1,
        "trap-focus": false,
        triggers: [],
        disabled: __props.disabled,
        closeable: closeableOptions.value,
        "mobile-modal": __props.mobileModal,
        "max-height": __props.maxHeight,
        animation: __props.animation,
        position: __props.position,
        teleport: __props.teleport,
        expanded: __props.expanded,
        onClose: onDropdownClose
      }, {
        trigger: vue.withCtx(() => [
          vue.createVNode(Input_vue_vue_type_script_setup_true_lang._sfc_main, vue.mergeProps({
            ref_key: "inputRef",
            ref: inputRef
          }, inputBind.value, {
            modelValue: vmodel.value,
            "onUpdate:modelValue": [
              _cache[0] || (_cache[0] = ($event) => vmodel.value = $event),
              onInput
            ],
            type: __props.type,
            size: __props.size,
            rounded: __props.rounded,
            icon: __props.icon,
            "icon-right": computedIconRight.value,
            "icon-right-clickable": computedIconRightClickable.value,
            "icon-pack": __props.iconPack,
            placeholder: __props.placeholder,
            maxlength: __props.maxlength,
            autocomplete: __props.autocomplete,
            "use-html5-validation": false,
            role: "combobox",
            "aria-activedescendant": hoveredId.value,
            "aria-autocomplete": __props.keepFirst ? "both" : "list",
            "aria-controls": vue.unref(menuId),
            "aria-expanded": isActive.value,
            expanded: __props.expanded,
            disabled: __props.disabled,
            "status-icon": __props.statusIcon,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onInvalid: vue.unref(onInvalid),
            onKeydown: [
              onKeydown,
              _cache[1] || (_cache[1] = vue.withKeys(vue.withModifiers(($event) => navigateItem(-1), ["prevent"]), ["up"])),
              _cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers(($event) => navigateItem(1), ["prevent"]), ["down"]))
            ],
            onIconClick: _cache[3] || (_cache[3] = (event) => _ctx.$emit("icon-click", event)),
            onIconRightClick: rightIconClick
          }), null, 16, ["modelValue", "type", "size", "rounded", "icon", "icon-right", "icon-right-clickable", "icon-pack", "placeholder", "maxlength", "autocomplete", "aria-activedescendant", "aria-autocomplete", "aria-controls", "aria-expanded", "expanded", "disabled", "status-icon", "onInvalid"])
        ]),
        default: vue.withCtx(() => [
          _ctx.$slots.header ? (vue.openBlock(), vue.createBlock(DropdownItem_vue_vue_type_script_setup_true_lang._sfc_main$1, {
            key: 0,
            id: `${vue.unref(menuId)}-header`,
            ref_key: "headerRef",
            ref: headerRef,
            tag: __props.itemTag,
            "aria-role": "option",
            "aria-selected": headerHovered.value,
            tabindex: -1,
            class: vue.normalizeClass([...vue.unref(itemClasses), ...vue.unref(itemHeaderClasses)]),
            onClick: _cache[4] || (_cache[4] = (v, e) => selectHeaderOrFooterByClick(
              e,
              0
              /* Header */
            ))
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "header")
            ]),
            _: 3
          }, 8, ["id", "tag", "aria-selected", "class"])) : vue.createCommentVNode("", true),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(computedData.value, (element, groupindex) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              element.group ? (vue.openBlock(), vue.createBlock(DropdownItem_vue_vue_type_script_setup_true_lang._sfc_main$1, {
                key: groupindex + "group",
                tag: __props.itemTag,
                tabindex: -1,
                class: vue.normalizeClass([...vue.unref(itemClasses), ...vue.unref(itemGroupClasses)])
              }, {
                default: vue.withCtx(() => [
                  _ctx.$slots.group ? vue.renderSlot(_ctx.$slots, "group", {
                    key: 0,
                    group: element.group,
                    index: groupindex
                  }) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, vue.toDisplayString(element.group), 1))
                ]),
                _: 2
              }, 1032, ["tag", "class"])) : vue.createCommentVNode("", true),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(element.items, (option, index) => {
                return vue.openBlock(), vue.createBlock(DropdownItem_vue_vue_type_script_setup_true_lang._sfc_main$1, {
                  id: `${vue.unref(menuId)}-${groupindex}-${index}`,
                  key: groupindex + ":" + index,
                  ref_for: true,
                  ref: (el) => setItemRef(el, groupindex, index),
                  value: option,
                  tag: __props.itemTag,
                  class: vue.normalizeClass(itemOptionClasses(option)),
                  "aria-role": "option",
                  "aria-selected": vue.toRaw(option) === vue.toRaw(hoveredOption.value),
                  tabindex: -1,
                  onClick: _cache[5] || (_cache[5] = (value, event) => setSelected(value, !__props.keepOpen, event))
                }, {
                  default: vue.withCtx(() => [
                    _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", {
                      key: 0,
                      option,
                      value: getValue(option),
                      index
                    }) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(getValue(option)), 1))
                  ]),
                  _: 2
                }, 1032, ["id", "value", "tag", "class", "aria-selected"]);
              }), 128))
            ], 64);
          }), 256)),
          isEmpty.value && _ctx.$slots.empty ? (vue.openBlock(), vue.createBlock(DropdownItem_vue_vue_type_script_setup_true_lang._sfc_main$1, {
            key: 1,
            tag: __props.itemTag,
            class: vue.normalizeClass([...vue.unref(itemClasses), ...vue.unref(itemEmptyClasses)])
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "empty")
            ]),
            _: 3
          }, 8, ["tag", "class"])) : vue.createCommentVNode("", true),
          _ctx.$slots.footer ? (vue.openBlock(), vue.createBlock(DropdownItem_vue_vue_type_script_setup_true_lang._sfc_main$1, {
            key: 2,
            id: `${vue.unref(menuId)}-footer`,
            ref_key: "footerRef",
            ref: footerRef,
            tag: __props.itemTag,
            "aria-role": "option",
            "aria-selected": footerHovered.value,
            tabindex: -1,
            class: vue.normalizeClass([...vue.unref(itemClasses), ...vue.unref(itemFooterClasses)]),
            onClick: _cache[6] || (_cache[6] = (v, e) => selectHeaderOrFooterByClick(
              e,
              1
              /* Footer */
            ))
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "footer")
            ]),
            _: 3
          }, 8, ["id", "tag", "aria-selected", "class"])) : vue.createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["modelValue", "active", "class", "menu-id", "menu-tag", "disabled", "closeable", "mobile-modal", "max-height", "animation", "position", "teleport", "expanded"]);
    };
  }
});
exports._sfc_main = _sfc_main;
//# sourceMappingURL=Autocomplete.vue_vue_type_script_setup_true_lang-CAyT8Fls.cjs.map
