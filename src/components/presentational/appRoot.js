import React from "react";
import {Grid} from 'react-bootstrap';

//App container object.
function AppRoot(props){
    return (
        <Grid fluid>
          {props.children}
        </Grid>
    );
};

export default AppRoot;
