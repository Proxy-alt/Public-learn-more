const Q = "astro:before-preparation"
  , Z = "astro:after-preparation"
  , ee = "astro:before-swap"
  , te = "astro:after-swap"
  , ne = e => document.dispatchEvent(new Event(e));
class q extends Event {
    from;
    to;
    direction;
    navigationType;
    sourceElement;
    info;
    newDocument;
    constructor(t, n, o, r, a, u, f, i, m) {
        super(t, n),
        this.from = o,
        this.to = r,
        this.direction = a,
        this.navigationType = u,
        this.sourceElement = f,
        this.info = i,
        this.newDocument = m,
        Object.defineProperties(this, {
            from: {
                enumerable: !0
            },
            to: {
                enumerable: !0,
                writable: !0
            },
            direction: {
                enumerable: !0,
                writable: !0
            },
            navigationType: {
                enumerable: !0
            },
            sourceElement: {
                enumerable: !0
            },
            info: {
                enumerable: !0
            },
            newDocument: {
                enumerable: !0,
                writable: !0
            }
        })
    }
}
class oe extends q {
    formData;
    loader;
    constructor(t, n, o, r, a, u, f, i, m) {
        super(Q, {
            cancelable: !0
        }, t, n, o, r, a, u, f),
        this.formData = i,
        this.loader = m.bind(this, this),
        Object.defineProperties(this, {
            formData: {
                enumerable: !0
            },
            loader: {
                enumerable: !0,
                writable: !0
            }
        })
    }
}
class re extends q {
    direction;
    viewTransition;
    swap;
    constructor(t, n, o) {
        super(ee, void 0, t.from, t.to, t.direction, t.navigationType, t.sourceElement, t.info, t.newDocument),
        this.direction = t.direction,
        this.viewTransition = n,
        this.swap = o.bind(this, this),
        Object.defineProperties(this, {
            direction: {
                enumerable: !0
            },
            viewTransition: {
                enumerable: !0
            },
            swap: {
                enumerable: !0,
                writable: !0
            }
        })
    }
}
async function ie(e, t, n, o, r, a, u, f) {
    const i = new oe(e,t,n,o,r,a,window.document,u,f);
    return document.dispatchEvent(i) && (await i.loader(),
    i.defaultPrevented || (ne(Z),
    i.navigationType !== "traverse" && P({
        scrollX,
        scrollY
    }))),
    i
}
async function se(e, t, n) {
    const o = new re(e,t,n);
    return document.dispatchEvent(o),
    o.swap(),
    o
}
const ae = history.pushState.bind(history)
  , E = history.replaceState.bind(history)
  , P = e => {
    history.state && (history.scrollRestoration = "manual",
    E({
        ...history.state,
        ...e
    }, ""))
}
  , k = !!document.startViewTransition
  , I = () => !!document.querySelector('[name="astro-view-transitions-enabled"]')
  , C = (e, t) => e.pathname === t.pathname && e.search === t.search;
let L, p, A = !1, U;
const B = e => document.dispatchEvent(new Event(e))
  , V = () => B("astro:page-load")
  , ce = () => {
    let e = document.createElement("div");
    e.setAttribute("aria-live", "assertive"),
    e.setAttribute("aria-atomic", "true"),
    e.className = "astro-route-announcer",
    document.body.append(e),
    setTimeout( () => {
        let t = document.title || document.querySelector("h1")?.textContent || location.pathname;
        e.textContent = t
    }
    , 60)
}
  , w = "data-astro-transition-persist"
  , W = "data-astro-transition"
  , X = "data-astro-transition-fallback";
