import React from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux';
import {addFilter, removeFilter} from '../../actions/filterActions';
import FilterToggleItem from '../presentational/filterToggleItem';
import {Modal} from 'react-bootstrap';
import ImageButton from '../presentational/imageButton';
import FilterSettingsModal from '../presentational/filterSettingsModal';

class FilterSettingsModalContainer extends React.Component{

    constructor(props){
      super(props);
      this.toggleFilter = this.toggleFilter.bind(this);
      this.showModal = this.showModal.bind(this);
    }

    toggleFilter(event){
      if(event.target.checked){
        this.props.dispatch(addFilter(event.target.value));
      }
      else{
        this.props.dispatch(removeFilter(event.target.value));
      }
    }

    showModal(event){
      ReactDOM.render(<FilterSettingsModal toggleFilter = {this.toggleFilter} filterState = {this.props.filters}/>, document.getElementById("modal-mount-node"));
    }

    render() {
      return (
        <div id = "modal-mount-node">
          <ImageButton id = "filter-settings-button" imageSrc = {"images/cross.svg"} handleClick = {this.showModal}/>
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
