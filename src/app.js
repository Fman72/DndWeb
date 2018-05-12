//General controller class for the chatbot.

'use strict';

import React from "react";
import ReactDOM from "react-dom";
import Express from "express";
import Routes from "./routes";
import DatabaseRoutes from './databaseRoutes';
import BodyParser from "body-parser";

let app = Express();

let port = process.env.PORT ? process.env.PORT : 8080;

app.use(BodyParser.urlencoded({extended: false}));

app.use(BodyParser.json());

app.use(Routes);

app.use(DatabaseRoutes);

app.use(Express.static("public"))

app.listen(port, () => {
    console.log("Running on port: " + port);
});