let H, b = 0;
history.state ? (b = history.state.index,
scrollTo({
    left: history.state.scrollX,
    top: history.state.scrollY
})) : I() && (E({
    index: b,
    scrollX,
    scrollY
}, ""),
history.scrollRestoration = "manual");
const le = (e, t) => {
    let n = !1
      , o = !1;
    return (...r) => {
        if (n) {
            o = !0;
            return
        }
        e(...r),
        n = !0,
        setTimeout( () => {
            o && (o = !1,
            e(...r)),
            n = !1
        }
        , t)
    }
}
;
async function ue(e, t) {
    try {
        const n = await fetch(e, t)
          , r = (n.headers.get("content-type") ?? "").split(";", 1)[0].trim();
        return r !== "text/html" && r !== "application/xhtml+xml" ? null : {
            html: await n.text(),
            redirected: n.redirected ? n.url : void 0,
            mediaType: r
        }
    } catch {
        return null
    }
}
function Y() {
    const e = document.querySelector('[name="astro-view-transitions-fallback"]');
    return e ? e.getAttribute("content") : "animate"
}
function fe() {
    let e = Promise.resolve();
    for (const t of Array.from(document.scripts)) {
        if (t.dataset.astroExec === "")
            continue;
        const n = document.createElement("script");
        n.innerHTML = t.innerHTML;
        for (const o of t.attributes) {
            if (o.name === "src") {
                const r = new Promise(a => {
                    n.onload = a
                }
                );
                e = e.then( () => r)
            }
            n.setAttribute(o.name, o.value)
        }
        n.dataset.astroExec = "",
        t.replaceWith(n)
    }
    return e
}
const K = (e, t, n, o, r) => {
    const a = C(t, e)
      , u = document.title;
    document.title = o;
    let f = !1;
    if (e.href !== location.href && !r)
        if (n.history === "replace") {
            const i = history.state;
            E({
                ...n.state,
                index: i.index,
                scrollX: i.scrollX,
                scrollY: i.scrollY
            }, "", e.href)
        } else
            ae({
                ...n.state,
                index: ++b,
                scrollX: 0,
                scrollY: 0
            }, "", e.href);
    if (L = e,
    a || (scrollTo({
        left: 0,
        top: 0,
        behavior: "instant"
    }),
    f = !0),
    r)
        scrollTo(r.scrollX, r.scrollY);
    else {
        if (e.hash) {
            history.scrollRestoration = "auto";
            const i = history.state;
            location.href = e.href,
            history.state || E(i, "")
        } else
            f || scrollTo({
                left: 0,
                top: 0,
                behavior: "instant"
            });
        history.scrollRestoration = "manual"
    }
    document.title = u
}
;
function de(e) {
    const t = [];
    for (const n of e.querySelectorAll("head link[rel=stylesheet]"))
        if (!document.querySelector(`[${w}="${n.getAttribute(w)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)) {
            const o = document.createElement("link");
            o.setAttribute("rel", "preload"),
            o.setAttribute("as", "style"),
            o.setAttribute("href", n.getAttribute("href")),
            t.push(new Promise(r => {
                ["load", "error"].forEach(a => o.addEventListener(a, r)),
                document.head.append(o)
            }
            ))
        }
    return t
}
async function M(e, t, n, o) {
    const r = (s, d) => {
        const h = s.getAttribute(w)
          , g = h && d.head.querySelector(`[${w}="${h}"]`);
        if (g)
            return g;
        if (s.matches("link[rel=stylesheet]")) {
            const T = s.getAttribute("href");
            return d.head.querySelector(`link[rel=stylesheet][href="${T}"]`)
        }
        return null
    }
      , a = () => {
        const s = document.activeElement;
        if (s?.closest(`[${w}]`)) {
            if (s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement) {
                const d = s.selectionStart
                  , h = s.selectionEnd;
                return {
                    activeElement: s,
                    start: d,
                    end: h
                }
            }
            return {
                activeElement: s
            }
        } else
            return {
                activeElement: null
            }
    }
      , u = ({activeElement: s, start: d, end: h}) => {
        s && (s.focus(),
        (s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement) && (s.selectionStart = d,
        s.selectionEnd = h))
    }
      , f = s => {
        const d = document.documentElement
          , h = [...d.attributes].filter( ({name: c}) => (d.removeAttribute(c),
        c.startsWith("data-astro-")));
        [...s.newDocument.documentElement.attributes, ...h].forEach( ({name: c, value: l}) => d.setAttribute(c, l));
        for (const c of document.scripts)
            for (const l of s.newDocument.scripts)
                if (!c.src && c.textContent === l.textContent || c.src && c.type === l.type && c.src === l.src) {
                    l.dataset.astroExec = "";
                    break
                }
        for (const c of Array.from(document.head.children)) {
            const l = r(c, s.newDocument);
            l ? l.remove() : c.remove()
        }
        document.head.append(...s.newDocument.head.children);
        const g = document.body
          , T = a();
        document.body.replaceWith(s.newDocument.body);
        for (const c of g.querySelectorAll(`[${w}]`)) {
            const l = c.getAttribute(w)
              , R = document.querySelector(`[${w}="${l}"]`);
            R && R.replaceWith(c)
        }
        u(T)
    }
    ;
    async function i(s) {
        function d(c) {
            const l = c.effect;
            return !l || !(l instanceof KeyframeEffect) || !l.target ? !1 : window.getComputedStyle(l.target, l.pseudoElement).animationIterationCount === "infinite"
        }
        const h = document.getAnimations();
        document.documentElement.setAttribute(X, s);
        const T = document.getAnimations().filter(c => !h.includes(c) && !d(c));
        return Promise.all(T.map(c => c.finished))
    }
    if (!A)
        document.documentElement.setAttribute(W, e.direction),
        o === "animate" && await i("old");
    else
        throw new DOMException("Transition was skipped");
    const m = document.title
      , y = await se(e, p, f);
    K(y.to, y.from, t, m, n),
    B(te),
    o === "animate" && !A && i("new").then( () => U())
}
async function j(e, t, n, o, r) {
    if (!I() || location.origin !== n.origin) {
        location.href = n.href;
        return
    }
    const a = r ? "traverse" : o.history === "replace" ? "replace" : "push";
    if (a !== "traverse" && P({
        scrollX,
        scrollY
    }),
    C(t, n) && n.hash) {
        K(n, t, o, document.title, r);
        return
    }
    const u = await ie(t, n, e, a, o.sourceElement, o.info, o.formData, f);
    if (u.defaultPrevented) {
        location.href = n.href;
        return
    }
    async function f(i) {
        const m = i.to.href
          , y = {};
        if (i.formData) {
            y.method = "POST";
            const h = i.sourceElement instanceof HTMLFormElement ? i.sourceElement : i.sourceElement instanceof HTMLElement && "form"in i.sourceElement ? i.sourceElement.form : i.sourceElement?.closest("form");
            y.body = h?.attributes.getNamedItem("enctype")?.value === "application/x-www-form-urlencoded" ? new URLSearchParams(i.formData) : i.formData
        }
        const s = await ue(m, y);
        if (s === null) {
            i.preventDefault();
            return
        }
        if (s.redirected && (i.to = new URL(s.redirected)),
        H ??= new DOMParser,
        i.newDocument = H.parseFromString(s.html, s.mediaType),
        i.newDocument.querySelectorAll("noscript").forEach(h => h.remove()),
        !i.newDocument.querySelector('[name="astro-view-transitions-enabled"]') && !i.formData) {
            i.preventDefault();
            return
        }
        const d = de(i.newDocument);
        d.length && await Promise.all(d)
    }
    if (A = !1,
    k)
        p = document.startViewTransition(async () => await M(u, o, r));
    else {
        const i = (async () => {
            await new Promise(m => setTimeout(m)),
            await M(u, o, r, Y())
        }
        )();
        p = {
            updateCallbackDone: i,
            ready: i,
            finished: new Promise(m => U = m),
            skipTransition: () => {
                A = !0
            }
        }
    }
    p.ready.then(async () => {
        await fe(),
        V(),
        ce()
    }
    ),
    p.finished.then( () => {
        document.documentElement.removeAttribute(W),
        document.documentElement.removeAttribute(X)
    }
    ),
    await p.ready
}
async function N(e, t) {
    await j("forward", L, new URL(e,location.href), t ?? {})
}
function me(e) {
    if (!I() && e.state) {
        location.reload();
        return
    }
    if (e.state === null)
        return;
    const t = history.state
      , n = t.index
      , o = n > b ? "forward" : "back";
    b = n,
    j(o, L, new URL(location.href), {}, t)
}
const F = () => {
    P({
        scrollX,
        scrollY
    })
}
;
{
    (k || Y() !== "none") && (L = new URL(location.href),
    addEventListener("popstate", me),
    addEventListener("load", V),
    "onscrollend"in window ? addEventListener("scrollend", F) : addEventListener("scroll", le(F, 350), {
        passive: !0
    }));
    for (const e of document.scripts)
        e.dataset.astroExec = ""
}
const G = new Set
  , S = new WeakSet;
let x, z, $ = !1;
function he(e) {
    $ || ($ = !0,
    x ??= e?.prefetchAll ?? !1,
    z ??= e?.defaultStrategy ?? "hover",
    we(),
    ye(),
    pe(),
    Te())
}
function we() {
    for (const e of ["touchstart", "mousedown"])
        document.body.addEventListener(e, t => {
            v(t.target, "tap") && D(t.target.href, {
                with: "fetch",
                ignoreSlowConnection: !0
            })
        }
        , {
            passive: !0
        })
}
function ye() {
    let e;
    document.body.addEventListener("focusin", o => {
        v(o.target, "hover") && t(o)
    }
    , {
        passive: !0
    }),
    document.body.addEventListener("focusout", n, {
        passive: !0
    }),
    O( () => {
        for (const o of document.getElementsByTagName("a"))
            S.has(o) || v(o, "hover") && (S.add(o),
            o.addEventListener("mouseenter", t, {
                passive: !0
            }),
            o.addEventListener("mouseleave", n, {
                passive: !0
            }))
    }
    );
    function t(o) {
        const r = o.target.href;
        e && clearTimeout(e),
        e = setTimeout( () => {
            D(r, {
                with: "fetch"
            })
        }
        , 80)
    }
    function n() {
        e && (clearTimeout(e),
        e = 0)
    }
}
function pe() {
    let e;
    O( () => {
        for (const t of document.getElementsByTagName("a"))
            S.has(t) || v(t, "viewport") && (S.add(t),
            e ??= ge(),
            e.observe(t))
    }
    )
}
function ge() {
    const e = new WeakMap;
    return new IntersectionObserver( (t, n) => {
        for (const o of t) {
            const r = o.target
              , a = e.get(r);
            o.isIntersecting ? (a && clearTimeout(a),
            e.set(r, setTimeout( () => {
                n.unobserve(r),
                e.delete(r),
                D(r.href, {
                    with: "link"
                })
            }
            , 300))) : a && (clearTimeout(a),
            e.delete(r))
        }
    }
    )
}
function Te() {
    O( () => {
        for (const e of document.getElementsByTagName("a"))
            v(e, "load") && D(e.href, {
                with: "link"
            })
    }
    )
}
function D(e, t) {
    const n = t?.ignoreSlowConnection ?? !1;
    if (!be(e, n))
        return;
    if (G.add(e),
    (t?.with ?? "link") === "link") {
        const r = document.createElement("link");
        r.rel = "prefetch",
        r.setAttribute("href", e),
        document.head.append(r)
    } else
        fetch(e).catch(r => {
            console.log(`[astro] Failed to prefetch ${e}`),
            console.error(r)
        }
        )
}
function be(e, t) {
    if (!navigator.onLine || !t && J())
        return !1;
    try {
        const n = new URL(e,location.href);
        return location.origin === n.origin && (location.pathname !== n.pathname || location.search !== n.search) && !G.has(e)
    } catch {}
    return !1
}
function v(e, t) {
    if (e?.tagName !== "A")
        return !1;
    const n = e.dataset.astroPrefetch;
    return n === "false" ? !1 : t === "tap" && (n != null || x) && J() ? !0 : n == null && x || n === "" ? t === z : n === t
}
function J() {
    if ("connection"in navigator) {
        const e = navigator.connection;
        return e.saveData || /2g/.test(e.effectiveType)
    }
    return !1
}
function O(e) {
    e();
    let t = !1;
    document.addEventListener("astro:page-load", () => {
        if (!t) {
            t = !0;
            return
        }
        e()
    }
    )
}
function ve() {
    const e = document.querySelector('[name="astro-view-transitions-fallback"]');
    return e ? e.getAttribute("content") : "animate"
}
function _(e) {
    return e.dataset.astroReload !== void 0
}
(k || ve() !== "none") && (document.addEventListener("click", e => {
    let t = e.target;
    if (t instanceof Element && (t = t.closest("a, area")),
    !(t instanceof HTMLAnchorElement) && !(t instanceof SVGAElement) && !(t instanceof HTMLAreaElement))
        return;
    const n = t instanceof HTMLElement ? t.target : t.target.baseVal
      , o = t instanceof HTMLElement ? t.href : t.href.baseVal
      , r = new URL(o,location.href).origin;
    _(t) || t.hasAttribute("download") || !t.href || n && n !== "_self" || r !== location.origin || e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || e.defaultPrevented || (e.preventDefault(),
    N(o, {
        history: t.dataset.astroHistory === "replace" ? "replace" : "auto",
        sourceElement: t
    }))
}
),
document.addEventListener("submit", e => {
    let t = e.target;
    if (t.tagName !== "FORM" || e.defaultPrevented || _(t))
        return;
    const n = t
      , o = e.submitter
      , r = new FormData(n,o);
    let a = o?.getAttribute("formaction") ?? n.action ?? location.pathname;
    const u = o?.getAttribute("formmethod") ?? n.method;
    if (u === "dialog")
        return;
    const f = {
        sourceElement: o ?? n
    };
    if (u === "get") {
        const i = new URLSearchParams(r)
          , m = new URL(a);
        m.search = i.toString(),
        a = m.toString()
    } else
        f.formData = r;
    e.preventDefault(),
    N(a, f)
}
),
he({
    prefetchAll: !0
}));
