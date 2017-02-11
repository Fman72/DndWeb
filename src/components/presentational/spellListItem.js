import React from 'react';
import SpellDiv from './spellDiv';
import CrossImageButton from './crossImageButton';
import SpellListItemHeader from './spellListItemHeader';

let SpellListItem = (props) =>{
  return(
    <div className = 'spell-list-item' onDoubleClick = {props.handleDoubleClick}>
        <SpellListItemHeader removeSpell = {props.removeSpell} toggleMinimization = {props.toggleMinimization} name = {props.spell.name}/>
        <SpellDiv spell = {props.spell}/>
    </div>
  );
}

export default SpellListItem;
