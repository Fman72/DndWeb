import React from 'react';
import {connect} from "react-redux";
import {Row, Col} from 'react-bootstrap';
import MonsterSearchContainer from '../container/monsterSearchContainer';
import MonsterPageHeaderContainer from '../container/monsterPageHeaderContainer';
import SettingsModalContainer from '../container/settingsModalContainer';
import MonsterGrid from '../container/monsterGrid';

let MonsterPage = (props) => {
  return (
      <div>
        <Row>
           <Col className = "title-background" xs={12}>
             <MonsterPageHeaderContainer/>
           </Col>
         </Row>
        <SettingsModalContainer/>
        <Row id = "monster-page-div" className = "boostrap-row-margin-override">
          <Col id = 'search-container' xs = {12} sm = {3}>
            <MonsterSearchContainer/>
          </Col>
           <Col id = 'monster-grid' xs = {12} sm = {9}>
             <MonsterGrid/>
           </Col>
        </Row>
        <script src="bundle.js"></script>
      </div>
  );
}

export default MonsterPage;
