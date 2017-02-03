"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _dataRow = require("./dataRow");

var _dataRow2 = _interopRequireDefault(_dataRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Contains a spell. Will eventually be able to click attributes to expand them so will need state.
function SpellContainer(props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_dataRow2.default, { name: "Name", value: props.currentSpell.name }),
        _react2.default.createElement(_dataRow2.default, { name: "Description", value: props.currentSpell.desc }),
        _react2.default.createElement(_dataRow2.default, { name: "Range", value: props.currentSpell.range }),
        _react2.default.createElement(_dataRow2.default, { name: "Components", value: props.currentSpell.components }),
        _react2.default.createElement(_dataRow2.default, { name: "Ritual", value: props.currentSpell.ritual }),
        _react2.default.createElement(_dataRow2.default, { name: "Duration", value: props.currentSpell.duration }),
        _react2.default.createElement(_dataRow2.default, { name: "Concentration", value: props.currentSpell.concentration }),
        _react2.default.createElement(_dataRow2.default, { name: "Casting Time", value: props.currentSpell.casting_time }),
        _react2.default.createElement(_dataRow2.default, { name: "Level", value: props.currentSpell.level }),
        _react2.default.createElement(_dataRow2.default, { name: "School", value: props.currentSpell.school }),
        _react2.default.createElement(_dataRow2.default, { name: "Class", value: props.currentSpell.class })
    );
}

exports.default = SpellContainer;