import React from "react";
import {connect} from 'react-redux';
import {addFilter, removeFilter} from '../../actions/filterActions';
import FilterToggleItem from '../presentational/filterToggleItem';

class FilterSettingsModalContainer extends React.Component{

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
        <div className = "modal" id = "filter-settings-modal-container">
          <FilterToggleItem toggleFilter = {this.toggleFilter} value = "desc" name = "Description"/>
          <FilterToggleItem toggleFilter = {this.toggleFilter} value = "level" name = "Level"/>
          <FilterToggleItem toggleFilter = {this.toggleFilter} value = "class" name = "Class"/>
          <FilterToggleItem toggleFilter = {this.toggleFilter} value = "range" name = "Range"/>
          <FilterToggleItem toggleFilter = {this.toggleFilter} value = "casting_time" name = "Casting Time"/>
          <FilterToggleItem toggleFilter = {this.toggleFilter} value = "duration" name = "Duration"/>
          <FilterToggleItem toggleFilter = {this.toggleFilter} value = "concentration" name = "Concentration"/>
          <FilterToggleItem toggleFilter = {this.toggleFilter} value = "school" name = "School"/>
          <FilterToggleItem toggleFilter = {this.toggleFilter} value = "components" name = "Components"/>
          <FilterToggleItem toggleFilter = {this.toggleFilter} value = "ritual" name = "Ritual"/>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps){
	return {
    filters: state.filters
	}
}

export default connect(mapStateToProps)(FilterSettingsModalContainer);
