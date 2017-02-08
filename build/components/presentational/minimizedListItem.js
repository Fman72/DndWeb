'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _crossImageButton = require('./crossImageButton');

var _crossImageButton2 = _interopRequireDefault(_crossImageButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MinimizedListItem = function MinimizedListItem(props) {
  return _react2.default.createElement(
    'div',
    { className: 'minimized-list-item', onDoubleClick: props.handleDoubleClick },
    _react2.default.createElement(
      'span',
      null,
      props.name
    ),
    _react2.default.createElement(_crossImageButton2.default, { onClick: props.onCrossClick })
  );
};

MinimizedListItem.propTypes = {
  name: _react2.default.PropTypes.string.isRequired
};

exports.default = MinimizedListItem;