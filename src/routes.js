import React from "react";
import Express from "express";
import SpellSearcher from "./spellSearcher";
import ReactDOMServer from "react-dom/server";
import AppRouter from "./router";

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';


import {RouterContext, createRoutes, match} from "react-router";

var router = Express.Router();

const store = configureStore({spellList: []});

const routes = createRoutes(AppRouter());

router.get("/spell", (req, res) => {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if(error){
            console.log(error.message);
            res.status(500).send(error.message);
        }
        else if(renderProps){
            const content = ReactDOMServer.renderToString(
            	<Provider store = {store}>
            		<RouterContext {...renderProps}/>
				      </Provider>);
            res.send(content);
        }
        else{
            res.status(404).send("Not Found");
        }
    });
});

export default router;
