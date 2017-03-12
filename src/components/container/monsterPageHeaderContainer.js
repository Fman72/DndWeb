import React from 'react';
import {connect} from 'react-redux';
import {showModal} from '~/actions/modalActions';
import {attemptStoreSpellList} from '~/actions/spellActions';
import PageHeader from '../presentational/pageHeader';
import ImageButton from '../presentational/imageButton';

class SpellPageHeaderContainer extends React.Component{
  constructor(props){
    super(props);
    this.showSettingsModal = this.showSettingsModal.bind(this);
    this.storeSpellList = this.storeSpellList.bind(this);
  }

  showSettingsModal(){
    this.props.dispatch(showModal("settingsModal"));
  }

  storeSpellList(){
    this.props.dispatch(attemptStoreSpellList(this.props.spells.spellList, this.props.user.username));
  }

  render(){
    let buttons = (<div>
                     <ImageButton imageSrc = {"base_arrow"} handleClick = {this.storeSpellList}/>
                     <ImageButton imageSrc = {"cog"} handleClick = {this.showSettingsModal}/>
                   </div>);
    return (<PageHeader username = {this.props.user.username} buttons = {buttons}></PageHeader>);
  }
}

function mapStateToProps(state, ownProps){
  return {
    user: state.user,
    spells: state.spells
  };
}

export default connect(mapStateToProps)(SpellPageHeaderContainer);
