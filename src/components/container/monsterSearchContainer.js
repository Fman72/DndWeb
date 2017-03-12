import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {searchMonster, addMonster} from "~/actions/monsterActions"
import ImageButton from '../presentational/imageButton';
import SearchContainer from '../presentational/searchContainer';

//Search container.
class SpellSearchContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addMonster = this.addMonster.bind(this);
        this.state = {currentText: ""};
    }

    handleChange(event){
        this.setState({currentText: event.target.value});
        this.props.dispatch(searchMonster(this.state.currentText));
    }

    addMonster(event){
      this.props.dispatch(addMonster(this.props.currentMonster));
    }

    render () {
        return (
          <SearchContainer positionedProps = {['name']} onFound = {this.addMonster} handleChange = {this.handleChange} currentText = {this.state.currentText} foundItem = {this.props.currentMonster} hiddenProps = {['actions', 'special_abilities', 'legendary_actions']}/>
        );
    }
}
//SearchContainer = Radium(SearchContainer);



function mapStateToProps(state, ownProps){
	return {
    currentMonster: state.monsters.currentMonster
	}
}

export default connect(mapStateToProps)(SpellSearchContainer);
