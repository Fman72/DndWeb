import React from 'react';
import SpellDiv from './spellDiv';
import SpellListItemHeader from './spellListItemHeader';

let SpellListItem = (props) =>{
  return(
    <div className = 'spell-list-item' onDoubleClick = {props.handleDoubleClick}>
        <SpellListItemHeader removeSpell = {props.removeSpell} toggleMinimization = {props.toggleMinimization} name = {props.spell.name}/>
        <SpellDiv objectToDisplay = {props.spell} hiddenProps = {props.filters}/>
    </div>
  );
}

export default SpellListItem;
