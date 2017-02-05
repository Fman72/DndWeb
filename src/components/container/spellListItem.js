import React from 'react';
import SpellContainer from '../presentational/spellContainer';
import {connect} from 'react-redux';
import {removeSpell} from '../../actions/spellActions';
// import Radium from 'radium';
// import styles from '../../styles';


class SpellListItem extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.props.dispatch(removeSpell(this.props.spellIndex));
  }

  render() {
    return (
      <div>
        <SpellContainer currentSpell = {this.props.spell}/>
        <button onClick = {this.handleClick}>Remove Spell</button>
      </div>
    );
  }
}
//SpellListItem = Radium(SpellListItem);

export default connect(null)(SpellListItem)
