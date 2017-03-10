"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spellList = require("../data/spellList.js");

var _spellList2 = _interopRequireDefault(_spellList);

var _searcher = require("./searcher");

var _searcher2 = _interopRequireDefault(_searcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spellSearcher = new _searcher2.default(_spellList2.default);

exports.default = spellSearcher;