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
    _reactBootstrap.Grid,
    { fluid: true },
    _react2.default.createElement(_spellPageHeaderContainer2.default, null),
    _react2.default.createElement(_filterSettingsModalContainer2.default, null),
    _react2.default.createElement(
      _reactBootstrap.Row,
      { id: 'spell-page-div' },
      _react2.default.createElement(_searchContainer2.default, null),
      _react2.default.createElement(_spellList2.default, null)
    ),
    _react2.default.createElement('script', { src: 'bundle.js' })
  );
};

exports.default = SpellPage;