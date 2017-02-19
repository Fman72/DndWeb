import React from "react";
import Express from "express";
import SpellSearcher from "./spellSearcher";
import ReactDOMServer from "react-dom/server";
import AppRouter from "./router";

import {store} from './store/configureStore';
import {Provider} from 'react-redux';

import {RouterContext, createRoutes, match} from "react-router";

var router = Express.Router();

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
            res.send('<meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></script><link rel = "stylesheet" type = "text/css" href = "styles/style.css"/><script>console.log("Running");window.__INITIAL_STORE__ = ' + JSON.stringify(store) + '; </script>' + content);
        }
        else{
            res.status(404).send("Not Found");
        }
    });
});

export default router;
