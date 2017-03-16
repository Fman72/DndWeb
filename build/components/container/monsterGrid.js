'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MonsterBoxContainer = require('./MonsterBoxContainer');

var _MonsterBoxContainer2 = _interopRequireDefault(_MonsterBoxContainer);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonsterGrid = function (_React$Component) {
  _inherits(MonsterGrid, _React$Component);

  function MonsterGrid(props) {
    _classCallCheck(this, MonsterGrid);

    return _possibleConstructorReturn(this, (MonsterGrid.__proto__ || Object.getPrototypeOf(MonsterGrid)).call(this, props));
  }

  _createClass(MonsterGrid, [{
    key: 'render',
    value: function render() {
      if (this.props.monsterList.length > 0) {
        var monsterGridItems = [];
        for (var i = 0; i < this.props.monsterList.length; i++) {
          monsterGridItems.push(_react2.default.createElement(_MonsterBoxContainer2.default, { monsterIndex: i, key: i, monster: this.props.monsterList[i] }));
        }
        return _react2.default.createElement(
          'div',
          null,
          monsterGridItems
        );
      }
      return null;
    }
  }]);

  return MonsterGrid;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    monsterList: state.monsters.monsterList,
    settings: state.settings
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MonsterGrid);