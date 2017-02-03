import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";

const store = configureStore({spellList: []});

ReactDOM.render(<Provider store = {store}><AppRouter/></Provider>, document.body);
