import React from 'react';
import SpellContainer from '../presentational/spellContainer';
import {connect} from "react-redux";


class SpellList extends React.Component
{
  constructor(props){
    super(props);
  }


  render() {
    if(this.props.spellList){
      let spellContainers = [];
      for(let i = 0; i < this.props.spellList.length; i++){
        spellContainers.push(<SpellContainer currentSpell = {this.props.spellList[i]}></SpellContainer>);
      }
      return <div>{spellContainers}</div>;
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
