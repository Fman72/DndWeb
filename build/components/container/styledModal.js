'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filterToggleItem = require('../presentational/filterToggleItem');

var _filterToggleItem2 = _interopRequireDefault(_filterToggleItem);

var _reactBootstrap = require('react-bootstrap');

var _imageButton = require('../presentational/imageButton');

var _imageButton2 = _interopRequireDefault(_imageButton);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledModal = function (_React$Component) {
  _inherits(StyledModal, _React$Component);

  function StyledModal(props) {
    _classCallCheck(this, StyledModal);

    return _possibleConstructorReturn(this, (StyledModal.__proto__ || Object.getPrototypeOf(StyledModal)).call(this, props));
  }

  _createClass(StyledModal, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { show: this.props.show, onHide: this.props.handleHide },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          { closeButton: true },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            this.props.modalTitle
          ),
          this.props.headerContent
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          this.props.bodyContent
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          this.props.footerContent
        )
      );
    }
  }]);

  return StyledModal;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(null)(StyledModal);