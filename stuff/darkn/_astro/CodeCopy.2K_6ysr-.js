import {S as T, i as P, s as N, e as m, c as b, a as O, d, f as S, k as p, g as y, l as v, m as k, p as I, q as C, o as q, r as w, u as M, v as x, w as g, x as _} from "./index.PlGM3qdX.js";
import {f as h, b as E} from "./index.OxSPS48v.js";
function U(l) {
    let e, s = "Copy", t, o;
    return {
        c() {
            e = m("span"),
            e.textContent = s
        },
        l(n) {
            e = b(n, "SPAN", {
                "data-svelte-h": !0
            }),
            x(e) !== "svelte-166m88g" && (e.textContent = s)
        },
        m(n, i) {
            y(n, e, i),
            o = !0
        },
        i(n) {
            o || (n && g( () => {
                o && (t || (t = _(e, h, {}, !0)),
                t.run(1))
            }
            ),
            o = !0)
        },
        o(n) {
            n && (t || (t = _(e, h, {}, !1)),
            t.run(0)),
            o = !1
        },
        d(n) {
            n && d(e),
            n && t && t.end()
        }
    }
}
function A(l) {
    let e, s = "✓Copied", t, o;
    return {
        c() {
            e = m("span"),
            e.textContent = s
        },
        l(n) {
            e = b(n, "SPAN", {
                "data-svelte-h": !0
            }),
            x(e) !== "svelte-1hkyy5" && (e.textContent = s)
        },
        m(n, i) {
            y(n, e, i),
            o = !0
        },
        i(n) {
            o || (n && g( () => {
                o && (t || (t = _(e, E, {
                    amount: 50,
                    opacity: 50
                }, !0)),
                t.run(1))
            }
            ),
            o = !0)
        },
        o(n) {
            n && (t || (t = _(e, E, {
                amount: 50,
                opacity: 50
            }, !1)),
            t.run(0)),
            o = !1
        },
        d(n) {
            n && d(e),
            n && t && t.end()
        }
    }
}
function B(l) {
    let e, s, t, o, n;
    const i = [A, U]
      , u = [];
    function f(a, r) {
        return a[0] ? 0 : 1
    }
    return s = f(l),
    t = u[s] = i[s](l),
    {
        c() {
            e = m("button"),
            t.c(),
            this.h()
        },
        l(a) {
            e = b(a, "BUTTON", {
                class: !0,
                style: !0
            });
            var r = O(e);
            t.l(r),
            r.forEach(d),
            this.h()
        },
        h() {
            S(e, "class", "absolute px-2 text-theme-primary dark:text-theme-dark-primary border-1 rounded-lg"),
            p(e, "top", "6px"),
            p(e, "right", "8px"),
            e.disabled = l[0],
            p(e, "display", l[2] ? "inline-block" : "none")
        },
        m(a, r) {
            y(a, e, r),
            u[s].m(e, null),
            l[5](e),
            o || (n = v(e, "click", l[3]),
            o = !0)
        },
        p(a, [r]) {
            let c = s;
            s = f(a),
            s !== c && (w(),
            k(u[c], 1, 1, () => {
                u[c] = null
            }
            ),
            I(),
            t = u[s],
            t || (t = u[s] = i[s](a),
            t.c()),
            C(t, 1),
            t.m(e, null)),
            r & 1 && (e.disabled = a[0]),
            r & 4 && p(e, "display", a[2] ? "inline-block" : "none")
        },
        i(a) {
            C(t)
        },
        o(a) {
            k(t)
        },
        d(a) {
            a && d(e),
            u[s].d(),
            l[5](null),
            o = !1,
            n()
        }
    }
}
function D(l, e, s) {
    let {stayCopied: o=2e3} = e, n = !1, i, u = !0;
    const f = async () => {
        if (i) {
            const r = i.parentElement?.parentElement
              , c = r?.querySelector("code");
            r?.tagName === "PRE" && c && (await navigator.clipboard.writeText(c.innerText),
            s(0, n = !0),
            setTimeout( () => {
                s(0, n = !1)
            }
            , o))
        }
    }
    ;
    q( () => {
        const r = i.parentElement?.parentElement;
        r && r.tagName === "PRE" ? s(2, u = !0) : s(2, u = !1)
    }
    );
    function a(r) {
        M[r ? "unshift" : "push"]( () => {
            i = r,
            s(1, i)
        }
        )
    }
    return l.$$set = r => {
        "stayCopied"in r && s(4, o = r.stayCopied)
    }
    ,
    [n, i, u, f, o, a]
}
class z extends T {
    constructor(e) {
        super(),
        P(this, e, D, B, N, {
            stayCopied: 4
        })
    }
}
export {z as default};
