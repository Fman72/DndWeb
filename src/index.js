import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router";
import {configureStore} from "./store/configureStore";
import {Provider} from "react-redux";

const initialStore = window.__INITIAL_STORE__;

const store = configureStore(initialStore);

ReactDOM.render(<Provider store = {store}><AppRouter/></Provider>, document.getElementById('page-wrapper'));
