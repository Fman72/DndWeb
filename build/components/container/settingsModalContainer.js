'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FilterSettingsModalContentContainer = require('./FilterSettingsModalContentContainer');

var _FilterSettingsModalContentContainer2 = _interopRequireDefault(_FilterSettingsModalContentContainer);

var _GeneralSettingsModalContentContainer = require('./GeneralSettingsModalContentContainer');

var _GeneralSettingsModalContentContainer2 = _interopRequireDefault(_GeneralSettingsModalContentContainer);

var _styledModal = require('../presentational/styledModal');

var _styledModal2 = _interopRequireDefault(_styledModal);

var _reactRedux = require('react-redux');

var _modalActions = require('../../actions/modalActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SettingsModalContainer = function (_React$Component) {
  _inherits(SettingsModalContainer, _React$Component);

  function SettingsModalContainer(props) {
    _classCallCheck(this, SettingsModalContainer);

    var _this = _possibleConstructorReturn(this, (SettingsModalContainer.__proto__ || Object.getPrototypeOf(SettingsModalContainer)).call(this, props));

    _this.onHide = _this.onHide.bind(_this);
    return _this;
  }

  _createClass(SettingsModalContainer, [{
    key: 'onHide',
    value: function onHide() {
      this.props.dispatch((0, _modalActions.hideModal)("settingsModal"));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _styledModal2.default,
        { show: this.props.modals.settingsModal, title: "Settings", handleHide: this.onHide },
        _react2.default.createElement(_GeneralSettingsModalContentContainer2.default, null),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(_FilterSettingsModalContentContainer2.default, null)
      );
    }
  }]);

  return SettingsModalContainer;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    modals: state.modals
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SettingsModalContainer);