import React from 'react';
import {Col} from 'react-bootstrap';
import DataRow from '../presentational/dataRow'

class MonsterBoxContainer extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
      return (
        <Col xs = {12} sm = {6} md = {4} lg = {3} >
          <div className = 'monster-box'>
            <h3>{this.props.monster.name}</h3>
            <div className = 'monster-box-section'>
              <hr/>
              <DataRow name = {"Str"} value = {this.props.monster.strength}/>
              <DataRow name = {"Dex"} value = {this.props.monster.dexterity}/>
              <DataRow name = {"Con"} value = {this.props.monster.constitution}/>
              <br/>
              <DataRow name = {"Int"} value = {this.props.monster.intelligence}/>
              <DataRow name = {"Wis"} value = {this.props.monster.wisdom}/>
              <DataRow name = {"Cha"} value = {this.props.monster.charisma}/>
              <hr/>
            </div>
          </div>
        </Col>
      );
    }

}

export default MonsterBoxContainer;
