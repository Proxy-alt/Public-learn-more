function v() {}
const rt = t => t;
function st(t, e) {
    for (const n in e)
        t[n] = e[n];
    return t
}
function Q(t) {
    return t()
}
function T() {
    return Object.create(null)
}
function E(t) {
    t.forEach(Q)
}
function L(t) {
    return typeof t == "function"
}
function Ft(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}
function ot(t) {
    return Object.keys(t).length === 0
}
function lt(t, ...e) {
    if (t == null) {
        for (const i of e)
            i(void 0);
        return v
    }
    const n = t.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n
}
function Lt(t, e, n) {
    t.$$.on_destroy.push(lt(e, n))
}
function qt(t, e, n, i) {
    if (t) {
        const o = U(t, e, n, i);
        return t[0](o)
    }
}
function U(t, e, n, i) {
    return t[1] && i ? st(n.ctx.slice(), t[1](i(e))) : n.ctx
}
function Ht(t, e, n, i) {
    if (t[2] && i) {
        const o = t[2](i(n));
        if (e.dirty === void 0)
            return o;
        if (typeof o == "object") {
            const u = []
              , s = Math.max(e.dirty.length, o.length);
            for (let r = 0; r < s; r += 1)
                u[r] = e.dirty[r] | o[r];
            return u
        }
        return e.dirty | o
    }
    return e.dirty
}
function Tt(t, e, n, i, o, u) {
    if (o) {
        const s = U(e, n, i, u);
        t.p(s, o)
    }
}
function Gt(t) {
    if (t.ctx.length > 32) {
        const e = []
          , n = t.ctx.length / 32;
        for (let i = 0; i < n; i++)
            e[i] = -1;
        return e
    }
    return -1
}
function Jt(t) {
    const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"]
}
const V = typeof window < "u";
let ct = V ? () => window.performance.now() : () => Date.now()
  , q = V ? t => requestAnimationFrame(t) : v;
