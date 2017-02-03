import React from "react";
import {Provider} from "react-redux";

//App container object.
function AppRoot(props){
    return (
	        <div>
	            <h1>Welcome to the DND App</h1>
	            <div id = "container-div">{props.children}</div>
	            <script src="bundle.js"></script>
	        </div>
    );
};

export default AppRoot;
