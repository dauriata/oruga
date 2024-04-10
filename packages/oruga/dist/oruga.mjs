var Fl = Object.defineProperty;
var Al = (e, l, a) => l in e ? Fl(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a;
var Sa = (e, l, a) => (Al(e, typeof l != "symbol" ? l + "" : l, a), a);
import { ref as z, toRaw as Qe, toValue as vt, getCurrentInstance as wt, effectScope as wl, isRef as lt, watch as ce, getCurrentScope as Dl, onScopeDispose as xl, nextTick as De, computed as n, onMounted as st, onBeforeUnmount as It, defineComponent as ge, useSlots as Dt, h as na, Comment as $l, Text as Bl, resolveComponent as Ut, openBlock as f, createElementBlock as V, normalizeClass as R, unref as s, renderSlot as _, createTextVNode as Pe, toDisplayString as ue, createCommentVNode as J, Fragment as he, createBlock as ne, withCtx as se, createElementVNode as ae, provide as Ia, inject as za, onUnmounted as Ha, normalizeStyle as _e, resolveDynamicComponent as qe, mergeModels as ze, useModel as Xe, withDirectives as $e, mergeProps as ye, vModelDynamic as Ol, vModelText as Pl, Teleport as ua, createVNode as me, Transition as et, vShow as He, watchEffect as La, useAttrs as da, withKeys as Ce, withModifiers as ve, renderList as xe, readonly as Ml, vModelCheckbox as Na, vModelSelect as Vl, createSlots as qt, render as Xt, toHandlers as ca, onBeforeMount as Rl, normalizeProps as Ot, guardReactiveProps as Pt, vModelRadio as Tl, toHandlerKey as Il } from "vue";
/*! Oruga v0.8.7 | MIT License | github.com/oruga-ui/oruga */
const Ke = () => Math.random().toString(36).substring(2, 15);
function zl(e) {
  return e < 0 ? -1 : e > 0 ? 1 : 0;
}
const Hl = Math.sign || zl, Yt = (e, l) => (e % l + l) % l;
function Fa(e, l, a) {
  return Math.max(l, Math.min(a, e));
}
const at = (e) => e && typeof e == "object" && !Array.isArray(e), it = (e) => e != null, kt = (e) => typeof e < "u" && e !== null ? e : "", St = (e) => it(e) ? isNaN(e) ? e : e + "px" : null;
function ea(e, l, a) {
  return e ? !a || typeof a != "function" ? e.indexOf(l) : e.findIndex((t, o, i) => a(t, i)) : -1;
}
function Tt(e, l) {
  if (!e && l || e && !l)
    return !1;
  if (e === l)
    return !0;
  if (at(e) && at(l)) {
    const a = Object.keys(e), t = Object.keys(l);
    if (a.length !== t.length)
      return !1;
    for (const o of a) {
      const i = e[o], u = l[o], d = at(i) && at(u);
      if (d && !Tt(i, u) || !d && i !== u)
        return !1;
    }
    return !0;
  }
  return Array.isArray(e) && Array.isArray(l) ? !(e.length !== l.length || !e.every((a, t) => a === l[t])) : !1;
}
function Ll(e) {
  return Object.assign({}, e);
}
function mt(e, l, a = !1) {
  return !at(e) || !at(l) ? l : a ? Ea(e, l) : Object.assign(e, l);
}
function Ea(e, l) {
  return !at(e) || !at(l) ? l : (Object.getOwnPropertyNames(l).forEach((a) => {
    const t = e[a], o = l[a];
    Array.isArray(t) && Array.isArray(o) ? e[a] = t.concat(o) : at(t) && at(o) ? e[a] = Ea(
      Object.assign({}, t),
      o
    ) : e[a] = o;
  }), e);
}
function Me(e, l, a) {
  const t = l.split(".").reduce(
    (o, i) => typeof o < "u" ? o[i] : void 0,
    e
  );
  return typeof t < "u" ? t : a;
}
function ja(e, l, a) {
  const t = l.split(".");
  if (t.length === 1) {
    e[l] = a;
    return;
  }
  const o = t[0];
  return typeof e[o] > "u" && (e[o] = {}), ja(e[o], t.slice(1).join("."), a);
}
function oa(e) {
  typeof e.remove < "u" ? e.remove() : typeof e.parentNode < "u" && e.parentNode !== null && e.parentNode.removeChild(e);
}
function Nl(e) {
  return e && e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function Aa(e) {
  return e && e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const ft = {
  Android: () => typeof window < "u" && !!window.navigator.userAgent.match(/Android/i),
  BlackBerry: () => typeof window < "u" && !!window.navigator.userAgent.match(/BlackBerry/i),
  iOS: () => typeof window < "u" && !!window.navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera: () => typeof window < "u" && !!window.navigator.userAgent.match(/Opera Mini/i),
  Windows: () => typeof window < "u" && !!window.navigator.userAgent.match(/IEMobile/i),
  any: () => ft.Android() || ft.BlackBerry() || ft.iOS() || ft.Opera() || ft.Windows()
}, Wa = z({});
function El(e, l) {
  Wa.value[e] = l;
}
function jl() {
  return Wa.value;
}
let zt;
const Ya = (e) => {
  zt = e;
}, Wl = (e, l) => {
  e.use(l);
}, Ae = (e, l) => {
  e.component(l.name, l);
}, Ht = (e, l, a) => {
  Ya(e);
  const t = jl();
  El(l, a), e._context.provides && e._context.provides.oruga || e.provide("oruga", t), e.config.globalProperties.$oruga || (e.config.globalProperties.$oruga = t);
}, Gt = z({
  iconPack: "mdi",
  useHtml5Validation: !0,
  statusIcon: !0,
  transformClasses: void 0
}), Ka = (e) => {
  Gt.value = e;
}, Kt = () => Ll(Qe(Gt.value)), r = (e, l) => Me(Gt.value, e, l), Yl = (e, l) => {
  ja(Gt.value, e, l);
}, Kl = {
  getOption: r,
  getOptions: Kt,
  setOption: Yl,
  setOptions(e) {
    Ka(mt(Kt(), e, !0));
  }
}, Ul = {
  install(e, l) {
    Ya(e), Ka(mt(Kt(), l, !0));
  }
}, ql = {
  sizes: {
    default: "mdi-24px",
    small: null,
    medium: "mdi-36px",
    large: "mdi-48px"
  },
  iconPrefix: "mdi-"
}, ht = () => {
  const l = r("iconComponent") ? "" : "fa-";
  return {
    sizes: {
      default: null,
      small: null,
      medium: "lg",
      large: "2xl"
    },
    iconPrefix: l,
    internalIcons: {
      check: "check",
      information: "info-circle",
      alert: "exclamation-triangle",
      "alert-circle": "exclamation-circle",
      "arrow-up": "arrow-up",
      "chevron-right": "angle-right",
      "chevron-left": "angle-left",
      "chevron-down": "angle-down",
      "chevron-up": "angle-up",
      eye: "eye",
      "eye-off": "eye-slash",
      "caret-down": "caret-down",
      "caret-up": "caret-up",
      "close-circle": "times-circle",
      close: "times",
      loading: "circle-notch"
    }
  };
}, Xl = () => {
  let e = {
    mdi: ql,
    fa: ht(),
    fas: ht(),
    far: ht(),
    fad: ht(),
    fab: ht(),
    fal: ht()
  };
  const l = r("customIconPacks");
  return l && (e = mt(e, l, !0)), e;
}, Gl = Xl;
function je(e) {
  const l = vt(e);
  return (l == null ? void 0 : l.$el) ?? l;
}
const We = (e) => e ? e.flatMap(
  (l) => Object.keys(l).filter((a) => a && l[a])
) : [];
function h(...e) {
  const l = wt();
  if (!l)
    throw new Error(
      "defineClasses must be called within a component setup function."
    );
  const a = wl(), t = z([]);
  return t.value = e.map((o, i) => {
    const u = o[0], d = o[1], b = o[2], c = o[3];
    function v() {
      const m = Jl(
        l,
        u,
        d,
        vt(b)
      ), S = !it(c) || vt(c);
      return { [m]: S };
    }
    return it(b) && lt(b) && a.run(() => {
      ce(
        () => vt(b),
        (m, S) => {
          if (m === S)
            return;
          const B = v();
          t.value[i] = B;
        }
      );
    }), it(c) && lt(c) && a.run(() => {
      ce(
        () => vt(c),
        (m, S) => {
          if (m === S)
            return;
          const B = t.value[i];
          Object.keys(B).forEach(
            (k) => B[k] = m
          ), t.value[i] = B;
        }
      );
    }), v();
  }), Dl() && xl(() => {
    a && a.stop();
  }), t;
}
function Jl(e, l, a, t = "") {
  var g;
  const o = e.props, i = (g = e.proxy) == null ? void 0 : g.$options.configField;
  if (!i)
    throw new Error("component must define the 'configField' option.");
  const u = o.override === !0 ? {} : Kt(), d = o.override || Me(u, "override", !1), b = Me(
    u,
    `${i}.override`,
    d
  ), c = Me(
    u,
    `${i}.${l}.override`,
    b
  ), v = Me(
    u,
    "transformClasses",
    void 0
  ), m = Me(
    u,
    `${i}.transformClasses`,
    void 0
  );
  let S = Me(
    u,
    `${i}.${l}.class`,
    ""
  ) || Me(u, `${i}.${l}`, ""), B = Me(o, l, "");
  if (Array.isArray(B) && (B = B.join(" ")), typeof B == "function") {
    const O = Da(e);
    B = B(t, O);
  } else
    B = wa(B, t);
  if (Array.isArray(S) && (S = S.join(" ")), typeof S == "function") {
    const O = Da(e);
    S = S(t, O);
  } else
    S = wa(S, t);
  a.includes("{*}") ? a = a.replace(
    /\{\*\}/g,
    kt(t)
  ) : a = a + kt(t);
  let k = `${c ? "" : a} ${kt(S)} ${kt(B)}`.trim().replace(/\s\s+/g, " ");
  return m ? k = m(k) : v && (k = v(k)), k;
}
function wa(e, l) {
  return kt(e).split(" ").filter((a) => a.length > 0).map((a) => a + kt(l)).join(" ");
}
const Da = (e) => {
  let l = e.proxy.$props;
  return Object.keys(l).filter((a) => a.endsWith("Props")).forEach((a) => l = { ...l, ...l[a] }), { props: l };
};
function Ue(e, l, a, t) {
  const o = (t == null ? void 0 : t.eventName) || `update:${e.toString()}`;
  if (t != null && t.passive) {
    const i = z(l[e]);
    let u = !1;
    return ce(
      () => l[e],
      (d) => {
        u || (u = !0, i.value = d, De(() => u = !1));
      }
    ), ce(
      i,
      (d) => {
        (!u && d !== l[e] || t.deep) && a(o, d);
      },
      { deep: t.deep }
    ), i;
  } else
    return n({
      get() {
        return l[e];
      },
      set(i) {
        a(o, i);
      }
    });
}
function xt(e, l, a) {
  return Ue("modelValue", e, l, a);
}
function Ze(e, l, a = document, t) {
  let o;
  const i = () => {
    if (!a)
      return;
    const d = je(a), b = at(t) ? { ...t } : t;
    d.addEventListener(e, l, b), o = () => d.removeEventListener(e, l, b);
  }, u = () => {
    typeof o == "function" && o();
  };
  return t != null && t.immediate ? i() : (st(() => i()), It(() => u())), u;
}
const Be = typeof window < "u", Ql = typeof window > "u";
function dt(e) {
  var b;
  const l = z(!1), a = z(), t = wt();
  if (!t)
    throw new Error(
      "useMatchMedia must be called within a component setup function."
    );
  const o = t.props, i = (b = t.proxy) == null ? void 0 : b.$options.configField;
  if (!i)
    throw new Error("component must define the 'configField' option.");
  let u = o.mobileBreakpoint;
  if (!u) {
    const c = r(
      "mobileBreakpoint",
      e || "1023px"
    );
    u = r(`${i}.mobileBreakpoint`, c);
  }
  a.value = Be ? window.matchMedia(`(max-width: ${u})`) : void 0, a.value ? (l.value = a.value.matches, Ze("change", d, a.value)) : l.value = !1;
  function d(c) {
    l.value = c.matches;
  }
  return { isMobile: l };
}
const Zl = ge({
  name: "OFieldBody",
  configField: "field",
  props: {
    classes: {
      type: Array,
      default: void 0
    }
  },
  setup(e) {
    const { parentField: l } = Lt(), a = Dt();
    return () => {
      let t = !0;
      const o = a.default(), i = o.length === 1 && Array.isArray(o[0].children) ? o[0].children : o;
      return na(
        "div",
        { class: e.classes },
        i.map((u) => {
          let d;
          return u.type === $l || u.type === Bl ? u : (t && (d = l.value.fieldMessage, t = !1), na(
            Ut("OField"),
            {
              variant: l.value.fieldVariant,
              message: d
            },
            () => [u]
          ));
        })
      );
    };
  }
}), _l = ["for"], en = ["for"], Ua = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OField",
  configField: "field",
  __name: "Field",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /**
     * Color of the field and help message, also adds a matching icon.
     * Used by Input, Select and Autocomplete.
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: { type: String, default: void 0 },
    /** Field label */
    label: { type: String, default: void 0 },
    /**
     * Vertical size of input
     * @values small, medium, large
     */
    labelSize: {
      type: String,
      default: () => r("field.labelsize")
    },
    /** Same as native for set on the label */
    labelFor: { type: String, default: void 0 },
    /** Help message text */
    message: { type: String, default: void 0 },
    /**
     * Direct child components/elements of Field will be grouped horizontally
     * (see which ones at the top of the page).
     */
    grouped: { type: Boolean, default: !1 },
    /** Allow controls to fill up multiple lines, making it responsive */
    groupMultiline: { type: Boolean, default: !1 },
    /** Group label and control on the same line for horizontal forms */
    horizontal: { type: Boolean, default: !1 },
    /** Field automatically attach controls together */
    addons: { type: Boolean, default: !0 },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => r("field.mobileBreakpoint")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class to align label and control in horizontal forms */
    horizontalClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when fields are grouped together */
    groupedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when fields fill up multiple lines */
    groupMultilineClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for field label */
    labelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for field label size */
    labelSizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for field label when horizontal */
    labelHorizontalClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for field body */
    bodyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** "Class for field body when horizontal */
    bodyHorizontalClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for components automatically attached together when inside a field */
    addonsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the field message */
    messageClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the message field variant */
    variantMessageClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the label field variant */
    variantLabelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of file component when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the focused field */
    focusedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the filled field */
    filledClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  setup(e) {
    const l = e, { isMobile: a } = dt(l.mobileBreakpoint), t = z(l.variant);
    ce(
      () => l.variant,
      (y) => t.value = y
    );
    const o = z(l.message);
    ce(
      () => l.message,
      (y) => o.value = y
    );
    const i = z(!1), u = z(!1), { parentField: d } = Lt();
    ce(
      () => o.value,
      (y) => {
        var D;
        (D = d == null ? void 0 : d.value) != null && D.hasInnerField && (d.value.fieldVariant || d.value.setVariant(t.value), d.value.fieldMessage || d.value.setMessage(y));
      }
    );
    const b = Dt(), c = n(() => l.label || !!b.label), v = n(
      () => {
        var y;
        return !!(!((y = d == null ? void 0 : d.value) != null && y.hasInnerField) && o.value) || !!b.message;
      }
    ), m = n(
      () => l.grouped || l.groupMultiline || S()
    );
    function S() {
      if (!l.addons || l.horizontal)
        return !1;
      let y = 0;
      const D = b.default();
      return D && (y = (D.length === 1 && Array.isArray(D[0].children) ? D[0].children : D).filter((G) => !!G).length), y > 1 && l.addons && !l.horizontal;
    }
    const B = z();
    function k(y) {
      i.value = y;
    }
    function g(y) {
      u.value = y;
    }
    function O(y) {
      t.value = y;
    }
    function H(y) {
      o.value = y;
    }
    const p = n(() => ({
      $el: B.value,
      props: l,
      hasInnerField: m.value,
      hasMessage: v.value,
      fieldVariant: t.value,
      fieldMessage: o.value,
      setFocus: k,
      setFilled: g,
      setVariant: O,
      setMessage: H
    }));
    tn(p);
    const I = h(
      ["rootClass", "o-field"],
      [
        "horizontalClass",
        "o-field--horizontal",
        null,
        n(() => !!l.horizontal)
      ],
      ["mobileClass", "o-field--mobile", null, a],
      ["focusedClass", "o-field--focused", null, i],
      ["filledClass", "o-field--filled", null, u]
    ), w = h(
      ["messageClass", "o-field__message"],
      [
        "variantMessageClass",
        "o-field__message-",
        t,
        n(() => !!t.value)
      ]
    ), L = h(
      ["labelClass", "o-field__label"],
      [
        "labelSizeClass",
        "o-field__label-",
        n(() => l.labelSize),
        n(() => !!l.labelSize)
      ],
      [
        "variantLabelClass",
        "o-field__label-",
        t,
        n(() => !!t.value)
      ]
    ), N = h([
      "labelHorizontalClass",
      "o-field__horizontal-label"
    ]), W = h(["bodyClass", "o-field__body"]), Q = h([
      "bodyHorizontalClass",
      "o-field__horizontal-body"
    ]), P = h(
      ["rootClass", "o-field"],
      [
        "groupMultilineClass",
        "o-field--grouped-multiline",
        null,
        n(() => l.groupMultiline)
      ],
      ["groupedClass", "o-field--grouped", null, n(() => l.grouped)],
      [
        "addonsClass",
        "o-field--addons",
        null,
        n(() => !l.grouped && S())
      ]
    );
    return (y, D) => (f(), V("div", {
      ref_key: "rootRef",
      ref: B,
      "data-oruga": "field",
      class: R(s(I))
    }, [
      e.horizontal ? (f(), V("div", {
        key: 0,
        class: R(s(N))
      }, [
        c.value ? (f(), V("label", {
          key: 0,
          for: e.labelFor,
          class: R(s(L))
        }, [
          _(y.$slots, "label", {}, () => [
            Pe(ue(e.label), 1)
          ])
        ], 10, _l)) : J("", !0)
      ], 2)) : (f(), V(he, { key: 1 }, [
        c.value ? (f(), V("label", {
          key: 0,
          for: e.labelFor,
          class: R(s(L))
        }, [
          _(y.$slots, "label", {}, () => [
            Pe(ue(e.label), 1)
          ])
        ], 10, en)) : J("", !0)
      ], 64)),
      e.horizontal ? (f(), ne(Zl, {
        key: 2,
        classes: s(Q)
      }, {
        default: se(() => [
          _(y.$slots, "default")
        ]),
        _: 3
      }, 8, ["classes"])) : m.value ? (f(), V("div", {
        key: 3,
        class: R(s(W))
      }, [
        ae("div", {
          class: R(s(P))
        }, [
          _(y.$slots, "default")
        ], 2)
      ], 2)) : _(y.$slots, "default", { key: 4 }),
      v.value && !e.horizontal ? (f(), V("p", {
        key: 5,
        class: R(s(w))
      }, [
        _(y.$slots, "message", {}, () => [
          Pe(ue(o.value), 1)
        ])
      ], 2)) : J("", !0)
    ], 2));
  }
}), qa = Symbol();
function tn(e) {
  Ia(qa, e);
}
function Lt() {
  const e = za(qa, void 0), l = n(() => {
    if (e != null && e.value)
      if (e.value.fieldVariant) {
        if (typeof e.value.fieldVariant == "string")
          return e.value.fieldVariant;
        if (Array.isArray(e.value.fieldVariant)) {
          for (const o in e.value.fieldVariant)
            if (e.value.fieldVariant[o])
              return o;
        }
      } else
        return;
    else
      return;
  }), a = n(
    () => e.value ? "" : e.value.fieldMessage || e.value.hasMessage
  ), t = n(() => r("statusVariantIcon", {
    success: "check",
    danger: "alert-circle",
    info: "information",
    warning: "alert"
  })[l.value] || "");
  return {
    parentField: e,
    statusVariant: l,
    statusVariantIcon: t,
    statusMessage: a
  };
}
const an = Ql ? [] : [
  HTMLButtonElement,
  HTMLFieldSetElement,
  HTMLInputElement,
  HTMLObjectElement,
  HTMLOutputElement,
  HTMLSelectElement,
  HTMLTextAreaElement
];
function xa(e) {
  return an.some((l) => e instanceof l) ? e : null;
}
function rt(e, l, a) {
  const { parentField: t } = Lt(), o = n(() => {
    const g = je(e);
    if (!g) {
      console.warn("useInputHandler: inputRef contains no element");
      return;
    }
    if (g.getAttribute("data-oruga-input"))
      return g;
    const O = g.querySelector("[data-oruga-input]");
    if (!O) {
      console.warn(
        "useInputHandler: Underlaying Oruga input component not found"
      );
      return;
    }
    return O;
  }), i = z(!1);
  function u() {
    De(() => {
      o.value && o.value.focus();
    });
  }
  function d() {
    De(() => {
      o.value && o.value.click();
    });
  }
  function b(g) {
    i.value = !1, t != null && t.value && t.value.setFocus(!1), l("blur", g), S();
  }
  function c(g) {
    i.value = !0, t != null && t.value && t.value.setFocus(!0), l("focus", g);
  }
  const v = z(!0);
  function m(g, O) {
    De(() => {
      t != null && t.value && (t.value.props.variant || t.value.setVariant(g), t.value.props.message || t.value.setMessage(O));
    });
  }
  function S() {
    if (a.useHtml5Validation && o.value)
      return o.value.validity.valid ? (m(null, null), v.value = !0) : (B(), v.value = !1), v.value;
  }
  function B() {
    const g = "danger", O = a.validationMessage || o.value.validationMessage;
    m(g, O);
  }
  function k(g) {
    S();
    const O = xa(g.target);
    if (O && (t != null && t.value) && a.useHtml5Validation) {
      g.preventDefault();
      let H = !1;
      if (O.form != null) {
        const p = O.form.elements;
        for (let I = 0; I < p.length; ++I) {
          const w = xa(
            p.item(I)
          );
          if (w != null && w.willValidate && !w.validity.valid) {
            H = O === w;
            break;
          }
        }
      }
      if (H) {
        const p = t.value.$el, I = r("invalidHandler");
        if (I instanceof Function)
          I(O, p);
        else {
          const w = p ? p.scrollIntoView != null : !1;
          O.focus({ preventScroll: w }), w && p.scrollIntoView({ block: "nearest" });
        }
      }
    }
    l("invalid", g);
  }
  return {
    isFocused: i,
    isValid: v,
    setFocus: u,
    doClick: d,
    onFocus: c,
    onBlur: b,
    checkHtml5Validity: S,
    onInvalid: k
  };
}
function ia(e, l, a) {
  let t;
  return (...o) => {
    const i = () => {
      t = null, a || e.apply(this, o);
    }, u = a && !t;
    clearTimeout(t), t = setTimeout(i, l), u && e.apply(this, o);
  };
}
function gt(e, l) {
  var m;
  const a = wt();
  if (!a)
    throw new Error(
      "useProviderChild must be called within a component setup function."
    );
  const t = (m = a.proxy) == null ? void 0 : m.$options.configField, o = l != null && l.key ? l.key : t, i = z([]), u = z(1), d = n(
    () => i.value.slice().sort((S, B) => S.index - B.index)
  );
  function b(S) {
    const B = i.value.length, k = v(), g = { index: B, data: S, identifier: k };
    return i.value.push(g), e != null && e.value && De(() => {
      const O = i.value.map((w) => `[data-id="${o}-${w.identifier}"]`).join(","), p = je(e).querySelectorAll(O), I = Array.from(p).map(
        (w) => w.getAttribute("data-id").replace(`${o}-`, "")
      );
      i.value.forEach(
        (w) => w.index = I.indexOf(`${w.identifier}`)
      );
    }), g;
  }
  function c(S) {
    i.value = i.value.filter((B) => B !== S);
  }
  function v() {
    return String(u.value++);
  }
  return Ia("$o-" + o, {
    registerItem: b,
    unregisterItem: c,
    data: l == null ? void 0 : l.data
  }), {
    childItems: i,
    sortedItems: d
  };
}
function yt(e = { needParent: !0 }) {
  var b;
  const l = wt();
  if (!l)
    throw new Error(
      "useProviderChild must be called within a component setup function."
    );
  const a = (b = l.proxy) == null ? void 0 : b.$options.configField, t = e != null && e.key ? e.key : a, o = za(
    "$o-" + t,
    void 0
  ), i = typeof e.needParent > "u" || e.needParent, u = typeof e.register > "u" || e.register;
  if (i && !o)
    throw new Error(
      `You should wrap ${l.proxy.$options.name} in a ${t} component`
    );
  const d = z();
  return o && u && (d.value = o.registerItem(e.data)), Ha(() => {
    o && d.value && o.unregisterItem(d.value);
  }), { parent: o == null ? void 0 : o.data, item: d };
}
function Jt(e, l, a, t = { cancelOptions: ["escape", "outside"] }) {
  const o = wt();
  if (!o)
    throw new Error(
      "useProgrammaticComponent must be called within a component setup function."
    );
  const i = Ue("active", l, a), u = n(
    () => typeof l.cancelable == "boolean" ? l.cancelable ? t.cancelOptions : [] : l.cancelable
  );
  function d() {
    return typeof e == "function" ? e() : e.value;
  }
  const b = n(
    () => typeof l.container == "string" ? document.querySelector(l.container) : l.container || document.body
  );
  st(() => {
    if (l.programmatic) {
      l.programmatic.instances && l.programmatic.instances.add(o);
      const S = d();
      b.value.appendChild(S), i.value = !0;
    }
  }), Be && Ze("keyup", c, b.value);
  function c(S) {
    i.value && (S.key === "Escape" || S.key === "Esc") && v("escape");
  }
  function v(S) {
    !l.cancelable || !i.value || u.value.indexOf(S) < 0 || (l.onCancel.apply(null), m({ action: "cancel", method: S }));
  }
  function m(...S) {
    o.emit("close"), l.onClose.apply(null, S), l.programmatic ? (l.programmatic.instances && l.programmatic.instances.remove(o), l.programmatic.resolve && l.programmatic.resolve.apply(null, S), setTimeout(() => {
      if (o.props.active = !1, o.emit("update:active", !1), typeof t.destroyOnHide > "u" || t.destroyOnHide)
        if (Be)
          window.requestAnimationFrame(() => {
            const B = d();
            B && oa(B);
          });
        else {
          const B = d();
          B && oa(B);
        }
    })) : (o.props.active = !1, o.emit("update:active", !1));
  }
  return { close: m, cancel: v, isActive: i, container: b };
}
function fa(e, l, a = []) {
  if (!window)
    return;
  const t = (u) => a.some((d) => {
    if (typeof d == "string")
      return Array.from(
        window.document.querySelectorAll(d)
      ).some(
        (b) => b === u.target || u.composedPath().includes(b)
      );
    {
      const b = je(d);
      return b && (u.target === b || u.composedPath().includes(b));
    }
  });
  return Ze("click", (u) => {
    const d = je(e);
    !d || d === u.target || u.composedPath().includes(d) || t(u) || l(u);
  }, window, {
    immediate: !0,
    passive: !0
  });
}
function ln(e) {
  if (e.style.position === "fixed" || !e)
    return document.documentElement;
  let l = !1, a = e.parentElement;
  for (; !l && it(a) && a !== document.documentElement; ) {
    const { overflow: t, overflowY: o } = getComputedStyle(a), { scrollHeight: i, clientHeight: u } = a;
    if (l = /(auto|scroll)/.test(`${t}${o}`) && i > u, l)
      break;
    a = a.parentElement;
  }
  return a;
}
const Ve = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OIcon",
  configField: "icon",
  __name: "Icon",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Icon component name */
    component: {
      type: String,
      default: () => r("iconComponent")
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    pack: {
      type: String,
      default: () => r("iconPack", "mdi")
    },
    /**
     * 	Color of the icon
     *  @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("icon.variant")
    },
    /** Icon name */
    icon: { type: String, default: void 0 },
    /**
     * Icon size
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("icon.size")
    },
    /**
     * Overrides icon font size
     * @values Depends on library: null (smallest), fa-sm, fa-lg, fa-xl, mdi-18px, mdi-24px, mdi-36px, mdi-48px
     */
    customSize: { type: String, default: void 0 },
    /**
     * Add class to icon font.
     * See icon library documentation for custom classes.
     */
    customClass: { type: String, default: void 0 },
    /** When true makes icon clickable */
    clickable: { type: Boolean, default: !1 },
    /** Enable spin effect on icon */
    spin: { type: Boolean, default: !1 },
    /** Rotation 0-360 */
    rotation: { type: [Number, String], default: void 0 },
    /**
     * This is used internally
     * @ignore
     */
    both: { type: Boolean, default: !1 },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the icon when clickable */
    clickableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the element when spin */
    spinClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the icon size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the icon variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  setup(e) {
    const l = e, a = n(() => {
      const m = {};
      return l.rotation && (m.transform = `rotate(${l.rotation}deg)`), m;
    }), t = n(() => Gl()[l.pack]), o = n(
      () => {
        var m;
        return (m = t.value) != null && m.iconPrefix ? t.value.iconPrefix : "";
      }
    ), i = n(() => {
      var m;
      if ((m = t.value) != null && m.sizes) {
        if (l.size && t.value.sizes[l.size] !== void 0)
          return t.value.sizes[l.size];
        if (t.value.sizes.default)
          return t.value.sizes.default;
      }
      return null;
    }), u = n(
      () => `${o.value}${c(l.icon)}`
    ), d = n(() => l.customSize || i.value), b = n(() => {
      if (!l.variant)
        return;
      let m = "";
      return typeof l.variant == "string" ? m = l.variant : m = Object.keys(l.variant).filter(
        (S) => l.variant[S]
      )[0], m;
    });
    function c(m) {
      var S, B;
      return l.both && (S = t.value) != null && S.internalIcons && (B = t.value) != null && B.internalIcons[m] ? t.value.internalIcons[m] : m;
    }
    const v = h(
      ["rootClass", "o-icon"],
      [
        "clickableClass",
        "o-icon--clickable",
        null,
        n(() => l.clickable)
      ],
      ["spinClass", "o-icon--spin", null, n(() => l.spin)],
      [
        "sizeClass",
        "o-icon--",
        n(() => l.size),
        n(() => !!l.size)
      ],
      [
        "variantClass",
        "o-icon--",
        b,
        n(() => !!b.value)
      ]
    );
    return (m, S) => (f(), V("span", {
      class: R(s(v)),
      "data-oruga": "icon",
      style: _e(a.value)
    }, [
      e.component ? (f(), ne(qe(e.component), {
        key: 0,
        icon: [e.pack, u.value],
        size: d.value,
        class: R([e.customClass])
      }, null, 8, ["icon", "size", "class"])) : (f(), V("i", {
        key: 1,
        class: R([e.pack, u.value, d.value, e.customClass])
      }, null, 2))
    ], 6));
  }
}), nn = ["data-oruga-input", "type", "maxlength", "autocomplete", "placeholder", "disabled", "aria-labelledby"], on = ["maxlength", "placeholder", "disabled", "aria-labelledby"], Ft = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OInput",
  configField: "input",
  inheritAttrs: !1,
  __name: "Input",
  props: /* @__PURE__ */ ze({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: [String, Number], default: "" },
    /**
     * Input type, like native
     * @values Any native input type, and textarea
     */
    type: { type: String, default: "text" },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("input.size")
    },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("input.variant")
    },
    /** Input placeholder */
    placeholder: { type: String, default: void 0 },
    /** Makes input full width when inside a grouped or addon field */
    expanded: { type: Boolean, default: !1 },
    /** Makes the element rounded */
    rounded: { type: Boolean, default: !1 },
    /** Same as native disabled */
    disabled: { type: Boolean, default: !1 },
    /** Adds the reveal password functionality */
    passwordReveal: { type: Boolean, default: !1 },
    /** Same as native maxlength, plus character counter */
    maxlength: { type: [Number, String], default: void 0 },
    /** Show character counter when maxlength prop is passed */
    counter: {
      type: Boolean,
      default: () => r("input.counter", !1)
    },
    /** Automatically adjust height in textarea */
    autosize: { type: Boolean, default: !1 },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("input.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => r("input.icon", void 0)
    },
    /** Makes the icon clickable */
    iconClickable: { type: Boolean, default: !1 },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => r("input.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: !1 },
    /** Variant of right icon */
    iconRightVariant: { type: String, default: void 0 },
    /** Add a button/icon to clear the inputed text */
    clearable: {
      type: Boolean,
      default: () => r("input.clearable", !1)
    },
    /** Icon name to be added on the clear button */
    clearIcon: {
      type: String,
      default: () => r("input.clearIcon", "close-circle")
    },
    /** Show status icon using field and variant prop */
    statusIcon: {
      type: Boolean,
      default: () => r("statusIcon", !0)
    },
    /** Native options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => r("input.autocomplete", "off")
    },
    /** Accessibility label to establish relationship between the checkbox and control label */
    ariaLabelledby: { type: String, default: () => Ke() },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => r("useHtml5Validation", !0)
    },
    /** The message which is shown when a validation error occurs */
    validationMessage: { type: String, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of input when expanded */
    expandedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of input when type textarea */
    textareaClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the left icon space inside the input */
    iconLeftSpaceClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the right icon space inside the input */
    iconRightSpaceClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the native input element */
    inputClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of input when rounded */
    roundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of input when disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the left icon */
    iconLeftClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the right icon */
    iconRightClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class to display when a right icon is used */
    hasIconRightClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the counter element */
    counterClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the input size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the input variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["update:modelValue", "input", "focus", "blur", "invalid", "icon-click", "icon-right-click"], ["update:modelValue"]),
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = z(), u = z(), d = n(
      () => t.type === "textarea" ? u.value : i.value
    ), {
      checkHtml5Validity: b,
      onBlur: c,
      onFocus: v,
      onInvalid: m,
      setFocus: S,
      isValid: B,
      isFocused: k
    } = rt(d, o, t), { parentField: g, statusVariant: O, statusVariantIcon: H } = Lt(), p = Xe(e, "modelValue"), I = n(
      () => typeof p.value == "string" ? p.value.length : typeof p.value == "number" ? p.value.toString().length : 0
    );
    st(() => {
      ce(
        () => p.value,
        (Y) => {
          g != null && g.value && g.value.setFilled(!!Y), t.autosize && L(), B.value || De(() => b());
        },
        { immediate: !0 }
      );
    });
    const w = z("auto");
    function L() {
      w.value = "auto", De(() => {
        if (!u.value)
          return;
        const Y = u.value.scrollHeight;
        w.value = Y + "px";
      });
    }
    const N = n(
      () => t.autosize ? {
        resize: "none",
        height: w.value,
        overflow: "hidden"
      } : {}
    );
    function W(Y) {
      o("input", Y.target.value, Y);
    }
    const Q = n(() => !!(t.passwordReveal || t.statusIcon && H.value || t.clearable && p.value && t.clearIcon || t.iconRight)), P = n(() => t.passwordReveal ? C.value : t.clearable && p.value && t.clearIcon ? t.clearIcon : t.iconRight ? t.iconRight : H.value), y = n(
      () => t.passwordReveal || t.iconRight ? t.iconRightVariant || t.variant || null : O.value
    );
    function D(Y) {
      o("icon-click", Y), De(() => S());
    }
    function U(Y) {
      t.passwordReveal ? A() : t.clearable && (p.value = ""), t.iconRightClickable && (o("icon-right-click", Y), De(() => S()));
    }
    const G = z(!1), E = n(() => t.passwordReveal ? G.value ? "text" : "password" : t.type), C = n(
      () => G.value ? "eye-off" : "eye"
    );
    function A() {
      G.value = !G.value, De(() => S());
    }
    const x = h(
      ["rootClass", "o-input__wrapper"],
      [
        "expandedClass",
        "o-input__wrapper--expanded",
        null,
        n(() => t.expanded)
      ],
      [
        "hasIconRightClass",
        "o-input__wrapper--has-icon-right",
        null,
        Q
      ]
    ), j = h(
      ["inputClass", "o-input"],
      ["roundedClass", "o-input--rounded", null, n(() => t.rounded)],
      [
        "sizeClass",
        "o-input--",
        n(() => t.size),
        n(() => !!t.size)
      ],
      [
        "variantClass",
        "o-input--",
        n(() => O.value || t.variant),
        n(() => !!O.value || !!t.variant)
      ],
      [
        "disabledClass",
        "o-input--disabled",
        null,
        n(() => t.disabled)
      ],
      [
        "textareaClass",
        "o-input__textarea",
        null,
        n(() => t.type === "textarea")
      ],
      [
        "iconLeftSpaceClass",
        "o-input--iconspace-left",
        null,
        n(() => !!t.icon)
      ],
      ["iconRightSpaceClass", "o-input--iconspace-right", null, Q]
    ), le = h(["iconLeftClass", "o-input__icon-left"]), M = h([
      "iconRightClass",
      "o-input__icon-right"
    ]), $ = h(["counterClass", "o-input__counter"]);
    return l({ focus: S }), (Y, ie) => (f(), V("div", {
      "data-oruga": "input",
      class: R(s(x))
    }, [
      e.type !== "textarea" ? $e((f(), V("input", ye({ key: 0 }, Y.$attrs, {
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": ie[0] || (ie[0] = (fe) => p.value = fe),
        "data-oruga-input": E.value,
        type: E.value,
        class: s(j),
        maxlength: e.maxlength,
        autocomplete: e.autocomplete,
        placeholder: e.placeholder,
        disabled: e.disabled,
        "aria-labelledby": e.ariaLabelledby,
        onBlur: ie[1] || (ie[1] = //@ts-ignore
        (...fe) => s(c) && s(c)(...fe)),
        onFocus: ie[2] || (ie[2] = //@ts-ignore
        (...fe) => s(v) && s(v)(...fe)),
        onInvalid: ie[3] || (ie[3] = //@ts-ignore
        (...fe) => s(m) && s(m)(...fe)),
        onInput: W
      }), null, 16, nn)), [
        [Ol, p.value]
      ]) : $e((f(), V("textarea", ye({ key: 1 }, Y.$attrs, {
        ref_key: "textareaRef",
        ref: u,
        "onUpdate:modelValue": ie[4] || (ie[4] = (fe) => p.value = fe),
        "data-oruga-input": "textarea",
        class: s(j),
        maxlength: e.maxlength,
        style: N.value,
        placeholder: e.placeholder,
        disabled: e.disabled,
        "aria-labelledby": e.ariaLabelledby,
        onBlur: ie[5] || (ie[5] = //@ts-ignore
        (...fe) => s(c) && s(c)(...fe)),
        onFocus: ie[6] || (ie[6] = //@ts-ignore
        (...fe) => s(v) && s(v)(...fe)),
        onInvalid: ie[7] || (ie[7] = //@ts-ignore
        (...fe) => s(m) && s(m)(...fe)),
        onInput: W
      }), null, 16, on)), [
        [Pl, p.value]
      ]),
      e.icon ? (f(), ne(Ve, {
        key: 2,
        class: R(s(le)),
        clickable: e.iconClickable,
        icon: e.icon,
        pack: e.iconPack,
        size: e.size,
        onClick: D
      }, null, 8, ["class", "clickable", "icon", "pack", "size"])) : J("", !0),
      Q.value ? (f(), ne(Ve, {
        key: 3,
        class: R(s(M)),
        clickable: e.passwordReveal || e.clearable || e.iconRightClickable,
        icon: P.value,
        pack: e.iconPack,
        size: e.size,
        variant: y.value,
        both: "",
        onClick: U
      }, null, 8, ["class", "clickable", "icon", "pack", "size", "variant"])) : J("", !0),
      e.maxlength && e.counter && s(k) && e.type !== "number" ? (f(), V("small", {
        key: 4,
        class: R(s($))
      }, ue(I.value) + " / " + ue(e.maxlength), 3)) : J("", !0)
    ], 2));
  }
}), Xa = /* @__PURE__ */ ge({
  inheritAttrs: !1,
  __name: "PositionWrapper",
  props: {
    teleport: {
      type: [Boolean, String, Object],
      required: !0
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
      validator: (e) => [
        "auto",
        "top",
        "bottom",
        "left",
        "right",
        "top-right",
        "top-left",
        "bottom-left",
        "bottom-right"
      ].indexOf(e) > -1,
      default: void 0
    },
    /** Used for calculation position auto */
    defaultPosition: {
      type: String,
      validator: (e) => ["top", "bottom", "left", "right"].indexOf(e) > -1,
      default: "top"
    },
    /** disable the position calculation */
    disabled: { type: Boolean, default: !1 },
    /** update positioning on teleport */
    disablePositioning: { type: Boolean, default: !0 }
  },
  emits: ["update:position"],
  setup(e, { emit: l }) {
    const a = {
      top: "bottom",
      bottom: "top",
      right: "left",
      left: "right"
    }, t = e, o = l, i = n(
      () => typeof t.teleport == "boolean" ? "body" : t.teleport
    ), u = n(
      () => typeof t.teleport == "boolean" || !t.teleport ? !t.teleport : !1
    ), d = z();
    function b(p) {
      return d.value = p, De(() => {
        k(), S();
      }), p;
    }
    const c = t.position, v = z(void 0), m = z(null);
    Be && window.ResizeObserver && (m.value = new window.ResizeObserver(k)), ce(
      () => t.disabled,
      () => {
        t.disabled ? B() : S();
      },
      { immediate: !0 }
    ), ce(
      [
        () => !!t.trigger,
        () => t.disablePositioning,
        () => t.disabled
      ],
      () => {
        De(() => k());
      },
      { immediate: !0 }
    ), It(() => B());
    function S() {
      Be && !v.value && d.value && (v.value = ln(je(d)), v.value && v.value !== document.documentElement ? (v.value.addEventListener(
        "scroll",
        k,
        { passive: !0 }
      ), window.ResizeObserver && m.value.observe(v.value)) : (document.addEventListener("scroll", k, {
        passive: !0
      }), window.addEventListener("resize", k)));
    }
    function B() {
      var p;
      Be && (window.ResizeObserver && ((p = m.value) == null || p.disconnect()), window.removeEventListener("resize", k), document.removeEventListener("scroll", k), v.value = void 0);
    }
    function k() {
      if (t.disabled)
        return;
      let p = t.position;
      if (c === "auto" && (p = g(), p != t.position && o("update:position", p)), !t.teleport)
        return;
      const I = je(d), w = je(t.trigger);
      if (I && w) {
        const L = w.getBoundingClientRect();
        let N = L.top + window.scrollY, W = L.left + window.scrollX;
        p.includes("bottom") ? N += w.clientHeight : p.includes("top") && (N -= I.clientHeight), p === "left" ? W -= I.clientWidth : p === "right" ? W += w.clientWidth : p.includes("-right") && (W += w.clientWidth - I.clientWidth), (p === "top" || p === "bottom") && (W += w.clientWidth / 2), (p === "left" || p === "right") && (N += w.clientHeight / 2), t.disablePositioning ? (I.style.position = "relative", I.style.top = `${N}px`, I.style.left = `${W}px`) : (I.style.position = "", I.style.top = "", I.style.left = "");
      }
    }
    function g() {
      let p = t.defaultPosition;
      if (!t.trigger || !d.value || !v.value)
        return p;
      const I = new DOMRect(
        v.value.offsetLeft,
        v.value.offsetTop,
        v.value.clientWidth,
        v.value.clientHeight
      ), w = je(d).getBoundingClientRect(), L = je(t.trigger).getBoundingClientRect(), N = H(L), W = H(w), Q = (E) => {
        const C = N[E], A = W[a[E]];
        return new DOMRect(
          w.x + (C.x - A.x),
          w.y + (C.y - A.y),
          w.width,
          w.height
        );
      }, P = a[t.defaultPosition], y = t.defaultPosition === "top" || t.defaultPosition === "bottom" ? "left" : "top", D = a[y], U = [
        t.defaultPosition,
        P,
        y,
        D
      ];
      let G = 0;
      for (const E of U) {
        const C = O(
          I,
          Q(E)
        );
        C > G && (G = C, p = E);
      }
      return p;
    }
    function O(p, I) {
      const w = Math.max(p.left, I.left), L = Math.min(p.right, I.right), N = Math.max(p.top, I.top), W = Math.min(p.bottom, I.bottom);
      return Math.max(L - w, 0) * Math.max(W - N, 0);
    }
    const H = (p) => ({
      top: { x: (p.left + p.right) * 0.5, y: p.top },
      bottom: { x: (p.left + p.right) * 0.5, y: p.bottom },
      left: { x: p.left, y: (p.top + p.bottom) * 0.5 },
      right: { x: p.right, y: (p.top + p.bottom) * 0.5 }
    });
    return (p, I) => (f(), ne(ua, {
      to: i.value,
      disabled: u.value
    }, [
      u.value ? _(p.$slots, "default", {
        key: 0,
        setContent: b
      }) : (f(), V("div", ye({ key: 1 }, p.$attrs, { style: { position: "absolute", left: "0px", top: "0px" } }), [
        _(p.$slots, "default", { setContent: b })
      ], 16))
    ], 8, ["to", "disabled"]));
  }
}), Nt = (e, l = !1) => e ? l ? e.querySelectorAll('*[tabindex="-1"]') : e.querySelectorAll(`a[href]:not([tabindex="-1"]),
                                     area[href],
                                     input:not([disabled]),
                                     select:not([disabled]),
                                     textarea:not([disabled]),
                                     button:not([disabled]),
                                     iframe,
                                     object,
                                     embed,
                                     *[tabindex]:not([tabindex="-1"]),
                                     *[contenteditable]`) : null;
let sa;
const sn = (e, { value: l = !0 }) => {
  if (l) {
    let a = Nt(e), t = Nt(e, !0);
    a && a.length > 0 && (sa = (o) => {
      a = Nt(e), t = Nt(e, !0);
      const i = a[0], u = a[a.length - 1];
      o.target === i && o.shiftKey && o.key === "Tab" ? (o.preventDefault(), u.focus()) : (o.target === u || Array.from(t).indexOf(o.target) >= 0) && !o.shiftKey && o.key === "Tab" && (o.preventDefault(), i.focus());
    }, e.addEventListener("keydown", sa));
  }
}, rn = (e) => {
  e.removeEventListener("keydown", sa);
}, un = {
  beforeMount: sn,
  beforeUnmount: rn
}, Ga = un, dn = ["aria-hidden"], va = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "ODropdown",
  configField: "dropdown",
  __name: "Dropdown",
  props: /* @__PURE__ */ ze({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: void 0
    },
    /** The active state of the dropdown, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: !1 },
    /** Trigger label, unnecessary when trgger slot is used */
    label: { type: String, default: void 0 },
    /** Dropdown is disabled */
    disabled: { type: Boolean, default: !1 },
    /** Dropdown content (items) are shown inline, trigger is removed */
    inline: { type: Boolean, default: !1 },
    /** Dropdown content will be scrollable */
    scrollable: { type: Boolean, default: !1 },
    /** Max height of dropdown content */
    maxHeight: {
      type: [String, Number],
      default: () => r("dropdown.maxHeight", 200)
    },
    /**
     * Position of the dropdown relative to the trigger
     * @values auto, top, bottom, left, right, top-right, top-left, bottom-left, bottom-right
     */
    position: {
      type: String,
      default: () => r("dropdown.position", "bottom-left"),
      validator: (e) => [
        "auto",
        "top",
        "bottom",
        "left",
        "right",
        "top-right",
        "top-left",
        "bottom-left",
        "bottom-right"
      ].indexOf(e) > -1
    },
    /** Dropdown content (items) are shown into a modal on mobile */
    mobileModal: {
      type: Boolean,
      default: () => r("dropdown.mobileModal", !0)
    },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => r("dropdown.animation", "fade")
    },
    /** Allows multiple selections */
    multiple: { type: Boolean, default: !1 },
    /** Trap focus inside the dropdown. */
    trapFocus: {
      type: Boolean,
      default: () => r("dropdown.trapFocus", !0)
    },
    /** Makes the component check if menu reached scroll start or end and emit scroll events. */
    checkScroll: {
      type: Boolean,
      default: () => r("dropdown.checkScroll", !1)
    },
    /** Dropdown will be expanded (full-width) */
    expanded: { type: Boolean, default: !1 },
    /** HTML element ID of the dropdown menu element */
    menuId: { type: String, default: null },
    /** Tabindex of the dropdown menu element */
    menuTabindex: { type: Number, default: null },
    /** Dropdown menu tag name */
    menuTag: {
      type: [String, Object, Function],
      default: () => r("dropdown.menuTag", "div")
    },
    /** Dropdown trigger tag name */
    triggerTag: {
      type: [String, Object, Function],
      default: () => r("dropdown.triggerTag", "div")
    },
    /**
     * Dropdown will be triggered by any events
     * @values click, hover, contextmenu, focus
     */
    triggers: {
      type: Array,
      default: () => r("dropdown.triggers", ["click"]),
      validator: (e) => e.filter(
        (l) => ["click", "hover", "contextmenu", "focus"].indexOf(l) > -1
      ).length === e.length
    },
    /** Dropdown delay before it appears (number in ms) */
    delay: { type: Number, default: void 0 },
    /**
     * Dropdown close options (pressing escape, clicking the content or outside)
     * @values true, false, escape, outside, content
     */
    closeable: {
      type: [Array, Boolean],
      default: () => r("dropdown.closeable", ["escape", "outside", "content"])
    },
    /** Set the tabindex attribute on the dropdown trigger div (-1 to prevent selection via tab key) */
    tabindex: { type: Number, default: 0 },
    /**
     * Role attribute to be passed to the list container for better accessibility.
     * Use menu only in situations where your dropdown is related to a navigation menu.
     * @values list, listbox, menu, dialog
     */
    ariaRole: {
      type: String,
      default: r("dropdown.ariaRole", "list"),
      validator: (e) => ["list", "listbox", "menu", "dialog"].indexOf(e) > -1
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => r("dropdown.mobileBreakpoint")
    },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => r("dropdown.teleport", !1)
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when the dropdown is teleported */
    teleportClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the trigger element */
    triggerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of dropdown menu when inline */
    inlineClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the overlay when on mobile */
    menuMobileOverlayClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the dropdown menu */
    menuClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of dropdown menu position */
    menuPositionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of dropdown menu when active */
    menuActiveClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of dropdown when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of dropdown when disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of dropdown when expanded */
    expandedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the root element indicating position of dropdown */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the root element indicating whether the dropdown is open */
    activeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the root element when the dropdown is hoverable */
    hoverableClass: {
      type: [String, Array, Function],
      default: void 0
    }
  }, {
    modelValue: {},
    modelModifiers: {},
    active: { type: Boolean },
    activeModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["update:modelValue", "update:active", "change", "close", "scroll-start", "scroll-end"], ["update:modelValue", "update:active"]),
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = Xe(e, "modelValue"), u = Xe(e, "active"), d = z(t.position);
    ce(
      () => t.position,
      ($) => d.value = $
    );
    const { isMobile: b } = dt(t.mobileBreakpoint), c = n(
      () => b.value && t.mobileModal && !t.inline
    ), v = n(() => t.mobileModal && ft.any()), m = n(() => ({
      maxHeight: t.scrollable ? St(t.maxHeight) : null,
      overflow: t.scrollable ? "auto" : null
    })), S = n(() => t.triggers.indexOf("hover") >= 0), B = z(), k = z(), g = [];
    let O;
    ce(
      u,
      ($) => {
        $ && Be ? setTimeout(() => {
          H.value.indexOf("outside") >= 0 && g.push(
            fa(B, p, [
              k
            ])
          ), H.value.indexOf("escape") >= 0 && g.push(
            Ze("keyup", I, document, {
              immediate: !0
            })
          );
        }) : $ || (g.forEach((Y) => Y()), g.length = 0);
      },
      { immediate: !0 }
    ), Ha(() => {
      g.forEach(($) => $()), g.length = 0;
    });
    const H = n(
      () => typeof t.closeable == "boolean" ? t.closeable ? ["escape", "outside", "content"] : [] : t.closeable
    );
    function p() {
      !u.value || t.inline || H.value.indexOf("outside") < 0 || (o("close", "outside"), u.value = !1);
    }
    function I($) {
      if (u.value && ($.key === "Escape" || $.key === "Esc")) {
        if (H.value.indexOf("escape") < 0)
          return;
        o("close", "escape"), u.value = !1;
      }
    }
    function w() {
      t.triggers.indexOf("click") < 0 || y();
    }
    function L($) {
      t.triggers.indexOf("contextmenu") < 0 || ($.preventDefault(), D());
    }
    function N() {
      t.triggers.indexOf("focus") < 0 || D();
    }
    const W = z(!1);
    function Q() {
      !v.value && t.triggers.indexOf("hover") >= 0 && (W.value = !0, D());
    }
    function P() {
      !v.value && W.value && (W.value = !1, U());
    }
    function y() {
      t.disabled || (u.value ? u.value = !u.value : De(() => u.value = !u.value));
    }
    function D() {
      t.disabled || (t.delay ? O = setTimeout(() => {
        u.value = !0, O = null;
      }, t.delay) : u.value = !0);
    }
    function U() {
      H.value.indexOf("content") < 0 || (o("close", "content"), u.value = !t.closeable, O && t.closeable && clearTimeout(O));
    }
    Be && t.checkScroll && Ze("scroll", G, B);
    function G() {
      const $ = je(B.value);
      $.clientHeight !== $.scrollHeight && ($.scrollTop + $.clientHeight >= $.scrollHeight ? o("scroll-end") : $.scrollTop <= 0 && o("scroll-start"));
    }
    function E($) {
      if (t.multiple ? (i.value && Array.isArray(i.value) ? i.value.indexOf($) === -1 ? i.value = [...i.value, $] : i.value = i.value.filter((Y) => Y !== $) : i.value = [$], De(() => o("change", i.value))) : i.value !== $ && (i.value = $, De(() => o("change", i.value))), !t.multiple) {
        if (H.value.indexOf("content") < 0)
          return;
        o("close", "content"), u.value = !1, W.value = !1;
      }
    }
    const C = n(() => ({
      props: t,
      selected: i.value,
      selectItem: E
    }));
    gt(B, { data: C });
    const A = h(
      ["rootClass", "o-drop"],
      ["disabledClass", "o-drop--disabled", null, n(() => t.disabled)],
      ["expandedClass", "o-drop--expanded", null, n(() => t.expanded)],
      ["inlineClass", "o-drop--inline", null, n(() => t.inline)],
      [
        "mobileClass",
        "o-drop--mobile",
        null,
        n(() => c.value && !S.value)
      ],
      [
        "positionClass",
        "o-drop--position-",
        d,
        n(() => !!d.value)
      ],
      [
        "activeClass",
        "o-drop--active",
        null,
        n(() => u.value || t.inline)
      ],
      ["hoverableClass", "o-drop--hoverable", null, S]
    ), x = h(["triggerClass", "o-drop__trigger"]), j = h([
      "teleportClass",
      "o-drop--teleport",
      null,
      n(() => !!t.teleport)
    ]), le = h([
      "menuMobileOverlayClass",
      "o-drop__overlay"
    ]), M = h(
      ["menuClass", "o-drop__menu"],
      [
        "menuPositionClass",
        "o-drop__menu--",
        d,
        n(() => !!d.value)
      ],
      [
        "menuActiveClass",
        "o-drop__menu--active",
        null,
        n(() => u.value || t.inline)
      ]
    );
    return l({ $trigger: k, $content: B }), ($, Y) => (f(), V("div", {
      "data-oruga": "dropdown",
      class: R(s(A)),
      onMouseleave: P,
      onFocusout: P
    }, [
      e.inline ? J("", !0) : (f(), ne(qe(e.triggerTag), {
        key: 0,
        ref_key: "triggerRef",
        ref: k,
        tabindex: e.disabled ? null : e.tabindex,
        class: R(s(x)),
        "aria-haspopup": e.ariaRole === "list" ? !0 : e.ariaRole,
        onClick: w,
        onContextmenu: L,
        onMouseenter: Q,
        onFocusCapture: N
      }, {
        default: se(() => [
          _($.$slots, "trigger", { active: u.value }, () => [
            Pe(ue(e.label), 1)
          ])
        ]),
        _: 3
      }, 40, ["tabindex", "class", "aria-haspopup"])),
      me(Xa, {
        position: d.value,
        "onUpdate:position": Y[0] || (Y[0] = (ie) => d.value = ie),
        teleport: e.teleport,
        class: R([...s(A), ...s(j)]),
        trigger: k.value,
        disabled: !u.value,
        "default-position": "bottom",
        "disable-positioning": !c.value
      }, {
        default: se(({ setContent: ie }) => [
          me(et, { name: e.animation }, {
            default: se(() => [
              c.value ? $e((f(), V("div", {
                key: 0,
                tabindex: -1,
                class: R(s(le)),
                "aria-hidden": e.disabled || !u.value
              }, null, 10, dn)), [
                [He, u.value]
              ]) : J("", !0)
            ]),
            _: 1
          }, 8, ["name"]),
          me(et, { name: e.animation }, {
            default: se(() => [
              $e((f(), ne(qe(e.menuTag), {
                id: e.menuId,
                ref: (fe) => B.value = ie(fe),
                tabindex: e.menuTabindex,
                class: R(s(M)),
                style: _e(m.value),
                role: e.ariaRole,
                "aria-hidden": e.disabled || !u.value,
                "aria-modal": !e.inline && e.trapFocus
              }, {
                default: se(() => [
                  _($.$slots, "default", {
                    active: u.value,
                    toggle: y
                  })
                ]),
                _: 2
              }, 1032, ["id", "tabindex", "class", "style", "role", "aria-hidden", "aria-modal"])), [
                [He, !e.disabled && (u.value || W.value) || e.inline],
                [s(Ga), e.trapFocus]
              ])
            ]),
            _: 2
          }, 1032, ["name"])
        ]),
        _: 3
      }, 8, ["position", "teleport", "class", "trigger", "disabled", "disable-positioning"])
    ], 34));
  }
}), Ct = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "ODropdownItem",
  configField: "dropdown",
  __name: "DropdownItem",
  props: {
    /** The value that will be returned on events and v-model - default is a uuid */
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: void 0
      // () => uuid(),
    },
    /** Item label, unnecessary when default slot is used */
    label: { type: String, default: void 0 },
    /** Item is disabled */
    disabled: { type: Boolean, default: !1 },
    /** Item is clickable and emit an event */
    clickable: { type: Boolean, default: !0 },
    /** Dropdown item tag name */
    tag: {
      type: [String, Object, Function],
      default: () => r("dropdown.itemTag", "div")
    },
    /** Set the tabindex attribute on the dropdown item div (-1 to prevent selection via tab key) */
    tabindex: { type: [Number, String], default: 0 },
    /**
     * Role attribute to be passed to the list item for better accessibility.
     * Use menuitem only in situations where your dropdown is related to a navigation menu.
     * @values listitem, menuitem, button
     */
    ariaRole: {
      type: String,
      default: r("dropdown.itemAriaRole", "listitem")
    },
    // class props (will not be displayed in the docs)
    /** Class of the dropdown item */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the dropdown item when active  */
    itemActiveClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the dropdown item when clickable */
    itemClickableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the dropdown item when disabled */
    itemDisabledClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = e, t = l, o = n(() => a.value || Ke()), { parent: i } = yt(), u = n(
      () => !i.value.props.disabled && !a.disabled && a.clickable
    ), d = n(() => i.value.selected === null ? !1 : i.value.props.multiple && Array.isArray(i.value.selected) ? i.value.selected.some(
      (v) => Tt(o.value, v)
    ) : Tt(o.value, i.value.selected));
    function b(v) {
      u.value && (i.value.selectItem(o.value), t("click", o.value, v));
    }
    const c = h(
      ["itemClass", "o-drop__item"],
      [
        "itemDisabledClass",
        "o-drop__item--disabled",
        null,
        n(() => i.value.props.disabled || a.disabled)
      ],
      ["itemActiveClass", "o-drop__item--active", null, d],
      ["itemClickableClass", "o-drop__item--clickable", null, u]
    );
    return (v, m) => (f(), ne(qe(e.tag), {
      class: R(s(c)),
      role: e.ariaRole,
      tabindex: e.tabindex,
      "data-oruga": "dropdown-item",
      onClick: b
    }, {
      default: se(() => [
        _(v.$slots, "default", {}, () => [
          Pe(ue(e.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["class", "role", "tabindex"]));
  }
}), cn = { key: 1 }, fn = { key: 1 };
var Ja = /* @__PURE__ */ ((e) => (e[e.Header = 0] = "Header", e[e.Footer = 1] = "Footer", e))(Ja || {});
const Qa = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OAutocomplete",
  configField: "autocomplete",
  inheritAttrs: !1,
  __name: "Autocomplete",
  props: /* @__PURE__ */ ze({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: [String, Number], default: void 0 },
    /** Input type */
    type: { type: String, default: "text" },
    /** Menu tag name */
    menuTag: {
      type: [String, Object, Function],
      default: () => r("autocomplete.menuTag", "div")
    },
    /** Menu item tag name */
    itemTag: {
      type: [String, Object, Function],
      default: () => r("autocomplete.itemTag", "div")
    },
    /** Options / suggestions */
    data: { type: Array, default: () => [] },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("autocomplete.size")
    },
    /**
     * Position of the dropdown
     * @values auto, top, bottom
     */
    position: {
      type: String,
      default: () => r("autocomplete.position", "auto"),
      validator: (e) => ["auto", "top", "bottom"].indexOf(e) >= 0
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
    expanded: { type: Boolean, default: !1 },
    /** Makes the element rounded */
    rounded: { type: Boolean, default: !1 },
    /** Same as native input disabled */
    disabled: { type: Boolean, default: !1 },
    /** Same as native maxlength, plus character counter */
    maxlength: { type: Number, default: void 0 },
    /** Makes the component check if list reached scroll start or end and emit scroll events. */
    checkScroll: {
      type: Boolean,
      default: () => r("autocomplete.checkScroll", !1)
    },
    /** Number of milliseconds to delay before to emit input event */
    debounce: {
      type: Number,
      default: () => r("autocomplete.debounce", 400)
    },
    /** The first option will always be pre-selected (easier to just hit enter or tab) */
    keepFirst: {
      type: Boolean,
      default: () => r("autocomplete.keepFirst", !1)
    },
    /** Clear input text on select */
    clearOnSelect: {
      type: Boolean,
      default: () => r("autocomplete.clearOnSelect", !1)
    },
    /** Open dropdown list on focus */
    openOnFocus: {
      type: Boolean,
      default: () => r("autocomplete.openOnFocus", !1)
    },
    /** Keep open dropdown list after select */
    keepOpen: {
      type: Boolean,
      default: () => r("autocomplete.keepOpen", !1)
    },
    /** Max height of dropdown content */
    maxHeight: {
      type: [String, Number],
      default: () => r("autocomplete.maxHeight")
    },
    /** Array of keys (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) which will add a tag when typing (default tab and enter) */
    confirmKeys: {
      type: Array,
      default: () => r("autocomplete.confirmKeys", ["Tab", "Enter"])
    },
    /** Dropdown content (items) are shown into a modal on mobile */
    mobileModal: {
      type: Boolean,
      default: () => r("autocomplete.mobileModal", !1)
    },
    /** Transition name to apply on dropdown list */
    animation: {
      type: String,
      default: () => r("autocomplete.animation", "fade")
    },
    /** Trigger the select event for the first pre-selected option when clicking outside and `keep-first` is enabled */
    selectOnClickOutside: { type: Boolean, default: !1 },
    /** Allows the header in the autocomplete to be selectable */
    selectableHeader: { type: Boolean, default: !1 },
    /** Allows the footer in the autocomplete to be selectable */
    selectableFooter: { type: Boolean, default: !1 },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("autocomplete.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => r("autocomplete.icon", void 0)
    },
    /** Makes the icon clickable */
    iconClickable: { type: Boolean, default: !1 },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => r("autocomplete.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: !1 },
    /** Variant of right icon */
    iconRightVariant: { type: String, default: void 0 },
    /** Add a button/icon to clear the inputed text */
    clearable: {
      type: Boolean,
      default: () => r("autocomplete.clearable", !1)
    },
    /** Icon name to be added on the clear button */
    clearIcon: {
      type: String,
      default: () => r("autocomplete.clearIcon", "close-circle")
    },
    /** Show status icon using field and variant prop */
    statusIcon: {
      type: Boolean,
      default: () => r("statusIcon", !0)
    },
    /** Native options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => r("autocomplete.autocomplete", "off")
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => r("useHtml5Validation", !0)
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
      default: () => r("autocomplete.teleport", !1)
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
      default: () => r("autocomplete.inputClasses", {})
    }
  }, {
    modelValue: { default: void 0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["update:modelValue", "input", "select", "select-header", "select-footer", "focus", "blur", "invalid", "icon-click", "icon-right-click", "scroll-start", "scroll-end"], ["update:modelValue"]),
  setup(e, { expose: l, emit: a }) {
    function t(X) {
      return X in Ja;
    }
    const o = e, i = a, u = Dt(), d = z(), b = z(), c = z(), v = z(), m = z([]);
    function S(X, te, pe) {
      te === 0 && pe === 0 && m.value.splice(0), X && m.value.push(X);
    }
    const { checkHtml5Validity: B, onInvalid: k, onFocus: g, onBlur: O, isFocused: H, setFocus: p } = rt(d, i, o), I = Xe(e, "modelValue"), w = z(!1), L = z(), N = z(), W = z(!1), Q = z(!1), P = z(null), y = Ke();
    ce(
      () => I.value,
      (X) => {
        const te = C(L.value);
        te && te !== X && j(null, !1), De(() => {
          U.value && !u.empty ? w.value = !1 : H.value && (!o.openOnFocus || X) && (w.value = !!X);
        });
      }
    ), ce(
      () => o.data,
      () => {
        if (o.keepFirst)
          De(() => {
            w.value ? le() : A(null);
          });
        else if (N.value) {
          const X = C(N.value), pe = D.value.map((we) => we.items).reduce((we, Oe) => [...we, ...Oe], []).findIndex((we) => C(we) === X);
          pe >= 0 ? De(() => x(pe)) : A(null);
        }
      }
    );
    const D = n(() => o.groupField ? o.groupOptions ? o.data.map((X) => {
      const te = Me(X, o.groupField), pe = Me(X, o.groupOptions);
      return { group: te, items: pe };
    }) : Object.keys(o.data).map((X) => ({
      group: X,
      items: o.data[X]
    })) : !o.openOnFocus && !o.keepOpen && I.value === "" ? [{ items: [] }] : [{ items: o.data }]), U = n(
      () => {
        var X;
        return !((X = D.value) != null && X.some(
          (te) => te.items && te.items.length
        ));
      }
    );
    ce(U, (X) => {
      H.value && (w.value = !X || !!u.empty);
    });
    const G = n(() => {
      const X = ["escape"];
      return o.keepOpen || (X.push("content"), X.push("outside")), X;
    });
    function E(X) {
      X === "outside" && o.keepFirst && N.value && o.selectOnClickOutside && j(N.value, !0);
    }
    function C(X) {
      if (!X)
        return "";
      const te = o.field && typeof X == "object" ? Me(X, o.field) : X;
      return (typeof o.formatter == "function" ? o.formatter(te) : te) || "";
    }
    function A(X) {
      X !== void 0 && (N.value = t(X) ? null : X, W.value = X === 0, Q.value = X === 1, P.value = null);
    }
    function x(X) {
      const te = je(m.value[X]);
      P.value = te ? te.id : null;
    }
    function j(X, te = !0, pe = void 0) {
      if (X !== void 0) {
        if (L.value = X, i("select", L.value, pe), L.value !== null) {
          if (o.clearOnSelect) {
            const we = d.value.$el.querySelector("input");
            we.value = "";
          } else
            I.value = C(L.value);
          A(null);
        }
        te && De(() => w.value = !1), B();
      }
    }
    function le() {
      De(() => {
        const X = D.value.filter(
          (te) => te.items && te.items.length
        );
        if (X.length) {
          const te = X[0].items[0];
          A(te), x(0);
        } else
          A(null);
      });
    }
    function M(X, te, pe = !0) {
      o.selectableHeader && (W.value || te === 0) && (i("select-header", X), te && A(null), pe && (w.value = !1)), o.selectableFooter && (Q.value || te === 1) && (i("select-footer", X), te && A(null), pe && (w.value = !1));
    }
    function $(X) {
      if (!w.value) {
        w.value = !0;
        return;
      }
      const te = D.value.map((Bt) => Bt.items).reduce((Bt, Zt) => [...Bt, ...Zt], []);
      v.value && o.selectableHeader && te.unshift(void 0), c.value && o.selectableFooter && te.push(void 0);
      let pe = te.map(Qe).indexOf(Qe(N.value));
      W.value ? pe = 0 + X : Q.value ? pe = te.length - 1 + X : pe = pe + X, pe = pe > te.length - 1 ? te.length - 1 : pe, pe = pe < 0 ? 0 : pe, c.value && o.selectableFooter && pe === te.length - 1 ? A(
        1
        /* Footer */
      ) : v.value && o.selectableHeader && pe === 0 ? A(
        0
        /* Header */
      ) : A(te[pe] !== void 0 ? te[pe] : null);
      let we = m.value || [];
      v.value && o.selectableHeader && (we = [v.value, ...we]), c.value && o.selectableFooter && (we = [...we, c.value]);
      const Oe = je(we[pe]);
      if (!Oe)
        return;
      P.value = Oe.id;
      const Ee = je(b.value.$content), bt = Ee.scrollTop, $t = Ee.scrollTop + Ee.clientHeight - Oe.clientHeight;
      Oe.offsetTop < bt ? Ee.scrollTop = Oe.offsetTop : Oe.offsetTop >= $t && (Ee.scrollTop = Oe.offsetTop - Ee.clientHeight + Oe.clientHeight), o.checkScroll && nt();
    }
    function Y(X) {
      if (X.key === "Enter" && X.preventDefault(), o.confirmKeys.indexOf(X.key) >= 0) {
        X.key === "," && X.preventDefault();
        const te = !o.keepOpen || X.key === "Tab";
        if (N.value === null) {
          M(X, null, te);
          return;
        }
        j(N.value, te, X);
      }
    }
    function ie(X) {
      C(L.value) === I.value && d.value.$el.querySelector("input").select(), o.openOnFocus && (w.value = !0, o.keepFirst && le()), g(X);
    }
    function fe(X) {
      O(X);
    }
    function Le(X) {
      const te = C(L.value);
      te && te === I.value || Re(X);
    }
    let Re = ia(Se, o.debounce || 0);
    La(() => {
      Re = ia(Se, o.debounce);
    });
    function Se(X) {
      i("input", X), B();
    }
    const Te = n(
      () => o.clearable && I.value && o.clearIcon ? o.clearIcon : o.iconRight
    ), tt = n(
      () => o.clearable ? !0 : o.iconRightClickable
    );
    function Ge(X) {
      o.clearable ? (I.value = "", j(null, !1), o.openOnFocus && p()) : i("icon-right-click", X);
    }
    st(() => {
      Be && o.checkScroll && Ze(
        "scroll",
        nt,
        b.value.$content,
        { immediate: !0 }
      );
    });
    function nt() {
      var Oe, Ee;
      const X = je(b.value.$content);
      if (!X)
        return;
      const te = X.offsetTop, pe = ((Oe = v.value) == null ? void 0 : Oe.clientHeight) || 0, we = (((Ee = c.value) == null ? void 0 : Ee.clientHeight) || 0) + te;
      X.clientHeight !== X.scrollHeight && (X.scrollTop + X.clientHeight + we >= X.scrollHeight ? i("scroll-end") : X.scrollTop <= pe && i("scroll-start"));
    }
    const Je = da(), ot = n(() => ({
      ...Je,
      ...o.inputClasses
    })), ct = h(["rootClass", "o-acp"]), ee = h(["itemClass", "o-acp__item"]), Z = h([
      "itemEmptyClass",
      "o-acp__item--empty"
    ]), T = h([
      "itemGroupTitleClass",
      "o-acp__item-group-title"
    ]), de = h(
      ["itemHeaderClass", "o-acp__item-header"],
      ["itemHoverClass", "o-acp__item--hover", null, W]
    ), ke = h(
      ["itemFooterClass", "o-acp__item-footer"],
      ["itemHoverClass", "o-acp__item--hover", null, Q]
    );
    function Ne(X) {
      const te = h([
        "itemHoverClass",
        "o-acp__item--hover",
        null,
        Qe(X) === Qe(N.value)
      ]);
      return [...ee.value, ...te.value];
    }
    return l({ focus: p }), (X, te) => (f(), ne(va, {
      ref_key: "dropdownRef",
      ref: b,
      modelValue: L.value,
      "onUpdate:modelValue": te[7] || (te[7] = (pe) => L.value = pe),
      active: w.value,
      "onUpdate:active": te[8] || (te[8] = (pe) => w.value = pe),
      "data-oruga": "autocomplete",
      class: R(s(ct)),
      "menu-id": s(y),
      "menu-tabindex": -1,
      "menu-tag": e.menuTag,
      scrollable: "",
      "aria-role": "listbox",
      tabindex: -1,
      "trap-focus": !1,
      triggers: [],
      disabled: e.disabled,
      closeable: G.value,
      "mobile-modal": e.mobileModal,
      "max-height": e.maxHeight,
      animation: e.animation,
      position: e.position,
      teleport: e.teleport,
      expanded: e.expanded,
      onClose: E
    }, {
      trigger: se(() => [
        me(Ft, ye({
          ref_key: "inputRef",
          ref: d
        }, ot.value, {
          modelValue: I.value,
          "onUpdate:modelValue": [
            te[0] || (te[0] = (pe) => I.value = pe),
            Le
          ],
          type: e.type,
          size: e.size,
          rounded: e.rounded,
          icon: e.icon,
          "icon-right": Te.value,
          "icon-right-clickable": tt.value,
          "icon-pack": e.iconPack,
          placeholder: e.placeholder,
          maxlength: e.maxlength,
          autocomplete: e.autocomplete,
          "use-html5-validation": !1,
          role: "combobox",
          "aria-activedescendant": P.value,
          "aria-autocomplete": e.keepFirst ? "both" : "list",
          "aria-controls": s(y),
          "aria-expanded": w.value,
          expanded: e.expanded,
          disabled: e.disabled,
          "status-icon": e.statusIcon,
          onFocus: ie,
          onBlur: fe,
          onInvalid: s(k),
          onKeydown: [
            Y,
            te[1] || (te[1] = Ce(ve((pe) => $(-1), ["prevent"]), ["up"])),
            te[2] || (te[2] = Ce(ve((pe) => $(1), ["prevent"]), ["down"]))
          ],
          onIconClick: te[3] || (te[3] = (pe) => X.$emit("icon-click", pe)),
          onIconRightClick: Ge
        }), null, 16, ["modelValue", "type", "size", "rounded", "icon", "icon-right", "icon-right-clickable", "icon-pack", "placeholder", "maxlength", "autocomplete", "aria-activedescendant", "aria-autocomplete", "aria-controls", "aria-expanded", "expanded", "disabled", "status-icon", "onInvalid"])
      ]),
      default: se(() => [
        X.$slots.header ? (f(), ne(Ct, {
          key: 0,
          id: `${s(y)}-header`,
          ref_key: "headerRef",
          ref: v,
          tag: e.itemTag,
          "aria-role": "option",
          "aria-selected": W.value,
          tabindex: -1,
          class: R([...s(ee), ...s(de)]),
          onClick: te[4] || (te[4] = (pe, we) => M(
            we,
            0
            /* Header */
          ))
        }, {
          default: se(() => [
            _(X.$slots, "header")
          ]),
          _: 3
        }, 8, ["id", "tag", "aria-selected", "class"])) : J("", !0),
        (f(!0), V(he, null, xe(D.value, (pe, we) => (f(), V(he, null, [
          pe.group ? (f(), ne(Ct, {
            key: we + "group",
            tag: e.itemTag,
            tabindex: -1,
            class: R([...s(ee), ...s(T)])
          }, {
            default: se(() => [
              X.$slots.group ? _(X.$slots, "group", {
                key: 0,
                group: pe.group,
                index: we
              }) : (f(), V("span", cn, ue(pe.group), 1))
            ]),
            _: 2
          }, 1032, ["tag", "class"])) : J("", !0),
          (f(!0), V(he, null, xe(pe.items, (Oe, Ee) => (f(), ne(Ct, {
            id: `${s(y)}-${we}-${Ee}`,
            key: we + ":" + Ee,
            ref_for: !0,
            ref: (bt) => S(bt, we, Ee),
            value: Oe,
            tag: e.itemTag,
            class: R(Ne(Oe)),
            "aria-role": "option",
            "aria-selected": Qe(Oe) === Qe(N.value),
            tabindex: -1,
            onClick: te[5] || (te[5] = (bt, $t) => j(bt, !e.keepOpen, $t))
          }, {
            default: se(() => [
              X.$slots.default ? _(X.$slots, "default", {
                key: 0,
                option: Oe,
                value: C(Oe),
                index: Ee
              }) : (f(), V("span", fn, ue(C(Oe)), 1))
            ]),
            _: 2
          }, 1032, ["id", "value", "tag", "class", "aria-selected"]))), 128))
        ], 64))), 256)),
        U.value && X.$slots.empty ? (f(), ne(Ct, {
          key: 1,
          tag: e.itemTag,
          class: R([...s(ee), ...s(Z)])
        }, {
          default: se(() => [
            _(X.$slots, "empty")
          ]),
          _: 3
        }, 8, ["tag", "class"])) : J("", !0),
        X.$slots.footer ? (f(), ne(Ct, {
          key: 2,
          id: `${s(y)}-footer`,
          ref_key: "footerRef",
          ref: c,
          tag: e.itemTag,
          "aria-role": "option",
          "aria-selected": Q.value,
          tabindex: -1,
          class: R([...s(ee), ...s(ke)]),
          onClick: te[6] || (te[6] = (pe, we) => M(
            we,
            1
            /* Footer */
          ))
        }, {
          default: se(() => [
            _(X.$slots, "footer")
          ]),
          _: 3
        }, 8, ["id", "tag", "aria-selected", "class"])) : J("", !0)
      ]),
      _: 3
    }, 8, ["modelValue", "active", "class", "menu-id", "menu-tag", "disabled", "closeable", "mobile-modal", "max-height", "animation", "position", "teleport", "expanded"]));
  }
}), vn = {
  install(e) {
    Ae(e, Qa);
  }
}, At = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OButton",
  configField: "button",
  __name: "Button",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /**
     * Button tag name
     * @values button, a, input, router-link, nuxt-link (or other nuxt alias)
     */
    tag: {
      type: [String, Object, Function],
      default: () => r("button.tag", "button")
    },
    /**
     * Color variant of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("button.variant")
    },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("button.size")
    },
    /** Button label, unnecessary when default slot is used */
    label: { type: String, default: void 0 },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("button.iconPack", void 0)
    },
    /** Icon name to show on the left */
    iconLeft: { type: String, default: void 0 },
    /** Icon name to show on the right */
    iconRight: { type: String, default: void 0 },
    /** Enable rounded style */
    rounded: {
      type: Boolean,
      default: () => r("button.rounded", !1)
    },
    /** Button will be expanded (full-width) */
    expanded: { type: Boolean, default: !1 },
    /** Button will be disabled */
    disabled: { type: Boolean, default: !1 },
    /** Enable outlined style */
    outlined: { type: Boolean, default: !1 },
    /** Enable loading style */
    loading: { type: Boolean, default: !1 },
    /** Enable inverted style */
    inverted: { type: Boolean, default: !1 },
    /** Button type, like native */
    nativeType: {
      type: String,
      default: "button",
      validator: (e) => ["button", "submit", "reset"].indexOf(e) >= 0
    },
    /** Accessibility Role attribute to be passed to the button. */
    role: {
      type: String,
      default: () => r("button.role", "button")
    },
    /**
     * This is used internally
     * @ignore
     */
    iconBoth: { type: Boolean, default: !1 },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button elements wrapper */
    wrapperClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button when outlined */
    outlinedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button with loading */
    loadingClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button when inverted */
    invertedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button when expanded */
    expandedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button when rounded */
    roundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button when disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button icon */
    iconClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button icon on the left */
    iconLeftClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button icon on the right */
    iconRightClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button label */
    labelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the button variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  setup(e) {
    const l = e, a = n(
      () => typeof l.disabled < "u" && l.disabled !== !1 ? "button" : l.tag
    ), t = n(
      () => l.tag === "button" || l.tag === "input" ? l.nativeType : null
    ), o = n(() => l.disabled ? !0 : null), i = h(
      ["rootClass", "o-btn"],
      [
        "sizeClass",
        "o-btn--",
        n(() => l.size),
        n(() => !!l.size)
      ],
      [
        "variantClass",
        "o-btn--",
        n(() => l.variant),
        n(() => !!l.variant)
      ],
      [
        "outlinedClass",
        "o-btn--outlined",
        null,
        n(() => l.outlined && !l.variant)
      ],
      [
        "invertedClass",
        "o-btn--inverted",
        null,
        n(() => l.inverted && !l.variant)
      ],
      [
        "outlinedClass",
        "o-btn--outlined-",
        n(() => l.variant),
        n(() => l.outlined && !!l.variant)
      ],
      [
        "invertedClass",
        "o-btn--inverted-",
        n(() => l.variant),
        n(() => l.inverted && !!l.variant)
      ],
      ["expandedClass", "o-btn--expanded", null, n(() => l.expanded)],
      ["loadingClass", "o-btn--loading", null, n(() => l.loading)],
      ["roundedClass", "o-btn--rounded", null, n(() => l.rounded)],
      ["disabledClass", "o-btn--disabled", null, n(() => l.disabled)]
    ), u = h(["labelClass", "o-btn__label"]), d = h(["iconClass", "o-btn__icon"]), b = h(["iconLeftClass", "o-btn__icon-left"]), c = h(["iconRightClass", "o-btn__icon-right"]), v = h(["wrapperClass", "o-btn__wrapper"]);
    return (m, S) => (f(), ne(qe(a.value), {
      disabled: o.value,
      type: t.value,
      class: R(s(i)),
      role: e.role,
      "data-oruga": "button"
    }, {
      default: se(() => [
        ae("span", {
          class: R(s(v))
        }, [
          e.iconLeft ? (f(), ne(Ve, {
            key: 0,
            pack: e.iconPack,
            icon: e.iconLeft,
            size: e.size,
            both: e.iconBoth,
            class: R([...s(d), ...s(b)])
          }, null, 8, ["pack", "icon", "size", "both", "class"])) : J("", !0),
          e.label || m.$slots.default ? (f(), V("span", {
            key: 1,
            class: R(s(u))
          }, [
            _(m.$slots, "default", {}, () => [
              Pe(ue(e.label), 1)
            ])
          ], 2)) : J("", !0),
          e.iconRight ? (f(), ne(Ve, {
            key: 2,
            pack: e.iconPack,
            icon: e.iconRight,
            size: e.size,
            both: e.iconBoth,
            class: R([...s(d), ...s(c)])
          }, null, 8, ["pack", "icon", "size", "both", "class"])) : J("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["disabled", "type", "class", "role"]));
  }
}), pn = {
  install(e) {
    Ae(e, At);
  }
}, mn = ["onFocus", "onMouseover", "onClick", "onKeypress"], yn = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OCarousel",
  configField: "carousel",
  __name: "Carousel",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: Number, default: 0 },
    /** Enable drag mode */
    dragable: { type: Boolean, default: !0 },
    /** Timer interval for `autoplay` */
    interval: {
      type: Number,
      default: () => r("carousel.interval", 3500)
    },
    /** Move item automaticalls after `interval` */
    autoplay: { type: Boolean, default: !1 },
    /** Pause autoplay on hover */
    pauseHover: { type: Boolean, default: !1 },
    /** Repeat from the beginning after reaching the end */
    repeat: { type: Boolean, default: !1 },
    /** Show an overlay */
    overlay: { type: Boolean, default: !1 },
    /** Enable indicators */
    indicators: { type: Boolean, default: !0 },
    /** Place indicators inside the carousel */
    indicatorInside: { type: Boolean, default: !1 },
    /**
     * Indicator interaction mode
     * @values click, hover
     */
    indicatorMode: {
      type: String,
      default: "click",
      validator: (e) => ["click", "hover"].indexOf(e) >= 0
    },
    /** Position of the indicator - depends on used theme */
    indicatorPosition: {
      type: String,
      default: () => r("carousel.indicatorPosition", "bottom")
    },
    /** Style of the indicator - depends on used theme */
    indicatorStyle: {
      type: String,
      default: () => r("carousel.indicatorStyle", "dots")
    },
    /** Number of items to show at once*/
    itemsToShow: {
      type: Number,
      default: () => r("carousel.itemsToShow", 1)
    },
    /** Number of items to switch at once */
    itemsToList: {
      type: Number,
      default: () => r("carousel.itemsToList", 1)
    },
    /** Show next / prev arrows */
    arrows: {
      type: Boolean,
      default: () => r("carousel.arrows", !0)
    },
    /** Show next / prev arrows only on hover */
    arrowsHover: {
      type: Boolean,
      default: () => r("carousel.arrowsHover", !0)
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("carousel.iconPack")
    },
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
      type: String,
      default: () => r("carousel.iconSize")
    },
    /** Icon name for previous icon */
    iconPrev: {
      type: String,
      default: () => r("carousel.iconPrev", "chevron-left")
    },
    /** Icon name for next icon */
    iconNext: {
      type: String,
      default: () => r("carousel.iconNext", "chevron-right")
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
  setup(e, { emit: l }) {
    const a = e, t = l, o = z();
    function i() {
      j(), x();
    }
    const u = n(() => ({
      restartTimer: i,
      itemWidth: O.value,
      activeIndex: c.value,
      onClick: (T) => t("click", T),
      setActive: (T) => y(T)
    })), { childItems: d } = gt(o, { data: u }), b = xt(a, t), c = z(a.modelValue), v = z(null), m = z(0), S = z(0);
    ce(
      () => a.modelValue,
      (T) => {
        T <= d.value.length - 1 && y(T * g.value.itemsToList, !0);
      }
    ), ce([() => a.itemsToList, () => a.itemsToShow], () => k()), st(() => {
      Be && (window.ResizeObserver && (v.value = new window.ResizeObserver(k), v.value.observe(o.value)), B(), x());
    }), It(() => {
      Be && (window.ResizeObserver && v.value.disconnect(), Se(), j());
    }), Be && (Ze("resize", B, window), Ze("animationend", k), Ze("transitionend", k), Ze("transitionstart", k));
    function B() {
      m.value = window.innerWidth;
    }
    function k() {
      De(() => S.value++);
    }
    const g = n(() => {
      const de = Object.keys(a.breakpoints).map(Number).sort((Ne, X) => X - Ne).filter(
        (Ne) => m.value >= Ne
      )[0], ke = Qe(
        de ? { ...a, ...a.breakpoints[de] } : a
      );
      return ke.itemsToList || (ke.itemsToList = 1), ke.itemsToShow || (ke.itemsToShow = 1), Ml(ke);
    }), O = n(() => m.value ? (S.value, o.value.getBoundingClientRect().width / g.value.itemsToShow) : 0), H = n(
      () => -Fa(
        ie.value + c.value * O.value,
        0,
        (d.value.length - g.value.itemsToShow) * O.value
      )
    ), p = n(() => d.value.length), I = n(
      () => Math.ceil(p.value / g.value.itemsToList)
    ), w = n(
      () => Math.ceil(c.value / g.value.itemsToList)
    ), L = n(
      () => g.value.arrowsHover && U.value || !g.value.arrowsHover
    ), N = n(
      () => (g.value.repeat || c.value > 0) && L.value
    );
    function W() {
      y(c.value - g.value.itemsToList);
    }
    const Q = n(
      () => (g.value.repeat || c.value < p.value - 1) && L.value
    );
    function P() {
      y(c.value + g.value.itemsToList);
    }
    function y(T, de) {
      g.value.repeat && (T = Yt(T, p.value)), T = Fa(T, 0, p.value), c.value = T, t("scroll", w.value), de || (b.value = Math.ceil(T / g.value.itemsToList));
    }
    function D(T, de) {
      a.indicatorMode === T && y(de * g.value.itemsToList);
    }
    const U = z(!1), G = z(!1), E = z(null);
    function C() {
      U.value = !0, le();
    }
    function A() {
      U.value = !1, x();
    }
    ce(
      () => a.autoplay,
      (T) => {
        T ? x() : j();
      }
    ), ce(
      () => a.repeat,
      (T) => {
        T && x();
      }
    );
    function x() {
      !a.autoplay || E.value || (G.value = !1, E.value = setInterval(() => {
        !a.repeat && !Q.value ? j() : P();
      }, a.interval));
    }
    function j() {
      G.value = !0, E.value && (clearInterval(E.value), E.value = null);
    }
    function le() {
      a.pauseHover && a.autoplay && j();
    }
    const M = z(!1), $ = z(), Y = z(0), ie = z(0), fe = n(() => it($.value));
    function Le(T) {
      fe.value || !g.value.dragable || T.button !== 0 && T.type !== "touchstart" || (Y.value = Date.now(), M.value = !!T.touches, $.value = M.value ? T.touches[0].clientX : T.clientX, M.value && j(), Be && (window.addEventListener(
        M.value ? "touchmove" : "mousemove",
        Re
      ), window.addEventListener(
        M.value ? "touchend" : "mouseup",
        Se
      )));
    }
    function Re(T) {
      if (!fe.value)
        return;
      const de = T.touches ? (T.changedTouches[0] || T.touches[0]).clientX : T.clientX;
      ie.value = $.value - de, T.touches || T.preventDefault();
    }
    function Se(T) {
      if (!(!fe.value && !Y.value)) {
        if (Y.value) {
          const de = Hl(ie.value), ke = Math.round(
            Math.abs(ie.value / O.value) + 0.15
          );
          y(c.value + de * ke);
        }
        ie.value = 0, $.value = void 0, T != null && T.touches && x(), Be && (window.removeEventListener(
          M.value ? "touchmove" : "mousemove",
          Re
        ), window.removeEventListener(
          M.value ? "touchend" : "mouseup",
          Se
        ));
      }
    }
    const Te = h(
      ["rootClass", "o-car"],
      ["overlayClass", "o-car__overlay", null, n(() => a.overlay)]
    ), tt = h(["wrapperClass", "o-car__wrapper"]), Ge = h(
      ["itemsClass", "o-car__items"],
      ["itemsDraggingClass", "o-car__items--dragging", null, fe]
    ), nt = h([
      "arrowIconClass",
      "o-car__arrow__icon"
    ]), Je = h([
      "arrowIconPrevClass",
      "o-car__arrow__icon-prev"
    ]), ot = h([
      "arrowIconNextClass",
      "o-car__arrow__icon-next"
    ]);
    function ct(T) {
      return h(
        ["indicatorItemClass", "o-car__indicator__item"],
        [
          "indicatorItemActiveClass",
          "o-car__indicator__item--active",
          null,
          w.value === T
        ],
        [
          "indicatorItemStyleClass",
          "o-car__indicator__item--",
          a.indicatorStyle,
          !!a.indicatorStyle
        ]
      ).value;
    }
    const ee = h(
      ["indicatorsClass", "o-car__indicators"],
      [
        "indicatorsInsideClass",
        "o-car__indicators--inside",
        null,
        n(() => !!a.indicatorInside)
      ],
      [
        "indicatorsInsidePositionClass",
        "o-car__indicators--inside--",
        n(() => a.indicatorPosition),
        n(() => a.indicatorInside && !!a.indicatorPosition)
      ]
    ), Z = h(["indicatorClass", "o-car__indicator"]);
    return (T, de) => (f(), V("div", {
      ref_key: "rootRef",
      ref: o,
      class: R(s(Te)),
      "data-oruga": "carousel",
      role: "region",
      onMouseover: C,
      onMouseleave: A,
      onFocus: C,
      onBlur: A,
      onKeydown: [
        Ce(W, ["left"]),
        Ce(P, ["right"])
      ]
    }, [
      ae("div", {
        class: R(s(tt))
      }, [
        ae("div", {
          class: R(s(Ge)),
          style: _e("transform:translateX(" + H.value + "px)"),
          tabindex: "0",
          role: "group",
          draggable: "true",
          "aria-roledescription": "carousel",
          onMousedown: Le,
          onTouchstart: Le
        }, [
          _(T.$slots, "default")
        ], 38),
        _(T.$slots, "arrow", {
          hasPrev: N.value,
          prev: W,
          hasNext: Q.value,
          next: P
        }, () => [
          e.arrows ? (f(), V(he, { key: 0 }, [
            $e(me(Ve, {
              class: R([...s(nt), ...s(Je)]),
              pack: e.iconPack,
              icon: e.iconPrev,
              size: e.iconSize,
              both: "",
              role: "button",
              tabindex: "0",
              onClick: W,
              onKeydown: Ce(W, ["enter"])
            }, null, 8, ["class", "pack", "icon", "size"]), [
              [He, N.value]
            ]),
            $e(me(Ve, {
              class: R([...s(nt), ...s(ot)]),
              pack: e.iconPack,
              icon: e.iconNext,
              size: e.iconSize,
              both: "",
              role: "button",
              tabindex: "0",
              onClick: P,
              onKeydown: Ce(P, ["enter"])
            }, null, 8, ["class", "pack", "icon", "size"]), [
              [He, Q.value]
            ])
          ], 64)) : J("", !0)
        ])
      ], 2),
      _(T.$slots, "indicators", {
        active: s(b),
        switchTo: y,
        indicatorIndex: w.value
      }, () => [
        s(d).length ? (f(), V(he, { key: 0 }, [
          e.indicators ? (f(), V("div", {
            key: 0,
            class: R(s(ee)),
            role: "group"
          }, [
            (f(!0), V(he, null, xe(I.value, (ke, Ne) => (f(), V("div", {
              key: Ne,
              class: R(s(Z)),
              role: "button",
              tabindex: "0",
              onFocus: (X) => D("hover", Ne),
              onMouseover: (X) => D("hover", Ne),
              onClick: (X) => D("click", Ne),
              onKeypress: Ce((X) => D("click", Ne), ["enter"])
            }, [
              _(T.$slots, "indicator", { index: Ne }, () => [
                ae("span", {
                  class: R(ct(Ne))
                }, null, 2)
              ])
            ], 42, mn))), 128))
          ], 2)) : J("", !0)
        ], 64)) : J("", !0)
      ]),
      e.overlay ? _(T.$slots, "overlay", { key: 0 }) : J("", !0)
    ], 34));
  }
}), gn = ["data-id", "role", "aria-selected"], bn = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OCarouselItem",
  configField: "carousel",
  __name: "CarouselItem",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Make item clickable */
    clickable: { type: Boolean, default: !1 },
    /** Role attribute to be passed to the div wrapper for better accessibility */
    ariaRole: {
      type: String,
      default: () => r("carousel.ariaRole", "option")
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
  setup(e) {
    const l = e, { parent: a, item: t } = yt(), o = n(() => a.value.activeIndex === t.value.index), i = n(() => ({ width: `${a.value.itemWidth}px` }));
    function u(b) {
      o.value && a.value.onClick(b), l.clickable && a.value.setActive(t.value.index);
    }
    const d = h(
      ["itemClass", "o-car__item"],
      ["itemActiveClass", "o-car__item--active", null, o],
      [
        "itemClickableClass",
        "o-car__item--clickable",
        null,
        n(() => l.clickable)
      ]
    );
    return (b, c) => (f(), V("div", {
      class: R(s(d)),
      style: _e(i.value),
      "data-id": `carousel-${s(t).identifier}`,
      "data-oruga": "carousel-item",
      role: e.ariaRole,
      "aria-roledescription": "item",
      "aria-selected": o.value,
      onClick: u,
      onKeypress: Ce(u, ["enter"])
    }, [
      _(b.$slots, "default")
    ], 46, gn));
  }
}), Cn = {
  install(e) {
    Ae(e, yn), Ae(e, bn);
  }
}, hn = ["aria-checked"], kn = ["disabled", "required", "name", "autocomplete", "value", ".indeterminate", "true-value", "false-value", "aria-labelledby"], Sn = ["id"], Vt = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OCheckbox",
  configField: "checkbox",
  inheritAttrs: !1,
  __name: "Checkbox",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: [String, Number, Boolean, Array], default: void 0 },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("checkbox.variant")
    },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("checkbox.size")
    },
    /** Input label, unnecessary when default slot is used */
    label: { type: String, default: void 0 },
    /** Same as native indeterminate */
    indeterminate: { type: Boolean, default: !1 },
    /** Same as native value */
    nativeValue: { type: [String, Number, Boolean], default: void 0 },
    /** Same as native disabled */
    disabled: { type: Boolean, default: !1 },
    /** Same as native required */
    required: { type: Boolean, default: !1 },
    /** Same as native name */
    name: { type: String, default: void 0 },
    /** Overrides the returned value when it's checked */
    trueValue: { type: [String, Number, Boolean], default: !0 },
    /** Overrides the returned value when it's not checked */
    falseValue: { type: [String, Number, Boolean], default: !1 },
    /** Accessibility label to establish relationship between the checkbox and control label */
    ariaLabelledby: { type: String, default: () => Ke() },
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => r("checkbox.autocomplete", "off")
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => r("useHtml5Validation", !0)
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when checkbox is disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the root element when checked */
    checkedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the checkbox input */
    inputClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the checkbox input when checked */
    inputCheckedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when checkbox is indeterminate */
    indeterminateClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the checkbox labe */
    labelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the checkbox size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the checkbox variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "update:indeterminate", "focus", "blur", "invalid"],
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = z(), { onBlur: u, onFocus: d, onInvalid: b, setFocus: c } = rt(
      i,
      o,
      t
    ), v = xt(t, o, { passive: !0 }), m = Ue("indeterminate", t, o), S = n(
      () => v.value === t.trueValue || Array.isArray(v.value) && v.value.includes(t.nativeValue)
    );
    function B(H) {
      o("input", v.value, H);
    }
    const k = h(
      ["rootClass", "o-chk"],
      ["checkedClass", "o-chk--checked", null, S],
      [
        "sizeClass",
        "o-chk--",
        n(() => t.size),
        n(() => !!t.size)
      ],
      ["disabledClass", "o-chk--disabled", null, n(() => t.disabled)],
      [
        "variantClass",
        "o-chk--",
        n(() => t.variant),
        n(() => !!t.variant)
      ]
    ), g = h(
      ["inputClass", "o-chk__input"],
      ["inputCheckedClass", "o-chk__input--checked", null, S],
      [
        "indeterminateClass",
        "o-chk__input--indeterminate",
        null,
        m
      ]
    ), O = h(["labelClass", "o-chk__label"]);
    return l({ focus: c }), (H, p) => (f(), V("label", {
      ref: "label",
      class: R(s(k)),
      "data-oruga": "checkbox",
      role: "checkbox",
      "aria-checked": S.value,
      onClick: p[5] || (p[5] = ve(
        //@ts-ignore
        (...I) => s(c) && s(c)(...I),
        ["stop"]
      )),
      onKeydown: p[6] || (p[6] = Ce(ve(
        //@ts-ignore
        (...I) => s(c) && s(c)(...I),
        ["prevent"]
      ), ["enter"]))
    }, [
      $e(ae("input", ye(H.$attrs, {
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": p[0] || (p[0] = (I) => lt(v) ? v.value = I : null),
        type: "checkbox",
        "data-oruga-input": "checkbox",
        class: s(g),
        disabled: e.disabled,
        required: e.required,
        name: e.name,
        autocomplete: e.autocomplete,
        value: e.nativeValue,
        ".indeterminate": e.indeterminate,
        "true-value": e.trueValue,
        "false-value": e.falseValue,
        "aria-labelledby": e.ariaLabelledby,
        onClick: p[1] || (p[1] = ve(() => {
        }, ["stop"])),
        onBlur: p[2] || (p[2] = //@ts-ignore
        (...I) => s(u) && s(u)(...I)),
        onFocus: p[3] || (p[3] = //@ts-ignore
        (...I) => s(d) && s(d)(...I)),
        onInvalid: p[4] || (p[4] = //@ts-ignore
        (...I) => s(b) && s(b)(...I)),
        onInput: B
      }), null, 48, kn), [
        [Na, s(v)]
      ]),
      e.label || H.$slots.default ? (f(), V("span", {
        key: 0,
        id: e.ariaLabelledby,
        class: R(s(O))
      }, [
        _(H.$slots, "default", {}, () => [
          Pe(ue(e.label), 1)
        ])
      ], 10, Sn)) : J("", !0)
    ], 42, hn));
  }
}), Fn = {
  install(e) {
    Ae(e, Vt);
  }
}, An = ["id"], wn = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OCollapse",
  configField: "collapse",
  __name: "Collapse",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether collapse is open or not, use v-model:open to make it two-way binding */
    open: { type: Boolean, default: !0 },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => r("collapse.animation", "fade")
    },
    /** Id property of the content container */
    contentId: { type: String, default: () => Ke() },
    /**
     * Trigger position
     * @values top, bottom
     */
    position: {
      type: String,
      default: () => r("collapse.position", "top"),
      validator: (e) => ["top", "bottom"].indexOf(e) > -1
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the trigger element */
    triggerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the content */
    contentClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:open", "open", "close"],
  setup(e, { emit: l }) {
    const a = e, t = l, o = Ue("open", a, t, { passive: !0 });
    function i() {
      o.value = !o.value, o.value ? t("open") : t("close");
    }
    const u = h(["rootClass", "o-clps"]), d = h(["triggerClass", "o-clps__trigger"]), b = h(["contentClass", "o-clps__content"]);
    return (c, v) => (f(), V("div", {
      class: R(s(u)),
      "data-oruga": "collapse"
    }, [
      e.position === "top" ? (f(), V("div", {
        key: 0,
        class: R(s(d)),
        role: "button",
        tabindex: "0",
        onClick: i,
        onKeydown: Ce(i, ["enter"])
      }, [
        _(c.$slots, "trigger", { open: s(o) })
      ], 34)) : J("", !0),
      me(et, { name: e.animation }, {
        default: se(() => [
          $e(ae("div", {
            id: e.contentId,
            class: R(s(b))
          }, [
            _(c.$slots, "default")
          ], 10, An), [
            [He, s(o)]
          ])
        ]),
        _: 3
      }, 8, ["name"]),
      e.position === "bottom" ? (f(), V("div", {
        key: 1,
        class: R(s(d)),
        role: "button",
        tabindex: "0",
        onClick: i,
        onKeydown: Ce(i, ["enter"])
      }, [
        _(c.$slots, "trigger", { open: s(o) })
      ], 34)) : J("", !0)
    ], 2));
  }
}), Dn = {
  install(e) {
    Ae(e, wn);
  }
}, xn = ["autocomplete", "multiple", "size", "disabled", "aria-labelledby"], $n = {
  key: 0,
  value: null,
  disabled: "",
  hidden: ""
}, Bn = ["value"], pt = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OSelect",
  configField: "select",
  inheritAttrs: !1,
  __name: "Select",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: null
    },
    /** Select options, unnecessary when default slot is used */
    options: {
      type: Array,
      default: void 0
    },
    /**
     * Vertical size of input
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("select.size")
    },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("select.variant")
    },
    /** Text when nothing is selected */
    placeholder: { type: String, default: void 0 },
    /** Allow multiple selection */
    multiple: { type: Boolean, default: !1 },
    /** Same as native disabled */
    disabled: { type: Boolean, default: !1 },
    /** Makes input full width when inside a grouped or addon field */
    expanded: { type: Boolean, default: !1 },
    /** Makes the element rounded */
    rounded: { type: Boolean, default: !1 },
    /** Same as native size */
    nativeSize: { type: [String, Number], default: void 0 },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("select.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => r("select.icon", void 0)
    },
    /** Makes the icon clickable */
    iconClickable: { type: Boolean, default: !1 },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => r("select.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: !1 },
    /** Variant of right icon */
    iconRightVariant: { type: String, default: void 0 },
    /** Accessibility label to establish relationship between the input and control label */
    ariaLabelledby: { type: String, default: () => Ke() },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => r("useHtml5Validation", !0)
    },
    /** The message which is shown when a validation error occurs */
    validationMessage: { type: String, default: void 0 },
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => r("select.autocomplete", "off")
    },
    /** Show status icon using field and variant prop */
    statusIcon: {
      type: Boolean,
      default: () => r("statusIcon", !0)
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the native select element */
    selectClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the left icon space inside the select */
    iconLeftSpaceClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the right icon space inside the select */
    iconRightSpaceClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of select when rounded */
    roundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the select when multiple mode is active */
    multipleClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of select when expanded */
    expandedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of select when disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the left icon */
    iconLeftClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the right icon */
    iconRightClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the select size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the select variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the select placeholder */
    placeholderClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the select arrow */
    arrowClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the select variant for the root element*/
    rootVariantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:modelValue", "focus", "blur", "invalid", "icon-click", "icon-right-click"],
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = z(), { checkHtml5Validity: u, onBlur: d, onFocus: b, onInvalid: c, setFocus: v } = rt(i, o, t), { parentField: m, statusVariant: S, statusVariantIcon: B } = Lt(), k = xt(t, o, { passive: !0 }), g = n(() => k.value === null);
    st(() => {
      ce(
        () => k.value,
        (y) => {
          m != null && m.value && m.value.setFilled(!!y), u();
        },
        { immediate: !0 }
      );
    });
    const O = n(() => !t.options || !Array.isArray(t.options) ? [] : t.options.map(
      (y) => typeof y == "string" ? { value: y, label: y, key: Ke() } : { ...y, key: Ke() }
    )), H = n(
      () => t.iconRight && !t.multiple || t.statusIcon && B.value
    ), p = n(
      () => t.iconRight ? t.iconRight : B.value
    ), I = n(
      () => t.iconRight ? t.iconRightVariant || t.variant || null : S.value
    );
    function w(y, D) {
      o(y, D), De(() => v());
    }
    function L(y) {
      t.iconRightClickable && w("icon-right-click", y);
    }
    const N = h(
      ["rootClass", "o-ctrl-sel"],
      [
        "expandedClass",
        "o-ctrl-sel--expanded",
        null,
        n(() => t.expanded)
      ],
      [
        "rootVariantClass",
        "o-ctrl-sel--",
        n(() => S.value || t.variant),
        n(() => !!S.value || !!t.variant)
      ]
    ), W = h(
      ["selectClass", "o-sel"],
      ["roundedClass", "o-sel--rounded", null, n(() => t.rounded)],
      ["multipleClass", "o-sel--multiple", null, n(() => t.multiple)],
      [
        "sizeClass",
        "o-sel--",
        n(() => t.size),
        n(() => !!t.size)
      ],
      [
        "variantClass",
        "o-sel--",
        n(() => S.value || t.variant),
        n(() => !!S.value || !!t.variant)
      ],
      ["disabledClass", "o-sel--disabled", null, n(() => t.disabled)],
      [
        "iconLeftSpaceClass",
        "o-sel-iconspace-left",
        null,
        n(() => !!t.icon)
      ],
      [
        "iconRightSpaceClass",
        "o-sel-iconspace-right",
        null,
        n(() => !!t.iconRight)
      ],
      ["placeholderClass", "o-sel--placeholder", null, g],
      [
        "arrowClass",
        "o-sel-arrow",
        null,
        n(() => !t.iconRight && !t.multiple)
      ]
    ), Q = h(["iconLeftClass", "o-sel__icon-left"]), P = h(["iconRightClass", "o-sel__icon-right"]);
    return l({ focus: v }), (y, D) => (f(), V("div", {
      class: R(s(N)),
      "data-oruga": "select"
    }, [
      e.icon ? (f(), ne(Ve, {
        key: 0,
        class: R(s(Q)),
        clickable: e.iconClickable,
        icon: e.icon,
        pack: e.iconPack,
        size: e.size,
        onClick: D[0] || (D[0] = (U) => w("icon-click", U))
      }, null, 8, ["class", "clickable", "icon", "pack", "size"])) : J("", !0),
      $e(ae("select", ye(y.$attrs, {
        ref_key: "selectRef",
        ref: i,
        "onUpdate:modelValue": D[1] || (D[1] = (U) => lt(k) ? k.value = U : null),
        "data-oruga-input": "select",
        class: s(W),
        autocomplete: e.autocomplete,
        multiple: e.multiple,
        size: e.nativeSize,
        disabled: e.disabled,
        "aria-labelledby": e.ariaLabelledby,
        onBlur: D[2] || (D[2] = //@ts-ignore
        (...U) => s(d) && s(d)(...U)),
        onFocus: D[3] || (D[3] = //@ts-ignore
        (...U) => s(b) && s(b)(...U)),
        onInvalid: D[4] || (D[4] = //@ts-ignore
        (...U) => s(c) && s(c)(...U))
      }), [
        e.placeholder || y.$slots.placeholder ? (f(), V(he, { key: 0 }, [
          g.value ? (f(), V("option", $n, [
            _(y.$slots, "placeholder", {}, () => [
              Pe(ue(e.placeholder), 1)
            ])
          ])) : J("", !0)
        ], 64)) : J("", !0),
        _(y.$slots, "default", {}, () => [
          (f(!0), V(he, null, xe(O.value, (U) => (f(), V("option", ye({
            key: U.key,
            value: U.value
          }, U.attrs), ue(U.label), 17, Bn))), 128))
        ])
      ], 16, xn), [
        [Vl, s(k)]
      ]),
      H.value ? (f(), ne(Ve, {
        key: 1,
        class: R(s(P)),
        clickable: e.iconRightClickable,
        icon: p.value,
        pack: e.iconPack,
        size: e.size,
        variant: I.value,
        both: "",
        onClick: L
      }, null, 8, ["class", "clickable", "icon", "pack", "size", "variant"])) : J("", !0)
    ], 2));
  }
}), On = ["data-oruga"], Za = /* @__PURE__ */ ge({
  name: "OPickerWrapper",
  __name: "PickerWrapper",
  props: {
    /** parent picker component props  */
    pickerProps: { type: Object, required: !0 },
    /** data-oruga attribute value */
    dataOruga: { type: String, required: !0 },
    /** the input value */
    value: { type: [Date, Array], default: void 0 },
    /** the active state of the dropdown */
    active: { type: Boolean, default: !1 },
    formattedValue: { type: String, default: void 0 },
    nativeType: { type: String, required: !0 },
    nativeStep: { type: String, default: void 0 },
    nativeValue: { type: [String, Number], default: void 0 },
    nativeMin: { type: [String, Number], default: void 0 },
    nativeMax: { type: [String, Number], default: void 0 },
    stayOpen: { type: Boolean, default: !1 },
    rootClasses: {
      type: Array,
      required: !0
    },
    dropdownClasses: {
      type: Array,
      required: !0
    },
    boxClass: {
      type: Array,
      required: !0
    }
  },
  emits: ["update:active", "change", "native-change", "focus", "blur", "invalid", "icon-click", "icon-right-click"],
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = n(() => t.pickerProps), u = n(
      () => i.value.mobileNative && ft.any()
    ), d = z(), b = z(), c = z(), v = n(
      () => u.value ? c.value : b.value
    ), {
      checkHtml5Validity: m,
      setFocus: S,
      doClick: B,
      onBlur: k,
      onFocus: g,
      onInvalid: O,
      isValid: H,
      isFocused: p
    } = rt(v, o, i.value), I = n(
      () => !i.value.placeholder || t.nativeValue || p.value ? t.nativeType : "text"
    );
    ce(
      () => t.value,
      () => {
        t.stayOpen || Q(!1), u.value && !H.value && m();
      }
    );
    const w = Ue("active", t, o, {
      passive: !0
    });
    ce(w, y);
    const L = n(() => i.value.inline ? void 0 : "dialog"), N = n(() => i.value.openOnFocus ? ["click"] : []);
    Be && Ze("keyup", W);
    function W(E) {
      w.value && (E.key === "Escape" || E.key === "Esc") && Q(!1);
    }
    function Q(E) {
      u.value ? (S(), B()) : d.value && (E || i.value.closeOnClick) && De(() => w.value = E);
    }
    function P(E) {
      w.value && E.stopPropagation();
    }
    function y(E) {
      E ? g() : E || k();
    }
    const D = da(), U = n(() => ({
      ...D,
      ...i.value.inputClasses
    })), G = n(() => ({
      "root-class": We(t.dropdownClasses),
      ...i.value.dropdownClasses
    }));
    return l({ focus: S }), (E, C) => (f(), V("div", {
      "data-oruga": e.dataOruga,
      class: R(e.rootClasses)
    }, [
      !u.value || i.value.inline ? (f(), ne(va, ye({
        key: 0,
        ref_key: "dropdownRef",
        ref: d
      }, G.value, {
        active: s(w),
        "onUpdate:active": C[4] || (C[4] = (A) => lt(w) ? w.value = A : null),
        position: i.value.position,
        disabled: i.value.disabled,
        inline: i.value.inline,
        "mobile-modal": i.value.mobileModal,
        "trap-focus": i.value.trapFocus,
        "aria-role": L.value,
        "aria-modal": !i.value.inline,
        tabindex: -1,
        teleport: i.value.teleport,
        triggers: N.value
      }), qt({
        default: se(() => [
          me(Ct, {
            override: "",
            tag: "div",
            "item-class": e.boxClass,
            disabled: i.value.disabled,
            clickable: !1
          }, {
            default: se(() => [
              _(E.$slots, "default")
            ]),
            _: 3
          }, 8, ["item-class", "disabled"])
        ]),
        _: 2
      }, [
        i.value.inline ? void 0 : {
          name: "trigger",
          fn: se(() => [
            _(E.$slots, "trigger", {}, () => [
              me(Ft, ye({
                ref_key: "inputRef",
                ref: b
              }, U.value, {
                autocomplete: "off",
                "model-value": e.formattedValue,
                placeholder: i.value.placeholder,
                size: i.value.size,
                "icon-pack": i.value.iconPack,
                icon: i.value.icon,
                "icon-right": i.value.iconRight,
                "icon-right-clickable": i.value.iconRightClickable,
                expanded: i.value.expanded,
                rounded: i.value.rounded,
                disabled: i.value.disabled,
                readonly: i.value.readonly,
                "use-html5-validation": !1,
                onClick: P,
                onKeyup: C[0] || (C[0] = Ce((A) => Q(!0), ["enter"])),
                onChange: C[1] || (C[1] = (A) => E.$emit("change", A.target.value)),
                onFocus: s(g),
                onBlur: s(k),
                onIconClick: C[2] || (C[2] = (A) => E.$emit("icon-click", A)),
                onIconRightClick: C[3] || (C[3] = (A) => E.$emit("icon-right-click", A))
              }), null, 16, ["model-value", "placeholder", "size", "icon-pack", "icon", "icon-right", "icon-right-clickable", "expanded", "rounded", "disabled", "readonly", "onFocus", "onBlur"])
            ])
          ]),
          key: "0"
        }
      ]), 1040, ["active", "position", "disabled", "inline", "mobile-modal", "trap-focus", "aria-role", "aria-modal", "teleport", "triggers"])) : (f(), ne(Ft, ye({
        key: 1,
        ref_key: "nativeInputRef",
        ref: c
      }, U.value, {
        type: I.value,
        autocomplete: "off",
        "model-value": e.nativeValue,
        min: e.nativeMin,
        max: e.nativeMax,
        step: e.nativeStep,
        placeholder: i.value.placeholder,
        size: i.value.size,
        "icon-pack": i.value.iconPack,
        icon: i.value.icon,
        "icon-right": i.value.iconRight,
        "icon-right-clickable": i.value.iconRightClickable,
        rounded: i.value.rounded,
        disabled: i.value.disabled,
        readonly: !1,
        "use-html5-validation": !1,
        onChange: C[5] || (C[5] = (A) => E.$emit("native-change", A.target.value)),
        onFocus: s(g),
        onBlur: s(k),
        onInvalid: s(O),
        onIconClick: C[6] || (C[6] = (A) => E.$emit("icon-click", A)),
        onIconRightClick: C[7] || (C[7] = (A) => E.$emit("icon-right-click", A))
      }), null, 16, ["type", "model-value", "min", "max", "step", "placeholder", "size", "icon-pack", "icon", "icon-right", "icon-right-clickable", "rounded", "disabled", "onFocus", "onBlur", "onInvalid"]))
    ], 10, On));
  }
});
function Pn(e = void 0, l = "long") {
  const a = [];
  for (let o = 0; o < 12; o++)
    a.push(new Date(2e3, o, 15));
  const t = new Intl.DateTimeFormat(e, {
    month: l
    // timeZone: 'UTC'
  });
  return a.map((o) => t.format(o));
}
function Mn(e = void 0, l = 0, a = "narrow") {
  const t = [];
  for (let i = 1, u = 0; u < 7; i++) {
    const d = new Date(2e3, 0, i);
    (d.getDay() === l || u > 0) && (t.push(d), u++);
  }
  const o = new Intl.DateTimeFormat(e, {
    weekday: a
    // timeZone: 'UTC'
  });
  return t.map((i) => o.format(i));
}
function pa(e, l) {
  const a = l.match(e);
  return e.toString().match(/<(.+?)>/g).map((t) => {
    const o = t.match(/<(.+)>/);
    return !o || o.length <= 0 ? null : t.match(/<(.+)>/)[1];
  }).reduce((t, o, i) => (a && a.length > i ? t[o] = a[i + 1] : t[o] = null, t), {});
}
function Vn(e, l, a, t) {
  const o = new Date(a, l), i = [], u = new Date(a, l, e).getDay(), d = u >= t ? u - t : 7 - t + u;
  let b = 1;
  for (let v = 0; v < d; v++)
    i.unshift(
      new Date(
        o.getFullYear(),
        o.getMonth(),
        e - b
      )
    ), b++;
  i.push(new Date(a, l, e));
  let c = 1;
  for (; i.length < 7; )
    i.push(new Date(a, l, e + c)), c++;
  return i;
}
function ra(e, l, a) {
  const t = 7 + l - a;
  return -((7 + new Date(e, 0, t).getDay() - l) % 7) + t - 1;
}
function Rn(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 ? 366 : 365;
}
function ta(e, l, a) {
  const t = ra(e, l, a), o = ra(e + 1, l, a);
  return (Rn(e) - t + o) / 7;
}
function ma(e) {
  function l(c, v) {
    const m = [];
    if (e.minDate && m.push(c >= e.minDate), e.maxDate && m.push(c <= e.maxDate), e.nearbyMonthDays && !e.nearbySelectableMonthDays && m.push(c.getMonth() === v), e.selectableDates)
      if (typeof e.selectableDates == "function") {
        if (e.selectableDates(c))
          return !0;
        m.push(!1);
      } else
        for (let S = 0; S < e.selectableDates.length; S++) {
          const B = e.selectableDates[S];
          if (c.getDate() === B.getDate() && c.getFullYear() === B.getFullYear() && c.getMonth() === B.getMonth())
            return !0;
          m.push(!1);
        }
    if (e.unselectableDates)
      if (typeof e.unselectableDates == "function")
        m.push(!e.unselectableDates(c));
      else
        for (let S = 0; S < e.unselectableDates.length; S++) {
          const B = e.unselectableDates[S];
          m.push(
            c.getDate() !== B.getDate() || c.getFullYear() !== B.getFullYear() || c.getMonth() !== B.getMonth()
          );
        }
    if (e.unselectableDaysOfWeek)
      for (let S = 0; S < e.unselectableDaysOfWeek.length; S++) {
        const B = e.unselectableDaysOfWeek[S];
        m.push(c.getDay() !== B);
      }
    return m.indexOf(!1) < 0;
  }
  const a = n(() => e.type === "month"), t = n(
    () => new Intl.DateTimeFormat(e.locale, {
      year: "numeric",
      month: "numeric"
    }).resolvedOptions()
  ), o = n(
    () => new Intl.DateTimeFormat(
      e.locale
      /*, { timeZone: 'UTC' }*/
    )
  ), i = n(
    () => new Intl.DateTimeFormat(e.locale, {
      year: t.value.year || "numeric",
      month: t.value.month || "2-digit"
      // timeZone: 'UTC'
    })
  ), u = n(() => {
    const c = e.dateCreator();
    return c.setHours(10), c.setSeconds(0), c.setMinutes(0), c.setMilliseconds(0), c;
  });
  return { isDateSelectable: l, defaultDateParser: (c) => {
    if (!c)
      return null;
    if (o.value.formatToParts && typeof o.value.formatToParts == "function") {
      const B = (a.value ? i.value : o.value).formatToParts(u.value).map((g) => g.type === "literal" ? g.value : `((?!=<${g.type}>)\\d+)`).join(""), k = pa(B, c);
      if (k.year && k.year.length === 4 && k.month && k.month <= 12) {
        if (a.value)
          return new Date(k.year, k.month - 1);
        if (k.day && k.day <= 31)
          return new Date(
            k.year,
            k.month - 1,
            k.day,
            12
          );
      }
    }
    if (!a.value)
      return new Date(Date.parse(c));
    const v = c.split("/"), m = v[0].length === 4 ? v[0] : v[1], S = v[0].length === 2 ? v[0] : v[1];
    if (m && S)
      return new Date(
        parseInt(m, 10),
        parseInt(S, 10) - 1,
        1,
        0,
        0,
        0,
        0
      );
  }, defaultDateFormatter: (c) => {
    if (!c)
      return "";
    const m = (Array.isArray(c) ? c : [c]).map((S) => {
      const B = new Date(
        S.getFullYear(),
        S.getMonth(),
        S.getDate(),
        12
      );
      return a.value ? i.value.format(B) : o.value.format(B);
    });
    return e.multiple ? m.join(", ") : m.join(" - ");
  } };
}
const Tn = ["tabindex"], In = ["tabindex", "onClick", "onMouseenter", "onFocus", "onKeydown"], zn = /* @__PURE__ */ ge({
  name: "ODatepickerTableRow",
  configField: "datepicker",
  __name: "DatepickerTableRow",
  props: {
    day: { type: Number, required: !0 },
    week: { type: Array, required: !0 },
    month: { type: Number, required: !0 },
    selectedDate: {
      type: [Date, Array],
      default: void 0
    },
    events: { type: Array, default: void 0 },
    hoveredDateRange: { type: Array, default: () => [] },
    pickerProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["select", "hover-enddate", "change-focus", "week-number-click"],
  setup(e, { emit: l }) {
    const a = e, t = l, { isDateSelectable: o } = ma(a.pickerProps), i = n(() => a.pickerProps), u = n(() => {
      var P;
      return !!((P = a.events) != null && P.length);
    }), d = z(/* @__PURE__ */ new Map());
    function b(P, y) {
      const D = `day-${P.getMonth()}-${P.getDate()}`;
      y && d.value.set(D, y);
    }
    ce(
      () => a.day,
      (P) => {
        a.week.map((y) => y.getDate()).includes(P) && De(() => {
          const y = `day-${a.month}-${P}`, D = d.value.get(y);
          D && D.focus();
        });
      }
    ), ce(
      () => a.month,
      // clear day refs on month change
      () => d.value = /* @__PURE__ */ new Map()
    );
    function c(P) {
      i.value.weekNumberClickable && t("week-number-click", P);
    }
    function v(P) {
      return Math.round(
        (P.getTime() - new Date(P.getFullYear(), 0, 1).getTime()) / 864e5
      ) + 1;
    }
    function m(P) {
      const y = i.value.firstDayOfWeek, D = i.value.rulesForFirstWeek, U = ra(P.getFullYear(), y, D), G = Math.floor((v(P) - U - 1) / 7) + 1;
      let E, C;
      return G < 1 ? (C = P.getFullYear() - 1, E = G + ta(C, y, D)) : G > ta(P.getFullYear(), y, D) ? (E = G - ta(P.getFullYear(), y, D), C = P.getFullYear() + 1) : (C = P.getFullYear(), E = G), E;
    }
    function S(P) {
      var y;
      return (y = a.events) != null && y.length ? a.events.filter((D) => D.date.getDay() === P.getDay()) : [];
    }
    function B(P, y) {
      let D = !0;
      switch (P.key) {
        case "Tab": {
          D = !1;
          break;
        }
        case " ":
        case "Space":
        case "Spacebar":
        case "Enter": {
          k(y);
          break;
        }
        case "ArrowLeft":
        case "Left": {
          g(y, -1);
          break;
        }
        case "ArrowRight":
        case "Right": {
          g(y, 1);
          break;
        }
        case "ArrowUp":
        case "Up": {
          g(y, -7);
          break;
        }
        case "ArrowDown":
        case "Down": {
          g(y, 7);
          break;
        }
      }
      D && P.preventDefault();
    }
    function k(P) {
      i.value.disabled || o(P, a.month) && t("select", P);
    }
    function g(P, y) {
      const D = new Date(P.getTime());
      for (D.setDate(P.getDate() + y); i.value.minDate && D < i.value.minDate || i.value.maxDate && D > i.value.maxDate || !o(D, D.getMonth()); )
        D.setDate(D.getDate() - Math.sign(y));
      O(D), t("change-focus", D);
    }
    function O(P) {
      i.value.range && t("hover-enddate", P);
    }
    function H(P, y, D = !1) {
      return !P || !y || D ? !1 : Array.isArray(y) ? y.some(
        (U) => P.getDate() === U.getDate() && P.getFullYear() === U.getFullYear() && P.getMonth() === U.getMonth()
      ) : P.getDate() === y.getDate() && P.getFullYear() === y.getFullYear() && P.getMonth() === y.getMonth();
    }
    function p(P, y, D = !1) {
      return !Array.isArray(y) || D ? !1 : P > y[0] && P < y[1];
    }
    function I(P) {
      const y = h(
        [
          "tableCellSelectedClass",
          "o-dpck__table__cell--selected",
          null,
          H(P, a.selectedDate) || p(P, a.selectedDate, i.value.multiple)
        ],
        [
          "tableCellFirstSelectedClass",
          "o-dpck__table__cell--first-selected",
          null,
          H(
            P,
            Array.isArray(a.selectedDate) && a.selectedDate[0],
            i.value.multiple
          )
        ],
        [
          "tableCellWithinSelectedClass",
          "o-dpck__table__cell--within-selected",
          null,
          p(P, a.selectedDate, i.value.multiple)
        ],
        [
          "tableCellLastSelectedClass",
          "o-dpck__table__cell--last-selected",
          null,
          H(
            P,
            Array.isArray(a.selectedDate) && a.selectedDate[1],
            i.value.multiple
          )
        ],
        [
          "tableCellFirstHoveredClass",
          "o-dpck__table__cell--first-hovered",
          null,
          H(
            P,
            Array.isArray(a.hoveredDateRange) && a.hoveredDateRange[0]
          )
        ],
        [
          "tableCellWithinHoveredClass",
          "o-dpck__table__cell--within-hovered",
          null,
          p(P, a.hoveredDateRange)
        ],
        [
          "tableCellLastHoveredClass",
          "o-dpck__table__cell--last-hovered",
          null,
          H(
            P,
            Array.isArray(a.hoveredDateRange) && a.hoveredDateRange[1]
          )
        ],
        [
          "tableCellTodayClass",
          "o-dpck__table__cell--today",
          null,
          H(P, i.value.dateCreator())
        ],
        [
          "tableCellSelectableClass",
          "o-dpck__table__cell--selectable",
          null,
          o(P, a.month) && !i.value.disabled
        ],
        [
          "tableCellUnselectableClass",
          "o-dpck__table__cell--unselectable",
          null,
          !o(P, a.month) || i.value.disabled
        ],
        [
          "tableCellInvisibleClass",
          "o-dpck__table__cell--invisible",
          null,
          !i.value.nearbyMonthDays && P.getMonth() !== a.month
        ],
        [
          "tableCellNearbyClass",
          "o-dpck__table__cell--nearby",
          null,
          i.value.nearbySelectableMonthDays && P.getMonth() !== a.month
        ],
        [
          "tableCellTodayClass",
          "o-dpck__table__cell--today",
          null,
          H(P, i.value.dateCreator())
        ]
      );
      return [
        ...N.value,
        ...Q.value,
        ...y.value
      ];
    }
    function w(P) {
      return h(
        ["tableEventClass", "o-dpck__table__event"],
        [
          "tableEventVariantClass",
          "o-dpck__table__event--",
          P.type,
          !!P.type
        ],
        [
          "tableEventIndicatorsClass",
          "o-dpck__table__event--",
          i.value.indicators,
          !!i.value.indicators
        ]
      ).value;
    }
    const L = h(["tableRowClass", "o-dpck__table__row"]), N = h([
      "tableCellClass",
      "o-dpck__table__cell"
    ]), W = h([
      "tableEventsClass",
      "o-dpck__table__events"
    ]), Q = h([
      "tableCellEventsClass",
      "o-dpck__table__cell--events",
      null,
      u
    ]);
    return (P, y) => (f(), V("div", {
      class: R(s(L))
    }, [
      i.value.showWeekNumber ? (f(), V("div", {
        key: 0,
        class: R(s(N)),
        style: _e({
          cursor: i.value.weekNumberClickable ? "pointer" : "auto"
        }),
        tabindex: i.value.weekNumberClickable ? 0 : null,
        role: "button",
        onClick: y[0] || (y[0] = ve((D) => c(m(e.week[6])), ["prevent"])),
        onKeydown: y[1] || (y[1] = Ce(ve((D) => c(m(e.week[6])), ["prevent"]), ["enter"]))
      }, [
        ae("span", null, ue(m(e.week[6])), 1)
      ], 46, Tn)) : J("", !0),
      (f(!0), V(he, null, xe(e.week, (D, U) => (f(), V(he, { key: U }, [
        !i.value.disabled && s(o)(D, e.month) ? (f(), V("div", {
          key: 0,
          ref_for: !0,
          ref: (G) => b(D, G),
          class: R(I(D)),
          role: "button",
          tabindex: e.day === D.getDate() && e.month === D.getMonth() ? null : 0,
          onClick: ve((G) => k(D), ["prevent"]),
          onMouseenter: (G) => O(D),
          onFocus: (G) => O(D),
          onKeydown: Ce(ve((G) => B(G, D), ["prevent"]), ["enter"])
        }, [
          ae("span", null, ue(D.getDate()), 1),
          S(D).length ? (f(), V("div", {
            key: 0,
            class: R(s(W))
          }, [
            (f(!0), V(he, null, xe(S(D), (G, E) => (f(), V("div", {
              key: E,
              class: R(w(G))
            }, null, 2))), 128))
          ], 2)) : J("", !0)
        ], 42, In)) : (f(), V("div", {
          key: 1,
          class: R(I(D))
        }, [
          ae("span", null, ue(D.getDate()), 1)
        ], 2))
      ], 64))), 128))
    ], 2));
  }
}), Hn = /* @__PURE__ */ ge({
  name: "ODatepickerTable",
  configField: "datepicker",
  __name: "DatepickerTable",
  props: /* @__PURE__ */ ze({
    modelValue: {
      type: [Date, Array],
      default: void 0
    },
    focusedDate: { type: Object, required: !0 },
    dayNames: { type: Array, required: !0 },
    monthNames: { type: Array, required: !0 },
    pickerProps: {
      type: Object,
      required: !0
    }
  }, {
    focusedDate: {},
    focusedDateModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["update:modelValue", "update:focusedDate", "range-start", "range-end", "week-number-click"], ["update:focusedDate"]),
  setup(e, { emit: l }) {
    const a = e, t = l, { isDateSelectable: o } = ma(a.pickerProps), i = Xe(e, "focusedDate"), u = z(), d = z(), b = z(), c = n(() => a.pickerProps), v = n(() => {
      const y = [];
      let D = c.value.firstDayOfWeek;
      for (; y.length < a.dayNames.length; ) {
        const U = a.dayNames[D % a.dayNames.length];
        y.push(U), D++;
      }
      return c.value.showWeekNumber && y.unshift(""), y;
    }), m = n(() => c.value.events ? c.value.events.map(
      (y) => !y.date && y instanceof Date ? { date: y } : y
    ).filter(
      (y) => y.date.getMonth() === i.value.month && y.date.getFullYear() === i.value.year
    ) : []), S = n(() => {
      g();
      const y = i.value.month, D = i.value.year, U = [];
      let G = 1;
      for (; U.length < 6; ) {
        const E = Vn(
          G,
          y,
          D,
          c.value.firstDayOfWeek
        );
        U.push(E), G += 7;
      }
      return U;
    });
    function B(y) {
      return c.value.events ? m.value.filter((D) => {
        const U = new Date(D.date);
        U.setHours(0, 0, 0, 0);
        const G = U.getTime();
        return y.some((E) => E.getTime() === G);
      }) : [];
    }
    const k = n(() => !c.value.range || d.value ? [] : (b.value < u.value ? [b.value, u.value] : [u.value, b.value]).filter(it));
    function g() {
      const y = new Date(
        i.value.year,
        i.value.month,
        i.value.day
      );
      if (o(y, i.value.month))
        return;
      let D = 0;
      const U = new Date(
        i.value.year,
        i.value.month + 1,
        0
      ).getDate();
      let G = null;
      for (; !G && ++D < U; ) {
        const E = new Date(
          i.value.year,
          i.value.month,
          D
        );
        o(E, i.value.month) && (G = y, i.value = {
          day: E.getDate(),
          month: E.getMonth(),
          year: E.getFullYear()
        });
      }
    }
    function O(y) {
      c.value.disabled || (!c.value.range && !c.value.multiple ? t("update:modelValue", y) : c.value.range ? H(y) : c.value.multiple && p(y));
    }
    function H(y) {
      u.value && d.value ? (u.value = y, d.value = void 0, t("range-start", y)) : u.value && !d.value ? (u.value > y ? (d.value = u.value, u.value = y) : d.value = y, t("range-end", y), t("update:modelValue", [
        u.value,
        d.value
      ])) : (u.value = y, t("range-start", y));
    }
    function p(y) {
      if (!Array.isArray(a.modelValue))
        return;
      let D = a.modelValue;
      D.filter(
        (G) => G.getDate() === y.getDate() && G.getFullYear() === y.getFullYear() && G.getMonth() === y.getMonth()
      ).length ? D = D.filter(
        (G) => G.getDate() !== y.getDate() || G.getFullYear() !== y.getFullYear() || G.getMonth() !== y.getMonth()
      ) : D = [...D, y], t("update:modelValue", D);
    }
    function I(y) {
      b.value = y;
    }
    function w(y) {
      i.value = {
        day: y.getDate(),
        month: y.getMonth(),
        year: y.getFullYear()
      };
    }
    const L = h(["tableClass", "o-dpck__table"]), N = h([
      "tableHeadClass",
      "o-dpck__table__head"
    ]), W = h([
      "tableCellClass",
      "o-dpck__table__cell"
    ]), Q = h([
      "tableHeadCellClass",
      "o-dpck__table__head-cell"
    ]), P = h([
      "tableBodyClass",
      "o-dpck__table__body"
    ]);
    return (y, D) => (f(), V("section", {
      class: R(s(L))
    }, [
      ae("header", {
        class: R(s(N))
      }, [
        (f(!0), V(he, null, xe(v.value, (U, G) => (f(), V("div", {
          key: G,
          class: R([...s(W), ...s(Q)])
        }, [
          ae("span", null, ue(U), 1)
        ], 2))), 128))
      ], 2),
      ae("div", {
        class: R(s(P))
      }, [
        (f(!0), V(he, null, xe(S.value, (U, G) => (f(), ne(zn, {
          key: G,
          "selected-date": e.modelValue,
          day: i.value.day,
          week: U,
          month: i.value.month,
          events: B(U),
          "hovered-date-range": k.value,
          "picker-props": a.pickerProps,
          onSelect: O,
          onHoverEnddate: I,
          onChangeFocus: w,
          onWeekNumberClick: D[0] || (D[0] = (E) => y.$emit("week-number-click", E))
        }, null, 8, ["selected-date", "day", "week", "month", "events", "hovered-date-range", "picker-props"]))), 128))
      ], 2)
    ], 2));
  }
}), Ln = ["disabled", "tabindex", "onClick", "onMouseenter", "onFocus", "onKeydown"], Nn = {
  key: 0,
  class: "events"
}, En = /* @__PURE__ */ ge({
  name: "ODatepickerMonth",
  configField: "datepicker",
  inheritAttrs: !1,
  __name: "DatepickerMonth",
  props: {
    modelValue: {
      type: [Date, Array],
      default: void 0
    },
    monthNames: { type: Array, required: !0 },
    focusedDate: { type: Object, required: !0 },
    pickerProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:modelValue", "update:focusedDate", "range-start", "range-end"],
  setup(e, { emit: l }) {
    const a = e, t = l, o = z(), i = z(), u = z(), d = n(() => a.pickerProps), b = n(() => {
      var C;
      return !!((C = d.value.events) != null && C.length);
    }), c = z(/* @__PURE__ */ new Map());
    function v(C, A) {
      const x = `month-${C.getMonth()}`;
      A && c.value.set(x, A);
    }
    ce(
      () => a.focusedDate.month,
      (C) => {
        const A = `month-${C}`;
        De(() => {
          const x = c.value.get(A);
          (x == null ? void 0 : x.length) > 0 && x[0] && x[0].focus();
        });
      }
    );
    const m = n(() => d.value.events ? d.value.events.map((C) => (!C.date && C instanceof Date && (C = { date: C }), C.type || (C.type = "is-primary"), C)).filter((C) => C.date.getFullYear() === a.focusedDate.year) : []), S = n(() => {
      const C = a.focusedDate.year, A = [];
      for (let x = 0; x < 12; x++) {
        const j = new Date(C, x, 1);
        j.setHours(0, 0, 0, 0), A.push(j);
      }
      return A;
    }), B = n(() => !d.value.range || !i.value ? [] : (u.value < o.value ? [u.value, o.value] : [o.value, u.value]).filter(it));
    function k(C) {
      return m.value.length ? m.value.filter(
        (A) => A.date.getMonth() === C.getMonth()
      ) : [];
    }
    function g(C) {
      const A = [];
      if (d.value.minDate && A.push(C >= d.value.minDate), d.value.maxDate && A.push(C <= d.value.maxDate), A.push(C.getFullYear() === a.focusedDate.year), d.value.selectableDates)
        if (typeof d.value.selectableDates == "function") {
          if (d.value.selectableDates(C))
            return !0;
          A.push(!1);
        } else
          for (let x = 0; x < d.value.selectableDates.length; x++) {
            const j = d.value.selectableDates[x];
            if (C.getFullYear() === j.getFullYear() && C.getMonth() === j.getMonth())
              return !0;
            A.push(!1);
          }
      if (d.value.unselectableDates)
        if (typeof d.value.unselectableDates == "function")
          A.push(!d.value.unselectableDates(C));
        else
          for (let x = 0; x < d.value.unselectableDates.length; x++) {
            const j = d.value.unselectableDates[x];
            A.push(
              C.getFullYear() !== j.getFullYear() || C.getMonth() !== j.getMonth()
            );
          }
      if (d.value.unselectableDaysOfWeek)
        for (let x = 0; x < d.value.unselectableDaysOfWeek.length; x++) {
          const j = d.value.unselectableDaysOfWeek[x];
          A.push(C.getDay() !== j);
        }
      return A.indexOf(!1) < 0;
    }
    function O(C, A) {
      let x = !0;
      switch (C.key) {
        case "Tab": {
          x = !1;
          break;
        }
        case " ":
        case "Space":
        case "Spacebar":
        case "Enter": {
          H(A);
          break;
        }
        case "ArrowLeft":
        case "Left": {
          L(A, -1);
          break;
        }
        case "ArrowRight":
        case "Right": {
          L(A, 1);
          break;
        }
        case "ArrowUp":
        case "Up": {
          L(A, -7);
          break;
        }
        case "ArrowDown":
        case "Down": {
          L(A, 7);
          break;
        }
      }
      x && C.preventDefault();
    }
    function H(C) {
      d.value.disabled || (!d.value.range && !d.value.multiple && g(C) ? t("update:modelValue", C) : d.value.range ? p(C) : d.value.multiple && w(C));
    }
    function p(C) {
      o.value && i.value ? (o.value = C, i.value = void 0, t("range-start", C)) : o.value && !i.value ? (o.value > C ? (i.value = o.value, o.value = C) : i.value = C, t("range-end", C), t("update:modelValue", [
        o.value,
        i.value
      ])) : (o.value = C, t("range-start", C));
    }
    const I = n(
      () => d.value.multiple && a.modelValue ? a.modelValue : []
    );
    function w(C) {
      if (!Array.isArray(a.modelValue))
        return;
      let A = a.modelValue;
      A.filter(
        (j) => j.getDate() === C.getDate() && j.getFullYear() === C.getFullYear() && j.getMonth() === C.getMonth()
      ).length ? A = A.filter(
        (j) => j.getDate() !== C.getDate() || j.getFullYear() !== C.getFullYear() || j.getMonth() !== C.getMonth()
      ) : A.push(C), t("update:modelValue", A);
    }
    function L(C, A) {
      C.setMonth(C.getMonth() + A);
      const x = {
        day: C.getDate(),
        month: C.getMonth(),
        year: C.getFullYear()
      };
      t("update:focusedDate", x);
    }
    function N(C) {
      d.value.range && (u.value = C);
    }
    function W(C, A, x = !1) {
      return !C || !A || x ? !1 : Array.isArray(A) ? A.some(
        (j) => C.getFullYear() === j.getFullYear() && C.getMonth() === j.getMonth()
      ) : C.getFullYear() === A.getFullYear() && C.getMonth() === A.getMonth();
    }
    function Q(C, A, x = !1) {
      return !Array.isArray(A) || x ? !1 : C > A[0] && C < A[1];
    }
    function P(C, A, x = !1) {
      return !Array.isArray(A) || !x ? !1 : A.some(
        (j) => C.getDate() === j.getDate() && C.getFullYear() === j.getFullYear() && C.getMonth() === j.getMonth()
      );
    }
    const y = h(["monthClass", "o-dpck__month"]), D = h([
      "monthBodyClass",
      "o-dpck__month__body"
    ]), U = h([
      "monthTableClass",
      "o-dpck__month__table"
    ]), G = h(
      ["monthCellClass", "o-dpck__month__cell"],
      ["monthCellEventsClass", "o-dpck__month__cell--events", null, b]
    );
    function E(C) {
      const A = h(
        [
          "monthCellSelectedClass",
          "o-dpck__month__cell--selected",
          null,
          W(C, a.modelValue, d.value.multiple) || Q(C, a.modelValue, d.value.multiple) || P(
            C,
            I.value,
            d.value.multiple
          )
        ],
        [
          "monthCellFirstSelectedClass",
          "o-dpck__month__cell--first-selected",
          null,
          W(
            C,
            Array.isArray(a.modelValue) && a.modelValue[0],
            d.value.multiple
          )
        ],
        [
          "monthCellWithinSelectedClass",
          "o-dpck__month__cell--within-selected",
          null,
          Q(C, a.modelValue, d.value.multiple)
        ],
        [
          "monthCellLastSelectedClass",
          "o-dpck__month__cell--last-selected",
          null,
          W(
            C,
            Array.isArray(a.modelValue) && a.modelValue[1],
            d.value.multiple
          )
        ],
        [
          "monthCellWithinHoveredRangeClass",
          "o-dpck__month__cell--within-hovered-range",
          null,
          B.value && B.value.length === 2 && (W(C, B.value) || Q(C, B.value))
        ],
        [
          "monthCellFirstHoveredClass",
          "o-dpck__month__cell--first-hovered",
          null,
          W(
            C,
            Array.isArray(B.value) && B.value[0]
          )
        ],
        [
          "monthCellWithinHoveredClass",
          "o-dpck__month__cell--within-hovered",
          null,
          Q(C, B.value)
        ],
        [
          "monthCellLastHoveredClass",
          "o-dpck__month__cell--last-hovered",
          null,
          W(
            C,
            Array.isArray(B.value) && B.value[1]
          )
        ],
        [
          "monthCellTodayClass",
          "o-dpck__month__cell--today",
          null,
          W(C, d.value.dateCreator())
        ],
        [
          "monthCellSelectableclass",
          "o-dpck__month__cell--selectable",
          null,
          g(C) && !d.value.disabled
        ],
        [
          "monthCellUnselectableClass",
          "o-dpck__month__cell--unselectable",
          null,
          !g(C) || d.value.disabled
        ]
      );
      return [...G.value, ...A.value];
    }
    return (C, A) => (f(), V("section", {
      class: R(s(y))
    }, [
      ae("div", {
        class: R(s(D))
      }, [
        ae("div", {
          class: R(s(U))
        }, [
          (f(!0), V(he, null, xe(S.value, (x, j) => (f(), V(he, { key: j }, [
            !d.value.disabled && g(x) ? (f(), V("div", {
              key: 0,
              ref_for: !0,
              ref: (le) => v(x, le),
              class: R(E(x)),
              role: "button",
              disabled: d.value.disabled,
              tabindex: e.focusedDate.month === x.getMonth() ? null : 0,
              onClick: ve((le) => H(x), ["prevent"]),
              onMouseenter: (le) => N(x),
              onFocus: (le) => N(x),
              onKeydown: ve((le) => O(le, x), ["prevent"])
            }, [
              Pe(ue(e.monthNames[x.getMonth()]) + " ", 1),
              k(x).length ? (f(), V("div", Nn, [
                (f(!0), V(he, null, xe(k(x), (le, M) => (f(), V("div", {
                  key: M,
                  class: R(["event", le.type])
                }, null, 2))), 128))
              ])) : J("", !0)
            ], 42, Ln)) : (f(), V("div", {
              key: 1,
              class: R(E(x))
            }, ue(e.monthNames[x.getMonth()]), 3))
          ], 64))), 128))
        ], 2)
      ], 2)
    ], 2));
  }
}), jn = ["value", "disabled"], Wn = ["value"], _a = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "ODatepicker",
  configField: "datepicker",
  __name: "Datepicker",
  props: /* @__PURE__ */ ze({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: {
      type: [Date, Array],
      default: void 0
    },
    /** The active state of the dropdown, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: !1 },
    /**
     * Define picker mode
     * @values date, month
     */
    type: {
      type: String,
      default: "date",
      validator: (e) => ["month", "date"].indexOf(e) >= 0
    },
    /** Set custom day names, else use names based on locale */
    dayNames: {
      type: Array,
      default: () => r("datepicker.dayNames", void 0)
    },
    /** Set custom month names, else use names based on locale */
    monthNames: {
      type: Array,
      default: () => r("datepicker.monthNames", void 0)
    },
    /**
     * Size of the control input
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("datepicker.size")
    },
    /** Set default date to focus on */
    focusedDate: { type: Date, default: void 0 },
    /** Events to display on picker */
    events: { type: Array, default: void 0 },
    /** Event indicators for style class definiton */
    indicators: { type: String, default: "dots" },
    /** Min date to select */
    minDate: { type: Date, default: void 0 },
    /** Max date to select */
    maxDate: { type: Date, default: void 0 },
    /** Enable date range selection */
    range: { type: Boolean, default: !1 },
    /** Makes input full width when inside a grouped or addon field */
    expanded: { type: Boolean, default: !1 },
    /** Makes the input rounded */
    rounded: { type: Boolean, default: !1 },
    /** Display datepicker inline */
    inline: { type: Boolean, default: !1 },
    /** Input placeholder */
    placeholder: { type: String, default: void 0 },
    /** Same as native input readonly */
    readonly: { type: Boolean, default: !0 },
    /** Same as native, also push new item to v-model instead of replacing */
    multiple: { type: Boolean, default: !1 },
    /** Same as native disabled */
    disabled: { type: Boolean, default: !1 },
    /** Open dropdown on focus */
    openOnFocus: {
      type: Boolean,
      default: () => r("datepicker.openOnFocus", !0)
    },
    /** Close dropdown on click */
    closeOnClick: {
      type: Boolean,
      default: () => r("datepicker.closeOnClick", !0)
    },
    /** Date format locale */
    locale: {
      type: String,
      default: () => r("locale")
    },
    /** Custom function to format a date into a string */
    dateFormatter: {
      type: Function,
      default: (e, l) => r("datepicker.dateFormatter", l)(e)
    },
    /** Custom function to parse a string into a date */
    dateParser: {
      type: Function,
      default: (e, l) => r("datepicker.dateParser", l)(e)
    },
    /** Date creator function, default is `new Date()` */
    dateCreator: {
      type: Function,
      default: () => r("datepicker.dateCreator", () => /* @__PURE__ */ new Date())()
    },
    /** Define a list of dates which can be selected */
    selectableDates: {
      type: [Array, Function],
      default: () => []
    },
    /** Define a list of dates which can not be selected */
    unselectableDates: {
      type: [Array, Function],
      default: () => []
    },
    /** Define a list of weeks which can not be selected */
    unselectableDaysOfWeek: {
      type: Array,
      default: () => r("datepicker.unselectableDaysOfWeek", void 0)
    },
    /** Show nearby month days */
    nearbyMonthDays: {
      type: Boolean,
      default: () => r("datepicker.nearbyMonthDays", !0)
    },
    /** Define if nearby month days can be selected */
    nearbySelectableMonthDays: {
      type: Boolean,
      default: () => r("datepicker.nearbySelectableMonthDays", !1)
    },
    /** Show weeek numbers */
    showWeekNumber: {
      type: Boolean,
      default: () => r("datepicker.showWeekNumber", !1)
    },
    /** Define if weeek numbers are clickable */
    weekNumberClickable: {
      type: Boolean,
      default: () => r("datepicker.weekNumberClickable", !1)
    },
    /** Set the first day of a week */
    firstDayOfWeek: {
      type: Number,
      default: () => r("datepicker.firstDayOfWeek", 0)
    },
    /** Rules for the first week : 1 for the 1st January, 4 for the 4th January */
    rulesForFirstWeek: { type: Number, default: () => 4 },
    /** Define the range of years to show */
    yearsRange: {
      type: Array,
      default: () => r("datepicker.yearsRange", [-100, 10])
    },
    /** Trap dropdown on focus */
    trapFocus: {
      type: Boolean,
      default: () => r("datepicker.trapFocus", !0)
    },
    /** Position of the dropdown relative to the input */
    position: { type: String, default: void 0 },
    /** Enable dropdown mobile modal */
    mobileModal: {
      type: Boolean,
      default: () => r("datepicker.mobileModal", !0)
    },
    /** Enable mobile native input if mobile agent */
    mobileNative: {
      type: Boolean,
      default: () => r("datepicker.mobileNative", !0)
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("datepicker.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => r("datepicker.icon", void 0)
    },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => r("datepicker.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: !1 },
    /** Icon name for previous icon */
    iconPrev: {
      type: String,
      default: () => r("datepicker.iconPrev", "chevron-left")
    },
    /** Icon name for next icon */
    iconNext: {
      type: String,
      default: () => r("datepicker.iconNext", "chevron-right")
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => r("datepicker.mobileBreakpoint")
    },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => r("datepicker.teleport", !1)
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => r("useHtml5Validation", !0)
    },
    /** The message which is shown when a validation error occurs */
    validationMessage: { type: String, default: void 0 },
    /** Accessibility next button aria label */
    ariaNextLabel: {
      type: String,
      default: () => r("datepicker.ariaNextLabel", "Next Page")
    },
    /** Accessibility previous button aria label  */
    ariaPreviousLabel: {
      type: String,
      default: () => r("datepicker.ariaNextLabel", "Previous Page")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker box where you choose the date */
    boxClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker header inside the box */
    headerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker buttons inside the box */
    headerButtonsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker buttons inside the box when a size is choosen */
    headerButtonsSizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the prev button inside the Datepicker box */
    prevButtonClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the next button inside the Datepicker box */
    nextButtonClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the month and year selects container inside the Datepicker box */
    listsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker footer */
    footerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker table inside the box */
    tableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of Datepicker header with days of the week inside the table */
    tableHeadClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the cell inside the table header */
    tableHeadCellClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table body inside the box */
    tableBodyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table row */
    tableRowClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell */
    tableCellClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell when nearby month days are hidden */
    tableCellInvisibleClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of table cell when it's selected */
    tableCellSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the first selected table cell when in range */
    tableCellFirstSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cells within the range when the range is selected */
    tableCellWithinSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the last selected table cell during range selection */
    tableCellLastSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the first hovered table cell during range selection */
    tableCellFirstHoveredClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell when hovered during range selection */
    tableCellWithinHoveredClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the last table cell hovered during range selection */
    tableCellLastHoveredClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell of the current day */
    tableCellTodayClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell that is selectable */
    tableCellSelectableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell that is unselectable */
    tableCellUnselectableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell when nearby days (prev/next month) are selectable */
    tableCellNearbyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the cell of a row when at least one event is present */
    tableCellEventsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the events container */
    tableEventsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the event */
    tableEventClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the event indicator when a `variant` is specified */
    tableEventVariantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the event indicator */
    tableEventIndicatorsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker table inside the box when type is month */
    monthClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table body inside the box when type is month */
    monthBodyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table container when type is month */
    monthTableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell when type is month */
    monthCellClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of table cell when it's selected when type is month */
    monthCellSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the first selected table cell when in range when type is month */
    monthCellFirstSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cells within the range when the range is selected when type is month */
    monthCellWithinSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the last selected table cell during range selection when type is month */
    monthCellLastSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the first hovered table cell during range selection when type is month */
    monthCellWithinHoveredRangeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell when hovered during range selection when type is month */
    monthCellFirstHoveredClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell when hovered during range selection and cell is in range when type is month */
    monthCellWithinHoveredClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the last table cell hovered during range selection when type is month */
    monthCellLastHoveredClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell of the current day when type is month */
    monthCellTodayClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell that is selectable when type is month */
    monthCellSelectableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the table cell that is unselectable when type is month */
    monthCellUnselectableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /**Class of the events container when type is month */
    monthCellEventsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Datepicker when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /**
     * Class configuration for the internal input component
     * @ignore
     */
    inputClasses: {
      type: Object,
      default: () => r("datepicker.inputClasses", {})
    },
    /**
     * Class configuration for the internal dropdown component
     * @ignore
     */
    dropdownClasses: {
      type: Object,
      default: () => r(
        "datepicker.dropdownClasses",
        {}
      )
    },
    /**
     * Class configuration for the internal select component
     * @ignore
     */
    selectClasses: {
      type: Object,
      default: () => r("datepicker.selectClasses", {})
    }
  }, {
    modelValue: {},
    modelModifiers: {},
    active: { type: Boolean },
    activeModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["update:modelValue", "update:active", "range-start", "range-end", "change-month", "change-year", "focus", "blur", "invalid", "icon-click", "icon-right-click"], ["update:modelValue", "update:active"]),
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, { defaultDateFormatter: i, defaultDateParser: u } = ma(t), { isMobile: d } = dt(t.mobileBreakpoint), b = z(), c = Xe(e, "modelValue"), v = Xe(e, "active"), m = n(
      () => Array.isArray(c.value) ? t.dateFormatter([...c.value], i) : t.dateFormatter(c.value, i)
    ), S = n(() => t.type === "month");
    ce(
      () => t.modelValue,
      (M) => {
        if (c.value !== M) {
          const $ = Array.isArray(M), Y = $ ? M.length ? M[M.length - 1] : t.dateCreator() : M || t.dateCreator();
          (!$ || $ && Array.isArray(c.value) && M.length > c.value.length) && (k.value = {
            day: Y.getDate(),
            month: Y.getMonth(),
            year: Y.getFullYear()
          });
        }
      }
    ), ce(
      () => t.focusedDate,
      (M) => {
        M && (k.value = {
          day: M.getDate(),
          month: M.getMonth(),
          year: M.getFullYear()
        });
      }
    );
    const B = (Array.isArray(t.modelValue) ? t.modelValue[0] : t.modelValue) || t.focusedDate || t.dateCreator();
    !t.modelValue && t.maxDate && t.maxDate.getFullYear() < B.getFullYear() && B.setFullYear(t.maxDate.getFullYear());
    const k = z({
      day: B.getDate(),
      month: B.getMonth(),
      year: B.getFullYear()
    });
    ce(
      () => k.value.month,
      (M) => o("change-month", M)
    ), ce(
      () => k.value.year,
      (M) => o("change-year", M)
    );
    const g = n(
      () => Array.isArray(t.monthNames) ? t.monthNames : Pn(t.locale)
    ), O = n(() => {
      let M = 0, $ = 12;
      return t.minDate && k.value.year === t.minDate.getFullYear() && (M = t.minDate.getMonth()), t.maxDate && k.value.year === t.maxDate.getFullYear() && ($ = t.maxDate.getMonth()), g.value.map((Y, ie) => ({
        name: Y,
        index: ie,
        disabled: ie < M || ie > $
      }));
    }), H = n(() => Array.isArray(t.dayNames) ? t.dayNames : Mn(t.locale)), p = n(() => {
      let M = k.value.year + t.yearsRange[1];
      t.maxDate && t.maxDate.getFullYear() < M && (M = Math.max(
        t.maxDate.getFullYear(),
        k.value.year
      ));
      let $ = k.value.year + t.yearsRange[0];
      return t.minDate && t.minDate.getFullYear() > $ && ($ = Math.min(
        t.minDate.getFullYear(),
        k.value.year
      )), Array.from(
        { length: M - $ + 1 || 1 },
        (Y, ie) => $ + ie
      ).reverse();
    }), I = n(() => {
      if (!t.minDate)
        return !0;
      if (S.value)
        return k.value.year > t.minDate.getFullYear();
      const M = new Date(
        k.value.year,
        k.value.month
      ), $ = new Date(
        t.minDate.getFullYear(),
        t.minDate.getMonth()
      );
      return M > $;
    });
    function w() {
      t.disabled || (S.value ? k.value.year -= 1 : k.value.month > 0 ? k.value.month -= 1 : (k.value.month = 11, k.value.year -= 1));
    }
    const L = n(() => {
      if (!t.maxDate)
        return !0;
      if (S.value)
        return k.value.year < t.maxDate.getFullYear();
      const M = new Date(
        k.value.year,
        k.value.month
      ), $ = new Date(
        t.maxDate.getFullYear(),
        t.maxDate.getMonth()
      );
      return M < $;
    });
    function N() {
      t.disabled || (S.value ? k.value.year += 1 : k.value.month < 11 ? k.value.month += 1 : (k.value.month = 0, k.value.year += 1));
    }
    function W(M) {
      if (Array.isArray(M) && (M = M[0]), !M)
        return "";
      const $ = new Date(M);
      if (S.value) {
        const Y = $.getFullYear(), ie = $.getMonth() + 1;
        return Y + "-" + ((ie < 10 ? "0" : "") + ie);
      } else {
        const Y = $.getFullYear(), ie = $.getMonth() + 1, fe = $.getDate();
        return Y + "-" + ((ie < 10 ? "0" : "") + ie) + "-" + ((fe < 10 ? "0" : "") + fe);
      }
    }
    function Q(M) {
      const $ = t.dateParser(M, u);
      $ && Array.isArray($) && $.length === 2 && !isNaN($[0]) && !isNaN($[1]) ? c.value = $ : c.value = null;
    }
    function P(M) {
      const $ = M ? M.split("-") : [];
      if ($.length === 3) {
        const Y = parseInt($[0], 10), ie = parseInt($[1]) - 1, fe = parseInt($[2]);
        c.value = new Date(Y, ie, fe);
      } else
        c.value = null;
    }
    const y = h(
      ["rootClass", "o-dpck"],
      [
        "sizeClass",
        "o-dpck--",
        n(() => t.size),
        n(() => !!t.size)
      ],
      ["mobileClass", "o-dpck--mobile", null, d],
      ["expandedClass", "o-dpck--expanded", null, n(() => t.expanded)]
    ), D = h(["headerClass", "o-dpck__header"]), U = h(
      ["headerButtonsClass", "o-dpck__header__buttons"],
      [
        "headerButtonsSizeClass",
        "o-dpck__header__buttons--",
        n(() => t.size),
        n(() => !!t.size)
      ]
    ), G = h([
      "prevButtonClass",
      "o-dpck__header__previous"
    ]), E = h([
      "nextButtonClass",
      "o-dpck__header__next"
    ]), C = h(["listsClass", "o-dpck__header__list"]), A = h(["footerClass", "o-dpck__footer"]), x = h([
      "dropdownClasses.rootClass",
      "o-tpck__dropdown"
    ]), j = h(["boxClass", "o-dpck__box"]), le = n(() => We(j.value));
    return l({ focus: () => {
      var M;
      return (M = b.value) == null ? void 0 : M.focus();
    } }), (M, $) => (f(), ne(Za, {
      ref_key: "pickerRef",
      ref: b,
      active: v.value,
      "onUpdate:active": $[10] || ($[10] = (Y) => v.value = Y),
      "data-oruga": "datepicker",
      value: c.value,
      "picker-props": t,
      "formatted-value": m.value,
      "native-type": S.value ? "month" : "date",
      "native-value": W(c.value),
      "native-max": W(e.maxDate),
      "native-min": W(e.minDate),
      "stay-open": e.multiple,
      "dropdown-classes": s(x),
      "root-classes": s(y),
      "box-class": le.value,
      onChange: Q,
      onNativeChange: P,
      onFocus: $[11] || ($[11] = (Y) => M.$emit("focus", Y)),
      onBlur: $[12] || ($[12] = (Y) => M.$emit("blur", Y)),
      onInvalid: $[13] || ($[13] = (Y) => M.$emit("invalid", Y)),
      onIconClick: $[14] || ($[14] = (Y) => M.$emit("icon-click", Y)),
      onIconRightClick: $[15] || ($[15] = (Y) => M.$emit("icon-right-click", Y))
    }, qt({
      default: se(() => [
        ae("header", {
          class: R(s(D))
        }, [
          _(M.$slots, "header", {}, () => [
            ae("div", {
              class: R(s(U))
            }, [
              e.disabled ? J("", !0) : (f(), ne(At, {
                key: 0,
                class: R(s(G)),
                disabled: !I.value,
                "aria-label": e.ariaPreviousLabel,
                "icon-pack": e.iconPack,
                "icon-left": e.iconPrev,
                outlined: "",
                onClick: ve(w, ["prevent"]),
                onKeydown: [
                  Ce(ve(w, ["prevent"]), ["enter"]),
                  Ce(ve(w, ["prevent"]), ["space"])
                ]
              }, null, 8, ["class", "disabled", "aria-label", "icon-pack", "icon-left", "onKeydown"])),
              e.disabled ? J("", !0) : (f(), ne(At, {
                key: 1,
                class: R(s(E)),
                disabled: !L.value,
                "aria-label": e.ariaNextLabel,
                "icon-pack": e.iconPack,
                "icon-left": e.iconNext,
                outlined: "",
                onClick: ve(N, ["prevent"]),
                onKeydown: [
                  Ce(ve(N, ["prevent"]), ["enter"]),
                  Ce(ve(N, ["prevent"]), ["space"])
                ]
              }, null, 8, ["class", "disabled", "aria-label", "icon-pack", "icon-left", "onKeydown"])),
              ae("div", {
                class: R(s(C))
              }, [
                S.value ? J("", !0) : (f(), ne(pt, ye({
                  key: 0,
                  modelValue: k.value.month,
                  "onUpdate:modelValue": $[0] || ($[0] = (Y) => k.value.month = Y),
                  disabled: e.disabled,
                  size: e.size
                }, e.selectClasses), {
                  default: se(() => [
                    (f(!0), V(he, null, xe(O.value, (Y) => (f(), V("option", {
                      key: Y.name,
                      value: Y.index,
                      disabled: Y.disabled
                    }, ue(Y.name), 9, jn))), 128))
                  ]),
                  _: 1
                }, 16, ["modelValue", "disabled", "size"])),
                me(pt, ye({
                  modelValue: k.value.year,
                  "onUpdate:modelValue": $[1] || ($[1] = (Y) => k.value.year = Y),
                  disabled: e.disabled,
                  size: e.size
                }, e.selectClasses), {
                  default: se(() => [
                    (f(!0), V(he, null, xe(p.value, (Y) => (f(), V("option", {
                      key: Y,
                      value: Y
                    }, ue(Y), 9, Wn))), 128))
                  ]),
                  _: 1
                }, 16, ["modelValue", "disabled", "size"])
              ], 2)
            ], 2)
          ])
        ], 2),
        _(M.$slots, "body", {}, () => [
          S.value ? (f(), ne(En, {
            key: 0,
            modelValue: c.value,
            "onUpdate:modelValue": $[2] || ($[2] = (Y) => c.value = Y),
            "focused-date": k.value,
            "onUpdate:focusedDate": $[3] || ($[3] = (Y) => k.value = Y),
            "month-names": g.value,
            "picker-props": t,
            onRangeStart: $[4] || ($[4] = (Y) => M.$emit("range-start", Y)),
            onRangeEnd: $[5] || ($[5] = (Y) => M.$emit("range-end", Y))
          }, null, 8, ["modelValue", "focused-date", "month-names", "picker-props"])) : (f(), ne(Hn, {
            key: 1,
            modelValue: c.value,
            "onUpdate:modelValue": $[6] || ($[6] = (Y) => c.value = Y),
            "focused-date": k.value,
            "onUpdate:focusedDate": $[7] || ($[7] = (Y) => k.value = Y),
            "day-names": H.value,
            "month-names": g.value,
            "picker-props": t,
            onRangeStart: $[8] || ($[8] = (Y) => M.$emit("range-start", Y)),
            onRangeEnd: $[9] || ($[9] = (Y) => M.$emit("range-end", Y))
          }, null, 8, ["modelValue", "focused-date", "day-names", "month-names", "picker-props"]))
        ]),
        M.$slots.footer ? (f(), V("footer", {
          key: 0,
          class: R(s(A))
        }, [
          _(M.$slots, "footer")
        ], 2)) : J("", !0)
      ]),
      _: 2
    }, [
      M.$slots.trigger ? {
        name: "trigger",
        fn: se(() => [
          _(M.$slots, "trigger")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["active", "value", "picker-props", "formatted-value", "native-type", "native-value", "native-max", "native-min", "stay-open", "dropdown-classes", "root-classes", "box-class"]));
  }
}), Yn = {
  install(e) {
    Ae(e, _a);
  }
}, Et = "AM", jt = "PM", $a = "24", Wt = "12";
function Kn(e) {
  const l = n(
    () => new Intl.DateTimeFormat(e.locale, {
      hour: "numeric",
      minute: "numeric",
      second: e.enableSeconds ? "numeric" : void 0
    }).resolvedOptions()
  ), a = n(
    () => new Intl.DateTimeFormat(e.locale, {
      hour: l.value.hour || "numeric",
      minute: l.value.minute || "numeric",
      second: e.enableSeconds ? l.value.second || "numeric" : void 0,
      hourCycle: o.value ? "h23" : "h12"
    })
  ), t = n(
    () => e.hourFormat || (l.value.hour12 ? Wt : $a)
  ), o = n(
    () => t.value === $a
  ), i = n(() => {
    const k = e.timeCreator();
    return k.setHours(10), k.setSeconds(0), k.setMinutes(0), k.setMilliseconds(0), k;
  }), u = n(() => {
    if (a.value.formatToParts && typeof a.value.formatToParts == "function") {
      const k = i.value;
      k.setHours(10);
      const g = a.value.formatToParts(k).find((O) => O.type === "dayPeriod");
      if (g)
        return g.value;
    }
    return Et;
  }), d = n(() => {
    if (a.value.formatToParts && typeof a.value.formatToParts == "function") {
      const k = i.value;
      k.setHours(20);
      const g = a.value.formatToParts(k).find((O) => O.type === "dayPeriod");
      if (g)
        return g.value;
    }
    return jt;
  }), b = n(() => [u.value, d.value]), c = n(() => {
    if (a.value.formatToParts && typeof a.value.formatToParts == "function") {
      const k = i.value, g = a.value.formatToParts(k), O = g.find(
        (H, p) => p > 0 && g[p - 1].type === "hour"
      );
      if (O)
        return O.value;
    }
    return ":";
  }), v = n(() => {
    if (a.value.formatToParts && typeof a.value.formatToParts == "function") {
      const k = i.value, g = a.value.formatToParts(k), O = g.find(
        (H, p) => p > 0 && g[p - 1].type === "minute"
      );
      if (O)
        return O.value;
    }
    return ":";
  }), m = n(() => {
    if (a.value.formatToParts && typeof a.value.formatToParts == "function") {
      const k = i.value, g = a.value.formatToParts(k), O = g.find(
        (H, p) => p > 0 && g[p - 1].type === "second"
      );
      if (O)
        return O.value;
    }
  });
  function S(k) {
    return a.value.format(k);
  }
  function B(k) {
    if (!k)
      return null;
    if (a.value.formatToParts && typeof a.value.formatToParts == "function") {
      const L = a.value.formatToParts(i.value).map((W) => W.type === "literal" ? W.value.replace(/ /g, "\\s?") : W.type === "dayPeriod" ? `((?!=<${W.type}>)(${u.value}|${d.value}|${Et}|${jt}|${Et.toLowerCase()}|${jt.toLowerCase()})?)` : `((?!=<${W.type}>)\\d+)`).join(""), N = pa(L, k);
      if (N.hour = N.hour ? parseInt(N.hour, 10) : null, N.minute = N.minute ? parseInt(N.minute, 10) : null, N.second = N.second ? parseInt(N.second, 10) : null, N.hour && N.hour >= 0 && N.hour < 24 && N.minute && N.minute >= 0 && N.minute < 59) {
        N.dayPeriod && (N.dayPeriod.toLowerCase() === d.value.toLowerCase() || N.dayPeriod.toLowerCase() === jt.toLowerCase()) && N.hour < 12 && (N.hour += 12);
        const W = i.value;
        return W.setHours(N.hour), W.setMinutes(N.minute), W.setSeconds(N.second || 0), W;
      }
    }
    let g = !1;
    if (e.hourFormat === Wt) {
      const L = k.split(" ");
      k = L[0], g = L[1] === u.value || L[1] === Et;
    }
    const O = k.split(":");
    let H = parseInt(O[0], 10);
    const p = parseInt(O[1], 10), I = e.enableSeconds ? parseInt(O[2], 10) : 0;
    if (isNaN(H) || H < 0 || H > 23 || e.hourFormat === Wt && (H < 1 || H > 12) || isNaN(p) || p < 0 || p > 59)
      return null;
    const w = i.value;
    return w.setSeconds(I), w.setMinutes(p), e.hourFormat === Wt && (g && H === 12 ? H = 0 : !g && H !== 12 && (H += 12)), w.setHours(H), new Date(w.getTime());
  }
  return {
    defaultTimeFormatter: S,
    defaultTimeParser: B,
    pmString: d,
    amString: u,
    meridiens: b,
    isHourFormat24: o,
    hourLiteral: c,
    minuteLiteral: v,
    secondLiteral: m
  };
}
const Un = ["value", "disabled"], qn = ["value", "disabled"], Xn = ["value", "disabled"], Gn = ["value", "disabled"], el = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OTimepicker",
  configField: "timepicker",
  __name: "Timepicker",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: Date, default: void 0 },
    /** The active state of the dropdown */
    active: { type: Boolean, default: !1 },
    /** Min time to select */
    minTime: { type: Date, default: void 0 },
    /** Max time to select */
    maxTime: { type: Date, default: void 0 },
    /** Display datepicker inline */
    inline: { type: Boolean, default: !1 },
    /** Input placeholder */
    placeholder: { type: String, default: void 0 },
    /** Makes input full width when inside a grouped or addon field */
    expanded: { type: Boolean, default: !1 },
    /** Makes the input rounded */
    rounded: { type: Boolean, default: !1 },
    /** Same as native input readonly */
    readonly: { type: Boolean, default: !1 },
    /** Same as native disabled */
    disabled: { type: Boolean, default: !1 },
    /**
     * Size of the button
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("timepicker.size")
    },
    hourFormat: { type: String, default: void 0 },
    incrementHours: { type: Number, default: 1 },
    incrementMinutes: { type: Number, default: 1 },
    incrementSeconds: { type: Number, default: 1 },
    /** Open dropdown on focus */
    openOnFocus: {
      type: Boolean,
      default: () => r("timepicker.openOnFocus", !0)
    },
    /** Close dropdown on click */
    closeOnClick: {
      type: Boolean,
      default: () => r("timepicker.closeOnClick", !0)
    },
    enableSeconds: { type: Boolean, default: !1 },
    defaultMinutes: { type: Number, default: void 0 },
    defaultSeconds: { type: Number, default: void 0 },
    /** Date format locale */
    locale: {
      type: String,
      default: () => r("locale")
    },
    /** Custom function to format a date into a string */
    timeFormatter: {
      type: Function,
      default: (e, l) => r("timepicker.timeFormatter", l)(e)
    },
    /** Custom function to parse a string into a date */
    timeParser: {
      type: Function,
      default: (e, l) => r("timepicker.timeParser", l)(e)
    },
    /** time creator function, default is `new Date()` */
    timeCreator: {
      type: Function,
      default: () => r("timepicker.timeCreator", () => /* @__PURE__ */ new Date())()
    },
    /** Define a list of times which can not be selected */
    unselectableTimes: {
      type: [Array, Function],
      default: () => []
    },
    /** Reset the time inputs when meridian changes */
    resetOnMeridianChange: {
      type: Boolean,
      default: !1
    },
    /** Dropdown trapFocus */
    trapFocus: {
      type: Boolean,
      default: () => r("timepicker.trapFocus", !0)
    },
    /** Dropdown position */
    position: { type: String, default: void 0 },
    /** Enable dropdown mobile modal */
    mobileModal: {
      type: Boolean,
      default: () => r("timepicker.mobileModal", !0)
    },
    /** Enable mobile native input if mobile agent */
    mobileNative: {
      type: Boolean,
      default: () => r("timepicker.mobileNative", !0)
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("timepicker.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => r("timepicker.icon", void 0)
    },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => r("timepicker.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: !1 },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => r("timepicker.mobileBreakpoint")
    },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => r("timepicker.teleport", !1)
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => r("useHtml5Validation", !0)
    },
    /** The message which is shown when a validation error occurs */
    validationMessage: { type: String, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Timepicker component size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Timepicker component box where you choose the date */
    boxClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Timepicker separator */
    separatorClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Timepicker footer */
    footerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /**
     * Class configuration for the internal input component
     * @ignore
     */
    inputClasses: {
      type: Object,
      default: () => r("timepicker.inputClasses", {})
    },
    /**
     * Class configuration for the internal dropdown component
     * @ignore
     */
    dropdownClasses: {
      type: Object,
      default: () => r("timepicker.dropdownClasses", {})
    },
    /**
     * Class configuration for the internal select component
     * @ignore
     */
    selectClasses: {
      type: Object,
      default: () => r("timepicker.selectClasses", {})
    }
  },
  emits: ["update:modelValue", "update:active", "focus", "blur", "invalid", "icon-click", "icon-right-click"],
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, { isMobile: i } = dt(t.mobileBreakpoint), {
      defaultTimeFormatter: u,
      defaultTimeParser: d,
      pmString: b,
      amString: c,
      meridiens: v,
      isHourFormat24: m,
      hourLiteral: S,
      minuteLiteral: B,
      secondLiteral: k
    } = Kn(t), g = z(), O = xt(t, o), H = Ue("active", t, o), p = z(), I = z(), w = z(), L = z();
    ce(
      () => t.modelValue,
      (ee) => {
        ee ? (p.value = ee.getHours(), I.value = ee.getMinutes(), w.value = ee.getSeconds(), L.value = ee.getHours() >= 12 ? b.value : c.value) : (p.value = null, I.value = null, w.value = null, L.value = c.value);
      },
      { immediate: !0 }
    );
    const N = n(
      () => t.timeFormatter(t.modelValue, u)
    ), W = n(() => t.enableSeconds ? "1" : null);
    ce(
      () => t.hourFormat,
      () => {
        p.value !== null && (L.value = p.value >= 12 ? b.value : c.value);
      }
    ), ce(
      () => t.locale,
      (ee) => {
        ee || (L.value = c.value);
      }
    );
    function Q(ee, Z) {
      return m.value || Z ? P(ee) : String(ee);
    }
    function P(ee) {
      return (ee < 10 ? "0" : "") + ee;
    }
    const y = n(() => {
      if (!t.incrementHours || t.incrementHours < 1)
        throw new Error("Hour increment cannot be null or less than 1.");
      const ee = [], Z = m.value ? 24 : 12;
      for (let T = 0; T < Z; T += t.incrementHours) {
        let de = T, ke = de;
        m.value || (de = T + 1, ke = de, L.value === c.value ? de === 12 && (de = 0) : L.value === b.value && de !== 12 && (de += 12)), ee.push({
          label: Q(ke, !1),
          value: de
        });
      }
      return ee;
    }), D = n(() => {
      if (!t.incrementMinutes || t.incrementMinutes < 1)
        throw new Error("Minute increment cannot be null or less than 1.");
      const ee = [];
      for (let Z = 0; Z < 60; Z += t.incrementMinutes)
        ee.push({
          label: Q(Z, !0),
          value: Z
        });
      return ee;
    }), U = n(() => {
      if (!t.incrementSeconds || t.incrementSeconds < 1)
        throw new Error("Second increment cannot be null or less than 1.");
      const ee = [];
      for (let Z = 0; Z < 60; Z += t.incrementSeconds)
        ee.push({
          label: Q(Z, !0),
          value: Z
        });
      return ee;
    });
    function G(ee) {
      let Z = !1;
      if (t.minTime) {
        const T = t.minTime.getHours(), de = D.value.every((ke) => E(ee, ke.value));
        Z = ee < T || de;
      }
      if (t.maxTime && !Z) {
        const T = t.maxTime.getHours();
        Z = ee > T;
      }
      if (t.unselectableTimes && !Z)
        if (typeof t.unselectableTimes == "function") {
          const T = /* @__PURE__ */ new Date();
          return T.setHours(ee), T.setMinutes(I.value), T.setSeconds(w.value), t.unselectableTimes(T);
        } else
          t.unselectableTimes.filter((de) => t.enableSeconds && w.value !== null ? de.getHours() === ee && de.getMinutes() === I.value && de.getSeconds() === w.value : I.value !== null ? de.getHours() === ee && de.getMinutes() === I.value : !1).length > 0 ? Z = !0 : Z = D.value.every((de) => t.unselectableTimes.filter(
            (ke) => ke.getHours() === ee && ke.getMinutes() === de.value
          ).length > 0);
      return Z;
    }
    function E(ee, Z) {
      let T = !1;
      if (t.minTime) {
        const de = t.minTime.getHours(), ke = t.minTime.getMinutes();
        T = ee === de && Z < ke;
      }
      if (t.maxTime && !T) {
        const de = t.maxTime.getHours(), ke = t.maxTime.getMinutes();
        T = ee === de && Z > ke;
      }
      return T;
    }
    function C(ee) {
      if (p.value === null)
        return !1;
      let Z = !1;
      if (G(p.value) ? Z = !0 : Z = E(p.value, ee), t.unselectableTimes && !Z)
        if (typeof t.unselectableTimes == "function") {
          const T = /* @__PURE__ */ new Date();
          return T.setHours(p.value), T.setMinutes(ee), T.setSeconds(w.value), t.unselectableTimes(T);
        } else
          Z = t.unselectableTimes.filter((de) => t.enableSeconds && w.value !== null ? de.getHours() === p.value && de.getMinutes() === ee && de.getSeconds() === w.value : de.getHours() === p.value && de.getMinutes() === ee).length > 0;
    }
    function A(ee) {
      if (I.value == null)
        return !1;
      let Z = !1;
      if (C(I.value))
        Z = !0;
      else {
        if (t.minTime) {
          const T = t.minTime.getHours(), de = t.minTime.getMinutes(), ke = t.minTime.getSeconds();
          Z = p.value === T && I.value === de && ee < ke;
        }
        if (t.maxTime && !Z) {
          const T = t.maxTime.getHours(), de = t.maxTime.getMinutes(), ke = t.maxTime.getSeconds();
          Z = p.value === T && I.value === de && ee > ke;
        }
      }
      if (t.unselectableTimes && !Z)
        if (typeof t.unselectableTimes == "function") {
          const T = /* @__PURE__ */ new Date();
          return T.setHours(p.value), T.setMinutes(I.value), T.setSeconds(ee), t.unselectableTimes(T);
        } else
          Z = t.unselectableTimes.filter((de) => de.getHours() === p.value && de.getMinutes() === I.value && de.getSeconds() === ee).length > 0;
    }
    function x(ee) {
      const Z = ee == "AM" ? 0 : 12;
      for (let T = 0; T < 12; T++)
        if (!G(T + Z))
          return !1;
      return !0;
    }
    function j(ee, Z, T, de) {
      if (ee != null && Z != null && (!m.value && de !== null || m.value)) {
        let ke = null;
        O.value ? ke = new Date(O.value) : (ke = t.timeCreator(), ke.setMilliseconds(0)), ke.setHours(ee), ke.setMinutes(Z), ke.setSeconds(T), isNaN(ke.getTime()) || (O.value = new Date(ke.getTime()));
      }
    }
    function le(ee) {
      const Z = new Date(ee);
      if (ee && !isNaN(Z.getTime())) {
        const T = Z.getHours(), de = Z.getMinutes(), ke = Z.getSeconds();
        return Q(T, !0) + ":" + Q(de, !0) + ":" + Q(ke, !0);
      }
      return "";
    }
    function M(ee) {
      p.value !== null && t.resetOnMeridianChange ? (p.value = null, I.value = null, w.value = null, O.value = null) : p.value !== null && (ee === b.value ? p.value += 12 : ee === c.value && (p.value -= 12)), j(
        p.value,
        I.value,
        t.enableSeconds ? w.value : 0,
        ee
      );
    }
    function $(ee) {
      !I.value && typeof t.defaultMinutes < "u" && (I.value = t.defaultMinutes), !w.value && typeof t.defaultSeconds < "u" && (w.value = t.defaultSeconds), j(
        parseInt(ee, 10),
        I.value,
        t.enableSeconds ? w.value : 0,
        L.value
      );
    }
    function Y(ee) {
      !w.value && t.defaultSeconds && (w.value = t.defaultSeconds), j(
        p.value,
        parseInt(ee, 10),
        t.enableSeconds ? w.value : 0,
        L.value
      );
    }
    function ie(ee) {
      j(
        p.value,
        I.value,
        parseInt(ee, 10),
        L.value
      );
    }
    function fe(ee) {
      const Z = t.timeParser(ee, d);
      O.value = Z || null;
    }
    function Le(ee) {
      if (ee) {
        let Z = null;
        O.value ? Z = new Date(O.value) : (Z = t.timeCreator(), Z.setMilliseconds(0));
        const T = ee.split(":");
        Z.setHours(parseInt(T[0], 10)), Z.setMinutes(parseInt(T[1], 10)), Z.setSeconds(T[2] ? parseInt(T[2], 10) : 0), O.value = new Date(Z.getTime());
      } else
        O.value = null;
    }
    const Re = h([
      "selectClasses.selectClass",
      "o-tpck__select"
    ]), Se = h([
      "selectClasses.placeholderClass",
      "o-tpck__select-placeholder"
    ]), Te = n(() => ({
      "select-class": We(Re.value),
      "placeholder-class": We(Se.value),
      ...t.selectClasses
    })), tt = h(
      ["rootClass", "o-tpck"],
      [
        "sizeClass",
        "o-tpck--",
        n(() => t.size),
        n(() => !!t.size)
      ],
      ["mobileClass", "o-tpck--mobile", null, i]
    ), Ge = h(["separatorClass", "o-tpck__separtor"]), nt = h(["footerClass", "o-tpck__footer"]), Je = h([
      "dropdownClasses.rootClass",
      "o-tpck__dropdown"
    ]), ot = h(["boxClass", "o-tpck__box"]), ct = n(() => We(ot.value));
    return l({ focus: () => {
      var ee;
      return (ee = g.value) == null ? void 0 : ee.focus();
    } }), (ee, Z) => (f(), ne(Za, {
      ref_key: "pickerRef",
      ref: g,
      active: s(H),
      "onUpdate:active": Z[8] || (Z[8] = (T) => lt(H) ? H.value = T : null),
      "data-oruga": "timepicker",
      value: s(O),
      "picker-props": t,
      "formatted-value": N.value,
      "native-type": "time",
      "native-value": le(s(O)),
      "native-max": le(e.maxTime),
      "native-min": le(e.minTime),
      "native-step": W.value,
      "dropdown-classes": s(Je),
      "root-classes": s(tt),
      "box-class": ct.value,
      onChange: fe,
      onNativeChange: Le,
      onFocus: Z[9] || (Z[9] = (T) => ee.$emit("focus", T)),
      onBlur: Z[10] || (Z[10] = (T) => ee.$emit("blur", T)),
      onInvalid: Z[11] || (Z[11] = (T) => ee.$emit("invalid", T)),
      onIconClick: Z[12] || (Z[12] = (T) => ee.$emit("icon-click", T)),
      onIconRightClick: Z[13] || (Z[13] = (T) => ee.$emit("icon-right-click", T))
    }, qt({
      default: se(() => [
        me(pt, ye(Te.value, {
          modelValue: p.value,
          "onUpdate:modelValue": Z[0] || (Z[0] = (T) => p.value = T),
          override: "",
          disabled: e.disabled,
          placeholder: "00",
          onChange: Z[1] || (Z[1] = (T) => $(T.target.value))
        }), {
          default: se(() => [
            (f(!0), V(he, null, xe(y.value, (T) => (f(), V("option", {
              key: T.value,
              value: T.value,
              disabled: G(T.value)
            }, ue(T.label), 9, Un))), 128))
          ]),
          _: 1
        }, 16, ["modelValue", "disabled"]),
        ae("span", {
          class: R(s(Ge))
        }, ue(s(S)), 3),
        me(pt, ye(Te.value, {
          modelValue: I.value,
          "onUpdate:modelValue": Z[2] || (Z[2] = (T) => I.value = T),
          override: "",
          disabled: e.disabled,
          placeholder: "00",
          onChange: Z[3] || (Z[3] = (T) => Y(T.target.value))
        }), {
          default: se(() => [
            (f(!0), V(he, null, xe(D.value, (T) => (f(), V("option", {
              key: T.value,
              value: T.value,
              disabled: C(T.value)
            }, ue(T.label), 9, qn))), 128))
          ]),
          _: 1
        }, 16, ["modelValue", "disabled"]),
        e.enableSeconds ? (f(), V(he, { key: 0 }, [
          ae("span", {
            class: R(s(Ge))
          }, ue(s(B)), 3),
          me(pt, ye(Te.value, {
            modelValue: w.value,
            "onUpdate:modelValue": Z[4] || (Z[4] = (T) => w.value = T),
            override: "",
            disabled: e.disabled,
            placeholder: "00",
            onChange: Z[5] || (Z[5] = (T) => ie(T.target.value))
          }), {
            default: se(() => [
              (f(!0), V(he, null, xe(U.value, (T) => (f(), V("option", {
                key: T.value,
                value: T.value,
                disabled: A(T.value)
              }, ue(T.label), 9, Xn))), 128))
            ]),
            _: 1
          }, 16, ["modelValue", "disabled"]),
          ae("span", {
            class: R(s(Ge))
          }, ue(s(k)), 3)
        ], 64)) : J("", !0),
        s(m) ? J("", !0) : (f(), ne(pt, ye({ key: 1 }, Te.value, {
          modelValue: L.value,
          "onUpdate:modelValue": Z[6] || (Z[6] = (T) => L.value = T),
          override: "",
          disabled: e.disabled,
          onChange: Z[7] || (Z[7] = (T) => M(T.target.value))
        }), {
          default: se(() => [
            (f(!0), V(he, null, xe(s(v), (T) => (f(), V("option", {
              key: T,
              value: T,
              disabled: x(T)
            }, ue(T), 9, Gn))), 128))
          ]),
          _: 1
        }, 16, ["modelValue", "disabled"])),
        ee.$slots.default ? (f(), V("footer", {
          key: 2,
          class: R(s(nt))
        }, [
          _(ee.$slots, "default")
        ], 2)) : J("", !0)
      ]),
      _: 2
    }, [
      ee.$slots.trigger ? {
        name: "trigger",
        fn: se(() => [
          _(ee.$slots, "trigger")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["active", "value", "picker-props", "formatted-value", "native-value", "native-max", "native-min", "native-step", "dropdown-classes", "root-classes", "box-class"]));
  }
}), aa = "AM", la = "PM", Jn = "24", Qn = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "ODatetimepicker",
  configField: "datetimepicker",
  inheritAttrs: !1,
  __name: "Datetimepicker",
  props: /* @__PURE__ */ ze({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: Date, default: void 0 },
    /** The active state of the dropdown, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: !1 },
    /** Define props for the underlying datepicker component */
    datepicker: {
      type: Object,
      default: void 0
    },
    /** Define props for the underlying timepicker component */
    timepicker: {
      type: Object,
      default: void 0
    },
    /** Min date to select */
    minDatetime: { type: Date, default: void 0 },
    /** Max date to select */
    maxDatetime: { type: Date, default: void 0 },
    /**
     * Size of the input control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("datetimepicker.size")
    },
    expanded: { type: Boolean, default: !1 },
    /** Makes the input rounded */
    rounded: { type: Boolean, default: !1 },
    /** Input placeholder */
    placeholder: { type: String, default: void 0 },
    /** Same as native input readonly */
    readonly: { type: Boolean, default: !1 },
    /** Same as native disabled */
    disabled: { type: Boolean, default: !1 },
    /** Display datetimepicker inline */
    inline: { type: Boolean, default: !1 },
    /** Open dropdown on focus */
    openOnFocus: {
      type: Boolean,
      default: () => r("datetimepicker.openOnFocus", !0)
    },
    /** Date format locale */
    locale: {
      type: String,
      default: () => r("locale")
    },
    /** Custom function to format a date into a string */
    datetimeFormatter: {
      type: Function,
      default: (e, l) => r("datetimepicker.dateFormatter", l)(e)
    },
    /** Custom function to parse a string into a date */
    datetimeParser: {
      type: Function,
      default: (e, l) => r("datetimepicker.dateParser", l)(e)
    },
    /** Date creator function, default is `new Date()` */
    datetimeCreator: {
      type: Function,
      default: (e) => r(
        "datetimepicker.datetimeCreator",
        (l) => new Date(l)
      )(e)
    },
    /** Dropdown position */
    position: { type: String, default: void 0 },
    /** Enable mobile native input if mobile agent */
    mobileNative: {
      type: Boolean,
      default: () => r("datetimepicker.mobileNative", !0)
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("datetimepicker.iconPack", void 0)
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => r("datetimepicker.icon", void 0)
    },
    /** Icon to be added on the right side */
    iconRight: {
      type: String,
      default: () => r("datetimepicker.iconRight", void 0)
    },
    /** Make the icon right clickable */
    iconRightClickable: { type: Boolean, default: !1 },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => r("datetimepicker.teleport", !1)
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => r("useHtml5Validation", !0)
    },
    /** The message which is shown when a validation error occurs */
    validationMessage: { type: String, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the Datepicker wrapper */
    datepickerWrapperClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Timepicker wrapper */
    timepickerWrapperClass: {
      type: [String, Array, Function],
      default: void 0
    }
  }, {
    active: { type: Boolean },
    activeModifiers: {},
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["update:modelValue", "update:active", "range-start", "range-end", "change-month", "change-year", "focus", "blur", "invalid", "icon-click", "icon-right-click"], ["update:active", "update:modelValue"]),
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = z(), u = z(), d = z(), b = n(
      () => B.value ? d.value : i.value
    ), { setFocus: c, onBlur: v, onFocus: m, onInvalid: S } = rt(
      b,
      o,
      t
    ), B = n(
      () => t.mobileNative && ft.any()
    );
    ce([() => B.value, () => t.inline], () => {
      i.value && i.value.$forceUpdate();
    });
    const k = Xe(e, "active"), g = Xe(e, "modelValue");
    function O(M) {
      if (!M) {
        g.value = void 0;
        return;
      }
      if (Array.isArray(M)) {
        O(M[0]);
        return;
      }
      let $ = new Date(M.getTime());
      t.modelValue ? (M.getDate() !== t.modelValue.getDate() || M.getMonth() !== t.modelValue.getMonth() || M.getFullYear() !== t.modelValue.getFullYear()) && M.getHours() === 0 && M.getMinutes() === 0 && M.getSeconds() === 0 && $.setHours(
        t.modelValue.getHours(),
        t.modelValue.getMinutes(),
        t.modelValue.getSeconds(),
        0
      ) : $ = t.datetimeCreator(M), t.minDatetime && $ < t.minDatetime ? $ = t.minDatetime : t.maxDatetime && $ > t.maxDatetime && ($ = t.maxDatetime), g.value = new Date($.getTime());
    }
    const H = n(() => t.minDatetime ? new Date(
      t.minDatetime.getFullYear(),
      t.minDatetime.getMonth(),
      t.minDatetime.getDate(),
      0,
      0,
      0,
      0
    ) : t.datepicker ? t.datepicker.minDate : null), p = n(() => t.maxDatetime ? new Date(
      t.maxDatetime.getFullYear(),
      t.maxDatetime.getMonth(),
      t.maxDatetime.getDate(),
      0,
      0,
      0,
      0
    ) : t.datepicker ? t.datepicker.maxDate : null), I = n(() => !t.minDatetime || g.value === null || typeof g.value > "u" || g.value.getFullYear() != t.minDatetime.getFullYear() || g.value.getMonth() != t.minDatetime.getMonth() || g.value.getDate() != t.minDatetime.getDate() ? t.timepicker ? t.timepicker.minTime : null : t.minDatetime), w = n(() => !t.maxDatetime || g.value === null || typeof g.value > "u" || g.value.getFullYear() != t.maxDatetime.getFullYear() || g.value.getMonth() != t.maxDatetime.getMonth() || g.value.getDate() != t.maxDatetime.getDate() ? t.timepicker ? t.timepicker.maxTime : null : t.maxDatetime), L = n(
      () => {
        var M;
        return (M = t.datepicker) != null && M.size ? t.datepicker.size : t.size;
      }
    ), N = n(
      () => {
        var M;
        return (M = t.timepicker) != null && M.size ? t.timepicker.size : t.size;
      }
    ), W = n(
      () => {
        var M;
        return (M = t.timepicker) != null && M.disabled ? t.timepicker.disabled : t.disabled;
      }
    );
    function Q(M) {
      const $ = new Date(M);
      if (M && !isNaN($.getTime())) {
        const Y = $.getFullYear(), ie = $.getMonth() + 1, fe = $.getDate(), Le = $.getHours(), Re = $.getMinutes(), Se = $.getSeconds();
        return Y + "-" + ((ie < 10 ? "0" : "") + ie) + "-" + ((fe < 10 ? "0" : "") + fe) + "T" + ((Le < 10 ? "0" : "") + Le) + ":" + ((Re < 10 ? "0" : "") + Re) + ":" + ((Se < 10 ? "0" : "") + Se);
      }
      return "";
    }
    const P = n(
      () => {
        var M;
        return (M = u.value) != null && M.enableSeconds ? u.value.enableSeconds : !1;
      }
    ), y = n(
      () => new Intl.DateTimeFormat(t.locale, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: P.value ? "numeric" : void 0
      }).resolvedOptions()
    ), D = n(
      () => {
        var M;
        return ((M = t.timepicker) == null ? void 0 : M.hourFormat) === Jn || !y.value.hour12;
      }
    ), U = n(
      () => new Intl.DateTimeFormat(t.locale, {
        year: y.value.year || "numeric",
        month: y.value.month || "numeric",
        day: y.value.day || "numeric",
        hour: y.value.hour || "numeric",
        minute: y.value.minute || "numeric",
        second: P.value ? y.value.second || "numeric" : void 0,
        hourCycle: D.value ? "h23" : "h12"
      })
    ), G = n(() => {
      if (U.value.formatToParts && typeof U.value.formatToParts == "function") {
        const M = t.datetimeCreator(/* @__PURE__ */ new Date());
        M.setHours(10);
        const $ = U.value.formatToParts(M).find((Y) => Y.type === "dayPeriod");
        if ($)
          return $.value;
      }
      return aa;
    }), E = n(() => {
      if (U.value.formatToParts && typeof U.value.formatToParts == "function") {
        const M = t.datetimeCreator(/* @__PURE__ */ new Date());
        M.setHours(20);
        const $ = U.value.formatToParts(M).find((Y) => Y.type === "dayPeriod");
        if ($)
          return $.value;
      }
      return la;
    });
    function C(M) {
      function $(ie) {
        if (U.value.formatToParts && typeof U.value.formatToParts == "function") {
          const fe = [aa, la, aa.toLowerCase(), la.toLowerCase()];
          u.value && (fe.push(G.value), fe.push(E.value));
          const Le = this.dtf.formatToParts(/* @__PURE__ */ new Date()), Re = Le.map((Te, tt) => Te.type === "literal" ? tt + 1 < Le.length && Le[tt + 1].type === "hour" ? "[^\\d]+" : Te.value.replace(/ /g, "\\s?") : Te.type === "dayPeriod" ? `((?!=<${Te.type}>)(${fe.join(
            "|"
          )})?)` : `((?!=<${Te.type}>)\\d+)`).join(""), Se = pa(Re, ie);
          if (Se.year && Se.year.length === 4 && Se.month && Se.month <= 12 && Se.day && Se.day <= 31 && Se.hour && Se.hour >= 0 && Se.hour < 24 && Se.minute && Se.minute >= 0 && Se.minute <= 59)
            return new Date(
              Se.year,
              Se.month - 1,
              Se.day,
              Se.hour,
              Se.minute,
              Se.second || 0
            );
        }
        return new Date(Date.parse(ie));
      }
      return t.datetimeParser(M, $);
    }
    function A(M) {
      return t.datetimeFormatter(
        M,
        ($) => $ ? U.value.format($) : ""
      );
    }
    function x(M) {
      const $ = M.target.value, Y = $ ? $.split(/\D/) : [];
      if (Y.length >= 5) {
        const ie = parseInt(Y[0], 10), fe = parseInt(Y[1], 10) - 1, Le = parseInt(Y[2], 10), Re = parseInt(Y[3], 10), Se = parseInt(Y[4], 10);
        O(new Date(ie, fe, Le, Re, Se));
      } else
        O(null);
    }
    const j = h([
      "datepickerWrapperClass",
      "o-dtpck__date"
    ]), le = h([
      "timepickerWrapperClass",
      "o-dtpck__time"
    ]);
    return l({ focus: c }), (M, $) => !B.value || e.inline ? (f(), ne(_a, ye({
      key: 0,
      ref_key: "datepickerRef",
      ref: i
    }, { ...M.$attrs, ...e.datepicker }, {
      active: k.value,
      "onUpdate:active": $[1] || ($[1] = (Y) => k.value = Y),
      "model-value": g.value,
      "data-oruga": "datetimepicker",
      class: s(j),
      rounded: e.rounded,
      "open-on-focus": e.openOnFocus,
      position: e.position,
      inline: e.inline,
      readonly: e.readonly,
      expanded: e.expanded,
      "close-on-click": !1,
      "date-formatter": A,
      "date-parser": C,
      "min-date": H.value,
      "max-date": p.value,
      icon: e.icon,
      "icon-right": e.iconRight,
      "icon-right-clickable": e.iconRightClickable,
      "icon-pack": e.iconPack,
      size: L.value,
      placeholder: e.placeholder,
      range: !1,
      disabled: e.disabled,
      "mobile-native": B.value,
      locale: e.locale,
      teleport: e.teleport,
      "onUpdate:modelValue": O,
      onFocus: s(m),
      onBlur: s(v),
      onChangeMonth: $[2] || ($[2] = (Y) => M.$emit("change-month", Y)),
      onChangeYear: $[3] || ($[3] = (Y) => M.$emit("change-year", Y)),
      onIconClick: $[4] || ($[4] = (Y) => M.$emit("icon-click", Y)),
      onIconRightClick: $[5] || ($[5] = (Y) => M.$emit("icon-right-click", Y))
    }), {
      footer: se(() => [
        ae("div", {
          class: R(s(le))
        }, [
          me(el, ye({
            ref_key: "timepickerRef",
            ref: u
          }, e.timepicker, {
            modelValue: g.value,
            "onUpdate:modelValue": $[0] || ($[0] = (Y) => g.value = Y),
            inline: "",
            readonly: e.readonly,
            "min-time": I.value,
            "max-time": w.value,
            size: N.value,
            disabled: W.value,
            "mobile-native": B.value,
            locale: e.locale
          }), null, 16, ["modelValue", "readonly", "min-time", "max-time", "size", "disabled", "mobile-native", "locale"])
        ], 2),
        M.$slots.footer !== void 0 ? _(M.$slots, "footer", { key: 0 }) : J("", !0)
      ]),
      _: 3
    }, 16, ["active", "model-value", "class", "rounded", "open-on-focus", "position", "inline", "readonly", "expanded", "min-date", "max-date", "icon", "icon-right", "icon-right-clickable", "icon-pack", "size", "placeholder", "disabled", "mobile-native", "locale", "teleport", "onFocus", "onBlur"])) : (f(), ne(Ft, ye({ key: 1 }, M.$attrs, {
      ref_key: "nativeInputRef",
      ref: d,
      type: "datetime-local",
      autocomplete: "off",
      value: Q(g.value),
      max: Q(p.value),
      min: Q(H.value),
      placeholder: e.placeholder,
      size: L.value,
      "icon-pack": e.iconPack,
      icon: e.icon,
      rounded: e.rounded,
      disabled: e.disabled,
      readonly: !1,
      "use-html5-validation": !1,
      onChange: x,
      onFocus: s(m),
      onBlur: s(v),
      onInvalid: s(S)
    }), null, 16, ["value", "max", "min", "placeholder", "size", "icon-pack", "icon", "rounded", "disabled", "onFocus", "onBlur", "onInvalid"]));
  }
}), Zn = {
  install(e) {
    Ae(e, Qn);
  }
}, _n = {
  install(e) {
    Ae(e, va), Ae(e, Ct);
  }
}, eo = {
  install(e) {
    Ae(e, Ua);
  }
}, to = {
  install(e) {
    Ae(e, Ve);
  }
}, ao = {
  install(e) {
    Ae(e, Ft);
  }
}, ya = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OLoading",
  configField: "loading",
  inheritAttrs: !1,
  __name: "Loading",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether loading is active or not, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: !1 },
    /** Loader will overlay the full page. */
    fullPage: { type: Boolean, default: !0 },
    /** Notification label, unnecessary when default slot is used. */
    label: { type: String, default: void 0 },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => r("loading.animation", "fade")
    },
    /** Is Loading cancable by pressing escape or clicking outside. */
    cancelable: { type: Boolean, default: !1 },
    /** Callback function to call after user canceled (pressed escape / clicked outside). */
    onCancel: { type: Function, default: () => {
    } },
    /** Callback function to call after close (programmatically close or user canceled). */
    onClose: { type: Function, default: () => {
    } },
    /** Icon name to show, unnecessary when default slot is used. */
    icon: {
      type: String,
      default: () => r("loading.icon", "loading")
    },
    /** Enable spin effect on icon */
    iconSpin: {
      type: Boolean,
      default: () => r("loading.iconSpin", !0)
    },
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
      type: String,
      default: () => r("loading.iconSize", "medium")
    },
    /**
     * DOM element where the loading component will be created on (for programmatic usage).
     * Note that this also changes fullPage to false.
     */
    container: {
      type: [Object, String],
      default: () => r("loading.container", "body")
    },
    /**
     * This is used internally for programmatic usage
     * @ignore
     */
    programmatic: {
      type: Object,
      default: void 0
    },
    /**
     * This is used internally for programmatic usage.
     * @ignore
     */
    promise: { type: Promise, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the root element when fullpage */
    fullPageClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the loading overlay */
    overlayClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the loading icon */
    iconClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the loading label */
    labelClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:active", "update:fullPage", "close"],
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = z(), u = Ue("fullPage", t, o), { isActive: d, close: b, cancel: c } = Jt(
      i,
      t,
      o,
      {
        cancelOptions: ["escape", "outside"]
      }
    );
    st(() => {
      t.programmatic && t.container && (u.value = !1);
    });
    const v = h(
      ["rootClass", "o-load"],
      ["fullPageClass", "o-load--fullpage", null, u]
    ), m = h(["overlayClass", "o-load__overlay"]), S = h(["iconClass", "o-load__icon"]), B = h(["labelClass", "o-load__label"]);
    return l({ close: b, promise: t.promise }), (k, g) => (f(), ne(et, { name: e.animation }, {
      default: se(() => [
        s(d) ? (f(), V("div", {
          key: 0,
          ref_key: "rootRef",
          ref: i,
          "data-oruga": "loading",
          role: "dialog",
          class: R(s(v))
        }, [
          ae("div", {
            class: R(s(m)),
            tabindex: -1,
            "aria-hidden": "true",
            onClick: g[0] || (g[0] = (O) => s(c)("outside"))
          }, null, 2),
          _(k.$slots, "default", { close: s(b) }, () => [
            me(Ve, {
              icon: e.icon,
              spin: e.iconSpin,
              size: e.iconSize,
              class: R(s(S)),
              both: ""
            }, null, 8, ["icon", "spin", "size", "class"]),
            e.label ? (f(), V("span", {
              key: 0,
              class: R(s(B))
            }, ue(e.label), 3)) : J("", !0)
          ])
        ], 2)) : J("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
class Qt {
  constructor() {
    Sa(this, "entries");
    this.entries = [];
  }
  add(l) {
    this.entries.push(l);
  }
  remove(l) {
    const a = this.entries.indexOf(l);
    this.entries.splice(a, 1);
  }
  walk(l) {
    this.entries = [...this.entries].filter((a) => l(a) !== !0);
  }
}
const Ba = new Qt(), lo = {
  open(e) {
    const l = typeof e == "string" ? {
      label: e
    } : { ...e };
    let a;
    Array.isArray(l.label) && (a = l.label, delete l.label);
    const o = mt({
      programmatic: { instances: Ba },
      active: !0
      // set the active state to true
    }, l);
    o.promise = new Promise((b, c) => {
      o.programmatic.resolve = b, o.programmatic.reject = c;
    });
    const i = () => a, u = zt, d = me(ya, o, i);
    return d.appContext = u._context, Xt(d, document.createElement("div")), d.component.exposed;
  },
  closeAll(...e) {
    Ba.walk((l) => l.exposed.close(...e));
  }
}, no = lo, oo = {
  install(e) {
    Ae(e, ya), Ht(e, "loading", no);
  }
}, io = ["role"], so = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OMenu",
  configField: "menu",
  __name: "Menu",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Menu label */
    label: { type: String, default: void 0 },
    /** If sub menu items are collapsible */
    accordion: { type: Boolean, default: !0 },
    /** If the menu items are clickable */
    activable: { type: Boolean, default: !0 },
    /**
     * Role attribute to be passed to the list container for better accessibility.
     * Use menu only in situations where your dropdown is related to a navigation menu.
     * @values list, menu, dialog
     */
    ariaRole: {
      type: String,
      default: r("menu.ariaRole", "menu"),
      validator: (e) => ["menu", "list", "dialog"].indexOf(e) > -1
    },
    /** Icon to be shown */
    icon: { type: String, default: void 0 },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("menu.iconPack")
    },
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
      type: String,
      default: () => r("menu.iconSize")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the menu list */
    listClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the menu list label */
    listLabelClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  setup(e) {
    const l = e, a = z(), t = n(() => ({
      activable: l.activable,
      accordion: l.accordion,
      resetMenu: i
    })), { childItems: o } = gt(a, {
      data: t
    });
    function i(c = []) {
      o.value.forEach((v) => {
        c.includes(Qe(v)) || v.data.reset();
      });
    }
    const u = h(["rootClass", "o-menu"]), d = h(["listClass", "o-menu__list"]), b = h(["listLabelClass", "o-menu__label"]);
    return (c, v) => {
      const m = Ut("o-icon");
      return f(), V("div", {
        ref_key: "rootRef",
        ref: a,
        "data-oruga": "menu",
        class: R(s(u))
      }, [
        e.label || c.$slots.label ? (f(), V("div", {
          key: 0,
          class: R(s(b))
        }, [
          _(c.$slots, "label", {}, () => [
            e.icon ? (f(), ne(m, {
              key: 0,
              icon: e.icon,
              pack: e.iconPack,
              size: e.iconSize
            }, null, 8, ["icon", "pack", "size"])) : J("", !0),
            ae("span", null, ue(e.label), 1)
          ])
        ], 2)) : J("", !0),
        ae("ul", {
          class: R(s(d)),
          role: e.ariaRole
        }, [
          _(c.$slots, "default")
        ], 10, io)
      ], 2);
    };
  }
}), ro = ["role", "data-id"], uo = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OMenuItem",
  configField: "menu",
  inheritAttrs: !1,
  __name: "MenuItem",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** The active state of the menu item, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: !1 },
    /** Menu item label */
    label: { type: String, default: void 0 },
    /** Menu item will be expanded */
    expanded: { type: Boolean, default: !1 },
    /** Menu item will be disabled */
    disabled: { type: Boolean, default: !1 },
    /** Icon to be shown */
    icon: { type: String, default: void 0 },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("menu.iconPack")
    },
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
      type: String,
      default: () => r("menu.iconSize")
    },
    /** Transition name to apply on menu list */
    animation: {
      type: String,
      default: () => r("menu.animation", "slide")
    },
    /** Menu item tag name */
    tag: {
      type: [String, Object, Function],
      default: () => r("menu.menuTag", "a")
    },
    /**
     * Role attribute to be passed to the list item for better accessibility.
     * @values listitem, menuitem
     */
    ariaRole: {
      type: String,
      default: r("menu.itemAriaRole", "menuitem")
    },
    // class props (will not be displayed in the docs)
    /** Class of the menu item */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the active menu item */
    itemActiveClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the disabled menu item */
    itemDisabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the icon of menu item */
    itemIconTextClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the menu item when is a submenu */
    itemSubmenuClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the root element of menu item */
    itemWrapperClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:modelValue", "update:expanded"],
  setup(e, { emit: l }) {
    const a = e, t = l, o = n(() => ({
      reset: k
    })), { parent: i, item: u } = yt({
      data: o
    }), d = yt({
      key: "menu-item",
      needParent: !1
    }), b = n(() => {
      var w;
      return (w = d.parent) == null ? void 0 : w.value;
    }), c = Ue("active", a, t, { passive: !0 }), v = Ue("expanded", a, t, { passive: !0 }), m = n(
      () => b.value ? `menu-item-${d.item.value.identifier}` : `menu-${u.value.identifier}`
    );
    function S() {
      a.disabled || (B(), v.value = a.expanded || !v.value, i.value.activable && (c.value = !0));
    }
    function B(w) {
      var L;
      (L = b.value) != null && L.triggerReset ? b.value.triggerReset(Qe(u.value)) : i.value.resetMenu && i.value.resetMenu([Qe(u.value), w]);
    }
    function k() {
      i.value.accordion && (v.value = !1), i.value.activable && (c.value = !1);
    }
    const g = z(), O = n(() => ({
      triggerReset: B
    }));
    gt(g, { key: "menu-item", data: O });
    const H = h(
      ["itemClass", "o-menu__item"],
      ["itemActiveClass", "o-menu__item--active", null, c],
      [
        "itemDisabledClass",
        "o-menu__item--disabled",
        null,
        n(() => a.disabled)
      ],
      [
        "itemIconTextClass",
        "o-menu__item--icon-text",
        null,
        n(() => !!a.icon)
      ]
    ), p = h([
      "itemSubmenuClass",
      "o-menu__item__submenu"
    ]), I = h([
      "itemWrapperClass",
      "o-menu__item__wrapper"
    ]);
    return (w, L) => {
      const N = Ut("o-icon");
      return f(), V("li", {
        ref_key: "rootRef",
        ref: g,
        role: e.ariaRole,
        class: R(s(I)),
        "data-id": m.value,
        "data-oruga": "menu-item",
        "aria-roledescription": "item"
      }, [
        (f(), ne(qe(e.tag), ye(w.$attrs, {
          class: s(H),
          onClick: L[0] || (L[0] = (W) => S())
        }), {
          default: se(() => [
            e.icon ? (f(), ne(N, {
              key: 0,
              icon: e.icon,
              pack: e.iconPack,
              size: e.iconSize
            }, null, 8, ["icon", "pack", "size"])) : J("", !0),
            _(w.$slots, "label", {
              expanded: s(v),
              active: s(c)
            }, () => [
              ae("span", null, ue(e.label), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])),
        w.$slots.default ? (f(), ne(et, {
          key: 0,
          name: e.animation
        }, {
          default: se(() => [
            $e(ae("ul", {
              class: R(s(p))
            }, [
              _(w.$slots, "default")
            ], 2), [
              [He, s(v)]
            ])
          ]),
          _: 3
        }, 8, ["name"])) : J("", !0)
      ], 10, ro);
    };
  }
}), co = {
  install(e) {
    Ae(e, so), Ae(e, uo);
  }
}, fo = ["role", "aria-label", "aria-modal"], vo = { key: 0 }, tl = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OModal",
  configField: "modal",
  inheritAttrs: !1,
  __name: "Modal",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether modal is active or not, use v-model:active to make it two-way binding */
    active: { type: Boolean, default: !1 },
    /** Display modal as full screen */
    fullScreen: { type: Boolean, default: !1 },
    /** Text content, unnecessary when default slot is used */
    content: { type: String, default: void 0 },
    /** Width of the Modal */
    width: {
      type: [String, Number],
      default: () => r("modal.width", 960)
    },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => r("modal.animation", "zoom-out")
    },
    /**
     * Is Modal cancleable by clicking 'X', pressing escape or clicking outside
     * @values escape, x, outside, button, true, false
     */
    cancelable: {
      type: [Array, Boolean],
      default: () => r("modal.cancelable", ["escape", "x", "outside", "button"])
    },
    /** Callback function to call after user canceled (clicked 'X' / pressed escape / clicked outside) */
    onCancel: { type: Function, default: () => {
    } },
    /** Callback function to call after close (programmatically close or user canceled) */
    onClose: { type: Function, default: () => {
    } },
    /**
     * Use `clip` to remove the body scrollbar, `keep` to have a non scrollable scrollbar to avoid shifting background,
     * but will set body to position fixed, might break some layouts.
     * @values keep, clip
     */
    scroll: {
      type: String,
      default: () => r("modal.scroll", "keep"),
      validator: (e) => ["keep", "clip"].indexOf(e) >= 0
    },
    /** Trap focus inside the modal */
    trapFocus: {
      type: Boolean,
      default: () => r("modal.trapFocus", !0)
    },
    /**
     * Role attribute to be passed to the div wrapper for better accessibility.
     * @values dialog, alertdialog
     */
    ariaRole: {
      type: String,
      default: () => r("modal.ariaRole"),
      validator: (e) => ["dialog", "alertdialog"].indexOf(e) >= 0
    },
    /** Accessibility aria-label to be passed to the div wrapper element */
    ariaLabel: { type: String, default: () => r("modal.ariaLabel") },
    /** Destroy modal on hide */
    destroyOnHide: {
      type: Boolean,
      default: () => r("modal.destroyOnHide", !1)
    },
    /** Automatically focus modal when active */
    autoFocus: {
      type: Boolean,
      default: () => r("modal.autoFocus", !0)
    },
    /** Close icon name */
    closeIcon: {
      type: String,
      default: () => r("modal.closeIcon", "close")
    },
    /**
     * Size of close icon
     * @values small, medium, large
     */
    closeIconSize: {
      type: String,
      default: () => r("modal.closeIconSize", "medium")
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => r("modal.mobileBreakpoint")
    },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => r("modal.teleport", !1)
    },
    /**
     * Component to be injected, used to open a component modal programmatically.
     * Close modal within the component by emitting a 'close' event — emits('close')
     */
    component: {
      type: [Object, Function],
      default: void 0
    },
    /** Props to be binded to the injected component */
    props: { type: Object, default: void 0 },
    /** Events to be binded to the injected component */
    events: { type: Object, default: () => ({}) },
    /** DOM element where the modal component will be created on (for programmatic usage) */
    container: {
      type: [Object, String],
      default: () => r("modal.container", "body")
    },
    /**
     * This is used internally for programmatic usage
     * @ignore
     */
    programmatic: {
      type: Object,
      default: void 0
    },
    /**
     * This is used internally for programmatic usage
     * @ignore
     */
    promise: { type: Promise, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of modal component when its active */
    activeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the modal overlay */
    overlayClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the modal content */
    contentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the close button */
    closeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the modal when fullscreen */
    fullScreenClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of modal component when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the modal when scroll is clip */
    scrollClipClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the modal when scroll is not clip */
    noScrollClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:active", "close"],
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = z(), { isActive: u, close: d, cancel: b } = Jt(
      i,
      t,
      o,
      {
        destroyOnHide: t.destroyOnHide,
        cancelOptions: r("modal.cancelable", [
          "escape",
          "x",
          "outside",
          "button"
        ])
      }
    ), { isMobile: c } = dt(t.mobileBreakpoint), v = n(
      () => typeof t.teleport == "boolean" ? { to: "body", disabled: !t.teleport } : { to: t.teleport, disabled: !1 }
    ), m = z(null), S = z(!t.active);
    ce(u, (P) => {
      g(), P && i.value && t.autoFocus && De(() => i.value.focus()), !P && t.destroyOnHide && setTimeout(() => oa(i.value));
    });
    const B = n(
      () => Array.isArray(t.cancelable) ? t.cancelable.indexOf("x") >= 0 : t.cancelable
    ), k = n(
      () => t.fullScreen ? null : { maxWidth: St(t.width) }
    );
    It(() => {
      if (Be) {
        const P = m.value ? m.value : document.documentElement.scrollTop;
        Q.value && (document.body.classList.remove(...Q.value), document.documentElement.classList.remove(...Q.value)), document.documentElement.scrollTop = P, document.body.style.top = null;
      }
    });
    function g() {
      if (Be) {
        if (t.scroll === "clip") {
          Q.value && (u.value ? document.documentElement.classList.add(...Q.value) : document.documentElement.classList.remove(...Q.value));
          return;
        }
        if (m.value = m.value ? m.value : document.documentElement.scrollTop, Q.value && (u.value ? document.body.classList.add(...Q.value) : document.body.classList.remove(...Q.value)), u.value) {
          document.body.style.top = `-${m.value}px`;
          return;
        }
        document.documentElement.scrollTop = m.value, document.body.style.top = null, m.value = null;
      }
    }
    function O() {
      S.value = !1;
    }
    function H() {
      S.value = !0;
    }
    const p = h(
      ["rootClass", "o-modal"],
      ["mobileClass", "o-modal--mobile", null, c],
      ["activeClass", "o-modal--active", null, u]
    ), I = h(["overlayClass", "o-modal__overlay"]), w = h(
      ["contentClass", "o-modal__content"],
      [
        "fullScreenClass",
        "o-modal__content--full-screen",
        null,
        n(() => t.fullScreen)
      ]
    ), L = h(["closeClass", "o-modal__close"]), N = h(["scrollClipClass", "o-clipped"]), W = h(["noScrollClass", "o-noscroll"]), Q = n(
      () => We(
        t.scroll === "clip" ? N.value : W.value
      )
    );
    return Q.value, l({ close: d, promise: t.promise }), (P, y) => (f(), ne(ua, {
      to: v.value.to,
      disabled: v.value.disabled
    }, [
      me(et, {
        name: e.animation,
        onAfterEnter: O,
        onBeforeLeave: H
      }, {
        default: se(() => [
          $e((f(), V("div", ye(P.$attrs, {
            ref_key: "rootRef",
            ref: i,
            "data-oruga": "modal",
            class: s(p),
            tabindex: -1,
            role: e.ariaRole,
            "aria-label": e.ariaLabel,
            "aria-modal": s(u)
          }), [
            ae("div", {
              class: R(s(I)),
              tabindex: "-1",
              "aria-hidden": "true",
              onClick: y[0] || (y[0] = (D) => s(b)("outside"))
            }, null, 2),
            ae("div", {
              class: R(s(w)),
              style: _e(k.value)
            }, [
              e.component ? (f(), ne(qe(e.component), ye({ key: 0 }, P.$props.props, ca(P.$props.events), { onClose: s(d) }), null, 16, ["onClose"])) : _(P.$slots, "default", {
                key: 1,
                close: s(d)
              }, () => [
                e.content ? (f(), V("div", vo, ue(e.content), 1)) : J("", !0)
              ]),
              B.value ? $e((f(), ne(Ve, {
                key: 2,
                clickable: "",
                both: "",
                class: R(s(L)),
                icon: e.closeIcon,
                size: e.closeIconSize,
                onClick: y[1] || (y[1] = (D) => s(b)("x"))
              }, null, 8, ["class", "icon", "size"])), [
                [He, !S.value]
              ]) : J("", !0)
            ], 6)
          ], 16, fo)), [
            [He, s(u)],
            [s(Ga), e.trapFocus]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["to", "disabled"]));
  }
}), Oa = new Qt(), po = {
  open(e) {
    const l = typeof e == "string" ? {
      content: e
    } : { ...e };
    let a;
    Array.isArray(l.content) && (a = l.content, delete l.content);
    const o = mt({
      programmatic: { instances: Oa },
      active: !0
      // set the active state to true
    }, l);
    o.promise = new Promise((b, c) => {
      o.programmatic.resolve = b, o.programmatic.reject = c;
    });
    const i = () => a, u = zt, d = me(tl, o, i);
    return d.appContext = u._context, Xt(d, document.createElement("div")), d.component.exposed;
  },
  closeAll(...e) {
    Oa.walk((l) => l.exposed.close(...e));
  }
}, mo = po, yo = {
  install(e) {
    Ae(e, tl), Ht(e, "modal", mo);
  }
}, go = ["aria-label"], bo = ["innerHTML"], Co = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "ONotification",
  configField: "notification",
  inheritAttrs: !1,
  __name: "Notification",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether modal is active or not, use v-model:active to make it two-way binding */
    active: { type: Boolean, default: !0 },
    /**
     * Type (color) of the notification
     * @values info, success, warning, danger
     */
    type: {
      type: String,
      default: void 0,
      validator: (e) => ["info", "success", "warning", "danger", void 0].indexOf(e) > -1
    },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("notification.variant")
    },
    /**
     * Which position the notification will appear when programmatically
     * @values top-right, top, top-left, bottom-right, bottom, bottom-left
     */
    position: {
      type: String,
      default: () => r("notification.position", "top"),
      validator: (e) => [
        "top-right",
        "top",
        "top-left",
        "bottom-right",
        "bottom",
        "bottom-left"
      ].indexOf(e) > -1
    },
    /** Message text (can contain HTML), unnecessary when default slot is used */
    message: {
      type: [String, Array],
      default: void 0
    },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => r("notification.animation", "fade")
    },
    /** Accessibility label for the close button */
    ariaCloseLabel: {
      type: String,
      default: () => r("notification.ariaCloseLabel", "Close")
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("notification.iconPack")
    },
    /** Icon name to use */
    icon: { type: String, default: void 0 },
    /**
     * Icon size
     * @values small, medium, large
     */
    iconSize: {
      type: String,
      default: () => r("notification.iconSize", "large")
    },
    /** Add close button to the item that closes the notification */
    closable: { type: Boolean, default: !1 },
    /** Close icon name */
    closeIcon: {
      type: String,
      default: () => r("notification.closeIcon", "close")
    },
    /**
     * Size of close icon
     * @values small, medium, large
     */
    closeIconSize: {
      type: String,
      default: () => r("notification.closeIconSize")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the close button container */
    closeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the content element */
    contentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the icon on the left */
    iconClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the element when positioned */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the notification variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the wrapper element */
    wrapperClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:active", "close"],
  setup(e, { emit: l }) {
    const a = e, t = l, o = Ue("active", a, t, {
      passive: !0
    }), i = n(() => {
      if (a.icon)
        return a.icon;
      switch (a.type) {
        case "info":
          return "information";
        case "success":
          return "check-circle";
        case "warning":
          return "alert";
        case "danger":
          return "alert-circle";
        default:
          return null;
      }
    });
    function u(...S) {
      o.value = !1, t("close", ...S);
    }
    const d = h(
      ["rootClass", "o-notification"],
      [
        "variantClass",
        "o-notification--",
        n(() => a.variant),
        n(() => !!a.variant)
      ],
      [
        "positionClass",
        "o-notification--",
        n(() => a.position),
        n(() => !!a.position)
      ]
    ), b = h([
      "wrapperClass",
      "o-notification__wrapper"
    ]), c = h(["iconClass", "o-notification__icon"]), v = h([
      "contentClass",
      "o-notification__content"
    ]), m = h(["closeClass", "o-notification__close"]);
    return (S, B) => (f(), ne(et, { name: e.animation }, {
      default: se(() => [
        $e(ae("article", ye(S.$attrs, {
          class: s(d),
          "data-oruga": "notification"
        }), [
          e.closable ? (f(), V("button", {
            key: 0,
            class: R(s(m)),
            type: "button",
            "aria-label": e.ariaCloseLabel,
            onClick: B[0] || (B[0] = (k) => u({ action: "close", method: "x" }))
          }, [
            me(Ve, {
              clickable: "",
              pack: e.iconPack,
              both: "",
              icon: e.closeIcon,
              size: e.closeIconSize
            }, null, 8, ["pack", "icon", "size"])
          ], 10, go)) : J("", !0),
          _(S.$slots, "inner", { close: u }),
          S.$slots.default || e.message ? (f(), V("div", {
            key: 1,
            class: R(s(b))
          }, [
            i.value ? (f(), ne(Ve, {
              key: 0,
              icon: i.value,
              pack: e.iconPack,
              class: R(s(c)),
              both: "",
              size: e.iconSize,
              "aria-hidden": ""
            }, null, 8, ["icon", "pack", "class", "size"])) : J("", !0),
            ae("div", {
              class: R(s(v))
            }, [
              _(S.$slots, "default", { close: u }, () => [
                e.message ? (f(), V("span", {
                  key: 0,
                  innerHTML: e.message
                }, null, 8, bo)) : J("", !0)
              ])
            ], 2)
          ], 2)) : J("", !0)
        ], 16), [
          [He, s(o)]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), ho = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "ONotificationNotice",
  configField: "notification",
  inheritAttrs: !1,
  __name: "NotificationNotice",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether notification is active or not, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: !0 },
    /**
     * Which position the notification will appear when programmatically.
     * @values top-right, top, top-left, bottom-right, bottom, bottom-left
     */
    position: {
      type: String,
      default: () => r("notification.position", "top"),
      validator: (e) => [
        "top-right",
        "top",
        "top-left",
        "bottom-right",
        "bottom",
        "bottom-left"
      ].indexOf(e) > -1
    },
    /** Hide notification after duration (in miliseconds) */
    duration: {
      type: Number,
      default: () => r("notification.duration", 2e3)
    },
    /** Show the Notification infinitely until it is dismissed. */
    infinite: { type: Boolean, default: !1 },
    /** If notice should queue with others notices (snackbar/toast/notification). */
    queue: {
      type: Boolean,
      default: () => r("notification.queue")
    },
    /** Callback function to call after user canceled (pressed escape / clicked outside). */
    onCancel: { type: Function, default: () => {
    } },
    /** Callback function to call after close (programmatically close or user canceled). */
    onClose: { type: Function, default: () => {
    } },
    /**
     * Component to be injected.
     * Close notification within the component by emitting a 'close' event — $emit('close').
     */
    component: {
      type: [Object, Function],
      default: void 0
    },
    /** Props to be binded to the injected component. */
    props: { type: Object, default: void 0 },
    /** Events to be binded to the injected component. */
    events: { type: Object, default: () => ({}) },
    /**
     * DOM element the toast will be created on (for programmatic usage).
     * Note that this also changes the position of the toast from fixed to absolute.
     * Meaning that the container should be fixed.
     */
    container: {
      type: [Object, String],
      default: () => r("notification.container", "body")
    },
    /**
     * Props passed to the internal notification component.
     * @ignore
     */
    notification: {
      type: Object,
      default: () => ({})
    },
    /**
     * This is used internally for programmatic usage.
     * @ignore
     */
    programmatic: {
      type: Object,
      default: void 0
    },
    /**
     * This is used internally for programmatic usage.
     * @ignore
     */
    promise: { type: Promise, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Root class of the notice */
    noticeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the notice when positioned */
    noticePositionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the custom container element */
    noticeCustomContainerClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:active", "close"],
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = z(), { isActive: u, close: d, container: b } = Jt(
      () => i.value.$el,
      t,
      o,
      {
        cancelOptions: ["escape", "x"]
      }
    ), c = z(null), v = z(null), m = z();
    ce(
      () => u,
      (L) => {
        L ? g() : m.value && clearTimeout(m.value);
      }
    ), Rl(() => {
      if (H.value && I.value && p.value) {
        const L = We(H.value), N = We(p.value), W = We(I.value);
        if (c.value = b.value.querySelector(
          `.${L.join(".")}.${N.join(".")}`
        ), v.value = b.value.querySelector(
          `.${L.join(".")}.${W.join(".")}`
        ), c.value && v.value)
          return;
        if (c.value || (c.value = document.createElement("div"), c.value.className = `${L.join(
          " "
        )} ${N.join(" ")}`), v.value || (v.value = document.createElement("div"), v.value.className = `${L.join(
          " "
        )} ${W.join(" ")}`), b.value.appendChild(c.value), b.value.appendChild(v.value), b.value.tagName !== "BODY") {
          const Q = We(
            w.value
          );
          Q != null && Q.length && Q.filter((P) => !!P).forEach((P) => {
            c.value.classList.add(P), v.value.classList.add(P);
          });
        }
      }
    }), st(() => {
      k(), g();
    });
    const S = n(() => {
      switch (t.position) {
        case "top-right":
        case "top":
        case "top-left":
          return c.value;
        case "bottom-right":
        case "bottom":
        case "bottom-left":
          return v.value;
        default:
          return null;
      }
    }), B = n(
      () => t.queue ? c.value.childElementCount > 0 || v.value.childElementCount > 0 : !1
    );
    function k() {
      B.value && (S.value.innerHTML = ""), S.value.insertAdjacentElement(
        "afterbegin",
        i.value.$el
      ), u.value = !0;
    }
    function g() {
      t.infinite || (m.value && clearTimeout(m.value), m.value = setTimeout(() => {
        u.value && O({ action: "close", method: "timeout" });
      }, t.duration));
    }
    function O(...L) {
      clearTimeout(m.value), d(...L);
    }
    const H = h(["noticeClass", "o-notices"]), p = h([
      "noticePositionClass",
      "o-notices--",
      "top"
    ]), I = h([
      "noticePositionClass",
      "o-notices--",
      "bottom"
    ]), w = h([
      "noticeCustomContainerClass",
      "o-notices__custom-container"
    ]);
    return l({ close: O, promise: t.promise }), (L, N) => {
      const W = Ut("o-notification");
      return f(), ne(W, ye(e.notification, {
        ref_key: "notificationRef",
        ref: i,
        active: s(u),
        "onUpdate:active": N[0] || (N[0] = (Q) => lt(u) ? u.value = Q : null),
        position: e.position,
        onClose: O
      }), {
        inner: se(({ close: Q }) => [
          e.component ? (f(), ne(qe(e.component), ye({ key: 0 }, L.$props.props, ca(L.$props.events), { onClose: Q }), null, 16, ["onClose"])) : J("", !0)
        ]),
        default: se(() => [
          _(L.$slots, "default")
        ]),
        _: 3
      }, 16, ["active", "position"]);
    };
  }
}), Pa = new Qt(), ko = {
  open(e) {
    const l = typeof e == "string" ? {
      message: e
    } : { ...e };
    let a;
    Array.isArray(l.message) && (a = l.message, delete l.message);
    const t = {
      programmatic: { instances: Pa },
      active: !0,
      // set the active state to true
      position: r("notification.position", "top-right")
    }, o = l.notification ? l.notification : l, i = mt(t, l);
    i.notification = mt({}, o), i.promise = new Promise((c, v) => {
      i.programmatic.resolve = c, i.programmatic.reject = v;
    });
    const u = () => a, d = zt, b = me(ho, i, u);
    return b.appContext = d._context, Xt(b, document.createElement("div")), b.component.exposed;
  },
  closeAll(...e) {
    Pa.walk((l) => l.exposed.close(...e));
  }
}, So = ko, Fo = {
  install(e) {
    Ae(e, Co), Ht(
      e,
      "notification",
      So
    );
  }
}, Mt = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OPaginationButton",
  configField: "pagination",
  __name: "PaginationButton",
  props: {
    number: { type: Number, default: void 0 },
    isCurrent: { type: Boolean, default: !1 },
    click: {
      type: Function,
      required: !0
    },
    ariaLabel: { type: String, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    tag: {
      type: [String, Object, Function],
      default: "button"
    },
    class: { type: String, default: void 0 },
    linkClass: {
      type: Array,
      required: !0
    },
    linkCurrentClass: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const l = e, a = n(() => [
      ...l.linkClass,
      l.class,
      ...l.isCurrent ? l.linkCurrentClass : []
    ]);
    return (t, o) => (f(), ne(qe(e.tag), ye({
      role: "button",
      tabindex: e.disabled ? null : 0,
      disabled: e.disabled,
      class: a.value
    }, t.$attrs, {
      "aria-label": e.ariaLabel,
      "aria-current": e.isCurrent,
      onClick: ve(e.click, ["prevent"]),
      onKeydown: Ce(ve(e.click, ["prevent"]), ["enter"])
    }), {
      default: se(() => [
        _(t.$slots, "default", {}, () => [
          Pe(ue(e.number), 1)
        ])
      ]),
      _: 3
    }, 16, ["tabindex", "disabled", "class", "aria-label", "aria-current", "onClick", "onKeydown"]));
  }
}), al = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OPagination",
  configField: "pagination",
  inheritAttrs: !1,
  __name: "Pagination",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Total count of items */
    total: { type: Number, default: void 0 },
    /** Items count for each page */
    perPage: {
      type: [Number, String],
      default: () => r("pagination.perPage", 20)
    },
    /** Current page number, use v-model:current to make it two-way binding. */
    current: { type: Number, default: 1 },
    /** Number of pagination items to show before current page. */
    rangeBefore: { type: Number, default: 1 },
    /** Number of pagination items to show after current page. */
    rangeAfter: { type: Number, default: 1 },
    /**
     * Pagination size
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("pagination.size")
    },
    /** Simple style */
    simple: {
      type: Boolean,
      default: () => r("pagination.simple", !1)
    },
    /** Rounded button style */
    rounded: {
      type: Boolean,
      default: () => r("pagination.rounded", !1)
    },
    /**
     * Buttons order
     * @values centered, right, left
     */
    order: {
      type: String,
      default: () => r("pagination.order", "right"),
      validator: (e) => ["centered", "right", "left"].indexOf(e) >= 0
    },
    /** Pagination button tag name */
    buttonTag: {
      type: [String, Object, Function],
      default: () => r("pagination.buttonTag", "button")
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("pagination.iconPack")
    },
    /** Icon to use for previous button */
    iconPrev: {
      type: String,
      default: () => r("pagination.iconPrev", "chevron-left")
    },
    /** Icon to use for next button */
    iconNext: {
      type: String,
      default: () => r("pagination.iconNext", "chevron-right")
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => r("pagination.mobileBreakpoint")
    },
    /** Accessibility label for the next page button. */
    ariaNextLabel: {
      type: String,
      default: () => r("pagination.ariaNextLabel", "Next page")
    },
    /** Accessibility label for the previous page button. */
    ariaPreviousLabel: {
      type: String,
      default: () => r("pagination.ariaPreviousLabel", "Previous page")
    },
    /** Accessibility label for the page button. */
    ariaPageLabel: {
      type: String,
      default: () => r("pagination.ariaPageLabel", "page")
    },
    /** Accessibility label for the current page button. */
    ariaCurrentLabel: {
      type: String,
      default: () => r("pagination.ariaCurrentLabel", "Current page")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the prev button */
    prevButtonClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the next button */
    nextButtonClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the pagination list */
    listClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the pagination list items */
    listItemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the link button */
    linkClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the current link */
    linkCurrentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the pagination ellipsis */
    ellipsisClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the info in `simple` mode */
    infoClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the pagination order */
    orderClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the pagination in `simple` mode */
    simpleClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the pagination when rounded */
    roundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the disabled link */
    linkDisabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class for the pagination size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of pagination component when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:current", "change"],
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, { isMobile: i } = dt(t.mobileBreakpoint), u = Ue("current", t, o), d = n(
      () => Math.ceil(t.total / Number(t.perPage))
    );
    ce(
      () => d.value,
      (A) => {
        t.current > A && L();
      }
    );
    const b = n(() => {
      const A = Number(t.perPage), x = t.current * A - A + 1;
      return x >= 0 ? x : 0;
    }), c = n(() => t.current > 1), v = n(() => t.current >= 2 + t.rangeBefore), m = n(() => t.current >= t.rangeBefore + 4), S = n(
      () => t.current <= d.value - (1 + t.rangeAfter)
    ), B = n(
      () => t.current < d.value - (2 + t.rangeAfter)
    ), k = n(() => t.current < d.value), g = n(() => {
      if (t.simple)
        return;
      let A = Math.max(1, t.current - t.rangeBefore);
      A - 1 === 2 && A--;
      let x = Math.min(t.current + t.rangeAfter, d.value);
      d.value - x === 2 && x++;
      const j = [];
      for (let le = A; le <= x; le++)
        j.push(O(le));
      return j;
    });
    function O(A, x) {
      return {
        number: A,
        isCurrent: t.current === A,
        click: (j) => N(A, j),
        ariaLabel: x || H(A, t.current === A),
        tag: t.buttonTag
      };
    }
    function H(A, x) {
      return t.ariaPageLabel && (!x || !t.ariaCurrentLabel) ? t.ariaPageLabel + " " + A + "." : t.ariaPageLabel && x && t.ariaCurrentLabel ? t.ariaCurrentLabel + ", " + t.ariaPageLabel + " " + A + "." : null;
    }
    function p(A) {
      N(t.current - 1, A);
    }
    function I(A) {
      N(t.current + 1, A);
    }
    function w(A) {
      N(1, A);
    }
    function L(A) {
      N(d.value, A);
    }
    function N(A, x) {
      t.current === A || A < 1 || A > d.value || (o("change", A), u.value = A, x && x.target && De(() => x.target.focus()));
    }
    const W = h(
      ["rootClass", "o-pag"],
      [
        "orderClass",
        "o-pag--",
        n(() => t.order),
        n(() => !!t.order)
      ],
      [
        "sizeClass",
        "o-pag--",
        n(() => t.size),
        n(() => !!t.size)
      ],
      ["simpleClass", "o-pag--simple", null, n(() => t.simple)],
      ["mobileClass", "o-pag--mobile", null, i]
    ), Q = h(
      ["prevButtonClass", "o-pag__previous"],
      [
        "linkDisabledClass",
        "o-pag__link--disabled",
        null,
        n(() => !c.value)
      ]
    ), P = h(
      ["nextButtonClass", "o-pag__next"],
      [
        "linkDisabledClass",
        "o-pag__link--disabled",
        null,
        n(() => !k.value)
      ]
    ), y = h(["infoClass", "o-pag__info"]), D = h(["ellipsisClass", "o-pag__ellipsis"]), U = h(["listClass", "o-pag__list"]), G = h(
      ["linkClass", "o-pag__link"],
      [
        "roundedClass",
        "o-pag__link--rounded",
        null,
        n(() => t.rounded)
      ]
    ), E = h([
      "linkCurrentClass",
      "o-pag__link--current"
    ]), C = h(["listItemClass", "o-pag__item"]);
    return l({ last: L, first: w, prev: p, next: I }), (A, x) => (f(), V("nav", {
      class: R(s(W)),
      "data-oruga": "pagination"
    }, [
      _(A.$slots, "previous", Ot(Pt(O(s(u) - 1, e.ariaPreviousLabel))), () => [
        me(Mt, ye(O(s(u) - 1, e.ariaPreviousLabel), {
          class: s(Q),
          "link-class": s(G),
          "link-current-class": s(E)
        }), {
          default: se(() => [
            me(Ve, {
              icon: e.iconPrev,
              pack: e.iconPack,
              both: "",
              "aria-hidden": "true"
            }, null, 8, ["icon", "pack"])
          ]),
          _: 1
        }, 16, ["class", "link-class", "link-current-class"])
      ]),
      _(A.$slots, "next", Ot(Pt(O(s(u) + 1, e.ariaNextLabel))), () => [
        me(Mt, ye(O(s(u) + 1, e.ariaNextLabel), {
          class: s(P),
          "link-class": s(G),
          "link-current-class": s(E)
        }), {
          default: se(() => [
            me(Ve, {
              icon: e.iconNext,
              pack: e.iconPack,
              both: "",
              "aria-hidden": "true"
            }, null, 8, ["icon", "pack"])
          ]),
          _: 1
        }, 16, ["class", "link-class", "link-current-class"])
      ]),
      e.simple ? (f(), V("small", {
        key: 0,
        class: R(s(y))
      }, [
        e.perPage == 1 ? (f(), V(he, { key: 0 }, [
          Pe(ue(b.value) + " / " + ue(e.total), 1)
        ], 64)) : (f(), V(he, { key: 1 }, [
          Pe(ue(b.value) + "-" + ue(Math.min(s(u) * Number(e.perPage), e.total)) + " / " + ue(e.total), 1)
        ], 64))
      ], 2)) : (f(), V("ul", {
        key: 1,
        class: R(s(U))
      }, [
        v.value ? (f(), V("li", {
          key: 0,
          class: R(s(C))
        }, [
          _(A.$slots, "default", Ot(Pt(O(1))), () => [
            me(Mt, ye(O(1), {
              "link-class": s(G),
              "link-current-class": s(E)
            }), null, 16, ["link-class", "link-current-class"])
          ])
        ], 2)) : J("", !0),
        m.value ? (f(), V("li", {
          key: 1,
          class: R(s(C))
        }, [
          ae("span", {
            class: R(s(D))
          }, "…", 2)
        ], 2)) : J("", !0),
        (f(!0), V(he, null, xe(g.value, (j) => (f(), V("li", {
          key: j.number,
          class: R(s(C))
        }, [
          _(A.$slots, "default", Ot(Pt(j)), () => [
            me(Mt, ye(j, {
              "link-class": s(G),
              "link-current-class": s(E)
            }), null, 16, ["link-class", "link-current-class"])
          ])
        ], 2))), 128)),
        B.value ? (f(), V("li", {
          key: 2,
          class: R(s(C))
        }, [
          ae("span", {
            class: R(s(D))
          }, "…", 2)
        ], 2)) : J("", !0),
        S.value ? (f(), V("li", {
          key: 3,
          class: R(s(C))
        }, [
          _(A.$slots, "default", Ot(Pt(O(d.value))), () => [
            me(Mt, ye(O(d.value), {
              "link-class": s(G),
              "link-current-class": s(E)
            }), null, 16, ["link-class", "link-current-class"])
          ])
        ], 2)) : J("", !0)
      ], 2))
    ], 2));
  }
}), Ao = {
  install(e) {
    Ae(e, al);
  }
}, wo = ["aria-checked"], Do = ["disabled", "required", "name", "autocomplete", "value", "aria-labelledby"], xo = ["id"], $o = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "ORadio",
  configField: "radio",
  inheritAttrs: !1,
  __name: "Radio",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: [String, Number, Boolean], default: void 0 },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("radio.variant")
    },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("radio.size")
    },
    /** Input label, unnecessary when default slot is used */
    label: { type: String, default: void 0 },
    /** Same as native value */
    nativeValue: { type: [String, Number, Boolean], default: void 0 },
    /** Same as native disabled */
    disabled: { type: Boolean, default: !1 },
    /** Same as native required */
    required: { type: Boolean, default: !1 },
    /** Same as native name */
    name: { type: String, default: void 0 },
    /** Accessibility label to establish relationship between the checkbox and control label */
    ariaLabelledby: { type: String, default: () => Ke() },
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => r("radio.autocomplete", "off")
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => r("useHtml5Validation", !0)
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when radio is disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the root element when checked */
    checkedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the native input element */
    inputClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the native input element when checked */
    inputCheckedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the radio label */
    labelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the radio size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the radio variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "focus", "blur", "invalid"],
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = z(), { onBlur: u, onFocus: d, onInvalid: b, setFocus: c } = rt(
      i,
      o,
      t
    ), v = xt(t, o), m = n(() => v.value === t.nativeValue);
    function S(O) {
      o("input", v.value, O);
    }
    const B = h(
      ["rootClass", "o-radio"],
      ["checkedClass", "o-radio--checked", null, m],
      [
        "sizeClass",
        "o-radio--",
        n(() => t.size),
        n(() => !!t.size)
      ],
      [
        "disabledClass",
        "o-radio--disabled",
        null,
        n(() => t.disabled)
      ],
      [
        "variantClass",
        "o-radio--",
        n(() => t.variant),
        n(() => !!t.variant)
      ]
    ), k = h(
      ["inputClass", "o-radio__input"],
      ["inputCheckedClass", "o-radio__input--checked", null, m]
    ), g = h(["labelClass", "o-radio__label"]);
    return l({ focus: c }), (O, H) => (f(), V("label", {
      ref: "label",
      class: R(s(B)),
      "data-oruga": "radio",
      role: "radio",
      "aria-checked": m.value,
      onClick: H[5] || (H[5] = ve(
        //@ts-ignore
        (...p) => s(c) && s(c)(...p),
        ["stop"]
      )),
      onKeydown: H[6] || (H[6] = Ce(ve(
        //@ts-ignore
        (...p) => s(c) && s(c)(...p),
        ["prevent"]
      ), ["enter"]))
    }, [
      $e(ae("input", ye(O.$attrs, {
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": H[0] || (H[0] = (p) => lt(v) ? v.value = p : null),
        type: "radio",
        "data-oruga-input": "radio",
        class: s(k),
        disabled: e.disabled,
        required: e.required,
        name: e.name,
        autocomplete: e.autocomplete,
        value: e.nativeValue,
        "aria-labelledby": e.ariaLabelledby,
        onClick: H[1] || (H[1] = ve(() => {
        }, ["stop"])),
        onBlur: H[2] || (H[2] = //@ts-ignore
        (...p) => s(u) && s(u)(...p)),
        onFocus: H[3] || (H[3] = //@ts-ignore
        (...p) => s(d) && s(d)(...p)),
        onInvalid: H[4] || (H[4] = //@ts-ignore
        (...p) => s(b) && s(b)(...p)),
        onInput: S
      }), null, 16, Do), [
        [Tl, s(v)]
      ]),
      e.label || O.$slots.default ? (f(), V("span", {
        key: 0,
        id: e.ariaLabelledby,
        class: R(s(g))
      }, [
        _(O.$slots, "default", {}, () => [
          Pe(ue(e.label), 1)
        ])
      ], 10, xo)) : J("", !0)
    ], 42, wo));
  }
}), Bo = {
  install(e) {
    Ae(e, $o);
  }
}, Oo = {
  install(e) {
    Ae(e, pt);
  }
}, Po = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OSkeleton",
  configField: "skeleton",
  __name: "Skeleton",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Show or hide loader	 */
    active: { type: Boolean, default: !0 },
    /** Show a loading animation */
    animated: {
      type: Boolean,
      default: () => r("skeleton.animated", !0)
    },
    /** Custom width */
    width: { type: [Number, String], default: void 0 },
    /** Custom height */
    height: { type: [Number, String], default: void 0 },
    /** Show a circle shape */
    circle: { type: Boolean, default: !1 },
    /** Enable rounded style */
    rounded: {
      type: Boolean,
      default: () => r("skeleton.rounded", !0)
    },
    /** Number of shapes to display */
    count: { type: Number, default: 1 },
    /**
     * Size of skeleton
     * @values small, medium, large
     */
    size: { type: String, default: void 0 },
    /**
     * Skeleton position in relation to the element
     * @values left, centered, right
     */
    position: {
      type: String,
      default: "left",
      validator: (e) => ["left", "centered", "right"].indexOf(e) > -1
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the skeleton animation */
    animationClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the skeleton position */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the skeleton item */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the skeleton item rounded */
    itemRoundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the skeleton size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  setup(e) {
    const l = e, a = n(() => ({
      height: St(l.height),
      width: St(l.width),
      borderRadius: l.circle ? "50%" : null
    })), t = h(
      ["rootClass", "o-sklt"],
      [
        "positionClass",
        "o-sklt--",
        n(() => l.position),
        n(() => !!l.position)
      ]
    ), o = h(
      ["itemClass", "o-sklt__item"],
      [
        "itemRoundedClass",
        "o-sklt__item--rounded",
        null,
        n(() => l.rounded)
      ],
      [
        "animationClass",
        "o-sklt__item--animated",
        null,
        n(() => l.animated)
      ],
      [
        "sizeClass",
        "o-sklt__item--",
        n(() => l.size),
        n(() => !!l.size)
      ]
    );
    return (i, u) => e.active ? (f(), V("div", {
      key: 0,
      "data-oruga": "skeleton",
      class: R(s(t))
    }, [
      (f(!0), V(he, null, xe(e.count, (d) => (f(), V("div", {
        key: d,
        class: R(s(o)),
        style: _e(a.value)
      }, null, 6))), 128))
    ], 2)) : J("", !0);
  }
}), Mo = {
  install(e) {
    Ae(e, Po);
  }
}, ll = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OSidebar",
  configField: "sidebar",
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether siedbar is active or not, use v-model:active to make it two-way binding. */
    active: { type: Boolean, default: !1 },
    /**
     * Color of the sidebar
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("sidebar.variant")
    },
    /** Show an overlay like modal */
    overlay: { type: Boolean, default: r("sidebar.overlay", !1) },
    /** Display the Sidebear inline */
    inline: { type: Boolean, default: !1 },
    /**
     * Sidebar position
     * @values top, right, bottom, left
     */
    position: {
      type: String,
      default: () => r("sidebar.position", "left")
    },
    /** Show sidebar in fullheight */
    fullheight: {
      type: Boolean,
      default: r("sidebar.fullheight", !1)
    },
    /** Show sidebar in fullwidth */
    fullwidth: {
      type: Boolean,
      default: r("sidebar.fullwidth", !1)
    },
    /** Show a small sidebar */
    reduce: { type: Boolean, default: r("sidebar.reduce", !1) },
    /**
     * Custom layout on mobile
     * @values fullwidth, reduced, hidden
     */
    mobile: {
      type: String,
      default: r("sidebar.mobile"),
      validator: (e) => ["fullwidth", "reduced", "hidden"].indexOf(e) >= 0
    },
    /** Expand sidebar on hover when reduced or mobile is reduce */
    expandOnHover: {
      type: Boolean,
      default: r("sidebar.expandOnHover", !1)
    },
    /** Custom animation (transition name) */
    animation: {
      type: String,
      default: () => r("sidebar.animation")
    },
    /**
     * Is Sidebar cancleable by pressing escape or clicking outside.
     * @values escape, outside, true, false
     */
    cancelable: {
      type: [Array, Boolean],
      default: () => r("sidebar.cancelable", ["escape", "outside"])
    },
    /** Callback function to call after user canceled (pressed escape / clicked outside) */
    onCancel: { type: Function, default: () => {
    } },
    /** Callback function to call after close (programmatically close or user canceled) */
    onClose: { type: Function, default: () => {
    } },
    /**
     * Use `clip` to remove the body scrollbar, `keep` to have a non scrollable scrollbar to avoid shifting background,
     * but will set body to position fixed, might break some layouts.
     * @values keep, clip
     */
    scroll: {
      type: String,
      default: () => r("sidebar.scroll", "clip"),
      validator: (e) => ["clip", "keep"].indexOf(e) >= 0
    },
    /** Destroy sidebar on hide */
    destroyOnHide: {
      type: Boolean,
      default: () => r("sidebar.destroyOnHide", !1)
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => r("sidebar.mobileBreakpoint")
    },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => r("sidebar.teleport", !1)
    },
    /**
     * Component to be injected, used to open a component sidebar programmatically.
     * Close sidebar within the component by emitting a 'close' event — emits('close')
     */
    component: {
      type: [Object, Function],
      default: void 0
    },
    /** Props to be binded to the injected component. */
    props: { type: Object, default: void 0 },
    /** Events to be binded to the injected component. */
    events: { type: Object, default: () => ({}) },
    /** DOM element where the sidebar component will be created on (for programmatic usage). */
    container: {
      type: [Object, String],
      default: () => r("sidebar.container", "body")
    },
    /**
     * This is used internally for programmatic usage.
     * @ignore
     */
    programmatic: {
      type: Object,
      default: void 0
    },
    /**
     * This is used internally for programmatic usage.
     * @ignore
     */
    promise: { type: Promise, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of sidebar component when its active */
    activeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of sidebar when teleported */
    teleportClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar overlay */
    overlayClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar content */
    contentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar position */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar when is fullheight */
    fullheightClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar when is fullwidth */
    fullwidthClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar when its inlined */
    inlineClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar when reduced */
    reduceClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar when expanded on hover */
    expandOnHoverClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of sidebar component when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the body when sidebar clipped */
    crollClipClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the body when sidebar is not clipped */
    noScrollClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar content when sidebar is hidden */
    hiddenClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sidebar content when sidebar is visible */
    visibleClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:active", "close"],
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = z(), u = z(), { isActive: d, close: b, cancel: c } = Jt(
      i,
      t,
      o,
      {
        destroyOnHide: t.destroyOnHide,
        cancelOptions: r("sidebar.cancelable", ["escape", "outside"])
      }
    ), { isMobile: v } = dt(t.mobileBreakpoint), m = z(null), S = z(!t.active);
    ce(d, (G) => {
      t.overlay && w(), G ? H() : p();
    });
    const B = n(
      () => typeof t.teleport == "boolean" ? { to: "body", disabled: !t.teleport } : { to: t.teleport, disabled: !1 }
    ), k = n(() => {
      if (t.animation)
        return t.animation;
      const G = t.position === "top" || t.position === "bottom";
      return (t.position === "right" ? !d.value : d.value) ? G ? "slide-down" : "slide-next" : G ? "slide-up" : "slide-prev";
    }), g = n(
      () => t.mobile === "hidden" && v.value
    );
    st(() => {
      t.active && H();
    }), It(() => {
      if (p(), Be && t.overlay) {
        const G = m.value ? m.value : document.documentElement.scrollTop;
        U.value && (document.body.classList.remove(...U.value), document.documentElement.classList.remove(...U.value)), document.documentElement.scrollTop = G, document.body.style.top = null;
      }
    });
    let O = null;
    function H() {
      Be && !t.overlay && (O = fa(u, I));
    }
    function p() {
      O !== null && O();
    }
    function I(G) {
      t.inline || !d.value || S.value || ((t.overlay || !G.composedPath().includes(u.value)) && G.preventDefault(), c("outside"));
    }
    function w() {
      var G;
      if (Be) {
        if (t.scroll === "clip") {
          (G = U.value) != null && G.length && (d.value ? document.documentElement.classList.add(...U.value) : document.documentElement.classList.remove(...U.value));
          return;
        }
        if (m.value = m.value ? m.value : document.documentElement.scrollTop, U.value && (d.value ? document.body.classList.add(...U.value) : document.body.classList.remove(...U.value)), d.value) {
          document.body.style.top = `-${m.value}px`;
          return;
        }
        document.documentElement.scrollTop = m.value, document.body.style.top = null, m.value = null;
      }
    }
    function L() {
      S.value = !1;
    }
    function N() {
      S.value = !0;
    }
    const W = h(
      ["rootClass", "o-side"],
      ["mobileClass", "o-side--mobile", null, v],
      ["activeClass", "o-side--active", null, d],
      [
        "teleportClass",
        "o-side--teleport",
        null,
        n(() => !!t.teleport)
      ],
      ["inlineClass", "o-side--inline", null, n(() => t.inline)]
    ), Q = h(["overlayClass", "o-side__overlay"]), P = h(
      ["contentClass", "o-side__content"],
      [
        "variantClass",
        "o-side__content--",
        n(() => t.variant),
        n(() => !!t.variant)
      ],
      [
        "positionClass",
        "o-side__content--",
        n(() => t.position),
        n(() => !!t.position)
      ],
      [
        "fullheightClass",
        "o-side__content--fullheight",
        null,
        n(() => t.fullheight)
      ],
      [
        "fullwidthClass",
        "o-side__content--fullwidth",
        null,
        n(
          () => t.fullwidth || t.mobile === "fullwidth" && v.value
        )
      ],
      [
        "reduceClass",
        "o-side__content--reduced",
        null,
        n(
          () => t.reduce || t.mobile === "reduced" && v.value
        )
      ],
      [
        "expandOnHoverClass",
        "o-side__content--reduced-expand",
        null,
        n(
          () => t.expandOnHover && (!v.value || t.mobile !== "fullwidth")
        )
      ],
      ["visibleClass", "o-side__content--visible", null, d],
      [
        "hiddenClass",
        "o-side__content--hidden",
        null,
        n(() => !d.value)
      ]
    ), y = h(["scrollClipClass", "o-clipped"]), D = h(["noScrollClass", "o-noscroll"]), U = n(
      () => We(
        t.scroll === "clip" ? y.value : D.value
      )
    );
    return U.value, l({ close: b, promise: t.promise }), (G, E) => (f(), ne(ua, {
      to: B.value.to,
      disabled: B.value.disabled
    }, [
      $e(ae("div", ye({
        ref_key: "rootRef",
        ref: i
      }, G.$attrs, {
        class: s(W),
        "data-oruga": "sidebar"
      }), [
        e.overlay && s(d) ? (f(), V("div", {
          key: 0,
          class: R(s(Q)),
          tabindex: -1,
          "aria-hidden": "true",
          onClick: E[0] || (E[0] = (C) => I(C))
        }, null, 2)) : J("", !0),
        me(et, {
          name: k.value,
          onAfterEnter: L,
          onBeforeLeave: N
        }, {
          default: se(() => [
            $e(ae("div", {
              ref_key: "sidebarContent",
              ref: u,
              class: R(s(P))
            }, [
              _(G.$slots, "default", { close: s(b) }, () => [
                e.component ? (f(), ne(qe(e.component), ye({ key: 0 }, G.$props.props, ca(G.$props.events), { onClose: s(b) }), null, 16, ["onClose"])) : J("", !0)
              ])
            ], 2), [
              [He, s(d)]
            ])
          ]),
          _: 3
        }, 8, ["name"])
      ], 16), [
        [He, !g.value]
      ])
    ], 8, ["to", "disabled"]));
  }
}), Ma = new Qt(), Vo = {
  open(e) {
    const a = mt({
      programmatic: { instances: Ma },
      active: !0
      // set the active state to true
    }, e);
    a.promise = new Promise((i, u) => {
      a.programmatic.resolve = i, a.programmatic.reject = u;
    });
    const t = zt, o = me(ll, a);
    return o.appContext = t._context, Xt(o, document.createElement("div")), o.component.exposed;
  },
  closeAll(...e) {
    Ma.walk((l) => l.exposed.close(...e));
  }
}, Ro = Vo, To = {
  install(e) {
    Ae(e, ll), Ht(e, "sidebar", Ro);
  }
}, nl = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OTooltip",
  configField: "tooltip",
  __name: "Tooltip",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Whether tooltip is active or not, use v-model:active to make it two-way binding */
    active: { type: Boolean, default: !1 },
    /** Tooltip text, unnecessary when content slot is used */
    label: { type: String, default: void 0 },
    /**
     * Color of the tooltip
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("tooltip.variant")
    },
    /**
     * Position of the Tooltip relative to the trigger
     * @values auto, top, bottom, left, right, top-right, top-left, bottom-left, bottom-right
     */
    position: {
      type: String,
      default: () => r("tooltip.position", "auto"),
      validator: (e) => [
        "auto",
        "top",
        "bottom",
        "left",
        "right",
        "top-right",
        "top-left",
        "bottom-left",
        "bottom-right"
      ].indexOf(e) > -1
    },
    /** Tooltip will be always active */
    always: { type: Boolean, default: !1 },
    /** Tooltip will be disabled */
    disabled: { type: Boolean, default: !1 },
    /** Tooltip default animation */
    animation: {
      type: String,
      default: () => r("tooltip.animation", "fade")
    },
    /** Tooltip will be multilined */
    multiline: { type: Boolean, default: !1 },
    /** Tooltip trigger tag name */
    triggerTag: {
      type: [String, Object, Function],
      default: () => r("tooltip.triggerTag", "div")
    },
    /**
     * Tooltip trigger events
     * @values hover, click, focus, contextmenu
     */
    triggers: {
      type: Array,
      default: () => r("tooltip.triggers", ["hover"]),
      validator: (e) => e.filter(
        (l) => ["click", "hover", "contextmenu", "focus"].indexOf(l) > -1
      ).length === e.length
    },
    /** Tooltip delay before it appears (number in ms) */
    delay: { type: Number, default: void 0 },
    /**
     * Tooltip auto close options (pressing escape, clicking the content or outside)
     * @values true, false, content, outside, escape
     */
    closeable: {
      type: [Array, Boolean],
      default: () => r("tooltip.closeable", ["escape", "outside", "content"])
    },
    /**
     * Append the component to another part of the DOM.
     * Set `true` to append the component to the body.
     * In addition, any CSS selector string or an actual DOM node can be used.
     */
    teleport: {
      type: [Boolean, String, Object],
      default: () => r("dropdown.teleport", !1)
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when the dropdown is teleported */
    teleportClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip content */
    contentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip trigger position */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip trigger */
    triggerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip content when is multiline */
    multilineClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip trigger when is always visible */
    alwaysClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip arrow */
    arrowClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip arrow position */
    arrowPositionClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:active", "close", "open"],
  setup(e, { emit: l }) {
    const a = e, t = l, o = Ue("active", a, t, {
      passive: !0
    });
    ce(o, (W) => {
      t(W ? "open" : "close");
    });
    const i = z(), u = z(a.position);
    ce(
      () => a.position,
      (W) => u.value = W
    );
    const d = z(), b = z(), c = z([]);
    ce(o, (W) => {
      W && Be ? setTimeout(() => {
        v.value.indexOf("outside") >= 0 && c.value.push(
          fa(d, m, [b])
        ), v.value.indexOf("escape") >= 0 && c.value.push(
          Ze("keyup", S, document, {
            immediate: !0
          })
        );
      }) : W || (c.value.forEach((Q) => Q()), c.value.length = 0);
    });
    const v = n(
      () => typeof a.closeable == "boolean" ? a.closeable ? ["escape", "outside", "content"] : [] : a.closeable
    );
    function m() {
      !o.value || a.always || v.value.indexOf("outside") < 0 || (o.value = !1);
    }
    function S(W) {
      if (o.value && (W.key === "Escape" || W.key === "Esc")) {
        if (v.value.indexOf("escape") < 0)
          return;
        o.value = !1;
      }
    }
    function B() {
      a.triggers.indexOf("click") < 0 || De(() => setTimeout(() => H()));
    }
    function k(W) {
      a.triggers.indexOf("contextmenu") < 0 || (W.preventDefault(), H());
    }
    function g() {
      a.triggers.indexOf("focus") < 0 || H();
    }
    function O() {
      a.triggers.indexOf("hover") < 0 || H();
    }
    function H() {
      a.disabled || (a.delay ? i.value = setTimeout(() => {
        o.value = !0, i.value = null;
      }, a.delay) : o.value = !0);
    }
    function p() {
      v.value.indexOf("content") < 0 || (o.value = !a.closeable, i.value && a.closeable && clearTimeout(i.value));
    }
    const I = h(
      ["rootClass", "o-tip"],
      [
        "teleportClass",
        "o-tip--teleport",
        null,
        n(() => !!a.teleport)
      ]
    ), w = h(["triggerClass", "o-tip__trigger"]), L = h(
      ["arrowClass", "o-tip__arrow"],
      [
        "arrowPositionClass",
        "o-tip__arrow--",
        u,
        n(() => !!u.value)
      ],
      [
        "variantArrowClass",
        "o-tip__arrow--",
        n(() => a.variant),
        n(() => !!a.variant)
      ]
    ), N = h(
      ["contentClass", "o-tip__content"],
      [
        "positionClass",
        "o-tip__content--",
        u,
        n(() => !!u.value)
      ],
      [
        "variantClass",
        "o-tip__content--",
        n(() => a.variant),
        n(() => !!a.variant)
      ],
      [
        "multilineClass",
        "o-tip__content--multiline",
        null,
        n(() => a.multiline)
      ],
      [
        "alwaysClass",
        "o-tip__content--always",
        null,
        n(() => a.always)
      ]
    );
    return (W, Q) => (f(), V("div", {
      class: R(s(I)),
      "data-oruga": "tooltip"
    }, [
      me(Xa, {
        position: u.value,
        "onUpdate:position": Q[0] || (Q[0] = (P) => u.value = P),
        teleport: e.teleport,
        class: R(s(I)),
        trigger: b.value,
        "default-position": "top",
        disabled: !s(o)
      }, {
        default: se(({ setContent: P }) => [
          me(et, { name: e.animation }, {
            default: se(() => [
              $e(ae("div", {
                ref: (y) => d.value = P(y),
                class: R(s(N))
              }, [
                ae("span", {
                  class: R(s(L))
                }, null, 2),
                _(W.$slots, "content", {}, () => [
                  Pe(ue(e.label), 1)
                ])
              ], 2), [
                [He, s(o) || e.always && !e.disabled]
              ])
            ]),
            _: 2
          }, 1032, ["name"])
        ]),
        _: 3
      }, 8, ["position", "teleport", "class", "trigger", "disabled"]),
      (f(), ne(qe(e.triggerTag), {
        ref_key: "triggerRef",
        ref: b,
        class: R(s(w)),
        "aria-haspopup": "true",
        onClick: B,
        onContextmenu: k,
        onMouseenter: O,
        onFocusCapture: g,
        onBlurCapture: p,
        onMouseleave: p
      }, {
        default: se(() => [
          _(W.$slots, "default", { active: s(o) })
        ]),
        _: 3
      }, 40, ["class"]))
    ], 2));
  }
}), Io = ["tabindex", "aria-label", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-disabled", "onKeydown"], zo = { key: 0 }, Va = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OSliderThumb",
  configField: "slider",
  inheritAttrs: !1,
  __name: "SliderThumb",
  props: {
    /** parent slider component props  */
    sliderProps: { type: Object, required: !0 },
    modelValue: { type: Number, required: !0 },
    sliderSize: { type: Function, required: !0 },
    thumbWrapperClasses: {
      type: Array,
      required: !0
    },
    thumbClasses: {
      type: Array,
      required: !0
    }
  },
  emits: ["update:modelValue", "change", "dragstart", "dragend"],
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = n(() => t.sliderProps), u = z(!1), d = z(!1), b = z(0), c = z(0), v = z(null), m = z(t.modelValue), S = n(() => i.value.tooltip), B = n(() => i.value.tooltipAlways), k = n(() => i.value.disabled), g = n(() => i.value.max), O = n(() => i.value.min), H = n(() => i.value.step), p = n(() => i.value.indicator), I = n(
      () => Array.isArray(i.value.ariaLabel) ? i.value.ariaLabel[0] : i.value.ariaLabel
    ), w = n(() => {
      const M = [O.value, g.value, H.value].map(($) => {
        const Y = ("" + $).split(".")[1];
        return Y ? Y.length : 0;
      });
      return Math.max(...M);
    }), L = n(
      () => i.value.tooltipVariant ? i.value.tooltipVariant : i.value.variant
    ), N = n(
      () => `${(t.modelValue - O.value) / (g.value - O.value) * 100}%`
    ), W = n(() => ({ left: N.value })), Q = n(() => typeof i.value.customFormatter < "u" ? i.value.customFormatter(t.modelValue) : i.value.format === "percent" ? new Intl.NumberFormat(i.value.locale, {
      style: "percent"
    }).format((t.modelValue - O.value) / (g.value - O.value)) : new Intl.NumberFormat(i.value.locale).format(t.modelValue));
    function P() {
      u.value = !0;
    }
    function y() {
      u.value = !1;
    }
    function D(M) {
      k.value || (M.preventDefault(), A(M), Be && (document.addEventListener("mousemove", x), document.addEventListener("touchmove", x), document.addEventListener("mouseup", j), document.addEventListener("touchend", j), document.addEventListener("contextmenu", j)));
    }
    function U() {
      k.value || t.modelValue === O.value || (v.value = parseFloat(N.value) - H.value / (g.value - O.value) * 100, le(v.value), o("change"));
    }
    function G() {
      k.value || t.modelValue === g.value || (v.value = parseFloat(N.value) + H.value / (g.value - O.value) * 100, le(v.value), o("change"));
    }
    function E() {
      k.value || t.modelValue === O.value || (v.value = 0, le(v.value), o("change"));
    }
    function C() {
      k.value || t.modelValue === g.value || (v.value = 100, le(v.value), o("change"));
    }
    function A(M) {
      d.value = !0, o("dragstart"), M.type === "touchstart" && (M.clientX = M.touches[0].clientX), b.value = M.clientX, c.value = parseFloat(N.value), v.value = c.value;
    }
    function x(M) {
      if (d.value) {
        M.type === "touchmove" && (M.clientX = M.touches[0].clientX);
        const $ = (M.clientX - b.value) / t.sliderSize() * 100;
        v.value = c.value + $, le(v.value);
      }
    }
    function j() {
      d.value = !1, o("dragend"), t.modelValue !== m.value && o("change"), le(v.value), Be && (document.removeEventListener("mousemove", x), document.removeEventListener("touchmove", x), document.removeEventListener("mouseup", j), document.removeEventListener("touchend", j), document.removeEventListener("contextmenu", j));
    }
    function le(M) {
      if (M === null || isNaN(M))
        return;
      M < 0 ? M = 0 : M > 100 && (M = 100);
      const $ = 100 / ((g.value - O.value) / H.value);
      let ie = Math.round(M / $) * $ / 100 * (g.value - O.value) + O.value;
      ie = parseFloat(ie.toFixed(w.value)), o("update:modelValue", ie), !d.value && ie !== m.value && (m.value = ie);
    }
    return l({ setPosition: le }), (M, $) => (f(), V("div", {
      class: R(e.thumbWrapperClasses),
      style: _e(W.value),
      "data-oruga": "slider-thumb"
    }, [
      me(nl, {
        label: Q.value,
        variant: L.value,
        disabled: k.value || !S.value,
        always: B.value || d.value || u.value
      }, {
        default: se(() => [
          ae("div", ye(M.$attrs, {
            class: e.thumbClasses,
            tabindex: k.value ? null : 0,
            role: "slider",
            "aria-label": I.value,
            "aria-valuenow": e.modelValue,
            "aria-valuemin": O.value,
            "aria-valuemax": g.value,
            "aria-disabled": k.value,
            "aria-orientation": "horizontal",
            onMousedown: D,
            onTouchstart: D,
            onFocus: P,
            onBlur: y,
            onKeydown: [
              Ce(ve(U, ["prevent"]), ["left"]),
              Ce(ve(G, ["prevent"]), ["right"]),
              Ce(ve(U, ["prevent"]), ["down"]),
              Ce(ve(G, ["prevent"]), ["up"]),
              Ce(ve(E, ["prevent"]), ["home"]),
              Ce(ve(C, ["prevent"]), ["end"])
            ]
          }), [
            p.value ? (f(), V("span", zo, ue(Q.value), 1)) : J("", !0)
          ], 16, Io)
        ]),
        _: 1
      }, 8, ["label", "variant", "disabled", "always"])
    ], 6));
  }
}), ol = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OSliderTick",
  configField: "slider",
  __name: "SliderTick",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Value of single tick */
    value: { type: Number, required: !0 },
    /** Tick label */
    label: { type: String, default: void 0 },
    tickClass: {
      type: [String, Function, Array],
      default: void 0
    },
    /** Class when slider tick is hidden */
    tickHiddenClass: {
      type: [String, Function, Array],
      default: void 0
    },
    /** Class of tick label */
    tickLabelClass: {
      type: [String, Function, Array],
      default: void 0
    }
  },
  setup(e) {
    const l = e, { parent: a } = yt(), t = n(() => {
      const b = (l.value - a.value.min) / (a.value.max - a.value.min) * 100;
      return b >= 0 && b <= 100 ? b : 0;
    }), o = n(
      () => l.value === a.value.min || l.value === a.value.max
    ), i = n(() => ({ left: t.value + "%" })), u = h(
      ["tickClass", "o-slide__tick"],
      ["tickHiddenClass", "o-slide__tick--hidden", null, o]
    ), d = h([
      "tickLabelClass",
      "o-slide__tick-label"
    ]);
    return (b, c) => (f(), V("div", {
      class: R(s(u)),
      style: _e(i.value),
      "data-oruga": "slider-tick"
    }, [
      b.$slots.default ? (f(), V("span", {
        key: 0,
        class: R(s(d))
      }, [
        _(b.$slots, "default", {}, () => [
          Pe(ue(e.label), 1)
        ])
      ], 2)) : J("", !0)
    ], 6));
  }
}), Ho = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OSlider",
  configField: "slider",
  __name: "Slider",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: {
      type: [Number, Array],
      default: 0
    },
    /** Minimum value */
    min: { type: Number, default: 0 },
    /** Maximum  value */
    max: { type: Number, default: 100 },
    /** Step interval of ticks */
    step: { type: Number, default: 1 },
    /**
     * Color of the slider
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("slider.variant")
    },
    /**
     * Vertical size of slider
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("slider.size")
    },
    /** Show tick marks */
    ticks: { type: Boolean, default: !1 },
    /** Show tooltip when thumb is being dragged */
    tooltip: {
      type: Boolean,
      default: () => r("slider.tooltip", !0)
    },
    /**
     * Color of the tooltip
     * @values primary, info, success, warning, danger, and any other custom color
     */
    tooltipVariant: {
      type: String,
      default: () => r("slider.tooltipVariant")
    },
    /** Tooltip displays always */
    tooltipAlways: { type: Boolean, default: !1 },
    /** Rounded thumb */
    rounded: {
      type: Boolean,
      default: () => r("slider.rounded", !1)
    },
    /** Slider will be disabled */
    disabled: { type: Boolean, default: !1 },
    /** Update v-model only when dragging is finished */
    lazy: { type: Boolean, default: !1 },
    /** Function to format the tooltip label for display */
    customFormatter: { type: Function, default: void 0 },
    /** Increases slider size on focus */
    biggerSliderFocus: { type: Boolean, default: !1 },
    /** Show indicators */
    indicator: { type: Boolean, default: !1 },
    /**
     * Define v-model format
     * @values row, percent
     */
    format: {
      type: String,
      default: () => r("slider.format", "raw"),
      validator: (e) => ["raw", "percent"].indexOf(e) >= 0
    },
    /** Date format locale */
    locale: {
      type: [String, Array],
      default: () => r("locale")
    },
    /** Accessibility aria-label to to be passed to the slider thumb element. */
    ariaLabel: {
      type: [String, Array],
      default: () => r("slider.ariaLabel")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the vertical slider size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the slider track */
    trackClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the filled part of the slider */
    fillClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when the slider is rounded */
    thumbRoundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when the thumb gets dragged */
    thumbDraggingClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when slider is disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the thumb wrapper */
    thumbWrapperClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the thumb */
    thumbClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the slider variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of slider tick */
    tickClass: {
      type: [String, Function, Array],
      default: void 0
    },
    /** Class when slider tick is hidden */
    tickHiddenClass: {
      type: [String, Function, Array],
      default: void 0
    },
    /** Class of tick label */
    tickLabelClass: {
      type: [String, Function, Array],
      default: void 0
    },
    /** Class to display on the wrapper element when the slider is dragged */
    thumbWrapperDraggingClass: {
      type: [String, Function, Array],
      default: void 0
    }
  },
  emits: ["update:modelValue", "change", "dragging", "dragstart", "dragend"],
  setup(e, { emit: l }) {
    const a = e, t = l;
    function o(A) {
      const x = S.value ? [O.value, H.value] : c.value || 0;
      t(A, x);
    }
    const i = n(() => ({
      max: a.max,
      min: a.min
    }));
    gt(void 0, { data: i });
    const u = z(), d = z(), b = z(), c = z(null), v = z(null), m = z(!1), S = z(!1), B = z(), k = z();
    L(a.modelValue), ce([c, v], () => N()), ce(
      [() => a.min, () => a.max, () => a.modelValue],
      () => L(a.modelValue)
    );
    const g = n(() => {
      if (!a.ticks || a.min > a.max || a.step === 0)
        return [];
      const A = [];
      for (let x = a.min + a.step; x < a.max; x = x + a.step)
        A.push(x);
      return A;
    }), O = n(() => Math.min(c.value, v.value)), H = n(() => Math.max(c.value, v.value)), p = n(
      () => S.value ? `${100 * (H.value - O.value) / (a.max - a.min)}%` : `${100 * (c.value - a.min) / (a.max - a.min)}%`
    ), I = n(
      () => S.value ? `${100 * (O.value - a.min) / (a.max - a.min)}%` : "0%"
    ), w = n(() => ({
      width: p.value,
      left: I.value
    }));
    function L(A) {
      if (!(a.min > a.max))
        if (Array.isArray(A)) {
          S.value = !0;
          const x = typeof A[0] != "number" || isNaN(A[0]) ? a.min : Math.min(Math.max(a.min, A[0]), a.max), j = typeof A[1] != "number" || isNaN(A[1]) ? a.max : Math.max(Math.min(a.max, A[1]), a.min);
          c.value = B.value ? j : x, v.value = B.value ? x : j;
        } else
          S.value = !1, c.value = isNaN(A) ? a.min : Math.min(a.max, Math.max(a.min, A)), v.value = null;
    }
    function N() {
      S.value && (B.value = c.value > v.value), (!a.lazy || !m.value) && o("update:modelValue"), m.value && o("dragging");
    }
    function W() {
      return u.value.getBoundingClientRect().width;
    }
    function Q(A) {
      if (a.disabled || k.value)
        return;
      const x = u.value.getBoundingClientRect().left, j = (A.clientX - x) / W() * 100, le = a.min + j * (a.max - a.min) / 100, M = Math.abs(le - c.value);
      if (S.value) {
        const $ = Math.abs(le - v.value);
        if (M <= $) {
          if (M < a.step / 2)
            return;
          d.value.setPosition(j);
        } else {
          if ($ < a.step / 2)
            return;
          b.value.setPosition(j);
        }
      } else {
        if (M < a.step / 2)
          return;
        d.value.setPosition(j);
      }
      o("change");
    }
    function P() {
      m.value = !0, t("dragstart");
    }
    function y() {
      k.value = !0, setTimeout(() => k.value = !1), m.value = !1, t("dragend"), a.lazy && o("update:modelValue");
    }
    const D = h(
      ["rootClass", "o-slide"],
      [
        "sizeClass",
        "o-slide--",
        n(() => a.size),
        n(() => !!a.size)
      ],
      [
        "disabledClass",
        "o-slide--disabled",
        null,
        n(() => a.disabled)
      ]
    ), U = h(["trackClass", "o-slide__track"]), G = h(
      ["fillClass", "o-slide__fill"],
      [
        "variantClass",
        "o-slide__fill--",
        n(() => a.variant),
        n(() => !!a.variant)
      ]
    ), E = h(
      ["thumbClass", "o-slide__thumb"],
      ["thumbDraggingClass", "o-slide__thumb--dragging", null, m],
      [
        "thumbRoundedClass",
        "o-slide__thumb--rounded",
        null,
        n(() => a.rounded)
      ]
    ), C = h(
      ["thumbWrapperClass", "o-slide__thumb-wrapper"],
      [
        "thumbWrapperDraggingClass",
        "o-slide__thumb-wrapper--dragging",
        null,
        m
      ]
    );
    return (A, x) => (f(), V("div", {
      class: R(s(D)),
      "data-oruga": "slider",
      onClick: Q
    }, [
      ae("div", {
        ref_key: "sliderRef",
        ref: u,
        class: R(s(U))
      }, [
        ae("div", {
          class: R(s(G)),
          style: _e(w.value)
        }, null, 6),
        e.ticks ? (f(!0), V(he, { key: 0 }, xe(g.value, (j, le) => (f(), ne(ol, {
          key: le,
          value: j,
          "tick-class": e.tickClass,
          "tick-hidden-class": e.tickHiddenClass,
          "tick-label-class": e.tickLabelClass
        }, null, 8, ["value", "tick-class", "tick-hidden-class", "tick-label-class"]))), 128)) : J("", !0),
        _(A.$slots, "default"),
        me(Va, {
          ref_key: "thumbStartRef",
          ref: d,
          modelValue: c.value,
          "onUpdate:modelValue": x[0] || (x[0] = (j) => c.value = j),
          "slider-props": a,
          "slider-size": W,
          "thumb-classes": s(E),
          "thumb-wrapper-classes": s(C),
          onChange: x[1] || (x[1] = (j) => o("change")),
          onDragstart: P,
          onDragend: y
        }, null, 8, ["modelValue", "slider-props", "thumb-classes", "thumb-wrapper-classes"]),
        S.value ? (f(), ne(Va, {
          key: 1,
          ref_key: "thumbEndRef",
          ref: b,
          modelValue: v.value,
          "onUpdate:modelValue": x[2] || (x[2] = (j) => v.value = j),
          "slider-props": a,
          "slider-size": W,
          "thumb-classes": s(E),
          "thumb-wrapper-classes": s(C),
          onChange: x[3] || (x[3] = (j) => o("change")),
          onDragstart: P,
          onDragend: y
        }, null, 8, ["modelValue", "slider-props", "thumb-classes", "thumb-wrapper-classes"])) : J("", !0)
      ], 2)
    ], 2));
  }
}), Lo = {
  install(e) {
    Ae(e, Ho), Ae(e, ol);
  }
}, No = ["aria-current"], Eo = { key: 1 }, jo = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OSteps",
  configField: "steps",
  __name: "Steps",
  props: /* @__PURE__ */ ze({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: [String, Number], default: void 0 },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("steps.variant")
    },
    /**
     * Tab size
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("steps.size")
    },
    /** Show tab in vertical layout */
    vertical: { type: Boolean, default: !1 },
    /**
     * Position of the tab
     * @values left, centered, right
     */
    position: {
      type: String,
      default: void 0,
      validator: (e) => ["left", "centered", "right"].indexOf(e) >= 0
    },
    /**
     * Icon pack to use for the navigation
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("steps.iconPack")
    },
    /** Icon to use for navigation button */
    iconPrev: {
      type: String,
      default: () => r("steps.iconPrev", "chevron-left")
    },
    /** Icon to use for navigation button */
    iconNext: {
      type: String,
      default: () => r("steps.iconNext", "chevron-right")
    },
    /**
     * Next and previous buttons below the component. You can use this property if you want to use your own custom navigation items.
     */
    hasNavigation: { type: Boolean, default: !0 },
    /** Step navigation is animated */
    animated: {
      type: Boolean,
      default: () => r("steps.animated", !0)
    },
    /**
     * Transition animation name
     * @values [next, prev], [right, left, down, up]
     */
    animation: {
      type: Array,
      default: () => r("tabs.animation", [
        "slide-next",
        "slide-prev",
        "slide-down",
        "slide-up"
      ]),
      validator: (e) => e.length === 2 || e.length === 4
    },
    /** Apply animation on the initial render */
    animateInitially: {
      type: Boolean,
      default: () => r("steps.animateInitially", !1)
    },
    /**
     * Position of the marker label
     * @values bottom, right, left
     */
    labelPosition: {
      type: String,
      default: () => r("steps.labelPosition", "bottom"),
      validator: (e) => ["bottom", "right", "left"].indexOf(e) > -1
    },
    /** Rounded step markers */
    rounded: { type: Boolean, default: !0 },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => r("steps.mobileBreakpoint")
    },
    /** Accessibility next button aria label */
    ariaNextLabel: {
      type: String,
      default: () => r("steps.ariaNextLabel")
    },
    /** Accessibility previous button aria label  */
    ariaPreviousLabel: {
      type: String,
      default: () => r("steps.ariaPreviousLabel")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Size of the steps */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tooltip trigger */
    verticalClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component when is vertical and its position changes */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the steps container */
    stepsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of Steps component when animation gets triggered */
    animatedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps markers trigger when are rounded */
    stepMarkerRoundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component dividers */
    stepDividerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component marker */
    stepMarkerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component content */
    stepContentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component content when transition is happening */
    stepContentTransitioningClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component navigation element */
    stepNavigationClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component link */
    stepLinkClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Steps component link when clickable */
    stepLinkClickableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Step component link label */
    stepLinkLabelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Step component link label when positioned */
    stepLinkLabelPositionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of steps component when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["update:modelValue", "change"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = e, t = l, { isMobile: o } = dt(a.mobileBreakpoint), i = z(), u = n(() => ({
      activeValue: c.value,
      vertical: a.vertical,
      animated: a.animated,
      animation: a.animation,
      animateInitially: a.animateInitially
    })), { sortedItems: d } = gt(i, {
      data: u
    }), b = n(
      () => d.value.map((E) => ({
        index: E.index,
        identifier: E.identifier,
        ...vt(E.data)
      }))
    ), c = Xe(e, "modelValue");
    ce(
      () => a.modelValue,
      (E) => {
        c.value !== E && w(E);
      }
    );
    const v = n(
      () => it(c.value) && b.value.find((E) => E.value === c.value) || b.value[0]
    ), m = n(
      () => b.value.some((E) => E.isTransitioning)
    ), S = n(() => !!k.value), B = n(() => !!g.value), k = n(() => {
      if (!v.value)
        return null;
      let E = null;
      for (let C = b.value.indexOf(v.value) - 1; C >= 0; C--)
        if (b.value[C].visible) {
          E = b.value[C];
          break;
        }
      return E;
    }), g = n(() => {
      let E = null, C = v.value ? b.value.indexOf(v.value) + 1 : 0;
      for (; C < b.value.length; C++)
        if (b.value[C].visible) {
          E = b.value[C];
          break;
        }
      return E;
    });
    function O(E) {
      var C;
      return E.clickable === void 0 ? E.index < ((C = v.value) == null ? void 0 : C.index) : E.clickable;
    }
    function H() {
      S.value && I(k.value);
    }
    function p() {
      B.value && I(g.value);
    }
    function I(E) {
      c.value !== E.value && w(E.value);
    }
    function w(E) {
      const C = v.value.value, A = v.value, x = b.value.find((j) => j.value === E) || b.value[0];
      A && x && (A.deactivate(x.index), x.activate(A.index)), De(() => {
        c.value = E, t("change", E, C);
      });
    }
    const L = h(
      ["rootClass", "o-steps__wrapper"],
      [
        "sizeClass",
        "o-steps--",
        n(() => a.size),
        n(() => !!a.size)
      ],
      [
        "verticalClass",
        "o-steps__wrapper-vertical",
        null,
        n(() => a.vertical)
      ],
      [
        "positionClass",
        "o-steps__wrapper-position-",
        n(() => a.position),
        n(() => a.position && a.vertical)
      ],
      ["mobileClass", "o-steps--mobile", null, o]
    ), N = h(
      ["stepsClass", "o-steps"],
      [
        "animatedClass",
        "o-steps--animated",
        null,
        n(() => a.animated)
      ]
    ), W = h([
      "stepDividerClass",
      "o-steps__divider"
    ]), Q = h(
      ["stepMarkerClass", "o-steps__marker"],
      [
        "stepMarkerRoundedClass",
        "o-steps__marker--rounded",
        null,
        n(() => a.rounded)
      ]
    ), P = h(
      ["stepContentClass", "o-steps__content"],
      [
        "stepContentTransitioningClass",
        "o-steps__content-transitioning",
        null,
        m
      ]
    ), y = h([
      "stepNavigationClass",
      "o-steps__navigation"
    ]), D = h([
      "stepLinkLabelClass",
      "o-steps__title"
    ]);
    function U(E) {
      return h(
        ["stepLinkClass", "o-steps__link"],
        [
          "stepLinkLabelPositionClass",
          "o-steps__link-label-",
          a.labelPosition,
          !!a.labelPosition
        ],
        [
          "stepLinkClickableClass",
          "o-steps__link-clickable",
          null,
          O(E)
        ]
      ).value;
    }
    function G(E) {
      const C = h(
        ["itemHeaderClass", "o-steps__nav-item"],
        [
          "itemHeaderVariantClass",
          "o-steps__nav-item--",
          E.variant || a.variant,
          !!E.variant || !!a.variant
        ],
        [
          "itemHeaderActiveClass",
          "o-steps__nav-item-active",
          null,
          E.value === v.value.value
        ],
        [
          "itemHeaderPreviousClass",
          "o-steps__nav-item-previous",
          null,
          v.value.index > E.index
        ]
      );
      return [{ [E.headerClass || ""]: !0 }, ...C.value];
    }
    return (E, C) => (f(), V("div", {
      class: R(s(L)),
      "data-oruga": "steps"
    }, [
      ae("ol", {
        class: R(s(N))
      }, [
        (f(!0), V(he, null, xe(b.value, (A, x) => $e((f(), V("li", {
          key: A.value,
          "aria-current": A.value === v.value.value ? "step" : void 0,
          class: R(G(A))
        }, [
          x > 0 ? (f(), V("span", {
            key: 0,
            class: R(s(W))
          }, null, 2)) : J("", !0),
          (f(), ne(qe(A.tag), {
            role: "button",
            tabindex: O(A) ? 0 : null,
            class: R(U(A)),
            onClick: (j) => O(A) && I(A),
            onKeydown: Ce((j) => O(A) && I(A), ["enter"])
          }, {
            default: se(() => [
              ae("div", {
                class: R(s(Q))
              }, [
                A.icon ? (f(), ne(Ve, {
                  key: 0,
                  icon: A.icon,
                  pack: A.iconPack,
                  size: e.size
                }, null, 8, ["icon", "pack", "size"])) : A.step ? (f(), V("span", Eo, ue(A.step), 1)) : J("", !0)
              ], 2),
              ae("div", {
                class: R(s(D))
              }, ue(A.label), 3)
            ]),
            _: 2
          }, 1064, ["tabindex", "class", "onClick", "onKeydown"]))
        ], 10, No)), [
          [He, A.visible]
        ])), 128))
      ], 2),
      ae("section", {
        class: R(s(P))
      }, [
        _(E.$slots, "default")
      ], 2),
      _(E.$slots, "navigation", {
        previous: { disabled: !S.value, action: H },
        next: { disabled: !B.value, action: p }
      }, () => [
        e.hasNavigation ? (f(), V("nav", {
          key: 0,
          class: R(s(y))
        }, [
          me(At, {
            role: "button",
            "icon-left": e.iconPrev,
            "icon-pack": e.iconPack,
            "icon-both": "",
            disabled: !S.value,
            "aria-label": e.ariaPreviousLabel,
            onClick: ve(H, ["prevent"])
          }, null, 8, ["icon-left", "icon-pack", "disabled", "aria-label"]),
          me(At, {
            role: "button",
            "icon-left": e.iconNext,
            "icon-pack": e.iconPack,
            "icon-both": "",
            disabled: !B.value,
            "aria-label": e.ariaNextLabel,
            onClick: ve(p, ["prevent"])
          }, null, 8, ["icon-left", "icon-pack", "disabled", "aria-label"])
        ], 2)) : J("", !0)
      ])
    ], 2));
  }
}), Wo = ["data-id", "tabindex", "role"], Yo = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OStepItem",
  configField: "steps",
  inheritAttrs: !1,
  __name: "StepItem",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Item value (it will be used as v-model of wrapper component) */
    value: { type: [String, Number], default: () => Ke() },
    /** Item label */
    label: { type: String, default: void 0 },
    /** Step marker content (when there is no icon) */
    step: { type: [String, Number], default: void 0 },
    /**
     * Default style for the step.
     * This will override parent type.
     * Could be used to set a completed step to "success" for example
     */
    variant: { type: String, default: void 0 },
    /**
     * Item can be used directly to navigate.
     * If undefined, previous steps are clickable while the others are not
     */
    clickable: { type: Boolean, default: void 0 },
    /** Show/hide item */
    visible: { type: Boolean, default: !0 },
    /** Icon on the left */
    icon: {
      type: String,
      default: () => r("steps.icon")
    },
    /** Icon pack */
    iconPack: {
      type: String,
      default: () => r("steps.iconPack")
    },
    /** Step item tag name */
    tag: {
      type: [String, Object, Function],
      default: () => r("steps.itemTag", "button")
    },
    /** Role attribute to be passed to the div wrapper for better accessibility */
    ariaRole: {
      type: String,
      default: () => r("steps.ariaRole", "tab")
    },
    /** Sets a class to the item header */
    headerClass: { type: String, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the content item */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the nav item */
    itemHeaderClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the nav item when active */
    itemHeaderActiveClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the nav item behind the active one */
    itemHeaderPreviousClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the nav item with variant (default value by parent steps component) */
    itemHeaderVariantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["activate", "deactivate"],
  setup(e, { emit: l }) {
    const a = e, t = l, o = Dt(), i = n(() => ({
      ...a,
      $slots: o,
      isTransitioning: v.value,
      activate: B,
      deactivate: k
    })), { parent: u, item: d } = yt({
      data: i
    }), b = z(), c = n(() => Tt(a.value, u.value.activeValue)), v = z(!1), m = n(() => {
      const p = u.value.vertical && u.value.animation.length === 4 ? 2 : 0;
      return u.value.animation[p];
    }), S = n(() => {
      const p = u.value.vertical && u.value.animation.length === 4 ? 3 : 1;
      return u.value.animation[p];
    });
    function B(p) {
      b.value = d.value.index < p ? m.value : S.value, t("activate");
    }
    function k(p) {
      b.value = p < d.value.index ? m.value : S.value, t("deactivate");
    }
    function g() {
      v.value = !0;
    }
    function O() {
      v.value = !0;
    }
    const H = h(["itemClass", "o-steps__item"]);
    return (p, I) => (f(), ne(et, {
      css: s(u).animated,
      name: b.value,
      appear: s(u).animateInitially,
      onAfterEnter: g,
      onBeforeLeave: O
    }, {
      default: se(() => [
        $e(ae("div", ye({ ref: "rootRef" }, p.$attrs, {
          class: s(H),
          "data-id": `steps-${s(d).identifier}`,
          "data-oruga": "steps-item",
          tabindex: c.value ? 0 : -1,
          role: e.ariaRole,
          "aria-roledescription": "item"
        }), [
          _(p.$slots, "default")
        ], 16, Wo), [
          [He, c.value && e.visible]
        ])
      ]),
      _: 3
    }, 8, ["css", "name", "appear"]));
  }
}), Ko = {
  install(e) {
    Ae(e, jo), Ae(e, Yo);
  }
}, Uo = ["aria-checked"], qo = ["disabled", "required", "name", "autocomplete", "value", "true-value", "false-value", "aria-labelledby"], Xo = ["id"], Go = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OSwitch",
  configField: "switch",
  inheritAttrs: !1,
  __name: "Switch",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: [String, Number, Boolean], default: void 0 },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("switch.variant")
    },
    /**
     * Color of the switch when is passive
     * @values primary, info, success, warning, danger, and any other custom color
     */
    passiveVariant: {
      type: String,
      default: () => r("switch.passiveVariant")
    },
    /**
     * Size of the control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("switch.size")
    },
    /** Input label, unnecessary when default slot is used */
    label: { type: String, default: void 0 },
    /** Same as native value */
    nativeValue: { type: [String, Number, Boolean], default: void 0 },
    /** Same as native disabled */
    disabled: { type: Boolean, default: !1 },
    /** Same as native required */
    required: { type: Boolean, default: !1 },
    /** Name attribute on native checkbox */
    name: { type: String, default: void 0 },
    /** Overrides the returned value when it's checked */
    trueValue: { type: [String, Number, Boolean], default: !0 },
    /** Overrides the returned value when it's not checked */
    falseValue: { type: [String, Number, Boolean], default: !1 },
    /** Rounded style */
    rounded: { type: Boolean, default: !0 },
    /** Label position */
    position: { type: String, default: "right" },
    /** Accessibility label to establish relationship between the switch and control label' */
    ariaLabelledby: { type: String, default: () => Ke() },
    /** Same as native autocomplete options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => r("switch.autocomplete", "off")
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => r("useHtml5Validation", !0)
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class when switch is disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the outer switch check */
    switchClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the outer switch check when checked */
    switchCheckedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the inner switch check */
    switchCheckClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the switch when rounded */
    roundedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the switch passive variant */
    passiveVariantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of switch label position */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Root class of the native input checkbox */
    inputClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the native input element when checked */
    inputCheckedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the switch label */
    labelClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the switch size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the switch variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "focus", "blur", "invalid"],
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = z(), { onBlur: u, onFocus: d, onInvalid: b, setFocus: c } = rt(
      i,
      o,
      t
    ), v = xt(t, o, {
      passive: !0
    }), m = n(
      () => v.value === t.trueValue || Array.isArray(v.value) && v.value.includes(t.nativeValue)
    );
    function S(p) {
      o("input", v.value, p);
    }
    const B = h(
      ["rootClass", "o-switch"],
      [
        "sizeClass",
        "o-switch--",
        n(() => t.size),
        n(() => !!t.size)
      ],
      [
        "disabledClass",
        "o-switch--disabled",
        null,
        n(() => t.disabled)
      ],
      [
        "variantClass",
        "o-switch--",
        n(() => t.variant),
        n(() => !!t.variant)
      ],
      [
        "positionClass",
        "o-switch--",
        n(() => t.position),
        n(() => !!t.position)
      ],
      [
        "passiveVariantClass",
        "o-switch--",
        n(() => t.passiveVariant + "-passive"),
        n(() => !!t.passiveVariant)
      ]
    ), k = h(
      ["inputClass", "o-switch__input"],
      ["inputCheckedClass", "o-switch__input--checked", null, m]
    ), g = h(
      ["switchClass", "o-switch__check"],
      ["switchCheckedClass", "o-switch__check--checked", null, m],
      ["roundedClass", "o-switch--rounded", null, n(() => t.rounded)]
    ), O = h(
      ["switchCheckClass", "o-switch__check-switch"],
      ["roundedClass", "o-switch--rounded", null, n(() => t.rounded)]
    ), H = h(["labelClass", "o-switch__label"]);
    return l({ focus: c }), (p, I) => (f(), V("label", {
      ref: "label",
      class: R(s(B)),
      "data-oruga": "switch",
      role: "switch",
      "aria-checked": m.value,
      onClick: I[5] || (I[5] = //@ts-ignore
      (...w) => s(c) && s(c)(...w)),
      onKeydown: I[6] || (I[6] = Ce(ve(
        //@ts-ignore
        (...w) => s(c) && s(c)(...w),
        ["prevent"]
      ), ["enter"]))
    }, [
      $e(ae("input", ye(p.$attrs, {
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": I[0] || (I[0] = (w) => lt(v) ? v.value = w : null),
        type: "checkbox",
        role: "switch",
        "data-oruga-input": "switch",
        class: s(k),
        disabled: e.disabled,
        required: e.required,
        name: e.name,
        autocomplete: e.autocomplete,
        value: e.nativeValue,
        "true-value": e.trueValue,
        "false-value": e.falseValue,
        "aria-labelledby": e.ariaLabelledby,
        onClick: I[1] || (I[1] = ve(() => {
        }, ["stop"])),
        onBlur: I[2] || (I[2] = //@ts-ignore
        (...w) => s(u) && s(u)(...w)),
        onFocus: I[3] || (I[3] = //@ts-ignore
        (...w) => s(d) && s(d)(...w)),
        onInvalid: I[4] || (I[4] = //@ts-ignore
        (...w) => s(b) && s(b)(...w)),
        onInput: S
      }), null, 16, qo), [
        [Na, s(v)]
      ]),
      ae("span", {
        class: R(s(g))
      }, [
        ae("span", {
          class: R(s(O))
        }, null, 2)
      ], 2),
      e.label || p.$slots.default ? (f(), V("span", {
        key: 0,
        id: e.ariaLabelledby,
        class: R(s(H))
      }, [
        _(p.$slots, "default", {}, () => [
          Pe(ue(e.label), 1)
        ])
      ], 10, Xo)) : J("", !0)
    ], 42, Uo));
  }
}), Jo = {
  install(e) {
    Ae(e, Go);
  }
}, Rt = ge({
  name: "OSlotComponent",
  props: {
    /** Component to be get the slot from */
    component: { type: Object, required: !0 },
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
    const e = this.component.$slots[this.name] ? this.component.$slots[this.name](this.props) : {};
    return na(this.tag, {}, e);
  }
}), Qo = ["value"], Zo = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OTableMobileSort",
  configField: "table",
  __name: "TableMobileSort",
  props: {
    currentSortColumn: {
      type: Object,
      default: void 0
    },
    columns: {
      type: Array,
      default: void 0
    },
    placeholder: { type: String, default: void 0 },
    iconPack: { type: String, default: void 0 },
    sortIcon: { type: String, default: "arrow-up" },
    sortIconSize: { type: String, default: "small" },
    isAsc: { type: Boolean, default: !1 },
    mobileSortClasses: { type: Array, required: !0 }
  },
  emits: ["sort"],
  setup(e, { emit: l }) {
    const a = e, t = l, o = z(
      Me(a.currentSortColumn, "identifier")
    ), i = n(
      () => !a.columns || !a.columns.some(
        (c) => Me(c, "identifier") === o.value
      )
    ), u = n(
      () => a.columns ? a.columns.filter((c) => c.sortable) : []
    ), d = n(
      () => Me(a.currentSortColumn, "identifier") === o.value
    );
    ce(o, (c) => {
      a.currentSortColumn.identifier !== c && b();
    }), ce(
      () => a.currentSortColumn,
      (c) => {
        o.value = Me(c, "identifier");
      }
    );
    function b(c) {
      const v = u.value.filter(
        (m) => Me(m, "identifier") === o.value
      )[0];
      t("sort", v, c);
    }
    return (c, v) => (f(), V("div", {
      class: R(e.mobileSortClasses)
    }, [
      me(Ua, null, {
        default: se(() => [
          me(pt, {
            modelValue: o.value,
            "onUpdate:modelValue": v[0] || (v[0] = (m) => o.value = m),
            expanded: ""
          }, {
            default: se(() => [
              e.placeholder ? $e((f(), V("option", {
                key: 0,
                value: {},
                selected: "",
                disabled: "",
                hidden: ""
              }, ue(e.placeholder), 513)), [
                [He, i.value]
              ]) : J("", !0),
              (f(!0), V(he, null, xe(u.value, (m, S) => (f(), V("option", {
                key: S,
                value: m.identifier
              }, ue(m.label), 9, Qo))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"]),
          me(At, {
            onClick: v[1] || (v[1] = (m) => b(m))
          }, {
            default: se(() => [
              $e(me(Ve, {
                icon: e.sortIcon,
                pack: e.iconPack,
                size: e.sortIconSize,
                both: "",
                rotation: e.isAsc ? 0 : 180
              }, null, 8, ["icon", "pack", "size", "rotation"]), [
                [He, d.value]
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 2));
  }
}), _o = ["data-id"], il = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OTableColumn",
  configField: "table",
  __name: "TableColumn",
  props: {
    /** Define the column label */
    label: { type: String, default: void 0 },
    /** Define an object property key if data is an object */
    field: { type: String, default: void 0 },
    /** Define a column sub heading  */
    subheading: { type: String, default: void 0 },
    /** Add addtional meta information for the column for custom purpose*/
    meta: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: void 0
    },
    /** Column fixed width */
    width: { type: [Number, String], default: void 0 },
    /** Define column value as number */
    numeric: { type: Boolean, default: !1 },
    /**
     * Position of the column content
     * @values left, centered, right
     */
    position: {
      type: String,
      default: void 0,
      validator: (e) => ["left", "centered", "right"].indexOf(e) > -1
    },
    /** Enable an additional searchbar below the column header */
    searchable: { type: Boolean, default: !1 },
    /** Enable column sortability */
    sortable: { type: Boolean, default: !1 },
    /** Define whether the column is visible or not */
    visible: { type: Boolean, default: !0 },
    /** Define a custom sort function */
    customSort: {
      type: Function,
      default: void 0
    },
    /** Define a custom funtion for the filter search */
    customSearch: {
      type: Function,
      default: void 0
    },
    /** Whether the column is sticky or not */
    sticky: { type: Boolean, default: !1 },
    /** Make header selectable */
    headerSelectable: { type: Boolean, default: !1 },
    /**
     * Adds native attributes to th
     * @deprecated will be moved to table component in v0.9
     */
    thAttrs: {
      type: Function,
      default: () => ({})
    },
    /**
     * Adds native attributes to td
     * @deprecated will be moved to table component in v0.9
     */
    tdAttrs: {
      type: Function,
      default: () => ({})
    }
  },
  setup(e) {
    const l = e, a = n(() => ({
      width: St(l.width)
    })), t = n(
      () => !l.headerSelectable && l.sortable
    ), o = wt(), i = n(() => ({
      ...Qe(l),
      // TODO: remove toRaw when tdAttrs/thAttrs are moved to table component
      label: l.label,
      field: l.field,
      subheading: l.subheading,
      meta: l.meta,
      width: l.width,
      numeric: l.numeric,
      position: l.position,
      searchable: l.searchable,
      sortable: l.sortable,
      visible: l.visible,
      customSort: l.customSort,
      customSearch: l.customSearch,
      sticky: l.sticky,
      headerSelectable: l.headerSelectable,
      $el: o.proxy,
      $slots: o.slots,
      style: a.value,
      isHeaderUnselectable: t.value
    })), { item: u } = yt({ data: i });
    return (d, b) => (f(), V("span", {
      "data-id": s(u).identifier,
      "data-oruga": "table-column"
    }, [
      Pe(ue(e.label) + " ", 1),
      J("", !0)
    ], 8, _o));
  }
}), Ra = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OTablePagination",
  configField: "table",
  __name: "TablePagination",
  props: {
    current: { type: Number, default: void 0 },
    paginated: { type: Boolean, default: !1 },
    rootClass: {
      type: [String, Array, Object],
      default: void 0
    }
  },
  emits: ["update:current", "change"],
  setup(e, { emit: l }) {
    const a = e, t = l, o = Ue("current", a, t);
    function i(u) {
      const d = u > 0 ? u : 1;
      o.value = d, t("change", d);
    }
    return (u, d) => (f(), V("div", {
      class: R(e.rootClass)
    }, [
      ae("div", null, [
        _(u.$slots, "default")
      ]),
      ae("div", null, [
        e.paginated ? (f(), ne(al, ye({ key: 0 }, u.$attrs, {
          current: s(o),
          onChange: i
        }), null, 16, ["current"])) : J("", !0)
      ])
    ], 2));
  }
}), ei = ["tabindex"], ti = { key: 0 }, ai = { key: 1 }, li = ["draggable", "onClick", "onDragstart", "onDragend", "onDrop", "onDragover", "onDragleave"], ni = { key: 1 }, oi = { key: 0 }, ii = { key: 1 }, si = { key: 2 }, ri = { key: 1 }, ui = { key: 1 }, di = { key: 2 }, ci = ["draggable", "onClick", "onDblclick", "onMouseenter", "onMouseleave", "onContextmenu", "onDragstart", "onDragend", "onDrop", "onDragover", "onDragleave"], fi = ["colspan"], vi = { key: 0 }, pi = ["colspan"], mi = { key: 2 }, yi = ["colspan"], gi = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OTable",
  configField: "table",
  inheritAttrs: !1,
  __name: "Table",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Table data */
    data: { type: Array, default: () => [] },
    /** Table columns */
    columns: { type: Array, default: () => [] },
    /** Border to all cells */
    bordered: {
      type: Boolean,
      default: () => r("table.bordered", !1)
    },
    /** Whether table is striped */
    striped: {
      type: Boolean,
      default: () => r("table.striped", !1)
    },
    /** Makes the cells narrower */
    narrowed: {
      type: Boolean,
      default: () => r("table.narrowed", !1)
    },
    /** Rows are highlighted when hovering */
    hoverable: {
      type: Boolean,
      default: () => r("table.hoverable", !1)
    },
    /** Enable loading state */
    loading: { type: Boolean, default: !1 },
    /** Allow row details  */
    detailed: { type: Boolean, default: !1 },
    /** Rows can be checked (multiple) */
    checkable: { type: Boolean, default: !1 },
    /** Show check/uncheck all checkbox in table header when checkable */
    headerCheckable: { type: Boolean, default: !0 },
    /**
     * Position of the checkbox when checkable
     * @values left, right
     */
    checkboxPosition: {
      type: String,
      default: () => r("table.checkboxPosition", "left"),
      validator: (e) => ["left", "right"].indexOf(e) >= 0
    },
    /**
     * Color of the checkbox when checkable
     * @values primary, info, success, warning, danger, and any other custom color
     */
    checkboxVariant: {
      type: String,
      default: () => r("table.checkboxVariant")
    },
    /** Set which row is selected, use v-model:selected to make it two-way binding */
    selected: { type: Object, default: void 0 },
    /** Custom method to verify if a row is selectable, works when is selected. */
    isRowSelectable: { type: Function, default: () => !0 },
    /** Table can be focused and user can navigate with keyboard arrows (require selected) and rows are highlighted when hovering */
    focusable: { type: Boolean, default: !1 },
    /** Custom method to verify if row is checked, works when is checkable. Useful for backend pagination */
    customIsChecked: {
      type: Function,
      default: void 0
    },
    /** Custom method to verify if a row is checkable, works when is checkable */
    isRowCheckable: {
      type: Function,
      default: (e) => (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        r("table.isRowCheckable", (l) => !0)(e)
      )
    },
    /** Set which rows are checked, use v-model:checkedRows to make it two-way binding */
    checkedRows: { type: Array, default: () => [] },
    /** Rows appears as cards on mobile (collapse rows) */
    mobileCards: {
      type: Boolean,
      default: () => r("table.mobileCards", !0)
    },
    /** Sets the default sort column and order — e.g. ['first_name', 'desc'] */
    defaultSort: {
      type: [String, Array],
      default: () => r("table.defaultSort")
    },
    /**
     * Sets the default sort column direction on the first click
     * @values asc, desc
     */
    defaultSortDirection: {
      type: String,
      default: () => r("table.defaultSortDirection", "asc")
    },
    /** Sets the header sorting icon */
    sortIcon: {
      type: String,
      default: () => r("table.sortIcon", "arrow-up")
    },
    /**
     * Sets the size of the sorting icon
     * @values small, medium, large
     */
    sortIconSize: {
      type: String,
      default: () => r("table.sortIconSize", "small")
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("table.iconPack")
    },
    /** Columns won't be sorted with Javascript, use with sort event to sort in your backend */
    backendSorting: {
      type: Boolean,
      default: () => r("table.backendSorting", !1)
    },
    /** Columns won't be filtered with Javascript, use with searchable prop to the columns to filter in your backend */
    backendFiltering: {
      type: Boolean,
      default: () => r("table.backendFiltering", !1)
    },
    /** Add a class to row based on the return */
    rowClass: {
      type: Function,
      default: (e, l) => (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        r("table.rowClass", (a, t) => "")(e, l)
      )
    },
    /** Allow pre-defined opened details. Ideal to open details via vue-router. (A unique key is required; check detail-key prop) */
    openedDetailed: { type: Array, default: () => [] },
    /** Controls the visibility of the trigger that toggles the detailed rows. */
    hasDetailedVisible: {
      type: Function,
      default: (e) => (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        r("table.hasDetailedVisible", (l) => !0)(e)
      )
    },
    /** Use a unique key of your data Object when use detailed or opened detailed. (id recommended) */
    detailKey: {
      type: String,
      default: () => r("table.detailKey")
    },
    /** Allow chevron icon and column to be visible */
    showDetailIcon: {
      type: Boolean,
      default: () => r("table.showDetailIcon", !0)
    },
    /** Icon name of detail action */
    detailIcon: {
      type: String,
      default: () => r("table.detailIcon", "chevron-right")
    },
    /** Custom style on details */
    customDetailRow: { type: Boolean, default: !1 },
    /* Transition name to use when toggling row details. */
    detailTransition: {
      type: String,
      default: () => r("table.detailTransition", "slide")
    },
    /** Text when nothing is selected */
    mobileSortPlaceholder: {
      type: String,
      default: () => r("table.mobileSortPlaceholder")
    },
    /** Use a unique key of your data Object for each row. Useful if your data prop has dynamic indices. (id recommended) */
    customRowKey: {
      type: String,
      default: () => r("table.customRowKey")
    },
    /** Allows rows to be draggable */
    draggable: { type: Boolean, default: !1 },
    /** Allows columns to be draggable */
    draggableColumn: { type: Boolean, default: !1 },
    /** Add a horizontal scrollbar when table is too wide */
    scrollable: { type: Boolean, default: void 0 },
    /** Show a sticky table header */
    stickyHeader: { type: Boolean, default: !1 },
    /** Table fixed height */
    height: { type: [Number, String], default: void 0 },
    /** Add a native event to filter */
    filtersEvent: { type: String, default: "" },
    /** Filtering debounce time (in milliseconds) */
    debounceSearch: { type: Number, default: void 0 },
    /** Show header */
    showHeader: {
      type: Boolean,
      default: () => r("table.showHeader", !0)
    },
    /** Make the checkbox column sticky when checkable */
    stickyCheckbox: { type: Boolean, default: !1 },
    /** Adds pagination to the table */
    paginated: {
      type: Boolean,
      default: () => r("table.paginated", !1)
    },
    /** Rows won't be paginated with Javascript, use with page-change event to paginate in your backend */
    backendPagination: { type: Boolean, default: !1 },
    /** Total number of table data if backend-pagination is enabled */
    total: { type: Number, default: 0 },
    /** Current page of table data (if paginated), use v-model:currentPage to make it two-way binding */
    currentPage: { type: Number, default: 1 },
    /** How many rows per page (if paginated) */
    perPage: {
      type: [Number, String],
      default: () => r("table.perPage", 20)
    },
    /**
     * Pagination position (if paginated)
     * @values bottom, top, both
     */
    paginationPosition: {
      type: String,
      default: () => r("table.paginationPosition", "bottom"),
      validator: (e) => ["bottom", "top", "both"].indexOf(e) >= 0
    },
    /** Rounded pagination if paginated */
    paginationRounded: {
      type: Boolean,
      default: () => r("table.paginationRounded", !1)
    },
    /** Size of pagination if paginated */
    paginationSize: {
      type: String,
      default: () => r("table.paginationSize", "small")
    },
    /** Enable simple style pagination if paginated */
    paginationSimple: {
      type: Boolean,
      default: () => r("table.paginationSimple", !1)
    },
    /**
     * Pagination buttons order if paginated
     * @values centered, right, left
     */
    paginationOrder: {
      type: String,
      default: () => r("table.paginationOrder"),
      validator: (e) => ["centered", "right", "left"].indexOf(e) >= 0
    },
    /** Mobile breakpoint as max-width value */
    mobileBreakpoint: {
      type: String,
      default: () => r("table.mobileBreakpoint")
    },
    /** Accessibility label for the pagination next page button. */
    ariaNextLabel: {
      type: String,
      default: () => r("table.ariaNextLabel")
    },
    /** Accessibility label for the pagination previous page button. */
    ariaPreviousLabel: {
      type: String,
      default: () => r("table.ariaPreviousLabel")
    },
    /** Accessibility label for the pagination page button. */
    ariaPageLabel: {
      type: String,
      default: () => r("table.ariaPageLabel")
    },
    /** Accessibility label for the pagination current page button. */
    ariaCurrentLabel: {
      type: String,
      default: () => r("table.ariaCurrentLabel")
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table */
    tableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table wrapper */
    wrapperClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table footer */
    footerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table when it is empty */
    emptyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table row detail */
    detailedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table when is bordered */
    borderedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table when rows are striped */
    stripedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table when rows are narrowed */
    narrowedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table when is hoverable */
    hoverableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table wrapper when header is sticky */
    stickyHeaderClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table wrapper when its content is scrollable */
    scrollableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table row when selected */
    trSelectedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table row when checkable and checked */
    trCheckedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element */
    thClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element when component is positioned */
    thPositionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element when component is sticky" */
    thStickyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element when is checkable */
    thCheckboxClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element currently sorted */
    thCurrentSortClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sortable Table `th` element */
    thSortableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element that is unsortable */
    thUnselectableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table sort icon in the header */
    thSortIconClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` element of the detail column of triggers */
    thDetailedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `th` subheading element */
    thSubheadingClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `td` element */
    tdClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `td` element when component is positioned */
    tdPositionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `td` element when component is sticky */
    tdStickyClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `td` element when is checkable */
    tdCheckboxClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table `td` element that contains the chevron to trigger details */
    tdDetailedChevronClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the sortable form wrapper on mobile */
    mobileSortClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table pagination wrapper */
    paginationWrapperClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Table component when on mobile */
    mobileClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["update:currentPage", "page-change", "update:selected", "select", "check", "check-all", "update:checkedRows", "sort", "filters-change", "filters-event", "update:openedDetailed", "details-open", "details-close", "click", "dblclick", "contextmenu", "mouseenter", "mouseleave", "cell-click", "dragstart", "dragend", "drop", "dragleave", "dragover", "columndragstart", "columndragend", "columndrop", "columndragleave", "columndragover"],
  setup(e, { emit: l }) {
    const a = e, t = l, { isMobile: o } = dt(a.mobileBreakpoint), i = n(() => a.mobileCards && o.value), u = z(), d = z(), b = gt(d), c = n(
      () => b.sortedItems.value.map((F) => ({
        index: F.index,
        identifier: F.identifier,
        ...vt(F.data),
        thAttrsData: {},
        tdAttrsData: []
      }))
    ), v = n(() => {
      var F;
      return (F = a.data) != null && F.length ? a.data.map(
        (K) => !a.customRowKey && typeof K == "object" ? Object.assign({ __rowKey: Ke() }, K) : K
      ) : [...a.data];
    }), m = z(v.value), S = z(
      a.backendPagination ? a.total : v.value.length
    ), B = Ue("currentPage", a, t, {
      passive: !0
    });
    ce(
      () => v.value,
      (F) => {
        a.backendFiltering ? m.value = [...F] : m.value = F.filter((K) => E(K)), a.backendSorting || $(C.value, !0), a.backendPagination || (S.value = m.value.length);
      },
      { deep: !0 }
    ), ce(
      () => a.total,
      (F) => {
        a.backendPagination && (S.value = F);
      }
    );
    const k = n(() => ({
      height: St(a.height)
    })), g = n(() => {
      if (!a.paginated)
        return m.value;
      const F = B.value, K = Number(a.perPage);
      if (m.value.length <= K)
        return m.value;
      {
        const oe = (F - 1) * K, Ie = oe + K;
        return m.value.slice(oe, Ie);
      }
    }), O = n(() => c.value ? c.value.filter(
      (F) => F.visible || F.visible === void 0
    ) : []);
    ce([g, O], () => {
      if (O.value.length && g.value.length)
        for (let F = 0; F < O.value.length; F++) {
          const K = O.value[F];
          K.thAttrsData = typeof K.thAttrs == "function" ? K.thAttrs(K) : {}, K.tdAttrsData = g.value.map(
            (oe) => typeof K.tdAttrs == "function" ? K.tdAttrs(oe, K) : {}
          );
        }
    });
    const H = n(() => {
      let F = O.value.length;
      return F += a.checkable ? 1 : 0, F += a.detailed && a.showDetailIcon ? 1 : 0, F;
    }), p = n(
      () => c.value.some((F) => F.searchable)
    ), I = n(() => a.scrollable ? !0 : c.value ? c.value.some((F) => F.sticky) : !1), w = Dt(), L = n(() => w.subheading ? !0 : c.value.some((F) => !!F.subheading));
    function N() {
      if (w.footer) {
        const F = w.footer();
        if (F.length > 1)
          return !0;
        const K = F[0].tag;
        if (K !== "th" && K !== "td")
          return !1;
      }
      return !0;
    }
    function W(F, K) {
      if (!g.value.length)
        return;
      let oe = g.value.indexOf(a.selected) + F;
      oe = oe < 0 ? 0 : oe > g.value.length - 1 ? g.value.length - 1 : oe;
      const Ie = g.value[oe];
      if (a.isRowSelectable(Ie))
        Q(Ie, oe, K);
      else {
        let q = null;
        if (F > 0)
          for (let re = oe; re < g.value.length && q === null; re++)
            a.isRowSelectable(g.value[re]) && (q = re);
        else
          for (let re = oe; re >= 0 && q === null; re--)
            a.isRowSelectable(g.value[re]) && (q = re);
        q >= 0 && Q(g.value[q], oe, K);
      }
    }
    function Q(F, K, oe) {
      t("click", F, K, oe), a.selected !== F && a.isRowSelectable(F) && (t("select", F, a.selected), t("update:selected", F));
    }
    function P(F, K) {
      return K ? y(F) === y(K) : !1;
    }
    function y(F) {
      return a.customRowKey ? F[a.customRowKey] : typeof F == "object" ? F.__rowKey : F;
    }
    const D = z({});
    ce(
      D.value,
      (F) => {
        a.debounceSearch ? ia(() => G(F), a.debounceSearch) : G(F);
      },
      { deep: !0 }
    );
    function U(F) {
      t("filters-event", a.filtersEvent, D.value, F);
    }
    function G(F) {
      a.backendFiltering ? t("filters-change", F) : (m.value = a.data.filter((K) => E(K)), a.backendPagination || (S.value = m.value.length), a.backendSorting || Object.keys(C.value).length > 0 && Y(C.value));
    }
    function E(F) {
      for (const K in D.value) {
        if (!D.value[K])
          continue;
        const oe = D.value[K], Ie = c.value.filter((q) => q.field === K)[0];
        if (typeof (Ie == null ? void 0 : Ie.customSearch) == "function") {
          if (!Ie.customSearch(F, oe))
            return !1;
        } else {
          const q = Me(F, K);
          if (q == null)
            return !1;
          if (Number.isInteger(q)) {
            if (q !== Number(oe))
              return !1;
          } else {
            const re = new RegExp(Nl(oe), "i");
            if (Array.isArray(q)) {
              if (!q.some(
                (Fe) => re.test(Aa(Fe)) || re.test(Fe)
              ))
                return !1;
            } else if (!re.test(Aa(q)) && !re.test(q))
              return !1;
          }
        }
      }
      return !0;
    }
    const C = z(), A = z(!0);
    st(() => De(() => le()));
    const x = n(
      () => c.value.some((F) => F.sortable)
    );
    function j(F) {
      var K;
      return ((K = C.value) == null ? void 0 : K.identifier) === F.identifier;
    }
    function le() {
      if (c.value.length && !C.value)
        M();
      else if (c.value.length && C.value && Object.keys(C.value).length > 0) {
        for (let F = 0; F < c.value.length; F++)
          if (C.value.field === c.value[F].field) {
            C.value = c.value[F];
            break;
          }
      }
    }
    function M() {
      if (!a.defaultSort)
        return;
      let F = "", K = a.defaultSortDirection;
      Array.isArray(a.defaultSort) ? (F = a.defaultSort[0], a.defaultSort[1] && (K = a.defaultSort[1])) : F = a.defaultSort;
      const oe = c.value.filter(
        (Ie) => Ie.field === F
      )[0];
      oe && (A.value = K.toLowerCase() !== "desc", $(oe, !0));
    }
    function $(F, K = !1, oe) {
      !F || !F.sortable || (K || (A.value = j(F) ? !A.value : a.defaultSortDirection.toLowerCase() !== "desc"), C.value && t("sort", F, A.value ? "asc" : "desc", oe), a.backendSorting || Y(F), C.value = F);
    }
    function Y(F) {
      m.value = ie(
        m.value,
        F.field,
        F.customSort,
        A.value
      );
    }
    function ie(F, K, oe, Ie) {
      let q = [];
      return oe && typeof oe == "function" ? q = [...F].sort((re, be) => oe(re, be, Ie)) : q = [...F].sort((re, be) => {
        let Fe = Me(re, K), Ye = Me(be, K);
        return typeof Fe == "boolean" && typeof Ye == "boolean" ? Ie ? Fe > Ye ? 1 : -1 : Fe > Ye ? -1 : 1 : !Fe && Fe !== 0 ? 1 : !Ye && Ye !== 0 ? -1 : Fe === Ye ? 0 : (Fe = typeof Fe == "string" ? Fe.toUpperCase() : Fe, Ye = typeof Ye == "string" ? Ye.toUpperCase() : Ye, Ie ? Fe > Ye ? 1 : -1 : Fe > Ye ? -1 : 1);
      }), q;
    }
    const fe = z([...a.checkedRows]), Le = z(null);
    ce(
      () => a.checkedRows,
      (F) => {
        fe.value = [...F];
      },
      { deep: !0 }
    );
    const Re = n(() => {
      const F = g.value.filter(
        (oe) => a.isRowCheckable(oe)
      );
      return F.length === 0 ? !1 : !F.some(
        (oe) => ea(
          fe.value,
          oe,
          a.customIsChecked
        ) < 0
      );
    }), Se = n(() => g.value.filter(
      (K) => a.isRowCheckable(K)
    ).length === 0);
    function Te(F) {
      return ea(fe.value, F, a.customIsChecked) >= 0;
    }
    function tt(F) {
      const K = ea(fe.value, F, a.customIsChecked);
      K >= 0 && fe.value.splice(K, 1);
    }
    function Ge() {
      const F = Re.value;
      g.value.forEach((K) => {
        a.isRowCheckable(K) && tt(K), F || a.isRowCheckable(K) && fe.value.push(K);
      }), t("check", fe.value), t("check-all", fe.value), t("update:checkedRows", fe.value);
    }
    function nt(F, K) {
      a.isRowCheckable(F) && (Le.value, Le.value = K, Te(F) ? tt(F) : fe.value.push(F), t("check", fe.value, F), t("update:checkedRows", fe.value));
    }
    const Je = z(a.openedDetailed), ot = n(
      () => a.detailed && a.showDetailIcon
    );
    ce(
      () => a.openedDetailed,
      (F) => {
        Je.value = F;
      }
    );
    function ct(F) {
      T(F) ? (Z(F), t("details-close", F)) : (ee(F), t("details-open", F)), t("update:openedDetailed", Je.value);
    }
    function ee(F) {
      const K = Ne(F);
      Je.value.push(K);
    }
    function Z(F) {
      const K = Ne(F), oe = Je.value.indexOf(K);
      oe >= 0 && Je.value.splice(oe, 1);
    }
    function T(F) {
      const K = Ne(F);
      return Je.value.indexOf(K) >= 0;
    }
    function de(F) {
      return a.detailed && !a.customDetailRow && T(F);
    }
    function ke(F) {
      return a.detailed && a.customDetailRow && T(F);
    }
    function Ne(F) {
      const K = a.detailKey;
      return !(K != null && K.length) || !F ? F : F[K];
    }
    const X = z(!1), te = z(!1), pe = n(() => a.draggable && !te.value), we = n(
      () => a.draggableColumn && !X.value
    );
    function Oe(F, K, oe) {
      a.draggable && t("dragstart", F, K, oe);
    }
    function Ee(F, K, oe) {
      a.draggable && t("dragend", F, K, oe);
    }
    function bt(F, K, oe) {
      a.draggable && t("drop", F, K, oe);
    }
    function $t(F, K, oe) {
      a.draggable && t("dragover", F, K, oe);
    }
    function Bt(F, K, oe) {
      a.draggable && t("dragleave", F, K, oe);
    }
    function Zt(F, K, oe) {
      we.value && (te.value = !0, t("columndragstart", F, K, oe));
    }
    function sl(F, K, oe) {
      we.value && (te.value = !1, t("columndragend", F, K, oe));
    }
    function rl(F, K, oe) {
      we.value && t("columndrop", F, K, oe);
    }
    function ul(F, K, oe) {
      we.value && t("columndragover", F, K, oe);
    }
    function dl(F, K, oe) {
      we.value && t("columndragleave", F, K, oe);
    }
    const cl = h(
      ["rootClass", "o-table__root"],
      ["mobileClass", "o-table__wrapper--mobile", null, i]
    ), fl = h(
      ["tableClass", "o-table"],
      [
        "borderedClass",
        "o-table--bordered",
        null,
        n(() => a.bordered)
      ],
      ["stripedClass", "o-table--striped", null, n(() => a.striped)],
      [
        "narrowedClass",
        "o-table--narrowed",
        null,
        n(() => a.narrowed)
      ],
      [
        "hoverableClass",
        "o-table--hoverable",
        null,
        n(
          () => (a.hoverable || a.focusable) && !!g.value.length
        )
      ],
      [
        "emptyClass",
        "o-table--table__empty",
        null,
        n(() => !g.value.length)
      ]
    ), vl = h(
      ["wrapperClass", "o-table__wrapper"],
      [
        "stickyHeaderClass",
        "o-table__wrapper--sticky-header",
        null,
        n(() => a.stickyHeader)
      ],
      ["scrollableClass", "o-table__wrapper--scrollable", null, I],
      ["mobileClass", "o-table__wrapper--mobile", null, i]
    ), pl = h(["footerClass", "o-table__footer"]), ut = h(["thClass", "o-table__th"]), ga = h(["tdClass", "o-table__td"]), ba = h([
      "thCheckboxClass",
      "o-table__th-checkbox"
    ]), _t = h([
      "thDetailedClass",
      "o-table__th--detailed"
    ]), ml = h(["thSubheadingClass", "o-table__th"]), Ca = h(
      ["tdCheckboxClass", "o-table__td-checkbox"],
      [
        "thStickyClass",
        "o-table__th--sticky",
        null,
        n(() => a.stickyCheckbox)
      ]
    ), yl = h(["detailedClass", "o-table__detail"]), gl = h([
      "tdDetailedChevronClass",
      "o-table__td-chevron"
    ]), bl = h([
      "mobileSortClass",
      "o-table__mobile-sort"
    ]), Cl = h([
      "paginationWrapperClass",
      "o-table__pagination"
    ]), ha = n(
      () => We(Cl.value)
    ), hl = h([
      "thSortIconClass",
      "o-table__th__sort-icon"
    ]);
    function ka(F) {
      const K = h(
        [
          "thCurrentSortClass",
          "o-table__th-current-sort",
          null,
          j(F)
        ],
        ["thSortableClass", "o-table__th--sortable", null, F.sortable],
        [
          "thUnselectableClass",
          "o-table__th--unselectable",
          null,
          F.isHeaderUnselectable
        ],
        [
          "thPositionClass",
          "o-table__th--",
          F.position,
          !!F.position
        ],
        ["thStickyClass", "o-table__th--sticky", null, F.sticky]
      );
      return [...ut.value, ...K.value];
    }
    function kl(F, K) {
      const oe = h(
        [
          "trSelectedClass",
          "o-table__tr--selected",
          null,
          P(F, a.selected)
        ],
        ["trCheckedClass", "o-table__tr--checked", null, Te(F)]
      ), Ie = a.rowClass(F, K);
      return [...oe.value, { [Ie]: !0 }];
    }
    function Sl(F, K) {
      const oe = h(
        [
          "tdPositionClass",
          "o-table__td--",
          K.position,
          !!K.position
        ],
        ["tdStickyClass", "o-table__td--sticky", null, K.sticky]
      );
      return [...ga.value, ...oe.value];
    }
    return (F, K) => {
      var oe, Ie;
      return f(), V("div", {
        ref_key: "rootRef",
        ref: u,
        class: R(s(cl)),
        "data-oruga": "table"
      }, [
        ae("div", {
          ref_key: "slotRef",
          ref: d,
          style: { display: "none" }
        }, [
          _(F.$slots, "default", {}, () => {
            var q;
            return [
              (q = e.columns) != null && q.length ? (f(!0), V(he, { key: 0 }, xe(e.columns, (re, be) => (f(), ne(il, ye({ key: be }, re), {
                default: se(({ row: Fe }) => [
                  Pe(ue(re.field ? Fe[re.field] : Fe), 1)
                ]),
                _: 2
              }, 1040))), 128)) : J("", !0)
            ];
          })
        ], 512),
        i.value && x.value ? (f(), ne(Zo, {
          key: 0,
          "current-sort-column": C.value,
          columns: c.value,
          placeholder: e.mobileSortPlaceholder,
          "icon-pack": e.iconPack,
          "sort-icon": e.sortIcon,
          "sort-icon-size": e.sortIconSize,
          "is-asc": A.value,
          "mobile-sort-classes": s(bl),
          onSort: K[0] || (K[0] = (q, re) => $(q, null, re))
        }, null, 8, ["current-sort-column", "columns", "placeholder", "icon-pack", "sort-icon", "sort-icon-size", "is-asc", "mobile-sort-classes"])) : J("", !0),
        e.paginated && (e.paginationPosition === "top" || e.paginationPosition === "both") ? _(F.$slots, "pagination", {
          key: 1,
          current: s(B),
          perPage: e.perPage,
          total: S.value,
          change: (q) => B.value = q
        }, () => [
          me(Ra, ye(F.$attrs, {
            current: s(B),
            "onUpdate:current": K[1] || (K[1] = (q) => lt(B) ? B.value = q : null),
            paginated: e.paginated,
            "per-page": e.perPage,
            total: S.value,
            rounded: e.paginationRounded,
            size: e.paginationSize,
            order: e.paginationOrder,
            simple: e.paginationSimple,
            "icon-pack": e.iconPack,
            "aria-next-label": e.ariaNextLabel,
            "aria-previous-label": e.ariaPreviousLabel,
            "aria-page-label": e.ariaPageLabel,
            "aria-current-label": e.ariaCurrentLabel,
            "root-class": ha.value,
            onChange: K[2] || (K[2] = (q) => F.$emit("page-change", q))
          }), {
            default: se(() => [
              _(F.$slots, "top-left")
            ]),
            _: 3
          }, 16, ["current", "paginated", "per-page", "total", "rounded", "size", "order", "simple", "icon-pack", "aria-next-label", "aria-previous-label", "aria-page-label", "aria-current-label", "root-class"])
        ]) : J("", !0),
        ae("div", {
          class: R(s(vl)),
          style: _e(k.value)
        }, [
          ae("table", {
            class: R(s(fl)),
            tabindex: e.focusable ? 0 : null,
            onKeydown: [
              K[3] || (K[3] = Ce(ve((q) => W(-1, q), ["self", "prevent"]), ["up"])),
              K[4] || (K[4] = Ce(ve((q) => W(1, q), ["self", "prevent"]), ["down"]))
            ]
          }, [
            F.$slots.caption ? (f(), V("caption", ti, [
              _(F.$slots, "caption")
            ])) : J("", !0),
            c.value.length && e.showHeader ? (f(), V("thead", ai, [
              _(F.$slots, "preheader"),
              ae("tr", null, [
                ot.value ? (f(), V("th", {
                  key: 0,
                  class: R([...s(ut), ...s(_t)])
                }, null, 2)) : J("", !0),
                e.checkable && e.checkboxPosition === "left" ? (f(), V("th", {
                  key: 1,
                  class: R([...s(ut), ...s(ba)])
                }, [
                  _(F.$slots, "check-all", {
                    isAllChecked: Re.value,
                    isAllUncheckable: Se.value,
                    checkAll: Ge
                  }, () => [
                    e.headerCheckable ? (f(), ne(Vt, {
                      key: 0,
                      "model-value": Re.value,
                      autocomplete: "off",
                      variant: e.checkboxVariant,
                      disabled: Se.value,
                      "onUpdate:modelValue": Ge
                    }, null, 8, ["model-value", "variant", "disabled"])) : J("", !0)
                  ])
                ], 2)) : J("", !0),
                (f(!0), V(he, null, xe(O.value, (q, re) => {
                  var be;
                  return f(), V("th", ye({
                    key: q.identifier + ":" + re + "header"
                  }, q.thAttrsData, {
                    class: ka(q),
                    style: i.value ? {} : q.style,
                    draggable: we.value,
                    onClick: ve((Fe) => $(q, null, Fe), ["stop"]),
                    onDragstart: (Fe) => Zt(q, re, Fe),
                    onDragend: (Fe) => sl(q, re, Fe),
                    onDrop: (Fe) => rl(q, re, Fe),
                    onDragover: (Fe) => ul(q, re, Fe),
                    onDragleave: (Fe) => dl(q, re, Fe)
                  }), [
                    (be = q.$slots) != null && be.header ? (f(), ne(s(Rt), {
                      key: 0,
                      component: q.$el,
                      name: "header",
                      tag: "span",
                      props: { column: q, index: re }
                    }, null, 8, ["component", "props"])) : (f(), V("span", ni, [
                      Pe(ue(q.label) + " ", 1),
                      $e(ae("span", {
                        class: R(s(hl))
                      }, [
                        me(Ve, {
                          icon: e.sortIcon,
                          pack: e.iconPack,
                          both: "",
                          size: e.sortIconSize,
                          rotation: A.value ? 0 : 180
                        }, null, 8, ["icon", "pack", "size", "rotation"])
                      ], 2), [
                        [
                          He,
                          q.sortable && j(q)
                        ]
                      ])
                    ]))
                  ], 16, li);
                }), 128)),
                e.checkable && e.checkboxPosition === "right" ? (f(), V("th", {
                  key: 2,
                  class: R([...s(ut), ...s(ba)])
                }, [
                  e.headerCheckable ? _(F.$slots, "check-all", {
                    key: 0,
                    isAllChecked: Re.value,
                    isAllUncheckable: Se.value,
                    checkAll: Ge
                  }, () => [
                    me(Vt, {
                      "model-value": Re.value,
                      autocomplete: "off",
                      variant: e.checkboxVariant,
                      disabled: Se.value,
                      "onUpdate:modelValue": Ge
                    }, null, 8, ["model-value", "variant", "disabled"])
                  ]) : J("", !0)
                ], 2)) : J("", !0)
              ]),
              p.value ? (f(), V("tr", oi, [
                ot.value ? (f(), V("th", {
                  key: 0,
                  class: R([...s(ut), ...s(_t)])
                }, null, 2)) : J("", !0),
                e.checkable && e.checkboxPosition === "left" ? (f(), V("th", ii)) : J("", !0),
                (f(!0), V(he, null, xe(O.value, (q, re) => {
                  var be;
                  return f(), V("th", ye({
                    key: q.identifier + ":" + re + "searchable"
                  }, q.thAttrsData, {
                    class: ka(q),
                    style: i.value ? {} : q.style
                  }), [
                    q.searchable ? (f(), V(he, { key: 0 }, [
                      (be = q.$slots) != null && be.searchable ? (f(), ne(s(Rt), {
                        key: 0,
                        component: q.$el,
                        name: "searchable",
                        tag: "span",
                        props: { column: q, index: re, filters: D.value }
                      }, null, 8, ["component", "props"])) : (f(), ne(Ft, ye({
                        key: 1,
                        modelValue: D.value[q.field],
                        "onUpdate:modelValue": (Fe) => D.value[q.field] = Fe,
                        type: q.numeric ? "number" : "text"
                      }, { [Il(e.filtersEvent)]: U }), null, 16, ["modelValue", "onUpdate:modelValue", "type"]))
                    ], 64)) : J("", !0)
                  ], 16);
                }), 128)),
                e.checkable && e.checkboxPosition === "right" ? (f(), V("th", si)) : J("", !0)
              ])) : J("", !0),
              L.value ? (f(), V("tr", ri, [
                ot.value ? (f(), V("th", {
                  key: 0,
                  class: R([...s(ut), ...s(_t)])
                }, null, 2)) : J("", !0),
                e.checkable && e.checkboxPosition === "left" ? (f(), V("th", ui)) : J("", !0),
                (f(!0), V(he, null, xe(O.value, (q, re) => {
                  var be;
                  return f(), V("th", {
                    key: q.identifier + ":" + re + "subheading",
                    style: _e(i.value ? {} : q.style),
                    class: R([...s(ut), ...s(ml)])
                  }, [
                    (be = q.$slots) != null && be.subheading ? (f(), ne(s(Rt), {
                      key: 0,
                      component: q.$el,
                      name: "subheading",
                      tag: "span",
                      props: { column: q, index: re }
                    }, null, 8, ["component", "props"])) : (f(), V(he, { key: 1 }, [
                      Pe(ue(q.subheading), 1)
                    ], 64))
                  ], 6);
                }), 128)),
                e.checkable && e.checkboxPosition === "right" ? (f(), V("th", di)) : J("", !0)
              ])) : J("", !0)
            ])) : J("", !0),
            ae("tbody", null, [
              (f(!0), V(he, null, xe(g.value, (q, re) => (f(), V(he, {
                key: y(q) + "row"
              }, [
                ae("tr", {
                  class: R(kl(q, re)),
                  draggable: pe.value,
                  onClick: (be) => Q(q, re, be),
                  onDblclick: (be) => F.$emit("dblclick", q, re, be),
                  onMouseenter: (be) => F.$emit("mouseenter", q, re, be),
                  onMouseleave: (be) => F.$emit("mouseleave", q, re, be),
                  onContextmenu: (be) => F.$emit("contextmenu", q, re, be),
                  onDragstart: (be) => Oe(q, re, be),
                  onDragend: (be) => Ee(q, re, be),
                  onDrop: (be) => bt(q, re, be),
                  onDragover: (be) => $t(q, re, be),
                  onDragleave: (be) => Bt(q, re, be)
                }, [
                  ot.value ? (f(), V("td", {
                    key: 0,
                    class: R([
                      ...s(ga),
                      ...s(gl)
                    ])
                  }, [
                    e.hasDetailedVisible(q) ? (f(), ne(Ve, {
                      key: 0,
                      icon: e.detailIcon,
                      pack: e.iconPack,
                      rotation: T(q) ? 90 : 0,
                      role: "button",
                      clickable: "",
                      both: "",
                      onClick: ve((be) => ct(q), ["stop"])
                    }, null, 8, ["icon", "pack", "rotation", "onClick"])) : J("", !0)
                  ], 2)) : J("", !0),
                  e.checkable && e.checkboxPosition === "left" ? (f(), V("td", {
                    key: 1,
                    class: R([
                      ...s(ut),
                      ...s(Ca)
                    ])
                  }, [
                    me(Vt, {
                      "model-value": Te(q),
                      autocomplete: "off",
                      variant: e.checkboxVariant,
                      disabled: !e.isRowCheckable(q),
                      "onUpdate:modelValue": (be) => nt(q, re)
                    }, null, 8, ["model-value", "variant", "disabled", "onUpdate:modelValue"])
                  ], 2)) : J("", !0),
                  (f(!0), V(he, null, xe(O.value, (be, Fe) => (f(), ne(s(Rt), ye({
                    key: be.identifier + re + ":" + Fe
                  }, be.tdAttrsData[re], {
                    component: be.$el,
                    name: "default",
                    tag: "td",
                    class: Sl(q, be),
                    style: i.value ? {} : be.style,
                    "data-label": be.label,
                    props: {
                      row: q,
                      column: be,
                      index: re,
                      colindex: Fe,
                      toggleDetails: ct
                    },
                    onClick: (Ye) => F.$emit(
                      "cell-click",
                      q,
                      be,
                      re,
                      Fe,
                      Ye
                    )
                  }), null, 16, ["component", "class", "style", "data-label", "props", "onClick"]))), 128)),
                  e.checkable && e.checkboxPosition === "right" ? (f(), V("td", {
                    key: 2,
                    class: R([
                      ...s(ut),
                      ...s(Ca)
                    ])
                  }, [
                    me(Vt, {
                      "model-value": Te(q),
                      autocomplete: "off",
                      variant: e.checkboxVariant,
                      disabled: !e.isRowCheckable(q),
                      "onUpdate:modelValue": (be) => nt(q, re)
                    }, null, 8, ["model-value", "variant", "disabled", "onUpdate:modelValue"])
                  ], 2)) : J("", !0)
                ], 42, ci),
                me(et, { name: e.detailTransition }, {
                  default: se(() => [
                    de(q) ? (f(), V("tr", {
                      key: y(q) + "detail",
                      class: R(s(yl))
                    }, [
                      ae("td", { colspan: H.value }, [
                        _(F.$slots, "detail", {
                          row: q,
                          index: re
                        })
                      ], 8, fi)
                    ], 2)) : J("", !0)
                  ]),
                  _: 2
                }, 1032, ["name"]),
                ke(q) ? _(F.$slots, "detail", {
                  key: 0,
                  row: q,
                  index: re
                }) : J("", !0)
              ], 64))), 128)),
              g.value.length ? J("", !0) : (f(), V("tr", vi, [
                ae("td", { colspan: H.value }, [
                  _(F.$slots, "empty")
                ], 8, pi)
              ]))
            ]),
            F.$slots.footer ? (f(), V("tfoot", mi, [
              ae("tr", {
                class: R(s(pl))
              }, [
                N() ? _(F.$slots, "footer", {
                  key: 0,
                  columnCount: H.value,
                  rowCount: (oe = g.value) == null ? void 0 : oe.length
                }) : (f(), V("th", {
                  key: 1,
                  colspan: H.value
                }, [
                  _(F.$slots, "footer", {
                    columnCount: H.value,
                    rowCount: (Ie = g.value) == null ? void 0 : Ie.length
                  })
                ], 8, yi))
              ], 2)
            ])) : J("", !0)
          ], 42, ei),
          _(F.$slots, "loading", { loading: e.loading }, () => [
            me(ya, {
              "full-page": !1,
              active: e.loading
            }, null, 8, ["active"])
          ])
        ], 6),
        e.checkable && F.$slots["bottom-left"] || e.paginated && (e.paginationPosition === "bottom" || e.paginationPosition === "both") ? _(F.$slots, "pagination", {
          key: 2,
          current: s(B),
          perPage: e.perPage,
          total: S.value,
          change: (q) => B.value = q
        }, () => [
          me(Ra, ye(F.$attrs, {
            current: s(B),
            "onUpdate:current": K[5] || (K[5] = (q) => lt(B) ? B.value = q : null),
            paginated: e.paginated,
            "per-page": e.perPage,
            total: S.value,
            rounded: e.paginationRounded,
            size: e.paginationSize,
            order: e.paginationOrder,
            simple: e.paginationSimple,
            "icon-pack": e.iconPack,
            "aria-next-label": e.ariaNextLabel,
            "aria-previous-label": e.ariaPreviousLabel,
            "aria-page-label": e.ariaPageLabel,
            "aria-current-label": e.ariaCurrentLabel,
            "root-class": ha.value,
            onChange: K[6] || (K[6] = (q) => F.$emit("page-change", q))
          }), {
            default: se(() => [
              _(F.$slots, "bottom-left")
            ]),
            _: 3
          }, 16, ["current", "paginated", "per-page", "total", "rounded", "size", "order", "simple", "icon-pack", "aria-next-label", "aria-previous-label", "aria-page-label", "aria-current-label", "root-class"])
        ]) : J("", !0)
      ], 2);
    };
  }
}), bi = {
  install(e) {
    Ae(e, gi), Ae(e, il);
  }
}, Ci = ["aria-orientation"], hi = ["aria-controls", "aria-selected"], ki = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OTabs",
  configField: "tabs",
  __name: "Tabs",
  props: /* @__PURE__ */ ze({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: [String, Number], default: 0 },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("tabs.variant")
    },
    /**
     * Tab size
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("tabs.size")
    },
    /** Show tab in vertical layout */
    vertical: {
      type: Boolean,
      default: () => r("tabs.vertical", !1)
    },
    /**
     * Position of the tabs
     * @values left, centered, right
     */
    position: {
      type: String,
      default: void 0,
      validator: (e) => ["left", "centered", "right"].indexOf(e) >= 0
    },
    /**
     * Tab type
     * @values boxed, toggle
     */
    type: { type: String, default: () => r("tabs.type", "default") },
    /** Tabs will be expanded (full-width) */
    expanded: { type: Boolean, default: !1 },
    /** Tab will have an animation */
    animated: {
      type: Boolean,
      default: () => r("tabs.animated", !0)
    },
    /**
     * Transition animation name
     * @values [next, prev], [right, left, down, up]
     */
    animation: {
      type: Array,
      default: () => r("tabs.animation", [
        "slide-next",
        "slide-prev",
        "slide-down",
        "slide-up"
      ]),
      validator: (e) => e.length === 2 || e.length === 4
    },
    /** Apply animation on the initial render */
    animateInitially: {
      type: Boolean,
      default: () => r("tabs.animateInitially", !1)
    },
    /** Show tab items multiline when there is no space */
    multiline: { type: Boolean, default: !1 },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of Tabs component when when is vertical and its position changes */
    positionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of Tabs component when expanded */
    expandedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of Tabs component when vertical */
    verticalClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of Tabs component when multiline */
    multilineClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Tabs component nav tabs */
    navTabsClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Size of the navigation */
    navSizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Tabs component nav position */
    navPositionClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Type of the navigation */
    navTypeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab content */
    contentClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab content when transitioning */
    transitioningClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item wrapper */
    itemWrapperClass: {
      type: [String, Array, Function],
      default: void 0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["update:modelValue", "change"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = e, t = l, o = z(), i = n(() => ({
      activeValue: b.value,
      type: a.type,
      vertical: a.vertical,
      animated: a.animated,
      animation: a.animation,
      animateInitially: a.animateInitially
    })), { sortedItems: u } = gt(o, {
      data: i
    }), d = n(
      () => u.value.map((P) => ({
        index: P.index,
        identifier: P.identifier,
        ...vt(P.data)
      }))
    ), b = Xe(e, "modelValue");
    ce(
      () => a.modelValue,
      (P) => {
        b.value !== P && I(P);
      }
    );
    const c = n(
      () => it(b.value) && d.value.find((P) => P.value === b.value) || d.value[0]
    ), v = n(() => c.value.index);
    function m(P) {
      return P.value === c.value.value;
    }
    const S = n(
      () => d.value.some((P) => P.isTransitioning)
    );
    function B(P) {
      b.value !== P.value && I(P.value);
    }
    function k() {
      const P = Yt(v.value + 1, d.value.length);
      p(P, !0);
    }
    function g() {
      const P = Yt(v.value - 1, d.value.length);
      p(P, !1);
    }
    function O() {
      d.value.length < 1 || p(0, !0);
    }
    function H() {
      d.value.length < 1 || p(d.value.length - 1, !1);
    }
    function p(P, y) {
      const D = y ? 1 : -1;
      let U = P;
      for (; U !== v.value && !(d.value[U].visible && !d.value[U].disabled); U = Yt(U + D, d.value.length))
        ;
      B(d.value[U]);
    }
    function I(P) {
      const y = b.value, D = c.value, U = d.value.find((G) => G.value === P) || d.value[0];
      D && U && (D.deactivate(U.index), U.activate(D.index)), De(() => {
        b.value = P, t("change", P, y);
      });
    }
    const w = h(
      ["rootClass", "o-tabs"],
      [
        "positionClass",
        "o-tabs--",
        n(() => a.position),
        n(() => a.position && a.vertical)
      ],
      [
        "expandedClass",
        "o-tabs--fullwidth",
        null,
        n(() => a.expanded)
      ],
      ["verticalClass", "o-tabs--vertical", null, n(() => a.vertical)],
      [
        "multilineClass",
        "o-tabs--multiline",
        null,
        n(() => a.multiline)
      ]
    ), L = h([
      "itemWrapperClass",
      "o-tabs__nav-item-wrapper"
    ]), N = h(
      ["navTabsClass", "o-tabs__nav"],
      [
        "navSizeClass",
        "o-tabs__nav--",
        n(() => a.size),
        n(() => !!a.size)
      ],
      [
        "navPositionClass",
        "o-tabs__nav--",
        n(() => a.position),
        n(() => a.position && !a.vertical)
      ],
      [
        "navTypeClass",
        "o-tabs__nav--",
        n(() => a.type),
        n(() => !!a.type)
      ]
    ), W = h(
      ["contentClass", "o-tabs__content"],
      [
        "transitioningClass",
        "o-tabs__content--transitioning",
        null,
        S
      ]
    );
    function Q(P) {
      const y = h(
        ["itemHeaderClass", "o-tabs__nav-item"],
        ["itemHeaderTypeClass", "o-tabs__nav-item-", a.type, !!a.type],
        [
          "itemHeaderActiveClass",
          "o-tabs__nav-item-{*}--active",
          a.type,
          m(P)
        ],
        [
          "itemHeaderDisabledClass",
          "o-tabs__nav-item-{*}--disabled",
          a.type,
          P.disabled
        ]
      );
      return [{ [P.headerClass || ""]: !0 }, ...y.value];
    }
    return (P, y) => (f(), V("div", {
      ref_key: "rootRef",
      ref: o,
      class: R(s(w)),
      "data-oruga": "tabs"
    }, [
      ae("nav", {
        class: R(s(N)),
        role: "tablist",
        "aria-orientation": e.vertical ? "vertical" : "horizontal"
      }, [
        _(P.$slots, "start"),
        (f(!0), V(he, null, xe(d.value, (D) => $e((f(), V("div", {
          key: D.value,
          class: R(s(L)),
          role: "tab",
          "aria-controls": `${D.value}-content`,
          "aria-selected": m(D) ? "true" : "false"
        }, [
          D.$slots.header ? (f(), ne(s(Rt), {
            key: 0,
            component: D,
            tag: D.tag,
            name: "header",
            class: R(Q(D)),
            onClick: (U) => B(D),
            onKeydown: [
              Ce((U) => B(D), ["enter"]),
              Ce(ve(g, ["prevent"]), ["left"]),
              Ce(ve(k, ["prevent"]), ["right"]),
              Ce(ve(g, ["prevent"]), ["up"]),
              Ce(ve(k, ["prevent"]), ["down"]),
              Ce(ve(O, ["prevent"]), ["home"]),
              Ce(ve(H, ["prevent"]), ["end"])
            ]
          }, null, 8, ["component", "tag", "class", "onClick", "onKeydown"])) : (f(), ne(qe(D.tag), {
            key: 1,
            role: "button",
            tabindex: 0,
            class: R(Q(D)),
            onClick: (U) => B(D),
            onKeydown: [
              Ce((U) => B(D), ["enter"]),
              Ce(ve(g, ["prevent"]), ["left"]),
              Ce(ve(k, ["prevent"]), ["right"]),
              Ce(ve(g, ["prevent"]), ["up"]),
              Ce(ve(k, ["prevent"]), ["down"]),
              Ce(ve(O, ["prevent"]), ["home"]),
              Ce(ve(H, ["prevent"]), ["end"])
            ]
          }, {
            default: se(() => [
              D.icon ? (f(), ne(Ve, {
                key: 0,
                "root-class": s(We)(D.headerIconClasses),
                icon: D.icon,
                pack: D.iconPack,
                size: e.size
              }, null, 8, ["root-class", "icon", "pack", "size"])) : J("", !0),
              ae("span", {
                class: R(D.headerTextClasses)
              }, ue(D.label), 3)
            ]),
            _: 2
          }, 1064, ["class", "onClick", "onKeydown"]))
        ], 10, hi)), [
          [He, D.visible]
        ])), 128)),
        _(P.$slots, "end")
      ], 10, Ci),
      ae("section", {
        class: R(s(W))
      }, [
        _(P.$slots, "default")
      ], 2)
    ], 2));
  }
}), Si = ["data-id", "tabindex", "role"], Fi = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OTabItem",
  configField: "tabs",
  inheritAttrs: !1,
  __name: "TabItem",
  props: {
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** Item value (it will be used as v-model of wrapper component) */
    value: { type: [String, Number], default: () => Ke() },
    /** Item label */
    label: { type: String, default: void 0 },
    /** Item will be disabled */
    disabled: { type: Boolean, default: !1 },
    /** Icon on the left */
    icon: {
      type: String,
      default: () => r("tabs.icon")
    },
    /** Icon pack */
    iconPack: {
      type: String,
      default: () => r("tabs.iconPack")
    },
    /** Show/hide item */
    visible: { type: Boolean, default: !0 },
    /** Tabs item tag name */
    tag: {
      type: [String, Object, Function],
      default: () => r("tabs.itemTag", "button")
    },
    /** Role attribute to be passed to the div wrapper for better accessibility. */
    ariaRole: {
      type: String,
      default: () => r("tabs.ariaRole", "tab")
    },
    /** Sets a class to the item header */
    headerClass: { type: String, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the tab item */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item header */
    itemHeaderClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item header when active */
    itemHeaderActiveClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item header when disabled */
    itemHeaderDisabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item header type */
    itemHeaderTypeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item header icon */
    itemHeaderIconClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the tab item header text */
    itemHeaderTextClass: {
      type: [String, Array, Function],
      default: void 0
    }
  },
  emits: ["activate", "deactivate"],
  setup(e, { emit: l }) {
    const a = e, t = l, o = Dt(), i = n(() => ({
      ...a,
      $slots: o,
      headerIconClasses: p.value,
      headerTextClasses: I.value,
      isTransitioning: v.value,
      activate: B,
      deactivate: k
    })), { parent: u, item: d } = yt({
      data: i
    }), b = z(), c = n(() => Tt(a.value, u.value.activeValue)), v = z(!1), m = n(() => {
      const w = u.value.vertical && u.value.animation.length === 4 ? 2 : 0;
      return u.value.animation[w];
    }), S = n(() => {
      const w = u.value.vertical && u.value.animation.length === 4 ? 3 : 1;
      return u.value.animation[w];
    });
    function B(w) {
      b.value = d.value.index < w ? m.value : S.value, t("activate");
    }
    function k(w) {
      b.value = w < d.value.index ? m.value : S.value, t("deactivate");
    }
    function g() {
      v.value = !0;
    }
    function O() {
      v.value = !0;
    }
    const H = h(["itemClass", "o-tab-item__content"]), p = h([
      "itemHeaderIconClass",
      "o-tabs__nav-item-icon"
    ]), I = h([
      "itemHeaderTextClass",
      "o-tabs__nav-item-text"
    ]);
    return (w, L) => (f(), ne(et, {
      css: s(u).animated,
      name: b.value,
      appear: s(u).animateInitially,
      onAfterEnter: g,
      onBeforeLeave: O
    }, {
      default: se(() => [
        $e(ae("div", ye({ ref: "rootRef" }, w.$attrs, {
          class: s(H),
          "data-id": `tabs-${s(d).identifier}`,
          "data-oruga": "tabs-item",
          tabindex: c.value ? 0 : -1,
          role: e.ariaRole,
          "aria-roledescription": "item"
        }), [
          _(w.$slots, "default")
        ], 16, Si), [
          [He, c.value && e.visible]
        ])
      ]),
      _: 3
    }, 8, ["css", "name", "appear"]));
  }
}), Ai = {
  install(e) {
    Ae(e, ki), Ae(e, Fi);
  }
}, wi = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OTaginput",
  configField: "taginput",
  inheritAttrs: !1,
  __name: "Taginput",
  props: /* @__PURE__ */ ze({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: { type: Array, default: () => [] },
    /** Items data */
    data: { type: Array, default: () => [] },
    /** Property of the object (if data is array of objects) to use as display text */
    field: { type: String, default: "value" },
    /** Property of the object (if `data` is array of objects) to use as display text of group */
    groupField: { type: String, default: void 0 },
    /** Property of the object (if `data` is array of objects) to use as key to get items array of each group */
    groupOptions: { type: String, default: void 0 },
    /**
     * Vertical size of the input control
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => r("taginput.size")
    },
    /**
     * Color of the each item
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("taginput.variant")
    },
    /** Limits the number of items, plus item counter */
    maxitems: { type: Number, default: void 0 },
    /** Same as native maxlength, plus character counter */
    maxlength: { type: Number, default: void 0 },
    /** Show counter when maxlength or maxtags props are passed */
    counter: {
      type: Boolean,
      default: () => r("taginput.counter", !0)
    },
    /** Opens a dropdown with choices when the input field is focused */
    openOnFocus: { type: Boolean, default: !1 },
    /** Keep open dropdown list after select */
    keepOpen: {
      type: Boolean,
      default: () => r("autocomplete.keepOpen", !1)
    },
    /** Input placeholder */
    placeholder: { type: String, default: void 0 },
    /** Makes input full width when inside a grouped or addon field */
    expanded: { type: Boolean, default: !1 },
    /** Same as native input disabled */
    disabled: { type: Boolean, default: !1 },
    /**
     * Array of keys
     * (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)
     * which will add a item when typing
     */
    confirmKeys: {
      type: Array,
      default: () => r("taginput.confirmKeys", [",", "Tab", "Enter"])
    },
    /** Array of chars used to split when pasting a new string */
    separators: {
      type: Array,
      default: () => r("taginput.separators", [","])
    },
    /** The first option will always be pre-selected (easier to just hit enter or tab) */
    keepFirst: { type: Boolean, default: !1 },
    /** When autocomplete, it allow to add new items */
    allowNew: { type: Boolean, default: !1 },
    /** Allows adding the same item multiple time */
    allowDuplicates: { type: Boolean, default: !1 },
    /** Add autocomplete feature (if true, any Autocomplete props may be used too) */
    allowAutocomplete: { type: Boolean, default: !1 },
    /** Allow removing last item when pressing given keys, if input is empty */
    removeOnKeys: {
      type: Array,
      default: () => r("taginput.removeOnKeys", ["Backspace"])
    },
    /** Function to validate the value of the item before adding */
    beforeAdding: {
      type: Function,
      default: () => !0
    },
    /** Function to create a new item to push into v-model (items) */
    createItem: {
      type: Function,
      default: (e) => e
    },
    /** Makes the component check if list reached scroll start or end and emit scroll events. */
    checkScroll: {
      type: Boolean,
      default: () => r("taginput.checkScroll", !1)
    },
    /** Add close/delete button to the item */
    closable: {
      type: Boolean,
      default: () => r("taginput.closable", !0)
    },
    /**
     * Icon pack to use
     * @values mdi, fa, fas and any other custom icon pack
     */
    iconPack: {
      type: String,
      default: () => r("taginput.iconPack")
    },
    /** Icon to be shown */
    icon: {
      type: String,
      default: () => r("taginput.icon")
    },
    /** Icon name of close icon on selected item */
    closeIcon: {
      type: String,
      default: () => r("taginput.closeIcon", "close")
    },
    /** Accessibility label for the close button */
    ariaCloseLabel: {
      type: String,
      default: () => r("taginput.ariaCloseLabel")
    },
    /** Native options to use in HTML5 validation */
    autocomplete: {
      type: String,
      default: () => r("taginput.autocomplete", "off")
    },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => r("useHtml5Validation", !0)
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
      default: () => r("taginput.teleport", !1)
    },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of input when expanded */
    expandedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the input container */
    containerClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the input container size */
    sizeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the entered item variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the close button of entered item */
    closeClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the entered item */
    itemClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the counter element */
    counterClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /**
     * Class configuration for the underlying autocomplete component
     * @ignore
     */
    autocompleteClasses: {
      type: Object,
      default: () => r("taginput.autocompleteClasses", {})
    }
  }, {
    modelValue: { default: [] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["update:modelValue", "input", "add", "remove", "focus", "blur", "invalid", "icon-click", "icon-right-click", "scroll-start", "scroll-end"], ["update:modelValue"]),
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = z(), u = Xe(e, "modelValue"), { setFocus: d, onFocus: b, onBlur: c, onInvalid: v } = rt(
      i,
      o,
      t
    ), m = z(""), S = z(!1), B = n(() => m.value.trim().length), k = n(() => u.value.length);
    ce(
      () => t.modelValue,
      (x) => {
        u.value = Array.isArray(x) ? x.slice(0) : x || [];
      }
    );
    const g = n(
      () => t.maxitems == null || k.value < t.maxitems
    );
    La(() => {
      g.value || c();
    });
    const O = n(
      () => t.separators.length ? new RegExp(
        t.separators.map(
          (x) => x ? x.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : null
        ).join("|"),
        "g"
      ) : null
    );
    function H(x) {
      return typeof x == "object" && (x = Me(x, t.field)), `${x}`;
    }
    function p(x) {
      if (x = x || m.value.trim(), x) {
        if (typeof x == "string") {
          const M = O.value;
          if (M && x.match(M)) {
            x.split(M).map(($) => $.trim()).filter(($) => $.length !== 0).map(p);
            return;
          }
        }
        const j = t.createItem(x);
        (t.allowDuplicates ? !0 : u.value.indexOf(j) === -1) && t.beforeAdding(x) && (u.value.push(j), o("add", j));
      }
      requestAnimationFrame(() => {
        m.value = "", o("input", m.value);
      });
    }
    function I(x, j) {
      const le = u.value.splice(x, 1)[0];
      o("remove", le), j && j.stopPropagation(), t.openOnFocus && i.value && d();
    }
    function w(x) {
      x && (p(x), De(() => m.value = ""));
    }
    function L(x) {
      var j;
      if (t.removeOnKeys.indexOf(x.key) !== -1 && !((j = m.value) != null && j.length) && k.value > 0 && I(k.value - 1), !(t.allowAutocomplete && !t.allowNew) && t.confirmKeys.indexOf(x.key) >= 0) {
        if (x.key !== "Tab" && x.preventDefault(), x.key === "Enter" && S.value)
          return;
        p();
      }
    }
    function N(x) {
      o("input", String(x).trim());
    }
    function W(x) {
      t.allowAutocomplete || p(), c(x);
    }
    const Q = da(), P = h([
      "autocompleteClasses.rootClass",
      "o-taginput__autocomplete"
    ]), y = h([
      "autocompleteClasses.inputClasses.inputClass",
      "o-taginput__input"
    ]), D = n(() => ({
      ...Q,
      "root-class": We(P.value),
      "input-classes": {
        "input-class": We(y.value)
      },
      ...t.autocompleteClasses
    })), U = h(
      ["rootClass", "o-taginput"],
      [
        "expandedClass",
        "o-taginput--expanded",
        null,
        n(() => t.expanded)
      ]
    ), G = h(
      ["containerClass", "o-taginput__container"],
      [
        "sizeClass",
        "o-taginput__container--",
        n(() => t.size),
        n(() => !!t.size)
      ]
    ), E = h(
      ["itemClass", "o-taginput__item"],
      [
        "variantClass",
        "o-taginput__item--",
        n(() => t.variant),
        n(() => !!t.variant)
      ]
    ), C = h(["closeClass", "o-taginput__item__close"]), A = h(["counterClass", "o-taginput__counter"]);
    return l({ focus: d }), (x, j) => (f(), V("div", {
      "data-oruga": "taginput",
      class: R(s(U))
    }, [
      ae("div", {
        class: R(s(G)),
        onFocus: j[7] || (j[7] = //@ts-ignore
        (...le) => s(b) && s(b)(...le)),
        onBlur: j[8] || (j[8] = //@ts-ignore
        (...le) => s(c) && s(c)(...le))
      }, [
        _(x.$slots, "selected", { items: u.value }, () => [
          (f(!0), V(he, null, xe(u.value, (le, M) => (f(), V("span", {
            key: H(le) + M,
            class: R(s(E))
          }, [
            ae("span", null, ue(H(le)), 1),
            e.closable ? (f(), ne(Ve, {
              key: 0,
              class: R(s(C)),
              clickable: "",
              pack: e.iconPack,
              icon: e.closeIcon,
              "aria-label": e.ariaCloseLabel,
              both: "",
              onClick: ($) => I(M, $)
            }, null, 8, ["class", "pack", "icon", "aria-label", "onClick"])) : J("", !0)
          ], 2))), 128))
        ]),
        $e(me(Qa, ye({
          ref_key: "autocompleteRef",
          ref: i,
          modelValue: m.value,
          "onUpdate:modelValue": j[0] || (j[0] = (le) => m.value = le)
        }, D.value, {
          data: e.data,
          field: e.field,
          icon: e.icon,
          "icon-pack": e.iconPack,
          maxlength: e.maxlength,
          size: e.size,
          disabled: e.disabled,
          autocomplete: e.autocomplete,
          "open-on-focus": e.openOnFocus,
          "keep-first": e.keepFirst,
          "keep-open": e.keepOpen,
          "group-field": e.groupField,
          "group-options": e.groupOptions,
          "has-counter": !1,
          "use-html5-validation": e.useHtml5Validation,
          "check-scroll": e.checkScroll,
          teleport: e.teleport,
          "confirm-keys": e.confirmKeys,
          placeholder: e.placeholder,
          "validation-message": e.validationMessage,
          expanded: e.expanded,
          onInput: N,
          onFocus: s(b),
          onBlur: W,
          onInvalid: s(v),
          onKeydown: L,
          onCompositionstart: j[1] || (j[1] = (le) => S.value = !0),
          onCompositionend: j[2] || (j[2] = (le) => S.value = !1),
          onSelect: w,
          onScrollStart: j[3] || (j[3] = (le) => x.$emit("scroll-start")),
          onScrollEnd: j[4] || (j[4] = (le) => x.$emit("scroll-end")),
          onIconClick: j[5] || (j[5] = (le) => x.$emit("icon-click", le)),
          onIconRightClick: j[6] || (j[6] = (le) => x.$emit("icon-right-click", le))
        }), qt({ _: 2 }, [
          x.$slots.header ? {
            name: "header",
            fn: se(() => [
              _(x.$slots, "header")
            ]),
            key: "0"
          } : void 0,
          x.$slots.default ? {
            name: "default",
            fn: se((le) => [
              _(x.$slots, "default", {
                option: le.option,
                index: le.index,
                value: le.value
              })
            ]),
            key: "1"
          } : void 0,
          x.$slots.empty ? {
            name: "empty",
            fn: se(() => [
              _(x.$slots, "empty")
            ]),
            key: "2"
          } : void 0,
          x.$slots.footer ? {
            name: "footer",
            fn: se(() => [
              _(x.$slots, "footer")
            ]),
            key: "3"
          } : void 0
        ]), 1040, ["modelValue", "data", "field", "icon", "icon-pack", "maxlength", "size", "disabled", "autocomplete", "open-on-focus", "keep-first", "keep-open", "group-field", "group-options", "use-html5-validation", "check-scroll", "teleport", "confirm-keys", "placeholder", "validation-message", "expanded", "onFocus", "onInvalid"]), [
          [He, g.value]
        ])
      ], 34),
      e.counter && (e.maxitems || e.maxlength) ? (f(), V("small", {
        key: 0,
        class: R(s(A))
      }, [
        e.maxlength && B.value > 0 ? _(x.$slots, "counter", {
          key: 0,
          items: B.value,
          total: e.maxlength
        }, () => [
          Pe(ue(B.value) + " / " + ue(e.maxlength), 1)
        ]) : e.maxitems ? _(x.$slots, "counter", {
          key: 1,
          items: k.value,
          total: e.maxitems
        }, () => [
          Pe(ue(k.value) + " / " + ue(e.maxitems), 1)
        ]) : J("", !0)
      ], 2)) : J("", !0)
    ], 2));
  }
}), Di = {
  install(e) {
    Ae(e, wi);
  }
}, xi = {
  install(e) {
    Ae(e, el);
  }
}, $i = {
  install(e) {
    Ae(e, nl);
  }
}, Bi = ["id"], Oi = ["multiple", "accept", "disabled", "aria-labelledby"], Pi = /* @__PURE__ */ ge({
  isOruga: !0,
  name: "OUpload",
  configField: "upload",
  inheritAttrs: !1,
  __name: "Upload",
  props: /* @__PURE__ */ ze({
    /** Override existing theme classes completely */
    override: { type: Boolean, default: void 0 },
    /** @model */
    modelValue: {
      type: [Object, Array],
      default: void 0
    },
    /** Same as native, also push new item to v-model instead of replacing */
    multiple: { type: Boolean, default: !1 },
    /**
     * Color of the control
     * @values primary, info, success, warning, danger, and any other custom color
     */
    variant: {
      type: String,
      default: () => r("upload.variant")
    },
    /** Same as native disabled */
    disabled: { type: Boolean, default: !1 },
    /** Same as native accept */
    accept: { type: String, default: void 0 },
    /** Accepts drag & drop and change its style */
    dragDrop: { type: Boolean, default: !1 },
    /** Upload will be expanded (full-width) */
    expanded: { type: Boolean, default: !1 },
    /** Replace last chosen files every time (like native file input element) */
    native: { type: Boolean, default: !0 },
    /** Accessibility label to establish relationship between the input and control label */
    ariaLabelledby: { type: String, default: () => Ke() },
    /** Enable html 5 native validation */
    useHtml5Validation: {
      type: Boolean,
      default: () => r("useHtml5Validation", !0)
    },
    /** The message which is shown when a validation error occurs */
    validationMessage: { type: String, default: void 0 },
    // class props (will not be displayed in the docs)
    /** Class of the root element */
    rootClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Upload when draggable */
    draggableClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Upload variant */
    variantClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Upload when expanded */
    expandedClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Upload when disabled */
    disabledClass: {
      type: [String, Array, Function],
      default: void 0
    },
    /** Class of the Upload when hovered */
    hoveredClass: {
      type: [String, Array, Function],
      default: void 0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["update:modelValue", "focus", "blur", "invalid"], ["update:modelValue"]),
  setup(e, { expose: l, emit: a }) {
    const t = e, o = a, i = z(), u = Xe(e, "modelValue"), { checkHtml5Validity: d, onFocus: b, onBlur: c, isValid: v, setFocus: m } = rt(i, o, t), S = z(!1);
    ce(u, (w) => {
      (!w || Array.isArray(w) && w.length === 0) && (i.value.value = null), !v.value && !t.dragDrop && d();
    });
    function B(w) {
      if (t.disabled)
        return;
      t.dragDrop && g(!1);
      const L = w.target.files || w.dataTransfer.files;
      if (L.length === 0) {
        if (!u.value)
          return;
        t.native && (u.value = null);
      }
      if (t.multiple) {
        const N = t.native || !u.value || !Array.isArray(u.value) ? [] : [...u.value];
        for (let W = 0; W < L.length; W++) {
          const Q = L[W];
          O(Q) && N.push(Q);
        }
        u.value = N;
      } else {
        if (t.dragDrop && L.length !== 1)
          return;
        {
          const N = L[0];
          if (O(N))
            u.value = N;
          else if (u.value)
            u.value = null, k();
          else {
            k(), d();
            return;
          }
        }
      }
      t.dragDrop || d();
    }
    function k() {
      i.value.value = null;
    }
    function g(w) {
      t.disabled || (S.value = w);
    }
    function O(w) {
      if (!t.accept)
        return !0;
      const L = t.accept.split(",");
      if (L.length === 0)
        return !0;
      for (let N = 0; N < L.length; N++) {
        const W = L[N].trim();
        if (W) {
          if (W.substring(0, 1) === ".") {
            if (w.name.toLowerCase().slice(-W.length) === W.toLowerCase())
              return !0;
          } else if (w.type.match(W))
            return !0;
        }
      }
      return !1;
    }
    function H(w) {
      t.disabled || t.dragDrop || (w.preventDefault(), i.value.click());
    }
    const p = h(
      ["rootClass", "o-upl"],
      ["expandedClass", "o-upl--expanded", null, n(() => t.expanded)],
      ["disabledClass", "o-upl--disabled", null, n(() => t.disabled)]
    ), I = h(
      ["draggableClass", "o-upl__draggable"],
      [
        "hoveredClass",
        "o-upl__draggable--hovered",
        null,
        n(() => !t.variant && S.value)
      ],
      [
        "variantClass",
        "o-upl__draggable--hovered-",
        n(() => t.variant),
        n(() => t.variant && S.value)
      ]
    );
    return l({ focus: m }), (w, L) => (f(), V("label", {
      id: e.ariaLabelledby,
      class: R(s(p)),
      "data-oruga": "upload"
    }, [
      e.dragDrop ? (f(), V("div", {
        key: 1,
        class: R(s(I)),
        role: "button",
        tabindex: "0",
        onMouseenter: L[0] || (L[0] = (N) => g(!0)),
        onMouseleave: L[1] || (L[1] = (N) => g(!1)),
        onDragover: L[2] || (L[2] = ve((N) => g(!0), ["prevent"])),
        onDragleave: L[3] || (L[3] = ve((N) => g(!1), ["prevent"])),
        onDragenter: L[4] || (L[4] = ve((N) => g(!0), ["prevent"])),
        onDrop: ve(B, ["prevent"])
      }, [
        _(w.$slots, "default")
      ], 34)) : _(w.$slots, "default", {
        key: 0,
        onclick: H
      }),
      ae("input", ye(w.$attrs, {
        ref_key: "inputRef",
        ref: i,
        type: "file",
        "data-oruga-input": "file",
        multiple: e.multiple,
        accept: e.accept,
        disabled: e.disabled,
        "aria-labelledby": e.ariaLabelledby,
        onChange: B,
        onFocus: L[5] || (L[5] = //@ts-ignore
        (...N) => s(b) && s(b)(...N)),
        onBlur: L[6] || (L[6] = //@ts-ignore
        (...N) => s(c) && s(c)(...N))
      }), null, 16, Oi)
    ], 10, Bi));
  }
}), Mi = {
  install(e) {
    Ae(e, Pi);
  }
}, Ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Autocomplete: vn,
  Button: pn,
  Carousel: Cn,
  Checkbox: Fn,
  Collapse: Dn,
  Datepicker: Yn,
  Datetimepicker: Zn,
  Dropdown: _n,
  Field: eo,
  Icon: to,
  Input: ao,
  Loading: oo,
  Menu: co,
  Modal: yo,
  Notification: Fo,
  Pagination: Ao,
  Radio: Bo,
  Select: Oo,
  Sidebar: To,
  Skeleton: Mo,
  Slider: Lo,
  Steps: Ko,
  Switch: Jo,
  Table: bi,
  Tabs: Ai,
  Taginput: Di,
  Timepicker: xi,
  Tooltip: $i,
  Upload: Mi
}, Symbol.toStringTag, { value: "Module" })), Ti = {
  install(e, l = {}) {
    e.use(Ul, l);
    for (const a in Ta)
      Wl(e, Ta[a]);
    Ht(e, "config", Kl);
  }
};
export {
  vn as Autocomplete,
  pn as Button,
  Cn as Carousel,
  Fn as Checkbox,
  Dn as Collapse,
  Ul as ConfigPlugin,
  Kl as ConfigProgrammatic,
  Yn as Datepicker,
  Zn as Datetimepicker,
  _n as Dropdown,
  eo as Field,
  to as Icon,
  ao as Input,
  oo as Loading,
  no as LoadingProgrammatic,
  co as Menu,
  yo as Modal,
  mo as ModalProgrammatic,
  Fo as Notification,
  So as NotificationProgrammatic,
  Qa as OAutocomplete,
  At as OButton,
  yn as OCarousel,
  bn as OCarouselItem,
  Vt as OCheckbox,
  wn as OCollapse,
  _a as ODatepicker,
  Qn as ODatetimepicker,
  va as ODropdown,
  Ct as ODropdownItem,
  Ua as OField,
  Ve as OIcon,
  Ft as OInput,
  ya as OLoading,
  so as OMenu,
  uo as OMenuItem,
  tl as OModal,
  Co as ONotification,
  al as OPagination,
  $o as ORadio,
  pt as OSelect,
  ll as OSidebar,
  Po as OSkeleton,
  Ho as OSlider,
  ol as OSliderTick,
  Yo as OStepItem,
  jo as OSteps,
  Go as OSwitch,
  Fi as OTabItem,
  gi as OTable,
  il as OTableColumn,
  ki as OTabs,
  wi as OTaginput,
  el as OTimepicker,
  nl as OTooltip,
  Pi as OUpload,
  Ti as Oruga,
  Ul as OrugaConfig,
  Ao as Pagination,
  Bo as Radio,
  Oo as Select,
  To as Sidebar,
  Ro as SidebarProgrammatic,
  Mo as Skeleton,
  Lo as Slider,
  Ko as Steps,
  Jo as Switch,
  bi as Table,
  Ai as Tabs,
  Di as Taginput,
  xi as Timepicker,
  $i as Tooltip,
  Mi as Upload,
  Ti as default,
  jl as useOruga
};
//# sourceMappingURL=oruga.mjs.map
