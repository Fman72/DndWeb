'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _spellDiv = require('../presentational/spellDiv');

var _spellDiv2 = _interopRequireDefault(_spellDiv);

var _minimizedSpellDiv = require('../presentational/minimizedSpellDiv');

var _minimizedSpellDiv2 = _interopRequireDefault(_minimizedSpellDiv);

var _reactRedux = require('react-redux');

var _spellActions = require('../../actions/spellActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Radium from 'radium';
// import styles from '../../styles';


var SpellListItem = function (_React$Component) {
  _inherits(SpellListItem, _React$Component);

  function SpellListItem(props) {
    _classCallCheck(this, SpellListItem);

    var _this = _possibleConstructorReturn(this, (SpellListItem.__proto__ || Object.getPrototypeOf(SpellListItem)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    _this.state = { minimized: false };
    return _this;
  }

  _createClass(SpellListItem, [{
    key: 'handleClick',
    value: function handleClick(event) {
      this.props.dispatch((0, _spellActions.removeSpell)(this.props.spellIndex));
    }
  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick() {
      this.setState({ minimized: !this.state.minimized });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.minimized) {
        return _react2.default.createElement(
          'div',
          { onDoubleClick: this.handleDoubleClick },
          _react2.default.createElement(_spellDiv2.default, { currentSpell: this.props.spell }),
          _react2.default.createElement(
            'button',
            { onClick: this.handleClick },
            'Remove Spell'
          )
        );
      } else {
        return _react2.default.createElement(_minimizedSpellDiv2.default, { handleDoubleClick: this.handleDoubleClick, name: this.props.spell.name });
      }
    }
  }]);

  return SpellListItem;
}(_react2.default.Component);
//SpellListItem = Radium(SpellListItem);

exports.default = (0, _reactRedux.connect)(null)(SpellListItem);