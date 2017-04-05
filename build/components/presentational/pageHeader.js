'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeader = function PageHeader(props) {
  var storeButtonImageSrc = "";
  if (props.isStoringSpellList) {
    storeButtonImageSrc = "loading.gif";
  }
  return _react2.default.createElement(
    'div',
    { id: 'page-title' },
    _react2.default.createElement(
      'h1',
      { style: { display: "inline", marginRight: "auto", marginLeft: "15px" } },
      props.titleText,
      (0, _util.initialCapsString)(props.user)
    ),
    props.buttons
  );
};

exports.default = PageHeader;