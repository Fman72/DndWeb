import React from 'react';
import SearchContainer from './searchContainer';
import SpellList from './spellList';
import {connect} from "react-redux";
import FilterSettingsModalContainer from './FilterSettingsModalContainer.js';



class SpellPage extends React.Component
{
  constructor(props){
      super(props);
  }

  render()
  {
    return (
      <div id = "spell-page-div">
        <SearchContainer/>
        <SpellList/>
        <FilterSettingsModalContainer/>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps){
	return {

	}
}

export default connect(mapStateToProps)(SpellPage);
