import React from 'react';
import DataRow from './dataRow';

let DataDiv = (props) => {
  let mergedArray = Object.keys(props.objectToDisplay).concat(props.hiddenProps);
  mergedArray.sort();
  let dataRows = [];
  for (let i = 0; i < mergedArray.length; i++){
    if(mergedArray[i] != mergedArray[i + 1]){
      if(props.positionedProps.indexOf(mergedArray[i]) < 0){
        dataRows.push(<DataRow key = {mergedArray[i]} name = {mergedArray[i]} value = {props.objectToDisplay[mergedArray[i]]}/>);
      }
    }
    else{
      i++;
    }
  }
  for (let x = props.positionedProps.length - 1; x > -1; x--){
    if(props.hiddenProps.indexOf(props.positionedProps[x]) < 0){
      dataRows.splice(0, 0, <DataRow key = {props.positionedProps[x]} name = {props.positionedProps[x]} value = {props.objectToDisplay[props.positionedProps[x]]}/>);
    }
  }
  return (
    <div>
      {dataRows}
    </div>
  );
}

DataDiv.propTypes = {
  objectToDisplay: React.PropTypes.object.isRequired,
  positionedProps: React.PropTypes.array,
  hiddenProps: React.PropTypes.array
}

export default DataDiv;
