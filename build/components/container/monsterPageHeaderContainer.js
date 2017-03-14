'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _modalActions = require('../../actions/modalActions');

var _spellActions = require('../../actions/spellActions');

var _pageHeader = require('../presentational/pageHeader');

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _imageButton = require('../presentational/imageButton');

var _imageButton2 = _interopRequireDefault(_imageButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonsterPageHeaderContainer = function (_React$Component) {
  _inherits(MonsterPageHeaderContainer, _React$Component);

  function MonsterPageHeaderContainer(props) {
    _classCallCheck(this, MonsterPageHeaderContainer);

    var _this = _possibleConstructorReturn(this, (MonsterPageHeaderContainer.__proto__ || Object.getPrototypeOf(MonsterPageHeaderContainer)).call(this, props));

    _this.showSettingsModal = _this.showSettingsModal.bind(_this);
    return _this;
  }

  _createClass(MonsterPageHeaderContainer, [{
    key: 'showSettingsModal',
    value: function showSettingsModal() {
      this.props.dispatch((0, _modalActions.showModal)("settingsModal"));
    }
  }, {
    key: 'render',
    value: function render() {
      var buttons = _react2.default.createElement('div', null);
      return _react2.default.createElement(_pageHeader2.default, { titleText: "Welcome to the DND 5e Monster Manager ", user: this.props.user.username, buttons: buttons });
    }
  }]);

  return MonsterPageHeaderContainer;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    spells: state.spells
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MonsterPageHeaderContainer);