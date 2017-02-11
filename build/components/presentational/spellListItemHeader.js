'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _crossImageButton = require('./crossImageButton');

var _crossImageButton2 = _interopRequireDefault(_crossImageButton);

var _imageButton = require('./imageButton');

var _imageButton2 = _interopRequireDefault(_imageButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpellListItemHeader = function SpellListItemHeader(props) {
  var style = void 0;
  console.log("Beofre if");
  if (props.isMinimized) {
    var _style = {
      transform: "rotate(180deg)"
    };
    console.log(_style.transform);
  }

  return _react2.default.createElement(
    'div',
    { className: 'minimized-list-item', onDoubleClick: props.toggleMinimization },
    _react2.default.createElement(
      'span',
      null,
      props.name
    ),
    _react2.default.createElement(_imageButton2.default, { style: style, handleClick: props.toggleMinimization, imageSrc: 'images/down_arrow.svg' }),
    _react2.default.createElement(_imageButton2.default, { handleClick: props.removeSpell, imageSrc: 'images/cross.svg' })
  );
};

SpellListItemHeader.propTypes = {
  name: _react2.default.PropTypes.string.isRequired
};

exports.default = SpellListItemHeader;