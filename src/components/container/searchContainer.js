import React from "react";
import ReactDOM from "react-dom";
import SpellDiv from "../presentational/spellDiv";
import AddSpellButton from "./addSpellButton"
import {connect} from "react-redux";
import {searchSpell, changeSearchedSpellText} from "../../actions/spellActions"
// import Radium from 'radium';
// import styles from '../../styles.js';

//Search container.
class SearchContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {currentText: ""};
    }

    handleChange(event){
        this.setState({currentText: event.target.value});
        this.props.dispatch(searchSpell(this.state.currentText));
    }

    handleClick(event){
      this.props.dispatch(addSpell(this.props.currentSpell));
    }

    render () {
        return (
        <div id = 'search-container' className = "col-xs-12 col-sm-3">
            <input value = {this.state.currentText} onChange = {this.handleChange} />
            {this.props.currentSpell && <SpellDiv currentSpell = {this.props.currentSpell}/>}
            {this.props.currentSpell && <AddSpellButton currentSpell = {this.props.currentSpell}/>}
        </div>
        );
    }
}
//SearchContainer = Radium(SearchContainer);



function mapStateToProps(state, ownProps){
	return {
    currentSpell: state.spells.currentSpell
	}
}

export default connect(mapStateToProps)(SearchContainer);
