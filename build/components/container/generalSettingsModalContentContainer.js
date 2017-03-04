'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _controlledToggleItem = require('../presentational/controlledToggleItem');

var _controlledToggleItem2 = _interopRequireDefault(_controlledToggleItem);

var _settingActions = require('../../actions/settingActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneralSettingsModalContentContainer = function (_React$Component) {
  _inherits(GeneralSettingsModalContentContainer, _React$Component);

  function GeneralSettingsModalContentContainer(props) {
    _classCallCheck(this, GeneralSettingsModalContentContainer);

    var _this = _possibleConstructorReturn(this, (GeneralSettingsModalContentContainer.__proto__ || Object.getPrototypeOf(GeneralSettingsModalContentContainer)).call(this, props));

    _this.toggleSetting = _this.toggleSetting.bind(_this);
    return _this;
  }

  _createClass(GeneralSettingsModalContentContainer, [{
    key: 'toggleSetting',
    value: function toggleSetting(event) {
      this.props.dispatch((0, _settingActions.toggleSetting)(event.target.value, event.target.checked));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h5',
          null,
          'General Settings'
        ),
        _react2.default.createElement(_controlledToggleItem2.default, { name: 'Order Spells By Level', value: 'orderSpellsByLevel', isChecked: this.props.settings.orderSpellsByLevel, handleChange: this.toggleSetting })
      );
    }
  }]);

  return GeneralSettingsModalContentContainer;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    settings: state.settings
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(GeneralSettingsModalContentContainer);