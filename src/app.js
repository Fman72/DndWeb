'use strict';

import React from "react";
import ReactDOM from "react-dom";
import Express from "express";
import Routes from "./routes";
import DatabaseRoutes from './databaseRoutes';
import BodyParser from "body-parser";

const BASE_ROUTE = '/dnd';

let app = Express();

let port = process.env.PORT ? process.env.PORT : 8080;

app.use(BASE_ROUTE, BodyParser.urlencoded({extended: false}));

app.use(BASE_ROUTE, BodyParser.json());

app.use(BASE_ROUTE, Routes);

app.use(BASE_ROUTE, DatabaseRoutes);

app.use(BASE_ROUTE, Express.static("public"));

app.listen(port, () => {
    console.log("Running on port: " + port);
});
