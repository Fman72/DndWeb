'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _dataRow = require('../presentational/dataRow');

var _dataRow2 = _interopRequireDefault(_dataRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonsterBoxContainer = function (_React$Component) {
  _inherits(MonsterBoxContainer, _React$Component);

  function MonsterBoxContainer(props) {
    _classCallCheck(this, MonsterBoxContainer);

    return _possibleConstructorReturn(this, (MonsterBoxContainer.__proto__ || Object.getPrototypeOf(MonsterBoxContainer)).call(this, props));
  }

  _createClass(MonsterBoxContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 12, sm: 6, md: 4, lg: 3 },
        _react2.default.createElement(
          'div',
          { className: 'monster-box' },
          _react2.default.createElement(
            'h3',
            null,
            this.props.monster.name
          ),
          _react2.default.createElement(
            'div',
            { className: 'monster-box-section' },
            _react2.default.createElement('hr', null),
            _react2.default.createElement(_dataRow2.default, { name: "Str", value: this.props.monster.strength }),
            _react2.default.createElement(_dataRow2.default, { name: "Dex", value: this.props.monster.dexterity }),
            _react2.default.createElement(_dataRow2.default, { name: "Con", value: this.props.monster.constitution }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(_dataRow2.default, { name: "Int", value: this.props.monster.intelligence }),
            _react2.default.createElement(_dataRow2.default, { name: "Wis", value: this.props.monster.wisdom }),
            _react2.default.createElement(_dataRow2.default, { name: "Cha", value: this.props.monster.charisma }),
            _react2.default.createElement('hr', null)
          )
        )
      );
    }
  }]);

  return MonsterBoxContainer;
}(_react2.default.Component);

exports.default = MonsterBoxContainer;