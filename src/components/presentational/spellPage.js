import React from 'react';
import {connect} from "react-redux";
import {Row, Col} from 'react-bootstrap';
import SpellPageHeaderContainer from '../container/spellPageHeaderContainer';
import FilterSettingsModalContainer from '../container/filterSettingsModalContainer'
import SearchContainer from '../container/searchContainer';
import SpellList from '../container/spellList';


let SpellPage = (props) => {
  return (
      <div>
        <Row>
          <Col className = "title-background" xs={12}>
            <SpellPageHeaderContainer/>
          </Col>
        </Row>
        <FilterSettingsModalContainer/>
        <Row id = "spell-page-div" className = "boostrap-row-margin-override">
          <Col id = 'search-container' xs = {12} sm = {3}>
            <SearchContainer/>
          </Col>
          <Col id = 'spell-list' xs = {12} sm = {9}>
            <SpellList/>
          </Col>
        </Row>
        <script src="bundle.js"></script>
      </div>
  );
}

export default SpellPage;
