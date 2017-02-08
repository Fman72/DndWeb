import React from 'react';
import SpellDiv from '../presentational/spellDiv';
import SpellListItemHeader from '../presentational/spellListItemHeader';
import {connect} from 'react-redux';
import {removeSpell} from '../../actions/spellActions';
import SpellListItem from '../presentational/spellListItem';
// import Radium from 'radium';
// import styles from '../../styles';


class SpellListItemContainer extends React.Component{

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
        <SpellListItem onCrossClick = {this.removeSpell} handleDoubleClick = {this.toggleMinimization} spell = {this.props.spell} />
      );
    }
    else{
      return (
        <SpellListItemHeader onCrossClick = {this.removeSpell} handleDoubleClick = {this.toggleMinimization} name = {this.props.spell.name} />
      );
    }
  }
}
//SpellListItem = Radium(SpellListItem);

export default connect(null)(SpellListItemContainer)
