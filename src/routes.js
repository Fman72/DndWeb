import React from "react";
import Express from "express";
import ReactDOMServer from "react-dom/server";
import AppRouter from "./router";


import htmlBodyString from './htmlBodyString';

import Helmet from 'react-helmet';

import {store} from './store/configureStore';
import {Provider} from 'react-redux';

import {RouterContext, createRoutes, match} from "react-router";

let head = Helmet.rewind();



let router = Express.Router();

let unmanagedMarkup = '<script>window.__INITIAL_STORE__ = ' + JSON.stringify(store) + '; </script>';

const routes = createRoutes(AppRouter());

router.get("/start", (req, res) => {

    //Head customization for this route.
    head.title = "Spell List";

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
            res.send(htmlBodyString(head, content, store));
        }
        else{
            res.status(404).send("Not Found");
        }
    });
});

router.get("/spells", (req, res) => {

    //Head customization for this route.
    head.title = "Spell List";

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
            res.send(htmlBodyString(head, content, store));
        }
        else{
            res.status(404).send("Not Found");
        }
    });
});

router.get("/monsters", (req, res) => {

    //Head customization for this route.
    head.title = "Monster List";

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
            res.send(unmanagedMarkup + `<div id = 'page-wrapper'>${content}</div>`);
        }
        else{
            res.status(404).send("Not Found");
        }
    });
});

export default router;
