'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _spellListItemContainer = require('./spellListItemContainer');

var _spellListItemContainer2 = _interopRequireDefault(_spellListItemContainer);

var _spellListLevelItemGroup = require('../presentational/spellListLevelItemGroup');

var _spellListLevelItemGroup2 = _interopRequireDefault(_spellListLevelItemGroup);

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
      if (this.props.spellList.length > 0) {
        if (this.props.settings.orderSpellsByLevel) {
          var spellListItemsGroupedByLevel = [[], [], [], [], [], [], [], [], [], []]; //Is this retarded??
          for (var i = 0; i < this.props.spellList.length; i++) {
            //Add spell.
            spellListItemsGroupedByLevel[this.props.spellList[i].level].push(_react2.default.createElement(_spellListItemContainer2.default, { spellIndex: i, key: this.props.spellList[i].name, spell: this.props.spellList[i] }));
          }
          var spellListLevelItemGroups = [];

          for (var _i = 0; _i < spellListItemsGroupedByLevel.length; _i++) {
            //If spells at this level.
            if (spellListItemsGroupedByLevel[_i]) {
              spellListLevelItemGroups.push(_react2.default.createElement(
                _spellListLevelItemGroup2.default,
                { key: _i, level: _i },
                spellListItemsGroupedByLevel[_i]
              ));
            }
          }
          return _react2.default.createElement(
            'div',
            null,
            spellListLevelItemGroups
          );
        } else {
          var spellListItems = [];
          for (var _i2 = 0; _i2 < this.props.spellList.length; _i2++) {
            spellListItems.push(_react2.default.createElement(_spellListItemContainer2.default, { spellIndex: _i2, key: this.props.spellList[_i2].name, spell: this.props.spellList[_i2] }));
          }
          return _react2.default.createElement(
            'div',
            null,
            spellListItems
          );
        }
      } else if (this.props.isFetchingSpellList) {
        return _react2.default.createElement('img', { id: 'loading-image', height: '50', width: '50', src: 'images/loading.gif' });
      }
      return null;
    }
  }]);

  return SpellList;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    spellList: state.spells.spellList,
    isFetchingSpellList: state.spells.isFetchingSpellList,
    settings: state.settings
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SpellList);