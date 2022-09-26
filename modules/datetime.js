class t extends Error {}
class z extends t {
  constructor(t) {
    super("Invalid DateTime: " + t.toMessage());
  }
}
class q extends t {
  constructor(t) {
    super("Invalid Interval: " + t.toMessage());
  }
}
class A extends t {
  constructor(t) {
    super("Invalid Duration: " + t.toMessage());
  }
}
class j extends t {}
class _ extends t {
  constructor(t) {
    super("Invalid unit " + t);
  }
}
class o extends t {}
class r extends t {
  constructor() {
    super("Zone is an abstract class");
  }
}
var e = "numeric",
  n = "short",
  s = "long";
const U = { year: e, month: e, day: e },
  $ = { year: e, month: n, day: e },
  H = { year: e, month: n, day: e, weekday: n },
  W = { year: e, month: s, day: e },
  R = { year: e, month: s, day: e, weekday: s },
  J = { hour: e, minute: e },
  Y = { hour: e, minute: e, second: e },
  P = { hour: e, minute: e, second: e, timeZoneName: n },
  G = { hour: e, minute: e, second: e, timeZoneName: s },
  B = { hour: e, minute: e, hourCycle: "h23" },
  Q = { hour: e, minute: e, second: e, hourCycle: "h23" },
  K = { hour: e, minute: e, second: e, hourCycle: "h23", timeZoneName: n },
  X = { hour: e, minute: e, second: e, hourCycle: "h23", timeZoneName: s },
  tt = { year: e, month: e, day: e, hour: e, minute: e },
  et = { year: e, month: e, day: e, hour: e, minute: e, second: e },
  rt = { year: e, month: n, day: e, hour: e, minute: e },
  nt = { year: e, month: n, day: e, hour: e, minute: e, second: e },
  st = { year: e, month: n, day: e, weekday: n, hour: e, minute: e },
  it = { year: e, month: s, day: e, hour: e, minute: e, timeZoneName: n },
  at = {
    year: e,
    month: s,
    day: e,
    hour: e,
    minute: e,
    second: e,
    timeZoneName: n,
  },
  ot = {
    year: e,
    month: s,
    day: e,
    weekday: s,
    hour: e,
    minute: e,
    timeZoneName: s,
  },
  ut = {
    year: e,
    month: s,
    day: e,
    weekday: s,
    hour: e,
    minute: e,
    second: e,
    timeZoneName: s,
  };
