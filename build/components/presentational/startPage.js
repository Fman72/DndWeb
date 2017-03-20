'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _spellPage = require('./spellPage.js');

var _spellPage2 = _interopRequireDefault(_spellPage);

var _scrollDiv = require('./scrollDiv');

var _scrollDiv2 = _interopRequireDefault(_scrollDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StartPage = function StartPage(props) {

  return _react2.default.createElement(
    'div',
    { className: 'full-height' },
    _react2.default.createElement(
      _scrollDiv2.default,
      { scrollHeight: props.scrollHeight },
      _react2.default.createElement(
        'div',
        { id: 'start-div', ref: props.getRef },
        _react2.default.createElement(
          'h1',
          { id: 'start-heading' },
          'What is your name?'
        ),
        _react2.default.createElement('input', { onKeyDown: props.handleKeyDown, className: 'styled-input', id: 'start-input', type: 'text' })
      )
    ),
    _react2.default.createElement(
      _scrollDiv2.default,
      { scrollHeight: props.scrollHeight },
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(_spellPage2.default, null)
      )
    )
  );
};

exports.default = StartPage;