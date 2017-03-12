import React from "react";
import DataDiv from "./dataDiv";

function SpellDiv(props){
  let spellCopy = Object.assign({}, props.spell);
  if(spellCopy.level == 0){
      spellCopy.level = "Cantrip";
  }
  return (<div>
            <DataDiv objectToDisplay = {spellCopy} hiddenProps = {props.filters} positionedProps = {['name', 'description']}/>
          </div>)
}

export default SpellDiv;
