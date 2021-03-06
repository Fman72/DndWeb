import React from 'react';
import {initialCapsString} from '~/util';

let PageHeader = (props) =>{
  let storeButtonImageSrc = "";
  if(props.isStoringSpellList){
    storeButtonImageSrc = "loading.gif";
  }
  return (
    <div id = "page-title">
        <h1 style = {{display: "inline", marginRight: "auto", marginLeft: "15px"}}>{props.titleText}{initialCapsString(props.user)}</h1>
        {props.buttons}
    </div>
  );
}

export default PageHeader;
