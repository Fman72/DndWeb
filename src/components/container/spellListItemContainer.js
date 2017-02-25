import React from 'react';
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
        <SpellListItem removeSpell = {this.removeSpell} toggleMinimization = {this.toggleMinimization} spell = {this.props.spell} filters = {this.props.filters}/>
      );
    }
    else{
      return (
        <SpellListItemHeader isArrowRotated = {true} toggleMinimization = {this.toggleMinimization} removeSpell = {this.removeSpell} name = {this.props.spell.name} />
      );
    }
  }
}

function mapStateToProps(state, ownProps){
  return {
    filters: state.filters
  };
}

export default connect(mapStateToProps)(SpellListItemContainer)
