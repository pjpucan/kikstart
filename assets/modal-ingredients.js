/******/ (() => { // webpackBootstrap
/*!************************************************!*\
  !*** ./src/js/components/modal-ingredients.js ***!
  \************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ModalIngredients = /*#__PURE__*/function () {
  function ModalIngredients() {
    _classCallCheck(this, ModalIngredients);
    this.init();
  }
  return _createClass(ModalIngredients, [{
    key: "init",
    value: function init() {
      this.modalOpeners = document.querySelectorAll('[data-modal-opener]');
      this.modalClosers = document.querySelectorAll('[data-modal-close]');
      this.modals = document.querySelectorAll('.product-ingredients__modal');
      this.body = document.querySelector('body');
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;
      // Open modal
      this.modalOpeners.forEach(function (opener) {
        opener.addEventListener('click', function (e) {
          e.preventDefault();
          var modalId = opener.getAttribute('data-modal-opener');
          _this.openModal(modalId);
        });
      });

      // Close modal
      this.modalClosers.forEach(function (closer) {
        closer.addEventListener('click', function (e) {
          e.preventDefault();
          var modal = closer.closest('.product-ingredients__modal');
          _this.closeModal(modal);
        });
      });

      // Close on outside click
      this.modals.forEach(function (modal) {
        modal.addEventListener('click', function (e) {
          if (e.target === modal) {
            _this.closeModal(modal);
          }
        });
      });

      // Close on ESC key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          var activeModal = document.querySelector('.product-ingredients__modal.active');
          if (activeModal) {
            _this.closeModal(activeModal);
          }
        }
      });
    }
  }, {
    key: "openModal",
    value: function openModal(modalId) {
      var modal = document.getElementById(modalId);
      if (!modal) return;
      this.body.style.overflow = 'hidden';
      modal.classList.add('active');

      // Set focus on close button
      var closeButton = modal.querySelector('[data-modal-close]');
      if (closeButton) {
        closeButton.focus();
      }
    }
  }, {
    key: "closeModal",
    value: function closeModal(modal) {
      if (!modal) return;
      this.body.style.overflow = '';
      modal.classList.remove('active');

      // Return focus to opener
      var modalId = modal.getAttribute('id');
      var opener = document.querySelector("[data-modal-opener=\"".concat(modalId, "\"]"));
      if (opener) {
        opener.focus();
      }
    }
  }]);
}(); // Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function () {
  new ModalIngredients();
});
/******/ })()
;
//# sourceMappingURL=modal-ingredients.js.map