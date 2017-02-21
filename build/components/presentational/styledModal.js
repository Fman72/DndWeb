'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filterToggleItem = require('./filterToggleItem');

var _filterToggleItem2 = _interopRequireDefault(_filterToggleItem);

var _reactBootstrap = require('react-bootstrap');

var _imageButton = require('./imageButton');

var _imageButton2 = _interopRequireDefault(_imageButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledModal = function StyledModal(props) {
  return _react2.default.createElement(
    _reactBootstrap.Modal,
    { show: props.show },
    _react2.default.createElement(
      _reactBootstrap.Modal.Header,
      null,
      _react2.default.createElement(
        _reactBootstrap.Modal.Title,
        null,
        props.modalTitle
      ),
      props.headerContent
    ),
    _react2.default.createElement(
      _reactBootstrap.Modal.Body,
      null,
      props.bodyContent
    ),
    _react2.default.createElement(
      _reactBootstrap.Modal.Footer,
      null,
      props.footerContent
    )
  );
};

exports.default = StyledModal;