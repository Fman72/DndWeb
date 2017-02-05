import React from 'react';
import ReactDOM from 'react-dom';
import {addSpell} from '../../actions/spellActions';
import {connect} from 'react-redux';

class AddSpellButton extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.props.dispatch(addSpell(this.props.currentSpell));
  }

  render() {
    return (
      <button onClick = {this.handleClick}>Add Spell</button>
    );
  }
}

function mapStateToProps(state, ownProps)
{
  return {
    currentSpell: state.spells.currentSpell,
  };
}

export default connect(mapStateToProps)(AddSpellButton);
