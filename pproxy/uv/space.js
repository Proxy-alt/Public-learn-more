( () => {
    var _ = self.Ultraviolet
      , B = self.UVClient
      , S = self.__uv$config
      , h = self.__uv$bareData
      , p = self.__uv$bareURL
      , O = self.__uv$cookies;
    if (typeof h != "object" || typeof p != "string" || typeof O != "string")
        throw new TypeError("Unable to load global UV data");
    self.__uv || P(self);
    self.__uvHook = P;
    function P(o) {
        if ("__uv"in o && o.__uv instanceof _)
            return !1;
        o.document && o.window && o.document.querySelectorAll("script[__uv-script]").forEach(t => t.remove());
        let j = !o.window
          , k = "__uv"
          , l = "__uv$"
          , e = new _(S)
          , r = new B(o)
          , {HTMLMediaElement: y, HTMLScriptElement: U, HTMLAudioElement: L, HTMLVideoElement: T, HTMLInputElement: H, HTMLEmbedElement: $, HTMLTrackElement: W, HTMLAnchorElement: C, HTMLIFrameElement: m, HTMLAreaElement: A, HTMLLinkElement: I, HTMLBaseElement: R, HTMLFormElement: D, HTMLImageElement: v, HTMLSourceElement: N} = o;
        r.nativeMethods.defineProperty(o, "__uv", {
            value: e,
            enumerable: !1
        }),
        e.meta.origin = location.origin,
        e.location = r.location.emulate(t => t === "about:srcdoc" ? new URL(t) : (t.startsWith("blob:") && (t = t.slice(5)),
        new URL(e.sourceUrl(t))), t => e.rewriteUrl(t));
        let u = O;
        e.meta.url = e.location,
        e.domain = e.meta.url.host,
        e.blobUrls = new o.Map,
        e.referrer = "",
        e.cookies = [],
        e.localStorageObj = {},
        e.sessionStorageObj = {};
        let M = new _.BareClient(p,h);
        if (e.bareClient = M,
        e.location.href === "about:srcdoc" && (e.meta = o.parent.__uv.meta),
        o.EventTarget && (e.addEventListener = o.EventTarget.prototype.addEventListener,
        e.removeListener = o.EventTarget.prototype.removeListener,
        e.dispatchEvent = o.EventTarget.prototype.dispatchEvent),
        r.nativeMethods.defineProperty(r.storage.storeProto, "__uv$storageObj", {
            get() {
                if (this === r.storage.sessionStorage)
                    return e.sessionStorageObj;
                if (this === r.storage.localStorage)
                    return e.localStorageObj
            },
            enumerable: !1
        }),
        o.localStorage) {
            for (let t in o.localStorage)
                t.startsWith(l + e.location.origin + "@") && (e.localStorageObj[t.slice((l + e.location.origin + "@").length)] = o.localStorage.getItem(t));
            e.lsWrap = r.storage.emulate(r.storage.localStorage, e.localStorageObj)
        }
        if (o.sessionStorage) {
            for (let t in o.sessionStorage)
                t.startsWith(l + e.location.origin + "@") && (e.sessionStorageObj[t.slice((l + e.location.origin + "@").length)] = o.sessionStorage.getItem(t));
            e.ssWrap = r.storage.emulate(r.storage.sessionStorage, e.sessionStorageObj)
        }
        let g = o.document ? r.node.baseURI.get.call(o.document) : o.location.href
          , x = e.sourceUrl(g);
        r.nativeMethods.defineProperty(e.meta, "base", {
            get() {
                return o.document ? (r.node.baseURI.get.call(o.document) !== g && (g = r.node.baseURI.get.call(o.document),
                x = e.sourceUrl(g)),
                x) : e.meta.url.href
            }
        }),
        e.methods = {
            setSource: l + "setSource",
            source: l + "source",
            location: l + "location",
            function: l + "function",
            string: l + "string",
            eval: l + "eval",
            parent: l + "parent",
            top: l + "top"
        },
        e.filterKeys = [k, e.methods.setSource, e.methods.source, e.methods.location, e.methods.function, e.methods.string, e.methods.eval, e.methods.parent, e.methods.top, l + "protocol", l + "storageObj", l + "url", l + "modifiedStyle", l + "config", l + "dispatched", "Ultraviolet", "__uvHook"],
        r.on("wrap", (t, a) => {
            r.nativeMethods.defineProperty(a, "name", r.nativeMethods.getOwnPropertyDescriptor(t, "name")),
            r.nativeMethods.defineProperty(a, "length", r.nativeMethods.getOwnPropertyDescriptor(t, "length")),
            r.nativeMethods.defineProperty(a, e.methods.string, {
                enumerable: !1,
                value: r.nativeMethods.fnToString.call(t)
            }),
            r.nativeMethods.defineProperty(a, e.methods.function, {
                enumerable: !1,
                value: t
            })
        }
        ),
        r.fetch.on("request", t => {
            t.data.input = e.rewriteUrl(t.data.input)
        }
        ),
        r.fetch.on("requestUrl", t => {
            t.data.value = e.sourceUrl(t.data.value)
        }
        ),
        r.fetch.on("responseUrl", t => {
            t.data.value = e.sourceUrl(t.data.value)
        }
        ),
        r.xhr.on("open", t => {
            t.data.input = e.rewriteUrl(t.data.input)
        }
        ),
        r.xhr.on("responseUrl", t => {
            t.data.value = e.sourceUrl(t.data.value)
        }
        ),
        r.workers.on("worker", t => {
            t.data.url = e.rewriteUrl(t.data.url)
        }
        ),
        r.workers.on("addModule", t => {
            t.data.url = e.rewriteUrl(t.data.url)
        }
        ),
        r.workers.on("importScripts", t => {
            for (let a in t.data.scripts)
                t.data.scripts[a] = e.rewriteUrl(t.data.scripts[a])
        }
        ),
        r.workers.on("postMessage", t => {
            let a = t.data.origin;
            t.data.origin = "*",
            t.data.message = {
                __data: t.data.message,
                __origin: e.meta.url.origin,
                __to: a
            }
        }
        ),
        r.navigator.on("sendBeacon", t => {
            t.data.url = e.rewriteUrl(t.data.url)
        }
        ),
        r.document.on("getCookie", t => {
            t.data.value = u
        }
        ),
        r.document.on("setCookie", t => {
            e.cookie.db().then(i => {
                e.cookie.setCookies(t.data.value, i, e.meta),
                e.cookie.getCookies(i).then(s => {
                    u = e.cookie.serialize(s, e.meta, !0)
                }
                )
            }
            );
            let a = e.cookie.setCookie(t.data.value)[0];
            a.path || (a.path = "/"),
            a.domain || (a.domain = e.meta.url.hostname),
            e.cookie.validateCookie(a, e.meta, !0) && (u.length && (u += "; "),
            u += `${a.name}=${a.value}`),
            t.respondWith(t.data.value)
        }
        ),
        r.element.on("setInnerHTML", t => {
            switch (t.that.tagName) {
            case "SCRIPT":
                t.data.value = e.js.rewrite(t.data.value);
                break;
            case "STYLE":
                t.data.value = e.rewriteCSS(t.data.value);
                break;
            default:
                t.data.value = e.rewriteHtml(t.data.value)
            }
        }
        ),
        r.element.on("getInnerHTML", t => {
            switch (t.that.tagName) {
            case "SCRIPT":
                t.data.value = e.js.source(t.data.value);
                break;
            default:
                t.data.value = e.sourceHtml(t.data.value)
            }
        }
        ),
        r.element.on("setOuterHTML", t => {
            t.data.value = e.rewriteHtml(t.data.value, {
                document: t.that.tagName === "HTML"
            })
        }
        ),
        r.element.on("getOuterHTML", t => {
            switch (t.that.tagName) {
            case "HEAD":
                t.data.value = e.sourceHtml(t.data.value.replace(/<head(.*)>(.*)<\/head>/s, "<op-head$1>$2</op-head>")).replace(/<op-head(.*)>(.*)<\/op-head>/s, "<head$1>$2</head>");
                break;
            case "BODY":
                t.data.value = e.sourceHtml(t.data.value.replace(/<body(.*)>(.*)<\/body>/s, "<op-body$1>$2</op-body>")).replace(/<op-body(.*)>(.*)<\/op-body>/s, "<body$1>$2</body>");
                break;
            default:
                t.data.value = e.sourceHtml(t.data.value, {
                    document: t.that.tagName === "HTML"
                });
                break
            }
        }
        ),
        r.document.on("write", t => {
            if (!t.data.html.length)
                return !1;
            t.data.html = [e.rewriteHtml(t.data.html.join(""))]
        }
        ),
        r.document.on("writeln", t => {
            if (!t.data.html.length)
                return !1;
            t.data.html = [e.rewriteHtml(t.data.html.join(""))]
        }
        ),
        r.element.on("insertAdjacentHTML", t => {
            t.data.html = e.rewriteHtml(t.data.html)
        }
        ),
        r.eventSource.on("construct", t => {
            t.data.url = e.rewriteUrl(t.data.url)
        }
        ),
        r.eventSource.on("url", t => {
            t.data.url = e.rewriteUrl(t.data.url)
        }
        ),
        r.idb.on("idbFactoryOpen", t => {
            t.data.name !== "__op" && (t.data.name = `${e.meta.url.origin}@${t.data.name}`)
        }
        ),
        r.idb.on("idbFactoryName", t => {
            t.data.value = t.data.value.slice(e.meta.url.origin.length + 1)
        }
        ),
        r.history.on("replaceState", t => {
            t.data.url && (t.data.url = e.rewriteUrl(t.data.url, "__uv"in t.that ? t.that.__uv.meta : e.meta))
        }
        ),
        r.history.on("pushState", t => {
            t.data.url && (t.data.url = e.rewriteUrl(t.data.url, "__uv"in t.that ? t.that.__uv.meta : e.meta))
        }
        ),
        r.element.on("getAttribute", t => {
            r.element.hasAttribute.call(t.that, e.attributePrefix + "-attr-" + t.data.name) && t.respondWith(t.target.call(t.that, e.attributePrefix + "-attr-" + t.data.name))
        }
        ),
        r.message.on("postMessage", t => {
            let a = t.data.origin
              , i = e.call;
            t.that && (i = t.that.__uv$source.call),
            t.data.origin = "*",
            t.data.message = {
                __data: t.data.message,
                __origin: (t.that || t.target).__uv$source.location.origin,
                __to: a
            },
            t.respondWith(j ? i(t.target, [t.data.message, t.data.transfer], t.that) : i(t.target, [t.data.message, t.data.origin, t.data.transfer], t.that))
        }
        ),
        r.message.on("data", t => {
            let {value: a} = t.data;
            typeof a == "object" && "__data"in a && "__origin"in a && t.respondWith(a.__data)
        }
        ),
        r.message.on("origin", t => {
            let a = r.message.messageData.get.call(t.that);
            typeof a == "object" && a.__data && a.__origin && t.respondWith(a.__origin)
        }
        ),
        r.overrideDescriptor(o, "origin", {
            get: () => e.location.origin
        }),
        r.node.on("baseURI", t => {
            t.data.value.startsWith(o.location.origin) && (t.data.value = e.sourceUrl(t.data.value))
        }
        ),
        r.element.on("setAttribute", t => {
            if (t.that instanceof y && t.data.name === "src" && t.data.value.startsWith("blob:")) {
                t.target.call(t.that, e.attributePrefix + "-attr-" + t.data.name, t.data.value),
                t.data.value = e.blobUrls.get(t.data.value);
                return
            }
            e.attrs.isUrl(t.data.name) && (t.target.call(t.that, e.attributePrefix + "-attr-" + t.data.name, t.data.value),
            t.data.value = e.rewriteUrl(t.data.value)),
            e.attrs.isStyle(t.data.name) && (t.target.call(t.that, e.attributePrefix + "-attr-" + t.data.name, t.data.value),
            t.data.value = e.rewriteCSS(t.data.value, {
                context: "declarationList"
            })),
            e.attrs.isHtml(t.data.name) && (t.target.call(t.that, e.attributePrefix + "-attr-" + t.data.name, t.data.value),
            t.data.value = e.rewriteHtml(t.data.value, {
                ...e.meta,
                document: !0,
                injectHead: e.createHtmlInject(e.handlerScript, e.bundleScript, e.clientScript, e.configScript, p, h, u, o.location.href)
            })),
            e.attrs.isSrcset(t.data.name) && (t.target.call(t.that, e.attributePrefix + "-attr-" + t.data.name, t.data.value),
            t.data.value = e.html.wrapSrcset(t.data.value.toString())),
            e.attrs.isForbidden(t.data.name) && (t.data.name = e.attributePrefix + "-attr-" + t.data.name)
        }
        ),
        r.element.on("audio", t => {
            t.data.url = e.rewriteUrl(t.data.url)
        }
        ),
        r.element.hookProperty([C, A, I, R], "href", {
            get: (t, a) => e.sourceUrl(t.call(a)),
            set: (t, a, [i]) => {
                r.element.setAttribute.call(a, e.attributePrefix + "-attr-href", i),
                t.call(a, e.rewriteUrl(i))
            }
        }),
        r.element.hookProperty([U, L, T, y, v, H, $, m, W, N], "src", {
            get: (t, a) => e.sourceUrl(t.call(a)),
            set: (t, a, [i]) => {
                if (new String(i).toString().trim().startsWith("blob:") && a instanceof y)
                    return r.element.setAttribute.call(a, e.attributePrefix + "-attr-src", i),
                    t.call(a, e.blobUrls.get(i) || i);
                r.element.setAttribute.call(a, e.attributePrefix + "-attr-src", i),
                t.call(a, e.rewriteUrl(i))
            }
        }),
        r.element.hookProperty([D], "action", {
            get: (t, a) => e.sourceUrl(t.call(a)),
            set: (t, a, [i]) => {
                r.element.setAttribute.call(a, e.attributePrefix + "-attr-action", i),
                t.call(a, e.rewriteUrl(i))
            }
        }),
        r.element.hookProperty([v], "srcset", {
            get: (t, a) => r.element.getAttribute.call(a, e.attributePrefix + "-attr-srcset") || t.call(a),
            set: (t, a, [i]) => {
                r.element.setAttribute.call(a, e.attributePrefix + "-attr-srcset", i),
                t.call(a, e.html.wrapSrcset(i.toString()))
            }
        }),
        r.element.hookProperty(U, "integrity", {
            get: (t, a) => r.element.getAttribute.call(a, e.attributePrefix + "-attr-integrity"),
            set: (t, a, [i]) => {
                r.element.setAttribute.call(a, e.attributePrefix + "-attr-integrity", i)
            }
        }),
        r.element.hookProperty(m, "sandbox", {
            get: (t, a) => r.element.getAttribute.call(a, e.attributePrefix + "-attr-sandbox") || t.call(a),
            set: (t, a, [i]) => {
                r.element.setAttribute.call(a, e.attributePrefix + "-attr-sandbox", i)
            }
        });
        let F = m && Object.getOwnPropertyDescriptor(m.prototype, "contentWindow").get;
        function E(t) {
            let a = F.call(t);
            if (!a.__uv)
                try {
                    P(a)
                } catch (i) {
                    console.error("catastrophic failure"),
                    console.error(i)
                }
        }
        r.element.hookProperty(m, "contentWindow", {
            get: (t, a) => (E(a),
            t.call(a))
        }),
        r.element.hookProperty(m, "contentDocument", {
            get: (t, a) => (E(a),
            t.call(a))
        }),
        r.element.hookProperty(m, "srcdoc", {
            get: (t, a) => r.element.getAttribute.call(a, e.attributePrefix + "-attr-srcdoc") || t.call(a),
            set: (t, a, [i]) => {
                t.call(a, e.rewriteHtml(i, {
                    document: !0,
                    injectHead: e.createHtmlInject(e.handlerScript, e.bundleScript, e.clientScript, e.configScript, p, h, u, o.location.href)
                }))
            }
        }),
        r.node.on("getTextContent", t => {
            t.that.tagName === "SCRIPT" && (t.data.value = e.js.source(t.data.value))
        }
        ),
        r.node.on("setTextContent", t => {
            t.that.tagName === "SCRIPT" && (t.data.value = e.js.rewrite(t.data.value))
        }
        ),
        "serviceWorker"in o.navigator && delete o.Navigator.prototype.serviceWorker,
        r.document.on("getDomain", t => {
            t.data.value = e.domain
        }
        ),
        r.document.on("setDomain", t => {
            if (!t.data.value.toString().endsWith(e.meta.url.hostname.split(".").slice(-2).join(".")))
                return t.respondWith("");
            t.respondWith(e.domain = t.data.value)
        }
        ),
        r.document.on("url", t => {
            t.data.value = e.location.href
        }
        ),
        r.document.on("documentURI", t => {
            t.data.value = e.location.href
        }
        ),
        r.document.on("referrer", t => {
            t.data.value = e.referrer || e.sourceUrl(t.data.value)
        }
        ),
        r.document.on("parseFromString", t => {
            if (t.data.type !== "text/html")
                return !1;
            t.data.string = e.rewriteHtml(t.data.string, {
                ...e.meta,
                document: !0
            })
        }
        ),
        r.attribute.on("getValue", t => {
            r.element.hasAttribute.call(t.that.ownerElement, e.attributePrefix + "-attr-" + t.data.name) && (t.data.value = r.element.getAttribute.call(t.that.ownerElement, e.attributePrefix + "-attr-" + t.data.name))
        }
        ),
        r.attribute.on("setValue", t => {
            e.attrs.isUrl(t.data.name) && (r.element.setAttribute.call(t.that.ownerElement, e.attributePrefix + "-attr-" + t.data.name, t.data.value),
            t.data.value = e.rewriteUrl(t.data.value)),
            e.attrs.isStyle(t.data.name) && (r.element.setAttribute.call(t.that.ownerElement, e.attributePrefix + "-attr-" + t.data.name, t.data.value),
            t.data.value = e.rewriteCSS(t.data.value, {
                context: "declarationList"
            })),
            e.attrs.isHtml(t.data.name) && (r.element.setAttribute.call(t.that.ownerElement, e.attributePrefix + "-attr-" + t.data.name, t.data.value),
            t.data.value = e.rewriteHtml(t.data.value, {
                ...e.meta,
                document: !0,
                injectHead: e.createHtmlInject(e.handlerScript, e.bundleScript, e.clientScript, e.configScript, p, h, u, o.location.href)
            })),
            e.attrs.isSrcset(t.data.name) && (r.element.setAttribute.call(t.that.ownerElement, e.attributePrefix + "-attr-" + t.data.name, t.data.value),
            t.data.value = e.html.wrapSrcset(t.data.value.toString()))
        }
        ),
        r.url.on("createObjectURL", t => {
            let a = t.target.call(t.that, t.data.object);
            if (a.startsWith("blob:" + location.origin)) {
                let i = "blob:" + (e.meta.url.href !== "about:blank" ? e.meta.url.origin : o.parent.__uv.meta.url.origin) + a.slice(5 + location.origin.length);
                e.blobUrls.set(i, a),
                t.respondWith(i)
            } else
                t.respondWith(a)
        }
        ),
        r.url.on("revokeObjectURL", t => {
            if (e.blobUrls.has(t.data.url)) {
                let a = t.data.url;
                t.data.url = e.blobUrls.get(t.data.url),
                e.blobUrls.delete(a)
            }
        }
        ),
        r.storage.on("get", t => {
            t.data.name = l + e.meta.url.origin + "@" + t.data.name
        }
        ),
        r.storage.on("set", t => {
            t.that.__uv$storageObj && (t.that.__uv$storageObj[t.data.name] = t.data.value),
            t.data.name = l + e.meta.url.origin + "@" + t.data.name
        }
        ),
        r.storage.on("delete", t => {
            t.that.__uv$storageObj && delete t.that.__uv$storageObj[t.data.name],
            t.data.name = l + e.meta.url.origin + "@" + t.data.name
        }
        ),
        r.storage.on("getItem", t => {
            t.data.name = l + e.meta.url.origin + "@" + t.data.name
        }
        ),
        r.storage.on("setItem", t => {
            t.that.__uv$storageObj && (t.that.__uv$storageObj[t.data.name] = t.data.value),
            t.data.name = l + e.meta.url.origin + "@" + t.data.name
        }
        ),
        r.storage.on("removeItem", t => {
            t.that.__uv$storageObj && delete t.that.__uv$storageObj[t.data.name],
            t.data.name = l + e.meta.url.origin + "@" + t.data.name
        }
        ),
        r.storage.on("clear", t => {
            if (t.that.__uv$storageObj)
                for (let a of r.nativeMethods.keys.call(null, t.that.__uv$storageObj))
                    delete t.that.__uv$storageObj[a],
                    r.storage.removeItem.call(t.that, l + e.meta.url.origin + "@" + a),
                    t.respondWith()
        }
        ),
        r.storage.on("length", t => {
            t.that.__uv$storageObj && t.respondWith(r.nativeMethods.keys.call(null, t.that.__uv$storageObj).length)
        }
        ),
        r.storage.on("key", t => {
            t.that.__uv$storageObj && t.respondWith(r.nativeMethods.keys.call(null, t.that.__uv$storageObj)[t.data.index] || null)
        }
        );
        function f(t, a) {
            let i = `on${a}`
              , s = new WeakMap;
            Reflect.defineProperty(t, i, {
                enumerable: !0,
                configurable: !0,
                get() {
                    return s.has(this) ? s.get(this) : null
                },
                set(n) {
                    typeof n == "function" && (s.has(this) && this.removeEventListener(a, s.get(this)),
                    s.set(this, n),
                    this.addEventListener(a, n))
                }
            })
        }
        let V = ["ws:", "wss:"];
        class c extends EventTarget {
            #t;
            #r;
            #e = "blob";
            #a = "";
            #o = "";
            #i = "";
            async #s(a, i) {
                let s = {};
                Reflect.setPrototypeOf(s, null),
                s.Origin = e.meta.url.origin,
                s["User-Agent"] = navigator.userAgent,
                u !== "" && (s.Cookie = u.toString()),
                this.#t = await M.createWebSocket(a, s, i, S.proxyIp, S.proxyPort),
                this.#t.binaryType = this.#e,
                this.#t.addEventListener("message", d => {
                    this.dispatchEvent(new MessageEvent("message",d))
                }
                ),
                this.#t.addEventListener("open", async d => {
                    this.dispatchEvent(new Event("open",d))
                }
                ),
                this.#t.addEventListener("error", d => {
                    this.dispatchEvent(new ErrorEvent("error",d))
                }
                ),
                this.#t.addEventListener("close", d => {
                    this.dispatchEvent(new Event("close",d))
                }
                );
                let n = await this.#t.meta;
                n.headers.has("sec-websocket-protocol") && (this.#a = n.headers.get("sec-websocket-protocol")),
                n.headers.has("sec-websocket-extensions") && (this.#o = n.headers.get("sec-websocket-extensions"));
                let b = n.rawHeaders["set-cookie"] || [];
                Array.isArray(b) || (b = []);
                for (let d of b)
                    document.cookie = d
            }
            get url() {
                return this.#i
            }
            constructor(...a) {
                if (super(),
                !a.length)
                    throw new DOMException("Failed to construct 'WebSocket': 1 argument required, but only 0 present.");
                let[i,s] = a, n;
                try {
                    n = new URL(i)
                } catch {
                    throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${i}' is invalid.`)
                }
                if (!V.includes(n.protocol))
                    throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${n.protocol}' is not allowed.`);
                this.#r = this.#s(n, s)
            }
            get protocol() {
                return this.#a
            }
            get extensions() {
                return this.#o
            }
            get readyState() {
                return this.#t ? this.#t.readyState : c.CONNECTING
            }
            get binaryType() {
                return this.#e
            }
            set binaryType(a) {
                this.#e = a,
                this.#t && (this.#t.binaryType = a)
            }
            send(a) {
                if (!this.#t)
                    throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
                this.#t.send(a)
            }
            close(a, i) {
                if (typeof a < "u" && (typeof a != "number" && (a = 0),
                a !== 1e3 && (a < 3e3 || a > 4999)))
                    throw new DOMException(`Failed to execute 'close' on 'WebSocket': The code must be either 1000, or between 3000 and 4999. ${a} is neither.`);
                this.#r.then( () => this.#t.close(a, i))
            }
        }
        f(c.prototype, "close"),
        f(c.prototype, "open"),
        f(c.prototype, "message"),
        f(c.prototype, "error");
        for (let t of ["url", "protocol", "extensions", "readyState", "binaryType"]) {
            let a = Object.getOwnPropertyDescriptor(o.WebSocket.prototype, t)
              , i = Object.getOwnPropertyDescriptor(c.prototype, t);
            i?.get && a?.get && r.emit("wrap", i.get, a.get),
            i?.set && a?.set && r.emit("wrap", i.get, a.get)
        }
        if (r.emit("wrap", o.WebSocket.prototype.send, c.prototype.send),
        r.emit("wrap", o.WebSocket.prototype.close, c.prototype.close),
        r.override(o, "WebSocket", (t, a, i) => new c(...i), !0),
        c.prototype.constructor = o.WebSocket,
        r.function.on("function", t => {
            t.data.script = e.rewriteJS(t.data.script)
        }
        ),
        r.function.on("toString", t => {
            e.methods.string in t.that && t.respondWith(t.that[e.methods.string])
        }
        ),
        r.object.on("getOwnPropertyNames", t => {
            t.data.names = t.data.names.filter(a => !e.filterKeys.includes(a))
        }
        ),
        r.object.on("getOwnPropertyDescriptors", t => {
            for (let a of e.filterKeys)
                delete t.data.descriptors[a]
        }
        ),
        r.style.on("setProperty", t => {
            r.style.dashedUrlProps.includes(t.data.property) && (t.data.value = e.rewriteCSS(t.data.value, {
                context: "value",
                ...e.meta
            }))
        }
        ),
        r.style.on("getPropertyValue", t => {
            r.style.dashedUrlProps.includes(t.data.property) && t.respondWith(e.sourceCSS(t.target.call(t.that, t.data.property), {
                context: "value",
                ...e.meta
            }))
        }
        ),
        "CSS2Properties"in o)
            for (let t of r.style.urlProps)
                r.overrideDescriptor(o.CSS2Properties.prototype, t, {
                    get: (a, i) => e.sourceCSS(a.call(i), {
                        context: "value",
                        ...e.meta
                    }),
                    set: (a, i, s) => {
                        a.call(i, e.rewriteCSS(s, {
                            context: "value",
                            ...e.meta
                        }))
                    }
                });
        else
            "HTMLElement"in o && r.overrideDescriptor(o.HTMLElement.prototype, "style", {
                get: (t, a) => {
                    let i = t.call(a);
                    if (!i[l + "modifiedStyle"])
                        for (let s of r.style.urlProps)
                            r.nativeMethods.defineProperty(i, s, {
                                enumerable: !0,
                                configurable: !0,
                                get() {
                                    let n = r.style.getPropertyValue.call(this, s) || "";
                                    return e.sourceCSS(n, {
                                        context: "value",
                                        ...e.meta
                                    })
                                },
                                set(n) {
                                    r.style.setProperty.call(this, r.style.propToDashed[s] || s, e.rewriteCSS(n, {
                                        context: "value",
                                        ...e.meta
                                    }))
                                }
                            }),
                            r.nativeMethods.defineProperty(i, l + "modifiedStyle", {
                                enumerable: !1,
                                value: !0
                            });
                    return i
                }
            });
        r.style.on("setCssText", t => {
            t.data.value = e.rewriteCSS(t.data.value, {
                context: "declarationList",
                ...e.meta
            })
        }
        ),
        r.style.on("getCssText", t => {
            t.data.value = e.sourceCSS(t.data.value, {
                context: "declarationList",
                ...e.meta
            })
        }
        ),
        e.addEventListener.call(o, "hashchange", t => {
            if (t.__uv$dispatched)
                return !1;
            t.stopImmediatePropagation();
            let a = o.location.hash;
            r.history.replaceState.call(o.history, "", "", t.oldURL),
            e.location.hash = a
        }
        ),
        r.location.on("hashchange", (t, a, i) => {
            if (i.HashChangeEvent && r.history.replaceState) {
                r.history.replaceState.call(o.history, "", "", e.rewriteUrl(a));
                let s = new i.HashChangeEvent("hashchange",{
                    newURL: a,
                    oldURL: t
                });
                r.nativeMethods.defineProperty(s, l + "dispatched", {
                    value: !0,
                    enumerable: !1
                }),
                e.dispatchEvent.call(o, s)
            }
        }
        ),
        r.fetch.overrideRequest(),
        r.fetch.overrideUrl(),
        r.xhr.overrideOpen(),
        r.xhr.overrideResponseUrl(),
        r.element.overrideHtml(),
        r.element.overrideAttribute(),
        r.element.overrideInsertAdjacentHTML(),
        r.element.overrideAudio(),
        r.node.overrideBaseURI(),
        r.node.overrideTextContent(),
        r.attribute.overrideNameValue(),
        r.document.overrideDomain(),
        r.document.overrideURL(),
        r.document.overrideDocumentURI(),
        r.document.overrideWrite(),
        r.document.overrideReferrer(),
        r.document.overrideParseFromString(),
        r.storage.overrideMethods(),
        r.storage.overrideLength(),
        r.object.overrideGetPropertyNames(),
        r.object.overrideGetOwnPropertyDescriptors(),
        r.idb.overrideName(),
        r.idb.overrideOpen(),
        r.history.overridePushState(),
        r.history.overrideReplaceState(),
        r.eventSource.overrideConstruct(),
        r.eventSource.overrideUrl(),
        r.url.overrideObjectURL(),
        r.document.overrideCookie(),
        r.message.overridePostMessage(),
        r.message.overrideMessageOrigin(),
        r.message.overrideMessageData(),
        r.workers.overrideWorker(),
        r.workers.overrideAddModule(),
        r.workers.overrideImportScripts(),
        r.workers.overridePostMessage(),
        r.style.overrideSetGetProperty(),
        r.style.overrideCssText(),
        r.navigator.overrideSendBeacon(),
        r.function.overrideFunction(),
        r.function.overrideToString(),
        r.location.overrideWorkerLocation(t => new URL(e.sourceUrl(t))),
        r.overrideDescriptor(o, "localStorage", {
            get: (t, a) => (a || o).__uv.lsWrap
        }),
        r.overrideDescriptor(o, "sessionStorage", {
            get: (t, a) => (a || o).__uv.ssWrap
        }),
        r.override(o, "open", (t, a, i) => {
            if (!i.length)
                return t.apply(a, i);
            let[s] = i;
            return s = e.rewriteUrl(s),
            t.call(a, s)
        }
        ),
        e.$wrap = function(t) {
            return t === "location" ? e.methods.location : t === "eval" ? e.methods.eval : t
        }
        ,
        e.$get = function(t) {
            return t === o.location ? e.location : t === o.eval ? e.eval : t === o.parent ? o.__uv$parent : t === o.top ? o.__uv$top : t
        }
        ,
        e.eval = r.wrap(o, "eval", (t, a, i) => {
            if (!i.length || typeof i[0] != "string")
                return t.apply(a, i);
            let[s] = i;
            return s = e.rewriteJS(s),
            t.call(a, s)
        }
        ),
        e.call = function(t, a, i) {
            return i ? t.apply(i, a) : t(...a)
        }
        ,
        e.call$ = function(t, a, i=[]) {
            return t[a].apply(t, i)
        }
        ,
        r.nativeMethods.defineProperty(o.Object.prototype, k, {
            get: () => e,
            enumerable: !1
        }),
        r.nativeMethods.defineProperty(o.Object.prototype, e.methods.setSource, {
            value: function(t) {
                return r.nativeMethods.isExtensible(this) ? (r.nativeMethods.defineProperty(this, e.methods.source, {
                    value: t,
                    writable: !0,
                    enumerable: !1
                }),
                this) : this
            },
            enumerable: !1
        }),
        r.nativeMethods.defineProperty(o.Object.prototype, e.methods.source, {
            value: e,
            writable: !0,
            enumerable: !1
        }),
        r.nativeMethods.defineProperty(o.Object.prototype, e.methods.location, {
            configurable: !0,
            get() {
                return this === o.document || this === o ? e.location : this.location
            },
            set(t) {
                this === o.document || this === o ? e.location.href = t : this.location = t
            }
        }),
        r.nativeMethods.defineProperty(o.Object.prototype, e.methods.parent, {
            configurable: !0,
            get() {
                let t = this.parent;
                if (this === o)
                    try {
                        return "__uv"in t ? t : this
                    } catch {
                        return this
                    }
                return t
            },
            set(t) {
                this.parent = t
            }
        }),
        r.nativeMethods.defineProperty(o.Object.prototype, e.methods.top, {
            configurable: !0,
            get() {
                let t = this.top;
                if (this === o) {
                    if (t === this.parent)
                        return this[e.methods.parent];
                    try {
                        if ("__uv"in t)
                            return t;
                        {
                            let a = this;
                            for (; a.parent !== t; )
                                a = a.parent;
                            return "__uv"in a ? a : this
                        }
                    } catch {
                        return this
                    }
                }
                return t
            },
            set(t) {
                this.top = t
            }
        }),
        r.nativeMethods.defineProperty(o.Object.prototype, e.methods.eval, {
            configurable: !0,
            get() {
                return this === o ? e.eval : this.eval
            },
            set(t) {
                this.eval = t
            }
        })
    }
}
)();
//# sourceMappingURL=uv.handler.js.map
