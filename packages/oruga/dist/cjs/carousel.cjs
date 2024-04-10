"use strict";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const Icon_vue_vue_type_script_setup_true_lang = require("./Icon.vue_vue_type_script_setup_true_lang-CGDJNR6y.cjs");
const config = require("./config-JkCO4AEi.cjs");
const helpers = require("./helpers.cjs");
const ssr = require("./ssr-BN_zM9RT.cjs");
const defineClasses = require("./defineClasses-BgXL7M9C.cjs");
const usePropValue = require("./usePropValue-CHGN8et-.cjs");
const useEventListener = require("./useEventListener-rp1-mRkR.cjs");
const useParentProvider = require("./useParentProvider-BknvMzPy.cjs");
const _hoisted_1$1 = ["onFocus", "onMouseover", "onClick", "onKeypress"];
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OCarousel",
    configField: "carousel"
  },
  __name: "Carousel",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: Number, default: 0 },
    /** Enable drag mode */
    dragable: { type: Boolean, default: true },
    /** Timer interval for `autoplay` */
    interval: {
      type: Number,
      default: () => config.getOption("carousel.interval", 3500)
    },
    /** Move item automaticalls after `interval` */
    autoplay: { type: Boolean, default: false },
    /** Pause autoplay on hover */
    pauseHover: { type: Boolean, default: false },
    /** Repeat from the beginning after reaching the end */
    repeat: { type: Boolean, default: false },
    /** Show an overlay */
    overlay: { type: Boolean, default: false },
    /** Enable indicators */
    indicators: { type: Boolean, default: true },
    /** Place indicators inside the carousel */
    indicatorInside: { type: Boolean, default: false },
    /**
     * Indicator interaction mode
     * @values click, hover
     */
    indicatorMode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].indexOf(value) >= 0
    },
    /** Position of the indicator - depends on used theme */
    indicatorPosition: {
      type: String,
      default: () => config.getOption("carousel.indicatorPosition", "bottom")
    },
    /** Style of the indicator - depends on used theme */
    indicatorStyle: {
      type: String,
      default: () => config.getOption("carousel.indicatorStyle", "dots")
    },
    /** Number of items to show at once*/
    itemsToShow: {
      type: Number,
      default: () => config.getOption("carousel.itemsToShow", 1)
    },
    /** Number of items to switch at once */
    itemsToList: {
      type: Number,
      default: () => config.getOption("carousel.itemsToList", 1)
    },
    /** Show next / prev arrows */
    arrows: {
      type: Boolean,
      default: () => config.getOption("carousel.arrows", true)
    },
    /** Show next / prev arrows only on hover */
    arrowsHover: {
      type: Boolean,
      default: () => config.getOption("carousel.arrowsHover", true)
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => config.getOption("carousel.iconPack")
    },
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
      type: String,
      default: () => config.getOption("carousel.iconSize")
    },
    /** Icon name for previous icon */
    iconPrev: {
      type: String,
      default: () => config.getOption("carousel.iconPrev", "chevron-left")
    },
    /** Icon name for next icon */
    iconNext: {
      type: String,
      default: () => config.getOption("carousel.iconNext", "chevron-right")
    },
    /** Define these props for different screen sizes */
    breakpoints: {
      type: Object,
      default: () => ({})
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the root element in overlay */
    overlayClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the wrapper element of carousel items */
    wrapperClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of slider items */
    itemsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of slider items on drag */
    itemsDraggingClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of arrow elements */
    arrowIconClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of prev arrow element */
    arrowIconPrevClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of next arrow element */
    arrowIconNextClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of indicator link element */
    indicatorClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of indicators wrapper element */
    indicatorsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of indicators wrapper element when inside */
    indicatorsInsideClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of indicators wrapper element when inside and position */
    indicatorsInsidePositionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of indicator item element */
    indicatorItemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of indicator element when is active */
    indicatorItemActiveClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of indicator element to separate different styles */
    indicatorItemStyleClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:modelValue", "scroll", "click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootRef = vue.ref();
    function restartTimer() {
      pauseTimer();
      startTimer();
    }
    const provideData = vue.computed(() => ({
      restartTimer,
      itemWidth: itemWidth.value,
      activeIndex: scrollIndex.value,
      onClick: (event) => emits("click", event),
      setActive: (index2) => switchTo(index2)
    }));
    const { childItems } = useParentProvider.useProviderParent(rootRef, { data: provideData });
    const activeIndex = usePropValue.useVModelBinding(props, emits);
    const scrollIndex = vue.ref(props.modelValue);
    const resizeObserver = vue.ref(null);
    const windowWidth = vue.ref(0);
    const refresh_ = vue.ref(0);
    vue.watch(
      () => props.modelValue,
      (value) => {
        if (value <= childItems.value.length - 1)
          switchTo(value * settings.value.itemsToList, true);
      }
    );
    vue.watch([() => props.itemsToList, () => props.itemsToShow], () => onRefresh());
    vue.onMounted(() => {
      if (ssr.isClient) {
        if (window.ResizeObserver) {
          resizeObserver.value = new window.ResizeObserver(onRefresh);
          resizeObserver.value.observe(rootRef.value);
        }
        onResized();
        startTimer();
      }
    });
    vue.onBeforeUnmount(() => {
      if (ssr.isClient) {
        if (window.ResizeObserver)
          resizeObserver.value.disconnect();
        dragEnd();
        pauseTimer();
      }
    });
    if (ssr.isClient) {
      useEventListener.useEventListener("resize", onResized, window);
      useEventListener.useEventListener("animationend", onRefresh);
      useEventListener.useEventListener("transitionend", onRefresh);
      useEventListener.useEventListener("transitionstart", onRefresh);
    }
    function onResized() {
      windowWidth.value = window.innerWidth;
    }
    function onRefresh() {
      vue.nextTick(() => refresh_.value++);
    }
    const settings = vue.computed(() => {
      const breakpoints = Object.keys(props.breakpoints).map(Number).sort((a, b) => b - a);
      const breakpoint = breakpoints.filter(
        (breakpoint2) => windowWidth.value >= breakpoint2
      )[0];
      const settings2 = vue.toRaw(
        breakpoint ? { ...props, ...props.breakpoints[breakpoint] } : props
      );
      if (!settings2.itemsToList)
        settings2.itemsToList = 1;
      if (!settings2.itemsToShow)
        settings2.itemsToShow = 1;
      return vue.readonly(settings2);
    });
    const itemWidth = vue.computed(() => {
      if (!windowWidth.value)
        return 0;
      refresh_.value;
      const rect = rootRef.value.getBoundingClientRect();
      return rect.width / settings.value.itemsToShow;
    });
    const translation = vue.computed(
      () => -helpers.bound(
        delta.value + scrollIndex.value * itemWidth.value,
        0,
        (childItems.value.length - settings.value.itemsToShow) * itemWidth.value
      )
    );
    const total = vue.computed(() => childItems.value.length);
    const indicatorCount = vue.computed(
      () => Math.ceil(total.value / settings.value.itemsToList)
    );
    const indicatorIndex = vue.computed(
      () => Math.ceil(scrollIndex.value / settings.value.itemsToList)
    );
    const hasArrows = vue.computed(
      () => settings.value.arrowsHover && isHovered.value || !settings.value.arrowsHover
    );
    const hasPrev = vue.computed(
      () => (settings.value.repeat || scrollIndex.value > 0) && hasArrows.value
    );
    function onPrev() {
      switchTo(scrollIndex.value - settings.value.itemsToList);
    }
    const hasNext = vue.computed(
      () => (settings.value.repeat || scrollIndex.value < total.value - 1) && hasArrows.value
    );
    function onNext() {
      switchTo(scrollIndex.value + settings.value.itemsToList);
    }
    function switchTo(index2, onlyMove) {
      if (settings.value.repeat)
        index2 = helpers.mod(index2, total.value);
      index2 = helpers.bound(index2, 0, total.value);
      scrollIndex.value = index2;
      emits("scroll", indicatorIndex.value);
      if (!onlyMove)
        activeIndex.value = Math.ceil(index2 / settings.value.itemsToList);
    }
    function onModeChange(trigger, index2) {
      if (props.indicatorMode === trigger)
        switchTo(index2 * settings.value.itemsToList);
    }
    const isHovered = vue.ref(false);
    const isPaused = vue.ref(false);
    const timer = vue.ref(null);
    function onMouseEnter() {
      isHovered.value = true;
      checkPause();
    }
    function onMouseLeave() {
      isHovered.value = false;
      startTimer();
    }
    vue.watch(
      () => props.autoplay,
      (status) => {
        if (status)
          startTimer();
        else
          pauseTimer();
      }
    );
    vue.watch(
      () => props.repeat,
      (status) => {
        if (status)
          startTimer();
      }
    );
    function startTimer() {
      if (!props.autoplay || timer.value)
        return;
      isPaused.value = false;
      timer.value = setInterval(() => {
        if (!props.repeat && !hasNext.value)
          pauseTimer();
        else
          onNext();
      }, props.interval);
    }
    function pauseTimer() {
      isPaused.value = true;
      if (timer.value) {
        clearInterval(timer.value);
        timer.value = null;
      }
    }
    function checkPause() {
      if (props.pauseHover && props.autoplay)
        pauseTimer();
    }
    const isTouch = vue.ref(false);
    const dragX = vue.ref();
    const hold = vue.ref(0);
    const delta = vue.ref(0);
    const isDragging = vue.computed(() => helpers.isDefined(dragX.value));
    function onDragStart(event) {
      if (isDragging.value || !settings.value.dragable || event.button !== 0 && event.type !== "touchstart")
        return;
      hold.value = Date.now();
      isTouch.value = !!event.touches;
      dragX.value = isTouch.value ? event.touches[0].clientX : event.clientX;
      if (isTouch.value) {
        pauseTimer();
      }
      if (ssr.isClient) {
        window.addEventListener(
          isTouch.value ? "touchmove" : "mousemove",
          dragMove
        );
        window.addEventListener(
          isTouch.value ? "touchend" : "mouseup",
          dragEnd
        );
      }
    }
    function dragMove(event) {
      if (!isDragging.value)
        return;
      const dragEndX = event.touches ? (event.changedTouches[0] || event.touches[0]).clientX : event.clientX;
      delta.value = dragX.value - dragEndX;
      if (!event.touches)
        event.preventDefault();
    }
    function dragEnd(event) {
      if (!isDragging.value && !hold.value)
        return;
      if (hold.value) {
        const signCheck = helpers.sign(delta.value);
        const results = Math.round(
          Math.abs(delta.value / itemWidth.value) + 0.15
        );
        switchTo(scrollIndex.value + signCheck * results);
      }
      delta.value = 0;
      dragX.value = void 0;
      if (event == null ? void 0 : event.touches)
        startTimer();
      if (ssr.isClient) {
        window.removeEventListener(
          isTouch.value ? "touchmove" : "mousemove",
          dragMove
        );
        window.removeEventListener(
          isTouch.value ? "touchend" : "mouseup",
          dragEnd
        );
      }
    }
    const rootClasses = defineClasses.defineClasses(
      ["rootClass", "o-car"],
      ["overlayClass", "o-car__overlay", null, vue.computed(() => props.overlay)]
    );
    const wrapperClasses = defineClasses.defineClasses(["wrapperClass", "o-car__wrapper"]);
    const itemsClasses = defineClasses.defineClasses(
      ["itemsClass", "o-car__items"],
      ["itemsDraggingClass", "o-car__items--dragging", null, isDragging]
    );
    const arrowIconClasses = defineClasses.defineClasses([
      "arrowIconClass",
      "o-car__arrow__icon"
    ]);
    const arrowIconPrevClasses = defineClasses.defineClasses([
      "arrowIconPrevClass",
      "o-car__arrow__icon-prev"
    ]);
    const arrowIconNextClasses = defineClasses.defineClasses([
      "arrowIconNextClass",
      "o-car__arrow__icon-next"
    ]);
    function indicatorItemClasses(index2) {
      return defineClasses.defineClasses(
        ["indicatorItemClass", "o-car__indicator__item"],
        [
          "indicatorItemActiveClass",
          "o-car__indicator__item--active",
          null,
          indicatorIndex.value === index2
        ],
        [
          "indicatorItemStyleClass",
          "o-car__indicator__item--",
          props.indicatorStyle,
          !!props.indicatorStyle
        ]
      ).value;
    }
    const indicatorsClasses = defineClasses.defineClasses(
      ["indicatorsClass", "o-car__indicators"],
      [
        "indicatorsInsideClass",
        "o-car__indicators--inside",
        null,
        vue.computed(() => !!props.indicatorInside)
      ],
      [
        "indicatorsInsidePositionClass",
        "o-car__indicators--inside--",
        vue.computed(() => props.indicatorPosition),
        vue.computed(() => props.indicatorInside && !!props.indicatorPosition)
      ]
    );
    const indicatorClasses = defineClasses.defineClasses(["indicatorClass", "o-car__indicator"]);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "rootRef",
        ref: rootRef,
        class: vue.normalizeClass(vue.unref(rootClasses)),
        "data-oruga": "carousel",
        role: "region",
        onMouseover: onMouseEnter,
        onMouseleave: onMouseLeave,
        onFocus: onMouseEnter,
        onBlur: onMouseLeave,
        onKeydown: [
          vue.withKeys(onPrev, ["left"]),
          vue.withKeys(onNext, ["right"])
        ]
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(wrapperClasses))
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(itemsClasses)),
            style: vue.normalizeStyle("transform:translateX(" + translation.value + "px)"),
            tabindex: "0",
            role: "group",
            draggable: "true",
            "aria-roledescription": "carousel",
            onMousedown: onDragStart,
            onTouchstart: onDragStart
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 38),
          vue.renderSlot(_ctx.$slots, "arrow", {
            hasPrev: hasPrev.value,
            prev: onPrev,
            hasNext: hasNext.value,
            next: onNext
          }, () => [
            __props.arrows ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              vue.withDirectives(vue.createVNode(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
                class: vue.normalizeClass([...vue.unref(arrowIconClasses), ...vue.unref(arrowIconPrevClasses)]),
                pack: __props.iconPack,
                icon: __props.iconPrev,
                size: __props.iconSize,
                both: "",
                role: "button",
                tabindex: "0",
                onClick: onPrev,
                onKeydown: vue.withKeys(onPrev, ["enter"])
              }, null, 8, ["class", "pack", "icon", "size"]), [
                [vue.vShow, hasPrev.value]
              ]),
              vue.withDirectives(vue.createVNode(Icon_vue_vue_type_script_setup_true_lang._sfc_main, {
                class: vue.normalizeClass([...vue.unref(arrowIconClasses), ...vue.unref(arrowIconNextClasses)]),
                pack: __props.iconPack,
                icon: __props.iconNext,
                size: __props.iconSize,
                both: "",
                role: "button",
                tabindex: "0",
                onClick: onNext,
                onKeydown: vue.withKeys(onNext, ["enter"])
              }, null, 8, ["class", "pack", "icon", "size"]), [
                [vue.vShow, hasNext.value]
              ])
            ], 64)) : vue.createCommentVNode("", true)
          ])
        ], 2),
        vue.renderSlot(_ctx.$slots, "indicators", {
          active: vue.unref(activeIndex),
          switchTo,
          indicatorIndex: indicatorIndex.value
        }, () => [
          vue.unref(childItems).length ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            __props.indicators ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass(vue.unref(indicatorsClasses)),
              role: "group"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(indicatorCount.value, (_, index2) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: index2,
                  class: vue.normalizeClass(vue.unref(indicatorClasses)),
                  role: "button",
                  tabindex: "0",
                  onFocus: ($event) => onModeChange("hover", index2),
                  onMouseover: ($event) => onModeChange("hover", index2),
                  onClick: ($event) => onModeChange("click", index2),
                  onKeypress: vue.withKeys(($event) => onModeChange("click", index2), ["enter"])
                }, [
                  vue.renderSlot(_ctx.$slots, "indicator", { index: index2 }, () => [
                    vue.createElementVNode("span", {
                      class: vue.normalizeClass(indicatorItemClasses(index2))
                    }, null, 2)
                  ])
                ], 42, _hoisted_1$1);
              }), 128))
            ], 2)) : vue.createCommentVNode("", true)
          ], 64)) : vue.createCommentVNode("", true)
        ]),
        __props.overlay ? vue.renderSlot(_ctx.$slots, "overlay", { key: 0 }) : vue.createCommentVNode("", true)
      ], 34);
    };
  }
});
const _hoisted_1 = ["data-id", "role", "aria-selected"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    isOruga: true,
    name: "OCarouselItem",
    configField: "carousel"
  },
  __name: "CarouselItem",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Make item clickable */
    clickable: { type: Boolean, default: false },
    /** Role attribute to be passed to the div wrapper for better accessibility */
    ariaRole: {
      type: String,
      default: () => config.getOption("carousel.ariaRole", "option")
    },
    // class props (will not be displayed in the docs)
    /** Class of carousel item */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of carousel item when is active */
    itemActiveClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of carousel item when is clickable */
    itemClickableClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const { parent, item } = useParentProvider.useProviderChild();
    const isActive = vue.computed(() => parent.value.activeIndex === item.value.index);
    const itemStyle = vue.computed(() => ({ width: `${parent.value.itemWidth}px` }));
    function onClick(event) {
      if (isActive.value)
        parent.value.onClick(event);
      if (props.clickable)
        parent.value.setActive(item.value.index);
    }
    const itemClasses = defineClasses.defineClasses(
      ["itemClass", "o-car__item"],
      ["itemActiveClass", "o-car__item--active", null, isActive],
      [
        "itemClickableClass",
        "o-car__item--clickable",
        null,
        vue.computed(() => props.clickable)
      ]
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(itemClasses)),
        style: vue.normalizeStyle(itemStyle.value),
        "data-id": `carousel-${vue.unref(item).identifier}`,
        "data-oruga": "carousel-item",
        role: __props.ariaRole,
        "aria-roledescription": "item",
        "aria-selected": isActive.value,
        onClick,
        onKeypress: vue.withKeys(onClick, ["enter"])
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 46, _hoisted_1);
    };
  }
});
const index = {
  install(app) {
    config.registerComponent(app, _sfc_main$1);
    config.registerComponent(app, _sfc_main);
  }
};
exports.OCarousel = _sfc_main$1;
exports.OCarouselItem = _sfc_main;
exports.default = index;
//# sourceMappingURL=carousel.cjs.map
