"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _monsterList = require("../data/monsterList.js");

var _monsterList2 = _interopRequireDefault(_monsterList);

var _searcher = require("./searcher");

var _searcher2 = _interopRequireDefault(_searcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var monsterSearcher = new _searcher2.default(_monsterList2.default);

exports.default = monsterSearcher;