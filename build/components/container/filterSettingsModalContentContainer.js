'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _filterActions = require('../../actions/filterActions');

var _controlledToggleItem = require('../presentational/controlledToggleItem');

var _controlledToggleItem2 = _interopRequireDefault(_controlledToggleItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterSettingsModalContentContainer = function (_React$Component) {
  _inherits(FilterSettingsModalContentContainer, _React$Component);

  function FilterSettingsModalContentContainer(props) {
    _classCallCheck(this, FilterSettingsModalContentContainer);

    var _this = _possibleConstructorReturn(this, (FilterSettingsModalContentContainer.__proto__ || Object.getPrototypeOf(FilterSettingsModalContentContainer)).call(this, props));

    _this.toggleFilter = _this.toggleFilter.bind(_this);
    return _this;
  }

  _createClass(FilterSettingsModalContentContainer, [{
    key: 'toggleFilter',
    value: function toggleFilter(event) {
      if (event.target.checked) {
        this.props.dispatch((0, _filterActions.addFilter)(event.target.value));
      } else {
        this.props.dispatch((0, _filterActions.removeFilter)(event.target.value));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h5',
          null,
          'Filters'
        ),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("description") > -1, handleChange: this.toggleFilter, value: 'description', name: 'Description' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("level") > -1, handleChange: this.toggleFilter, value: 'level', name: 'Level' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("class") > -1, handleChange: this.toggleFilter, value: 'class', name: 'Class' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("range") > -1, handleChange: this.toggleFilter, value: 'range', name: 'Range' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("casting_time") > -1, handleChange: this.toggleFilter, value: 'casting_time', name: 'Casting Time' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("duration") > -1, handleChange: this.toggleFilter, value: 'duration', name: 'Duration' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("higher_level") > -1, handleChange: this.toggleFilter, value: 'higher_level', name: 'Higher Level' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("concentration") > -1, handleChange: this.toggleFilter, value: 'concentration', name: 'Concentration' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("school") > -1, handleChange: this.toggleFilter, value: 'school', name: 'School' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("components") > -1, handleChange: this.toggleFilter, value: 'components', name: 'Components' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("ritual") > -1, handleChange: this.toggleFilter, value: 'ritual', name: 'Ritual' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("material") > -1, handleChange: this.toggleFilter, value: 'material', name: 'Material' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("page") > -1, handleChange: this.toggleFilter, value: 'page', name: 'Page' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("domains") > -1, handleChange: this.toggleFilter, value: 'domains', name: 'Domains' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("patrons") > -1, handleChange: this.toggleFilter, value: 'patrons', name: 'Patrons' }),
        _react2.default.createElement(_controlledToggleItem2.default, { isChecked: this.props.filters.indexOf("archetype") > -1, handleChange: this.toggleFilter, value: 'archetype', name: 'Archetype' })
      );
    }
  }]);

  return FilterSettingsModalContentContainer;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    filters: state.filters
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(FilterSettingsModalContentContainer);