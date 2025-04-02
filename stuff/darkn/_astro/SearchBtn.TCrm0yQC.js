import {S as l, i as m, s as u, e as f, y as p, c as _, a as d, z as h, d as c, g as $, A as g, l as S, n as b, q as y, m as B, B as q} from "./index.PlGM3qdX.js";
import {S as v, i as w} from "./SearchIcon.vorF_Jl1.js";
import "./SvgIcon.bGyGd6Ep.js";
function x(o) {
    let e, n, a, r, i;
    return n = new v({}),
    {
        c() {
            e = f("button"),
            p(n.$$.fragment)
        },
        l(t) {
            e = _(t, "BUTTON", {});
            var s = d(e);
            h(n.$$.fragment, s),
            s.forEach(c)
        },
        m(t, s) {
            $(t, e, s),
            g(n, e, null),
            a = !0,
            r || (i = S(e, "click", o[0]),
            r = !0)
        },
        p: b,
        i(t) {
            a || (y(n.$$.fragment, t),
            a = !0)
        },
        o(t) {
            B(n.$$.fragment, t),
            a = !1
        },
        d(t) {
            t && c(e),
            q(n),
            r = !1,
            i()
        }
    }
}
function T(o) {
    function e() {
        w.set(!0)
    }
    return [e]
}
class C extends l {
    constructor(e) {
        super(),
        m(this, e, T, x, u, {})
    }
}
export {C as default};
