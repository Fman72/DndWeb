'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _searchContainer = require('./searchContainer');

var _searchContainer2 = _interopRequireDefault(_searchContainer);

var _spellList = require('./spellList');

var _spellList2 = _interopRequireDefault(_spellList);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _spellPageHeaderContainer = require('./spellPageHeaderContainer');

var _spellPageHeaderContainer2 = _interopRequireDefault(_spellPageHeaderContainer);

var _filterSettingsModalContainer = require('./filterSettingsModalContainer');

var _filterSettingsModalContainer2 = _interopRequireDefault(_filterSettingsModalContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpellPage = function (_React$Component) {
  _inherits(SpellPage, _React$Component);

  function SpellPage(props) {
    _classCallCheck(this, SpellPage);

    return _possibleConstructorReturn(this, (SpellPage.__proto__ || Object.getPrototypeOf(SpellPage)).call(this, props));
  }

  _createClass(SpellPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Grid,
        { fluid: true },
        _react2.default.createElement(_spellPageHeaderContainer2.default, null),
        _react2.default.createElement(_filterSettingsModalContainer2.default, null),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { id: 'spell-page-div' },
          _react2.default.createElement(_searchContainer2.default, null),
          _react2.default.createElement(_spellList2.default, null)
        ),
        _react2.default.createElement('script', { src: 'bundle.js' })
      );
    }
  }]);

  return SpellPage;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SpellPage);