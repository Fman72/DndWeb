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
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("description") > -1} handleChange = {this.toggleFilter} value = "description" name = "Description"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("level") > -1} handleChange = {this.toggleFilter} value = "level" name = "Level"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("class") > -1} handleChange = {this.toggleFilter} value = "class" name = "Class"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("range") > -1} handleChange = {this.toggleFilter} value = "range" name = "Range"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("casting_time") > -1} handleChange = {this.toggleFilter} value = "casting_time" name = "Casting Time"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("duration") > -1} handleChange = {this.toggleFilter} value = "duration" name = "Duration"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("higher_level") > -1} handleChange = {this.toggleFilter} value = "higher_level" name = "Higher Level"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("concentration") > -1} handleChange = {this.toggleFilter} value = "concentration" name = "Concentration"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("school") > -1} handleChange = {this.toggleFilter} value = "school" name = "School"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("components") > -1} handleChange = {this.toggleFilter} value = "components" name = "Components"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("ritual") > -1} handleChange = {this.toggleFilter} value = "ritual" name = "Ritual"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("material") > -1} handleChange = {this.toggleFilter} value = "material" name = "Material"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("page") > -1} handleChange = {this.toggleFilter} value = "page" name = "Page"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("domains") > -1} handleChange = {this.toggleFilter} value = "domains" name = "Domains"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("patrons") > -1} handleChange = {this.toggleFilter} value = "patrons" name = "Patrons"/>
          <ControlledToggleItem isChecked = {this.props.filters.indexOf("archetype") > -1} handleChange = {this.toggleFilter} value = "archetype" name = "Archetype"/>
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
