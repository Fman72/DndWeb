import React from "react";
import {Provider} from "react-redux";
import {store} from '../../store/configureStore';

//App container object.
function AppRoot(props){
    return (
	        <div className = "container-fluid">
            <div className = "row">
	            <h1 id = "page-title" className = "col-xs-12">DND 5e Spell List</h1>
            </div>
            <div className = "row">
              {props.children}
            </div>
            <script src="bundle.js"></script>
	        </div>
    );
};

export default AppRoot;
