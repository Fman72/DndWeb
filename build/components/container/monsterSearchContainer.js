"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require("react-redux");

var _monsterActions = require("../../actions/monsterActions");

var _imageButton = require("../presentational/imageButton");

var _imageButton2 = _interopRequireDefault(_imageButton);

var _searchContainer = require("../presentational/searchContainer");

var _searchContainer2 = _interopRequireDefault(_searchContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Search container.
var SpellSearchContainer = function (_React$Component) {
    _inherits(SpellSearchContainer, _React$Component);

    function SpellSearchContainer(props) {
        _classCallCheck(this, SpellSearchContainer);

        var _this = _possibleConstructorReturn(this, (SpellSearchContainer.__proto__ || Object.getPrototypeOf(SpellSearchContainer)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.addMonster = _this.addMonster.bind(_this);
        _this.state = { currentText: "" };
        return _this;
    }

    _createClass(SpellSearchContainer, [{
        key: "handleChange",
        value: function handleChange(event) {
            this.setState({ currentText: event.target.value });
            this.props.dispatch((0, _monsterActions.searchMonster)(this.state.currentText));
        }
    }, {
        key: "addMonster",
        value: function addMonster(event) {
            this.props.dispatch((0, _monsterActions.addMonster)(this.props.currentMonster));
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_searchContainer2.default, { positionedProps: ['name'], onFound: this.addMonster, handleChange: this.handleChange, currentText: this.state.currentText, foundItem: this.props.currentMonster, hiddenProps: ['actions', 'special_abilities', 'legendary_actions'] });
        }
    }]);

    return SpellSearchContainer;
}(_react2.default.Component);
//SearchContainer = Radium(SearchContainer);


function mapStateToProps(state, ownProps) {
    return {
        currentMonster: state.monsters.currentMonster
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SpellSearchContainer);