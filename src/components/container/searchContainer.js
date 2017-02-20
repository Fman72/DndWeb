import React from "react";
import ReactDOM from "react-dom";
import SpellDiv from "../presentational/spellDiv";
import AddSpellButton from "./addSpellButton"
import {connect} from "react-redux";
import {addSpell, searchSpell, changeSearchedSpellText} from "../../actions/spellActions"
import PlusImageButton from '../presentational/plusImageButton';
import {Col} from 'react-bootstrap';

//Search container.
class SearchContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addSpell = this.addSpell.bind(this);
        this.addSpellOnEnter = this.addSpellOnEnter.bind(this);
        this.state = {currentText: ""};
    }

    handleChange(event){
        this.setState({currentText: event.target.value});
        this.props.dispatch(searchSpell(this.state.currentText));
        console.log("Change");
    }

    addSpell(event){
      this.props.dispatch(addSpell(this.props.currentSpell));
    }

    addSpellOnEnter(event){
      let keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode === 13){
        this.addSpell();
      }
    }

    render () {
        return (
        <Col id = 'search-container' xs = {12} sm = {3}>
            <input type = "text" onKeyUp = {this.addSpellOnEnter} value = {this.state.currentText} onChange = {this.handleChange} />
            {this.props.currentSpell && <PlusImageButton onPlusClick = {this.addSpell}/>}
            {this.props.currentSpell && <SpellDiv spell = {this.props.currentSpell}/>}
        </Col>
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
