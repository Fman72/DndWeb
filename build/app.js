//General controller class for the chatbot.

'use strict';

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = require("./util.js");

var _spellSearcher = require("./spellSearcher.js");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT ? process.env.PORT : 8080;

app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use(_bodyParser2.default.json());

app.use(_routes2.default);

app.use(_express2.default.static("public"));

app.listen(port, "0.0.0.0", function () {
    console.log("Running on port: " + port);
});