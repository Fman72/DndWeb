'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _spellPageHeaderContainer = require('../container/spellPageHeaderContainer');

var _spellPageHeaderContainer2 = _interopRequireDefault(_spellPageHeaderContainer);

var _filterSettingsModalContainer = require('../container/filterSettingsModalContainer');

var _filterSettingsModalContainer2 = _interopRequireDefault(_filterSettingsModalContainer);

var _searchContainer = require('../container/searchContainer');

var _searchContainer2 = _interopRequireDefault(_searchContainer);

var _spellList = require('../container/spellList');

var _spellList2 = _interopRequireDefault(_spellList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpellPage = function SpellPage(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactBootstrap.Row,
      null,
      _react2.default.createElement(
        _reactBootstrap.Col,
        { className: 'title-background', xs: 12 },
        _react2.default.createElement(_spellPageHeaderContainer2.default, null)
      )
    ),
    _react2.default.createElement(_filterSettingsModalContainer2.default, null),
    _react2.default.createElement(
      _reactBootstrap.Row,
      { id: 'spell-page-div', className: 'boostrap-row-margin-override' },
      _react2.default.createElement(
        _reactBootstrap.Col,
        { id: 'search-container', xs: 12, sm: 3 },
        _react2.default.createElement(_searchContainer2.default, null)
      ),
      _react2.default.createElement(
        _reactBootstrap.Col,
        { id: 'spell-list', xs: 12, sm: 9 },
        _react2.default.createElement(_spellList2.default, null)
      )
    ),
    _react2.default.createElement('script', { src: 'bundle.js' })
  );
};

exports.default = SpellPage;