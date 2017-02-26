"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestRetrieveSpellList = exports.recieveRetrieveSpellList = exports.attemptRetrieveSpellList = exports.attemptStoreSpellList = exports.removeSpell = exports.attemptAddSpell = exports.searchSpell = undefined;

var _databaseConvenienceFunctions = require("../databaseConvenienceFunctions");

function searchSpell(spellName) {
  return { type: "SEARCH_SPELL", spellName: spellName };
}

function attemptAddSpell(newSpell) {
  return function (dispatch, getState) {
    var spellList = getState().spells.spellList;

    if (spellList.map(function (spell) {
      return spell.name;
    }).indexOf(newSpell.name) < 0) {
      dispatch(addSpell(newSpell));
    }
  };
}

function addSpell(newSpell) {
  return { type: "ADD_SPELL", newSpell: newSpell };
}

function removeSpell(spellIndex) {
  return { type: "REMOVE_SPELL", spellIndex: spellIndex };
}

function requestRetrieveSpellList(user) {
  return { type: "REQUEST_RETRIEVE_SPELL_LIST", user: user };
}

function recieveRetrieveSpellList(user, spellList) {
  return { type: "RECIEVE_RETRIEVE_SPELL_LIST", user: user, spellList: spellList };
}

function requestStoreSpellList(user) {
  return { type: "REQUEST_STORE_SPELL_LIST", user: user };
}

function recieveStoreSpellList(user) {
  return { type: "RECIEVE_STORE_SPELL_LIST", user: user };
}

function attemptStoreSpellList(spellList, user) {
  return function (dispatch, getState) {
    dispatch(requestStoreSpellList(user));
    (0, _databaseConvenienceFunctions.storeSpellList)(spellList, user).then(function (response) {
      dispatch(recieveStoreSpellList(user));
      console.log(response);
    }).catch(function (response) {
      console.log(response);
    });
  };
}

function attemptRetrieveSpellList(user) {
  if (user) {
    return function (dispatch, getState) {
      dispatch(requestRetrieveSpellList(user));
      (0, _databaseConvenienceFunctions.retrieveSpellList)(user).then(function (response) {
        var spellList = JSON.parse(response).Item.spellList;

        dispatch(recieveRetrieveSpellList(user, spellList));
        console.log(response);
      }).catch(function (response) {
        console.log(response);
      });
    };
  } else {
    console.log("No user");
  }
}

exports.searchSpell = searchSpell;
exports.attemptAddSpell = attemptAddSpell;
exports.removeSpell = removeSpell;
exports.attemptStoreSpellList = attemptStoreSpellList;
exports.attemptRetrieveSpellList = attemptRetrieveSpellList;
exports.recieveRetrieveSpellList = recieveRetrieveSpellList;
exports.requestRetrieveSpellList = requestRetrieveSpellList;