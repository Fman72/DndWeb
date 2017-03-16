import React from 'react';
import MonsterBoxContainer from './MonsterBoxContainer';
import {connect} from "react-redux";


class MonsterGrid extends React.Component
{
  constructor(props){
    super(props);

  }

  render() {
    if(this.props.monsterList.length > 0){
      let monsterGridItems = [];
      for(let i = 0; i < this.props.monsterList.length; i++){
        monsterGridItems.push(<MonsterBoxContainer monsterIndex = {i} key = {i} monster = {this.props.monsterList[i]}></MonsterBoxContainer>);
      }
      return (<div>
                {monsterGridItems}
              </div>);
    }
    return null;
  }
}

function mapStateToProps(state, ownProps){
  return {
    monsterList: state.monsters.monsterList,
    settings: state.settings
  };
}

export default connect(mapStateToProps)(MonsterGrid);
