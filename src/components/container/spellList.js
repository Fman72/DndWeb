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
      return (<div id = 'spell-list' className = "col-xs-12 col-sm-9">
                {spellListItems}
             </div>);
    }
    return null;
  }
}

function mapStateToProps(state, ownProps){
  return {
    spellList: state.spells.spellList
  };
}

export default connect(mapStateToProps)(SpellList);
