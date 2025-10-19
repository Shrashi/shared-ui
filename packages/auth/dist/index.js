import { jsx as de, jsxs as De } from "react/jsx-runtime";
import Ne, { useDebugValue as Ge, useContext as qe, createElement as wt, useRef as St, useState as Ke } from "react";
function kt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ie = { exports: {} }, z = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Ct() {
  if (Je) return z;
  Je = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), O = Symbol.for("react.client.reference");
  function f(o) {
    if (typeof o == "object" && o !== null) {
      var v = o.$$typeof;
      switch (v) {
        case e:
          switch (o = o.type, o) {
            case t:
            case s:
            case n:
            case g:
            case h:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case i:
                case d:
                case S:
                case w:
                  return o;
                case u:
                  return o;
                default:
                  return v;
              }
          }
        case r:
          return v;
      }
    }
  }
  return z.ContextConsumer = u, z.ContextProvider = i, z.Element = e, z.ForwardRef = d, z.Fragment = t, z.Lazy = S, z.Memo = w, z.Portal = r, z.Profiler = s, z.StrictMode = n, z.Suspense = g, z.SuspenseList = h, z.isContextConsumer = function(o) {
    return f(o) === u;
  }, z.isContextProvider = function(o) {
    return f(o) === i;
  }, z.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === e;
  }, z.isForwardRef = function(o) {
    return f(o) === d;
  }, z.isFragment = function(o) {
    return f(o) === t;
  }, z.isLazy = function(o) {
    return f(o) === S;
  }, z.isMemo = function(o) {
    return f(o) === w;
  }, z.isPortal = function(o) {
    return f(o) === r;
  }, z.isProfiler = function(o) {
    return f(o) === s;
  }, z.isStrictMode = function(o) {
    return f(o) === n;
  }, z.isSuspense = function(o) {
    return f(o) === g;
  }, z.isSuspenseList = function(o) {
    return f(o) === h;
  }, z.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === t || o === s || o === n || o === g || o === h || o === $ || typeof o == "object" && o !== null && (o.$$typeof === S || o.$$typeof === w || o.$$typeof === i || o.$$typeof === u || o.$$typeof === d || o.$$typeof === O || o.getModuleId !== void 0);
  }, z.typeOf = f, z;
}
var j = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function xt() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(o) {
      if (typeof o == "object" && o !== null) {
        var v = o.$$typeof;
        switch (v) {
          case r:
            switch (o = o.type, o) {
              case n:
              case u:
              case s:
              case h:
              case w:
                return o;
              default:
                switch (o = o && o.$$typeof, o) {
                  case d:
                  case g:
                  case $:
                  case S:
                    return o;
                  case i:
                    return o;
                  default:
                    return v;
                }
            }
          case t:
            return v;
        }
      }
    }
    var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), f = Symbol.for("react.client.reference");
    j.ContextConsumer = i, j.ContextProvider = d, j.Element = r, j.ForwardRef = g, j.Fragment = n, j.Lazy = $, j.Memo = S, j.Portal = t, j.Profiler = u, j.StrictMode = s, j.Suspense = h, j.SuspenseList = w, j.isContextConsumer = function(o) {
      return e(o) === i;
    }, j.isContextProvider = function(o) {
      return e(o) === d;
    }, j.isElement = function(o) {
      return typeof o == "object" && o !== null && o.$$typeof === r;
    }, j.isForwardRef = function(o) {
      return e(o) === g;
    }, j.isFragment = function(o) {
      return e(o) === n;
    }, j.isLazy = function(o) {
      return e(o) === $;
    }, j.isMemo = function(o) {
      return e(o) === S;
    }, j.isPortal = function(o) {
      return e(o) === t;
    }, j.isProfiler = function(o) {
      return e(o) === u;
    }, j.isStrictMode = function(o) {
      return e(o) === s;
    }, j.isSuspense = function(o) {
      return e(o) === h;
    }, j.isSuspenseList = function(o) {
      return e(o) === w;
    }, j.isValidElementType = function(o) {
      return typeof o == "string" || typeof o == "function" || o === n || o === u || o === s || o === h || o === w || o === O || typeof o == "object" && o !== null && (o.$$typeof === $ || o.$$typeof === S || o.$$typeof === d || o.$$typeof === i || o.$$typeof === g || o.$$typeof === f || o.getModuleId !== void 0);
    }, j.typeOf = e;
  })()), j;
}
var Ue;
function At() {
  return Ue || (Ue = 1, process.env.NODE_ENV === "production" ? Ie.exports = /* @__PURE__ */ Ct() : Ie.exports = /* @__PURE__ */ xt()), Ie.exports;
}
var Ye = /* @__PURE__ */ At();
function Et(e) {
  function r(b, m, y, A, a) {
    for (var _ = 0, p = 0, F = 0, D = 0, T, c, V = 0, H = 0, P, Z = P = T = 0, I = 0, q = 0, be = 0, Y = 0, ke = y.length, ve = ke - 1, re, C = "", B = "", Te = "", _e = "", ie; I < ke; ) {
      if (c = y.charCodeAt(I), I === ve && p + D + F + _ !== 0 && (p !== 0 && (c = p === 47 ? 10 : 47), D = F = _ = 0, ke++, ve++), p + D + F + _ === 0) {
        if (I === ve && (0 < q && (C = C.replace($, "")), 0 < C.trim().length)) {
          switch (c) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              C += y.charAt(I);
          }
          c = 59;
        }
        switch (c) {
          case 123:
            for (C = C.trim(), T = C.charCodeAt(0), P = 1, Y = ++I; I < ke; ) {
              switch (c = y.charCodeAt(I)) {
                case 123:
                  P++;
                  break;
                case 125:
                  P--;
                  break;
                case 47:
                  switch (c = y.charCodeAt(I + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Z = I + 1; Z < ve; ++Z)
                          switch (y.charCodeAt(Z)) {
                            case 47:
                              if (c === 42 && y.charCodeAt(Z - 1) === 42 && I + 2 !== Z) {
                                I = Z + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (c === 47) {
                                I = Z + 1;
                                break e;
                              }
                          }
                        I = Z;
                      }
                  }
                  break;
                case 91:
                  c++;
                case 40:
                  c++;
                case 34:
                case 39:
                  for (; I++ < ve && y.charCodeAt(I) !== c; )
                    ;
              }
              if (P === 0) break;
              I++;
            }
            switch (P = y.substring(Y, I), T === 0 && (T = (C = C.replace(S, "").trim()).charCodeAt(0)), T) {
              case 64:
                switch (0 < q && (C = C.replace($, "")), c = C.charCodeAt(1), c) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    q = m;
                    break;
                  default:
                    q = ue;
                }
                if (P = r(m, q, P, c, a + 1), Y = P.length, 0 < K && (q = t(ue, C, be), ie = d(3, P, q, m, Q, G, Y, c, a, A), C = q.join(""), ie !== void 0 && (Y = (P = ie.trim()).length) === 0 && (c = 0, P = "")), 0 < Y) switch (c) {
                  case 115:
                    C = C.replace(L, i);
                  case 100:
                  case 109:
                  case 45:
                    P = C + "{" + P + "}";
                    break;
                  case 107:
                    C = C.replace(x, "$1 $2"), P = C + "{" + P + "}", P = X === 1 || X === 2 && u("@" + P, 3) ? "@-webkit-" + P + "@" + P : "@" + P;
                    break;
                  default:
                    P = C + P, A === 112 && (P = (B += P, ""));
                }
                else P = "";
                break;
              default:
                P = r(m, t(m, C, be), P, A, a + 1);
            }
            Te += P, P = be = q = Z = T = 0, C = "", c = y.charCodeAt(++I);
            break;
          case 125:
          case 59:
            if (C = (0 < q ? C.replace($, "") : C).trim(), 1 < (Y = C.length)) switch (Z === 0 && (T = C.charCodeAt(0), T === 45 || 96 < T && 123 > T) && (Y = (C = C.replace(" ", ":")).length), 0 < K && (ie = d(1, C, m, b, Q, G, B.length, A, a, A)) !== void 0 && (Y = (C = ie.trim()).length) === 0 && (C = "\0\0"), T = C.charCodeAt(0), c = C.charCodeAt(1), T) {
              case 0:
                break;
              case 64:
                if (c === 105 || c === 99) {
                  _e += C + y.charAt(I);
                  break;
                }
              default:
                C.charCodeAt(Y - 1) !== 58 && (B += s(C, T, c, C.charCodeAt(2)));
            }
            be = q = Z = T = 0, C = "", c = y.charCodeAt(++I);
        }
      }
      switch (c) {
        case 13:
        case 10:
          p === 47 ? p = 0 : 1 + T === 0 && A !== 107 && 0 < C.length && (q = 1, C += "\0"), 0 < K * oe && d(0, C, m, b, Q, G, B.length, A, a, A), G = 1, Q++;
          break;
        case 59:
        case 125:
          if (p + D + F + _ === 0) {
            G++;
            break;
          }
        default:
          switch (G++, re = y.charAt(I), c) {
            case 9:
            case 32:
              if (D + _ + p === 0) switch (V) {
                case 44:
                case 58:
                case 9:
                case 32:
                  re = "";
                  break;
                default:
                  c !== 32 && (re = " ");
              }
              break;
            case 0:
              re = "\\0";
              break;
            case 12:
              re = "\\f";
              break;
            case 11:
              re = "\\v";
              break;
            case 38:
              D + p + _ === 0 && (q = be = 1, re = "\f" + re);
              break;
            case 108:
              if (D + p + _ + te === 0 && 0 < Z) switch (I - Z) {
                case 2:
                  V === 112 && y.charCodeAt(I - 3) === 58 && (te = V);
                case 8:
                  H === 111 && (te = H);
              }
              break;
            case 58:
              D + p + _ === 0 && (Z = I);
              break;
            case 44:
              p + F + D + _ === 0 && (q = 1, re += "\r");
              break;
            case 34:
            case 39:
              p === 0 && (D = D === c ? 0 : D === 0 ? c : D);
              break;
            case 91:
              D + p + F === 0 && _++;
              break;
            case 93:
              D + p + F === 0 && _--;
              break;
            case 41:
              D + p + _ === 0 && F--;
              break;
            case 40:
              if (D + p + _ === 0) {
                if (T === 0) switch (2 * V + 3 * H) {
                  case 533:
                    break;
                  default:
                    T = 1;
                }
                F++;
              }
              break;
            case 64:
              p + F + D + _ + Z + P === 0 && (P = 1);
              break;
            case 42:
            case 47:
              if (!(0 < D + _ + F)) switch (p) {
                case 0:
                  switch (2 * c + 3 * y.charCodeAt(I + 1)) {
                    case 235:
                      p = 47;
                      break;
                    case 220:
                      Y = I, p = 42;
                  }
                  break;
                case 42:
                  c === 47 && V === 42 && Y + 2 !== I && (y.charCodeAt(Y + 2) === 33 && (B += y.substring(Y, I + 1)), re = "", p = 0);
              }
          }
          p === 0 && (C += re);
      }
      H = V, V = c, I++;
    }
    if (Y = B.length, 0 < Y) {
      if (q = m, 0 < K && (ie = d(2, B, q, b, Q, G, Y, A, a, A), ie !== void 0 && (B = ie).length === 0)) return _e + B + Te;
      if (B = q.join(",") + "{" + B + "}", X * te !== 0) {
        switch (X !== 2 || u(B, 2) || (te = 0), te) {
          case 111:
            B = B.replace(k, ":-moz-$1") + B;
            break;
          case 112:
            B = B.replace(E, "::-webkit-input-$1") + B.replace(E, "::-moz-$1") + B.replace(E, ":-ms-input-$1") + B;
        }
        te = 0;
      }
    }
    return _e + B + Te;
  }
  function t(b, m, y) {
    var A = m.trim().split(v);
    m = A;
    var a = A.length, _ = b.length;
    switch (_) {
      case 0:
      case 1:
        var p = 0;
        for (b = _ === 0 ? "" : b[0] + " "; p < a; ++p)
          m[p] = n(b, m[p], y).trim();
        break;
      default:
        var F = p = 0;
        for (m = []; p < a; ++p)
          for (var D = 0; D < _; ++D)
            m[F++] = n(b[D] + " ", A[p], y).trim();
    }
    return m;
  }
  function n(b, m, y) {
    var A = m.charCodeAt(0);
    switch (33 > A && (A = (m = m.trim()).charCodeAt(0)), A) {
      case 38:
        return m.replace(N, "$1" + b.trim());
      case 58:
        return b.trim() + m.replace(N, "$1" + b.trim());
      default:
        if (0 < 1 * y && 0 < m.indexOf("\f")) return m.replace(N, (b.charCodeAt(0) === 58 ? "" : "$1") + b.trim());
    }
    return b + m;
  }
  function s(b, m, y, A) {
    var a = b + ";", _ = 2 * m + 3 * y + 4 * A;
    if (_ === 944) {
      b = a.indexOf(":", 9) + 1;
      var p = a.substring(b, a.length - 1).trim();
      return p = a.substring(0, b).trim() + p + ";", X === 1 || X === 2 && u(p, 1) ? "-webkit-" + p + p : p;
    }
    if (X === 0 || X === 2 && !u(a, 1)) return a;
    switch (_) {
      case 1015:
        return a.charCodeAt(10) === 97 ? "-webkit-" + a + a : a;
      case 951:
        return a.charCodeAt(3) === 116 ? "-webkit-" + a + a : a;
      case 963:
        return a.charCodeAt(5) === 110 ? "-webkit-" + a + a : a;
      case 1009:
        if (a.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + a + a;
      case 978:
        return "-webkit-" + a + "-moz-" + a + a;
      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
      case 883:
        if (a.charCodeAt(8) === 45) return "-webkit-" + a + a;
        if (0 < a.indexOf("image-set(", 11)) return a.replace(se, "$1-webkit-$2") + a;
        break;
      case 932:
        if (a.charCodeAt(4) === 45) switch (a.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
          case 115:
            return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
          case 98:
            return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
        }
        return "-webkit-" + a + "-ms-" + a + a;
      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;
      case 1023:
        if (a.charCodeAt(8) !== 99) break;
        return p = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + p + "-webkit-" + a + "-ms-flex-pack" + p + a;
      case 1005:
        return f.test(a) ? a.replace(O, ":-webkit-") + a.replace(O, ":-moz-") + a : a;
      case 1e3:
        switch (p = a.substring(13).trim(), m = p.indexOf("-") + 1, p.charCodeAt(0) + p.charCodeAt(m)) {
          case 226:
            p = a.replace(l, "tb");
            break;
          case 232:
            p = a.replace(l, "tb-rl");
            break;
          case 220:
            p = a.replace(l, "lr");
            break;
          default:
            return a;
        }
        return "-webkit-" + a + "-ms-" + p + a;
      case 1017:
        if (a.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (m = (a = b).length - 10, p = (a.charCodeAt(m) === 33 ? a.substring(0, m) : a).substring(b.indexOf(":", 7) + 1).trim(), _ = p.charCodeAt(0) + (p.charCodeAt(7) | 0)) {
          case 203:
            if (111 > p.charCodeAt(8)) break;
          case 115:
            a = a.replace(p, "-webkit-" + p) + ";" + a;
            break;
          case 207:
          case 102:
            a = a.replace(p, "-webkit-" + (102 < _ ? "inline-" : "") + "box") + ";" + a.replace(p, "-webkit-" + p) + ";" + a.replace(p, "-ms-" + p + "box") + ";" + a;
        }
        return a + ";";
      case 938:
        if (a.charCodeAt(5) === 45) switch (a.charCodeAt(6)) {
          case 105:
            return p = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + p + "-ms-flex-" + p + a;
          case 115:
            return "-webkit-" + a + "-ms-flex-item-" + a.replace(J, "") + a;
          default:
            return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(J, "") + a;
        }
        break;
      case 973:
      case 989:
        if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ne.test(b) === !0) return (p = b.substring(b.indexOf(":") + 1)).charCodeAt(0) === 115 ? s(b.replace("stretch", "fill-available"), m, y, A).replace(":fill-available", ":stretch") : a.replace(p, "-webkit-" + p) + a.replace(p, "-moz-" + p.replace("fill-", "")) + a;
        break;
      case 962:
        if (a = "-webkit-" + a + (a.charCodeAt(5) === 102 ? "-ms-" + a : "") + a, y + A === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf("transform", 10)) return a.substring(0, a.indexOf(";", 27) + 1).replace(o, "$1-webkit-$2") + a;
    }
    return a;
  }
  function u(b, m) {
    var y = b.indexOf(m === 1 ? ":" : "{"), A = b.substring(0, m !== 3 ? y : 10);
    return y = b.substring(y + 1, b.length - 1), le(m !== 2 ? A : A.replace(ee, "$1"), y, m);
  }
  function i(b, m) {
    var y = s(m, m.charCodeAt(0), m.charCodeAt(1), m.charCodeAt(2));
    return y !== m + ";" ? y.replace(W, " or ($1)").substring(4) : "(" + m + ")";
  }
  function d(b, m, y, A, a, _, p, F, D, T) {
    for (var c = 0, V = m, H; c < K; ++c)
      switch (H = U[c].call(w, b, V, y, A, a, _, p, F, D, T)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          V = H;
      }
    if (V !== m) return V;
  }
  function g(b) {
    switch (b) {
      case void 0:
      case null:
        K = U.length = 0;
        break;
      default:
        if (typeof b == "function") U[K++] = b;
        else if (typeof b == "object") for (var m = 0, y = b.length; m < y; ++m)
          g(b[m]);
        else oe = !!b | 0;
    }
    return g;
  }
  function h(b) {
    return b = b.prefix, b !== void 0 && (le = null, b ? typeof b != "function" ? X = 1 : (X = 2, le = b) : X = 0), h;
  }
  function w(b, m) {
    var y = b;
    if (33 > y.charCodeAt(0) && (y = y.trim()), pe = y, y = [pe], 0 < K) {
      var A = d(-1, m, y, y, Q, G, 0, 0, 0, 0);
      A !== void 0 && typeof A == "string" && (m = A);
    }
    var a = r(ue, y, m, 0, 0);
    return 0 < K && (A = d(-2, a, y, y, Q, G, a.length, 0, 0, 0), A !== void 0 && (a = A)), pe = "", te = 0, G = Q = 1, a;
  }
  var S = /^\0+/g, $ = /[\0\r\f]/g, O = /: */g, f = /zoo|gra/, o = /([,: ])(transform)/g, v = /,\r+?/g, N = /([\t\r\n ])*\f?&/g, x = /@(k\w+)\s*(\S*)\s*/, E = /::(place)/g, k = /:(read-only)/g, l = /[svh]\w+-[tblr]{2}/, L = /\(\s*(.*)\s*\)/g, W = /([\s\S]*?);/g, J = /-self|flex-/g, ee = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ne = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, G = 1, Q = 1, te = 0, X = 1, ue = [], U = [], K = 0, le = null, oe = 0, pe = "";
  return w.use = g, w.set = h, e !== void 0 && h(e), w;
}
var Pt = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function $t(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Ot = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, We = /* @__PURE__ */ $t(
  function(e) {
    return Ot.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Me = { exports: {} }, M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function Nt() {
  if (et) return M;
  et = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, w = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, $ = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, f = e ? Symbol.for("react.lazy") : 60116, o = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function E(l) {
    if (typeof l == "object" && l !== null) {
      var L = l.$$typeof;
      switch (L) {
        case r:
          switch (l = l.type, l) {
            case g:
            case h:
            case n:
            case u:
            case s:
            case S:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case d:
                case w:
                case f:
                case O:
                case i:
                  return l;
                default:
                  return L;
              }
          }
        case t:
          return L;
      }
    }
  }
  function k(l) {
    return E(l) === h;
  }
  return M.AsyncMode = g, M.ConcurrentMode = h, M.ContextConsumer = d, M.ContextProvider = i, M.Element = r, M.ForwardRef = w, M.Fragment = n, M.Lazy = f, M.Memo = O, M.Portal = t, M.Profiler = u, M.StrictMode = s, M.Suspense = S, M.isAsyncMode = function(l) {
    return k(l) || E(l) === g;
  }, M.isConcurrentMode = k, M.isContextConsumer = function(l) {
    return E(l) === d;
  }, M.isContextProvider = function(l) {
    return E(l) === i;
  }, M.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === r;
  }, M.isForwardRef = function(l) {
    return E(l) === w;
  }, M.isFragment = function(l) {
    return E(l) === n;
  }, M.isLazy = function(l) {
    return E(l) === f;
  }, M.isMemo = function(l) {
    return E(l) === O;
  }, M.isPortal = function(l) {
    return E(l) === t;
  }, M.isProfiler = function(l) {
    return E(l) === u;
  }, M.isStrictMode = function(l) {
    return E(l) === s;
  }, M.isSuspense = function(l) {
    return E(l) === S;
  }, M.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === h || l === u || l === s || l === S || l === $ || typeof l == "object" && l !== null && (l.$$typeof === f || l.$$typeof === O || l.$$typeof === i || l.$$typeof === d || l.$$typeof === w || l.$$typeof === v || l.$$typeof === N || l.$$typeof === x || l.$$typeof === o);
  }, M.typeOf = E, M;
}
var R = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function Tt() {
  return tt || (tt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, w = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, $ = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, f = e ? Symbol.for("react.lazy") : 60116, o = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function E(c) {
      return typeof c == "string" || typeof c == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      c === n || c === h || c === u || c === s || c === S || c === $ || typeof c == "object" && c !== null && (c.$$typeof === f || c.$$typeof === O || c.$$typeof === i || c.$$typeof === d || c.$$typeof === w || c.$$typeof === v || c.$$typeof === N || c.$$typeof === x || c.$$typeof === o);
    }
    function k(c) {
      if (typeof c == "object" && c !== null) {
        var V = c.$$typeof;
        switch (V) {
          case r:
            var H = c.type;
            switch (H) {
              case g:
              case h:
              case n:
              case u:
              case s:
              case S:
                return H;
              default:
                var P = H && H.$$typeof;
                switch (P) {
                  case d:
                  case w:
                  case f:
                  case O:
                  case i:
                    return P;
                  default:
                    return V;
                }
            }
          case t:
            return V;
        }
      }
    }
    var l = g, L = h, W = d, J = i, ee = r, ne = w, se = n, G = f, Q = O, te = t, X = u, ue = s, U = S, K = !1;
    function le(c) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), oe(c) || k(c) === g;
    }
    function oe(c) {
      return k(c) === h;
    }
    function pe(c) {
      return k(c) === d;
    }
    function b(c) {
      return k(c) === i;
    }
    function m(c) {
      return typeof c == "object" && c !== null && c.$$typeof === r;
    }
    function y(c) {
      return k(c) === w;
    }
    function A(c) {
      return k(c) === n;
    }
    function a(c) {
      return k(c) === f;
    }
    function _(c) {
      return k(c) === O;
    }
    function p(c) {
      return k(c) === t;
    }
    function F(c) {
      return k(c) === u;
    }
    function D(c) {
      return k(c) === s;
    }
    function T(c) {
      return k(c) === S;
    }
    R.AsyncMode = l, R.ConcurrentMode = L, R.ContextConsumer = W, R.ContextProvider = J, R.Element = ee, R.ForwardRef = ne, R.Fragment = se, R.Lazy = G, R.Memo = Q, R.Portal = te, R.Profiler = X, R.StrictMode = ue, R.Suspense = U, R.isAsyncMode = le, R.isConcurrentMode = oe, R.isContextConsumer = pe, R.isContextProvider = b, R.isElement = m, R.isForwardRef = y, R.isFragment = A, R.isLazy = a, R.isMemo = _, R.isPortal = p, R.isProfiler = F, R.isStrictMode = D, R.isSuspense = T, R.isValidElementType = E, R.typeOf = k;
  })()), R;
}
var rt;
function _t() {
  return rt || (rt = 1, process.env.NODE_ENV === "production" ? Me.exports = Nt() : Me.exports = Tt()), Me.exports;
}
var Re, nt;
function Dt() {
  if (nt) return Re;
  nt = 1;
  var e = _t(), r = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, t = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, s = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, u = {};
  u[e.ForwardRef] = n, u[e.Memo] = s;
  function i(f) {
    return e.isMemo(f) ? s : u[f.$$typeof] || r;
  }
  var d = Object.defineProperty, g = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, w = Object.getOwnPropertyDescriptor, S = Object.getPrototypeOf, $ = Object.prototype;
  function O(f, o, v) {
    if (typeof o != "string") {
      if ($) {
        var N = S(o);
        N && N !== $ && O(f, N, v);
      }
      var x = g(o);
      h && (x = x.concat(h(o)));
      for (var E = i(f), k = i(o), l = 0; l < x.length; ++l) {
        var L = x[l];
        if (!t[L] && !(v && v[L]) && !(k && k[L]) && !(E && E[L])) {
          var W = w(o, L);
          try {
            d(f, L, W);
          } catch {
          }
        }
      }
    }
    return f;
  }
  return Re = O, Re;
}
var It = Dt();
const Mt = /* @__PURE__ */ kt(It);
function ae() {
  return (ae = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ot = function(e, r) {
  for (var t = [e[0]], n = 0, s = r.length; n < s; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, Fe = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ye.typeOf(e);
}, Pe = Object.freeze([]), ce = Object.freeze({});
function Se(e) {
  return typeof e == "function";
}
function Le(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Xe(e) {
  return e && typeof e.styledComponentId == "string";
}
var he = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ze = typeof window < "u" && "HTMLElement" in window, Rt = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), zt = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function jt() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1) r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach((function(s) {
    e = e.replace(/%[a-z]/, s);
  })), e;
}
function ge(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(jt.apply(void 0, [zt[e]].concat(t)).trim());
}
var Ft = (function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, s = 0; s < t; s++) n += this.groupSizes[s];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var s = this.groupSizes, u = s.length, i = u; t >= i; ) (i <<= 1) < 0 && ge(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(s), this.length = i;
      for (var d = u; d < i; d++) this.groupSizes[d] = 0;
    }
    for (var g = this.indexOfGroup(t + 1), h = 0, w = n.length; h < w; h++) this.tag.insertRule(g, n[h]) && (this.groupSizes[t]++, g++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], s = this.indexOfGroup(t), u = s + n;
      this.groupSizes[t] = 0;
      for (var i = s; i < u; i++) this.tag.deleteRule(s);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var s = this.groupSizes[t], u = this.indexOfGroup(t), i = u + s, d = u; d < i; d++) n += this.tag.getRule(d) + `/*!sc*/
`;
    return n;
  }, e;
})(), Ee = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), we = 1, Ce = function(e) {
  if (Ee.has(e)) return Ee.get(e);
  for (; $e.has(we); ) we++;
  var r = we++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && ge(16, "" + r), Ee.set(e, r), $e.set(r, e), r;
}, Lt = function(e) {
  return $e.get(e);
}, Vt = function(e, r) {
  r >= we && (we = r + 1), Ee.set(e, r), $e.set(r, e);
}, Bt = "style[" + he + '][data-styled-version="5.3.6"]', Ht = new RegExp("^" + he + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), qt = function(e, r, t) {
  for (var n, s = t.split(","), u = 0, i = s.length; u < i; u++) (n = s[u]) && e.registerName(r, n);
}, Yt = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], s = 0, u = t.length; s < u; s++) {
    var i = t[s].trim();
    if (i) {
      var d = i.match(Ht);
      if (d) {
        var g = 0 | parseInt(d[1], 10), h = d[2];
        g !== 0 && (Vt(h, g), qt(e, h, d[3]), e.getTag().insertRules(g, n)), n.length = 0;
      } else n.push(i);
    }
  }
}, Xt = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, dt = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), s = (function(d) {
    for (var g = d.childNodes, h = g.length; h >= 0; h--) {
      var w = g[h];
      if (w && w.nodeType === 1 && w.hasAttribute(he)) return w;
    }
  })(t), u = s !== void 0 ? s.nextSibling : null;
  n.setAttribute(he, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var i = Xt();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, u), n;
}, Zt = (function() {
  function e(t) {
    var n = this.element = dt(t);
    n.appendChild(document.createTextNode("")), this.sheet = (function(s) {
      if (s.sheet) return s.sheet;
      for (var u = document.styleSheets, i = 0, d = u.length; i < d; i++) {
        var g = u[i];
        if (g.ownerNode === s) return g;
      }
      ge(17);
    })(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
})(), Gt = (function() {
  function e(t) {
    var n = this.element = dt(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var s = document.createTextNode(n), u = this.nodes[t];
      return this.element.insertBefore(s, u || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
})(), Kt = (function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
})(), at = Ze, Jt = { isServer: !Ze, useCSSOMInjection: !Rt }, ft = (function() {
  function e(t, n, s) {
    t === void 0 && (t = ce), n === void 0 && (n = {}), this.options = ae({}, Jt, {}, t), this.gs = n, this.names = new Map(s), this.server = !!t.isServer, !this.server && Ze && at && (at = !1, (function(u) {
      for (var i = document.querySelectorAll(Bt), d = 0, g = i.length; d < g; d++) {
        var h = i[d];
        h && h.getAttribute(he) !== "active" && (Yt(u, h), h.parentNode && h.parentNode.removeChild(h));
      }
    })(this));
  }
  e.registerId = function(t) {
    return Ce(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(ae({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (s = (n = this.options).isServer, u = n.useCSSOMInjection, i = n.target, t = s ? new Kt(i) : u ? new Zt(i) : new Gt(i), new Ft(t)));
    var t, n, s, u, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Ce(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var s = /* @__PURE__ */ new Set();
      s.add(n), this.names.set(t, s);
    }
  }, r.insertRules = function(t, n, s) {
    this.registerName(t, n), this.getTag().insertRules(Ce(t), s);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Ce(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return (function(t) {
      for (var n = t.getTag(), s = n.length, u = "", i = 0; i < s; i++) {
        var d = Lt(i);
        if (d !== void 0) {
          var g = t.names.get(d), h = n.getGroup(i);
          if (g && h && g.size) {
            var w = he + ".g" + i + '[id="' + d + '"]', S = "";
            g !== void 0 && g.forEach((function($) {
              $.length > 0 && (S += $ + ",");
            })), u += "" + h + w + '{content:"' + S + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    })(this);
  }, e;
})(), Qt = /(a)(d)/gi, st = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ve(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = st(r % 52) + t;
  return (st(r % 52) + t).replace(Qt, "$1-$2");
}
var fe = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, mt = function(e) {
  return fe(5381, e);
};
function Ut(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Se(t) && !Xe(t)) return !1;
  }
  return !0;
}
var Wt = mt("5.3.6"), er = (function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Ut(r), this.componentId = t, this.baseHash = fe(Wt, t), this.baseStyle = n, ft.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var s = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(s, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var i = ye(this.rules, r, t, n).join(""), d = Ve(fe(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(s, d)) {
        var g = n(i, "." + d, void 0, s);
        t.insertRules(s, d, g);
      }
      u.push(d), this.staticRulesId = d;
    }
    else {
      for (var h = this.rules.length, w = fe(this.baseHash, n.hash), S = "", $ = 0; $ < h; $++) {
        var O = this.rules[$];
        if (typeof O == "string") S += O, process.env.NODE_ENV !== "production" && (w = fe(w, O + $));
        else if (O) {
          var f = ye(O, r, t, n), o = Array.isArray(f) ? f.join("") : f;
          w = fe(w, o + $), S += o;
        }
      }
      if (S) {
        var v = Ve(w >>> 0);
        if (!t.hasNameForId(s, v)) {
          var N = n(S, "." + v, void 0, s);
          t.insertRules(s, v, N);
        }
        u.push(v);
      }
    }
    return u.join(" ");
  }, e;
})(), tr = /^\s*\/\/.*$/gm, rr = [":", "[", ".", "#"];
function nr(e) {
  var r, t, n, s, u = ce, i = u.options, d = i === void 0 ? ce : i, g = u.plugins, h = g === void 0 ? Pe : g, w = new Et(d), S = [], $ = /* @__PURE__ */ (function(o) {
    function v(N) {
      if (N) try {
        o(N + "}");
      } catch {
      }
    }
    return function(N, x, E, k, l, L, W, J, ee, ne) {
      switch (N) {
        case 1:
          if (ee === 0 && x.charCodeAt(0) === 64) return o(x + ";"), "";
          break;
        case 2:
          if (J === 0) return x + "/*|*/";
          break;
        case 3:
          switch (J) {
            case 102:
            case 112:
              return o(E[0] + x), "";
            default:
              return x + (ne === 0 ? "/*|*/" : "");
          }
        case -2:
          x.split("/*|*/}").forEach(v);
      }
    };
  })((function(o) {
    S.push(o);
  })), O = function(o, v, N) {
    return v === 0 && rr.indexOf(N[t.length]) !== -1 || N.match(s) ? o : "." + r;
  };
  function f(o, v, N, x) {
    x === void 0 && (x = "&");
    var E = o.replace(tr, ""), k = v && N ? N + " " + v + " { " + E + " }" : E;
    return r = x, t = v, n = new RegExp("\\" + t + "\\b", "g"), s = new RegExp("(\\" + t + "\\b){2,}"), w(N || !v ? "" : v, k);
  }
  return w.use([].concat(h, [function(o, v, N) {
    o === 2 && N.length && N[0].lastIndexOf(t) > 0 && (N[0] = N[0].replace(n, O));
  }, $, function(o) {
    if (o === -2) {
      var v = S;
      return S = [], v;
    }
  }])), f.hash = h.length ? h.reduce((function(o, v) {
    return v.name || ge(15), fe(o, v.name);
  }), 5381).toString() : "", f;
}
var ht = Ne.createContext();
ht.Consumer;
var yt = Ne.createContext(), or = (yt.Consumer, new ft()), Be = nr();
function ar() {
  return qe(ht) || or;
}
function sr() {
  return qe(yt) || Be;
}
var ir = (function() {
  function e(r, t) {
    var n = this;
    this.inject = function(s, u) {
      u === void 0 && (u = Be);
      var i = n.name + u.hash;
      s.hasNameForId(n.id, i) || s.insertRules(n.id, i, u(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return ge(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Be), this.name + r.hash;
  }, e;
})(), cr = /([A-Z])/, ur = /([A-Z])/g, lr = /^ms-/, pr = function(e) {
  return "-" + e.toLowerCase();
};
function it(e) {
  return cr.test(e) ? e.replace(ur, pr).replace(lr, "-ms-") : e;
}
var ct = function(e) {
  return e == null || e === !1 || e === "";
};
function ye(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var s, u = [], i = 0, d = e.length; i < d; i += 1) (s = ye(e[i], r, t, n)) !== "" && (Array.isArray(s) ? u.push.apply(u, s) : u.push(s));
    return u;
  }
  if (ct(e)) return "";
  if (Xe(e)) return "." + e.styledComponentId;
  if (Se(e)) {
    if (typeof (h = e) != "function" || h.prototype && h.prototype.isReactComponent || !r) return e;
    var g = e(r);
    return process.env.NODE_ENV !== "production" && Ye.isElement(g) && console.warn(Le(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ye(g, r, t, n);
  }
  var h;
  return e instanceof ir ? t ? (e.inject(t, n), e.getName(n)) : e : Fe(e) ? (function w(S, $) {
    var O, f, o = [];
    for (var v in S) S.hasOwnProperty(v) && !ct(S[v]) && (Array.isArray(S[v]) && S[v].isCss || Se(S[v]) ? o.push(it(v) + ":", S[v], ";") : Fe(S[v]) ? o.push.apply(o, w(S[v], v)) : o.push(it(v) + ": " + (O = v, (f = S[v]) == null || typeof f == "boolean" || f === "" ? "" : typeof f != "number" || f === 0 || O in Pt ? String(f).trim() : f + "px") + ";"));
    return $ ? [$ + " {"].concat(o, ["}"]) : o;
  })(e) : e.toString();
}
var ut = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function me(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return Se(e) || Fe(e) ? ut(ye(ot(Pe, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ut(ye(ot(e, t)));
}
var lt = /invalid hook call/i, xe = /* @__PURE__ */ new Set(), dr = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var s = !0;
      console.error = function(u) {
        if (lt.test(u)) s = !1, xe.delete(t);
        else {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), g = 1; g < i; g++) d[g - 1] = arguments[g];
          n.apply(void 0, [u].concat(d));
        }
      }, St(), s && !xe.has(t) && (console.warn(t), xe.add(t));
    } catch (u) {
      lt.test(u.message) && xe.delete(t);
    } finally {
      console.error = n;
    }
  }
}, fr = function(e, r, t) {
  return t === void 0 && (t = ce), e.theme !== t.theme && e.theme || r || t.theme;
}, mr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, hr = /(^-|-$)/g;
function ze(e) {
  return e.replace(mr, "-").replace(hr, "");
}
var yr = function(e) {
  return Ve(mt(e) >>> 0);
};
function Ae(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var He = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, gr = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function br(e, r, t) {
  var n = e[t];
  He(r) && He(n) ? gt(n, r) : e[t] = r;
}
function gt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var s = 0, u = t; s < u.length; s++) {
    var i = u[s];
    if (He(i)) for (var d in i) gr(d) && br(e, i[d], d);
  }
  return e;
}
var bt = Ne.createContext();
bt.Consumer;
var je = {};
function vt(e, r, t) {
  var n = Xe(e), s = !Ae(e), u = r.attrs, i = u === void 0 ? Pe : u, d = r.componentId, g = d === void 0 ? (function(x, E) {
    var k = typeof x != "string" ? "sc" : ze(x);
    je[k] = (je[k] || 0) + 1;
    var l = k + "-" + yr("5.3.6" + k + je[k]);
    return E ? E + "-" + l : l;
  })(r.displayName, r.parentComponentId) : d, h = r.displayName, w = h === void 0 ? (function(x) {
    return Ae(x) ? "styled." + x : "Styled(" + Le(x) + ")";
  })(e) : h, S = r.displayName && r.componentId ? ze(r.displayName) + "-" + r.componentId : r.componentId || g, $ = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, O = r.shouldForwardProp;
  n && e.shouldForwardProp && (O = r.shouldForwardProp ? function(x, E, k) {
    return e.shouldForwardProp(x, E, k) && r.shouldForwardProp(x, E, k);
  } : e.shouldForwardProp);
  var f, o = new er(t, S, n ? e.componentStyle : void 0), v = o.isStatic && i.length === 0, N = function(x, E) {
    return (function(k, l, L, W) {
      var J = k.attrs, ee = k.componentStyle, ne = k.defaultProps, se = k.foldedComponentIds, G = k.shouldForwardProp, Q = k.styledComponentId, te = k.target;
      process.env.NODE_ENV !== "production" && Ge(Q);
      var X = (function(A, a, _) {
        A === void 0 && (A = ce);
        var p = ae({}, a, { theme: A }), F = {};
        return _.forEach((function(D) {
          var T, c, V, H = D;
          for (T in Se(H) && (H = H(p)), H) p[T] = F[T] = T === "className" ? (c = F[T], V = H[T], c && V ? c + " " + V : c || V) : H[T];
        })), [p, F];
      })(fr(l, qe(bt), ne) || ce, l, J), ue = X[0], U = X[1], K = (function(A, a, _, p) {
        var F = ar(), D = sr(), T = a ? A.generateAndInjectStyles(ce, F, D) : A.generateAndInjectStyles(_, F, D);
        return process.env.NODE_ENV !== "production" && Ge(T), process.env.NODE_ENV !== "production" && !a && p && p(T), T;
      })(ee, W, ue, process.env.NODE_ENV !== "production" ? k.warnTooManyClasses : void 0), le = L, oe = U.$as || l.$as || U.as || l.as || te, pe = Ae(oe), b = U !== l ? ae({}, l, {}, U) : l, m = {};
      for (var y in b) y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? m.as = b[y] : (G ? G(y, We, oe) : !pe || We(y)) && (m[y] = b[y]));
      return l.style && U.style !== l.style && (m.style = ae({}, l.style, {}, U.style)), m.className = Array.prototype.concat(se, Q, K !== Q ? K : null, l.className, U.className).filter(Boolean).join(" "), m.ref = le, wt(oe, m);
    })(f, x, E, v);
  };
  return N.displayName = w, (f = Ne.forwardRef(N)).attrs = $, f.componentStyle = o, f.displayName = w, f.shouldForwardProp = O, f.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Pe, f.styledComponentId = S, f.target = n ? e.target : e, f.withComponent = function(x) {
    var E = r.componentId, k = (function(L, W) {
      if (L == null) return {};
      var J, ee, ne = {}, se = Object.keys(L);
      for (ee = 0; ee < se.length; ee++) J = se[ee], W.indexOf(J) >= 0 || (ne[J] = L[J]);
      return ne;
    })(r, ["componentId"]), l = E && E + "-" + (Ae(x) ? x : ze(Le(x)));
    return vt(x, ae({}, k, { attrs: $, componentId: l }), t);
  }, Object.defineProperty(f, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? gt({}, e.defaultProps, x) : x;
  } }), process.env.NODE_ENV !== "production" && (dr(w, S), f.warnTooManyClasses = /* @__PURE__ */ (function(x, E) {
    var k = {}, l = !1;
    return function(L) {
      if (!l && (k[L] = !0, Object.keys(k).length >= 200)) {
        var W = E ? ' with the id of "' + E + '"' : "";
        console.warn("Over 200 classes were generated for component " + x + W + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), l = !0, k = {};
      }
    };
  })(w, S)), f.toString = function() {
    return "." + f.styledComponentId;
  }, s && Mt(f, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), f;
}
var Oe = function(e) {
  return (function r(t, n, s) {
    if (s === void 0 && (s = ce), !Ye.isValidElementType(n)) return ge(1, String(n));
    var u = function() {
      return t(n, s, me.apply(void 0, arguments));
    };
    return u.withConfig = function(i) {
      return r(t, n, ae({}, s, {}, i));
    }, u.attrs = function(i) {
      return r(t, n, ae({}, s, { attrs: Array.prototype.concat(s.attrs, i).filter(Boolean) }));
    }, u;
  })(vt, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(e) {
  Oe[e] = Oe(e);
}));
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const vr = {
  sm: me(["--pad:6px 10px;--fs:.875rem;--rad:8px;"]),
  md: me(["--pad:8px 14px;--fs:1rem;--rad:10px;"]),
  lg: me(["--pad:12px 18px;--fs:1.125rem;--rad:12px;"])
}, wr = {
  primary: me(["--bg:#111827;--fg:#fff;--bd:transparent;&:hover:not(:disabled){filter:brightness(1.08);}"]),
  secondary: me(["--bg:#e5e7eb;--fg:#111827;--bd:#d1d5db;&:hover:not(:disabled){filter:brightness(0.98);}"]),
  ghost: me(["--bg:transparent;--fg:#111827;--bd:transparent;&:hover:not(:disabled){background:rgba(17,24,39,.06);}"])
}, Sr = Oe.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "o6sfhm-0"
})(["", ";", ";display:inline-flex;align-items:center;justify-content:center;gap:.5rem;width:", ";padding:var(--pad);font-size:var(--fs);line-height:1.25;border-radius:var(--rad);border:1px solid var(--bd);background:var(--bg);color:var(--fg);cursor:pointer;transition:filter 120ms ease,background 120ms ease;&:disabled{opacity:.6;cursor:not-allowed;}"], (e) => vr[e.$size || "md"], (e) => wr[e.$variant || "primary"], (e) => e.$fullWidth ? "100%" : "auto");
function kr({
  children: e,
  variant: r = "primary",
  size: t = "md",
  fullWidth: n = !1,
  disabled: s = !1,
  onClick: u,
  ...i
}) {
  return /* @__PURE__ */ de(Sr, { $variant: r, $size: t, $fullWidth: n, disabled: s, onClick: u, ...i, children: e });
}
const Cr = Oe.input.withConfig({
  displayName: "Input__StyledInput",
  componentId: "w29k6n-0"
})(["padding:8px 12px;border:1px solid #d1d5db;border-radius:8px;font-size:14px;outline:none;&:focus{border-color:#111827;box-shadow:0 0 0 3px rgba(17,24,39,0.1);}"]);
function pt(e) {
  return /* @__PURE__ */ de(Cr, { ...e });
}
function Er({ onSubmit: e }) {
  const [r, t] = Ke(""), [n, s] = Ke("");
  return /* @__PURE__ */ De("form", { onSubmit: (i) => {
    i.preventDefault(), e == null || e({ email: r, password: n });
  }, style: { display: "grid", gap: 12, width: 320 }, children: [
    /* @__PURE__ */ De("label", { children: [
      /* @__PURE__ */ de("div", { style: { marginBottom: 6 }, children: "Email" }),
      /* @__PURE__ */ de(
        pt,
        {
          type: "email",
          placeholder: "you@example.com",
          value: r,
          onChange: (i) => t(i.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ De("label", { children: [
      /* @__PURE__ */ de("div", { style: { marginBottom: 6 }, children: "Password" }),
      /* @__PURE__ */ de(
        pt,
        {
          type: "password",
          placeholder: "••••••••",
          value: n,
          onChange: (i) => s(i.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ de(kr, { type: "submit", children: "Sign in" })
  ] });
}
export {
  Er as LoginForm
};
