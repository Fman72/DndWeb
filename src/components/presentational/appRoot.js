import React from "react";

//App container object.
function AppRoot(props){
    return (
        <div>
          {props.children}
        </div>
    );
};

export default AppRoot;
