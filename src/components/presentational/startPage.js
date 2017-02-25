import React from 'react';
import {Row, Col} from 'react-bootstrap';
import SpellPage from './spellPage.js';
import ScrollDiv from './scrollDiv';

let StartPage = (props) => {

  return (
    <div>
      <ScrollDiv scrollHeight = {props.scrollHeight}>
        <div id = "start-div" className = "scroll-div" ref = {props.getRef}>
            <h1 id = "start-heading">What is your name?</h1>
            <input onKeyDown = {props.handleKeyDown} className = "styled-input" id = "start-input" type = "text"/>
        </div>
      </ScrollDiv>
      <ScrollDiv scrollHeight = {props.scrollHeight}>
        <Row>
          <SpellPage />
        </Row>
      </ScrollDiv>
    </div>
  );
}

export default StartPage;
