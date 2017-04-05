"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fuse = require("fuse.js");

var _fuse2 = _interopRequireDefault(_fuse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Searcher = function () {
  function Searcher(dataToSearch) {
    var searchCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (topSpell) {
      return topSpell;
    };
    var fuseOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { shouldSort: true, keys: ["name"], maxPatternLength: 40 };

    _classCallCheck(this, Searcher);

    this.dataToSearch = new _fuse2.default(dataToSearch, fuseOptions);
    this.searchCallback = searchCallback;
  }

  _createClass(Searcher, [{
    key: "search",
    value: function search(item) {
      var results = this.dataToSearch.search(item);
      if (results.length < 1) {
        return false;
      } else {
        var topSpell = results[0];
        return this.searchCallback(topSpell);
      }
    }
  }]);

  return Searcher;
}();

exports.default = Searcher;