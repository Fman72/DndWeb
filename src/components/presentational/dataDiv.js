import React from 'react';
import DataRow from './dataRow';

let DataDiv = (props) => {
  let objectToDisplayProps = Object.keys(props.objectToDisplay);
  let dataRows = [];
  for (let i = 0; i < Object.keys(props.objectToDisplay).length; i++){
    if(props.positionedProps.indexOf(objectToDisplayProps[i]) < 0 && props.hiddenProps.indexOf(objectToDisplayProps[i]) < 0){
      dataRows.push(<DataRow key = {objectToDisplayProps[i]} name = {objectToDisplayProps[i]} value = {props.objectToDisplay[objectToDisplayProps[i]]}/>);
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

DataRow.defaultProps = {
  hiddenProps: [],
  positionedProps: []
}


export default DataDiv;
