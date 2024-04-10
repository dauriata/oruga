/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, ref, computed, watch, onMounted, onBeforeUnmount, nextTick, toRaw, readonly, openBlock, createElementBlock, normalizeClass, unref, withKeys, createElementVNode, normalizeStyle, renderSlot, Fragment, withDirectives, createVNode, vShow, createCommentVNode, renderList } from "vue";
import { _ as _sfc_main$2 } from "./Icon.vue_vue_type_script_setup_true_lang-BfJM6xYp.mjs";
import { g as getOption, b as registerComponent } from "./config-zKhnAIV0.mjs";
import { bound, mod, isDefined, sign } from "./helpers.mjs";
import { i as isClient } from "./ssr-BIBU2UWo.mjs";
import { d as defineClasses } from "./defineClasses-uo4lMA-t.mjs";
import { u as useVModelBinding } from "./usePropValue-DLZTRe_e.mjs";
import { u as useEventListener } from "./useEventListener-B3_nr73L.mjs";
import { u as useProviderParent, a as useProviderChild } from "./useParentProvider-C8ssHz7C.mjs";
const _hoisted_1$1 = ["onFocus", "onMouseover", "onClick", "onKeypress"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      default: () => getOption("carousel.interval", 3500)
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
      default: () => getOption("carousel.indicatorPosition", "bottom")
    },
    /** Style of the indicator - depends on used theme */
    indicatorStyle: {
      type: String,
      default: () => getOption("carousel.indicatorStyle", "dots")
    },
    /** Number of items to show at once*/
    itemsToShow: {
      type: Number,
      default: () => getOption("carousel.itemsToShow", 1)
    },
    /** Number of items to switch at once */
    itemsToList: {
      type: Number,
      default: () => getOption("carousel.itemsToList", 1)
    },
    /** Show next / prev arrows */
    arrows: {
      type: Boolean,
      default: () => getOption("carousel.arrows", true)
    },
    /** Show next / prev arrows only on hover */
    arrowsHover: {
      type: Boolean,
      default: () => getOption("carousel.arrowsHover", true)
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => getOption("carousel.iconPack")
    },
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
      type: String,
      default: () => getOption("carousel.iconSize")
    },
    /** Icon name for previous icon */
    iconPrev: {
      type: String,
      default: () => getOption("carousel.iconPrev", "chevron-left")
    },
    /** Icon name for next icon */
    iconNext: {
      type: String,
      default: () => getOption("carousel.iconNext", "chevron-right")
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
    const rootRef = ref();
    function restartTimer() {
      pauseTimer();
      startTimer();
    }
    const provideData = computed(() => ({
      restartTimer,
      itemWidth: itemWidth.value,
      activeIndex: scrollIndex.value,
      onClick: (event) => emits("click", event),
      setActive: (index2) => switchTo(index2)
    }));
    const { childItems } = useProviderParent(rootRef, { data: provideData });
    const activeIndex = useVModelBinding(props, emits);
    const scrollIndex = ref(props.modelValue);
    const resizeObserver = ref(null);
    const windowWidth = ref(0);
    const refresh_ = ref(0);
    watch(
      () => props.modelValue,
      (value) => {
        if (value <= childItems.value.length - 1)
          switchTo(value * settings.value.itemsToList, true);
      }
    );
    watch([() => props.itemsToList, () => props.itemsToShow], () => onRefresh());
    onMounted(() => {
      if (isClient) {
        if (window.ResizeObserver) {
          resizeObserver.value = new window.ResizeObserver(onRefresh);
          resizeObserver.value.observe(rootRef.value);
        }
        onResized();
        startTimer();
      }
    });
    onBeforeUnmount(() => {
      if (isClient) {
        if (window.ResizeObserver)
          resizeObserver.value.disconnect();
        dragEnd();
        pauseTimer();
      }
    });
    if (isClient) {
      useEventListener("resize", onResized, window);
      useEventListener("animationend", onRefresh);
      useEventListener("transitionend", onRefresh);
      useEventListener("transitionstart", onRefresh);
    }
    function onResized() {
      windowWidth.value = window.innerWidth;
    }
    function onRefresh() {
      nextTick(() => refresh_.value++);
    }
    const settings = computed(() => {
      const breakpoints = Object.keys(props.breakpoints).map(Number).sort((a, b) => b - a);
      const breakpoint = breakpoints.filter(
        (breakpoint2) => windowWidth.value >= breakpoint2
      )[0];
      const settings2 = toRaw(
        breakpoint ? { ...props, ...props.breakpoints[breakpoint] } : props
      );
      if (!settings2.itemsToList)
        settings2.itemsToList = 1;
      if (!settings2.itemsToShow)
        settings2.itemsToShow = 1;
      return readonly(settings2);
    });
    const itemWidth = computed(() => {
      if (!windowWidth.value)
        return 0;
      refresh_.value;
      const rect = rootRef.value.getBoundingClientRect();
      return rect.width / settings.value.itemsToShow;
    });
    const translation = computed(
      () => -bound(
        delta.value + scrollIndex.value * itemWidth.value,
        0,
        (childItems.value.length - settings.value.itemsToShow) * itemWidth.value
      )
    );
    const total = computed(() => childItems.value.length);
    const indicatorCount = computed(
      () => Math.ceil(total.value / settings.value.itemsToList)
    );
    const indicatorIndex = computed(
      () => Math.ceil(scrollIndex.value / settings.value.itemsToList)
    );
    const hasArrows = computed(
      () => settings.value.arrowsHover && isHovered.value || !settings.value.arrowsHover
    );
    const hasPrev = computed(
      () => (settings.value.repeat || scrollIndex.value > 0) && hasArrows.value
    );
    function onPrev() {
      switchTo(scrollIndex.value - settings.value.itemsToList);
    }
    const hasNext = computed(
      () => (settings.value.repeat || scrollIndex.value < total.value - 1) && hasArrows.value
    );
    function onNext() {
      switchTo(scrollIndex.value + settings.value.itemsToList);
    }
    function switchTo(index2, onlyMove) {
      if (settings.value.repeat)
        index2 = mod(index2, total.value);
      index2 = bound(index2, 0, total.value);
      scrollIndex.value = index2;
      emits("scroll", indicatorIndex.value);
      if (!onlyMove)
        activeIndex.value = Math.ceil(index2 / settings.value.itemsToList);
    }
    function onModeChange(trigger, index2) {
      if (props.indicatorMode === trigger)
        switchTo(index2 * settings.value.itemsToList);
    }
    const isHovered = ref(false);
    const isPaused = ref(false);
    const timer = ref(null);
    function onMouseEnter() {
      isHovered.value = true;
      checkPause();
    }
    function onMouseLeave() {
      isHovered.value = false;
      startTimer();
    }
    watch(
      () => props.autoplay,
      (status) => {
        if (status)
          startTimer();
        else
          pauseTimer();
      }
    );
    watch(
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
    const isTouch = ref(false);
    const dragX = ref();
    const hold = ref(0);
    const delta = ref(0);
    const isDragging = computed(() => isDefined(dragX.value));
    function onDragStart(event) {
      if (isDragging.value || !settings.value.dragable || event.button !== 0 && event.type !== "touchstart")
        return;
      hold.value = Date.now();
      isTouch.value = !!event.touches;
      dragX.value = isTouch.value ? event.touches[0].clientX : event.clientX;
      if (isTouch.value) {
        pauseTimer();
      }
      if (isClient) {
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
        const signCheck = sign(delta.value);
        const results = Math.round(
          Math.abs(delta.value / itemWidth.value) + 0.15
        );
        switchTo(scrollIndex.value + signCheck * results);
      }
      delta.value = 0;
      dragX.value = void 0;
      if (event == null ? void 0 : event.touches)
        startTimer();
      if (isClient) {
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
    const rootClasses = defineClasses(
      ["rootClass", "o-car"],
      ["overlayClass", "o-car__overlay", null, computed(() => props.overlay)]
    );
    const wrapperClasses = defineClasses(["wrapperClass", "o-car__wrapper"]);
    const itemsClasses = defineClasses(
      ["itemsClass", "o-car__items"],
      ["itemsDraggingClass", "o-car__items--dragging", null, isDragging]
    );
    const arrowIconClasses = defineClasses([
      "arrowIconClass",
      "o-car__arrow__icon"
    ]);
    const arrowIconPrevClasses = defineClasses([
      "arrowIconPrevClass",
      "o-car__arrow__icon-prev"
    ]);
    const arrowIconNextClasses = defineClasses([
      "arrowIconNextClass",
      "o-car__arrow__icon-next"
    ]);
    function indicatorItemClasses(index2) {
      return defineClasses(
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
    const indicatorsClasses = defineClasses(
      ["indicatorsClass", "o-car__indicators"],
      [
        "indicatorsInsideClass",
        "o-car__indicators--inside",
        null,
        computed(() => !!props.indicatorInside)
      ],
      [
        "indicatorsInsidePositionClass",
        "o-car__indicators--inside--",
        computed(() => props.indicatorPosition),
        computed(() => props.indicatorInside && !!props.indicatorPosition)
      ]
    );
    const indicatorClasses = defineClasses(["indicatorClass", "o-car__indicator"]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "rootRef",
        ref: rootRef,
        class: normalizeClass(unref(rootClasses)),
        "data-oruga": "carousel",
        role: "region",
        onMouseover: onMouseEnter,
        onMouseleave: onMouseLeave,
        onFocus: onMouseEnter,
        onBlur: onMouseLeave,
        onKeydown: [
          withKeys(onPrev, ["left"]),
          withKeys(onNext, ["right"])
        ]
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(wrapperClasses))
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(itemsClasses)),
            style: normalizeStyle("transform:translateX(" + translation.value + "px)"),
            tabindex: "0",
            role: "group",
            draggable: "true",
            "aria-roledescription": "carousel",
            onMousedown: onDragStart,
            onTouchstart: onDragStart
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 38),
          renderSlot(_ctx.$slots, "arrow", {
            hasPrev: hasPrev.value,
            prev: onPrev,
            hasNext: hasNext.value,
            next: onNext
          }, () => [
            __props.arrows ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              withDirectives(createVNode(_sfc_main$2, {
                class: normalizeClass([...unref(arrowIconClasses), ...unref(arrowIconPrevClasses)]),
                pack: __props.iconPack,
                icon: __props.iconPrev,
                size: __props.iconSize,
                both: "",
                role: "button",
                tabindex: "0",
                onClick: onPrev,
                onKeydown: withKeys(onPrev, ["enter"])
              }, null, 8, ["class", "pack", "icon", "size"]), [
                [vShow, hasPrev.value]
              ]),
              withDirectives(createVNode(_sfc_main$2, {
                class: normalizeClass([...unref(arrowIconClasses), ...unref(arrowIconNextClasses)]),
                pack: __props.iconPack,
                icon: __props.iconNext,
                size: __props.iconSize,
                both: "",
                role: "button",
                tabindex: "0",
                onClick: onNext,
                onKeydown: withKeys(onNext, ["enter"])
              }, null, 8, ["class", "pack", "icon", "size"]), [
                [vShow, hasNext.value]
              ])
            ], 64)) : createCommentVNode("", true)
          ])
        ], 2),
        renderSlot(_ctx.$slots, "indicators", {
          active: unref(activeIndex),
          switchTo,
          indicatorIndex: indicatorIndex.value
        }, () => [
          unref(childItems).length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            __props.indicators ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(indicatorsClasses)),
              role: "group"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(indicatorCount.value, (_, index2) => {
                return openBlock(), createElementBlock("div", {
                  key: index2,
                  class: normalizeClass(unref(indicatorClasses)),
                  role: "button",
                  tabindex: "0",
                  onFocus: ($event) => onModeChange("hover", index2),
                  onMouseover: ($event) => onModeChange("hover", index2),
                  onClick: ($event) => onModeChange("click", index2),
                  onKeypress: withKeys(($event) => onModeChange("click", index2), ["enter"])
                }, [
                  renderSlot(_ctx.$slots, "indicator", { index: index2 }, () => [
                    createElementVNode("span", {
                      class: normalizeClass(indicatorItemClasses(index2))
                    }, null, 2)
                  ])
                ], 42, _hoisted_1$1);
              }), 128))
            ], 2)) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true)
        ]),
        __props.overlay ? renderSlot(_ctx.$slots, "overlay", { key: 0 }) : createCommentVNode("", true)
      ], 34);
    };
  }
});
const _hoisted_1 = ["data-id", "role", "aria-selected"];
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      default: () => getOption("carousel.ariaRole", "option")
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
    const { parent, item } = useProviderChild();
    const isActive = computed(() => parent.value.activeIndex === item.value.index);
    const itemStyle = computed(() => ({ width: `${parent.value.itemWidth}px` }));
    function onClick(event) {
      if (isActive.value)
        parent.value.onClick(event);
      if (props.clickable)
        parent.value.setActive(item.value.index);
    }
    const itemClasses = defineClasses(
      ["itemClass", "o-car__item"],
      ["itemActiveClass", "o-car__item--active", null, isActive],
      [
        "itemClickableClass",
        "o-car__item--clickable",
        null,
        computed(() => props.clickable)
      ]
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(itemClasses)),
        style: normalizeStyle(itemStyle.value),
        "data-id": `carousel-${unref(item).identifier}`,
        "data-oruga": "carousel-item",
        role: __props.ariaRole,
        "aria-roledescription": "item",
        "aria-selected": isActive.value,
        onClick,
        onKeypress: withKeys(onClick, ["enter"])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 46, _hoisted_1);
    };
  }
});
const index = {
  install(app) {
    registerComponent(app, _sfc_main$1);
    registerComponent(app, _sfc_main);
  }
};
export {
  _sfc_main$1 as OCarousel,
  _sfc_main as OCarouselItem,
  index as default
};
//# sourceMappingURL=carousel.mjs.map
