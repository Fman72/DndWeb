import React from "react";
import {Router, browserHistory, Route, IndexRoute} from "react-router";

import AppRoot from "./components/presentational/appRoot";
import SpellPage from "./components/container/spellPage";

var AppRouter = () => {
    return(
	    <Router history = {browserHistory}>
	        <Route path="/" component = {AppRoot}>
	            <Route path="spell" component = {SpellPage}/>
	        </Route>
	    </Router>
    )

}

export default AppRouter;
