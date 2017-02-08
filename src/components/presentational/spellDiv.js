import React from "react";
import DataRow from "./dataRow";

//Contains a spell. Will eventually be able to click attributes to expand them so will need state.
function SpellDiv(props){
        return (<div>
            <DataRow name = "Name" value = {props.spell.name}/>
            <DataRow name = "Description" value = {props.spell.desc}/>
            <DataRow name = "Level" value = {props.spell.level}/>
            <DataRow name = "Class" value = {props.spell.class}/>
            <DataRow name = "Range" value = {props.spell.range}/>
            <DataRow name = "Casting Time" value = {props.spell.casting_time}/>
            <DataRow name = "Duration" value = {props.spell.duration}/>
            <DataRow name = "Concentration" value = {props.spell.concentration}/>
            <DataRow name = "School" value = {props.spell.school}/>
            <DataRow name = "Components" value = {props.spell.components}/>
            <DataRow name = "Ritual" value = {props.spell.ritual}/>
        </div>);
}

SpellDiv.propTypes = {
  spell: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    range: React.PropTypes.string,
    components: React.PropTypes.string,
    ritual: React.PropTypes.string,
    duration: React.PropTypes.string,
    concentration: React.PropTypes.string,
    casting_time: React.PropTypes.string,
    level: React.PropTypes.string,
    school: React.PropTypes.string,
    class: React.PropTypes.string
  })
}

export default SpellDiv;
