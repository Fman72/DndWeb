'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_awsSdk2.default.config.update({ region: 'ap-southeast-2', endpoint: 'http://localhost:8000' });
var documentClient = new _awsSdk2.default.DynamoDB.DocumentClient();
//documentClient.setEndpoint('http://127.0.0.1:8000');
var databaseRouter = _express2.default.Router();

databaseRouter.post('/storeSpellBook', function (req, res) {
  console.log(JSON.stringify(req.body));
  var params = {
    TableName: "SpellBook",
    Item: {
      user: req.body.user,
      spellBook: req.body.spellBook
    }
  };
  documentClient.put(params, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('DynamoDB response data: ' + data);
    }
  });
});

databaseRouter.post('/retrieveSpellBook', function (req, res) {
  var params = {
    TableName: "SpellBook",
    Key: {
      user: req.body.user
    }
  };
  documentClient.get(params, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
});

exports.default = databaseRouter;