'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_awsSdk2.default.config.update({ region: 'ap-southeast-2', endpoint: process.env.DYNAMODB_ENDPOINT, accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY });
var documentClient = new _awsSdk2.default.DynamoDB.DocumentClient();
//documentClient.setEndpoint('http://127.0.0.1:8000');
var databaseRouter = _express2.default.Router();

databaseRouter.post('/storeSpellList', function (req, res) {
  var params = {
    TableName: "SpellList",
    Item: {
      user: req.body.user,
      spellList: req.body.spellList
    }
  };
  documentClient.put(params, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send("Saved your spells g");
    }
  });
});

databaseRouter.post('/retrieveSpellList', function (req, res) {
  var params = {
    TableName: "SpellList",
    Key: {
      user: req.body.user
    }
  };
  documentClient.get(params, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

exports.default = databaseRouter;