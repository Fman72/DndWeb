import React from 'react';
import {Col, Row} from 'react-bootstrap';
import DataRow from '../presentational/dataRow'
import ImageTextOverlay from '../presentational/ImageTextOverlay';


class MonsterBoxContainer extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
      return (
        <Col xs = {12} sm = {6} md = {4} lg = {3} >
          <div className = 'monster-box'>
            <h3>{this.props.monster.name}</h3>
            <div className = "monster-box-section">
              <Row>
                <Col xs = {4}>
                </Col>
                <Col xs = {4}>
                  <ImageTextOverlay image = {'heart.svg'} text = {this.props.monster.hit_points}/>
                </Col>
                <Col xs = {4}>
                  <ImageTextOverlay image = {'shield.svg'} text = {this.props.monster.armor_class}/>
                </Col>
              </Row>
            </div>
            <div className = "monster-box-section">
              <div className = "flex-div stat-div">
                <DataRow name = {"Str"} value = {this.props.monster.strength}/>
                <DataRow name = {"Dex"} value = {this.props.monster.dexterity}/>
                <DataRow name = {"Con"} value = {this.props.monster.constitution}/>
              </div>
              <div className = "flex-div stat-div">
                <DataRow name = {"Int"} value = {this.props.monster.intelligence}/>
                <DataRow name = {"Wis"} value = {this.props.monster.wisdom}/>
                <DataRow name = {"Cha"} value = {this.props.monster.charisma}/>
              </div>
            </div>
          </div>
        </Col>
      );
    }

}

export default MonsterBoxContainer;