const b = new Set;
function W(t) {
    b.forEach(e => {
        e.c(t) || (b.delete(e),
        e.f())
    }
    ),
    b.size !== 0 && q(W)
}
function ut(t) {
    let e;
    return b.size === 0 && q(W),
    {
        promise: new Promise(n => {
            b.add(e = {
                c: t,
                f: n
            })
        }
        ),
        abort() {
            b.delete(e)
        }
    }
}
let P = !1;
function at() {
    P = !0
}
function ft() {
    P = !1
}
function _t(t, e, n, i) {
    for (; t < e; ) {
        const o = t + (e - t >> 1);
        n(o) <= i ? t = o + 1 : e = o
    }
    return t
}
function dt(t) {
    if (t.hydrate_init)
        return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
        const l = [];
        for (let c = 0; c < e.length; c++) {
            const _ = e[c];
            _.claim_order !== void 0 && l.push(_)
        }
        e = l
    }
    const n = new Int32Array(e.length + 1)
      , i = new Int32Array(e.length);
    n[0] = -1;
    let o = 0;
    for (let l = 0; l < e.length; l++) {
        const c = e[l].claim_order
          , _ = (o > 0 && e[n[o]].claim_order <= c ? o + 1 : _t(1, o, h => e[n[h]].claim_order, c)) - 1;
        i[l] = n[_] + 1;
        const a = _ + 1;
        n[a] = l,
        o = Math.max(a, o)
    }
    const u = []
      , s = [];
    let r = e.length - 1;
    for (let l = n[o] + 1; l != 0; l = i[l - 1]) {
        for (u.push(e[l - 1]); r >= l; r--)
            s.push(e[r]);
        r--
    }
    for (; r >= 0; r--)
        s.push(e[r]);
    u.reverse(),
    s.sort( (l, c) => l.claim_order - c.claim_order);
    for (let l = 0, c = 0; l < s.length; l++) {
        for (; c < u.length && s[l].claim_order >= u[c].claim_order; )
            c++;
        const _ = c < u.length ? u[c] : null;
        t.insertBefore(s[l], _)
    }
}
function ht(t, e) {
    t.appendChild(e)
}
function X(t) {
    if (!t)
        return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument
}
function mt(t) {
    const e = Z("style");
    return e.textContent = "/* empty */",
    pt(X(t), e),
    e.sheet
}
function pt(t, e) {
    return ht(t.head || t, e),
    e.sheet
}
function yt(t, e) {
    if (P) {
        for (dt(t),
        (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
            t.actual_end_child = t.actual_end_child.nextSibling;
        e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling
    } else
        (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}
function Kt(t, e, n) {
    P && !n ? yt(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}
function Y(t) {
    t.parentNode && t.parentNode.removeChild(t)
}
function Qt(t, e) {
    for (let n = 0; n < t.length; n += 1)
        t[n] && t[n].d(e)
}
function Z(t) {
    return document.createElement(t)
}
function gt(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}
function H(t) {
    return document.createTextNode(t)
}
function Ut() {
    return H(" ")
}
function Vt() {
    return H("")
}
function Wt(t, e, n, i) {
    return t.addEventListener(e, n, i),
    () => t.removeEventListener(e, n, i)
}
function Xt(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function Yt(t) {
    return t.dataset.svelteH
}
function xt(t) {
    return Array.from(t.childNodes)
}
function $t(t) {
    t.claim_info === void 0 && (t.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}
function tt(t, e, n, i, o=!1) {
    $t(t);
    const u = ( () => {
        for (let s = t.claim_info.last_index; s < t.length; s++) {
            const r = t[s];
            if (e(r)) {
                const l = n(r);
                return l === void 0 ? t.splice(s, 1) : t[s] = l,
                o || (t.claim_info.last_index = s),
                r
            }
        }
        for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
            const r = t[s];
            if (e(r)) {
                const l = n(r);
                return l === void 0 ? t.splice(s, 1) : t[s] = l,
                o ? l === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = s,
                r
            }
        }
        return i()
    }
    )();
    return u.claim_order = t.claim_info.total_claimed,
    t.claim_info.total_claimed += 1,
    u
}
function et(t, e, n, i) {
    return tt(t, o => o.nodeName === e, o => {
        const u = [];
        for (let s = 0; s < o.attributes.length; s++) {
            const r = o.attributes[s];
            n[r.name] || u.push(r.name)
        }
        u.forEach(s => o.removeAttribute(s))
    }
    , () => i(e))
}
function Zt(t, e, n) {
    return et(t, e, n, Z)
}
function te(t, e, n) {
    return et(t, e, n, gt)
}
function bt(t, e) {
    return tt(t, n => n.nodeType === 3, n => {
        const i = "" + e;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length)
                return n.splitText(i.length)
        } else
            n.data = i
    }
    , () => H(e), !0)
}
function ee(t) {
    return bt(t, " ")
}
function ne(t, e) {
    e = "" + e,
    t.data !== e && (t.data = e)
}
function ie(t, e) {
    t.value = e ?? ""
}
function re(t, e, n, i) {
    n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "")
}
function wt(t, e, {bubbles: n=!1, cancelable: i=!1}={}) {
    return new CustomEvent(t,{
        detail: e,
        bubbles: n,
        cancelable: i
    })
}
const k = new Map;
let O = 0;
function vt(t) {
    let e = 5381
      , n = t.length;
    for (; n--; )
        e = (e << 5) - e ^ t.charCodeAt(n);
    return e >>> 0
}
function Et(t, e) {
    const n = {
        stylesheet: mt(e),
        rules: {}
    };
    return k.set(t, n),
    n
}
function G(t, e, n, i, o, u, s, r=0) {
    const l = 16.666 / i;
    let c = `{
`;
    for (let d = 0; d <= 1; d += l) {
        const g = e + (n - e) * u(d);
        c += d * 100 + `%{${s(g, 1 - g)}}
`
    }
    const _ = c + `100% {${s(n, 1 - n)}}
}`
      , a = `__svelte_${vt(_)}_${r}`
      , h = X(t)
      , {stylesheet: y, rules: f} = k.get(h) || Et(h, t);
    f[a] || (f[a] = !0,
    y.insertRule(`@keyframes ${a} ${_}`, y.cssRules.length));
    const m = t.style.animation || "";
    return t.style.animation = `${m ? `${m}, ` : ""}${a} ${i}ms linear ${o}ms 1 both`,
    O += 1,
    a
}
function Nt(t, e) {
    const n = (t.style.animation || "").split(", ")
      , i = n.filter(e ? u => u.indexOf(e) < 0 : u => u.indexOf("__svelte") === -1)
      , o = n.length - i.length;
    o && (t.style.animation = i.join(", "),
    O -= o,
    O || St())
}
function St() {
    q( () => {
        O || (k.forEach(t => {
            const {ownerNode: e} = t.stylesheet;
            e && Y(e)
        }
        ),
        k.clear())
    }
    )
}
let A;
function S(t) {
    A = t
}
function At() {
    if (!A)
        throw new Error("Function called outside component initialization");
    return A
}
function se(t) {
    At().$$.on_mount.push(t)
}
const $ = []
  , J = [];
let w = [];
const K = []
  , Ct = Promise.resolve();
let F = !1;
function jt() {
    F || (F = !0,
    Ct.then(nt))
}
function M(t) {
    w.push(t)
}
const R = new Set;
let x = 0;
function nt() {
    if (x !== 0)
        return;
    const t = A;
    do {
        try {
            for (; x < $.length; ) {
                const e = $[x];
                x++,
                S(e),
                kt(e.$$)
            }
        } catch (e) {
            throw $.length = 0,
            x = 0,
            e
        }
        for (S(null),
        $.length = 0,
        x = 0; J.length; )
            J.pop()();
        for (let e = 0; e < w.length; e += 1) {
            const n = w[e];
            R.has(n) || (R.add(n),
            n())
        }
        w.length = 0
    } while ($.length);
    for (; K.length; )
        K.pop()();
    F = !1,
    R.clear(),
    S(t)
}
function kt(t) {
    if (t.fragment !== null) {
        t.update(),
        E(t.before_update);
        const e = t.dirty;
        t.dirty = [-1],
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(M)
    }
}
function Ot(t) {
    const e = []
      , n = [];
    w.forEach(i => t.indexOf(i) === -1 ? e.push(i) : n.push(i)),
    n.forEach(i => i()),
    w = e
}
let N;
function Mt() {
    return N || (N = Promise.resolve(),
    N.then( () => {
        N = null
    }
    )),
    N
}
function z(t, e, n) {
    t.dispatchEvent(wt(`${e ? "intro" : "outro"}${n}`))
}
const j = new Set;
let p;
function oe() {
    p = {
        r: 0,
        c: [],
        p
    }
}
function le() {
    p.r || E(p.c),
    p = p.p
}
function Pt(t, e) {
    t && t.i && (j.delete(t),
    t.i(e))
}
function ce(t, e, n, i) {
    if (t && t.o) {
        if (j.has(t))
            return;
        j.add(t),
        p.c.push( () => {
            j.delete(t),
            i && (n && t.d(1),
            i())
        }
        ),
        t.o(e)
    } else
        i && i()
}
const Bt = {
    duration: 0
};
function ue(t, e, n, i) {
    let u = e(t, n, {
        direction: "both"
    }), s = i ? 0 : 1, r = null, l = null, c = null, _;
    function a() {
        c && Nt(t, c)
    }
    function h(f, m) {
        const d = f.b - s;
        return m *= Math.abs(d),
        {
            a: s,
            b: f.b,
            d,
            duration: m,
            start: f.start,
            end: f.start + m,
            group: f.group
        }
    }
    function y(f) {
        const {delay: m=0, duration: d=300, easing: g=rt, tick: B=v, css: D} = u || Bt
          , I = {
            start: ct() + m,
            b: f
        };
        f || (I.group = p,
        p.r += 1),
        "inert"in t && (f ? _ !== void 0 && (t.inert = _) : (_ = t.inert,
        t.inert = !0)),
        r || l ? l = I : (D && (a(),
        c = G(t, s, f, d, m, g, D)),
        f && B(0, 1),
        r = h(I, d),
        M( () => z(t, f, "start")),
        ut(C => {
            if (l && C > l.start && (r = h(l, d),
            l = null,
            z(t, r.b, "start"),
            D && (a(),
            c = G(t, s, r.b, r.duration, 0, g, u.css))),
            r) {
                if (C >= r.end)
                    B(s = r.b, 1 - s),
                    z(t, r.b, "end"),
                    l || (r.b ? a() : --r.group.r || E(r.group.c)),
                    r = null;
                else if (C >= r.start) {
                    const it = C - r.start;
                    s = r.a + r.d * g(it / r.duration),
                    B(s, 1 - s)
                }
            }
            return !!(r || l)
        }
        ))
    }
    return {
        run(f) {
            L(u) ? Mt().then( () => {
                u = u({
                    direction: f ? "in" : "out"
                }),
                y(f)
            }
            ) : y(f)
        },
        end() {
            a(),
            r = l = null
        }
    }
}
function ae(t) {
    t && t.c()
}
function fe(t, e) {
    t && t.l(e)
}
function Dt(t, e, n) {
    const {fragment: i, after_update: o} = t.$$;
    i && i.m(e, n),
    M( () => {
        const u = t.$$.on_mount.map(Q).filter(L);
        t.$$.on_destroy ? t.$$.on_destroy.push(...u) : E(u),
        t.$$.on_mount = []
    }
    ),
    o.forEach(M)
}
function It(t, e) {
    const n = t.$$;
    n.fragment !== null && (Ot(n.after_update),
    E(n.on_destroy),
    n.fragment && n.fragment.d(e),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function Rt(t, e) {
    t.$$.dirty[0] === -1 && ($.push(t),
    jt(),
    t.$$.dirty.fill(0)),
    t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}
function _e(t, e, n, i, o, u, s=null, r=[-1]) {
    const l = A;
    S(t);
    const c = t.$$ = {
        fragment: null,
        ctx: [],
        props: u,
        update: v,
        not_equal: o,
        bound: T(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (l ? l.$$.context : [])),
        callbacks: T(),
        dirty: r,
        skip_bound: !1,
        root: e.target || l.$$.root
    };
    s && s(c.root);
    let _ = !1;
    if (c.ctx = n ? n(t, e.props || {}, (a, h, ...y) => {
        const f = y.length ? y[0] : h;
        return c.ctx && o(c.ctx[a], c.ctx[a] = f) && (!c.skip_bound && c.bound[a] && c.bound[a](f),
        _ && Rt(t, a)),
        h
    }
    ) : [],
    c.update(),
    _ = !0,
    E(c.before_update),
    c.fragment = i ? i(c.ctx) : !1,
    e.target) {
        if (e.hydrate) {
            at();
            const a = xt(e.target);
            c.fragment && c.fragment.l(a),
            a.forEach(Y)
        } else
            c.fragment && c.fragment.c();
        e.intro && Pt(t.$$.fragment),
        Dt(t, e.target, e.anchor),
        ft(),
        nt()
    }
    S(l)
}
class de {
    $$ = void 0;
    $$set = void 0;
    $destroy() {
        It(this, 1),
        this.$destroy = v
    }
    $on(e, n) {
        if (!L(n))
            return v;
        const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return i.push(n),
        () => {
            const o = i.indexOf(n);
            o !== -1 && i.splice(o, 1)
        }
    }
    $set(e) {
        this.$$set && !ot(e) && (this.$$.skip_bound = !0,
        this.$$set(e),
        this.$$.skip_bound = !1)
    }
}
const zt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(zt);
export {Dt as A, It as B, Ut as C, gt as D, ee as E, te as F, Jt as G, rt as H, qt as I, Tt as J, Gt as K, Ht as L, Vt as M, Qt as N, ie as O, Lt as P, E as Q, de as S, xt as a, bt as b, Zt as c, Y as d, Z as e, Xt as f, Kt as g, yt as h, _e as i, ne as j, re as k, Wt as l, ce as m, v as n, se as o, le as p, Pt as q, oe as r, Ft as s, H as t, J as u, Yt as v, M as w, ue as x, ae as y, fe as z};
