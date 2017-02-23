import React from "react";
import {Router, browserHistory, Route} from "react-router";

import AppRoot from "./components/presentational/appRoot";
import SpellPage from "./components/presentational/spellPage";
import StartPage from './components/presentational/startPage';

var AppRouter = () => {
    return(
	    <Router history = {browserHistory}>
	        <Route path="/" component = {AppRoot}>
	            <Route path="spell" component = {SpellPage}/>
              <Route path="start" component = {StartPage}/>
	        </Route>
	    </Router>
    );
}

export default AppRouter;