function O(t) {
  return void 0 === t;
}
function c(t) {
  return "number" == typeof t;
}
function lt(t) {
  return "number" == typeof t && t % 1 == 0;
}
function ct(t) {
  return "[object Date]" === Object.prototype.toString.call(t);
}
function ht() {
  try {
    return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat;
  } catch (t) {
    return !1;
  }
}
function dt(t) {
  return Array.isArray(t) ? t : [t];
}
function mt(t, r, n) {
  if (0 !== t.length)
    return t.reduce((t, e) => {
      e = [r(e), e];
      return t && n(t[0], e[0]) === t[0] ? t : e;
    }, null)[1];
}
function h(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function u(t, e, r) {
  return lt(t) && e <= t && t <= r;
}
function l(t, e = 2) {
  let r;
  return (r =
    t < 0 ? "-" + ("" + -t).padStart(e, "0") : ("" + t).padStart(e, "0"));
}
function d(t) {
  if (!O(t) && null !== t && "" !== t) return parseInt(t, 10);
}
function m(t) {
  if (!O(t) && null !== t && "" !== t) return parseFloat(t);
}
function ft(t) {
  if (!O(t) && null !== t && "" !== t)
    return (t = 1e3 * parseFloat("0." + t)), Math.floor(t);
}
function yt(t, e, r = !1) {
  const n = 10 ** e,
    s = r ? Math.trunc : Math.round;
  return s(t * n) / n;
}
function gt(t) {
  return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
}
function wt(t) {
  return gt(t) ? 366 : 365;
}
function vt(t, e) {
  var r,
    n = (n = e - 1) - (r = 12) * Math.floor(n / r) + 1;
  return 2 == n
    ? gt(t + (e - n) / 12)
      ? 29
      : 28
    : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function pt(t) {
  let e = Date.UTC(
    t.year,
    t.month - 1,
    t.day,
    t.hour,
    t.minute,
    t.second,
    t.millisecond
  );
  return (
    t.year < 100 &&
      0 <= t.year &&
      (e = new Date(e)).setUTCFullYear(e.getUTCFullYear() - 1900),
    +e
  );
}
function Tt(t) {
  var e =
      (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7,
    t = t - 1,
    t = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7;
  return 4 == e || 3 == t ? 53 : 52;
}
function St(t) {
  return 99 < t ? t : 60 < t ? 1900 + t : 2e3 + t;
}
function Ot(t, e, r, n = null) {
  const s = new Date(t),
    i = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
  n && (i.timeZone = n);
  (t = { timeZoneName: e, ...i }),
    (n = new Intl.DateTimeFormat(r, t)
      .formatToParts(s)
      .find((t) => "timezonename" === t.type.toLowerCase()));
  return n ? n.value : null;
}
function bt(t, e) {
  let r = parseInt(t, 10);
  Number.isNaN(r) && (r = 0);
  (t = parseInt(e, 10) || 0), (e = r < 0 || Object.is(r, -0) ? -t : t);
  return 60 * r + e;
}
function kt(t) {
  var e = Number(t);
  if ("boolean" == typeof t || "" === t || Number.isNaN(e))
    throw new o("Invalid unit value " + t);
  return e;
}
function Mt(t, e) {
  const r = {};
  for (const s in t) {
    var n;
    !h(t, s) || (null != (n = t[s]) && (r[e(s)] = kt(n)));
  }
  return r;
}
function Nt(t, e) {
  var r = Math.trunc(Math.abs(t / 60)),
    n = Math.trunc(Math.abs(t % 60)),
    s = 0 <= t ? "+" : "-";
  switch (e) {
    case "short":
      return s + l(r, 2) + ":" + l(n, 2);
    case "narrow":
      return s + r + (0 < n ? ":" + n : "");
    case "techie":
      return s + l(r, 2) + l(n, 2);
    default:
      throw new RangeError(
        `Value format ${e} is out of range for property format`
      );
  }
}
function Dt(t) {
  return (
    (r = t),
    ["hour", "minute", "second", "millisecond"].reduce(
      (t, e) => ((t[e] = r[e]), t),
      {}
    )
  );
  var r;
}
n =
  /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
const Et = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  Vt = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  xt = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function It(t) {
  switch (t) {
    case "narrow":
      return [...xt];
    case "short":
      return [...Vt];
    case "long":
      return [...Et];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ];
    default:
      return null;
  }
}
const Ct = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  Ft = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  Zt = ["M", "T", "W", "T", "F", "S", "S"];
function Lt(t) {
  switch (t) {
    case "narrow":
      return [...Zt];
    case "short":
      return [...Ft];
    case "long":
      return [...Ct];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const zt = ["AM", "PM"],
  qt = ["Before Christ", "Anno Domini"],
  At = ["BC", "AD"],
  jt = ["B", "A"];
function _t(t) {
  switch (t) {
    case "narrow":
      return [...jt];
    case "short":
      return [...At];
    case "long":
      return [...qt];
    default:
      return null;
  }
}
function Ut(t) {
  return zt[t.hour < 12 ? 0 : 1];
}
function $t(t, e) {
  return Lt(e)[t.weekday - 1];
}
function Ht(t, e) {
  return It(e)[t.month - 1];
}
function Wt(t, e) {
  return _t(e)[t.year < 0 ? 0 : 1];
}
function Rt(t, e, r = "always", n = !1) {
  var s = {
      years: ["year", "yr."],
      quarters: ["quarter", "qtr."],
      months: ["month", "mo."],
      weeks: ["week", "wk."],
      days: ["day", "day", "days"],
      hours: ["hour", "hr."],
      minutes: ["minute", "min."],
      seconds: ["second", "sec."],
    },
    i = -1 === ["hours", "minutes", "seconds"].indexOf(t);
  if ("auto" === r && i) {
    var a = "days" === t;
    switch (e) {
      case 1:
        return a ? "tomorrow" : "next " + s[t][0];
      case -1:
        return a ? "yesterday" : "last " + s[t][0];
      case 0:
        return a ? "today" : "this " + s[t][0];
    }
  }
  var r = Object.is(e, -0) || e < 0,
    i = Math.abs(e),
    e = 1 === i,
    o = s[t],
    n = n ? (!e && o[2]) || o[1] : e ? s[t][0] : t;
  return r ? i + ` ${n} ago` : `in ${i} ` + n;
}
function Jt(t, e) {
  let r = "";
  for (const n of t) n.literal ? (r += n.val) : (r += e(n.val));
  return r;
}
const Yt = {
  D: U,
  DD: $,
  DDD: W,
  DDDD: R,
  t: J,
  tt: Y,
  ttt: P,
  tttt: G,
  T: B,
  TT: Q,
  TTT: K,
  TTTT: X,
  f: tt,
  ff: rt,
  fff: it,
  ffff: ot,
  F: et,
  FF: nt,
  FFF: at,
  FFFF: ut,
};
class f {
  static create(t, e = {}) {
    return new f(t, e);
  }
  static parseFormat(e) {
    let r = null,
      n = "",
      s = !1;
    const i = [];
    for (let t = 0; t < e.length; t++) {
      var a = e.charAt(t);
      "'" === a
        ? (0 < n.length && i.push({ literal: s, val: n }),
          (r = null),
          (n = ""),
          (s = !s))
        : s || a === r
        ? (n += a)
        : (0 < n.length && i.push({ literal: !1, val: n }), (n = a), (r = a));
    }
    return 0 < n.length && i.push({ literal: s, val: n }), i;
  }
  static macroTokenToFormatOpts(t) {
    return Yt[t];
  }
  constructor(t, e) {
    (this.opts = e), (this.loc = t), (this.systemLoc = null);
  }
  formatWithSystemDefault(t, e) {
    null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem());
    const r = this.systemLoc.dtFormatter(t, { ...this.opts, ...e });
    return r.format();
  }
  formatDateTime(t, e = {}) {
    const r = this.loc.dtFormatter(t, { ...this.opts, ...e });
    return r.format();
  }
  formatDateTimeParts(t, e = {}) {
    const r = this.loc.dtFormatter(t, { ...this.opts, ...e });
    return r.formatToParts();
  }
  resolvedOptions(t, e = {}) {
    const r = this.loc.dtFormatter(t, { ...this.opts, ...e });
    return r.resolvedOptions();
  }
  num(t, e = 0) {
    if (this.opts.forceSimple) return l(t, e);
    const r = { ...this.opts };
    return 0 < e && (r.padTo = e), this.loc.numberFormatter(r).format(t);
  }
  formatDateTimeFromString(r, t) {
    const n = "en" === this.loc.listingMode(),
      e = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar,
      s = (t, e) => this.loc.extract(r, t, e),
      i = (t) =>
        r.isOffsetFixed && 0 === r.offset && t.allowZ
          ? "Z"
          : r.isValid
          ? r.zone.formatOffset(r.ts, t.format)
          : "",
      a = () =>
        n ? Ut(r) : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
      o = (t, e) =>
        n
          ? Ht(r, t)
          : s(e ? { month: t } : { month: t, day: "numeric" }, "month"),
      u = (t, e) =>
        n
          ? $t(r, t)
          : s(
              e
                ? { weekday: t }
                : { weekday: t, month: "long", day: "numeric" },
              "weekday"
            ),
      l = (t) => {
        var e = f.macroTokenToFormatOpts(t);
        return e ? this.formatWithSystemDefault(r, e) : t;
      },
      c = (t) => (n ? Wt(r, t) : s({ era: t }, "era"));
    return Jt(f.parseFormat(t), (t) => {
      switch (t) {
        case "S":
          return this.num(r.millisecond);
        case "u":
        case "SSS":
          return this.num(r.millisecond, 3);
        case "s":
          return this.num(r.second);
        case "ss":
          return this.num(r.second, 2);
        case "uu":
          return this.num(Math.floor(r.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(r.millisecond / 100));
        case "m":
          return this.num(r.minute);
        case "mm":
          return this.num(r.minute, 2);
        case "h":
          return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12);
        case "hh":
          return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12, 2);
        case "H":
          return this.num(r.hour);
        case "HH":
          return this.num(r.hour, 2);
        case "Z":
          return i({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return i({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return i({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return r.zone.offsetName(r.ts, {
            format: "short",
            locale: this.loc.locale,
          });
        case "ZZZZZ":
          return r.zone.offsetName(r.ts, {
            format: "long",
            locale: this.loc.locale,
          });
        case "z":
          return r.zoneName;
        case "a":
          return a();
        case "d":
          return e ? s({ day: "numeric" }, "day") : this.num(r.day);
        case "dd":
          return e ? s({ day: "2-digit" }, "day") : this.num(r.day, 2);
        case "c":
          return this.num(r.weekday);
        case "ccc":
          return u("short", !0);
        case "cccc":
          return u("long", !0);
        case "ccccc":
          return u("narrow", !0);
        case "E":
          return this.num(r.weekday);
        case "EEE":
          return u("short", !1);
        case "EEEE":
          return u("long", !1);
        case "EEEEE":
          return u("narrow", !1);
        case "L":
          return e
            ? s({ month: "numeric", day: "numeric" }, "month")
            : this.num(r.month);
        case "LL":
          return e
            ? s({ month: "2-digit", day: "numeric" }, "month")
            : this.num(r.month, 2);
        case "LLL":
          return o("short", !0);
        case "LLLL":
          return o("long", !0);
        case "LLLLL":
          return o("narrow", !0);
        case "M":
          return e ? s({ month: "numeric" }, "month") : this.num(r.month);
        case "MM":
          return e ? s({ month: "2-digit" }, "month") : this.num(r.month, 2);
        case "MMM":
          return o("short", !1);
        case "MMMM":
          return o("long", !1);
        case "MMMMM":
          return o("narrow", !1);
        case "y":
          return e ? s({ year: "numeric" }, "year") : this.num(r.year);
        case "yy":
          return e
            ? s({ year: "2-digit" }, "year")
            : this.num(r.year.toString().slice(-2), 2);
        case "yyyy":
          return e ? s({ year: "numeric" }, "year") : this.num(r.year, 4);
        case "yyyyyy":
          return e ? s({ year: "numeric" }, "year") : this.num(r.year, 6);
        case "G":
          return c("short");
        case "GG":
          return c("long");
        case "GGGGG":
          return c("narrow");
        case "kk":
          return this.num(r.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(r.weekYear, 4);
        case "W":
          return this.num(r.weekNumber);
        case "WW":
          return this.num(r.weekNumber, 2);
        case "o":
          return this.num(r.ordinal);
        case "ooo":
          return this.num(r.ordinal, 3);
        case "q":
          return this.num(r.quarter);
        case "qq":
          return this.num(r.quarter, 2);
        case "X":
          return this.num(Math.floor(r.ts / 1e3));
        case "x":
          return this.num(r.ts);
        default:
          return l(t);
      }
    });
  }
  formatDurationFromString(t, e) {
    const r = (t) => {
        switch (t[0]) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
            return "hour";
          case "d":
            return "day";
          case "w":
            return "week";
          case "M":
            return "month";
          case "y":
            return "year";
          default:
            return null;
        }
      },
      n = f.parseFormat(e),
      s = n.reduce((t, { literal: e, val: r }) => (e ? t : t.concat(r)), []),
      i = t.shiftTo(...s.map(r).filter((t) => t));
    return Jt(
      n,
      ((a = i),
      (t) => {
        var e = r(t);
        return e ? this.num(a.get(e), t.length) : t;
      })
    );
    var a;
  }
}
class y {
  constructor(t, e) {
    (this.reason = t), (this.explanation = e);
  }
  toMessage() {
    return this.explanation
      ? this.reason + ": " + this.explanation
      : this.reason;
  }
}
class i {
  get type() {
    throw new r();
  }
  get name() {
    throw new r();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new r();
  }
  offsetName(t, e) {
    throw new r();
  }
  formatOffset(t, e) {
    throw new r();
  }
  offset(t) {
    throw new r();
  }
  equals(t) {
    throw new r();
  }
  get isValid() {
    throw new r();
  }
}
let Pt = null;
class Gt extends i {
  static get instance() {
    return (Pt = null === Pt ? new Gt() : Pt);
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(t, { format: e, locale: r }) {
    return Ot(t, e, r);
  }
  formatOffset(t, e) {
    return Nt(this.offset(t), e);
  }
  offset(t) {
    return -new Date(t).getTimezoneOffset();
  }
  equals(t) {
    return "system" === t.type;
  }
  get isValid() {
    return !0;
  }
}
let Bt = {};
function Qt(t) {
  return (
    Bt[t] ||
      (Bt[t] = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: t,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        era: "short",
      })),
    Bt[t]
  );
}
const Kt = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 };
function Xt(t, e) {
  var t = t.format(e).replace(/\u200E/g, ""),
    [, e, t, r, n, s, i, a] =
      /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t);
  return [r, e, t, n, s, i, a];
}
function te(t, e) {
  var r = t.formatToParts(e);
  const n = [];
  for (let t = 0; t < r.length; t++) {
    var { type: s, value: i } = r[t],
      a = Kt[s];
    "era" === s ? (n[a] = i) : O(a) || (n[a] = parseInt(i, 10));
  }
  return n;
}
let ee = {};
class w extends i {
  static create(t) {
    return ee[t] || (ee[t] = new w(t)), ee[t];
  }
  static resetCache() {
    (ee = {}), (Bt = {});
  }
  static isValidSpecifier(t) {
    return this.isValidZone(t);
  }
  static isValidZone(t) {
    if (!t) return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: t }).format(), !0;
    } catch (t) {
      return !1;
    }
  }
  constructor(t) {
    super(), (this.zoneName = t), (this.valid = w.isValidZone(t));
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(t, { format: e, locale: r }) {
    return Ot(t, e, r, this.name);
  }
  formatOffset(t, e) {
    return Nt(this.offset(t), e);
  }
  offset(t) {
    t = new Date(t);
    if (isNaN(t)) return NaN;
    var e = Qt(this.name);
    let [r, n, s, i, a, o, u] = (e.formatToParts ? te : Xt)(e, t);
    (e = +t), (t = e % 1e3);
    return (
      (pt({
        year: (r = "BC" === i ? 1 - Math.abs(r) : r),
        month: n,
        day: s,
        hour: 24 === a ? 0 : a,
        minute: o,
        second: u,
        millisecond: 0,
      }) -
        (e -= 0 <= t ? t : 1e3 + t)) /
      6e4
    );
  }
  equals(t) {
    return "iana" === t.type && t.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let re = null;
class v extends i {
  static get utcInstance() {
    return (re = null === re ? new v(0) : re);
  }
  static instance(t) {
    return 0 === t ? v.utcInstance : new v(t);
  }
  static parseSpecifier(t) {
    if (t) {
      t = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (t) return new v(bt(t[1], t[2]));
    }
    return null;
  }
  constructor(t) {
    super(), (this.fixed = t);
  }
  get type() {
    return "fixed";
  }
  get name() {
    return 0 === this.fixed ? "UTC" : "UTC" + Nt(this.fixed, "narrow");
  }
  get ianaName() {
    return 0 === this.fixed ? "Etc/UTC" : "Etc/GMT" + Nt(-this.fixed, "narrow");
  }
  offsetName() {
    return this.name;
  }
  formatOffset(t, e) {
    return Nt(this.fixed, e);
  }
  get isUniversal() {
    return !0;
  }
  offset() {
    return this.fixed;
  }
  equals(t) {
    return "fixed" === t.type && t.fixed === this.fixed;
  }
  get isValid() {
    return !0;
  }
}
class ne extends i {
  constructor(t) {
    super(), (this.zoneName = t);
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return !1;
  }
  get isValid() {
    return !1;
  }
}
function b(t, e) {
  var r;
  return O(t) || null === t
    ? e
    : t instanceof i
    ? t
    : "string" == typeof t
    ? "default" === (r = t.toLowerCase())
      ? e
      : "local" === r || "system" === r
      ? Gt.instance
      : "utc" === r || "gmt" === r
      ? v.utcInstance
      : v.parseSpecifier(r) || w.create(t)
    : c(t)
    ? v.instance(t)
    : "object" == typeof t && t.offset && "number" == typeof t.offset
    ? t
    : new ne(t);
}
let se = () => Date.now(),
  ie = "system",
  ae = null,
  oe = null,
  ue = null,
  le;
class k {
  static get now() {
    return se;
  }
  static set now(t) {
    se = t;
  }
  static set defaultZone(t) {
    ie = t;
  }
  static get defaultZone() {
    return b(ie, Gt.instance);
  }
  static get defaultLocale() {
    return ae;
  }
  static set defaultLocale(t) {
    ae = t;
  }
  static get defaultNumberingSystem() {
    return oe;
  }
  static set defaultNumberingSystem(t) {
    oe = t;
  }
  static get defaultOutputCalendar() {
    return ue;
  }
  static set defaultOutputCalendar(t) {
    ue = t;
  }
  static get throwOnInvalid() {
    return le;
  }
  static set throwOnInvalid(t) {
    le = t;
  }
  static resetCaches() {
    M.resetCache(), w.resetCache();
  }
}
let ce = {};
function he(t, e = {}) {
  var r = JSON.stringify([t, e]);
  let n = ce[r];
  return n || ((n = new Intl.ListFormat(t, e)), (ce[r] = n)), n;
}
let de = {};
function me(t, e = {}) {
  var r = JSON.stringify([t, e]);
  let n = de[r];
  return n || ((n = new Intl.DateTimeFormat(t, e)), (de[r] = n)), n;
}
let fe = {};
function ye(t, e = {}) {
  var r = JSON.stringify([t, e]);
  let n = fe[r];
  return n || ((n = new Intl.NumberFormat(t, e)), (fe[r] = n)), n;
}
let ge = {};
function we(t, e = {}) {
  const { base: r, ...n } = e;
  var s = JSON.stringify([t, n]);
  let i = ge[s];
  return i || ((i = new Intl.RelativeTimeFormat(t, e)), (ge[s] = i)), i;
}
let ve = null;
function pe() {
  return (ve = ve || new Intl.DateTimeFormat().resolvedOptions().locale);
}
function Te(t) {
  var r = t.indexOf("-u-");
  if (-1 === r) return [t];
  {
    let e;
    r = t.substring(0, r);
    try {
      e = me(t).resolvedOptions();
    } catch (t) {
      e = me(r).resolvedOptions();
    }
    var { numberingSystem: t, calendar: n } = e;
    return [r, t, n];
  }
}
function Se(t, e, r) {
  return (
    (r || e) && ((t += "-u"), r && (t += "-ca-" + r), e && (t += "-nu-" + e)), t
  );
}
function Oe(e) {
  const r = [];
  for (let t = 1; t <= 12; t++) {
    var n = L.utc(2016, t, 1);
    r.push(e(n));
  }
  return r;
}
function be(e) {
  const r = [];
  for (let t = 1; t <= 7; t++) {
    var n = L.utc(2016, 11, 13 + t);
    r.push(e(n));
  }
  return r;
}
function ke(t, e, r, n, s) {
  t = t.listingMode(r);
  return "error" === t ? null : ("en" === t ? n : s)(e);
}
function Me(t) {
  return (
    (!t.numberingSystem || "latn" === t.numberingSystem) &&
    ("latn" === t.numberingSystem ||
      !t.locale ||
      t.locale.startsWith("en") ||
      "latn" ===
        new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem)
  );
}
class Ne {
  constructor(t, e, r) {
    (this.padTo = r.padTo || 0), (this.floor = r.floor || !1);
    const { padTo: n, floor: s, ...i } = r;
    if (!e || 0 < Object.keys(i).length) {
      const a = { useGrouping: !1, ...r };
      0 < r.padTo && (a.minimumIntegerDigits = r.padTo), (this.inf = ye(t, a));
    }
  }
  format(t) {
    var e;
    return this.inf
      ? ((e = this.floor ? Math.floor(t) : t), this.inf.format(e))
      : l(this.floor ? Math.floor(t) : yt(t, 3), this.padTo);
  }
}
class De {
  constructor(t, e, r) {
    this.opts = r;
    let n;
    var s;
    t.zone.isUniversal
      ? ((s = 0 <= (s = (t.offset / 60) * -1) ? "Etc/GMT+" + s : "Etc/GMT" + s),
        0 !== t.offset && w.create(s).valid
          ? ((n = s), (this.dt = t))
          : ((n = "UTC"),
            r.timeZoneName
              ? (this.dt = t)
              : (this.dt =
                  0 === t.offset
                    ? t
                    : L.fromMillis(t.ts + 60 * t.offset * 1e3))))
      : "system" === t.zone.type
      ? (this.dt = t)
      : ((this.dt = t), (n = t.zone.name));
    const i = { ...this.opts };
    n && (i.timeZone = n), (this.dtf = me(e, i));
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class Ee {
  constructor(t, e, r) {
    (this.opts = { style: "long", ...r }), !e && ht() && (this.rtf = we(t, r));
  }
  format(t, e) {
    return this.rtf
      ? this.rtf.format(t, e)
      : Rt(e, t, this.opts.numeric, "long" !== this.opts.style);
  }
  formatToParts(t, e) {
    return this.rtf ? this.rtf.formatToParts(t, e) : [];
  }
}
class M {
  static fromOpts(t) {
    return M.create(
      t.locale,
      t.numberingSystem,
      t.outputCalendar,
      t.defaultToEN
    );
  }
  static create(t, e, r, n = !1) {
    (t = t || k.defaultLocale),
      (n = t || (n ? "en-US" : pe())),
      (e = e || k.defaultNumberingSystem),
      (r = r || k.defaultOutputCalendar);
    return new M(n, e, r, t);
  }
  static resetCache() {
    (ve = null), (de = {}), (fe = {}), (ge = {});
  }
  static fromObject({ locale: t, numberingSystem: e, outputCalendar: r } = {}) {
    return M.create(t, e, r);
  }
  constructor(t, e, r, n) {
    var [t, s, i] = Te(t);
    (this.locale = t),
      (this.numberingSystem = e || s || null),
      (this.outputCalendar = r || i || null),
      (this.intl = Se(this.locale, this.numberingSystem, this.outputCalendar)),
      (this.weekdaysCache = { format: {}, standalone: {} }),
      (this.monthsCache = { format: {}, standalone: {} }),
      (this.meridiemCache = null),
      (this.eraCache = {}),
      (this.specifiedLocale = n),
      (this.fastNumbersCached = null);
  }
  get fastNumbers() {
    return (
      null == this.fastNumbersCached && (this.fastNumbersCached = Me(this)),
      this.fastNumbersCached
    );
  }
  listingMode() {
    var t = this.isEnglish(),
      e = !(
        (null !== this.numberingSystem && "latn" !== this.numberingSystem) ||
        (null !== this.outputCalendar && "gregory" !== this.outputCalendar)
      );
    return t && e ? "en" : "intl";
  }
  clone(t) {
    return t && 0 !== Object.getOwnPropertyNames(t).length
      ? M.create(
          t.locale || this.specifiedLocale,
          t.numberingSystem || this.numberingSystem,
          t.outputCalendar || this.outputCalendar,
          t.defaultToEN || !1
        )
      : this;
  }
  redefaultToEN(t = {}) {
    return this.clone({ ...t, defaultToEN: !0 });
  }
  redefaultToSystem(t = {}) {
    return this.clone({ ...t, defaultToEN: !1 });
  }
  months(r, n = !1, t = !0) {
    return ke(this, r, t, It, () => {
      const e = n ? { month: r, day: "numeric" } : { month: r },
        t = n ? "format" : "standalone";
      return (
        this.monthsCache[t][r] ||
          (this.monthsCache[t][r] = Oe((t) => this.extract(t, e, "month"))),
        this.monthsCache[t][r]
      );
    });
  }
  weekdays(r, n = !1, t = !0) {
    return ke(this, r, t, Lt, () => {
      const e = n
          ? { weekday: r, year: "numeric", month: "long", day: "numeric" }
          : { weekday: r },
        t = n ? "format" : "standalone";
      return (
        this.weekdaysCache[t][r] ||
          (this.weekdaysCache[t][r] = be((t) => this.extract(t, e, "weekday"))),
        this.weekdaysCache[t][r]
      );
    });
  }
  meridiems(t = !0) {
    return ke(
      this,
      void 0,
      t,
      () => zt,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [
            L.utc(2016, 11, 13, 9),
            L.utc(2016, 11, 13, 19),
          ].map((t) => this.extract(t, e, "dayperiod"));
        }
        return this.meridiemCache;
      }
    );
  }
  eras(t, e = !0) {
    return ke(this, t, e, _t, () => {
      const e = { era: t };
      return (
        this.eraCache[t] ||
          (this.eraCache[t] = [L.utc(-40, 1, 1), L.utc(2017, 1, 1)].map((t) =>
            this.extract(t, e, "era")
          )),
        this.eraCache[t]
      );
    });
  }
  extract(t, e, r) {
    const n = this.dtFormatter(t, e),
      s = n.formatToParts(),
      i = s.find((t) => t.type.toLowerCase() === r);
    return i ? i.value : null;
  }
  numberFormatter(t = {}) {
    return new Ne(this.intl, t.forceSimple || this.fastNumbers, t);
  }
  dtFormatter(t, e = {}) {
    return new De(t, this.intl, e);
  }
  relFormatter(t = {}) {
    return new Ee(this.intl, this.isEnglish(), t);
  }
  listFormatter(t = {}) {
    return he(this.intl, t);
  }
  isEnglish() {
    return (
      "en" === this.locale ||
      "en-us" === this.locale.toLowerCase() ||
      new Intl.DateTimeFormat(this.intl)
        .resolvedOptions()
        .locale.startsWith("en-us")
    );
  }
  equals(t) {
    return (
      this.locale === t.locale &&
      this.numberingSystem === t.numberingSystem &&
      this.outputCalendar === t.outputCalendar
    );
  }
}
function a(...t) {
  t = t.reduce((t, e) => t + e.source, "");
  return RegExp(`^${t}$`);
}
function g(...t) {
  return (i) =>
    t
      .reduce(
        ([t, e, r], n) => {
          var [n, r, s] = n(i, r);
          return [{ ...t, ...n }, r || e, s];
        },
        [{}, null, 1]
      )
      .slice(0, 2);
}
function p(t, ...e) {
  if (null != t)
    for (var [r, n] of e) {
      r = r.exec(t);
      if (r) return n(r);
    }
  return [null, null];
}
function Ve(...s) {
  return (t, e) => {
    const r = {};
    let n;
    for (n = 0; n < s.length; n++) r[s[n]] = d(t[e + n]);
    return [r, null, e + n];
  };
}
var e = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
  s = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
  xe = RegExp(s.source + `(?:${e.source}?(?:\\[(${n.source})\\])?)?`),
  Ie = RegExp(`(?:T${xe.source})?`),
  Ce = Ve("weekYear", "weekNumber", "weekDay"),
  Fe = Ve("year", "ordinal"),
  e = RegExp(s.source + ` ?(?:${e.source}|(${n.source}))?`),
  n = RegExp(`(?: ${e.source})?`);
function T(t, e, r) {
  t = t[e];
  return O(t) ? r : d(t);
}
function S(t, e) {
  return [
    {
      hours: T(t, e, 0),
      minutes: T(t, e + 1, 0),
      seconds: T(t, e + 2, 0),
      milliseconds: ft(t[e + 3]),
    },
    null,
    e + 4,
  ];
}
function Ze(t, e) {
  var r = !t[e] && !t[e + 1],
    t = bt(t[e + 1], t[e + 2]);
  return [{}, r ? null : v.instance(t), e + 3];
}
function Le(t, e) {
  return [{}, t[e] ? w.create(t[e]) : null, e + 1];
}
const ze = RegExp(`^T?${s.source}$`),
  qe =
    /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function Ae(t) {
  var [t, e, r, n, s, i, a, o, u] = t;
  const l = "-" === t[0];
  var t = o && "-" === o[0],
    c = (t, e = !1) => (void 0 !== t && (e || (t && l)) ? -t : t);
  return [
    {
      years: c(m(e)),
      months: c(m(r)),
      weeks: c(m(n)),
      days: c(m(s)),
      hours: c(m(i)),
      minutes: c(m(a)),
      seconds: c(m(o), "-0" === o),
      milliseconds: c(ft(u), t),
    },
  ];
}
const je = {
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480,
};
function _e(t, e, r, n, s, i, a) {
  const o = {
    year: 2 === e.length ? St(d(e)) : d(e),
    month: Vt.indexOf(r) + 1,
    day: d(n),
    hour: d(s),
    minute: d(i),
  };
  return (
    a && (o.second = d(a)),
    t && (o.weekday = 3 < t.length ? Ct.indexOf(t) + 1 : Ft.indexOf(t) + 1),
    o
  );
}
const Ue =
  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function $e(t) {
  var [, t, e, r, n, s, i, a, o, u, l, c] = t,
    t = _e(t, n, r, e, s, i, a);
  let h;
  return (h = o ? je[o] : u ? 0 : bt(l, c)), [t, new v(h)];
}
const He =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  We =
    /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  Re =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Je(t) {
  var [, t, e, r, n, s, i, a] = t;
  return [_e(t, n, r, e, s, i, a), v.utcInstance];
}
function Ye(t) {
  var [, t, e, r, n, s, i, a] = t;
  return [_e(t, a, e, r, n, s, i), v.utcInstance];
}
const Pe = a(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Ie),
  Ge = a(/(\d{4})-?W(\d\d)(?:-?(\d))?/, Ie),
  Be = a(/(\d{4})-?(\d{3})/, Ie),
  Qe = a(xe),
  Ke = g(
    function (t, e) {
      return [
        { year: T(t, e), month: T(t, e + 1, 1), day: T(t, e + 2, 1) },
        null,
        e + 3,
      ];
    },
    S,
    Ze,
    Le
  ),
  Xe = g(Ce, S, Ze, Le),
  tr = g(Fe, S, Ze, Le),
  er = g(S, Ze, Le);
function rr(t) {
  return p(t, [Pe, Ke], [Ge, Xe], [Be, tr], [Qe, er]);
}
function nr(t) {
  return p(
    t
      .replace(/\([^)]*\)|[\n\t]/g, " ")
      .replace(/(\s\s+)/g, " ")
      .trim(),
    [Ue, $e]
  );
}
function sr(t) {
  return p(t, [He, Je], [We, Je], [Re, Ye]);
}
function ir(t) {
  return p(t, [qe, Ae]);
}
const ar = g(S);
function or(t) {
  return p(t, [ze, ar]);
}
const ur = a(/(\d{4})-(\d\d)-(\d\d)/, n),
  lr = a(e),
  cr = g(S, Ze, Le);
function hr(t) {
  return p(t, [ur, Ke], [lr, cr]);
}
const dr = {
    weeks: {
      days: 7,
      hours: 168,
      minutes: 10080,
      seconds: 604800,
      milliseconds: 6048e5,
    },
    days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 },
    hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
    minutes: { seconds: 60, milliseconds: 6e4 },
    seconds: { milliseconds: 1e3 },
  },
  mr = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 8760,
      minutes: 525600,
      seconds: 31536e3,
      milliseconds: 31536e6,
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 2184,
      minutes: 131040,
      seconds: 7862400,
      milliseconds: 78624e5,
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 720,
      minutes: 43200,
      seconds: 2592e3,
      milliseconds: 2592e6,
    },
    ...dr,
  },
  N = 365.2425,
  fr = 30.436875,
  yr = {
    years: {
      quarters: 4,
      months: 12,
      weeks: N / 7,
      days: N,
      hours: 24 * N,
      minutes: 525949.2,
      seconds: 525949.2 * 60,
      milliseconds: 525949.2 * 60 * 1e3,
    },
    quarters: {
      months: 3,
      weeks: N / 28,
      days: N / 4,
      hours: (24 * N) / 4,
      minutes: 131487.3,
      seconds: (525949.2 * 60) / 4,
      milliseconds: 7889237999.999999,
    },
    months: {
      weeks: fr / 7,
      days: fr,
      hours: 24 * fr,
      minutes: 43829.1,
      seconds: 2629746,
      milliseconds: 2629746e3,
    },
    ...dr,
  },
  D = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
  ],
  gr = D.slice(0).reverse();
