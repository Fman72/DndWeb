"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _spellSearcher = require("./spellSearcher");

var _spellSearcher2 = _interopRequireDefault(_spellSearcher);

var _server = require("react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _router = require("./router");

var _router2 = _interopRequireDefault(_router);

var _configureStore = require("./store/configureStore");

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var unmanagedMarkup = '<meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/><link rel = "stylesheet" type = "text/css" href = "styles/style.css"/><script>console.log("Running");window.__INITIAL_STORE__ = ' + JSON.stringify(_configureStore.store) + '; </script>';

var routes = (0, _reactRouter.createRoutes)((0, _router2.default)());

router.get("/spell", function (req, res) {
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
            res.send(unmanagedMarkup + content);
        } else {
            res.status(404).send("Not Found");
        }
    });
});

exports.default = router;