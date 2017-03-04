import React from 'react';
import FilterSettingsModalContentContainer from './filterSettingsModalContentContainer';
import GeneralSettingsModalContentContainer from './generalSettingsModalContentContainer';
import StyledModal from '../presentational/styledModal';
import {connect} from 'react-redux';
import {hideModal} from '~/actions/modalActions';

class SettingsModalContainer extends React.Component{

  constructor(props){
    super(props);
    this.onHide = this.onHide.bind(this);
  }

  onHide(){
    this.props.dispatch(hideModal("settingsModal"));
  }

  render() {
    return (
      <StyledModal show = {this.props.modals.settingsModal} title = {"Settings"} handleHide = {this.onHide}>
        <GeneralSettingsModalContentContainer/>
        <hr/>
        <FilterSettingsModalContentContainer/>
      </StyledModal>
    );
  }
}

function mapStateToProps(state, ownProps){
	return {
    modals: state.modals
	}
}

export default connect(mapStateToProps)(SettingsModalContainer);
