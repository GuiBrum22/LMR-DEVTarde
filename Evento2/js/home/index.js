(()=>{
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function t(i, r) {
        void 0 === i && (i = {}),
        void 0 === r && (r = {}),
        Object.keys(r).forEach((function(n) {
            void 0 === i[n] ? i[n] = r[n] : e(r[n]) && e(i[n]) && Object.keys(r[n]).length > 0 && t(i[n], r[n])
        }
        ))
    }
    var i = {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        createElementNS: function() {
            return {}
        },
        importNode: function() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function r() {
        var e = "undefined" != typeof document ? document : {};
        return t(e, i),
        e
    }
    var n = {
        document: i,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {},
        matchMedia: function() {
            return {}
        },
        requestAnimationFrame: function(e) {
            return "undefined" == typeof setTimeout ? (e(),
            null) : setTimeout(e, 0)
        },
        cancelAnimationFrame: function(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function s() {
        var e = "undefined" != typeof window ? window : {};
        return t(e, n),
        e
    }
    function a(e) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function o(e, t) {
        return (o = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function l() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }
    function d(e, t, i) {
        return (d = l() ? Reflect.construct : function(e, t, i) {
            var r = [null];
            r.push.apply(r, t);
            var n = new (Function.bind.apply(e, r));
            return i && o(n, i.prototype),
            n
        }
        ).apply(null, arguments)
    }
    function u(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (u = function(e) {
            if (null === e || (i = e,
            -1 === Function.toString.call(i).indexOf("[native code]")))
                return e;
            var i;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e))
                    return t.get(e);
                t.set(e, r)
            }
            function r() {
                return d(e, arguments, a(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            o(r, e)
        }
        )(e)
    }
    var c = function(e) {
        var t, i;
        function r(t) {
            var i, r, n;
            return i = e.call.apply(e, [this].concat(t)) || this,
            r = function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(i),
            n = r.__proto__,
            Object.defineProperty(r, "__proto__", {
                get: function() {
                    return n
                },
                set: function(e) {
                    n.__proto__ = e
                }
            }),
            i
        }
        return i = e,
        (t = r).prototype = Object.create(i.prototype),
        t.prototype.constructor = t,
        t.__proto__ = i,
        r
    }(u(Array));
    function p(e) {
        void 0 === e && (e = []);
        var t = [];
        return e.forEach((function(e) {
            Array.isArray(e) ? t.push.apply(t, p(e)) : t.push(e)
        }
        )),
        t
    }
    function v(e, t) {
        return Array.prototype.filter.call(e, t)
    }
    function f(e, t) {
        var i = s()
          , n = r()
          , a = [];
        if (!t && e instanceof c)
            return e;
        if (!e)
            return new c(a);
        if ("string" == typeof e) {
            var o = e.trim();
            if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                var l = "div";
                0 === o.indexOf("<li") && (l = "ul"),
                0 === o.indexOf("<tr") && (l = "tbody"),
                0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"),
                0 === o.indexOf("<tbody") && (l = "table"),
                0 === o.indexOf("<option") && (l = "select");
                var d = n.createElement(l);
                d.innerHTML = o;
                for (var u = 0; u < d.childNodes.length; u += 1)
                    a.push(d.childNodes[u])
            } else
                a = function(e, t) {
                    if ("string" != typeof e)
                        return [e];
                    for (var i = [], r = t.querySelectorAll(e), n = 0; n < r.length; n += 1)
                        i.push(r[n]);
                    return i
                }(e.trim(), t || n)
        } else if (e.nodeType || e === i || e === n)
            a.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof c)
                return e;
            a = e
        }
        return new c(function(e) {
            for (var t = [], i = 0; i < e.length; i += 1)
                -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }(a))
    }
    f.fn = c.prototype;
    var h = "resize scroll".split(" ");
    function m(e) {
        return function() {
            for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
                i[r] = arguments[r];
            if (void 0 === i[0]) {
                for (var n = 0; n < this.length; n += 1)
                    h.indexOf(e) < 0 && (e in this[n] ? this[n][e]() : f(this[n]).trigger(e));
                return this
            }
            return this.on.apply(this, [e].concat(i))
        }
    }
    m("click"),
    m("blur"),
    m("focus"),
    m("focusin"),
    m("focusout"),
    m("keyup"),
    m("keydown"),
    m("keypress"),
    m("submit"),
    m("change"),
    m("mousedown"),
    m("mousemove"),
    m("mouseup"),
    m("mouseenter"),
    m("mouseleave"),
    m("mouseout"),
    m("mouseover"),
    m("touchstart"),
    m("touchend"),
    m("touchmove"),
    m("resize"),
    m("scroll");
    var g = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            var r = p(t.map((function(e) {
                return e.split(" ")
            }
            )));
            return this.forEach((function(e) {
                var t;
                (t = e.classList).add.apply(t, r)
            }
            )),
            this
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            var r = p(t.map((function(e) {
                return e.split(" ")
            }
            )));
            return this.forEach((function(e) {
                var t;
                (t = e.classList).remove.apply(t, r)
            }
            )),
            this
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            var r = p(t.map((function(e) {
                return e.split(" ")
            }
            )));
            return v(this, (function(e) {
                return r.filter((function(t) {
                    return e.classList.contains(t)
                }
                )).length > 0
            }
            )).length > 0
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            var r = p(t.map((function(e) {
                return e.split(" ")
            }
            )));
            this.forEach((function(e) {
                r.forEach((function(t) {
                    e.classList.toggle(t)
                }
                ))
            }
            ))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === arguments.length)
                    this[i].setAttribute(e, t);
                else
                    for (var r in e)
                        this[i][r] = e[r],
                        this[i].setAttribute(r, e[r]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
            return this
        },
        on: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            var r = t[0]
              , n = t[1]
              , s = t[2]
              , a = t[3];
            function o(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e),
                    f(t).is(n))
                        s.apply(t, i);
                    else
                        for (var r = f(t).parents(), a = 0; a < r.length; a += 1)
                            f(r[a]).is(n) && s.apply(r[a], i)
                }
            }
            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                s.apply(this, t)
            }
            "function" == typeof t[1] && (r = t[0],
            s = t[1],
            a = t[2],
            n = void 0),
            a || (a = !1);
            for (var d, u = r.split(" "), c = 0; c < this.length; c += 1) {
                var p = this[c];
                if (n)
                    for (d = 0; d < u.length; d += 1) {
                        var v = u[d];
                        p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                        p.dom7LiveListeners[v] || (p.dom7LiveListeners[v] = []),
                        p.dom7LiveListeners[v].push({
                            listener: s,
                            proxyListener: o
                        }),
                        p.addEventListener(v, o, a)
                    }
                else
                    for (d = 0; d < u.length; d += 1) {
                        var h = u[d];
                        p.dom7Listeners || (p.dom7Listeners = {}),
                        p.dom7Listeners[h] || (p.dom7Listeners[h] = []),
                        p.dom7Listeners[h].push({
                            listener: s,
                            proxyListener: l
                        }),
                        p.addEventListener(h, l, a)
                    }
            }
            return this
        },
        off: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            var r = t[0]
              , n = t[1]
              , s = t[2]
              , a = t[3];
            "function" == typeof t[1] && (r = t[0],
            s = t[1],
            a = t[2],
            n = void 0),
            a || (a = !1);
            for (var o = r.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], u = 0; u < this.length; u += 1) {
                    var c = this[u]
                      , p = void 0;
                    if (!n && c.dom7Listeners ? p = c.dom7Listeners[d] : n && c.dom7LiveListeners && (p = c.dom7LiveListeners[d]),
                    p && p.length)
                        for (var v = p.length - 1; v >= 0; v -= 1) {
                            var f = p[v];
                            s && f.listener === s || s && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === s ? (c.removeEventListener(d, f.proxyListener, a),
                            p.splice(v, 1)) : s || (c.removeEventListener(d, f.proxyListener, a),
                            p.splice(v, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = s(), t = arguments.length, i = new Array(t), r = 0; r < t; r++)
                i[r] = arguments[r];
            for (var n = i[0].split(" "), a = i[1], o = 0; o < n.length; o += 1)
                for (var l = n[o], d = 0; d < this.length; d += 1) {
                    var u = this[d];
                    if (e.CustomEvent) {
                        var c = new e.CustomEvent(l,{
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        });
                        u.dom7EventData = i.filter((function(e, t) {
                            return t > 0
                        }
                        )),
                        u.dispatchEvent(c),
                        u.dom7EventData = [],
                        delete u.dom7EventData
                    }
                }
            return this
        },
        transitionEnd: function(e) {
            var t = this;
            return e && t.on("transitionend", (function i(r) {
                r.target === this && (e.call(this, r),
                t.off("transitionend", i))
            }
            )),
            this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            var e = s();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                var e = s()
                  , t = r()
                  , i = this[0]
                  , n = i.getBoundingClientRect()
                  , a = t.body
                  , o = i.clientTop || a.clientTop || 0
                  , l = i.clientLeft || a.clientLeft || 0
                  , d = i === e ? e.scrollY : i.scrollTop
                  , u = i === e ? e.scrollX : i.scrollLeft;
                return {
                    top: n.top + d - o,
                    left: n.left + u - l
                }
            }
            return null
        },
        css: function(e, t) {
            var i, r = s();
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (var n in e)
                            this[i].style[n] = e[n];
                    return this
                }
                if (this[0])
                    return r.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1)
                    this[i].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach((function(t, i) {
                e.apply(t, [t, i])
            }
            )),
            this) : this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, i, n = s(), a = r(), o = this[0];
            if (!o || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (o.matches)
                    return o.matches(e);
                if (o.webkitMatchesSelector)
                    return o.webkitMatchesSelector(e);
                if (o.msMatchesSelector)
                    return o.msMatchesSelector(e);
                for (t = f(e),
                i = 0; i < t.length; i += 1)
                    if (t[i] === o)
                        return !0;
                return !1
            }
            if (e === a)
                return o === a;
            if (e === n)
                return o === n;
            if (e.nodeType || e instanceof c) {
                for (t = e.nodeType ? [e] : e,
                i = 0; i < t.length; i += 1)
                    if (t[i] === o)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t = this.length;
            if (e > t - 1)
                return f([]);
            if (e < 0) {
                var i = t + e;
                return f(i < 0 ? [] : [this[i]])
            }
            return f([this[e]])
        },
        append: function() {
            for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
                e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof e) {
                        var s = t.createElement("div");
                        for (s.innerHTML = e; s.firstChild; )
                            this[n].appendChild(s.firstChild)
                    } else if (e instanceof c)
                        for (var a = 0; a < e.length; a += 1)
                            this[n].appendChild(e[a]);
                    else
                        this[n].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, i, n = r();
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var s = n.createElement("div");
                    for (s.innerHTML = e,
                    i = s.childNodes.length - 1; i >= 0; i -= 1)
                        this[t].insertBefore(s.childNodes[i], this[t].childNodes[0])
                } else if (e instanceof c)
                    for (i = 0; i < e.length; i += 1)
                        this[t].insertBefore(e[i], this[t].childNodes[0]);
                else
                    this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && f(this[0].nextElementSibling).is(e) ? f([this[0].nextElementSibling]) : f([]) : this[0].nextElementSibling ? f([this[0].nextElementSibling]) : f([]) : f([])
        },
        nextAll: function(e) {
            var t = []
              , i = this[0];
            if (!i)
                return f([]);
            for (; i.nextElementSibling; ) {
                var r = i.nextElementSibling;
                e ? f(r).is(e) && t.push(r) : t.push(r),
                i = r
            }
            return f(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && f(t.previousElementSibling).is(e) ? f([t.previousElementSibling]) : f([]) : t.previousElementSibling ? f([t.previousElementSibling]) : f([])
            }
            return f([])
        },
        prevAll: function(e) {
            var t = []
              , i = this[0];
            if (!i)
                return f([]);
            for (; i.previousElementSibling; ) {
                var r = i.previousElementSibling;
                e ? f(r).is(e) && t.push(r) : t.push(r),
                i = r
            }
            return f(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                null !== this[i].parentNode && (e ? f(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return f(t)
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var r = this[i].parentNode; r; )
                    e ? f(r).is(e) && t.push(r) : t.push(r),
                    r = r.parentNode;
            return f(t)
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? f([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var r = this[i].querySelectorAll(e), n = 0; n < r.length; n += 1)
                    t.push(r[n]);
            return f(t)
        },
        children: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var r = this[i].children, n = 0; n < r.length; n += 1)
                    e && !f(r[n]).is(e) || t.push(r[n]);
            return f(t)
        },
        filter: function(e) {
            return f(v(this, e))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    Object.keys(g).forEach((function(e) {
        Object.defineProperty(f.fn, e, {
            value: g[e],
            writable: !0
        })
    }
    ));
    const b = f;
    function w(e, t) {
        return void 0 === t && (t = 0),
        setTimeout(e, t)
    }
    function C() {
        return Date.now()
    }
    function T(e, t) {
        void 0 === t && (t = "x");
        var i, r, n, a = s(), o = function(e) {
            var t, i = s();
            return i.getComputedStyle && (t = i.getComputedStyle(e, null)),
            !t && e.currentStyle && (t = e.currentStyle),
            t || (t = e.style),
            t
        }(e);
        return a.WebKitCSSMatrix ? ((r = o.transform || o.webkitTransform).split(",").length > 6 && (r = r.split(", ").map((function(e) {
            return e.replace(",", ".")
        }
        )).join(", ")),
        n = new a.WebKitCSSMatrix("none" === r ? "" : r)) : i = (n = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
        "x" === t && (r = a.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
        "y" === t && (r = a.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
        r || 0
    }
    function y(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }
    function S() {
        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], i = 1; i < arguments.length; i += 1) {
            var r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
            if (null != r)
                for (var n = Object.keys(Object(r)).filter((function(e) {
                    return t.indexOf(e) < 0
                }
                )), s = 0, a = n.length; s < a; s += 1) {
                    var o = n[s]
                      , l = Object.getOwnPropertyDescriptor(r, o);
                    void 0 !== l && l.enumerable && (y(e[o]) && y(r[o]) ? r[o].__swiper__ ? e[o] = r[o] : S(e[o], r[o]) : !y(e[o]) && y(r[o]) ? (e[o] = {},
                    r[o].__swiper__ ? e[o] = r[o] : S(e[o], r[o])) : e[o] = r[o])
                }
        }
        return e
    }
    function x(e, t) {
        Object.keys(t).forEach((function(i) {
            y(t[i]) && Object.keys(t[i]).forEach((function(r) {
                "function" == typeof t[i][r] && (t[i][r] = t[i][r].bind(e))
            }
            )),
            e[i] = t[i]
        }
        ))
    }
    function E(e) {
        return void 0 === e && (e = ""),
        "." + e.trim().replace(/([\.:\/])/g, "\\$1").replace(/ /g, ".")
    }
    var M, P, L;
    function k() {
        return M || (M = function() {
            var e = s()
              , t = r();
            return {
                touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                pointerEvents: !!e.PointerEvent && "maxTouchPoints"in e.navigator && e.navigator.maxTouchPoints >= 0,
                observer: "MutationObserver"in e || "WebkitMutationObserver"in e,
                passiveListener: function() {
                    var t = !1;
                    try {
                        var i = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, i)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart"in e
            }
        }()),
        M
    }
    function O(e) {
        return void 0 === e && (e = {}),
        P || (P = function(e) {
            var t = (void 0 === e ? {} : e).userAgent
              , i = k()
              , r = s()
              , n = r.navigator.platform
              , a = t || r.navigator.userAgent
              , o = {
                ios: !1,
                android: !1
            }
              , l = r.screen.width
              , d = r.screen.height
              , u = a.match(/(Android);?[\s\/]+([\d.]+)?/)
              , c = a.match(/(iPad).*OS\s([\d_]+)/)
              , p = a.match(/(iPod)(.*OS\s([\d_]+))?/)
              , v = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , f = "Win32" === n
              , h = "MacIntel" === n;
            return !c && h && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(l + "x" + d) >= 0 && ((c = a.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]),
            h = !1),
            u && !f && (o.os = "android",
            o.android = !0),
            (c || v || p) && (o.os = "ios",
            o.ios = !0),
            o
        }(e)),
        P
    }
    function A() {
        return L || (L = function() {
            var e, t = s();
            return {
                isEdge: !!t.navigator.userAgent.match(/Edge/g),
                isSafari: (e = t.navigator.userAgent.toLowerCase(),
                e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            }
        }()),
        L
    }
    const z = {
        name: "resize",
        create: function() {
            var e = this;
            S(e, {
                resize: {
                    observer: null,
                    createObserver: function() {
                        e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver((function(t) {
                            var i = e.width
                              , r = e.height
                              , n = i
                              , s = r;
                            t.forEach((function(t) {
                                var i = t.contentBoxSize
                                  , r = t.contentRect
                                  , a = t.target;
                                a && a !== e.el || (n = r ? r.width : (i[0] || i).inlineSize,
                                s = r ? r.height : (i[0] || i).blockSize)
                            }
                            )),
                            n === i && s === r || e.resize.resizeHandler()
                        }
                        )),
                        e.resize.observer.observe(e.el))
                    },
                    removeObserver: function() {
                        e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el),
                        e.resize.observer = null)
                    },
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function(e) {
                var t = s();
                e.params.resizeObserver && void 0 !== s().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler),
                t.addEventListener("orientationchange", e.resize.orientationChangeHandler))
            },
            destroy: function(e) {
                var t = s();
                e.resize.removeObserver(),
                t.removeEventListener("resize", e.resize.resizeHandler),
                t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
            }
        }
    };
    function I() {
        return (I = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                    Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    var B = {
        attach: function(e, t) {
            void 0 === t && (t = {});
            var i = s()
              , r = this
              , n = new (i.MutationObserver || i.WebkitMutationObserver)((function(e) {
                if (1 !== e.length) {
                    var t = function() {
                        r.emit("observerUpdate", e[0])
                    };
                    i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0)
                } else
                    r.emit("observerUpdate", e[0])
            }
            ));
            n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            r.observer.observers.push(n)
        },
        init: function() {
            var e = this;
            if (e.support.observer && e.params.observer) {
                if (e.params.observeParents)
                    for (var t = e.$el.parents(), i = 0; i < t.length; i += 1)
                        e.observer.attach(t[i]);
                e.observer.attach(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }),
                e.observer.attach(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach((function(e) {
                e.disconnect()
            }
            )),
            this.observer.observers = []
        }
    };
    const D = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            x(this, {
                observer: I({}, B, {
                    observers: []
                })
            })
        },
        on: {
            init: function(e) {
                e.observer.init()
            },
            destroy: function(e) {
                e.observer.destroy()
            }
        }
    }
      , G = {
        on: function(e, t, i) {
            var r = this;
            if ("function" != typeof t)
                return r;
            var n = i ? "unshift" : "push";
            return e.split(" ").forEach((function(e) {
                r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][n](t)
            }
            )),
            r
        },
        once: function(e, t, i) {
            var r = this;
            if ("function" != typeof t)
                return r;
            function n() {
                r.off(e, n),
                n.__emitterProxy && delete n.__emitterProxy;
                for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                    s[a] = arguments[a];
                t.apply(r, s)
            }
            return n.__emitterProxy = t,
            r.on(e, n, i)
        },
        onAny: function(e, t) {
            var i = this;
            if ("function" != typeof e)
                return i;
            var r = t ? "unshift" : "push";
            return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[r](e),
            i
        },
        offAny: function(e) {
            var t = this;
            if (!t.eventsAnyListeners)
                return t;
            var i = t.eventsAnyListeners.indexOf(e);
            return i >= 0 && t.eventsAnyListeners.splice(i, 1),
            t
        },
        off: function(e, t) {
            var i = this;
            return i.eventsListeners ? (e.split(" ").forEach((function(e) {
                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((function(r, n) {
                    (r === t || r.__emitterProxy && r.__emitterProxy === t) && i.eventsListeners[e].splice(n, 1)
                }
                ))
            }
            )),
            i) : i
        },
        emit: function() {
            var e, t, i, r = this;
            if (!r.eventsListeners)
                return r;
            for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++)
                s[a] = arguments[a];
            "string" == typeof s[0] || Array.isArray(s[0]) ? (e = s[0],
            t = s.slice(1, s.length),
            i = r) : (e = s[0].events,
            t = s[0].data,
            i = s[0].context || r),
            t.unshift(i);
            var o = Array.isArray(e) ? e : e.split(" ");
            return o.forEach((function(e) {
                r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach((function(r) {
                    r.apply(i, [e].concat(t))
                }
                )),
                r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach((function(e) {
                    e.apply(i, t)
                }
                ))
            }
            )),
            r
        }
    };
    const N = {
        updateSize: function() {
            var e, t, i = this, r = i.$el;
            e = void 0 !== i.params.width && null !== i.params.width ? i.params.width : r[0].clientWidth,
            t = void 0 !== i.params.height && null !== i.params.height ? i.params.height : r[0].clientHeight,
            0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10),
            t = t - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10),
            Number.isNaN(e) && (e = 0),
            Number.isNaN(t) && (t = 0),
            S(i, {
                width: e,
                height: t,
                size: i.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this;
            function t(t) {
                return e.isHorizontal() ? t : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[t]
            }
            function i(e, i) {
                return parseFloat(e.getPropertyValue(t(i)) || 0)
            }
            var r = e.params
              , n = e.$wrapperEl
              , s = e.size
              , a = e.rtlTranslate
              , o = e.wrongRTL
              , l = e.virtual && r.virtual.enabled
              , d = l ? e.virtual.slides.length : e.slides.length
              , u = n.children("." + e.params.slideClass)
              , c = l ? e.virtual.slides.length : u.length
              , p = []
              , v = []
              , f = []
              , h = r.slidesOffsetBefore;
            "function" == typeof h && (h = r.slidesOffsetBefore.call(e));
            var m = r.slidesOffsetAfter;
            "function" == typeof m && (m = r.slidesOffsetAfter.call(e));
            var g = e.snapGrid.length
              , b = e.slidesGrid.length
              , w = r.spaceBetween
              , C = -h
              , T = 0
              , y = 0;
            if (void 0 !== s) {
                var x, E;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s),
                e.virtualSize = -w,
                a ? u.css({
                    marginLeft: "",
                    marginTop: ""
                }) : u.css({
                    marginRight: "",
                    marginBottom: ""
                }),
                r.slidesPerColumn > 1 && (x = Math.floor(c / r.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / r.slidesPerColumn) * r.slidesPerColumn,
                "auto" !== r.slidesPerView && "row" === r.slidesPerColumnFill && (x = Math.max(x, r.slidesPerView * r.slidesPerColumn)));
                for (var M, P, L, k = r.slidesPerColumn, O = x / k, A = Math.floor(c / r.slidesPerColumn), z = 0; z < c; z += 1) {
                    E = 0;
                    var I = u.eq(z);
                    if (r.slidesPerColumn > 1) {
                        var B = void 0
                          , D = void 0
                          , G = void 0;
                        if ("row" === r.slidesPerColumnFill && r.slidesPerGroup > 1) {
                            var N = Math.floor(z / (r.slidesPerGroup * r.slidesPerColumn))
                              , _ = z - r.slidesPerColumn * r.slidesPerGroup * N
                              , H = 0 === N ? r.slidesPerGroup : Math.min(Math.ceil((c - N * k * r.slidesPerGroup) / k), r.slidesPerGroup);
                            B = (D = _ - (G = Math.floor(_ / H)) * H + N * r.slidesPerGroup) + G * x / k,
                            I.css({
                                "-webkit-box-ordinal-group": B,
                                "-moz-box-ordinal-group": B,
                                "-ms-flex-order": B,
                                "-webkit-order": B,
                                order: B
                            })
                        } else
                            "column" === r.slidesPerColumnFill ? (G = z - (D = Math.floor(z / k)) * k,
                            (D > A || D === A && G === k - 1) && (G += 1) >= k && (G = 0,
                            D += 1)) : D = z - (G = Math.floor(z / O)) * O;
                        I.css(t("margin-top"), 0 !== G && r.spaceBetween && r.spaceBetween + "px")
                    }
                    if ("none" !== I.css("display")) {
                        if ("auto" === r.slidesPerView) {
                            var $ = getComputedStyle(I[0])
                              , j = I[0].style.transform
                              , V = I[0].style.webkitTransform;
                            if (j && (I[0].style.transform = "none"),
                            V && (I[0].style.webkitTransform = "none"),
                            r.roundLengths)
                                E = e.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0);
                            else {
                                var F = i($, "width")
                                  , R = i($, "padding-left")
                                  , W = i($, "padding-right")
                                  , q = i($, "margin-left")
                                  , X = i($, "margin-right")
                                  , Y = $.getPropertyValue("box-sizing");
                                if (Y && "border-box" === Y)
                                    E = F + q + X;
                                else {
                                    var U = I[0]
                                      , K = U.clientWidth;
                                    E = F + R + W + q + X + (U.offsetWidth - K)
                                }
                            }
                            j && (I[0].style.transform = j),
                            V && (I[0].style.webkitTransform = V),
                            r.roundLengths && (E = Math.floor(E))
                        } else
                            E = (s - (r.slidesPerView - 1) * w) / r.slidesPerView,
                            r.roundLengths && (E = Math.floor(E)),
                            u[z] && (u[z].style[t("width")] = E + "px");
                        u[z] && (u[z].swiperSlideSize = E),
                        f.push(E),
                        r.centeredSlides ? (C = C + E / 2 + T / 2 + w,
                        0 === T && 0 !== z && (C = C - s / 2 - w),
                        0 === z && (C = C - s / 2 - w),
                        Math.abs(C) < .001 && (C = 0),
                        r.roundLengths && (C = Math.floor(C)),
                        y % r.slidesPerGroup == 0 && p.push(C),
                        v.push(C)) : (r.roundLengths && (C = Math.floor(C)),
                        (y - Math.min(e.params.slidesPerGroupSkip, y)) % e.params.slidesPerGroup == 0 && p.push(C),
                        v.push(C),
                        C = C + E + w),
                        e.virtualSize += E + w,
                        T = E,
                        y += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, s) + m,
                a && o && ("slide" === r.effect || "coverflow" === r.effect) && n.css({
                    width: e.virtualSize + r.spaceBetween + "px"
                }),
                r.setWrapperSize)
                    n.css(((P = {})[t("width")] = e.virtualSize + r.spaceBetween + "px",
                    P));
                if (r.slidesPerColumn > 1)
                    if (e.virtualSize = (E + r.spaceBetween) * x,
                    e.virtualSize = Math.ceil(e.virtualSize / r.slidesPerColumn) - r.spaceBetween,
                    n.css(((L = {})[t("width")] = e.virtualSize + r.spaceBetween + "px",
                    L)),
                    r.centeredSlides) {
                        M = [];
                        for (var J = 0; J < p.length; J += 1) {
                            var Q = p[J];
                            r.roundLengths && (Q = Math.floor(Q)),
                            p[J] < e.virtualSize + p[0] && M.push(Q)
                        }
                        p = M
                    }
                if (!r.centeredSlides) {
                    M = [];
                    for (var Z = 0; Z < p.length; Z += 1) {
                        var ee = p[Z];
                        r.roundLengths && (ee = Math.floor(ee)),
                        p[Z] <= e.virtualSize - s && M.push(ee)
                    }
                    p = M,
                    Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - s)
                }
                if (0 === p.length && (p = [0]),
                0 !== r.spaceBetween) {
                    var te, ie = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                    u.filter((function(e, t) {
                        return !r.cssMode || t !== u.length - 1
                    }
                    )).css(((te = {})[ie] = w + "px",
                    te))
                }
                if (r.centeredSlides && r.centeredSlidesBounds) {
                    var re = 0;
                    f.forEach((function(e) {
                        re += e + (r.spaceBetween ? r.spaceBetween : 0)
                    }
                    ));
                    var ne = (re -= r.spaceBetween) - s;
                    p = p.map((function(e) {
                        return e < 0 ? -h : e > ne ? ne + m : e
                    }
                    ))
                }
                if (r.centerInsufficientSlides) {
                    var se = 0;
                    if (f.forEach((function(e) {
                        se += e + (r.spaceBetween ? r.spaceBetween : 0)
                    }
                    )),
                    (se -= r.spaceBetween) < s) {
                        var ae = (s - se) / 2;
                        p.forEach((function(e, t) {
                            p[t] = e - ae
                        }
                        )),
                        v.forEach((function(e, t) {
                            v[t] = e + ae
                        }
                        ))
                    }
                }
                S(e, {
                    slides: u,
                    snapGrid: p,
                    slidesGrid: v,
                    slidesSizesGrid: f
                }),
                c !== d && e.emit("slidesLengthChange"),
                p.length !== g && (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
                v.length !== b && e.emit("slidesGridLengthChange"),
                (r.watchSlidesProgress || r.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, i = this, r = [], n = i.virtual && i.params.virtual.enabled, s = 0;
            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
            var a = function(e) {
                return n ? i.slides.filter((function(t) {
                    return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
                }
                ))[0] : i.slides.eq(e)[0]
            };
            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1)
                if (i.params.centeredSlides)
                    i.visibleSlides.each((function(e) {
                        r.push(e)
                    }
                    ));
                else
                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                        var o = i.activeIndex + t;
                        if (o > i.slides.length && !n)
                            break;
                        r.push(a(o))
                    }
            else
                r.push(a(i.activeIndex));
            for (t = 0; t < r.length; t += 1)
                if (void 0 !== r[t]) {
                    var l = r[t].offsetHeight;
                    s = l > s ? l : s
                }
            s && i.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this
              , i = t.params
              , r = t.slides
              , n = t.rtlTranslate;
            if (0 !== r.length) {
                void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                var s = -e;
                n && (s = e),
                r.removeClass(i.slideVisibleClass),
                t.visibleSlidesIndexes = [],
                t.visibleSlides = [];
                for (var a = 0; a < r.length; a += 1) {
                    var o = r[a]
                      , l = (s + (i.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + i.spaceBetween);
                    if (i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) {
                        var d = -(s - o.swiperSlideOffset)
                          , u = d + t.slidesSizesGrid[a];
                        (d >= 0 && d < t.size - 1 || u > 1 && u <= t.size || d <= 0 && u >= t.size) && (t.visibleSlides.push(o),
                        t.visibleSlidesIndexes.push(a),
                        r.eq(a).addClass(i.slideVisibleClass))
                    }
                    o.progress = n ? -l : l
                }
                t.visibleSlides = b(t.visibleSlides)
            }
        },
        updateProgress: function(e) {
            var t = this;
            if (void 0 === e) {
                var i = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * i || 0
            }
            var r = t.params
              , n = t.maxTranslate() - t.minTranslate()
              , s = t.progress
              , a = t.isBeginning
              , o = t.isEnd
              , l = a
              , d = o;
            0 === n ? (s = 0,
            a = !0,
            o = !0) : (a = (s = (e - t.minTranslate()) / n) <= 0,
            o = s >= 1),
            S(t, {
                progress: s,
                isBeginning: a,
                isEnd: o
            }),
            (r.watchSlidesProgress || r.watchSlidesVisibility || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e),
            a && !l && t.emit("reachBeginning toEdge"),
            o && !d && t.emit("reachEnd toEdge"),
            (l && !a || d && !o) && t.emit("fromEdge"),
            t.emit("progress", s)
        },
        updateSlidesClasses: function() {
            var e, t = this, i = t.slides, r = t.params, n = t.$wrapperEl, s = t.activeIndex, a = t.realIndex, o = t.virtual && r.virtual.enabled;
            i.removeClass(r.slideActiveClass + " " + r.slideNextClass + " " + r.slidePrevClass + " " + r.slideDuplicateActiveClass + " " + r.slideDuplicateNextClass + " " + r.slideDuplicatePrevClass),
            (e = o ? t.$wrapperEl.find("." + r.slideClass + '[data-swiper-slide-index="' + s + '"]') : i.eq(s)).addClass(r.slideActiveClass),
            r.loop && (e.hasClass(r.slideDuplicateClass) ? n.children("." + r.slideClass + ":not(." + r.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(r.slideDuplicateActiveClass) : n.children("." + r.slideClass + "." + r.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(r.slideDuplicateActiveClass));
            var l = e.nextAll("." + r.slideClass).eq(0).addClass(r.slideNextClass);
            r.loop && 0 === l.length && (l = i.eq(0)).addClass(r.slideNextClass);
            var d = e.prevAll("." + r.slideClass).eq(0).addClass(r.slidePrevClass);
            r.loop && 0 === d.length && (d = i.eq(-1)).addClass(r.slidePrevClass),
            r.loop && (l.hasClass(r.slideDuplicateClass) ? n.children("." + r.slideClass + ":not(." + r.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicateNextClass) : n.children("." + r.slideClass + "." + r.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicateNextClass),
            d.hasClass(r.slideDuplicateClass) ? n.children("." + r.slideClass + ":not(." + r.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicatePrevClass) : n.children("." + r.slideClass + "." + r.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicatePrevClass)),
            t.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
            var t, i = this, r = i.rtlTranslate ? i.translate : -i.translate, n = i.slidesGrid, s = i.snapGrid, a = i.params, o = i.activeIndex, l = i.realIndex, d = i.snapIndex, u = e;
            if (void 0 === u) {
                for (var c = 0; c < n.length; c += 1)
                    void 0 !== n[c + 1] ? r >= n[c] && r < n[c + 1] - (n[c + 1] - n[c]) / 2 ? u = c : r >= n[c] && r < n[c + 1] && (u = c + 1) : r >= n[c] && (u = c);
                a.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
            }
            if (s.indexOf(r) >= 0)
                t = s.indexOf(r);
            else {
                var p = Math.min(a.slidesPerGroupSkip, u);
                t = p + Math.floor((u - p) / a.slidesPerGroup)
            }
            if (t >= s.length && (t = s.length - 1),
            u !== o) {
                var v = parseInt(i.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                S(i, {
                    snapIndex: t,
                    realIndex: v,
                    previousIndex: o,
                    activeIndex: u
                }),
                i.emit("activeIndexChange"),
                i.emit("snapIndexChange"),
                l !== v && i.emit("realIndexChange"),
                (i.initialized || i.params.runCallbacksOnInit) && i.emit("slideChange")
            } else
                t !== d && (i.snapIndex = t,
                i.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t, i = this, r = i.params, n = b(e.target).closest("." + r.slideClass)[0], s = !1;
            if (n)
                for (var a = 0; a < i.slides.length; a += 1)
                    if (i.slides[a] === n) {
                        s = !0,
                        t = a;
                        break
                    }
            if (!n || !s)
                return i.clickedSlide = void 0,
                void (i.clickedIndex = void 0);
            i.clickedSlide = n,
            i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(b(n).attr("data-swiper-slide-index"), 10) : i.clickedIndex = t,
            r.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
        }
    };
    function _(e) {
        var t = this
          , i = r()
          , n = s()
          , a = t.touchEventsData
          , o = t.params
          , l = t.touches;
        if (t.enabled && (!t.animating || !o.preventInteractionOnTransition)) {
            var d = e;
            d.originalEvent && (d = d.originalEvent);
            var u = b(d.target);
            if ("wrapper" !== o.touchEventsTarget || u.closest(t.wrapperEl).length)
                if (a.isTouchEvent = "touchstart" === d.type,
                a.isTouchEvent || !("which"in d) || 3 !== d.which)
                    if (!(!a.isTouchEvent && "button"in d && d.button > 0))
                        if (!a.isTouched || !a.isMoved)
                            if (!!o.noSwipingClass && "" !== o.noSwipingClass && d.target && d.target.shadowRoot && e.path && e.path[0] && (u = b(e.path[0])),
                            o.noSwiping && u.closest(o.noSwipingSelector ? o.noSwipingSelector : "." + o.noSwipingClass)[0])
                                t.allowClick = !0;
                            else if (!o.swipeHandler || u.closest(o.swipeHandler)[0]) {
                                l.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX,
                                l.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
                                var c = l.currentX
                                  , p = l.currentY
                                  , v = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection
                                  , f = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                                if (v && (c <= f || c >= n.innerWidth - f)) {
                                    if ("prevent" !== v)
                                        return;
                                    e.preventDefault()
                                }
                                if (S(a, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }),
                                l.startX = c,
                                l.startY = p,
                                a.touchStartTime = C(),
                                t.allowClick = !0,
                                t.updateSize(),
                                t.swipeDirection = void 0,
                                o.threshold > 0 && (a.allowThresholdMove = !1),
                                "touchstart" !== d.type) {
                                    var h = !0;
                                    u.is(a.formElements) && (h = !1),
                                    i.activeElement && b(i.activeElement).is(a.formElements) && i.activeElement !== u[0] && i.activeElement.blur();
                                    var m = h && t.allowTouchMove && o.touchStartPreventDefault;
                                    !o.touchStartForcePreventDefault && !m || u[0].isContentEditable || d.preventDefault()
                                }
                                t.emit("touchStart", d)
                            }
        }
    }
    function H(e) {
        var t = r()
          , i = this
          , n = i.touchEventsData
          , s = i.params
          , a = i.touches
          , o = i.rtlTranslate;
        if (i.enabled) {
            var l = e;
            if (l.originalEvent && (l = l.originalEvent),
            n.isTouched) {
                if (!n.isTouchEvent || "touchmove" === l.type) {
                    var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0])
                      , u = "touchmove" === l.type ? d.pageX : l.pageX
                      , c = "touchmove" === l.type ? d.pageY : l.pageY;
                    if (l.preventedByNestedSwiper)
                        return a.startX = u,
                        void (a.startY = c);
                    if (!i.allowTouchMove)
                        return i.allowClick = !1,
                        void (n.isTouched && (S(a, {
                            startX: u,
                            startY: c,
                            currentX: u,
                            currentY: c
                        }),
                        n.touchStartTime = C()));
                    if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                        if (i.isVertical()) {
                            if (c < a.startY && i.translate <= i.maxTranslate() || c > a.startY && i.translate >= i.minTranslate())
                                return n.isTouched = !1,
                                void (n.isMoved = !1)
                        } else if (u < a.startX && i.translate <= i.maxTranslate() || u > a.startX && i.translate >= i.minTranslate())
                            return;
                    if (n.isTouchEvent && t.activeElement && l.target === t.activeElement && b(l.target).is(n.formElements))
                        return n.isMoved = !0,
                        void (i.allowClick = !1);
                    if (n.allowTouchCallbacks && i.emit("touchMove", l),
                    !(l.targetTouches && l.targetTouches.length > 1)) {
                        a.currentX = u,
                        a.currentY = c;
                        var p = a.currentX - a.startX
                          , v = a.currentY - a.startY;
                        if (!(i.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(v, 2)) < i.params.threshold)) {
                            var f;
                            if (void 0 === n.isScrolling)
                                i.isHorizontal() && a.currentY === a.startY || i.isVertical() && a.currentX === a.startX ? n.isScrolling = !1 : p * p + v * v >= 25 && (f = 180 * Math.atan2(Math.abs(v), Math.abs(p)) / Math.PI,
                                n.isScrolling = i.isHorizontal() ? f > s.touchAngle : 90 - f > s.touchAngle);
                            if (n.isScrolling && i.emit("touchMoveOpposite", l),
                            void 0 === n.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (n.startMoving = !0)),
                            n.isScrolling)
                                n.isTouched = !1;
                            else if (n.startMoving) {
                                i.allowClick = !1,
                                !s.cssMode && l.cancelable && l.preventDefault(),
                                s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
                                n.isMoved || (s.loop && i.loopFix(),
                                n.startTranslate = i.getTranslate(),
                                i.setTransition(0),
                                i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                n.allowMomentumBounce = !1,
                                !s.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0),
                                i.emit("sliderFirstMove", l)),
                                i.emit("sliderMove", l),
                                n.isMoved = !0;
                                var h = i.isHorizontal() ? p : v;
                                a.diff = h,
                                h *= s.touchRatio,
                                o && (h = -h),
                                i.swipeDirection = h > 0 ? "prev" : "next",
                                n.currentTranslate = h + n.startTranslate;
                                var m = !0
                                  , g = s.resistanceRatio;
                                if (s.touchReleaseOnEdges && (g = 0),
                                h > 0 && n.currentTranslate > i.minTranslate() ? (m = !1,
                                s.resistance && (n.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + n.startTranslate + h, g))) : h < 0 && n.currentTranslate < i.maxTranslate() && (m = !1,
                                s.resistance && (n.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - n.startTranslate - h, g))),
                                m && (l.preventedByNestedSwiper = !0),
                                !i.allowSlideNext && "next" === i.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate),
                                !i.allowSlidePrev && "prev" === i.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate),
                                i.allowSlidePrev || i.allowSlideNext || (n.currentTranslate = n.startTranslate),
                                s.threshold > 0) {
                                    if (!(Math.abs(h) > s.threshold || n.allowThresholdMove))
                                        return void (n.currentTranslate = n.startTranslate);
                                    if (!n.allowThresholdMove)
                                        return n.allowThresholdMove = !0,
                                        a.startX = a.currentX,
                                        a.startY = a.currentY,
                                        n.currentTranslate = n.startTranslate,
                                        void (a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                                }
                                s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (i.updateActiveIndex(),
                                i.updateSlidesClasses()),
                                s.freeMode && (0 === n.velocities.length && n.velocities.push({
                                    position: a[i.isHorizontal() ? "startX" : "startY"],
                                    time: n.touchStartTime
                                }),
                                n.velocities.push({
                                    position: a[i.isHorizontal() ? "currentX" : "currentY"],
                                    time: C()
                                })),
                                i.updateProgress(n.currentTranslate),
                                i.setTranslate(n.currentTranslate))
                            }
                        }
                    }
                }
            } else
                n.startMoving && n.isScrolling && i.emit("touchMoveOpposite", l)
        }
    }
    function $(e) {
        var t = this
          , i = t.touchEventsData
          , r = t.params
          , n = t.touches
          , s = t.rtlTranslate
          , a = t.$wrapperEl
          , o = t.slidesGrid
          , l = t.snapGrid;
        if (t.enabled) {
            var d = e;
            if (d.originalEvent && (d = d.originalEvent),
            i.allowTouchCallbacks && t.emit("touchEnd", d),
            i.allowTouchCallbacks = !1,
            !i.isTouched)
                return i.isMoved && r.grabCursor && t.setGrabCursor(!1),
                i.isMoved = !1,
                void (i.startMoving = !1);
            r.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var u, c = C(), p = c - i.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(d),
            t.emit("tap click", d),
            p < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)),
            i.lastClickTime = C(),
            w((function() {
                t.destroyed || (t.allowClick = !0)
            }
            )),
            !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate)
                return i.isTouched = !1,
                i.isMoved = !1,
                void (i.startMoving = !1);
            if (i.isTouched = !1,
            i.isMoved = !1,
            i.startMoving = !1,
            u = r.followFinger ? s ? t.translate : -t.translate : -i.currentTranslate,
            !r.cssMode)
                if (r.freeMode) {
                    if (u < -t.minTranslate())
                        return void t.slideTo(t.activeIndex);
                    if (u > -t.maxTranslate())
                        return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (r.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var v = i.velocities.pop()
                              , f = i.velocities.pop()
                              , h = v.position - f.position
                              , m = v.time - f.time;
                            t.velocity = h / m,
                            t.velocity /= 2,
                            Math.abs(t.velocity) < r.freeModeMinimumVelocity && (t.velocity = 0),
                            (m > 150 || C() - v.time > 300) && (t.velocity = 0)
                        } else
                            t.velocity = 0;
                        t.velocity *= r.freeModeMomentumVelocityRatio,
                        i.velocities.length = 0;
                        var g = 1e3 * r.freeModeMomentumRatio
                          , b = t.velocity * g
                          , T = t.translate + b;
                        s && (T = -T);
                        var y, S, x = !1, E = 20 * Math.abs(t.velocity) * r.freeModeMomentumBounceRatio;
                        if (T < t.maxTranslate())
                            r.freeModeMomentumBounce ? (T + t.maxTranslate() < -E && (T = t.maxTranslate() - E),
                            y = t.maxTranslate(),
                            x = !0,
                            i.allowMomentumBounce = !0) : T = t.maxTranslate(),
                            r.loop && r.centeredSlides && (S = !0);
                        else if (T > t.minTranslate())
                            r.freeModeMomentumBounce ? (T - t.minTranslate() > E && (T = t.minTranslate() + E),
                            y = t.minTranslate(),
                            x = !0,
                            i.allowMomentumBounce = !0) : T = t.minTranslate(),
                            r.loop && r.centeredSlides && (S = !0);
                        else if (r.freeModeSticky) {
                            for (var M, P = 0; P < l.length; P += 1)
                                if (l[P] > -T) {
                                    M = P;
                                    break
                                }
                            T = -(T = Math.abs(l[M] - T) < Math.abs(l[M - 1] - T) || "next" === t.swipeDirection ? l[M] : l[M - 1])
                        }
                        if (S && t.once("transitionEnd", (function() {
                            t.loopFix()
                        }
                        )),
                        0 !== t.velocity) {
                            if (g = s ? Math.abs((-T - t.translate) / t.velocity) : Math.abs((T - t.translate) / t.velocity),
                            r.freeModeSticky) {
                                var L = Math.abs((s ? -T : T) - t.translate)
                                  , k = t.slidesSizesGrid[t.activeIndex];
                                g = L < k ? r.speed : L < 2 * k ? 1.5 * r.speed : 2.5 * r.speed
                            }
                        } else if (r.freeModeSticky)
                            return void t.slideToClosest();
                        r.freeModeMomentumBounce && x ? (t.updateProgress(y),
                        t.setTransition(g),
                        t.setTranslate(T),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating = !0,
                        a.transitionEnd((function() {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"),
                            t.setTransition(r.speed),
                            setTimeout((function() {
                                t.setTranslate(y),
                                a.transitionEnd((function() {
                                    t && !t.destroyed && t.transitionEnd()
                                }
                                ))
                            }
                            ), 0))
                        }
                        ))) : t.velocity ? (t.updateProgress(T),
                        t.setTransition(g),
                        t.setTranslate(T),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating || (t.animating = !0,
                        a.transitionEnd((function() {
                            t && !t.destroyed && t.transitionEnd()
                        }
                        )))) : (t.emit("_freeModeNoMomentumRelease"),
                        t.updateProgress(T)),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses()
                    } else {
                        if (r.freeModeSticky)
                            return void t.slideToClosest();
                        r.freeMode && t.emit("_freeModeNoMomentumRelease")
                    }
                    (!r.freeModeMomentum || p >= r.longSwipesMs) && (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses())
                } else {
                    for (var O = 0, A = t.slidesSizesGrid[0], z = 0; z < o.length; z += z < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                        var I = z < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                        void 0 !== o[z + I] ? u >= o[z] && u < o[z + I] && (O = z,
                        A = o[z + I] - o[z]) : u >= o[z] && (O = z,
                        A = o[o.length - 1] - o[o.length - 2])
                    }
                    var B = (u - o[O]) / A
                      , D = O < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                    if (p > r.longSwipesMs) {
                        if (!r.longSwipes)
                            return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (B >= r.longSwipesRatio ? t.slideTo(O + D) : t.slideTo(O)),
                        "prev" === t.swipeDirection && (B > 1 - r.longSwipesRatio ? t.slideTo(O + D) : t.slideTo(O))
                    } else {
                        if (!r.shortSwipes)
                            return void t.slideTo(t.activeIndex);
                        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(O + D) : t.slideTo(O) : ("next" === t.swipeDirection && t.slideTo(O + D),
                        "prev" === t.swipeDirection && t.slideTo(O))
                    }
                }
        }
    }
    function j() {
        var e = this
          , t = e.params
          , i = e.el;
        if (!i || 0 !== i.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var r = e.allowSlideNext
              , n = e.allowSlidePrev
              , s = e.snapGrid;
            e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
            e.allowSlidePrev = n,
            e.allowSlideNext = r,
            e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
        }
    }
    function V(e) {
        var t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
        e.stopImmediatePropagation())))
    }
    function F() {
        var e = this
          , t = e.wrapperEl
          , i = e.rtlTranslate;
        if (e.enabled) {
            e.previousTranslate = e.translate,
            e.isHorizontal() ? e.translate = i ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop,
            -0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
            var r = e.maxTranslate() - e.minTranslate();
            (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1)
        }
    }
    var R = !1;
    function W() {}
    const q = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !1,
        nested: !1,
        enabled: !0,
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function X(e, t) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var Y = {
        modular: {
            useParams: function(e) {
                var t = this;
                t.modules && Object.keys(t.modules).forEach((function(i) {
                    var r = t.modules[i];
                    r.params && S(e, r.params)
                }
                ))
            },
            useModules: function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.modules && Object.keys(t.modules).forEach((function(i) {
                    var r = t.modules[i]
                      , n = e[i] || {};
                    r.on && t.on && Object.keys(r.on).forEach((function(e) {
                        t.on(e, r.on[e])
                    }
                    )),
                    r.create && r.create.bind(t)(n)
                }
                ))
            }
        },
        eventsEmitter: G,
        update: N,
        translate: {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this
                  , i = t.params
                  , r = t.rtlTranslate
                  , n = t.translate
                  , s = t.$wrapperEl;
                if (i.virtualTranslate)
                    return r ? -n : n;
                if (i.cssMode)
                    return n;
                var a = T(s[0], e);
                return r && (a = -a),
                a || 0
            },
            setTranslate: function(e, t) {
                var i = this
                  , r = i.rtlTranslate
                  , n = i.params
                  , s = i.$wrapperEl
                  , a = i.wrapperEl
                  , o = i.progress
                  , l = 0
                  , d = 0;
                i.isHorizontal() ? l = r ? -e : e : d = e,
                n.roundLengths && (l = Math.floor(l),
                d = Math.floor(d)),
                n.cssMode ? a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -d : n.virtualTranslate || s.transform("translate3d(" + l + "px, " + d + "px, 0px)"),
                i.previousTranslate = i.translate,
                i.translate = i.isHorizontal() ? l : d;
                var u = i.maxTranslate() - i.minTranslate();
                (0 === u ? 0 : (e - i.minTranslate()) / u) !== o && i.updateProgress(e),
                i.emit("setTranslate", i.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, i, r, n) {
                void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === r && (r = !0);
                var s = this
                  , a = s.params
                  , o = s.wrapperEl;
                if (s.animating && a.preventInteractionOnTransition)
                    return !1;
                var l, d = s.minTranslate(), u = s.maxTranslate();
                if (l = r && e > d ? d : r && e < u ? u : e,
                s.updateProgress(l),
                a.cssMode) {
                    var c, p = s.isHorizontal();
                    if (0 === t)
                        o[p ? "scrollLeft" : "scrollTop"] = -l;
                    else if (o.scrollTo)
                        o.scrollTo(((c = {})[p ? "left" : "top"] = -l,
                        c.behavior = "smooth",
                        c));
                    else
                        o[p ? "scrollLeft" : "scrollTop"] = -l;
                    return !0
                }
                return 0 === t ? (s.setTransition(0),
                s.setTranslate(l),
                i && (s.emit("beforeTransitionStart", t, n),
                s.emit("transitionEnd"))) : (s.setTransition(t),
                s.setTranslate(l),
                i && (s.emit("beforeTransitionStart", t, n),
                s.emit("transitionStart")),
                s.animating || (s.animating = !0,
                s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(e) {
                    s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                    s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd),
                    s.onTranslateToWrapperTransitionEnd = null,
                    delete s.onTranslateToWrapperTransitionEnd,
                    i && s.emit("transitionEnd"))
                }
                ),
                s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))),
                !0
            }
        },
        transition: {
            setTransition: function(e, t) {
                var i = this;
                i.params.cssMode || i.$wrapperEl.transition(e),
                i.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                var i = this
                  , r = i.activeIndex
                  , n = i.params
                  , s = i.previousIndex;
                if (!n.cssMode) {
                    n.autoHeight && i.updateAutoHeight();
                    var a = t;
                    if (a || (a = r > s ? "next" : r < s ? "prev" : "reset"),
                    i.emit("transitionStart"),
                    e && r !== s) {
                        if ("reset" === a)
                            return void i.emit("slideResetTransitionStart");
                        i.emit("slideChangeTransitionStart"),
                        "next" === a ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
                    }
                }
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                var i = this
                  , r = i.activeIndex
                  , n = i.previousIndex
                  , s = i.params;
                if (i.animating = !1,
                !s.cssMode) {
                    i.setTransition(0);
                    var a = t;
                    if (a || (a = r > n ? "next" : r < n ? "prev" : "reset"),
                    i.emit("transitionEnd"),
                    e && r !== n) {
                        if ("reset" === a)
                            return void i.emit("slideResetTransitionEnd");
                        i.emit("slideChangeTransitionEnd"),
                        "next" === a ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
                    }
                }
            }
        },
        slide: {
            slideTo: function(e, t, i, r, n) {
                if (void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                "number" != typeof e && "string" != typeof e)
                    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
                if ("string" == typeof e) {
                    var s = parseInt(e, 10);
                    if (!isFinite(s))
                        throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                    e = s
                }
                var a = this
                  , o = e;
                o < 0 && (o = 0);
                var l = a.params
                  , d = a.snapGrid
                  , u = a.slidesGrid
                  , c = a.previousIndex
                  , p = a.activeIndex
                  , v = a.rtlTranslate
                  , f = a.wrapperEl
                  , h = a.enabled;
                if (a.animating && l.preventInteractionOnTransition || !h && !r && !n)
                    return !1;
                var m = Math.min(a.params.slidesPerGroupSkip, o)
                  , g = m + Math.floor((o - m) / a.params.slidesPerGroup);
                g >= d.length && (g = d.length - 1),
                (p || l.initialSlide || 0) === (c || 0) && i && a.emit("beforeSlideChangeStart");
                var b, w = -d[g];
                if (a.updateProgress(w),
                l.normalizeSlideIndex)
                    for (var C = 0; C < u.length; C += 1) {
                        var T = -Math.floor(100 * w)
                          , y = Math.floor(100 * u[C])
                          , S = Math.floor(100 * u[C + 1]);
                        void 0 !== u[C + 1] ? T >= y && T < S - (S - y) / 2 ? o = C : T >= y && T < S && (o = C + 1) : T >= y && (o = C)
                    }
                if (a.initialized && o !== p) {
                    if (!a.allowSlideNext && w < a.translate && w < a.minTranslate())
                        return !1;
                    if (!a.allowSlidePrev && w > a.translate && w > a.maxTranslate() && (p || 0) !== o)
                        return !1
                }
                if (b = o > p ? "next" : o < p ? "prev" : "reset",
                v && -w === a.translate || !v && w === a.translate)
                    return a.updateActiveIndex(o),
                    l.autoHeight && a.updateAutoHeight(),
                    a.updateSlidesClasses(),
                    "slide" !== l.effect && a.setTranslate(w),
                    "reset" !== b && (a.transitionStart(i, b),
                    a.transitionEnd(i, b)),
                    !1;
                if (l.cssMode) {
                    var x, E = a.isHorizontal(), M = -w;
                    if (v && (M = f.scrollWidth - f.offsetWidth - M),
                    0 === t)
                        f[E ? "scrollLeft" : "scrollTop"] = M;
                    else if (f.scrollTo)
                        f.scrollTo(((x = {})[E ? "left" : "top"] = M,
                        x.behavior = "smooth",
                        x));
                    else
                        f[E ? "scrollLeft" : "scrollTop"] = M;
                    return !0
                }
                return 0 === t ? (a.setTransition(0),
                a.setTranslate(w),
                a.updateActiveIndex(o),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", t, r),
                a.transitionStart(i, b),
                a.transitionEnd(i, b)) : (a.setTransition(t),
                a.setTranslate(w),
                a.updateActiveIndex(o),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", t, r),
                a.transitionStart(i, b),
                a.animating || (a.animating = !0,
                a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                    a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                    a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                    a.onSlideToWrapperTransitionEnd = null,
                    delete a.onSlideToWrapperTransitionEnd,
                    a.transitionEnd(i, b))
                }
                ),
                a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))),
                !0
            },
            slideToLoop: function(e, t, i, r) {
                void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
                var n = this
                  , s = e;
                return n.params.loop && (s += n.loopedSlides),
                n.slideTo(s, t, i, r)
            },
            slideNext: function(e, t, i) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                var r = this
                  , n = r.params
                  , s = r.animating;
                if (!r.enabled)
                    return r;
                var a = r.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
                if (n.loop) {
                    if (s && n.loopPreventsSlide)
                        return !1;
                    r.loopFix(),
                    r._clientLeft = r.$wrapperEl[0].clientLeft
                }
                return r.slideTo(r.activeIndex + a, e, t, i)
            },
            slidePrev: function(e, t, i) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                var r = this
                  , n = r.params
                  , s = r.animating
                  , a = r.snapGrid
                  , o = r.slidesGrid
                  , l = r.rtlTranslate;
                if (!r.enabled)
                    return r;
                if (n.loop) {
                    if (s && n.loopPreventsSlide)
                        return !1;
                    r.loopFix(),
                    r._clientLeft = r.$wrapperEl[0].clientLeft
                }
                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                var u, c = d(l ? r.translate : -r.translate), p = a.map((function(e) {
                    return d(e)
                }
                )), v = (a[p.indexOf(c)],
                a[p.indexOf(c) - 1]);
                return void 0 === v && n.cssMode && a.forEach((function(e) {
                    !v && c >= e && (v = e)
                }
                )),
                void 0 !== v && (u = o.indexOf(v)) < 0 && (u = r.activeIndex - 1),
                r.slideTo(u, e, t, i)
            },
            slideReset: function(e, t, i) {
                return void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, i)
            },
            slideToClosest: function(e, t, i, r) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === r && (r = .5);
                var n = this
                  , s = n.activeIndex
                  , a = Math.min(n.params.slidesPerGroupSkip, s)
                  , o = a + Math.floor((s - a) / n.params.slidesPerGroup)
                  , l = n.rtlTranslate ? n.translate : -n.translate;
                if (l >= n.snapGrid[o]) {
                    var d = n.snapGrid[o];
                    l - d > (n.snapGrid[o + 1] - d) * r && (s += n.params.slidesPerGroup)
                } else {
                    var u = n.snapGrid[o - 1];
                    l - u <= (n.snapGrid[o] - u) * r && (s -= n.params.slidesPerGroup)
                }
                return s = Math.max(s, 0),
                s = Math.min(s, n.slidesGrid.length - 1),
                n.slideTo(s, e, t, i)
            },
            slideToClickedSlide: function() {
                var e, t = this, i = t.params, r = t.$wrapperEl, n = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, s = t.clickedIndex;
                if (i.loop) {
                    if (t.animating)
                        return;
                    e = parseInt(b(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                    i.centeredSlides ? s < t.loopedSlides - n / 2 || s > t.slides.length - t.loopedSlides + n / 2 ? (t.loopFix(),
                    s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                    w((function() {
                        t.slideTo(s)
                    }
                    ))) : t.slideTo(s) : s > t.slides.length - n ? (t.loopFix(),
                    s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                    w((function() {
                        t.slideTo(s)
                    }
                    ))) : t.slideTo(s)
                } else
                    t.slideTo(s)
            }
        },
        loop: {
            loopCreate: function() {
                var e = this
                  , t = r()
                  , i = e.params
                  , n = e.$wrapperEl;
                n.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                var s = n.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    var a = i.slidesPerGroup - s.length % i.slidesPerGroup;
                    if (a !== i.slidesPerGroup) {
                        for (var o = 0; o < a; o += 1) {
                            var l = b(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            n.append(l)
                        }
                        s = n.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = s.length),
                e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)),
                e.loopedSlides += i.loopAdditionalSlides,
                e.loopedSlides > s.length && (e.loopedSlides = s.length);
                var d = []
                  , u = [];
                s.each((function(t, i) {
                    var r = b(t);
                    i < e.loopedSlides && u.push(t),
                    i < s.length && i >= s.length - e.loopedSlides && d.push(t),
                    r.attr("data-swiper-slide-index", i)
                }
                ));
                for (var c = 0; c < u.length; c += 1)
                    n.append(b(u[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (var p = d.length - 1; p >= 0; p -= 1)
                    n.prepend(b(d[p].cloneNode(!0)).addClass(i.slideDuplicateClass))
            },
            loopFix: function() {
                var e = this;
                e.emit("beforeLoopFix");
                var t, i = e.activeIndex, r = e.slides, n = e.loopedSlides, s = e.allowSlidePrev, a = e.allowSlideNext, o = e.snapGrid, l = e.rtlTranslate;
                e.allowSlidePrev = !0,
                e.allowSlideNext = !0;
                var d = -o[i] - e.getTranslate();
                if (i < n)
                    t = r.length - 3 * n + i,
                    t += n,
                    e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
                else if (i >= r.length - n) {
                    t = -r.length + i + n,
                    t += n,
                    e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                }
                e.allowSlidePrev = s,
                e.allowSlideNext = a,
                e.emit("loopFix")
            },
            loopDestroy: function() {
                var e = this
                  , t = e.$wrapperEl
                  , i = e.params
                  , r = e.slides;
                t.children("." + i.slideClass + "." + i.slideDuplicateClass + ",." + i.slideClass + "." + i.slideBlankClass).remove(),
                r.removeAttr("data-swiper-slide-index")
            }
        },
        grabCursor: {
            setGrabCursor: function(e) {
                var t = this;
                if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                    var i = t.el;
                    i.style.cursor = "move",
                    i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                    i.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                    i.style.cursor = e ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() {
                var e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
            }
        },
        manipulation: {
            appendSlide: function(e) {
                var t = this
                  , i = t.$wrapperEl
                  , r = t.params;
                if (r.loop && t.loopDestroy(),
                "object" == typeof e && "length"in e)
                    for (var n = 0; n < e.length; n += 1)
                        e[n] && i.append(e[n]);
                else
                    i.append(e);
                r.loop && t.loopCreate(),
                r.observer && t.support.observer || t.update()
            },
            prependSlide: function(e) {
                var t = this
                  , i = t.params
                  , r = t.$wrapperEl
                  , n = t.activeIndex;
                i.loop && t.loopDestroy();
                var s = n + 1;
                if ("object" == typeof e && "length"in e) {
                    for (var a = 0; a < e.length; a += 1)
                        e[a] && r.prepend(e[a]);
                    s = n + e.length
                } else
                    r.prepend(e);
                i.loop && t.loopCreate(),
                i.observer && t.support.observer || t.update(),
                t.slideTo(s, 0, !1)
            },
            addSlide: function(e, t) {
                var i = this
                  , r = i.$wrapperEl
                  , n = i.params
                  , s = i.activeIndex;
                n.loop && (s -= i.loopedSlides,
                i.loopDestroy(),
                i.slides = r.children("." + n.slideClass));
                var a = i.slides.length;
                if (e <= 0)
                    i.prependSlide(t);
                else if (e >= a)
                    i.appendSlide(t);
                else {
                    for (var o = s > e ? s + 1 : s, l = [], d = a - 1; d >= e; d -= 1) {
                        var u = i.slides.eq(d);
                        u.remove(),
                        l.unshift(u)
                    }
                    if ("object" == typeof t && "length"in t) {
                        for (var c = 0; c < t.length; c += 1)
                            t[c] && r.append(t[c]);
                        o = s > e ? s + t.length : s
                    } else
                        r.append(t);
                    for (var p = 0; p < l.length; p += 1)
                        r.append(l[p]);
                    n.loop && i.loopCreate(),
                    n.observer && i.support.observer || i.update(),
                    n.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this
                  , i = t.params
                  , r = t.$wrapperEl
                  , n = t.activeIndex;
                i.loop && (n -= t.loopedSlides,
                t.loopDestroy(),
                t.slides = r.children("." + i.slideClass));
                var s, a = n;
                if ("object" == typeof e && "length"in e) {
                    for (var o = 0; o < e.length; o += 1)
                        s = e[o],
                        t.slides[s] && t.slides.eq(s).remove(),
                        s < a && (a -= 1);
                    a = Math.max(a, 0)
                } else
                    s = e,
                    t.slides[s] && t.slides.eq(s).remove(),
                    s < a && (a -= 1),
                    a = Math.max(a, 0);
                i.loop && t.loopCreate(),
                i.observer && t.support.observer || t.update(),
                i.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1)
                    e.push(t);
                this.removeSlide(e)
            }
        },
        events: {
            attachEvents: function() {
                var e = this
                  , t = r()
                  , i = e.params
                  , n = e.touchEvents
                  , s = e.el
                  , a = e.wrapperEl
                  , o = e.device
                  , l = e.support;
                e.onTouchStart = _.bind(e),
                e.onTouchMove = H.bind(e),
                e.onTouchEnd = $.bind(e),
                i.cssMode && (e.onScroll = F.bind(e)),
                e.onClick = V.bind(e);
                var d = !!i.nested;
                if (!l.touch && l.pointerEvents)
                    s.addEventListener(n.start, e.onTouchStart, !1),
                    t.addEventListener(n.move, e.onTouchMove, d),
                    t.addEventListener(n.end, e.onTouchEnd, !1);
                else {
                    if (l.touch) {
                        var u = !("touchstart" !== n.start || !l.passiveListener || !i.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.addEventListener(n.start, e.onTouchStart, u),
                        s.addEventListener(n.move, e.onTouchMove, l.passiveListener ? {
                            passive: !1,
                            capture: d
                        } : d),
                        s.addEventListener(n.end, e.onTouchEnd, u),
                        n.cancel && s.addEventListener(n.cancel, e.onTouchEnd, u),
                        R || (t.addEventListener("touchstart", W),
                        R = !0)
                    }
                    (i.simulateTouch && !o.ios && !o.android || i.simulateTouch && !l.touch && o.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1),
                    t.addEventListener("mousemove", e.onTouchMove, d),
                    t.addEventListener("mouseup", e.onTouchEnd, !1))
                }
                (i.preventClicks || i.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0),
                i.cssMode && a.addEventListener("scroll", e.onScroll),
                i.updateOnWindowResize ? e.on(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", j, !0) : e.on("observerUpdate", j, !0)
            },
            detachEvents: function() {
                var e = this
                  , t = r()
                  , i = e.params
                  , n = e.touchEvents
                  , s = e.el
                  , a = e.wrapperEl
                  , o = e.device
                  , l = e.support
                  , d = !!i.nested;
                if (!l.touch && l.pointerEvents)
                    s.removeEventListener(n.start, e.onTouchStart, !1),
                    t.removeEventListener(n.move, e.onTouchMove, d),
                    t.removeEventListener(n.end, e.onTouchEnd, !1);
                else {
                    if (l.touch) {
                        var u = !("onTouchStart" !== n.start || !l.passiveListener || !i.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.removeEventListener(n.start, e.onTouchStart, u),
                        s.removeEventListener(n.move, e.onTouchMove, d),
                        s.removeEventListener(n.end, e.onTouchEnd, u),
                        n.cancel && s.removeEventListener(n.cancel, e.onTouchEnd, u)
                    }
                    (i.simulateTouch && !o.ios && !o.android || i.simulateTouch && !l.touch && o.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1),
                    t.removeEventListener("mousemove", e.onTouchMove, d),
                    t.removeEventListener("mouseup", e.onTouchEnd, !1))
                }
                (i.preventClicks || i.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0),
                i.cssMode && a.removeEventListener("scroll", e.onScroll),
                e.off(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", j)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e = this
                  , t = e.activeIndex
                  , i = e.initialized
                  , r = e.loopedSlides
                  , n = void 0 === r ? 0 : r
                  , s = e.params
                  , a = e.$el
                  , o = s.breakpoints;
                if (o && (!o || 0 !== Object.keys(o).length)) {
                    var l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                    if (l && e.currentBreakpoint !== l) {
                        var d = l in o ? o[l] : void 0;
                        d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                            var t = d[e];
                            void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        }
                        ));
                        var u = d || e.originalParams
                          , c = s.slidesPerColumn > 1
                          , p = u.slidesPerColumn > 1
                          , v = s.enabled;
                        c && !p ? (a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column"),
                        e.emitContainerClasses()) : !c && p && (a.addClass(s.containerModifierClass + "multirow"),
                        "column" === u.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"),
                        e.emitContainerClasses());
                        var f = u.direction && u.direction !== s.direction
                          , h = s.loop && (u.slidesPerView !== s.slidesPerView || f);
                        f && i && e.changeDirection(),
                        S(e.params, u);
                        var m = e.params.enabled;
                        S(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }),
                        v && !m ? e.disable() : !v && m && e.enable(),
                        e.currentBreakpoint = l,
                        e.emit("_beforeBreakpoint", u),
                        h && i && (e.loopDestroy(),
                        e.loopCreate(),
                        e.updateSlides(),
                        e.slideTo(t - n + e.loopedSlides, 0, !1)),
                        e.emit("breakpoint", u)
                    }
                }
            },
            getBreakpoint: function(e, t, i) {
                if (void 0 === t && (t = "window"),
                e && ("container" !== t || i)) {
                    var r = !1
                      , n = s()
                      , a = "window" === t ? n.innerWidth : i.clientWidth
                      , o = "window" === t ? n.innerHeight : i.clientHeight
                      , l = Object.keys(e).map((function(e) {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            var t = parseFloat(e.substr(1));
                            return {
                                value: o * t,
                                point: e
                            }
                        }
                        return {
                            value: e,
                            point: e
                        }
                    }
                    ));
                    l.sort((function(e, t) {
                        return parseInt(e.value, 10) - parseInt(t.value, 10)
                    }
                    ));
                    for (var d = 0; d < l.length; d += 1) {
                        var u = l[d]
                          , c = u.point;
                        u.value <= a && (r = c)
                    }
                    return r || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e = this
                  , t = e.params
                  , i = e.isLocked
                  , r = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                t.slidesOffsetBefore && t.slidesOffsetAfter && r ? e.isLocked = r <= e.size : e.isLocked = 1 === e.snapGrid.length,
                e.allowSlideNext = !e.isLocked,
                e.allowSlidePrev = !e.isLocked,
                i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                i && i !== e.isLocked && (e.isEnd = !1,
                e.navigation && e.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var e, t, i, r = this, n = r.classNames, s = r.params, a = r.rtl, o = r.$el, l = r.device, d = r.support, u = (e = ["initialized", s.direction, {
                    "pointer-events": d.pointerEvents && !d.touch
                }, {
                    "free-mode": s.freeMode
                }, {
                    autoheight: s.autoHeight
                }, {
                    rtl: a
                }, {
                    multirow: s.slidesPerColumn > 1
                }, {
                    "multirow-column": s.slidesPerColumn > 1 && "column" === s.slidesPerColumnFill
                }, {
                    android: l.android
                }, {
                    ios: l.ios
                }, {
                    "css-mode": s.cssMode
                }],
                t = s.containerModifierClass,
                i = [],
                e.forEach((function(e) {
                    "object" == typeof e ? Object.keys(e).forEach((function(r) {
                        e[r] && i.push(t + r)
                    }
                    )) : "string" == typeof e && i.push(t + e)
                }
                )),
                i);
                n.push.apply(n, u),
                o.addClass([].concat(n).join(" ")),
                r.emitContainerClasses()
            },
            removeClasses: function() {
                var e = this
                  , t = e.$el
                  , i = e.classNames;
                t.removeClass(i.join(" ")),
                e.emitContainerClasses()
            }
        },
        images: {
            loadImage: function(e, t, i, r, n, a) {
                var o, l = s();
                function d() {
                    a && a()
                }
                b(e).parent("picture")[0] || e.complete && n ? d() : t ? ((o = new l.Image).onload = d,
                o.onerror = d,
                r && (o.sizes = r),
                i && (o.srcset = i),
                t && (o.src = t)) : d()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var r = e.imagesToLoad[i];
                    e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , U = {}
      , K = function() {
        function e() {
            for (var t, i, r = arguments.length, n = new Array(r), s = 0; s < r; s++)
                n[s] = arguments[s];
            if (1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? i = n[0] : (t = n[0],
            i = n[1]),
            i || (i = {}),
            i = S({}, i),
            t && !i.el && (i.el = t),
            i.el && b(i.el).length > 1) {
                var a = [];
                return b(i.el).each((function(t) {
                    var r = S({}, i, {
                        el: t
                    });
                    a.push(new e(r))
                }
                )),
                a
            }
            var o = this;
            o.__swiper__ = !0,
            o.support = k(),
            o.device = O({
                userAgent: i.userAgent
            }),
            o.browser = A(),
            o.eventsListeners = {},
            o.eventsAnyListeners = [],
            void 0 === o.modules && (o.modules = {}),
            Object.keys(o.modules).forEach((function(e) {
                var t = o.modules[e];
                if (t.params) {
                    var r = Object.keys(t.params)[0]
                      , n = t.params[r];
                    if ("object" != typeof n || null === n)
                        return;
                    if (!(r in i) || !("enabled"in n))
                        return;
                    !0 === i[r] && (i[r] = {
                        enabled: !0
                    }),
                    "object" != typeof i[r] || "enabled"in i[r] || (i[r].enabled = !0),
                    i[r] || (i[r] = {
                        enabled: !1
                    })
                }
            }
            ));
            var l, d, u = S({}, q);
            return o.useParams(u),
            o.params = S({}, u, U, i),
            o.originalParams = S({}, o.params),
            o.passedParams = S({}, i),
            o.params && o.params.on && Object.keys(o.params.on).forEach((function(e) {
                o.on(e, o.params.on[e])
            }
            )),
            o.params && o.params.onAny && o.onAny(o.params.onAny),
            o.$ = b,
            S(o, {
                enabled: o.params.enabled,
                el: t,
                classNames: [],
                slides: b(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function() {
                    return "horizontal" === o.params.direction
                },
                isVertical: function() {
                    return "vertical" === o.params.direction
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: o.params.allowSlideNext,
                allowSlidePrev: o.params.allowSlidePrev,
                touchEvents: (l = ["touchstart", "touchmove", "touchend", "touchcancel"],
                d = ["mousedown", "mousemove", "mouseup"],
                o.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]),
                o.touchEventsTouch = {
                    start: l[0],
                    move: l[1],
                    end: l[2],
                    cancel: l[3]
                },
                o.touchEventsDesktop = {
                    start: d[0],
                    move: d[1],
                    end: d[2]
                },
                o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements: "input, select, option, textarea, button, video, label",
                    lastClickTime: C(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: o.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            o.useModules(),
            o.emit("_swiper"),
            o.params.init && o.init(),
            o
        }
        var t, i, r, n = e.prototype;
        return n.enable = function() {
            var e = this;
            e.enabled || (e.enabled = !0,
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"))
        }
        ,
        n.disable = function() {
            var e = this;
            e.enabled && (e.enabled = !1,
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"))
        }
        ,
        n.setProgress = function(e, t) {
            var i = this;
            e = Math.min(Math.max(e, 0), 1);
            var r = i.minTranslate()
              , n = (i.maxTranslate() - r) * e + r;
            i.translateTo(n, void 0 === t ? 0 : t),
            i.updateActiveIndex(),
            i.updateSlidesClasses()
        }
        ,
        n.emitContainerClasses = function() {
            var e = this;
            if (e.params._emitClasses && e.el) {
                var t = e.el.className.split(" ").filter((function(t) {
                    return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass)
                }
                ));
                e.emit("_containerClasses", t.join(" "))
            }
        }
        ,
        n.getSlideClasses = function(e) {
            var t = this;
            return e.className.split(" ").filter((function(e) {
                return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
            }
            )).join(" ")
        }
        ,
        n.emitSlidesClasses = function() {
            var e = this;
            if (e.params._emitClasses && e.el) {
                var t = [];
                e.slides.each((function(i) {
                    var r = e.getSlideClasses(i);
                    t.push({
                        slideEl: i,
                        classNames: r
                    }),
                    e.emit("_slideClass", i, r)
                }
                )),
                e.emit("_slideClasses", t)
            }
        }
        ,
        n.slidesPerViewDynamic = function() {
            var e = this
              , t = e.params
              , i = e.slides
              , r = e.slidesGrid
              , n = e.size
              , s = e.activeIndex
              , a = 1;
            if (t.centeredSlides) {
                for (var o, l = i[s].swiperSlideSize, d = s + 1; d < i.length; d += 1)
                    i[d] && !o && (a += 1,
                    (l += i[d].swiperSlideSize) > n && (o = !0));
                for (var u = s - 1; u >= 0; u -= 1)
                    i[u] && !o && (a += 1,
                    (l += i[u].swiperSlideSize) > n && (o = !0))
            } else
                for (var c = s + 1; c < i.length; c += 1)
                    r[c] - r[s] < n && (a += 1);
            return a
        }
        ,
        n.update = function() {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid
                  , i = e.params;
                i.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode ? (r(),
                e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update")
            }
            function r() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
        }
        ,
        n.changeDirection = function(e, t) {
            void 0 === t && (t = !0);
            var i = this
              , r = i.params.direction;
            return e || (e = "horizontal" === r ? "vertical" : "horizontal"),
            e === r || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass("" + i.params.containerModifierClass + r).addClass("" + i.params.containerModifierClass + e),
            i.emitContainerClasses(),
            i.params.direction = e,
            i.slides.each((function(t) {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }
            )),
            i.emit("changeDirection"),
            t && i.update()),
            i
        }
        ,
        n.mount = function(e) {
            var t = this;
            if (t.mounted)
                return !0;
            var i, r = b(e || t.params.el);
            return !!(e = r[0]) && (e.swiper = t,
            e && e.shadowRoot && e.shadowRoot.querySelector ? (i = b(e.shadowRoot.querySelector("." + t.params.wrapperClass))).children = function(e) {
                return r.children(e)
            }
            : i = r.children("." + t.params.wrapperClass),
            S(t, {
                $el: r,
                el: e,
                $wrapperEl: i,
                wrapperEl: i[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
                wrongRTL: "-webkit-box" === i.css("display")
            }),
            !0)
        }
        ,
        n.init = function(e) {
            var t = this;
            return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.attachEvents(),
            t.initialized = !0,
            t.emit("init"),
            t.emit("afterInit")),
            t
        }
        ,
        n.destroy = function(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            var i, r = this, n = r.params, s = r.$el, a = r.$wrapperEl, o = r.slides;
            return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"),
            r.initialized = !1,
            r.detachEvents(),
            n.loop && r.loopDestroy(),
            t && (r.removeClasses(),
            s.removeAttr("style"),
            a.removeAttr("style"),
            o && o.length && o.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            r.emit("destroy"),
            Object.keys(r.eventsListeners).forEach((function(e) {
                r.off(e)
            }
            )),
            !1 !== e && (r.$el[0].swiper = null,
            i = r,
            Object.keys(i).forEach((function(e) {
                try {
                    i[e] = null
                } catch (e) {}
                try {
                    delete i[e]
                } catch (e) {}
            }
            ))),
            r.destroyed = !0),
            null
        }
        ,
        e.extendDefaults = function(e) {
            S(U, e)
        }
        ,
        e.installModule = function(t) {
            e.prototype.modules || (e.prototype.modules = {});
            var i = t.name || Object.keys(e.prototype.modules).length + "_" + C();
            e.prototype.modules[i] = t
        }
        ,
        e.use = function(t) {
            return Array.isArray(t) ? (t.forEach((function(t) {
                return e.installModule(t)
            }
            )),
            e) : (e.installModule(t),
            e)
        }
        ,
        t = e,
        r = [{
            key: "extendedDefaults",
            get: function() {
                return U
            }
        }, {
            key: "defaults",
            get: function() {
                return q
            }
        }],
        (i = null) && X(t.prototype, i),
        r && X(t, r),
        e
    }();
    Object.keys(Y).forEach((function(e) {
        Object.keys(Y[e]).forEach((function(t) {
            K.prototype[t] = Y[e][t]
        }
        ))
    }
    )),
    K.use([z, D]);
    const J = K;
    function Q() {
        return (Q = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                    Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    var Z = {
        update: function() {
            var e = this
              , t = e.rtl
              , i = e.params.pagination;
            if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var r, n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, s = e.pagination.$el, a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > n - 1 - 2 * e.loopedSlides && (r -= n - 2 * e.loopedSlides),
                r > a - 1 && (r -= a),
                r < 0 && "bullets" !== e.params.paginationType && (r = a + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                    var o, l, d, u = e.pagination.bullets;
                    if (i.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    s.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"),
                    i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex,
                    e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                    o = r - e.pagination.dynamicBulletIndex,
                    d = ((l = o + (Math.min(u.length, i.dynamicMainBullets) - 1)) + o) / 2),
                    u.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"),
                    s.length > 1)
                        u.each((function(e) {
                            var t = b(e)
                              , n = t.index();
                            n === r && t.addClass(i.bulletActiveClass),
                            i.dynamicBullets && (n >= o && n <= l && t.addClass(i.bulletActiveClass + "-main"),
                            n === o && t.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"),
                            n === l && t.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        }
                        ));
                    else {
                        var c = u.eq(r)
                          , p = c.index();
                        if (c.addClass(i.bulletActiveClass),
                        i.dynamicBullets) {
                            for (var v = u.eq(o), f = u.eq(l), h = o; h <= l; h += 1)
                                u.eq(h).addClass(i.bulletActiveClass + "-main");
                            if (e.params.loop)
                                if (p >= u.length - i.dynamicMainBullets) {
                                    for (var m = i.dynamicMainBullets; m >= 0; m -= 1)
                                        u.eq(u.length - m).addClass(i.bulletActiveClass + "-main");
                                    u.eq(u.length - i.dynamicMainBullets - 1).addClass(i.bulletActiveClass + "-prev")
                                } else
                                    v.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"),
                                    f.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next");
                            else
                                v.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"),
                                f.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                        }
                    }
                    if (i.dynamicBullets) {
                        var g = Math.min(u.length, i.dynamicMainBullets + 4)
                          , w = (e.pagination.bulletSize * g - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize
                          , C = t ? "right" : "left";
                        u.css(e.isHorizontal() ? C : "top", w + "px")
                    }
                }
                if ("fraction" === i.type && (s.find(E(i.currentClass)).text(i.formatFractionCurrent(r + 1)),
                s.find(E(i.totalClass)).text(i.formatFractionTotal(a))),
                "progressbar" === i.type) {
                    var T;
                    T = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    var y = (r + 1) / a
                      , S = 1
                      , x = 1;
                    "horizontal" === T ? S = y : x = y,
                    s.find(E(i.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + S + ") scaleY(" + x + ")").transition(e.params.speed)
                }
                "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(e, r + 1, a)),
                e.emit("paginationRender", s[0])) : e.emit("paginationUpdate", s[0]),
                e.params.watchOverflow && e.enabled && s[e.isLocked ? "addClass" : "removeClass"](i.lockClass)
            }
        },
        render: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                  , r = e.pagination.$el
                  , n = "";
                if ("bullets" === t.type) {
                    var s = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    e.params.freeMode && !e.params.loop && s > i && (s = i);
                    for (var a = 0; a < s; a += 1)
                        t.renderBullet ? n += t.renderBullet.call(e, a, t.bulletClass) : n += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    r.html(n),
                    e.pagination.bullets = r.find(E(t.bulletClass))
                }
                "fraction" === t.type && (n = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>',
                r.html(n)),
                "progressbar" === t.type && (n = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>',
                r.html(n)),
                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        },
        init: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el) {
                var i = b(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)),
                "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                i.addClass(t.modifierClass + t.type),
                "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
                e.pagination.dynamicBulletIndex = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                t.clickable && i.on("click", E(t.bulletClass), (function(t) {
                    t.preventDefault();
                    var i = b(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides),
                    e.slideTo(i)
                }
                )),
                S(e.pagination, {
                    $el: i,
                    el: i[0]
                }),
                e.enabled || i.addClass(t.lockClass))
            }
        },
        destroy: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var i = e.pagination.$el;
                i.removeClass(t.hiddenClass),
                i.removeClass(t.modifierClass + t.type),
                e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && i.off("click", E(t.bulletClass))
            }
        }
    };
    const ee = {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            x(this, {
                pagination: Q({
                    dynamicBulletIndex: 0
                }, Z)
            })
        },
        on: {
            init: function(e) {
                e.pagination.init(),
                e.pagination.render(),
                e.pagination.update()
            },
            activeIndexChange: function(e) {
                (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
            },
            snapIndexChange: function(e) {
                e.params.loop || e.pagination.update()
            },
            slidesLengthChange: function(e) {
                e.params.loop && (e.pagination.render(),
                e.pagination.update())
            },
            snapGridLengthChange: function(e) {
                e.params.loop || (e.pagination.render(),
                e.pagination.update())
            },
            destroy: function(e) {
                e.pagination.destroy()
            },
            "enable disable": function(e) {
                var t = e.pagination.$el;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
            },
            click: function(e, t) {
                var i = t.target;
                if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !b(i).hasClass(e.params.pagination.bulletClass)) {
                    if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl))
                        return;
                    !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"),
                    e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)
                }
            }
        }
    };
    function te() {
        new J(".swiper-categoria, .swiper-container-agenda-geral, .swiper-artista, .swiper-casas-show",{
            slidesPerView: "auto",
            spaceBetween: 16,
            freeMode: !0,
            pagination: {
                el: ".swiper-pagination",
                clickable: !0
            }
        }),
        new J(".swiper-grupo-eventos",{
            slidesPerView: "auto",
            freeMode: !0
        });
        MicroModal.init({
            openTrigger: "data-modal-open",
            closeTrigger: "data-modal-close",
            awaitOpenAnimation: !1,
            awaitCloseAnimation: !1,
            disableScroll: !1
        });
        new J(".swiper-container-agenda-filter-mes",{
            slidesPerView: "auto",
            spaceBetween: 16,
            freeMode: !0
        }),
        new J(".swiper-container-agenda-filter-dia",{
            slidesPerView: "auto",
            spaceBetween: 8,
            freeMode: !0
        })
    }
    function ie() {
        var e, t, i, r;
        null === (e = document.getElementById("open-filter-agenda")) || void 0 === e || e.addEventListener("click", (function() {
            document.getElementById("open-filter-agenda").classList.add("hide"),
            document.getElementById("conteudo-filters-agenda").classList.add("hide"),
            document.getElementById("close-filter-agenda").classList.remove("hide")
        }
        )),
        null === (t = document.getElementById("close-filter-agenda")) || void 0 === t || t.addEventListener("click", (function() {
            document.getElementById("close-filter-agenda").classList.add("hide"),
            document.getElementById("conteudo-filters-agenda").classList.remove("hide"),
            document.getElementById("open-filter-agenda").classList.remove("hide")
        }
        )),
        null === (i = document.querySelectorAll(".item-dia-agenda")) || void 0 === i || i.forEach((function(e) {
            e.addEventListener("click", (function() {
                e.classList.contains("item-disabled-filter") || re(e.dataset.date, "dia")
            }
            ))
        }
        )),
        null === (r = document.querySelectorAll(".item-mes-agenda")) || void 0 === r || r.forEach((function(e) {
            e.addEventListener("click", (function() {
                e.classList.contains("item-disabled-filter") || re(e.dataset.date, "mes")
            }
            ))
        }
        ))
    }
    function re() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        ne("open"),
        axios.get(domain + "/agenda", {
            params: {
                data: null != e ? e : "",
                tipo_filter: t || ""
            }
        }).then((function(e) {
            document.getElementById("conteudo-component-agenda").innerHTML = e.data,
            te(),
            ie(),
            ne("close")
        }
        ))
    }
    function ne(e) {
        document.querySelectorAll("#conteudo-component-agenda .card-agenda-geral").forEach((function(t) {
            "open" == e ? t.classList.add("load-card-agenda-geral") : t.classList.remove("load-card-agenda-geral")
        }
        ))
    }
    J.use([ee]),
    window.Swiper = J,
    window.addEventListener("load", (function() {
        te(),
        ie()
    }
    ))
}
)();
