import React from 'react';
import {connect} from "react-redux";
import {Row, Col} from 'react-bootstrap';
import MonsterSearchContainer from '../container/monsterSearchContainer';

let MonsterPage = (props) => {
  return (
      <div>
        {/* <Row>
           <Col className = "title-background" xs={12}>
             <SpellPageHeaderContainer/>
           </Col>
         </Row>
        <SettingsModalContainer/>*/}
        <Row id = "spell-page-div" className = "boostrap-row-margin-override">
          <Col id = 'search-container' xs = {12} sm = {3}>
            <MonsterSearchContainer/>
          </Col>
           {/*<Col id = 'spell-list' xs = {12} sm = {9}>
             <SpellList/>
           </Col> */}
        </Row>
        <script src="bundle.js"></script>
      </div>
  );
}

export default MonsterPage;
