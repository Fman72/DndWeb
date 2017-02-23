import React from 'react';
import {connect} from "react-redux";
import {Grid, Row} from 'react-bootstrap';
import SpellPageHeaderContainer from '../container/spellPageHeaderContainer';
import FilterSettingsModalContainer from '../container/filterSettingsModalContainer'
import SearchContainer from '../container/searchContainer';
import SpellList from '../container/spellList';


let SpellPage = (props) => {
  return (
    <Grid fluid>
      <SpellPageHeaderContainer/>
      <FilterSettingsModalContainer/>
      <Row id = "spell-page-div">
        <SearchContainer/>
        <SpellList/>
      </Row>
      <script src="bundle.js"></script>
    </Grid>
  );
}

export default SpellPage;
