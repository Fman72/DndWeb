//General controller class for the chatbot.

'use strict';

import React from "react";
import ReactDOM from "react-dom";
import {extractWordAtPosition, removeCommandWord} from "./util.js";
import {searchSpell} from "./spellSearcher.js"
import Express from "express";
import Routes from "./routes";

import BodyParser from "body-parser";

var app = Express();

app.use(BodyParser.urlencoded({extended: false}));

app.use(BodyParser.json());

app.use(Routes);

app.use(Express.static("public"))

app.listen(env.process.port, () => {
    console.log("Running on " + env.process.port);
});
