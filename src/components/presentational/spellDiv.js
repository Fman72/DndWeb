import React from "react";
import DataRow from "./dataRow";

//Contains a spell. Will eventually be able to click attributes to expand them so will need state.
function SpellDiv(props){
      console.log(JSON.stringify(props.filters));
        return (<div>
            <DataRow name = "Name" value = {props.spell.name}/>
            {!props.filters.desc && <DataRow name = "Description" value = {props.spell.desc}/>}
            {!props.filters.level && <DataRow name = "Level" value = {props.spell.level}/>}
            {!props.filters.class && <DataRow name = "Class" value = {props.spell.class}/>}
            {!props.filters.range && <DataRow name = "Range" value = {props.spell.range}/>}
            {!props.filters.casting_time && <DataRow name = "Casting Time" value = {props.spell.casting_time}/>}
            {!props.filters.duration && <DataRow name = "Duration" value = {props.spell.duration}/>}
            {!props.filters.concentration && <DataRow name = "Concentration" value = {props.spell.concentration}/>}
            {!props.filters.school && <DataRow name = "School" value = {props.spell.school}/>}
            {!props.filters.components && <DataRow name = "Components" value = {props.spell.components}/>}
            {!props.filters.ritual && <DataRow name = "Ritual" value = {props.spell.ritual}/>}
        </div>);
}

SpellDiv.propTypes = {
  spell: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
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

SpellDiv.defaultProps = {
  filters: {}
};

export default SpellDiv;
