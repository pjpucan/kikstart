/******/ (() => { // webpackBootstrap
/*!*******************************************!*\
  !*** ./src/js/modules/collection-tabs.js ***!
  \*******************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var CollectionTabs = /*#__PURE__*/function (_HTMLElement) {
  function CollectionTabs() {
    var _this;
    _classCallCheck(this, CollectionTabs);
    _this = _callSuper(this, CollectionTabs);
    _this.init();
    return _this;
  }
  _inherits(CollectionTabs, _HTMLElement);
  return _createClass(CollectionTabs, [{
    key: "init",
    value: function init() {
      var _this$collectionTitle;
      this.tabs = this.querySelectorAll('.collection-tabs__tab');
      this.tabSelect = this.querySelector('.collection-tabs__select-input');
      this.currentCollection = null;
      this.isLoading = false;
      this.mainContent = document.getElementById('MainContent');

      // Get collection banner elements
      this.collectionBanner = document.querySelector('.collection-hero');
      this.collectionTitle = document.querySelector('.collection-hero__title');
      this.collectionDescription = document.querySelector('.collection-hero__description');
      console.log('Collection elements found:', {
        banner: !!this.collectionBanner,
        title: !!this.collectionTitle,
        description: !!this.collectionDescription,
        titleText: (_this$collectionTitle = this.collectionTitle) === null || _this$collectionTitle === void 0 ? void 0 : _this$collectionTitle.textContent
      });
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;
      if (this.tabs) {
        this.tabs.forEach(function (tab) {
          tab.addEventListener('click', function (event) {
            event.preventDefault();
            console.log('Tab clicked:', tab.dataset.collectionHandle);
            _this2.handleTabClick(event);
          });
        });
      }
      if (this.tabSelect) {
        this.tabSelect.addEventListener('change', function (event) {
          console.log('Select changed:', event.target.value);
          _this2.handleSelectChange(event);
        });
      }
      window.addEventListener('popstate', function (event) {
        if (event.state && event.state.collectionHandle) {
          _this2.switchCollection(event.state.collectionHandle, false);
        }
      });
    }
  }, {
    key: "handleTabClick",
    value: function handleTabClick(event) {
      var tab = event.currentTarget;
      var collectionHandle = tab.dataset.collectionHandle;
      console.log('Switching to collection:', collectionHandle);
      if (collectionHandle) {
        this.switchCollection(collectionHandle);
      }
    }
  }, {
    key: "handleSelectChange",
    value: function handleSelectChange(event) {
      var collectionHandle = event.target.value;
      if (collectionHandle) {
        this.switchCollection(collectionHandle);
      }
    }
  }, {
    key: "switchCollection",
    value: function () {
      var _switchCollection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(collectionHandle) {
        var pushState,
          currentUrl,
          searchParams,
          newUrl,
          collectionResponse,
          collectionData,
          response,
          html,
          parser,
          doc,
          newMainContent,
          newBanner,
          newTitle,
          newDescription,
          productGrid,
          currentGrid,
          facetedFilters,
          currentFilters,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              pushState = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
              if (!(this.isLoading || this.currentCollection === collectionHandle)) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              console.log('Starting collection switch to:', collectionHandle);
              this.isLoading = true;
              _context.prev = 5;
              this.updateActiveTab(collectionHandle);
              currentUrl = new URL(window.location.href);
              searchParams = currentUrl.search;
              if (pushState) {
                newUrl = "/collections/".concat(collectionHandle).concat(searchParams);
                window.history.pushState({
                  collectionHandle: collectionHandle
                }, '', newUrl);
              }

              // First, fetch collection data via the JSON API
              _context.next = 12;
              return fetch("/collections/".concat(collectionHandle, ".json"));
            case 12:
              collectionResponse = _context.sent;
              if (collectionResponse.ok) {
                _context.next = 15;
                break;
              }
              throw new Error('Collection fetch failed');
            case 15:
              _context.next = 17;
              return collectionResponse.json();
            case 17:
              collectionData = _context.sent;
              // Update collection title and description
              this.updateCollectionDetails(collectionData.collection);

              // Then fetch the collection page HTML for products
              _context.next = 21;
              return fetch("/collections/".concat(collectionHandle).concat(searchParams));
            case 21:
              response = _context.sent;
              if (response.ok) {
                _context.next = 24;
                break;
              }
              throw new Error('Collection page fetch failed');
            case 24:
              _context.next = 26;
              return response.text();
            case 26:
              html = _context.sent;
              parser = new DOMParser();
              doc = parser.parseFromString(html, 'text/html');
              newMainContent = doc.getElementById('MainContent');
              if (newMainContent && this.mainContent) {
                // Update collection banner
                newBanner = doc.querySelector('.collection-hero');
                if (newBanner && this.collectionBanner) {
                  // Instead of replacing the entire banner, update specific elements
                  newTitle = newBanner.querySelector('.collection-hero__title');
                  newDescription = newBanner.querySelector('.collection-hero__description');
                  if (newTitle && this.collectionTitle) {
                    this.collectionTitle.innerHTML = newTitle.innerHTML;
                  }
                  if (newDescription && this.collectionDescription) {
                    this.collectionDescription.innerHTML = newDescription.innerHTML;
                  } else if (this.collectionDescription) {
                    this.collectionDescription.style.display = 'none';
                  }
                }

                // Update product grid
                productGrid = newMainContent.querySelector('.product-grid');
                currentGrid = this.mainContent.querySelector('.product-grid');
                if (productGrid && currentGrid) {
                  currentGrid.innerHTML = productGrid.innerHTML;
                }

                // Update faceted filters
                facetedFilters = newMainContent.querySelector('.faceted-filters');
                currentFilters = this.mainContent.querySelector('.faceted-filters');
                if (facetedFilters && currentFilters) {
                  currentFilters.innerHTML = facetedFilters.innerHTML;
                }
                this.initializeComponents();
                console.log('Collection switch completed');
              }
              _context.next = 36;
              break;
            case 33:
              _context.prev = 33;
              _context.t0 = _context["catch"](5);
              console.error('Error switching collection:', _context.t0);
            case 36:
              _context.prev = 36;
              this.isLoading = false;
              this.currentCollection = collectionHandle;
              return _context.finish(36);
            case 40:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[5, 33, 36, 40]]);
      }));
      function switchCollection(_x) {
        return _switchCollection.apply(this, arguments);
      }
      return switchCollection;
    }()
  }, {
    key: "updateCollectionDetails",
    value: function updateCollectionDetails(collection) {
      console.log('Updating collection details:', collection);
      if (this.collectionTitle) {
        // Keep the visually-hidden span and update only the collection title
        var titleSpan = this.collectionTitle.querySelector('.visually-hidden');
        if (titleSpan) {
          // Remove any text nodes after the span
          var node = titleSpan.nextSibling;
          while (node) {
            var nextNode = node.nextSibling;
            node.remove();
            node = nextNode;
          }
          // Add the new title text after the span
          titleSpan.after(collection.title);
        } else {
          this.collectionTitle.textContent = collection.title;
        }
      }
      if (this.collectionDescription) {
        if (collection.description) {
          this.collectionDescription.innerHTML = collection.description;
          this.collectionDescription.style.display = '';
        } else {
          this.collectionDescription.style.display = 'none';
        }
      }

      // Update page title
      document.title = collection.title + ' – ' + window.Shopify.shop;
    }
  }, {
    key: "updateActiveTab",
    value: function updateActiveTab(collectionHandle) {
      this.tabs.forEach(function (tab) {
        var isActive = tab.dataset.collectionHandle === collectionHandle;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive);
      });
      if (this.tabSelect) {
        this.tabSelect.value = collectionHandle;
      }
    }
  }, {
    key: "initializeComponents",
    value: function initializeComponents() {
      document.dispatchEvent(new CustomEvent('collection:updated'));
      if (typeof window.initFacetedFiltering === 'function') {
        window.initFacetedFiltering();
      }
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    customElements.define('collection-tabs', CollectionTabs);
  });
} else {
  customElements.define('collection-tabs', CollectionTabs);
}
/******/ })()
;
//# sourceMappingURL=collection-tabs.js.map