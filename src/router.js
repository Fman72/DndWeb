import React from "react";
import {Router, browserHistory, Route} from "react-router";

import AppRoot from "./components/presentational/appRoot";
import SpellPage from "./components/presentational/spellPage";
import StartPageContainer from './components/container/StartPageContainer';

var AppRouter = () => {
    return(
	    <Router history = {browserHistory}>
	        <Route path="/" component = {AppRoot}>
	            <Route path="spell" component = {SpellPage}/>
              <Route path="start" component = {StartPageContainer}/>
	        </Route>
	    </Router>
    );
}

export default AppRouter;
