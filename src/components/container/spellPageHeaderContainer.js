import React from 'react';
import ImageButton from '../presentational/imageButton';
import {connect} from 'react-redux';
import {showModal} from '~/actions/modalActions';
import {attemptStoreSpellList} from '~/actions/spellActions';
import {initialCapsString} from '~/util';

class SpellPageHeaderContainer extends React.Component{
  constructor(props){
    super(props);
    this.showFilterSettingsModal = this.showFilterSettingsModal.bind(this);
    this.storeSpellList = this.storeSpellList.bind(this);
  }

  showFilterSettingsModal(){
    this.props.dispatch(showModal("filterSettingsModal"));
  }

  storeSpellList(){
    this.props.dispatch(attemptStoreSpellList(this.props.spells.spellList, this.props.user.username));
  }

  render(){
    let storeButtonImageSrc = "";
    if(this.props.spells.isStoringSpellList){
      storeButtonImageSrc = "loading.gif";
    }
    return (
      <div id = "page-title">
          <h1 style = {{display: "inline", marginRight: "auto", marginLeft: "15px"}}>Welcome to the DND 5e Spell List {initialCapsString(this.props.user.username)}</h1>
          <ImageButton imageSrc = {"base_arrow"} handleClick = {this.storeSpellList}/>
          <ImageButton imageSrc = {"cog"} handleClick = {this.showFilterSettingsModal}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    user: state.user,
    spells: state.spells
  };
}

export default connect(mapStateToProps)(SpellPageHeaderContainer);
