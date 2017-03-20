'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpellPageHelmet = function (_Helmet) {
  _inherits(SpellPageHelmet, _Helmet);

  function SpellPageHelmet(props) {
    _classCallCheck(this, SpellPageHelmet);

    return _possibleConstructorReturn(this, (SpellPageHelmet.__proto__ || Object.getPrototypeOf(SpellPageHelmet)).call(this, props));
  }

  _createClass(SpellPageHelmet, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactHelmet2.default, {
        titleTemplate: 'Spell List %s',
        link: [{ rel: "shortcut icon", href: "images/favicon.ico" }, { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css", integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u", crossorigin: "anonymous" }, { rel: "stylesheet", href: "styles/style.css", type: "text/css" }],
        meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
        script: [{ type: "text/javascript", content: "window.__INITIAL_STORE__ = ' + JSON.stringify(store) + '; " }]
      });
    }
  }]);

  return SpellPageHelmet;
}(_reactHelmet2.default);

exports.default = SpellPageHelmet;