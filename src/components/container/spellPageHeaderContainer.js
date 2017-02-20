import React from 'react';
import ReactDOM from 'react-dom';
import FilterSettingsModalContainer from './filterSettingsModalContainer';
import {Col, Row} from 'react-bootstrap';
import ImageButton from '../presentational/imageButton';
import {connect} from 'react-redux';

class SpellPageHeaderContainer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Row>
        <Col id = "page-title" xs={12}>
          <h1 style = {{display: "inline"}}>DND 5e Spell List</h1>
        </Col>
      </Row>
    );
  }
}



export default connect(null)(SpellPageHeaderContainer);
