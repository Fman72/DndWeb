import React from "react";
import {Provider} from "react-redux";
import {store} from '../../store/configureStore';

//App container object.
function AppRoot(props){
    return (
        <div>
          {props.children}
        </div>
    );
};

export default AppRoot;
