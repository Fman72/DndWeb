'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _spellDiv = require('../presentational/spellDiv');

var _spellDiv2 = _interopRequireDefault(_spellDiv);

var _spellListItemHeader = require('../presentational/spellListItemHeader');

var _spellListItemHeader2 = _interopRequireDefault(_spellListItemHeader);

var _reactRedux = require('react-redux');

var _spellActions = require('../../actions/spellActions');

var _spellListItem = require('../presentational/spellListItem');

var _spellListItem2 = _interopRequireDefault(_spellListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Radium from 'radium';
// import styles from '../../styles';


var SpellListItemContainer = function (_React$Component) {
  _inherits(SpellListItemContainer, _React$Component);

  function SpellListItemContainer(props) {
    _classCallCheck(this, SpellListItemContainer);

    var _this = _possibleConstructorReturn(this, (SpellListItemContainer.__proto__ || Object.getPrototypeOf(SpellListItemContainer)).call(this, props));

    _this.removeSpell = _this.removeSpell.bind(_this);
    _this.toggleMinimization = _this.toggleMinimization.bind(_this);
    _this.state = { minimized: false };
    return _this;
  }

  _createClass(SpellListItemContainer, [{
    key: 'removeSpell',
    value: function removeSpell(event) {
      this.props.dispatch((0, _spellActions.removeSpell)(this.props.spellIndex));
    }
  }, {
    key: 'toggleMinimization',
    value: function toggleMinimization() {
      this.setState({ minimized: !this.state.minimized });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.minimized) {
        return _react2.default.createElement(_spellListItem2.default, { removeSpell: this.removeSpell, toggleMinimization: this.toggleMinimization, spell: this.props.spell, filters: this.props.filters });
      } else {
        return _react2.default.createElement(_spellListItemHeader2.default, { isMinimized: true, toggleMinimization: this.toggleMinimization, removeSpell: this.removeSpell, name: this.props.spell.name });
      }
    }
  }]);

  return SpellListItemContainer;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    filters: state.filters.filters
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SpellListItemContainer);