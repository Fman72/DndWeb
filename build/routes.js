"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _server = require("react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _router = require("./router");

var _router2 = _interopRequireDefault(_router);

var _htmlBodyString = require("./htmlBodyString");

var _htmlBodyString2 = _interopRequireDefault(_htmlBodyString);

var _reactHelmet = require("react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _configureStore = require("./store/configureStore");

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var head = _reactHelmet2.default.rewind();

var router = _express2.default.Router();

var unmanagedMarkup = '<script>window.__INITIAL_STORE__ = ' + JSON.stringify(_configureStore.store) + '; </script>';

var routes = (0, _reactRouter.createRoutes)((0, _router2.default)());

router.get("/start", function (req, res) {

    //Head customization for this route.
    head.title = "Spell List";

    (0, _reactRouter.match)({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            console.log(error.message);
            res.status(500).send(error.message);
        } else if (renderProps) {
            var content = _server2.default.renderToString(_react2.default.createElement(
                _reactRedux.Provider,
                { store: _configureStore.store },
                _react2.default.createElement(_reactRouter.RouterContext, renderProps)
            ));
            res.send((0, _htmlBodyString2.default)(head, content, _configureStore.store));
<<<<<<< HEAD
        } else {
            res.status(404).send("Not Found");
        }
    });
});

router.get("/spells", function (req, res) {

    //Head customization for this route.
    head.title = "Spell List";

    (0, _reactRouter.match)({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            console.log(error.message);
            res.status(500).send(error.message);
        } else if (renderProps) {
            var content = _server2.default.renderToString(_react2.default.createElement(
                _reactRedux.Provider,
                { store: _configureStore.store },
                _react2.default.createElement(_reactRouter.RouterContext, renderProps)
            ));
            res.send((0, _htmlBodyString2.default)(head, content, _configureStore.store));
=======
>>>>>>> monster-search
        } else {
            res.status(404).send("Not Found");
        }
    });
});

<<<<<<< HEAD
=======
router.get("/spells", function (req, res) {

    //Head customization for this route.
    head.title = "Spell List";

    (0, _reactRouter.match)({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            console.log(error.message);
            res.status(500).send(error.message);
        } else if (renderProps) {
            var content = _server2.default.renderToString(_react2.default.createElement(
                _reactRedux.Provider,
                { store: _configureStore.store },
                _react2.default.createElement(_reactRouter.RouterContext, renderProps)
            ));
            res.send((0, _htmlBodyString2.default)(head, content, _configureStore.store));
        } else {
            res.status(404).send("Not Found");
        }
    });
});

>>>>>>> monster-search
router.get("/monsters", function (req, res) {

    //Head customization for this route.
    head.title = "Monster List";

    (0, _reactRouter.match)({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            console.log(error.message);
            res.status(500).send(error.message);
        } else if (renderProps) {
            var content = _server2.default.renderToString(_react2.default.createElement(
                _reactRedux.Provider,
                { store: _configureStore.store },
                _react2.default.createElement(_reactRouter.RouterContext, renderProps)
            ));
            res.send((0, _htmlBodyString2.default)(head, content, _configureStore.store));
        } else {
            res.status(404).send("Not Found");
        }
    });
});

exports.default = router;