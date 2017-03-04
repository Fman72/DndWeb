import React from "react";
import {connect} from 'react-redux';
import {addFilter, removeFilter} from '~/actions/filterActions';
import ControlledToggleItem from '../presentational/controlledToggleItem';

class FilterSettingsModalContentContainer extends React.Component{

    constructor(props){
      super(props);
      this.toggleFilter = this.toggleFilter.bind(this);
    }

    toggleFilter(event){
      if(event.target.checked){
        this.props.dispatch(addFilter(event.target.value));
      }
      else{
        this.props.dispatch(removeFilter(event.target.value));
      }
    }

    render() {
      return (
        <div>
          <h5>Filters</h5>
          <ControlledToggleItem isChecked = {this.props.filters["desc"]} handleChange = {this.toggleFilter} value = "desc" name = "Description"/>
          <ControlledToggleItem isChecked = {this.props.filters["level"]} handleChange = {this.toggleFilter} value = "level" name = "Level"/>
          <ControlledToggleItem isChecked = {this.props.filters["class"]} handleChange = {this.toggleFilter} value = "class" name = "Class"/>
          <ControlledToggleItem isChecked = {this.props.filters["range"]} handleChange = {this.toggleFilter} value = "range" name = "Range"/>
          <ControlledToggleItem isChecked = {this.props.filters["casting_time"]} handleChange = {this.toggleFilter} value = "casting_time" name = "Casting Time"/>
          <ControlledToggleItem isChecked = {this.props.filters["duration"]} handleChange = {this.toggleFilter} value = "duration" name = "Duration"/>
          <ControlledToggleItem isChecked = {this.props.filters["concentration"]} handleChange = {this.toggleFilter} value = "concentration" name = "Concentration"/>
          <ControlledToggleItem isChecked = {this.props.filters["school"]} handleChange = {this.toggleFilter} value = "school" name = "School"/>
          <ControlledToggleItem isChecked = {this.props.filters["components"]} handleChange = {this.toggleFilter} value = "components" name = "Components"/>
          <ControlledToggleItem isChecked = {this.props.filters["ritual"]} handleChange = {this.toggleFilter} value = "ritual" name = "Ritual"/>
        </div>
      );
    }

}

function mapStateToProps(state, ownProps){
	return {
    filters: state.filters,
	}
}

export default connect(mapStateToProps)(FilterSettingsModalContentContainer);
