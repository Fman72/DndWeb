import React from 'react';
import {connect} from 'react-redux';
import {showModal} from '~/actions/modalActions';
import {attemptStoreSpellList} from '~/actions/spellActions';
import PageHeader from '../presentational/pageHeader';
import ImageButton from '../presentational/imageButton';


class MonsterPageHeaderContainer extends React.Component{
  constructor(props){
    super(props);
    this.showSettingsModal = this.showSettingsModal.bind(this);
  }

  showSettingsModal(){
    this.props.dispatch(showModal("settingsModal"));
  }

  render(){
    let buttons = (<div>
                   </div>);
    return (<PageHeader titleText = {"Welcome to the DND 5e Monster Manager "} user = {this.props.user.username} buttons = {buttons}></PageHeader>);
  }
}

function mapStateToProps(state, ownProps){
  return {
    user: state.user,
    spells: state.spells
  };
}

export default connect(mapStateToProps)(MonsterPageHeaderContainer);
