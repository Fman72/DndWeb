"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _spellDiv = require("../presentational/spellDiv");

var _spellDiv2 = _interopRequireDefault(_spellDiv);

var _imageButton = require("../presentational/imageButton");

var _imageButton2 = _interopRequireDefault(_imageButton);

var _dataDiv = require("../presentational/dataDiv");

var _dataDiv2 = _interopRequireDefault(_dataDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Search container.
var SearchContainer = function (_React$Component) {
    _inherits(SearchContainer, _React$Component);

    function SearchContainer(props) {
        _classCallCheck(this, SearchContainer);

        var _this = _possibleConstructorReturn(this, (SearchContainer.__proto__ || Object.getPrototypeOf(SearchContainer)).call(this, props));

        _this.onKeyUp = _this.onKeyUp.bind(_this);
        return _this;
    }

    _createClass(SearchContainer, [{
        key: "onKeyUp",
        value: function onKeyUp(event) {
            var keycode = event.keyCode ? event.keyCode : event.which;
            if (keycode === 13) {
                this.props.onFound();
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { id: "search-input" },
                    _react2.default.createElement("input", { className: "styled-input", type: "text", onKeyUp: this.onKeyUp, value: this.props.currentText, onChange: this.props.handleChange }),
                    this.props.foundItem && _react2.default.createElement(_imageButton2.default, { imageSrc: "plus", handleClick: this.props.onFound })
                ),
                this.props.foundItem && _react2.default.createElement(_dataDiv2.default, { positionedProps: this.props.positionedProps, hiddenProps: this.props.hiddenProps, objectToDisplay: this.props.foundItem })
            );
        }
    }]);

    return SearchContainer;
}(_react2.default.Component);

exports.default = SearchContainer;