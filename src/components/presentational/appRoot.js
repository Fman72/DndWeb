import React from "react";
import {Grid} from 'react-bootstrap';

//App container object.
function AppRoot(props){
    return (
        <Grid>
          {props.children}
        </Grid>
    );
};

export default AppRoot;
