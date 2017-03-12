'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dataRow = require('./dataRow');

var _dataRow2 = _interopRequireDefault(_dataRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataDiv = function DataDiv(props) {
  var objectToDisplayProps = Object.keys(props.objectToDisplay);
  var dataRows = [];
  for (var i = 0; i < Object.keys(props.objectToDisplay).length; i++) {
    if (props.positionedProps.indexOf(objectToDisplayProps[i]) < 0 && props.hiddenProps.indexOf(objectToDisplayProps[i]) < 0) {
      dataRows.push(_react2.default.createElement(_dataRow2.default, { key: objectToDisplayProps[i], name: objectToDisplayProps[i], value: props.objectToDisplay[objectToDisplayProps[i]] }));
    } else {
      i++;
    }
  }
  for (var x = props.positionedProps.length - 1; x > -1; x--) {
    if (props.hiddenProps.indexOf(props.positionedProps[x]) < 0) {
      dataRows.splice(0, 0, _react2.default.createElement(_dataRow2.default, { key: props.positionedProps[x], name: props.positionedProps[x], value: props.objectToDisplay[props.positionedProps[x]] }));
    }
  }
  return _react2.default.createElement(
    'div',
    null,
    dataRows
  );
};

DataDiv.propTypes = {
  objectToDisplay: _react2.default.PropTypes.object.isRequired,
  positionedProps: _react2.default.PropTypes.array,
  hiddenProps: _react2.default.PropTypes.array
};

_dataRow2.default.defaultProps = {
  hiddenProps: [],
  positionedProps: []
};

exports.default = DataDiv;