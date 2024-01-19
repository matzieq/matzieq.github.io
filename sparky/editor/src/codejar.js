/**
 * Minified by jsDelivr using Terser v5.19.0.
 * Original file: /npm/codejar@4.2.0/dist/codejar.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const globalWindow = window;

function CodeJar(t, e, n = {}) {
  const o = {
      tab: "\t",
      indentOn: /[({\[]$/,
      moveToNewLine: /^[)}\]]/,
      spellcheck: !1,
      catchTab: !0,
      preserveIdent: !0,
      addClosing: !0,
      history: !0,
      window: globalWindow,
      ...n,
    },
    r = o.window,
    i = r.document,
    s = [],
    d = [];
  let a,
    c = -1,
    l = !1,
    f = () => {};
  t.setAttribute("contenteditable", "plaintext-only"),
    t.setAttribute("spellcheck", o.spellcheck ? "true" : "false"),
    (t.style.outline = "none"),
    (t.style.overflowWrap = "break-word"),
    (t.style.overflowY = "auto"),
    (t.style.whiteSpace = "pre-wrap");
  const u = (t, n) => {
    e(t, n);
  };
  let p = !1;
  "plaintext-only" !== t.contentEditable && (p = !0),
    p && t.setAttribute("contenteditable", "true");
  const h = A(() => {
    const e = C();
    u(t, e), E(e);
  }, 30);
  let g = !1;
  const y = t =>
      !M(t) &&
      !D(t) &&
      "Meta" !== t.key &&
      "Control" !== t.key &&
      "Alt" !== t.key &&
      !t.key.startsWith("Arrow"),
    N = A(t => {
      y(t) && (k(), (g = !1));
    }, 300),
    T = (e, n) => {
      s.push([e, n]), t.addEventListener(e, n);
    };
  function C() {
    const e = K(),
      n = { start: 0, end: 0, dir: void 0 };
    let { anchorNode: o, anchorOffset: r, focusNode: s, focusOffset: d } = e;
    if (!o || !s) throw "error1";
    if (o === t && s === t)
      return (
        (n.start = r > 0 && t.textContent ? t.textContent.length : 0),
        (n.end = d > 0 && t.textContent ? t.textContent.length : 0),
        (n.dir = d >= r ? "->" : "<-"),
        n
      );
    if (o.nodeType === Node.ELEMENT_NODE) {
      const t = i.createTextNode("");
      o.insertBefore(t, o.childNodes[r]), (o = t), (r = 0);
    }
    if (s.nodeType === Node.ELEMENT_NODE) {
      const t = i.createTextNode("");
      s.insertBefore(t, s.childNodes[d]), (s = t), (d = 0);
    }
    return (
      v(t, t => {
        if (t === o && t === s)
          return (
            (n.start += r), (n.end += d), (n.dir = r <= d ? "->" : "<-"), "stop"
          );
        if (t === o) {
          if (((n.start += r), n.dir)) return "stop";
          n.dir = "->";
        } else if (t === s) {
          if (((n.end += d), n.dir)) return "stop";
          n.dir = "<-";
        }
        t.nodeType === Node.TEXT_NODE &&
          ("->" != n.dir && (n.start += t.nodeValue.length),
          "<-" != n.dir && (n.end += t.nodeValue.length));
      }),
      t.normalize(),
      n
    );
  }
  function E(e) {
    const n = K();
    let o,
      r,
      s = 0,
      d = 0;
    if (
      (e.dir || (e.dir = "->"),
      e.start < 0 && (e.start = 0),
      e.end < 0 && (e.end = 0),
      "<-" == e.dir)
    ) {
      const { start: t, end: n } = e;
      (e.start = n), (e.end = t);
    }
    let a = 0;
    v(t, t => {
      if (t.nodeType !== Node.TEXT_NODE) return;
      const n = (t.nodeValue || "").length;
      if (a + n > e.start && (o || ((o = t), (s = e.start - a)), a + n > e.end))
        return (r = t), (d = e.end - a), "stop";
      a += n;
    }),
      o || ((o = t), (s = t.childNodes.length)),
      r || ((r = t), (d = t.childNodes.length)),
      "<-" == e.dir && ([o, s, r, d] = [r, d, o, s]);
    {
      const t = m(o);
      if (t) {
        const e = i.createTextNode("");
        t.parentNode?.insertBefore(e, t), (o = e), (s = 0);
      }
      const e = m(r);
      if (e) {
        const t = i.createTextNode("");
        e.parentNode?.insertBefore(t, e), (r = t), (d = 0);
      }
    }
    n.setBaseAndExtent(o, s, r, d), t.normalize();
  }
  function m(e) {
    for (; e && e !== t; ) {
      if (e.nodeType === Node.ELEMENT_NODE) {
        const t = e;
        if ("false" == t.getAttribute("contenteditable")) return t;
      }
      e = e.parentNode;
    }
  }
  function b() {
    const e = K().getRangeAt(0),
      n = i.createRange();
    return (
      n.selectNodeContents(t),
      n.setEnd(e.startContainer, e.startOffset),
      n.toString()
    );
  }
  function x() {
    const e = K().getRangeAt(0),
      n = i.createRange();
    return (
      n.selectNodeContents(t),
      n.setStart(e.endContainer, e.endOffset),
      n.toString()
    );
  }
  function w(t) {
    if (p && "Enter" === t.key)
      if ((H(t), t.stopPropagation(), "" == x())) {
        L("\n ");
        const t = C();
        (t.start = --t.end), E(t);
      } else L("\n");
  }
  function k() {
    if (!l) return;
    const e = t.innerHTML,
      n = C(),
      o = d[c];
    if (o && o.html === e && o.pos.start === n.start && o.pos.end === n.end)
      return;
    c++, (d[c] = { html: e, pos: n }), d.splice(c + 1);
    c > 300 && ((c = 300), d.splice(0, 1));
  }
  function v(t, e) {
    const n = [];
    t.firstChild && n.push(t.firstChild);
    let o = n.pop();
    for (; o && "stop" !== e(o); )
      o.nextSibling && n.push(o.nextSibling),
        o.firstChild && n.push(o.firstChild),
        (o = n.pop());
  }
  function O(t) {
    return t.metaKey || t.ctrlKey;
  }
  function M(t) {
    return O(t) && !t.shiftKey && "Z" === S(t);
  }
  function D(t) {
    return O(t) && t.shiftKey && "Z" === S(t);
  }
  function S(t) {
    let e = t.key || t.keyCode || t.which;
    if (e)
      return ("string" == typeof e ? e : String.fromCharCode(e)).toUpperCase();
  }
  function L(t) {
    (t = t
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")),
      i.execCommand("insertHTML", !1, t);
  }
  function A(t, e) {
    let n = 0;
    return (...o) => {
      clearTimeout(n), (n = r.setTimeout(() => t(...o), e));
    };
  }
  function _(t) {
    let e = t.length - 1;
    for (; e >= 0 && "\n" !== t[e]; ) e--;
    e++;
    let n = e;
    for (; n < t.length && /[ \t]/.test(t[n]); ) n++;
    return [t.substring(e, n) || "", e, n];
  }
  function B() {
    return t.textContent || "";
  }
  function H(t) {
    t.preventDefault();
  }
  function K() {
    return t.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE
      ? t.parentNode.getSelection()
      : r.getSelection();
  }
  return (
    T("keydown", e => {
      e.defaultPrevented ||
        ((a = B()),
        o.preserveIdent
          ? (function (t) {
              if ("Enter" === t.key) {
                const e = b(),
                  n = x();
                let [r] = _(e),
                  i = r;
                if (
                  (o.indentOn.test(e) && (i += o.tab),
                  i.length > 0
                    ? (H(t), t.stopPropagation(), L("\n" + i))
                    : w(t),
                  i !== r && o.moveToNewLine.test(n))
                ) {
                  const t = C();
                  L("\n" + r), E(t);
                }
              }
            })(e)
          : w(e),
        o.catchTab &&
          (function (t) {
            if ("Tab" === t.key)
              if ((H(t), t.shiftKey)) {
                const t = b();
                let [e, n] = _(t);
                if (e.length > 0) {
                  const t = C(),
                    r = Math.min(o.tab.length, e.length);
                  E({ start: n, end: n + r }),
                    i.execCommand("delete"),
                    (t.start -= r),
                    (t.end -= r),
                    E(t);
                }
              } else L(o.tab);
          })(e),
        o.addClosing &&
          (function (t) {
            const e = "([{'\"",
              n = ")]}'\"";
            if (e.includes(t.key)) {
              H(t);
              const o = C(),
                r = o.start == o.end ? "" : K().toString();
              L(t.key + r + n[e.indexOf(t.key)]), o.start++, o.end++, E(o);
            }
          })(e),
        o.history &&
          (!(function (e) {
            if (M(e)) {
              H(e), c--;
              const n = d[c];
              n && ((t.innerHTML = n.html), E(n.pos)), c < 0 && (c = 0);
            }
            if (D(e)) {
              H(e), c++;
              const n = d[c];
              n && ((t.innerHTML = n.html), E(n.pos)), c >= d.length && c--;
            }
          })(e),
          y(e) && !g && (k(), (g = !0))),
        p &&
          !(function (t) {
            return O(t) && "C" === S(t);
          })(e) &&
          E(C()));
    }),
    T("keyup", t => {
      t.defaultPrevented || t.isComposing || (a !== B() && h(), N(t), f(B()));
    }),
    T("focus", t => {
      l = !0;
    }),
    T("blur", t => {
      l = !1;
    }),
    T("paste", e => {
      k(),
        (function (e) {
          if (e.defaultPrevented) return;
          H(e);
          const n = e.originalEvent ?? e,
            o = n.clipboardData.getData("text/plain").replace(/\r\n?/g, "\n"),
            r = C();
          L(o),
            u(t),
            E({
              start: Math.min(r.start, r.end) + o.length,
              end: Math.min(r.start, r.end) + o.length,
              dir: "<-",
            });
        })(e),
        k(),
        f(B());
    }),
    T("cut", e => {
      k(),
        (function (e) {
          const n = C(),
            o = K(),
            r = e.originalEvent ?? e;
          r.clipboardData.setData("text/plain", o.toString()),
            i.execCommand("delete"),
            u(t),
            E({
              start: Math.min(n.start, n.end),
              end: Math.min(n.start, n.end),
              dir: "<-",
            }),
            H(e);
        })(e),
        k(),
        f(B());
    }),
    {
      updateOptions(t) {
        Object.assign(o, t);
      },
      updateCode(e) {
        (t.textContent = e), u(t), f(e);
      },
      onUpdate(t) {
        f = t;
      },
      toString: B,
      save: C,
      restore: E,
      recordHistory: k,
      destroy() {
        for (let [e, n] of s) t.removeEventListener(e, n);
      },
    }
  );
}
