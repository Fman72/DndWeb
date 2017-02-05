import React from 'react';
import SpellListItem from './spellListItem';
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
        spellListItems.push(<SpellListItem spellIndex = {i} key = {this.props.spellList[i].name} spell = {this.props.spellList[i]}></SpellListItem>);
      }
      return (<div id = 'spell-list'>
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
