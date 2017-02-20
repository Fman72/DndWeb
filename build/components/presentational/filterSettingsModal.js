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

var FilterSettingsModal = function FilterSettingsModal(props) {
  return _react2.default.createElement(
    _reactBootstrap.Modal,
    null,
    _react2.default.createElement(
      _reactBootstrap.Modal.Dialog,
      null,
      _react2.default.createElement(
        _reactBootstrap.Modal.Header,
        null,
        _react2.default.createElement(
          _reactBootstrap.Modal.Title,
          null,
          'Filter Settings'
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Modal.Body,
        null,
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: props.filterState["desc"], toggleFilter: props.toggleFilter, value: 'desc', name: 'Description' }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: props.filterState["level"], toggleFilter: props.toggleFilter, value: 'level', name: 'Level' }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: props.filterState["class"], toggleFilter: props.toggleFilter, value: 'class', name: 'Class' }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: props.filterState["range"], toggleFilter: props.toggleFilter, value: 'range', name: 'Range' }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: props.filterState["casting_time"], toggleFilter: props.toggleFilter, value: 'casting_time', name: 'Casting Time' }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: props.filterState["duration"], toggleFilter: props.toggleFilter, value: 'duration', name: 'Duration' }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: props.filterState["concentration"], toggleFilter: props.toggleFilter, value: 'concentration', name: 'Concentration' }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: props.filterState["school"], toggleFilter: props.toggleFilter, value: 'school', name: 'School' }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: props.filterState["components"], toggleFilter: props.toggleFilter, value: 'components', name: 'Components' }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: props.filterState["ritual"], toggleFilter: props.toggleFilter, value: 'ritual', name: 'Ritual' })
      ),
      _react2.default.createElement(
        _reactBootstrap.Modal.Footer,
        null,
        _react2.default.createElement(_imageButton2.default, { imageSrc: "images/cross.svg" })
      )
    )
  );
};

exports.default = FilterSettingsModal;