import React from 'react';
import SpellListItemContainer from './spellListItemContainer';
import {connect} from "react-redux";


class SpellList extends React.Component
{
  constructor(props){
    super(props);
  }


  render() {
    if(this.props.spellList){
      let spellListItems = [];
      for(let i = 0; i < this.props.spellList.length; i++){
        spellListItems.push(<SpellListItemContainer spellIndex = {i} key = {this.props.spellList[i].name} spell = {this.props.spellList[i]}></SpellListItemContainer>);
      }
      return (<div>
                {spellListItems}
              </div>);
    }
    else if(this.props.isFetchingSpellList){
      return (<img id = "loading-image" height = "50" width = "50" src = "images/loading.gif"/>);
    }
    return null;
  }
}

function mapStateToProps(state, ownProps){
  return {
    spellList: state.spells.spellList,
    isFetchingSpellList: state.spells.isFetchingSpellList
  };
}

export default connect(mapStateToProps)(SpellList);
