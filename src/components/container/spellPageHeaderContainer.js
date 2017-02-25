import React from 'react';
import ImageButton from '../presentational/imageButton';
import {connect} from 'react-redux';
import {showModal} from '../../actions/modalActions';
import {storeSpellBook} from '../../actions/spellActions';

class SpellPageHeaderContainer extends React.Component{
  constructor(props){
    super(props);
    this.showFilterSettingsModal = this.showFilterSettingsModal.bind(this);
    this.storeSpellBook = this.storeSpellBook.bind(this);
  }

  showFilterSettingsModal(){
    this.props.dispatch(showModal("filterSettingsModal"));
  }

  storeSpellBook(){
    this.props.dispatch(storeSpellBook(this.props.user.username));
  }

  render(){
    return (
      <div id = "page-title">
          <h1 style = {{display: "inline", marginRight: "auto"}}>Welcome to the DND 5e Spell List {this.props.user.username}</h1>
          <ImageButton imageSrc = {"cog"} handleClick = {this.storeSpellBook}/>
          <ImageButton imageSrc = {"cog"} handleClick = {this.showFilterSettingsModal}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(SpellPageHeaderContainer);
