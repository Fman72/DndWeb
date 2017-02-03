"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchSpell = undefined;

var _dndSpellList = require("./dndSpellList.js");

var _dndSpellList2 = _interopRequireDefault(_dndSpellList);

var _fuse = require("fuse.js");

var _fuse2 = _interopRequireDefault(_fuse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchSpell = function searchSpell(spellName) {
    var options = { shouldSort: true, keys: ["name"], maxPatternLength: 40 };
    var fuse = new _fuse2.default(_dndSpellList2.default, options);
    var results = fuse.search(spellName);
    if (results.length < 1) {
        console.log("Spell not found.");
        return false;
    } else {
        var topSpell = results[0];
        var cleanedDesc = topSpell.desc.replace("<p>", "").replace("</p>", "");
        topSpell.desc = cleanedDesc;
        console.log(topSpell.name);
        return topSpell;
    }
};

exports.searchSpell = searchSpell;