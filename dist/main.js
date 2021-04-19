(() => {
  "use strict";
  var n = {
      918: (n, t, e) => {
        e.d(t, { Z: () => r });
        var o = e(645),
          i = e.n(o)()(function (n) {
            return n[1];
          });
        i.push([
          n.id,
          'body {\n    font-family: sans-serif;\n  }\n  .accordion .title {\n    display: flex;\n    background-color: whitesmoke;\n    padding: 10px;\n    cursor: pointer;\n    transition: background-color 0.3s linear;\n  }\n  .accordion .title:after {\n    content: "+";\n    margin-left: auto;\n  }\n  .accordion .title.active:after {\n    content: "-";\n  }\n  .accordion .title.active,\n  .accordion .title:hover {\n    background-color: #ddd;\n  }\n  .accordion .content {\n    padding: 0 10px;\n    height: 0;\n    overflow: hidden;\n    border: 1px solid whitesmoke;\n    transition: height 0.6s ease-in-out;\n  }\n  .accordion .content.is-open {\n    height: auto;\n    overflow: visible;\n  }\n\n  .tooltip {\n    position: relative;\n    display: inline-block;\n    border-bottom: 1px dotted black;\n  }\n  \n  .tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: #555;\n    color: #fff;\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n  \n    position: absolute;\n    z-index: 1;\n    bottom: 125%;\n    left: 50%;\n    margin-left: -60px;\n  \n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n  \n  .tooltip .tooltiptext::after {\n    content: "";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #555 transparent transparent transparent;\n  }\n  \n  .tooltip:hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n  }\n  ',
          "",
        ]);
        const r = i;
      },
      645: (n) => {
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = n(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(e, "}") : e;
              }).join("");
            }),
            (t.i = function (n, e, o) {
              "string" == typeof n && (n = [[null, n, ""]]);
              var i = {};
              if (o)
                for (var r = 0; r < this.length; r++) {
                  var a = this[r][0];
                  null != a && (i[a] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var s = [].concat(n[c]);
                (o && i[s[0]]) ||
                  (e &&
                    (s[2]
                      ? (s[2] = "".concat(e, " and ").concat(s[2]))
                      : (s[2] = e)),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      379: (n, t, e) => {
        var o,
          i = (function () {
            var n = {};
            return function (t) {
              if (void 0 === n[t]) {
                var e = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  e instanceof window.HTMLIFrameElement
                )
                  try {
                    e = e.contentDocument.head;
                  } catch (n) {
                    e = null;
                  }
                n[t] = e;
              }
              return n[t];
            };
          })(),
          r = [];
        function a(n) {
          for (var t = -1, e = 0; e < r.length; e++)
            if (r[e].identifier === n) {
              t = e;
              break;
            }
          return t;
        }
        function c(n, t) {
          for (var e = {}, o = [], i = 0; i < n.length; i++) {
            var c = n[i],
              s = t.base ? c[0] + t.base : c[0],
              l = e[s] || 0,
              d = "".concat(s, " ").concat(l);
            e[s] = l + 1;
            var u = a(d),
              p = { css: c[1], media: c[2], sourceMap: c[3] };
            -1 !== u
              ? (r[u].references++, r[u].updater(p))
              : r.push({ identifier: d, updater: m(p, t), references: 1 }),
              o.push(d);
          }
          return o;
        }
        function s(n) {
          var t = document.createElement("style"),
            o = n.attributes || {};
          if (void 0 === o.nonce) {
            var r = e.nc;
            r && (o.nonce = r);
          }
          if (
            (Object.keys(o).forEach(function (n) {
              t.setAttribute(n, o[n]);
            }),
            "function" == typeof n.insert)
          )
            n.insert(t);
          else {
            var a = i(n.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(t);
          }
          return t;
        }
        var l,
          d =
            ((l = []),
            function (n, t) {
              return (l[n] = t), l.filter(Boolean).join("\n");
            });
        function u(n, t, e, o) {
          var i = e
            ? ""
            : o.media
            ? "@media ".concat(o.media, " {").concat(o.css, "}")
            : o.css;
          if (n.styleSheet) n.styleSheet.cssText = d(t, i);
          else {
            var r = document.createTextNode(i),
              a = n.childNodes;
            a[t] && n.removeChild(a[t]),
              a.length ? n.insertBefore(r, a[t]) : n.appendChild(r);
          }
        }
        function p(n, t, e) {
          var o = e.css,
            i = e.media,
            r = e.sourceMap;
          if (
            (i ? n.setAttribute("media", i) : n.removeAttribute("media"),
            r &&
              "undefined" != typeof btoa &&
              (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                " */"
              )),
            n.styleSheet)
          )
            n.styleSheet.cssText = o;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(o));
          }
        }
        var f = null,
          v = 0;
        function m(n, t) {
          var e, o, i;
          if (t.singleton) {
            var r = v++;
            (e = f || (f = s(t))),
              (o = u.bind(null, e, r, !1)),
              (i = u.bind(null, e, r, !0));
          } else
            (e = s(t)),
              (o = p.bind(null, e, t)),
              (i = function () {
                !(function (n) {
                  if (null === n.parentNode) return !1;
                  n.parentNode.removeChild(n);
                })(e);
              });
          return (
            o(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap
                )
                  return;
                o((n = t));
              } else i();
            }
          );
        }
        n.exports = function (n, t) {
          (t = t || {}).singleton ||
            "boolean" == typeof t.singleton ||
            (t.singleton =
              (void 0 === o &&
                (o = Boolean(
                  window && document && document.all && !window.atob
                )),
              o));
          var e = c((n = n || []), t);
          return function (n) {
            if (
              ((n = n || []),
              "[object Array]" === Object.prototype.toString.call(n))
            ) {
              for (var o = 0; o < e.length; o++) {
                var i = a(e[o]);
                r[i].references--;
              }
              for (var s = c(n, t), l = 0; l < e.length; l++) {
                var d = a(e[l]);
                0 === r[d].references && (r[d].updater(), r.splice(d, 1));
              }
              e = s;
            }
          };
        };
      },
    },
    t = {};
  function e(o) {
    var i = t[o];
    if (void 0 !== i) return i.exports;
    var r = (t[o] = { id: o, exports: {} });
    return n[o](r, r.exports, e), r.exports;
  }
  (e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (n, t) => {
      for (var o in t)
        e.o(t, o) &&
          !e.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: t[o] });
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (() => {
      var n = e(379),
        t = e.n(n),
        o = e(918);
      t()(o.Z, { insert: "head", singleton: !1 }), o.Z.locals;
      const i = [
          {
            id: 1,
            title: "Accordion #1",
            content: (() => {
              const n = document.createElement("div");
              return (
                (n.className = "tooltip"),
                (n.innerHTML =
                  '\n        Keep your mouse on me\n        <span class="tooltiptext">This is tooltip 3</span>\n    '),
                n
              );
            })(),
          },
          {
            id: 2,
            title: "Accordion #2",
            content: (() => {
              const n = document.createElement("div");
              return (
                (n.className = "tooltip"),
                (n.innerHTML =
                  '\n        Hover over me\n        <span class="tooltiptext">This is tooltip 1</span>\n    '),
                n
              );
            })(),
          },
          {
            id: 3,
            title: "Accordion #3",
            content: (() => {
              const n = document.createElement("div");
              return (
                (n.className = "tooltip"),
                (n.innerHTML =
                  '\n        Mouse over me\n        <span class="tooltiptext">This is tooltip 2</span>\n    '),
                n
              );
            })(),
          },
        ],
        r = document.createElement("section");
      r.classList.add("accordion");
      const a = (n) => {
        const t = document.createElement("div");
        return t.classList.add("title"), (t.innerText = n), t;
      };
      for (let n of i) r.appendChild(a(n.title));
      document.body.appendChild(r),
        document.querySelectorAll(".accordion .title").forEach((n) => {
          n.onclick = () => {
            n.classList.toggle("active");
            let t = n.nextElementSibling;
            if (!t || !t.classList.contains("content")) {
              const e = n.innerText;
              (t = ((n) => {
                const t = document.createElement("div");
                return t.classList.add("content"), t.appendChild(n), t;
              })(i.find((n) => n.title === e).content)),
                n.after(t);
            }
            t.classList.toggle("is-open");
          };
        });
    })();
})();
