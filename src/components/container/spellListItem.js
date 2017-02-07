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
    this.removeSpell = this.removeSpell.bind(this);
    this.toggleMinimization = this.toggleMinimization.bind(this);
    this.state = {minimized: false};
  }

  removeSpell(event){
    this.props.dispatch(removeSpell(this.props.spellIndex));
  }

  toggleMinimization(){
    this.setState({minimized: !(this.state.minimized)});
  }

  render() {
    if(!this.state.minimized){
      return (
        <div onDoubleClick = {this.toggleMinimization}>
            <SpellDiv currentSpell = {this.props.spell}/>
            <button onClick = {this.removeSpell}>Remove Spell</button>
        </div>
      );
    }
    else{
      return (
        <MinimizedSpellDiv onCrossClick = {this.removeSpell} handleDoubleClick = {this.toggleMinimization} name = {this.props.spell.name} />
      );
    }
  }
}
//SpellListItem = Radium(SpellListItem);

export default connect(null)(SpellListItem)
