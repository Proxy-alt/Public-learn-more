import {S as F, i as G, s as J, e as $, t as M, C as B, M as H, c as E, a as w, b as T, d as p, E as C, f as _, g as I, h as k, j as Q, n as U, N as me, y as K, z as X, v as pe, A as Y, O as se, l as W, r as Z, m as P, p as x, q as S, B as ee, o as ve, u as ge, P as be, w as re, x as j, Q as ke} from "./index.PlGM3qdX.js";
import {f as ne, a as ie} from "./index.OxSPS48v.js";
import {S as $e, i as ae} from "./SearchIcon.vorF_Jl1.js";
/* empty css                        */
import "./SvgIcon.bGyGd6Ep.js";
function q(i) {
    return i?.length !== void 0 ? i : Array.from(i)
}
const Ee = "modulepreload"
  , ye = function(i) {
    return "/" + i
}
  , oe = {}
  , we = function(e, r, l) {
    let t = Promise.resolve();
    if (r && r.length > 0) {
        const n = document.getElementsByTagName("link");
        t = Promise.all(r.map(s => {
            if (s = ye(s),
            s in oe)
                return;
            oe[s] = !0;
            const a = s.endsWith(".css")
              , c = a ? '[rel="stylesheet"]' : "";
            if (!!l)
                for (let f = n.length - 1; f >= 0; f--) {
                    const d = n[f];
                    if (d.href === s && (!a || d.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${s}"]${c}`))
                return;
            const h = document.createElement("link");
            if (h.rel = a ? "stylesheet" : Ee,
            a || (h.as = "script",
            h.crossOrigin = ""),
            h.href = s,
            document.head.appendChild(h),
            a)
                return new Promise( (f, d) => {
                    h.addEventListener("load", f),
                    h.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${s}`)))
                }
                )
        }
        ))
    }
    return t.then( () => e()).catch(n => {
        const s = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (s.payload = n,
        window.dispatchEvent(s),
        !s.defaultPrevented)
            throw n
    }
    )
};
function ce(i, e, r) {
    const l = i.slice();
    return l[2] = e[r],
    l
}
function fe(i) {
    let e, r = i[2] + "", l, t, n;
    return {
        c() {
            e = $("a"),
            l = M(r),
            this.h()
        },
        l(s) {
            e = E(s, "A", {
                class: !0,
                href: !0,
                title: !0
            });
            var a = w(e);
            l = T(a, r),
            a.forEach(p),
            this.h()
        },
        h() {
            _(e, "class", "tag svelte-ofkg9t"),
            _(e, "href", t = `/tags/${i[2]}`),
            _(e, "title", n = i[2])
        },
        m(s, a) {
            I(s, e, a),
            k(e, l)
        },
        p(s, a) {
            a & 1 && r !== (r = s[2] + "") && Q(l, r),
            a & 1 && t !== (t = `/tags/${s[2]}`) && _(e, "href", t),
            a & 1 && n !== (n = s[2]) && _(e, "title", n)
        },
        d(s) {
            s && p(e)
        }
    }
}
function ue(i) {
    let e;
    return {
        c() {
            e = $("hr"),
            this.h()
        },
        l(r) {
            e = E(r, "HR", {
                class: !0
            }),
            this.h()
        },
        h() {
            _(e, "class", "my-4 text-theme-dark-secondary")
        },
        m(r, l) {
            I(r, e, l)
        },
        d(r) {
            r && p(e)
        }
    }
}
function Ie(i) {
    let e, r, l, t, n = i[0].title + "", s, a, c, v, h, f, d = i[0].description + "", V, N, L, A, D, y = q(i[0].tags), b = [];
    for (let o = 0; o < y.length; o += 1)
        b[o] = fe(ce(i, y, o));
    let u = !i[1] && ue();
    return {
        c() {
            e = $("div"),
            r = $("div"),
            l = $("h4"),
            t = $("a"),
            s = M(n),
            a = M(" →"),
            h = B(),
            f = $("p"),
            V = M(d),
            N = B(),
            L = $("ul");
            for (let o = 0; o < b.length; o += 1)
                b[o].c();
            A = B(),
            u && u.c(),
            D = H(),
            this.h()
        },
        l(o) {
            e = E(o, "DIV", {
                class: !0
            });
            var g = w(e);
            r = E(g, "DIV", {
                class: !0
            });
            var m = w(r);
            l = E(m, "H4", {
                class: !0
            });
            var R = w(l);
            t = E(R, "A", {
                href: !0,
                title: !0
            });
            var O = w(t);
            s = T(O, n),
            a = T(O, " →"),
            O.forEach(p),
            R.forEach(p),
            h = C(m),
            f = E(m, "P", {
                class: !0
            });
            var te = w(f);
            V = T(te, d),
            te.forEach(p),
            N = C(m),
            L = E(m, "UL", {
                class: !0
            });
            var le = w(L);
            for (let z = 0; z < b.length; z += 1)
                b[z].l(le);
            le.forEach(p),
            m.forEach(p),
            g.forEach(p),
            A = C(o),
            u && u.l(o),
            D = H(),
            this.h()
        },
        h() {
            _(t, "href", c = `/${i[0].category}/${i[0].slug}`),
            _(t, "title", v = i[0].title),
            _(l, "class", "post-preview__title svelte-ofkg9t"),
            _(f, "class", "post-preview__desc svelte-ofkg9t"),
            _(L, "class", "tag-list svelte-ofkg9t"),
            _(r, "class", "flex-1"),
            _(e, "class", "post-preview hover:bg-theme-primary svelte-ofkg9t")
        },
        m(o, g) {
            I(o, e, g),
            k(e, r),
            k(r, l),
            k(l, t),
            k(t, s),
            k(t, a),
            k(r, h),
            k(r, f),
            k(f, V),
            k(r, N),
            k(r, L);
            for (let m = 0; m < b.length; m += 1)
                b[m] && b[m].m(L, null);
            I(o, A, g),
            u && u.m(o, g),
            I(o, D, g)
        },
        p(o, [g]) {
            if (g & 1 && n !== (n = o[0].title + "") && Q(s, n),
            g & 1 && c !== (c = `/${o[0].category}/${o[0].slug}`) && _(t, "href", c),
            g & 1 && v !== (v = o[0].title) && _(t, "title", v),
            g & 1 && d !== (d = o[0].description + "") && Q(V, d),
            g & 1) {
                y = q(o[0].tags);
                let m;
                for (m = 0; m < y.length; m += 1) {
                    const R = ce(o, y, m);
                    b[m] ? b[m].p(R, g) : (b[m] = fe(R),
                    b[m].c(),
                    b[m].m(L, null))
                }
                for (; m < b.length; m += 1)
                    b[m].d(1);
                b.length = y.length
            }
            o[1] ? u && (u.d(1),
            u = null) : u || (u = ue(),
            u.c(),
            u.m(D.parentNode, D))
        },
        i: U,
        o: U,
        d(o) {
            o && (p(e),
            p(A),
            p(D)),
            me(b, o),
            u && u.d(o)
        }
    }
}
function Le(i, e, r) {
    let {post: l} = e
      , {isLast: t=!1} = e;
    return i.$$set = n => {
        "post"in n && r(0, l = n.post),
        "isLast"in n && r(1, t = n.isLast)
    }
    ,
    [l, t]
}
class Se extends F {
    constructor(e) {
        super(),
        G(this, e, Le, Ie, J, {
            post: 0,
            isLast: 1
        })
    }
}
function he(i, e, r) {
    const l = i.slice();
    return l[7] = e[r],
    l[9] = r,
    l
}
function Ve(i) {
    let e;
    function r(n, s) {
        return n[0].length ? Ne : Pe
    }
    let l = r(i)
      , t = l(i);
    return {
        c() {
            e = $("div"),
            t.c(),
            this.h()
        },
        l(n) {
            e = E(n, "DIV", {
                class: !0
            });
            var s = w(e);
            t.l(s),
            s.forEach(p),
            this.h()
        },
        h() {
            _(e, "class", "search__results--none svelte-ft3h3t")
        },
        m(n, s) {
            I(n, e, s),
            t.m(e, null)
        },
        p(n, s) {
            l !== (l = r(n)) && (t.d(1),
            t = l(n),
            t && (t.c(),
            t.m(e, null)))
        },
        i: U,
        o: U,
        d(n) {
            n && p(e),
            t.d()
        }
    }
}
function De(i) {
    let e, r, l = q(i[1]), t = [];
    for (let s = 0; s < l.length; s += 1)
        t[s] = de(he(i, l, s));
    const n = s => P(t[s], 1, 1, () => {
        t[s] = null
    }
    );
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = H()
        },
        l(s) {
            for (let a = 0; a < t.length; a += 1)
                t[a].l(s);
            e = H()
        },
        m(s, a) {
            for (let c = 0; c < t.length; c += 1)
                t[c] && t[c].m(s, a);
            I(s, e, a),
            r = !0
        },
        p(s, a) {
            if (a & 2) {
                l = q(s[1]);
                let c;
                for (c = 0; c < l.length; c += 1) {
                    const v = he(s, l, c);
                    t[c] ? (t[c].p(v, a),
                    S(t[c], 1)) : (t[c] = de(v),
                    t[c].c(),
                    S(t[c], 1),
                    t[c].m(e.parentNode, e))
                }
                for (Z(),
                c = l.length; c < t.length; c += 1)
                    n(c);
                x()
            }
        },
        i(s) {
            if (!r) {
                for (let a = 0; a < l.length; a += 1)
                    S(t[a]);
                r = !0
            }
        },
        o(s) {
            t = t.filter(Boolean);
            for (let a = 0; a < t.length; a += 1)
                P(t[a]);
            r = !1
        },
        d(s) {
            s && p(e),
            me(t, s)
        }
    }
}
function Pe(i) {
    let e;
    return {
        c() {
            e = M("Search something and let me find it for you! :-)")
        },
        l(r) {
            e = T(r, "Search something and let me find it for you! :-)")
        },
        m(r, l) {
            I(r, e, l)
        },
        d(r) {
            r && p(e)
        }
    }
}
function Ne(i) {
    let e;
    return {
        c() {
            e = M("No matching items found!")
        },
        l(r) {
            e = T(r, "No matching items found!")
        },
        m(r, l) {
            I(r, e, l)
        },
        d(r) {
            r && p(e)
        }
    }
}
function de(i) {
    let e, r;
    return e = new Se({
        props: {
            post: i[7],
            isLast: i[9] === i[1].length - 1
        }
    }),
    {
        c() {
            K(e.$$.fragment)
        },
        l(l) {
            X(e.$$.fragment, l)
        },
        m(l, t) {
            Y(e, l, t),
            r = !0
        },
        p(l, t) {
            const n = {};
            t & 2 && (n.post = l[7]),
            t & 2 && (n.isLast = l[9] === l[1].length - 1),
            e.$set(n)
        },
        i(l) {
            r || (S(e.$$.fragment, l),
            r = !0)
        },
        o(l) {
            P(e.$$.fragment, l),
            r = !1
        },
        d(l) {
            ee(e, l)
        }
    }
}
function Re(i) {
    let e, r, l, t, n, s, a, c, v, h, f, d, V = "<small>click anywhere outside to close</small>", N, L, A;
    t = new $e({
        props: {
            found: i[1].length > 0
        }
    });
    const D = [De, Ve]
      , y = [];
    function b(u, o) {
        return u[1].length ? 0 : 1
    }
    return v = b(i),
    h = y[v] = D[v](i),
    {
        c() {
            e = $("div"),
            r = $("div"),
            l = $("label"),
            K(t.$$.fragment),
            n = B(),
            s = $("input"),
            a = B(),
            c = $("div"),
            h.c(),
            f = B(),
            d = $("div"),
            d.innerHTML = V,
            this.h()
        },
        l(u) {
            e = E(u, "DIV", {
                class: !0
            });
            var o = w(e);
            r = E(o, "DIV", {
                class: !0
            });
            var g = w(r);
            l = E(g, "LABEL", {
                for: !0,
                class: !0
            });
            var m = w(l);
            X(t.$$.fragment, m),
            m.forEach(p),
            n = C(g),
            s = E(g, "INPUT", {
                type: !0,
                name: !0,
                placeholder: !0,
                class: !0
            }),
            g.forEach(p),
            a = C(o),
            c = E(o, "DIV", {
                class: !0
            });
            var R = w(c);
            h.l(R),
            R.forEach(p),
            f = C(o),
            d = E(o, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }),
            pe(d) !== "svelte-fzud3b" && (d.innerHTML = V),
            o.forEach(p),
            this.h()
        },
        h() {
            _(l, "for", "search"),
            _(l, "class", "svelte-ft3h3t"),
            _(s, "type", "text"),
            _(s, "name", "search"),
            _(s, "placeholder", "What are you looking for?"),
            _(s, "class", "svelte-ft3h3t"),
            _(r, "class", "search__ctrl svelte-ft3h3t"),
            _(c, "class", "search__results svelte-ft3h3t"),
            _(d, "class", "note svelte-ft3h3t"),
            _(e, "class", "search svelte-ft3h3t")
        },
        m(u, o) {
            I(u, e, o),
            k(e, r),
            k(r, l),
            Y(t, l, null),
            k(r, n),
            k(r, s),
            i[5](s),
            se(s, i[0]),
            k(e, a),
            k(e, c),
            y[v].m(c, null),
            k(e, f),
            k(e, d),
            N = !0,
            L || (A = W(s, "input", i[6]),
            L = !0)
        },
        p(u, [o]) {
            const g = {};
            o & 2 && (g.found = u[1].length > 0),
            t.$set(g),
            o & 1 && s.value !== u[0] && se(s, u[0]);
            let m = v;
            v = b(u),
            v === m ? y[v].p(u, o) : (Z(),
            P(y[m], 1, 1, () => {
                y[m] = null
            }
            ),
            x(),
            h = y[v],
            h ? h.p(u, o) : (h = y[v] = D[v](u),
            h.c()),
            S(h, 1),
            h.m(c, null))
        },
        i(u) {
            N || (S(t.$$.fragment, u),
            S(h),
            N = !0)
        },
        o(u) {
            P(t.$$.fragment, u),
            P(h),
            N = !1
        },
        d(u) {
            u && p(e),
            ee(t),
            i[5](null),
            y[v].d(),
            L = !1,
            A()
        }
    }
}
function Ae(i, e, r) {
    let l, t, n, s = "", a = [];
    ve(async () => {
        const h = (await we( () => import("./lunr.8J99-g7N.js").then(d => d.l), __vite__mapDeps([]))).default
          , f = await fetch("/search-index.json");
        r(3, t = await f.json()),
        r(4, n = h(function() {
            this.ref("slug"),
            this.field("title"),
            this.field("description"),
            this.field("tags"),
            this.field("body"),
            t.forEach(d => {
                this.add(d)
            }
            , this)
        })),
        l.focus()
    }
    );
    function c(h) {
        ge[h ? "unshift" : "push"]( () => {
            l = h,
            r(2, l)
        }
        )
    }
    function v() {
        s = this.value,
        r(0, s)
    }
    return i.$$.update = () => {
        if (i.$$.dirty & 27 && s && s.length >= 3) {
            const h = n.search(s);
            r(1, a = []),
            h.map(f => {
                t.filter(d => {
                    f.ref === d.slug && a.push(d)
                }
                )
            }
            )
        }
    }
    ,
    [s, a, l, t, n, c, v]
}
class Be extends F {
    constructor(e) {
        super(),
        G(this, e, Ae, Re, J, {})
    }
}
function _e(i) {
    let e, r, l, t, n, s, a, c, v, h;
    return s = new Be({}),
    {
        c() {
            e = $("div"),
            l = B(),
            t = $("div"),
            n = $("div"),
            K(s.$$.fragment),
            this.h()
        },
        l(f) {
            e = E(f, "DIV", {
                class: !0,
                role: !0,
                tabindex: !0
            }),
            w(e).forEach(p),
            l = C(f),
            t = E(f, "DIV", {
                class: !0,
                role: !0
            });
            var d = w(t);
            n = E(d, "DIV", {
                class: !0
            });
            var V = w(n);
            X(s.$$.fragment, V),
            V.forEach(p),
            d.forEach(p),
            this.h()
        },
        h() {
            _(e, "class", "modal__backdrop svelte-gud11r"),
            _(e, "role", "button"),
            _(e, "tabindex", "0"),
            _(n, "class", "modal__cnt svelte-gud11r"),
            _(t, "class", "modal svelte-gud11r"),
            _(t, "role", "dialog")
        },
        m(f, d) {
            I(f, e, d),
            I(f, l, d),
            I(f, t, d),
            k(t, n),
            Y(s, n, null),
            c = !0,
            v || (h = [W(e, "click", i[1]), W(e, "keydown", i[2])],
            v = !0)
        },
        p: U,
        i(f) {
            c || (f && re( () => {
                c && (r || (r = j(e, ne, {}, !0)),
                r.run(1))
            }
            ),
            S(s.$$.fragment, f),
            f && re( () => {
                c && (a || (a = j(n, ie, {
                    y: 200,
                    duration: 300
                }, !0)),
                a.run(1))
            }
            ),
            c = !0)
        },
        o(f) {
            f && (r || (r = j(e, ne, {}, !1)),
            r.run(0)),
            P(s.$$.fragment, f),
            f && (a || (a = j(n, ie, {
                y: 200,
                duration: 300
            }, !1)),
            a.run(0)),
            c = !1
        },
        d(f) {
            f && (p(e),
            p(l),
            p(t)),
            f && r && r.end(),
            ee(s),
            f && a && a.end(),
            v = !1,
            ke(h)
        }
    }
}
function Ce(i) {
    let e, r, l = i[0] && _e(i);
    return {
        c() {
            l && l.c(),
            e = H()
        },
        l(t) {
            l && l.l(t),
            e = H()
        },
        m(t, n) {
            l && l.m(t, n),
            I(t, e, n),
            r = !0
        },
        p(t, [n]) {
            t[0] ? l ? (l.p(t, n),
            n & 1 && S(l, 1)) : (l = _e(t),
            l.c(),
            S(l, 1),
            l.m(e.parentNode, e)) : l && (Z(),
            P(l, 1, 1, () => {
                l = null
            }
            ),
            x())
        },
        i(t) {
            r || (S(l),
            r = !0)
        },
        o(t) {
            P(l),
            r = !1
        },
        d(t) {
            t && p(e),
            l && l.d(t)
        }
    }
}
function Me(i, e, r) {
    let l;
    be(i, ae, s => r(0, l = s));
    const t = () => ae.set(!1);
    return [l, t, s => {
        s.key === "Escape" && t()
    }
    ]
}
class Oe extends F {
    constructor(e) {
        super(),
        G(this, e, Me, Ce, J, {})
    }
}
export {Oe as default};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = []
    }
    return indexes.map( (i) => __vite__mapDeps.viteFileDeps[i])
}
