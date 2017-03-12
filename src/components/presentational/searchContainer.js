import React from "react";
import ReactDOM from "react-dom";
import SpellDiv from "../presentational/spellDiv";
import ImageButton from '../presentational/imageButton';
import DataDiv from '../presentational/dataDiv';

//Search container.
class SearchContainer extends React.Component{
    constructor(props){
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onKeyUp(event){
      let keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode === 13){
        this.props.onFound();
      }
    }

    render () {
        return (
        <div>
           <div id = 'search-input'>
              <input className = "styled-input" type = "text" onKeyUp = {this.onKeyUp} value = {this.props.currentText} onChange = {this.props.handleChange} />
              {this.props.foundItem && <ImageButton imageSrc = {"plus"} handleClick = {this.props.onFound}/>}
            </div>
            {this.props.foundItem && <DataDiv positionedProps = {this.props.positionedProps} hiddenProps = {this.props.hiddenProps} objectToDisplay = {this.props.foundItem}/>}
            {/*{this.props.foundItem && <SpellDiv spell = {this.props.foundItem}/>}*/}
        </div>
        );
    }
}

export default SearchContainer;
