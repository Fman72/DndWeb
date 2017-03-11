"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _monsterSearcher = require("../searchers/monsterSearcher");

var _monsterSearcher2 = _interopRequireDefault(_monsterSearcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function monsters() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { monsterList: [] };
  var action = arguments[1];

  switch (action.type) {
    case "SEARCH_MONSTER":
      var newMonster = _monsterSearcher2.default.search(action.monsterName);
      if (newMonster) {
        console.log(JSON.stringify(state));
        return Object.assign({}, state, { currentMonster: newMonster });
      } else {
        return state;
      }
      break;
    case "ADD_MONSTER":
      var addedMonsterList = [].concat(_toConsumableArray(state.monsterList), [action.newMonster]);
      return Object.assign({}, state, { monsterList: addedMonsterList });
      console.log(JSON.stringify(state));
      break;
    case "REMOVE_MONSTER":
      var removedMonsterList = [].concat(_toConsumableArray(state.monsterList.slice(0, action.monsterIndex)), _toConsumableArray(state.monsterList.slice(action.monsterIndex + 1)));
      return Object.assign({}, state, { monsterList: removedMonsterList });
      break;
    default:
      return state;
  }
}

exports.default = monsters;