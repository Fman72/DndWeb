import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {attemptAddSpell, searchSpell} from "~/actions/spellActions"
import ImageButton from '../presentational/imageButton';
import SearchContainer from '../presentational/searchContainer';

//Search container.
class SpellSearchContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addSpell = this.addSpell.bind(this);
        this.state = {currentText: ""};
    }

    handleChange(event){
        this.setState({currentText: event.target.value});
        this.props.dispatch(searchSpell(this.state.currentText));
        console.log("Change");
    }

    addSpell(event){
      this.props.dispatch(attemptAddSpell(this.props.currentSpell));
    }

    render () {
        return (
          <SearchContainer positionedProps = {['name', 'description']} hiddenProps = {['page']} onFound = {this.addSpell} handleChange = {this.handleChange} currentText = {this.state.currentText} foundItem = {this.props.currentSpell}/>
        );
    }
}
//SearchContainer = Radium(SearchContainer);



function mapStateToProps(state, ownProps){
	return {
    currentSpell: state.spells.currentSpell
	}
}

export default connect(mapStateToProps)(SpellSearchContainer);
