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

var _filterActions = require("../../actions/filterActions");

var _filterToggleItem = require("../presentational/filterToggleItem");

var _filterToggleItem2 = _interopRequireDefault(_filterToggleItem);

var _reactBootstrap = require("react-bootstrap");

var _imageButton = require("../presentational/imageButton");

var _imageButton2 = _interopRequireDefault(_imageButton);

var _styledModal = require("./styledModal");

var _styledModal2 = _interopRequireDefault(_styledModal);

var _modalActions = require("../../actions/modalActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterSettingsModalContainer = function (_React$Component) {
  _inherits(FilterSettingsModalContainer, _React$Component);

  function FilterSettingsModalContainer(props) {
    _classCallCheck(this, FilterSettingsModalContainer);

    var _this = _possibleConstructorReturn(this, (FilterSettingsModalContainer.__proto__ || Object.getPrototypeOf(FilterSettingsModalContainer)).call(this, props));

    _this.toggleFilter = _this.toggleFilter.bind(_this);
    _this.onHide = _this.onHide.bind(_this);
    return _this;
  }

  _createClass(FilterSettingsModalContainer, [{
    key: "toggleFilter",
    value: function toggleFilter(event) {
      console.log(event.target.checked);
      if (event.target.checked) {
        this.props.dispatch((0, _filterActions.addFilter)(event.target.value));
        console.log("Added " + event.target.value);
      } else {
        this.props.dispatch((0, _filterActions.removeFilter)(event.target.value));
      }
    }
  }, {
    key: "onHide",
    value: function onHide() {
      this.props.dispatch((0, _modalActions.hideModal)("filterSettingsModal"));
    }
  }, {
    key: "render",
    value: function render() {
      var modalTitle = "Filter Settings";
      var bodyContent = _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: this.props.filters["desc"], toggleFilter: this.toggleFilter, value: "desc", name: "Description" }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: this.props.filters["level"], toggleFilter: this.toggleFilter, value: "level", name: "Level" }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: this.props.filters["class"], toggleFilter: this.toggleFilter, value: "class", name: "Class" }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: this.props.filters["range"], toggleFilter: this.toggleFilter, value: "range", name: "Range" }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: this.props.filters["casting_time"], toggleFilter: this.toggleFilter, value: "casting_time", name: "Casting Time" }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: this.props.filters["duration"], toggleFilter: this.toggleFilter, value: "duration", name: "Duration" }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: this.props.filters["concentration"], toggleFilter: this.toggleFilter, value: "concentration", name: "Concentration" }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: this.props.filters["school"], toggleFilter: this.toggleFilter, value: "school", name: "School" }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: this.props.filters["components"], toggleFilter: this.toggleFilter, value: "components", name: "Components" }),
        _react2.default.createElement(_filterToggleItem2.default, { isChecked: this.props.filters["ritual"], toggleFilter: this.toggleFilter, value: "ritual", name: "Ritual" })
      );
      return _react2.default.createElement(_styledModal2.default, { handleHide: this.onHide, show: this.props.modals.filterSettingsModal, modalTitle: modalTitle, bodyContent: bodyContent });
    }
  }]);

  return FilterSettingsModalContainer;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    filters: state.filters.filters,
    modals: state.modals
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(FilterSettingsModalContainer);