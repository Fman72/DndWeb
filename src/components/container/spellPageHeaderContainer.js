import React from 'react';
import ReactDOM from 'react-dom';
import FilterSettingsModalContainer from './filterSettingsModalContainer';
import {Col, Row} from 'react-bootstrap';
import ImageButton from '../presentational/imageButton';
import {connect} from 'react-redux';
import {showModal} from '../../actions/modalActions';

class SpellPageHeaderContainer extends React.Component{
  constructor(props){
    super(props);
    this.showFilterSettingsModal = this.showFilterSettingsModal.bind(this);
  }

  showFilterSettingsModal(){
    this.props.dispatch(showModal("filterSettingsModal"));
  }

  render(){
    return (
      <Row>
        <Col id = "page-title" xs={12}>
          <h1 style = {{display: "inline", marginRight: "auto"}}>DND 5e Spell List</h1>
          <ImageButton imageSrc = {"cog"} handleClick = {this.showFilterSettingsModal}/>
        </Col>
      </Row>
    );
  }
}



export default connect(null)(SpellPageHeaderContainer);
