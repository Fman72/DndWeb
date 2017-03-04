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
function SpellDiv(props) {
  console.log(JSON.stringify(props.filters));
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_dataRow2.default, { name: "Name", value: props.spell.name }),
    (!props.filters || props.filters.desc) && _react2.default.createElement(_dataRow2.default, { name: "Description", value: props.spell.desc }),
    (!props.filters || props.filters.level) && _react2.default.createElement(_dataRow2.default, { name: "Level", value: props.spell.level == 0 ? "Cantrip" : props.spell.level }),
    (!props.filters || props.filters.class) && _react2.default.createElement(_dataRow2.default, { name: "Class", value: props.spell.class }),
    (!props.filters || props.filters.range) && _react2.default.createElement(_dataRow2.default, { name: "Range", value: props.spell.range }),
    (!props.filters || props.filters.casting_time) && _react2.default.createElement(_dataRow2.default, { name: "Casting Time", value: props.spell.casting_time }),
    (!props.filters || props.filters.duration) && _react2.default.createElement(_dataRow2.default, { name: "Duration", value: props.spell.duration }),
    (!props.filters || props.filters.concentration) && _react2.default.createElement(_dataRow2.default, { name: "Concentration", value: props.spell.concentration }),
    (!props.filters || props.filters.school) && _react2.default.createElement(_dataRow2.default, { name: "School", value: props.spell.school }),
    (!props.filters || props.filters.components) && _react2.default.createElement(_dataRow2.default, { name: "Components", value: props.spell.components }),
    (!props.filters || props.filters.ritual) && _react2.default.createElement(_dataRow2.default, { name: "Ritual", value: props.spell.ritual })
  );
}

SpellDiv.propTypes = {
  spell: _react2.default.PropTypes.shape({
    name: _react2.default.PropTypes.string.isRequired,
    description: _react2.default.PropTypes.string,
    range: _react2.default.PropTypes.string,
    components: _react2.default.PropTypes.string,
    ritual: _react2.default.PropTypes.string,
    duration: _react2.default.PropTypes.string,
    concentration: _react2.default.PropTypes.string,
    casting_time: _react2.default.PropTypes.string,
    level: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    school: _react2.default.PropTypes.string,
    class: _react2.default.PropTypes.string
  })
};

exports.default = SpellDiv;