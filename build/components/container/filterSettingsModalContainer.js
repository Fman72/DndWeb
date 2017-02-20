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

var _filterSettingsModal = require("../presentational/filterSettingsModal");

var _filterSettingsModal2 = _interopRequireDefault(_filterSettingsModal);

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
    _this.showModal = _this.showModal.bind(_this);
    return _this;
  }

  _createClass(FilterSettingsModalContainer, [{
    key: "toggleFilter",
    value: function toggleFilter(event) {
      if (event.target.checked) {
        this.props.dispatch((0, _filterActions.addFilter)(event.target.value));
      } else {
        this.props.dispatch((0, _filterActions.removeFilter)(event.target.value));
      }
    }
  }, {
    key: "showModal",
    value: function showModal(event) {
      _reactDom2.default.render(_react2.default.createElement(_filterSettingsModal2.default, { toggleFilter: this.toggleFilter, filterState: this.props.filters }), document.getElementById("modal-mount-node"));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "modal-mount-node" },
        _react2.default.createElement(_imageButton2.default, { id: "filter-settings-button", imageSrc: "images/cross.svg", handleClick: this.showModal })
      );
    }
  }]);

  return FilterSettingsModalContainer;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    filters: state.filters
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(FilterSettingsModalContainer);