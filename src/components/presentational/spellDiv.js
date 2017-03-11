import React from "react";
import DataDiv from "./dataDiv";

function SpellDiv(props){
  return (<div>
            <DataDiv objectToDisplay = {props.spell} hiddenProps = {props.filters} positionedProps = {['name', 'description']}/>
          </div>)
}

export default SpellDiv;
