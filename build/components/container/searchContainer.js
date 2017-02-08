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

var _addSpellButton = require("./addSpellButton");

var _addSpellButton2 = _interopRequireDefault(_addSpellButton);

var _reactRedux = require("react-redux");

var _spellActions = require("../../actions/spellActions");

var _plusImageButton = require("../presentational/plusImageButton");

var _plusImageButton2 = _interopRequireDefault(_plusImageButton);

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

        _this.handleChange = _this.handleChange.bind(_this);
        _this.addSpell = _this.addSpell.bind(_this);
        _this.state = { currentText: "" };
        return _this;
    }

    _createClass(SearchContainer, [{
        key: "handleChange",
        value: function handleChange(event) {
            this.setState({ currentText: event.target.value });
            this.props.dispatch((0, _spellActions.searchSpell)(this.state.currentText));
        }
    }, {
        key: "addSpell",
        value: function addSpell(event) {
            this.props.dispatch((0, _spellActions.addSpell)(this.props.currentSpell));
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "search-container", className: "col-xs-12 col-sm-3" },
                _react2.default.createElement("input", { type: "text", value: this.state.currentText, onChange: this.handleChange }),
                this.props.currentSpell && _react2.default.createElement(_plusImageButton2.default, { onPlusClick: this.addSpell }),
                this.props.currentSpell && _react2.default.createElement(_spellDiv2.default, { spell: this.props.currentSpell })
            );
        }
    }]);

    return SearchContainer;
}(_react2.default.Component);
//SearchContainer = Radium(SearchContainer);


function mapStateToProps(state, ownProps) {
    return {
        currentSpell: state.spells.currentSpell
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SearchContainer);