import React from "react";
import {connect} from 'react-redux';
import {addFilter, removeFilter} from '../../actions/filterActions';
import FilterToggleItem from '../presentational/filterToggleItem';
import StyledModal from './styledModal';
import {hideModal} from '../../actions/modalActions';

class FilterSettingsModalContainer extends React.Component{

    constructor(props){
      super(props);
      this.toggleFilter = this.toggleFilter.bind(this);
      this.onHide = this.onHide.bind(this);
    }

    toggleFilter(event){
      console.log(event.target.checked);
      if(event.target.checked){
        this.props.dispatch(addFilter(event.target.value));
        console.log("Added " + event.target.value);
      }
      else{
        this.props.dispatch(removeFilter(event.target.value));
      }
    }

    onHide(){
      this.props.dispatch(hideModal("filterSettingsModal"));
    }

    render() {
      let modalTitle = "Filter Settings";
      let bodyContent = (
        <div>
          <FilterToggleItem isChecked = {this.props.filters["desc"]} toggleFilter = {this.toggleFilter} value = "desc" name = "Description"/>
          <FilterToggleItem isChecked = {this.props.filters["level"]} toggleFilter = {this.toggleFilter} value = "level" name = "Level"/>
          <FilterToggleItem isChecked = {this.props.filters["class"]} toggleFilter = {this.toggleFilter} value = "class" name = "Class"/>
          <FilterToggleItem isChecked = {this.props.filters["range"]} toggleFilter = {this.toggleFilter} value = "range" name = "Range"/>
          <FilterToggleItem isChecked = {this.props.filters["casting_time"]} toggleFilter = {this.toggleFilter} value = "casting_time" name = "Casting Time"/>
          <FilterToggleItem isChecked = {this.props.filters["duration"]} toggleFilter = {this.toggleFilter} value = "duration" name = "Duration"/>
          <FilterToggleItem isChecked = {this.props.filters["concentration"]} toggleFilter = {this.toggleFilter} value = "concentration" name = "Concentration"/>
          <FilterToggleItem isChecked = {this.props.filters["school"]} toggleFilter = {this.toggleFilter} value = "school" name = "School"/>
          <FilterToggleItem isChecked = {this.props.filters["components"]} toggleFilter = {this.toggleFilter} value = "components" name = "Components"/>
          <FilterToggleItem isChecked = {this.props.filters["ritual"]} toggleFilter = {this.toggleFilter} value = "ritual" name = "Ritual"/>
        </div>);
      return (<StyledModal handleHide = {this.onHide} show = {this.props.modals.filterSettingsModal} modalTitle = {modalTitle} bodyContent = {bodyContent}/>);
    }

}

function mapStateToProps(state, ownProps){
	return {
    filters: state.filters.filters,
    modals: state.modals
	}
}

export default connect(mapStateToProps)(FilterSettingsModalContainer);
