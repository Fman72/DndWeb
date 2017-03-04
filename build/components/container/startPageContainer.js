'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _startPage = require('../presentational/startPage.js');

var _startPage2 = _interopRequireDefault(_startPage);

var _reactRedux = require('react-redux');

var _userActions = require('../../actions/userActions.js');

var _spellActions = require('../../actions/spellActions');

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartPageContainer = function (_React$Component) {
  _inherits(StartPageContainer, _React$Component);

  function StartPageContainer(props) {
    _classCallCheck(this, StartPageContainer);

    var _this = _possibleConstructorReturn(this, (StartPageContainer.__proto__ || Object.getPrototypeOf(StartPageContainer)).call(this, props));

    _this.scrollUp = _this.scrollUp.bind(_this);
    _this.getRef = _this.getRef.bind(_this);
    _this.state = {};
    return _this;
  }

  _createClass(StartPageContainer, [{
    key: 'scrollUp',
    value: function scrollUp(event) {
      var keycode = event.keyCode ? event.keyCode : event.which;
      if (keycode === 13 && event.target.value) {
        this.setState({ scrollHeight: -this.domNode.clientHeight });
        this.props.dispatch((0, _userActions.setUser)((0, _util.normalizeString)(event.target.value)));
        this.props.dispatch((0, _spellActions.attemptRetrieveSpellList)(event.target.value));
      }
    }
  }, {
    key: 'getRef',
    value: function getRef(domNode) {
      this.domNode = domNode;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_startPage2.default, { scrollHeight: this.state.scrollHeight, getRef: this.getRef, handleKeyDown: this.scrollUp });
    }
  }]);

  return StartPageContainer;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(null)(StartPageContainer);