'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _imageButton = require('./imageButton');

var _imageButton2 = _interopRequireDefault(_imageButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpellListItemHeader = function SpellListItemHeader(props) {
  var style = {};
  if (props.isArrowRotated) {
    style = {
      transform: "rotate(180deg)"
    };
  }

  return _react2.default.createElement(
    'div',
    { className: 'list-item-header', onDoubleClick: props.toggleMinimization },
    _react2.default.createElement(
      'span',
      null,
      props.name
    ),
    _react2.default.createElement(_imageButton2.default, { css: style, handleClick: props.toggleMinimization, imageSrc: 'down_arrow' }),
    _react2.default.createElement(_imageButton2.default, { handleClick: props.removeSpell, imageSrc: 'cross' })
  );
};

SpellListItemHeader.propTypes = {
  name: _react2.default.PropTypes.string.isRequired
};

exports.default = SpellListItemHeader;