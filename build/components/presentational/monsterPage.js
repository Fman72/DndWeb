'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _monsterSearchContainer = require('../container/monsterSearchContainer');

var _monsterSearchContainer2 = _interopRequireDefault(_monsterSearchContainer);

var _monsterPageHeaderContainer = require('../container/monsterPageHeaderContainer');

var _monsterPageHeaderContainer2 = _interopRequireDefault(_monsterPageHeaderContainer);

var _settingsModalContainer = require('../container/settingsModalContainer');

var _settingsModalContainer2 = _interopRequireDefault(_settingsModalContainer);

var _monsterGrid = require('../container/monsterGrid');

var _monsterGrid2 = _interopRequireDefault(_monsterGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MonsterPage = function MonsterPage(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactBootstrap.Row,
      null,
      _react2.default.createElement(
        _reactBootstrap.Col,
        { className: 'title-background', xs: 12 },
        _react2.default.createElement(_monsterPageHeaderContainer2.default, null)
      )
    ),
    _react2.default.createElement(_settingsModalContainer2.default, null),
    _react2.default.createElement(
      _reactBootstrap.Row,
      { id: 'monster-page-div', className: 'boostrap-row-margin-override' },
      _react2.default.createElement(
        _reactBootstrap.Col,
        { id: 'search-container', xs: 12, sm: 3 },
        _react2.default.createElement(_monsterSearchContainer2.default, null)
      ),
      _react2.default.createElement(
        _reactBootstrap.Col,
        { id: 'monster-grid', xs: 12, sm: 9 },
        _react2.default.createElement(_monsterGrid2.default, null)
      )
    ),
    _react2.default.createElement('script', { src: 'bundle.js' })
  );
};

exports.default = MonsterPage;