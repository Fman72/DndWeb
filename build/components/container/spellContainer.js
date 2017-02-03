"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _dataRow = require("../presentational/dataRow");

var _dataRow2 = _interopRequireDefault(_dataRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Contains a spell. Will eventually be able to click attributes to expand them so will need state.
var SpellContainer = function (_React$Component) {
    _inherits(SpellContainer, _React$Component);

    function SpellContainer(props) {
        _classCallCheck(this, SpellContainer);

        return _possibleConstructorReturn(this, (SpellContainer.__proto__ || Object.getPrototypeOf(SpellContainer)).call(this, props));
    }

    _createClass(SpellContainer, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_dataRow2.default, { name: "Name", value: this.props.currentSpell.name }),
                _react2.default.createElement(_dataRow2.default, { name: "Description", value: this.props.currentSpell.desc }),
                _react2.default.createElement(_dataRow2.default, { name: "Range", value: this.props.currentSpell.range }),
                _react2.default.createElement(_dataRow2.default, { name: "Components", value: this.props.currentSpell.components }),
                _react2.default.createElement(_dataRow2.default, { name: "Ritual", value: this.props.currentSpell.ritual }),
                _react2.default.createElement(_dataRow2.default, { name: "Duration", value: this.props.currentSpell.duration }),
                _react2.default.createElement(_dataRow2.default, { name: "Concentration", value: this.props.currentSpell.concentration }),
                _react2.default.createElement(_dataRow2.default, { name: "Casting Time", value: this.props.currentSpell.casting_time }),
                _react2.default.createElement(_dataRow2.default, { name: "Level", value: this.props.currentSpell.level }),
                _react2.default.createElement(_dataRow2.default, { name: "School", value: this.props.currentSpell.school }),
                _react2.default.createElement(_dataRow2.default, { name: "Class", value: this.props.currentSpell.class })
            );
        }
    }]);

    return SpellContainer;
}(_react2.default.Component);

exports.default = SpellContainer;