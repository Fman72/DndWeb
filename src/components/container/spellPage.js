import React from 'react';
import SearchContainer from './searchContainer';
import SpellList from './spellList';
import {connect} from "react-redux";
import {Grid, Row} from 'react-bootstrap';
import SpellPageHeaderContainer from './spellPageHeaderContainer';
import FilterSettingsModalContainer from './filterSettingsModalContainer'



class SpellPage extends React.Component
{
  constructor(props){
      super(props);
  }

  render()
  {
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

}

function mapStateToProps(state, ownProps){
	return {

	}
}

export default connect(mapStateToProps)(SpellPage);
