/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
import { defineComponent, computed, ref, watch, nextTick, onBeforeUnmount, openBlock, createBlock, Teleport, renderSlot, createElementBlock, mergeProps } from "vue";
import { i as isClient } from "./ssr-BIBU2UWo.mjs";
import { u as unrefElement } from "./unrefElement-bvPf341v.mjs";
import { isDefined } from "./helpers.mjs";
function getScrollingParent(target) {
  if (target.style.position === "fixed" || !target)
    return document.documentElement;
  let isScrollingParent = false;
  let nextParent = target.parentElement;
  while (!isScrollingParent && isDefined(nextParent)) {
    if (nextParent === document.documentElement)
      break;
    const { overflow, overflowY } = getComputedStyle(nextParent);
    const { scrollHeight, clientHeight } = nextParent;
    isScrollingParent = /(auto|scroll)/.test(`${overflow}${overflowY}`) && scrollHeight > clientHeight;
    if (isScrollingParent)
      break;
    nextParent = nextParent.parentElement;
  }
  return nextParent;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "PositionWrapper",
  props: {
    teleport: {
      type: [Boolean, String, Object],
      required: true
    },
    trigger: {
      type: Object,
      default: void 0
    },
    /**
     * Position of the component relative to the trigger
     * @values auto, top, bottom, left, right, top-right, top-left, bottom-left, bottom-right
     */
    position: {
      type: String,
      validator: (value) => [
        "auto",
        "top",
        "bottom",
        "left",
        "right",
        "top-right",
        "top-left",
        "bottom-left",
        "bottom-right"
      ].indexOf(value) > -1,
      default: void 0
    },
    /** Used for calculation position auto */
    defaultPosition: {
      type: String,
      validator: (value) => ["top", "bottom", "left", "right"].indexOf(value) > -1,
      default: "top"
    },
    /** disable the position calculation */
    disabled: { type: Boolean, default: false },
    /** update positioning on teleport */
    disablePositioning: { type: Boolean, default: true }
  },
  emits: ["update:position"],
  setup(__props, { emit: __emit }) {
    const opposites = {
      top: "bottom",
      bottom: "top",
      right: "left",
      left: "right"
    };
    const props = __props;
    const emits = __emit;
    const teleportTo = computed(
      () => typeof props.teleport === "boolean" ? "body" : props.teleport
    );
    const teleportDisabled = computed(
      () => typeof props.teleport === "boolean" || !props.teleport ? !props.teleport : false
    );
    const contentRef = ref();
    function setContent(el) {
      contentRef.value = el;
      nextTick(() => {
        updatePositioning();
        addHandler();
      });
      return el;
    }
    const initialPosition = props.position;
    const scrollingParent = ref(void 0);
    const resizeObserver = ref(null);
    if (isClient && window.ResizeObserver) {
      resizeObserver.value = new window.ResizeObserver(updatePositioning);
    }
    watch(
      () => props.disabled,
      () => {
        if (!props.disabled)
          addHandler();
        else
          removeHandler();
      },
      { immediate: true }
    );
    watch(
      [
        () => !!props.trigger,
        () => props.disablePositioning,
        () => props.disabled
      ],
      () => {
        nextTick(() => updatePositioning());
      },
      { immediate: true }
    );
    onBeforeUnmount(() => removeHandler());
    function addHandler() {
      if (isClient && !scrollingParent.value && contentRef.value) {
        scrollingParent.value = getScrollingParent(unrefElement(contentRef));
        if (scrollingParent.value && scrollingParent.value !== document.documentElement) {
          scrollingParent.value.addEventListener(
            "scroll",
            updatePositioning,
            { passive: true }
          );
          if (window.ResizeObserver)
            resizeObserver.value.observe(scrollingParent.value);
        } else {
          document.addEventListener("scroll", updatePositioning, {
            passive: true
          });
          window.addEventListener("resize", updatePositioning);
        }
      }
    }
    function removeHandler() {
      var _a;
      if (isClient) {
        if (window.ResizeObserver)
          (_a = resizeObserver.value) == null ? void 0 : _a.disconnect();
        window.removeEventListener("resize", updatePositioning);
        document.removeEventListener("scroll", updatePositioning);
        scrollingParent.value = void 0;
      }
    }
    function updatePositioning() {
      if (props.disabled)
        return;
      let position = props.position;
      if (initialPosition === "auto") {
        position = getAutoPosition();
        if (position != props.position)
          emits("update:position", position);
      }
      if (!props.teleport)
        return;
      const content = unrefElement(contentRef);
      const trigger = unrefElement(props.trigger);
      if (content && trigger) {
        const rect = trigger.getBoundingClientRect();
        let top = rect.top + window.scrollY;
        let left = rect.left + window.scrollX;
        if (position.includes("bottom")) {
          top += trigger.clientHeight;
        } else if (position.includes("top")) {
          top -= content.clientHeight;
        }
        if (position === "left") {
          left -= content.clientWidth;
        } else if (position === "right") {
          left += trigger.clientWidth;
        } else if (position.includes("-right")) {
          left += trigger.clientWidth - content.clientWidth;
        }
        if (position === "top" || position === "bottom") {
          left += trigger.clientWidth / 2;
        }
        if (position === "left" || position === "right") {
          top += trigger.clientHeight / 2;
        }
        if (props.disablePositioning) {
          content.style.position = "relative";
          content.style.top = `${top}px`;
          content.style.left = `${left}px`;
        } else {
          content.style.position = "";
          content.style.top = "";
          content.style.left = "";
        }
      }
    }
    function getAutoPosition() {
      let bestPosition = props.defaultPosition;
      if (!props.trigger || !contentRef.value)
        return bestPosition;
      if (!scrollingParent.value)
        return bestPosition;
      const viewRect = new DOMRect(
        scrollingParent.value.offsetLeft,
        scrollingParent.value.offsetTop,
        scrollingParent.value.clientWidth,
        scrollingParent.value.clientHeight
      );
      const contentRect = unrefElement(contentRef).getBoundingClientRect();
      const triggerRect = unrefElement(props.trigger).getBoundingClientRect();
      const triggerAnchors = anchors(triggerRect);
      const contentAnchors = anchors(contentRect);
      const contentRectAtAnchor = (pos) => {
        const triggerAnchor = triggerAnchors[pos];
        const contentAnchor = contentAnchors[opposites[pos]];
        return new DOMRect(
          contentRect.x + (triggerAnchor.x - contentAnchor.x),
          contentRect.y + (triggerAnchor.y - contentAnchor.y),
          contentRect.width,
          contentRect.height
        );
      };
      const defaultOpposite = opposites[props.defaultPosition];
      const crossPosition = props.defaultPosition === "top" || props.defaultPosition === "bottom" ? "left" : "top";
      const crossOpposite = opposites[crossPosition];
      const positions = [
        props.defaultPosition,
        defaultOpposite,
        crossPosition,
        crossOpposite
      ];
      let maxOverlap = 0;
      for (const position of positions) {
        const overlap = intersectionArea(
          viewRect,
          contentRectAtAnchor(position)
        );
        if (overlap > maxOverlap) {
          maxOverlap = overlap;
          bestPosition = position;
        }
      }
      return bestPosition;
    }
    function intersectionArea(a, b) {
      const left = Math.max(a.left, b.left);
      const right = Math.min(a.right, b.right);
      const top = Math.max(a.top, b.top);
      const bottom = Math.min(a.bottom, b.bottom);
      return Math.max(right - left, 0) * Math.max(bottom - top, 0);
    }
    const anchors = (rect) => ({
      top: { x: (rect.left + rect.right) * 0.5, y: rect.top },
      bottom: { x: (rect.left + rect.right) * 0.5, y: rect.bottom },
      left: { x: rect.left, y: (rect.top + rect.bottom) * 0.5 },
      right: { x: rect.right, y: (rect.top + rect.bottom) * 0.5 }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: teleportTo.value,
        disabled: teleportDisabled.value
      }, [
        teleportDisabled.value ? renderSlot(_ctx.$slots, "default", {
          key: 0,
          setContent
        }) : (openBlock(), createElementBlock("div", mergeProps({ key: 1 }, _ctx.$attrs, { style: { position: "absolute", left: "0px", top: "0px" } }), [
          renderSlot(_ctx.$slots, "default", { setContent })
        ], 16))
      ], 8, ["to", "disabled"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=PositionWrapper.vue_vue_type_script_setup_true_lang-D14-2-mO.mjs.map
