import React from 'react';
import SpellListItemContainer from './spellListItemContainer';
import SpellListLevelItemGroup from '../presentational/spellListLevelItemGroup';
import {connect} from "react-redux";


class SpellList extends React.Component
{
  constructor(props){
    super(props);

  }

  render() {
    if(this.props.spellList.length > 0){
      if(this.props.settings.orderSpellsByLevel){
        let spellListItemsGroupedByLevel = [[], [], [], [], [], [], [], [], [], []]; //Is this retarded??
        for(let i = 0; i < this.props.spellList.length; i++){
            //Add spell.
            spellListItemsGroupedByLevel[this.props.spellList[i].level].push(<SpellListItemContainer spellIndex = {i} key = {this.props.spellList[i].name} spell = {this.props.spellList[i]}></SpellListItemContainer>);
        }
        let spellListLevelItemGroups = [];

        for (let i = 0; i < spellListItemsGroupedByLevel.length; i++){
          //If spells at this level.
          if(spellListItemsGroupedByLevel[i]){
            spellListLevelItemGroups.push(<SpellListLevelItemGroup key = {i} level = {i}>{spellListItemsGroupedByLevel[i]}</SpellListLevelItemGroup>);
          }
        }
        return (<div>
                  {spellListLevelItemGroups}
                </div>);
      }
      else{
        let spellListItems = [];
        for(let i = 0; i < this.props.spellList.length; i++){
          spellListItems.push(<SpellListItemContainer spellIndex = {i} key = {this.props.spellList[i].name} spell = {this.props.spellList[i]}></SpellListItemContainer>);
        }
        return (<div>
                  {spellListItems}
                </div>);
      }
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
    isFetchingSpellList: state.spells.isFetchingSpellList,
    settings: state.settings
  };
}

export default connect(mapStateToProps)(SpellList);
