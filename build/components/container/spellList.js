'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _spellContainer = require('../presentational/spellContainer');

var _spellContainer2 = _interopRequireDefault(_spellContainer);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpellList = function (_React$Component) {
  _inherits(SpellList, _React$Component);

  function SpellList(props) {
    _classCallCheck(this, SpellList);

    return _possibleConstructorReturn(this, (SpellList.__proto__ || Object.getPrototypeOf(SpellList)).call(this, props));
  }

  _createClass(SpellList, [{
    key: 'render',
    value: function render() {
      if (this.props.spellList) {
        var spellContainers = [];
        for (var i = 0; i < this.props.spellList.length; i++) {
          spellContainers.push(_react2.default.createElement(_spellContainer2.default, { currentSpell: this.props.spellList[i] }));
        }
        return _react2.default.createElement(
          'div',
          null,
          spellContainers
        );
      }
      return null;
    }
  }]);

  return SpellList;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    spellList: state.spells.spellList
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SpellList);