'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _spellPageHelmet = require('../container/spellPageHelmet');

var _spellPageHelmet2 = _interopRequireDefault(_spellPageHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//App container object.
function AppRoot(props) {
    return _react2.default.createElement(
        _reactBootstrap.Grid,
        { fluid: true },
        props.children
    );
};

exports.default = AppRoot;