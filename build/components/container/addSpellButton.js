'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _spellActions = require('../../actions/spellActions');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddSpellButton = function (_React$Component) {
  _inherits(AddSpellButton, _React$Component);

  function AddSpellButton(props) {
    _classCallCheck(this, AddSpellButton);

    var _this = _possibleConstructorReturn(this, (AddSpellButton.__proto__ || Object.getPrototypeOf(AddSpellButton)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(AddSpellButton, [{
    key: 'handleClick',
    value: function handleClick(event) {
      this.props.dispatch((0, _spellActions.addSpell)(this.props.currentSpell));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        { id: 'add-spell-button', onClick: this.handleClick },
        'Add Spell'
      );
    }
  }]);

  return AddSpellButton;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    currentSpell: state.spells.currentSpell
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(AddSpellButton);