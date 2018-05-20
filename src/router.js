import React from "react";
import {Router, browserHistory, Route} from "react-router";

import AppRoot from "./components/presentational/appRoot";
import SpellPage from "./components/presentational/spellPage";
import StartPageContainer from './components/container/startPageContainer';
import MonsterPage from './components/presentational/monsterPage';


var AppRouter = () => {
    return(
	    <Router history = {browserHistory}>
	        <Route path="/dnd/" component = {AppRoot}>
	            <Route path="spells" component = {SpellPage}/>
              <Route path="start" component = {StartPageContainer}/>
              <Route path="monsters" component = {MonsterPage}/>
	        </Route>
	    </Router>
    );
}

export default AppRouter;
