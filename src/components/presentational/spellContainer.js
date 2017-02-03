import React from "react";
import DataRow from "./dataRow";

//Contains a spell. Will eventually be able to click attributes to expand them so will need state.
function SpellContainer(props){
        return (<div>
            <DataRow name = "Name" value = {props.currentSpell.name}/>
            <DataRow name = "Description" value = {props.currentSpell.desc}/>
            <DataRow name = "Range" value = {props.currentSpell.range}/>
            <DataRow name = "Components" value = {props.currentSpell.components}/>
            <DataRow name = "Ritual" value = {props.currentSpell.ritual}/>
            <DataRow name = "Duration" value = {props.currentSpell.duration}/>
            <DataRow name = "Concentration" value = {props.currentSpell.concentration}/>
            <DataRow name = "Casting Time" value = {props.currentSpell.casting_time}/>
            <DataRow name = "Level" value = {props.currentSpell.level}/>
            <DataRow name = "School" value = {props.currentSpell.school}/>
            <DataRow name = "Class" value = {props.currentSpell.class}/>
        </div>);
}

export default SpellContainer;
