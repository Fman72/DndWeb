'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _spellDiv = require('./spellDiv');

var _spellDiv2 = _interopRequireDefault(_spellDiv);

var _crossImageButton = require('./crossImageButton');

var _crossImageButton2 = _interopRequireDefault(_crossImageButton);

var _spellListItemHeader = require('./spellListItemHeader');

var _spellListItemHeader2 = _interopRequireDefault(_spellListItemHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpellListItem = function SpellListItem(props) {
  return _react2.default.createElement(
    'div',
    { className: 'spell-list-item', onDoubleClick: props.handleDoubleClick },
    _react2.default.createElement(_spellListItemHeader2.default, { onCrossClick: props.onCrossClick, name: props.spell.name }),
    _react2.default.createElement(_spellDiv2.default, { spell: props.spell })
  );
};

exports.default = SpellListItem;