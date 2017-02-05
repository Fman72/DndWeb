import React from 'react';
import SpellDiv from '../presentational/spellDiv';
import MinimizedSpellDiv from '../presentational/minimizedSpellDiv';
import {connect} from 'react-redux';
import {removeSpell} from '../../actions/spellActions';
// import Radium from 'radium';
// import styles from '../../styles';


class SpellListItem extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.state = {minimized: false};
  }

  handleClick(event){
    this.props.dispatch(removeSpell(this.props.spellIndex));
  }

  handleDoubleClick(){
    this.setState({minimized: !(this.state.minimized)});
  }

  render() {
    if(!this.state.minimized){
      return (
        <div onDoubleClick = {this.handleDoubleClick}>
            <SpellDiv currentSpell = {this.props.spell}/>
            <button onClick = {this.handleClick}>Remove Spell</button>
        </div>
      );
    }
    else{
      return (
        <MinimizedSpellDiv handleDoubleClick = {this.handleDoubleClick} name = {this.props.spell.name} />
      );
    }
  }
}
//SpellListItem = Radium(SpellListItem);

export default connect(null)(SpellListItem)
