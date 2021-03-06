'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledModal = function StyledModal(props) {
  return _react2.default.createElement(
    _reactBootstrap.Modal,
    { show: props.show, onHide: props.handleHide },
    _react2.default.createElement(
      _reactBootstrap.Modal.Header,
      { closeButton: true },
      _react2.default.createElement(
        _reactBootstrap.Modal.Title,
        null,
        props.title
      ),
      props.headerContent
    ),
    _react2.default.createElement(
      _reactBootstrap.Modal.Body,
      null,
      props.children
    ),
    _react2.default.createElement(
      _reactBootstrap.Modal.Footer,
      null,
      props.footerContent
    )
  );
};

exports.default = StyledModal;