function E(t, e, r = !1) {
  r = {
    values: r ? e.values : { ...t.values, ...(e.values || {}) },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix,
  };
  return new V(r);
}
function wr(t, e, r, n, s) {
  var t = t[s][r],
    i = e[r] / t,
    a =
      !(Math.sign(i) === Math.sign(n[s])) && 0 !== n[s] && Math.abs(i) <= 1
        ? (a = i) < 0
          ? Math.floor(a)
          : Math.ceil(a)
        : Math.trunc(i);
  (n[s] += a), (e[r] -= a * t);
}
function vr(r, n) {
  gr.reduce((t, e) => (O(n[e]) ? t : (t && wr(r, n, t, n, e), e)), null);
}
class V {
  constructor(t) {
    var e = "longterm" === t.conversionAccuracy || !1;
    let r = e ? yr : mr;
    t.matrix && (r = t.matrix),
      (this.values = t.values),
      (this.loc = t.loc || M.create()),
      (this.conversionAccuracy = e ? "longterm" : "casual"),
      (this.invalid = t.invalid || null),
      (this.matrix = r),
      (this.isLuxonDuration = !0);
  }
  static fromMillis(t, e) {
    return V.fromObject({ milliseconds: t }, e);
  }
  static fromObject(t, e = {}) {
    if (null == t || "object" != typeof t)
      throw new o(
        "Duration.fromObject: argument expected to be an object, got " +
          (null === t ? "null" : typeof t)
      );
    return new V({
      values: Mt(t, V.normalizeUnit),
      loc: M.fromObject(e),
      conversionAccuracy: e.conversionAccuracy,
      matrix: e.matrix,
    });
  }
  static fromDurationLike(t) {
    if (c(t)) return V.fromMillis(t);
    if (V.isDuration(t)) return t;
    if ("object" == typeof t) return V.fromObject(t);
    throw new o(`Unknown duration argument ${t} of type ` + typeof t);
  }
  static fromISO(t, e) {
    var [r] = ir(t);
    return r
      ? V.fromObject(r, e)
      : V.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(t, e) {
    var [r] = or(t);
    return r
      ? V.fromObject(r, e)
      : V.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  static invalid(t, e = null) {
    if (!t) throw new o("need to specify a reason the Duration is invalid");
    t = t instanceof y ? t : new y(t, e);
    if (k.throwOnInvalid) throw new A(t);
    return new V({ invalid: t });
  }
  static normalizeUnit(t) {
    var e = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds",
    }[t && t.toLowerCase()];
    if (e) return e;
    throw new _(t);
  }
  static isDuration(t) {
    return (t && t.isLuxonDuration) || !1;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(t, e = {}) {
    e = { ...e, floor: !1 !== e.round && !1 !== e.floor };
    return this.isValid
      ? f.create(this.loc, e).formatDurationFromString(this, t)
      : "Invalid Duration";
  }
  toHuman(r = {}) {
    var t = D.map((t) => {
      var e = this.values[t];
      return O(e)
        ? null
        : this.loc
            .numberFormatter({
              style: "unit",
              unitDisplay: "long",
              ...r,
              unit: t.slice(0, -1),
            })
            .format(e);
    }).filter((t) => t);
    return this.loc
      .listFormatter({
        type: "conjunction",
        style: r.listStyle || "narrow",
        ...r,
      })
      .format(t);
  }
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  toISO() {
    if (!this.isValid) return null;
    let t = "P";
    return (
      0 !== this.years && (t += this.years + "Y"),
      (0 === this.months && 0 === this.quarters) ||
        (t += this.months + 3 * this.quarters + "M"),
      0 !== this.weeks && (t += this.weeks + "W"),
      0 !== this.days && (t += this.days + "D"),
      (0 === this.hours &&
        0 === this.minutes &&
        0 === this.seconds &&
        0 === this.milliseconds) ||
        (t += "T"),
      0 !== this.hours && (t += this.hours + "H"),
      0 !== this.minutes && (t += this.minutes + "M"),
      (0 === this.seconds && 0 === this.milliseconds) ||
        (t += yt(this.seconds + this.milliseconds / 1e3, 3) + "S"),
      "P" === t && (t += "T0S"),
      t
    );
  }
  toISOTime(t = {}) {
    if (!this.isValid) return null;
    var e = this.toMillis();
    if (e < 0 || 864e5 <= e) return null;
    t = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...t,
    };
    const r = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let n = "basic" === t.format ? "hhmm" : "hh:mm",
      s =
        ((t.suppressSeconds && 0 === r.seconds && 0 === r.milliseconds) ||
          ((n += "basic" === t.format ? "ss" : ":ss"),
          (t.suppressMilliseconds && 0 === r.milliseconds) || (n += ".SSS")),
        r.toFormat(n));
    return (s = t.includePrefix ? "T" + s : s);
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as("milliseconds");
  }
  valueOf() {
    return this.toMillis();
  }
  plus(t) {
    if (!this.isValid) return this;
    const e = V.fromDurationLike(t),
      r = {};
    for (const n of D)
      (h(e.values, n) || h(this.values, n)) && (r[n] = e.get(n) + this.get(n));
    return E(this, { values: r }, !0);
  }
  minus(t) {
    if (!this.isValid) return this;
    const e = V.fromDurationLike(t);
    return this.plus(e.negate());
  }
  mapUnits(t) {
    if (!this.isValid) return this;
    const e = {};
    for (const r of Object.keys(this.values)) e[r] = kt(t(this.values[r], r));
    return E(this, { values: e }, !0);
  }
  get(t) {
    return this[V.normalizeUnit(t)];
  }
  set(t) {
    return this.isValid
      ? E(this, { values: { ...this.values, ...Mt(t, V.normalizeUnit) } })
      : this;
  }
  reconfigure({
    locale: t,
    numberingSystem: e,
    conversionAccuracy: r,
    matrix: n,
  } = {}) {
    t = this.loc.clone({ locale: t, numberingSystem: e });
    return E(this, { loc: t, matrix: n, conversionAccuracy: r });
  }
  as(t) {
    return this.isValid ? this.shiftTo(t).get(t) : NaN;
  }
  normalize() {
    if (!this.isValid) return this;
    var t = this.toObject();
    return vr(this.matrix, t), E(this, { values: t }, !0);
  }
  shiftTo(...t) {
    if (!this.isValid) return this;
    if (0 === t.length) return this;
    t = t.map((t) => V.normalizeUnit(t));
    const e = {},
      r = {},
      n = this.toObject();
    let s;
    for (const a of D)
      if (0 <= t.indexOf(a)) {
        s = a;
        let t = 0;
        for (const o in r) (t += this.matrix[o][a] * r[o]), (r[o] = 0);
        c(n[a]) && (t += n[a]);
        var i = Math.trunc(t);
        (e[a] = i), (r[a] = (1e3 * t - 1e3 * i) / 1e3);
        for (const u in n)
          D.indexOf(u) > D.indexOf(a) && wr(this.matrix, n, u, e, a);
      } else c(n[a]) && (r[a] = n[a]);
    for (const l in r)
      0 !== r[l] && (e[s] += l === s ? r[l] : r[l] / this.matrix[s][l]);
    return E(this, { values: e }, !0).normalize();
  }
  negate() {
    if (!this.isValid) return this;
    const t = {};
    for (const e of Object.keys(this.values))
      t[e] = 0 === this.values[e] ? 0 : -this.values[e];
    return E(this, { values: t }, !0);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return null === this.invalid;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(t) {
    if (!this.isValid || !t.isValid) return !1;
    if (!this.loc.equals(t.loc)) return !1;
    for (const n of D)
      if (
        ((e = this.values[n]),
        (r = t.values[n]),
        !(void 0 === e || 0 === e ? void 0 === r || 0 === r : e === r))
      )
        return !1;
    var e, r;
    return !0;
  }
}
const pr = "Invalid Interval";
function Tr(t, e) {
  return t && t.isValid
    ? e && e.isValid
      ? e < t
        ? x.invalid(
            "end before start",
            `The end of an interval must be after its start, but you had start=${t.toISO()} and end=` +
              e.toISO()
          )
        : null
      : x.invalid("missing or invalid end")
    : x.invalid("missing or invalid start");
}
class x {
  constructor(t) {
    (this.s = t.start),
      (this.e = t.end),
      (this.invalid = t.invalid || null),
      (this.isLuxonInterval = !0);
  }
  static invalid(t, e = null) {
    if (!t) throw new o("need to specify a reason the Interval is invalid");
    t = t instanceof y ? t : new y(t, e);
    if (k.throwOnInvalid) throw new q(t);
    return new x({ invalid: t });
  }
  static fromDateTimes(t, e) {
    var t = On(t),
      e = On(e),
      r = Tr(t, e);
    return null == r ? new x({ start: t, end: e }) : r;
  }
  static after(t, e) {
    const r = V.fromDurationLike(e),
      n = On(t);
    return x.fromDateTimes(n, n.plus(r));
  }
  static before(t, e) {
    const r = V.fromDurationLike(e),
      n = On(t);
    return x.fromDateTimes(n.minus(r), n);
  }
  static fromISO(t, s) {
    var [i, a] = (t || "").split("/", 2);
    if (i && a) {
      let t, e;
      try {
        (t = L.fromISO(i, s)), (e = t.isValid);
      } catch (a) {
        e = !1;
      }
      let r, n;
      try {
        (r = L.fromISO(a, s)), (n = r.isValid);
      } catch (a) {
        n = !1;
      }
      if (e && n) return x.fromDateTimes(t, r);
      if (e) {
        var o = V.fromISO(a, s);
        if (o.isValid) return x.after(t, o);
      } else if (n) {
        o = V.fromISO(i, s);
        if (o.isValid) return x.before(r, o);
      }
    }
    return x.invalid(
      "unparsable",
      `the input "${t}" can't be parsed as ISO 8601`
    );
  }
  static isInterval(t) {
    return (t && t.isLuxonInterval) || !1;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return null === this.invalidReason;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(t = "milliseconds") {
    return this.isValid ? this.toDuration(t).get(t) : NaN;
  }
  count(t = "milliseconds") {
    if (!this.isValid) return NaN;
    const e = this.start.startOf(t),
      r = this.end.startOf(t);
    return Math.floor(r.diff(e, t).get(t)) + 1;
  }
  hasSame(t) {
    return (
      !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, t))
    );
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(t) {
    return !!this.isValid && this.s > t;
  }
  isBefore(t) {
    return !!this.isValid && this.e <= t;
  }
  contains(t) {
    return !!this.isValid && this.s <= t && this.e > t;
  }
  set({ start: t, end: e } = {}) {
    return this.isValid ? x.fromDateTimes(t || this.s, e || this.e) : this;
  }
  splitAt(...t) {
    if (!this.isValid) return [];
    const e = t
        .map(On)
        .filter((t) => this.contains(t))
        .sort(),
      r = [];
    let n = this["s"],
      s = 0;
    for (; n < this.e; ) {
      var i = e[s] || this.e,
        i = +i > +this.e ? this.e : i;
      r.push(x.fromDateTimes(n, i)), (n = i), (s += 1);
    }
    return r;
  }
  splitBy(t) {
    const e = V.fromDurationLike(t);
    if (!this.isValid || !e.isValid || 0 === e.as("milliseconds")) return [];
    let r = this["s"],
      n = 1,
      s;
    const i = [];
    for (; r < this.e; ) {
      var a = this.start.plus(e.mapUnits((t) => t * n));
      (s = +a > +this.e ? this.e : a),
        i.push(x.fromDateTimes(r, s)),
        (r = s),
        (n += 1);
    }
    return i;
  }
  divideEqually(t) {
    return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
  }
  overlaps(t) {
    return this.e > t.s && this.s < t.e;
  }
  abutsStart(t) {
    return !!this.isValid && +this.e == +t.s;
  }
  abutsEnd(t) {
    return !!this.isValid && +t.e == +this.s;
  }
  engulfs(t) {
    return !!this.isValid && this.s <= t.s && this.e >= t.e;
  }
  equals(t) {
    return (
      !(!this.isValid || !t.isValid) && this.s.equals(t.s) && this.e.equals(t.e)
    );
  }
  intersection(t) {
    if (!this.isValid) return this;
    var e = (this.s > t.s ? this : t).s,
      t = (this.e < t.e ? this : t).e;
    return t <= e ? null : x.fromDateTimes(e, t);
  }
  union(t) {
    if (!this.isValid) return this;
    var e = (this.s < t.s ? this : t).s,
      t = (this.e > t.e ? this : t).e;
    return x.fromDateTimes(e, t);
  }
  static merge(t) {
    const [e, r] = t
      .sort((t, e) => t.s - e.s)
      .reduce(
        ([t, e], r) =>
          e
            ? e.overlaps(r) || e.abutsStart(r)
              ? [t, e.union(r)]
              : [t.concat([e]), r]
            : [t, r],
        [[], null]
      );
    return r && e.push(r), e;
  }
  static xor(t) {
    let e = null,
      r = 0;
    const n = [],
      s = t.map((t) => [
        { time: t.s, type: "s" },
        { time: t.e, type: "e" },
      ]),
      i = Array.prototype.concat(...s),
      a = i.sort((t, e) => t.time - e.time);
    for (const o of a)
      (r += "s" === o.type ? 1 : -1),
        (e =
          1 === r
            ? o.time
            : (e && +e != +o.time && n.push(x.fromDateTimes(e, o.time)), null));
    return x.merge(n);
  }
  difference(...t) {
    return x
      .xor([this].concat(t))
      .map((t) => this.intersection(t))
      .filter((t) => t && !t.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : pr;
  }
  toISO(t) {
    return this.isValid ? this.s.toISO(t) + "/" + this.e.toISO(t) : pr;
  }
  toISODate() {
    return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : pr;
  }
  toISOTime(t) {
    return this.isValid ? this.s.toISOTime(t) + "/" + this.e.toISOTime(t) : pr;
  }
  toFormat(t, { separator: e = " – " } = {}) {
    return this.isValid ? "" + this.s.toFormat(t) + e + this.e.toFormat(t) : pr;
  }
  toDuration(t, e) {
    return this.isValid
      ? this.e.diff(this.s, t, e)
      : V.invalid(this.invalidReason);
  }
  mapEndpoints(t) {
    return x.fromDateTimes(t(this.s), t(this.e));
  }
}
class Sr {
  static hasDST(t = k.defaultZone) {
    const e = L.now().setZone(t).set({ month: 12 });
    return !t.isUniversal && e.offset !== e.set({ month: 6 }).offset;
  }
  static isValidIANAZone(t) {
    return w.isValidZone(t);
  }
  static normalizeZone(t) {
    return b(t, k.defaultZone);
  }
  static months(
    t = "long",
    {
      locale: e = null,
      numberingSystem: r = null,
      locObj: n = null,
      outputCalendar: s = "gregory",
    } = {}
  ) {
    return (n || M.create(e, r, s)).months(t);
  }
  static monthsFormat(
    t = "long",
    {
      locale: e = null,
      numberingSystem: r = null,
      locObj: n = null,
      outputCalendar: s = "gregory",
    } = {}
  ) {
    return (n || M.create(e, r, s)).months(t, !0);
  }
  static weekdays(
    t = "long",
    { locale: e = null, numberingSystem: r = null, locObj: n = null } = {}
  ) {
    return (n || M.create(e, r, null)).weekdays(t);
  }
  static weekdaysFormat(
    t = "long",
    { locale: e = null, numberingSystem: r = null, locObj: n = null } = {}
  ) {
    return (n || M.create(e, r, null)).weekdays(t, !0);
  }
  static meridiems({ locale: t = null } = {}) {
    return M.create(t).meridiems();
  }
  static eras(t = "short", { locale: e = null } = {}) {
    return M.create(e, null, "gregory").eras(t);
  }
  static features() {
    return { relative: ht() };
  }
}
function Or(t, e) {
  var r = (t) => t.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(),
    e = r(e) - r(t);
  return Math.floor(V.fromMillis(e).as("days"));
}
function br(t, e, r, n) {
  let [s, i, a, o] = (function (e, r, t) {
    var n, s;
    const i = {};
    let a, o;
    for ([n, s] of [
      ["years", (t, e) => e.year - t.year],
      ["quarters", (t, e) => e.quarter - t.quarter + 4 * (e.year - t.year)],
      ["months", (t, e) => e.month - t.month + 12 * (e.year - t.year)],
      [
        "weeks",
        (t, e) => {
          t = Or(t, e);
          return (t - (t % 7)) / 7;
        },
      ],
      ["days", Or],
    ])
      if (0 <= t.indexOf(n)) {
        a = n;
        let t = s(e, r);
        (o = e.plus({ [n]: t })) > r
          ? ((e = e.plus({ [n]: t - 1 })), --t)
          : (e = o),
          (i[n] = t);
      }
    return [e, i, o, a];
  })(t, e, r);
  (t = e - s),
    (r = r.filter(
      (t) => 0 <= ["hours", "minutes", "seconds", "milliseconds"].indexOf(t)
    )),
    0 === r.length &&
      (a = a < e ? s.plus({ [o]: 1 }) : a) !== s &&
      (i[o] = (i[o] || 0) + t / (a - s)),
    (e = V.fromObject(i, n));
  return 0 < r.length
    ? V.fromMillis(t, n)
        .shiftTo(...r)
        .plus(e)
    : e;
}
const kr = {
    arab: "[٠-٩]",
    arabext: "[۰-۹]",
    bali: "[᭐-᭙]",
    beng: "[০-৯]",
    deva: "[०-९]",
    fullwide: "[０-９]",
    gujr: "[૦-૯]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[០-៩]",
    knda: "[೦-೯]",
    laoo: "[໐-໙]",
    limb: "[᥆-᥏]",
    mlym: "[൦-൯]",
    mong: "[᠐-᠙]",
    mymr: "[၀-၉]",
    orya: "[୦-୯]",
    tamldec: "[௦-௯]",
    telu: "[౦-౯]",
    thai: "[๐-๙]",
    tibt: "[༠-༩]",
    latn: "\\d",
  },
  Mr = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881],
  },
  Nr = kr.hanidec.replace(/[\[|\]]/g, "").split("");
function I({ numberingSystem: t }, e = "") {
  return new RegExp("" + kr[t || "latn"] + e);
}
const Dr = "missing Intl.DateTimeFormat.formatToParts support";
function C(t, e = (t) => t) {
  return {
    regex: t,
    deser: ([t]) =>
      e(
        (function (e) {
          let r = parseInt(e, 10);
          if (isNaN(r)) {
            r = "";
            for (let t = 0; t < e.length; t++) {
              var n = e.charCodeAt(t);
              if (-1 !== e[t].search(kr.hanidec)) r += Nr.indexOf(e[t]);
              else
                for (const a in Mr) {
                  var [s, i] = Mr[a];
                  s <= n && n <= i && (r += n - s);
                }
            }
            return parseInt(r, 10);
          }
          return r;
        })(t)
      ),
  };
}
const Er = `[ ${String.fromCharCode(160)}]`,
  Vr = new RegExp(Er, "g");
function xr(t) {
  return t.replace(/\./g, "\\.?").replace(Vr, Er);
}
function Ir(t) {
  return t.replace(/\./g, "").replace(Vr, " ").toLowerCase();
}
function F(t, r) {
  return null === t
    ? null
    : {
        regex: RegExp(t.map(xr).join("|")),
        deser: ([e]) => t.findIndex((t) => Ir(e) === Ir(t)) + r,
      };
}
function Cr(t, e) {
  return { regex: t, deser: ([, t, e]) => bt(t, e), groups: e };
}
function Fr(t) {
  return { regex: t, deser: ([t]) => t };
}
const Zr = {
  year: { "2-digit": "yy", numeric: "yyyyy" },
  month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" },
  day: { numeric: "d", "2-digit": "dd" },
  weekday: { short: "EEE", long: "EEEE" },
  dayperiod: "a",
  dayPeriod: "a",
  hour: { numeric: "h", "2-digit": "hh" },
  minute: { numeric: "m", "2-digit": "mm" },
  second: { numeric: "s", "2-digit": "ss" },
  timeZoneName: { long: "ZZZZZ", short: "ZZZ" },
};
let Lr = null;
function zr(t, n) {
  return Array.prototype.concat(
    ...t.map((t) => {
      {
        var e = n;
        if (t.literal) return t;
        const r = jr(f.macroTokenToFormatOpts(t.val), e);
        return null == r || r.includes(void 0) ? t : r;
      }
    })
  );
}
function qr(g, t, e) {
  const r = zr(f.parseFormat(e), g),
    n = r.map((t) => {
      {
        var e = t,
          r = g;
        const n = I(r),
          s = I(r, "{2}"),
          i = I(r, "{3}"),
          a = I(r, "{4}"),
          o = I(r, "{6}"),
          u = I(r, "{1,2}"),
          l = I(r, "{1,3}"),
          c = I(r, "{1,6}"),
          h = I(r, "{1,9}"),
          d = I(r, "{2,4}"),
          m = I(r, "{4,6}"),
          f = (t) => ({
            regex: RegExp(t.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")),
            deser: ([t]) => t,
            literal: !0,
          }),
          y = ((t) => {
            if (e.literal) return f(t);
            switch (t.val) {
              case "G":
                return F(r.eras("short", !1), 0);
              case "GG":
                return F(r.eras("long", !1), 0);
              case "y":
                return C(c);
              case "yy":
                return C(d, St);
              case "yyyy":
                return C(a);
              case "yyyyy":
                return C(m);
              case "yyyyyy":
                return C(o);
              case "M":
                return C(u);
              case "MM":
                return C(s);
              case "MMM":
                return F(r.months("short", !0, !1), 1);
              case "MMMM":
                return F(r.months("long", !0, !1), 1);
              case "L":
                return C(u);
              case "LL":
                return C(s);
              case "LLL":
                return F(r.months("short", !1, !1), 1);
              case "LLLL":
                return F(r.months("long", !1, !1), 1);
              case "d":
                return C(u);
              case "dd":
                return C(s);
              case "o":
                return C(l);
              case "ooo":
                return C(i);
              case "HH":
                return C(s);
              case "H":
                return C(u);
              case "hh":
                return C(s);
              case "h":
                return C(u);
              case "mm":
                return C(s);
              case "m":
              case "q":
                return C(u);
              case "qq":
                return C(s);
              case "s":
                return C(u);
              case "ss":
                return C(s);
              case "S":
                return C(l);
              case "SSS":
                return C(i);
              case "u":
                return Fr(h);
              case "uu":
                return Fr(u);
              case "uuu":
                return C(n);
              case "a":
                return F(r.meridiems(), 0);
              case "kkkk":
                return C(a);
              case "kk":
                return C(d, St);
              case "W":
                return C(u);
              case "WW":
                return C(s);
              case "E":
              case "c":
                return C(n);
              case "EEE":
                return F(r.weekdays("short", !1, !1), 1);
              case "EEEE":
                return F(r.weekdays("long", !1, !1), 1);
              case "ccc":
                return F(r.weekdays("short", !0, !1), 1);
              case "cccc":
                return F(r.weekdays("long", !0, !1), 1);
              case "Z":
              case "ZZ":
                return Cr(
                  new RegExp(`([+-]${u.source})(?::(${s.source}))?`),
                  2
                );
              case "ZZZ":
                return Cr(new RegExp(`([+-]${u.source})(${s.source})?`), 2);
              case "z":
                return Fr(/[a-z_+-/]{1,256}?/i);
              default:
                return f(t);
            }
          })(e) || { invalidReason: Dr };
        return (y.token = e), y;
      }
    }),
    s = n.find((t) => t.invalidReason);
  if (s) return { input: t, tokens: r, invalidReason: s.invalidReason };
  var [e, i] = [
      `^${(e = n)
        .map((t) => t.regex)
        .reduce((t, e) => `${t}(${e.source})`, "")}$`,
      e,
    ],
    e = RegExp(e, "i"),
    [i, a] = (function (t, e, r) {
      const n = t.match(e);
      if (n) {
        const s = {};
        let t = 1;
        for (const i in r)
          if (h(r, i)) {
            const a = r[i],
              o = a.groups ? a.groups + 1 : 1;
            !a.literal &&
              a.token &&
              (s[a.token.val[0]] = a.deser(n.slice(t, t + o))),
              (t += o);
          }
        return [n, s];
      }
      return [n, {}];
    })(t, e, i),
    [o, u, l] = a
      ? (function (n) {
          let t = null,
            e;
          return (
            O(n.z) || (t = w.create(n.z)),
            O(n.Z) || ((t = t || new v(n.Z)), (e = n.Z)),
            O(n.q) || (n.M = 3 * (n.q - 1) + 1),
            O(n.h) ||
              (n.h < 12 && 1 === n.a
                ? (n.h += 12)
                : 12 === n.h && 0 === n.a && (n.h = 0)),
            0 === n.G && n.y && (n.y = -n.y),
            O(n.u) || (n.S = ft(n.u)),
            [
              Object.keys(n).reduce((t, e) => {
                var r = ((t) => {
                  switch (t) {
                    case "S":
                      return "millisecond";
                    case "s":
                      return "second";
                    case "m":
                      return "minute";
                    case "h":
                    case "H":
                      return "hour";
                    case "d":
                      return "day";
                    case "o":
                      return "ordinal";
                    case "L":
                    case "M":
                      return "month";
                    case "y":
                      return "year";
                    case "E":
                    case "c":
                      return "weekday";
                    case "W":
                      return "weekNumber";
                    case "k":
                      return "weekYear";
                    case "q":
                      return "quarter";
                    default:
                      return null;
                  }
                })(e);
                return r && (t[r] = n[e]), t;
              }, {}),
              t,
              e,
            ]
          );
        })(a)
      : [null, null, void 0];
  if (h(a, "a") && h(a, "H"))
    throw new j("Can't include meridiem when specifying 24-hour format");
  return {
    input: t,
    tokens: r,
    regex: e,
    rawMatches: i,
    matches: a,
    result: o,
    zone: u,
    specificOffset: l,
  };
}
function Ar(t, e, r) {
  var { result: t, zone: e, specificOffset: r, invalidReason: n } = qr(t, e, r);
  return [t, e, r, n];
}
function jr(s, t) {
  if (!s) return null;
  const e = f.create(t, s),
    r = e.formatDateTimeParts((Lr = Lr || L.fromMillis(1555555555555)));
  return r.map((e) => {
    {
      var r = s,
        { type: e, value: n } = e;
      if ("literal" === e) return { literal: !0, val: n };
      n = r[e];
      let t = Zr[e];
      return (t = "object" == typeof t ? t[n] : t)
        ? { literal: !1, val: t }
        : void 0;
    }
  });
}
const _r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  Ur = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Z(t, e) {
  return new y(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function $r(t, e, r) {
  const n = new Date(Date.UTC(t, e - 1, r));
  t < 100 && 0 <= t && n.setUTCFullYear(n.getUTCFullYear() - 1900);
  e = n.getUTCDay();
  return 0 === e ? 7 : e;
}
function Hr(t, e, r) {
  return r + (gt(t) ? Ur : _r)[e - 1];
}
function Wr(t, e) {
  const r = gt(t) ? Ur : _r,
    n = r.findIndex((t) => t < e),
    s = e - r[n];
  return { month: n + 1, day: s };
}
function Rr(t) {
  var { year: e, month: r, day: n } = t,
    s = Hr(e, r, n),
    r = $r(e, r, n);
  let i = Math.floor((s - r + 10) / 7),
    a;
  return (
    i < 1
      ? ((a = e - 1), (i = Tt(a)))
      : i > Tt(e)
      ? ((a = e + 1), (i = 1))
      : (a = e),
    { weekYear: a, weekNumber: i, weekday: r, ...Dt(t) }
  );
}
function Jr(t) {
  var { weekYear: e, weekNumber: r, weekday: n } = t,
    s = $r(e, 1, 4),
    i = wt(e);
  let a = 7 * r + n - s - 3,
    o;
  a < 1
    ? ((o = e - 1), (a += wt(o)))
    : a > i
    ? ((o = e + 1), (a -= wt(e)))
    : (o = e);
  var { month: r, day: n } = Wr(o, a);
  return { year: o, month: r, day: n, ...Dt(t) };
}
function Yr(t) {
  var { year: e, month: r, day: n } = t;
  return { year: e, ordinal: Hr(e, r, n), ...Dt(t) };
}
function Pr(t) {
  var { year: e, ordinal: r } = t,
    { month: r, day: n } = Wr(e, r);
  return { year: e, month: r, day: n, ...Dt(t) };
}
function Gr(t) {
  var e = lt(t.weekYear),
    r = u(t.weekNumber, 1, Tt(t.weekYear)),
    n = u(t.weekday, 1, 7);
  return e
    ? r
      ? !n && Z("weekday", t.weekday)
      : Z("week", t.week)
    : Z("weekYear", t.weekYear);
}
function Br(t) {
  var e = lt(t.year),
    r = u(t.ordinal, 1, wt(t.year));
  return e ? !r && Z("ordinal", t.ordinal) : Z("year", t.year);
}
function Qr(t) {
  var e = lt(t.year),
    r = u(t.month, 1, 12),
    n = u(t.day, 1, vt(t.year, t.month));
  return e
    ? r
      ? !n && Z("day", t.day)
      : Z("month", t.month)
    : Z("year", t.year);
}
function Kr(t) {
  var { hour: t, minute: e, second: r, millisecond: n } = t,
    s = u(t, 0, 23) || (24 === t && 0 === e && 0 === r && 0 === n),
    i = u(e, 0, 59),
    a = u(r, 0, 59),
    o = u(n, 0, 999);
  return s
    ? i
      ? a
        ? !o && Z("millisecond", n)
        : Z("second", r)
      : Z("minute", e)
    : Z("hour", t);
}
const Xr = "Invalid DateTime";
function tn(t) {
  return new y("unsupported zone", `the zone "${t.name}" is not supported`);
}
function en(t) {
  return null === t.weekData && (t.weekData = Rr(t.c)), t.weekData;
}
function rn(t, e) {
  t = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid,
  };
  return new L({ ...t, ...e, old: t });
}
function nn(t, e, r) {
  let n = t - 60 * e * 1e3;
  var s = r.offset(n);
  if (e === s) return [n, e];
  n -= 60 * (s - e) * 1e3;
  e = r.offset(n);
  return s === e ? [n, s] : [t - 60 * Math.min(s, e) * 1e3, Math.max(s, e)];
}
function sn(t, e) {
  t += 60 * e * 1e3;
  const r = new Date(t);
  return {
    year: r.getUTCFullYear(),
    month: r.getUTCMonth() + 1,
    day: r.getUTCDate(),
    hour: r.getUTCHours(),
    minute: r.getUTCMinutes(),
    second: r.getUTCSeconds(),
    millisecond: r.getUTCMilliseconds(),
  };
}
function an(t, e, r) {
  return nn(pt(t), e, r);
}
function on(t, e) {
  var r = t.o,
    n = t.c.year + Math.trunc(e.years),
    s = t.c.month + Math.trunc(e.months) + 3 * Math.trunc(e.quarters),
    n = {
      ...t.c,
      year: n,
      month: s,
      day:
        Math.min(t.c.day, vt(n, s)) +
        Math.trunc(e.days) +
        7 * Math.trunc(e.weeks),
    },
    s = V.fromObject({
      years: e.years - Math.trunc(e.years),
      quarters: e.quarters - Math.trunc(e.quarters),
      months: e.months - Math.trunc(e.months),
      weeks: e.weeks - Math.trunc(e.weeks),
      days: e.days - Math.trunc(e.days),
      hours: e.hours,
      minutes: e.minutes,
      seconds: e.seconds,
      milliseconds: e.milliseconds,
    }).as("milliseconds");
  let [i, a] = nn(pt(n), r, t.zone);
  return 0 !== s && ((i += s), (a = t.zone.offset(i))), { ts: i, o: a };
}
function un(t, e, r, n, s, i) {
  var { setZone: a, zone: o } = r;
  if (t && 0 !== Object.keys(t).length) {
    const u = e || o,
      l = L.fromObject(t, { ...r, zone: u, specificOffset: i });
    return a ? l : l.setZone(o);
  }
  return L.invalid(
    new y("unparsable", `the input "${s}" can't be parsed as ` + n)
  );
}
function ln(t, e, r = !0) {
  return t.isValid
    ? f
        .create(M.create("en-US"), { allowZ: r, forceSimple: !0 })
        .formatDateTimeFromString(t, e)
    : null;
}
function cn(t, e) {
  var r = 9999 < t.c.year || t.c.year < 0;
  let n = "";
  return (
    r && 0 <= t.c.year && (n += "+"),
    (n += l(t.c.year, r ? 6 : 4)),
    (n = e
      ? (n = (n += "-") + l(t.c.month) + "-") + l(t.c.day)
      : (n += l(t.c.month)) + l(t.c.day))
  );
}
function hn(t, e, r, n, s, i) {
  let a = l(t.c.hour);
  return (
    e
      ? ((a = (a += ":") + l(t.c.minute)),
        (0 === t.c.second && r) || (a += ":"))
      : (a += l(t.c.minute)),
    (0 === t.c.second && r) ||
      ((a += l(t.c.second)),
      (0 === t.c.millisecond && n) || (a = (a += ".") + l(t.c.millisecond, 3))),
    s &&
      (t.isOffsetFixed && 0 === t.offset && !i
        ? (a += "Z")
        : (a =
            t.o < 0
              ? (a = (a += "-") + l(Math.trunc(-t.o / 60)) + ":") +
                l(Math.trunc(-t.o % 60))
              : (a = (a += "+") + l(Math.trunc(t.o / 60)) + ":") +
                l(Math.trunc(t.o % 60)))),
    i && (a += "[" + t.zone.ianaName + "]"),
    a
  );
}
const dn = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  mn = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  fn = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  yn = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  gn = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  wn = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function vn(t) {
  var e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal",
  }[t.toLowerCase()];
  if (e) return e;
  throw new _(t);
}
function pn(t, e) {
  const r = b(e.zone, k.defaultZone),
    n = M.fromObject(e),
    s = k.now();
  let i, a;
  if (O(t.year)) i = s;
  else {
    for (const o of yn) O(t[o]) && (t[o] = dn[o]);
    e = Qr(t) || Kr(t);
    if (e) return L.invalid(e);
    e = r.offset(s);
    [i, a] = an(t, e, r);
  }
  return new L({ ts: i, zone: r, loc: n, o: a });
}
function Tn(e, n, s) {
  const i = !!O(s.round) || s.round,
    t = (t, e) => {
      t = yt(t, i || s.calendary ? 0 : 2, !0);
      const r = n.loc.clone(s).relFormatter(s);
      return r.format(t, e);
    },
    r = (t) =>
      s.calendary
        ? n.hasSame(e, t)
          ? 0
          : n.startOf(t).diff(e.startOf(t), t).get(t)
        : n.diff(e, t).get(t);
  if (s.unit) return t(r(s.unit), s.unit);
  for (const o of s.units) {
    var a = r(o);
    if (1 <= Math.abs(a)) return t(a, o);
  }
  return t(n < e ? -0 : 0, s.units[s.units.length - 1]);
}
function Sn(t) {
  let e = {},
    r;
  return (
    (r =
      0 < t.length && "object" == typeof t[t.length - 1]
        ? ((e = t[t.length - 1]), Array.from(t).slice(0, t.length - 1))
        : Array.from(t)),
    [e, r]
  );
}
class L {
  constructor(t) {
    const e = t.zone || k.defaultZone;
    let r =
        t.invalid ||
        (Number.isNaN(t.ts) ? new y("invalid input") : null) ||
        (e.isValid ? null : tn(e)),
      n = ((this.ts = O(t.ts) ? k.now() : t.ts), null),
      s = null;
    var i;
    r ||
      (t.old && t.old.ts === this.ts && t.old.zone.equals(e)
        ? ([n, s] = [t.old.c, t.old.o])
        : ((i = e.offset(this.ts)),
          (n = sn(this.ts, i)),
          (r = Number.isNaN(n.year) ? new y("invalid input") : null),
          (n = r ? null : n),
          (s = r ? null : i))),
      (this._zone = e),
      (this.loc = t.loc || M.create()),
      (this.invalid = r),
      (this.weekData = null),
      (this.c = n),
      (this.o = s),
      (this.isLuxonDateTime = !0);
  }
  static now() {
    return new L({});
  }
  static local() {
    var [t, e] = Sn(arguments),
      [e, r, n, s, i, a, o] = e;
    return pn(
      {
        year: e,
        month: r,
        day: n,
        hour: s,
        minute: i,
        second: a,
        millisecond: o,
      },
      t
    );
  }
  static utc() {
    const [t, e] = Sn(arguments),
      [r, n, s, i, a, o, u] = e;
    return (
      (t.zone = v.utcInstance),
      pn(
        {
          year: r,
          month: n,
          day: s,
          hour: i,
          minute: a,
          second: o,
          millisecond: u,
        },
        t
      )
    );
  }
  static fromJSDate(t, e = {}) {
    t = ct(t) ? t.valueOf() : NaN;
    if (Number.isNaN(t)) return L.invalid("invalid input");
    var r = b(e.zone, k.defaultZone);
    return r.isValid
      ? new L({ ts: t, zone: r, loc: M.fromObject(e) })
      : L.invalid(tn(r));
  }
  static fromMillis(t, e = {}) {
    if (c(t))
      return t < -864e13 || 864e13 < t
        ? L.invalid("Timestamp out of range")
        : new L({
            ts: t,
            zone: b(e.zone, k.defaultZone),
            loc: M.fromObject(e),
          });
    throw new o(
      `fromMillis requires a numerical input, but received a ${typeof t} with value ` +
        t
    );
  }
  static fromSeconds(t, e = {}) {
    if (c(t))
      return new L({
        ts: 1e3 * t,
        zone: b(e.zone, k.defaultZone),
        loc: M.fromObject(e),
      });
    throw new o("fromSeconds requires a numerical input");
  }
  static fromObject(t, e = {}) {
    t = t || {};
    const r = b(e.zone, k.defaultZone);
    if (!r.isValid) return L.invalid(tn(r));
    const n = k.now(),
      s = O(e.specificOffset) ? r.offset(n) : e.specificOffset,
      i = Mt(t, vn),
      a = !O(i.ordinal),
      o = !O(i.year),
      u = !O(i.month) || !O(i.day),
      l = o || u,
      c = i.weekYear || i.weekNumber,
      h = M.fromObject(e);
    if ((l || a) && c)
      throw new j(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (u && a) throw new j("Can't mix ordinal dates with month/day");
    e = c || (i.weekday && !l);
    let d,
      m,
      f = sn(n, s),
      y =
        (e
          ? ((d = gn), (m = mn), (f = Rr(f)))
          : a
          ? ((d = wn), (m = fn), (f = Yr(f)))
          : ((d = yn), (m = dn)),
        !1);
    for (const S of d) O(i[S]) ? (y ? (i[S] = m[S]) : (i[S] = f[S])) : (y = !0);
    var g = (e ? Gr : a ? Br : Qr)(i) || Kr(i);
    if (g) return L.invalid(g);
    const w = e ? Jr(i) : a ? Pr(i) : i,
      [v, p] = an(w, s, r),
      T = new L({ ts: v, zone: r, o: p, loc: h });
    return i.weekday && l && t.weekday !== T.weekday
      ? L.invalid(
          "mismatched weekday",
          `you can't specify both a weekday of ${i.weekday} and a date of ` +
            T.toISO()
        )
      : T;
  }
  static fromISO(t, e = {}) {
    var [r, n] = rr(t);
    return un(r, n, e, "ISO 8601", t);
  }
  static fromRFC2822(t, e = {}) {
    var [r, n] = nr(t);
    return un(r, n, e, "RFC 2822", t);
  }
  static fromHTTP(t, e = {}) {
    var [t, r] = sr(t);
    return un(t, r, e, "HTTP", e);
  }
  static fromFormat(t, e, r = {}) {
    if (O(t) || O(e))
      throw new o("fromFormat requires an input string and a format");
    var { locale: n = null, numberingSystem: s = null } = r,
      [n, s, i, a] = Ar(
        M.fromOpts({ locale: n, numberingSystem: s, defaultToEN: !0 }),
        t,
        e
      );
    return a ? L.invalid(a) : un(n, s, r, "format " + e, t, i);
  }
  static fromString(t, e, r = {}) {
    return L.fromFormat(t, e, r);
  }
  static fromSQL(t, e = {}) {
    var [r, n] = hr(t);
    return un(r, n, e, "SQL", t);
  }
  static invalid(t, e = null) {
    if (!t) throw new o("need to specify a reason the DateTime is invalid");
    t = t instanceof y ? t : new y(t, e);
    if (k.throwOnInvalid) throw new z(t);
    return new L({ invalid: t });
  }
  static isDateTime(t) {
    return (t && t.isLuxonDateTime) || !1;
  }
  static parseFormatForOpts(t, e = {}) {
    const r = jr(t, M.fromObject(e));
    return r ? r.map((t) => (t ? t.val : null)).join("") : null;
  }
  static expandFormat(t, e = {}) {
    const r = zr(f.parseFormat(t), M.fromObject(e));
    return r.map((t) => t.val).join("");
  }
  get(t) {
    return this[t];
  }
  get isValid() {
    return null === this.invalid;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? en(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? en(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? en(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? Yr(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid
      ? Sr.months("short", { locObj: this.loc })[this.month - 1]
      : null;
  }
  get monthLong() {
    return this.isValid
      ? Sr.months("long", { locObj: this.loc })[this.month - 1]
      : null;
  }
  get weekdayShort() {
    return this.isValid
      ? Sr.weekdays("short", { locObj: this.loc })[this.weekday - 1]
      : null;
  }
  get weekdayLong() {
    return this.isValid
      ? Sr.weekdays("long", { locObj: this.loc })[this.weekday - 1]
      : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: "short", locale: this.locale })
      : null;
  }
  get offsetNameLong() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: "long", locale: this.locale })
      : null;
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    return (
      !this.isOffsetFixed &&
      (this.offset > this.set({ month: 1, day: 1 }).offset ||
        this.offset > this.set({ month: 5 }).offset)
    );
  }
  get isInLeapYear() {
    return gt(this.year);
  }
  get daysInMonth() {
    return vt(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? wt(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? Tt(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(t = {}) {
    var {
      locale: t,
      numberingSystem: e,
      calendar: r,
    } = f.create(this.loc.clone(t), t).resolvedOptions(this);
    return { locale: t, numberingSystem: e, outputCalendar: r };
  }
  toUTC(t = 0, e = {}) {
    return this.setZone(v.instance(t), e);
  }
  toLocal() {
    return this.setZone(k.defaultZone);
  }
  setZone(e, { keepLocalTime: r = !1, keepCalendarTime: n = !1 } = {}) {
    if ((e = b(e, k.defaultZone)).equals(this.zone)) return this;
    if (e.isValid) {
      let t = this.ts;
      return (
        (r || n) &&
          ((r = e.offset(this.ts)), (n = this.toObject()), ([t] = an(n, r, e))),
        rn(this, { ts: t, zone: e })
      );
    }
    return L.invalid(tn(e));
  }
  reconfigure({ locale: t, numberingSystem: e, outputCalendar: r } = {}) {
    t = this.loc.clone({ locale: t, numberingSystem: e, outputCalendar: r });
    return rn(this, { loc: t });
  }
  setLocale(t) {
    return this.reconfigure({ locale: t });
  }
  set(t) {
    if (!this.isValid) return this;
    var t = Mt(t, vn),
      e = !O(t.weekYear) || !O(t.weekNumber) || !O(t.weekday),
      r = !O(t.ordinal),
      n = !O(t.year),
      s = !O(t.month) || !O(t.day),
      i = t.weekYear || t.weekNumber;
    if ((n || s || r) && i)
      throw new j(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (s && r) throw new j("Can't mix ordinal dates with month/day");
    let a;
    e
      ? (a = Jr({ ...Rr(this.c), ...t }))
      : O(t.ordinal)
      ? ((a = { ...this.toObject(), ...t }),
        O(t.day) && (a.day = Math.min(vt(a.year, a.month), a.day)))
      : (a = Pr({ ...Yr(this.c), ...t }));
    var [n, i] = an(a, this.o, this.zone);
    return rn(this, { ts: n, o: i });
  }
  plus(t) {
    return this.isValid ? rn(this, on(this, V.fromDurationLike(t))) : this;
  }
  minus(t) {
    return this.isValid
      ? rn(this, on(this, V.fromDurationLike(t).negate()))
      : this;
  }
  startOf(t) {
    if (!this.isValid) return this;
    const e = {},
      r = V.normalizeUnit(t);
    switch (r) {
      case "years":
        e.month = 1;
      case "quarters":
      case "months":
        e.day = 1;
      case "weeks":
      case "days":
        e.hour = 0;
      case "hours":
        e.minute = 0;
      case "minutes":
        e.second = 0;
      case "seconds":
        e.millisecond = 0;
    }
    return (
      "weeks" === r && (e.weekday = 1),
      "quarters" === r &&
        ((t = Math.ceil(this.month / 3)), (e.month = 3 * (t - 1) + 1)),
      this.set(e)
    );
  }
  endOf(t) {
    return this.isValid
      ? this.plus({ [t]: 1 })
          .startOf(t)
          .minus(1)
      : this;
  }
  toFormat(t, e = {}) {
    return this.isValid
      ? f.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this, t)
      : Xr;
  }
  toLocaleString(t = U, e = {}) {
    return this.isValid
      ? f.create(this.loc.clone(e), t).formatDateTime(this)
      : Xr;
  }
  toLocaleParts(t = {}) {
    return this.isValid
      ? f.create(this.loc.clone(t), t).formatDateTimeParts(this)
      : [];
  }
  toISO({
    format: t = "extended",
    suppressSeconds: e = !1,
    suppressMilliseconds: r = !1,
    includeOffset: n = !0,
    extendedZone: s = !1,
  } = {}) {
    if (!this.isValid) return null;
    var t = "extended" === t,
      i = cn(this, t);
    return (i += "T") + hn(this, t, e, r, n, s);
  }
  toISODate({ format: t = "extended" } = {}) {
    return this.isValid ? cn(this, "extended" === t) : null;
  }
  toISOWeekDate() {
    return ln(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: t = !1,
    suppressSeconds: e = !1,
    includeOffset: r = !0,
    includePrefix: n = !1,
    extendedZone: s = !1,
    format: i = "extended",
  } = {}) {
    return this.isValid
      ? (n ? "T" : "") + hn(this, "extended" === i, e, t, r, s)
      : null;
  }
  toRFC2822() {
    return ln(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return ln(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? cn(this, !0) : null;
  }
  toSQLTime({
    includeOffset: t = !0,
    includeZone: e = !1,
    includeOffsetSpace: r = !0,
  } = {}) {
    let n = "HH:mm:ss.SSS";
    return (
      (e || t) && (r && (n += " "), e ? (n += "z") : t && (n += "ZZ")),
      ln(this, n, !0)
    );
  }
  toSQL(t = {}) {
    return this.isValid ? this.toSQLDate() + " " + this.toSQLTime(t) : null;
  }
  toString() {
    return this.isValid ? this.toISO() : Xr;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(t = {}) {
    if (!this.isValid) return {};
    const e = { ...this.c };
    return (
      t.includeConfig &&
        ((e.outputCalendar = this.outputCalendar),
        (e.numberingSystem = this.loc.numberingSystem),
        (e.locale = this.loc.locale)),
      e
    );
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(t, e = "milliseconds", r = {}) {
    if (!this.isValid || !t.isValid)
      return V.invalid("created by diffing an invalid DateTime");
    r = { locale: this.locale, numberingSystem: this.numberingSystem, ...r };
    const n = dt(e).map(V.normalizeUnit),
      s = t.valueOf() > this.valueOf(),
      i = s ? this : t,
      a = s ? t : this,
      o = br(i, a, n, r);
    return s ? o.negate() : o;
  }
  diffNow(t = "milliseconds", e = {}) {
    return this.diff(L.now(), t, e);
  }
  until(t) {
    return this.isValid ? x.fromDateTimes(this, t) : this;
  }
  hasSame(t, e) {
    if (!this.isValid) return !1;
    var r = t.valueOf();
    const n = this.setZone(t.zone, { keepLocalTime: !0 });
    return n.startOf(e) <= r && r <= n.endOf(e);
  }
  equals(t) {
    return (
      this.isValid &&
      t.isValid &&
      this.valueOf() === t.valueOf() &&
      this.zone.equals(t.zone) &&
      this.loc.equals(t.loc)
    );
  }
  toRelative(t = {}) {
    if (!this.isValid) return null;
    var e = t.base || L.fromObject({}, { zone: this.zone }),
      r = t.padding ? (this < e ? -t.padding : t.padding) : 0;
    let n = ["years", "months", "days", "hours", "minutes", "seconds"],
      s = t.unit;
    return (
      Array.isArray(t.unit) && ((n = t.unit), (s = void 0)),
      Tn(e, this.plus(r), { ...t, numeric: "always", units: n, unit: s })
    );
  }
  toRelativeCalendar(t = {}) {
    return this.isValid
      ? Tn(t.base || L.fromObject({}, { zone: this.zone }), this, {
          ...t,
          numeric: "auto",
          units: ["years", "months", "days"],
          calendary: !0,
        })
      : null;
  }
  static min(...t) {
    if (t.every(L.isDateTime)) return mt(t, (t) => t.valueOf(), Math.min);
    throw new o("min requires all arguments be DateTimes");
  }
  static max(...t) {
    if (t.every(L.isDateTime)) return mt(t, (t) => t.valueOf(), Math.max);
    throw new o("max requires all arguments be DateTimes");
  }
  static fromFormatExplain(t, e, r = {}) {
    var { locale: r = null, numberingSystem: n = null } = r;
    return qr(
      M.fromOpts({ locale: r, numberingSystem: n, defaultToEN: !0 }),
      t,
      e
    );
  }
  static fromStringExplain(t, e, r = {}) {
    return L.fromFormatExplain(t, e, r);
  }
  static get DATE_SHORT() {
    return U;
  }
  static get DATE_MED() {
    return $;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return H;
  }
  static get DATE_FULL() {
    return W;
  }
  static get DATE_HUGE() {
    return R;
  }
  static get TIME_SIMPLE() {
    return J;
  }
  static get TIME_WITH_SECONDS() {
    return Y;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return P;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return G;
  }
  static get TIME_24_SIMPLE() {
    return B;
  }
  static get TIME_24_WITH_SECONDS() {
    return Q;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return K;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return X;
  }
  static get DATETIME_SHORT() {
    return tt;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return et;
  }
  static get DATETIME_MED() {
    return rt;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return nt;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return st;
  }
  static get DATETIME_FULL() {
    return it;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return at;
  }
  static get DATETIME_HUGE() {
    return ot;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return ut;
  }
}
function On(t) {
  if (L.isDateTime(t)) return t;
  if (t && t.valueOf && c(t.valueOf())) return L.fromJSDate(t);
  if (t && "object" == typeof t) return L.fromObject(t);
  throw new o(`Unknown datetime argument: ${t}, of type ` + typeof t);
}
s = "3.0.4";
export {
  L as DateTime,
  V as Duration,
  v as FixedOffsetZone,
  w as IANAZone,
  Sr as Info,
  x as Interval,
  ne as InvalidZone,
  k as Settings,
  Gt as SystemZone,
  s as VERSION,
  i as Zone,
};
