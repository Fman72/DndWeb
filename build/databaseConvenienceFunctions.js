"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieveSpellList = exports.storeSpellList = exports.ajaxPost = undefined;

var _redux = require("redux");

var ajaxPost = function ajaxPost(url, data) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(request.statusText);
      }
    };
    request.onerror = function () {
      reject("Network error");
    };

    request.send(JSON.stringify(data));
  });
};

var storeSpellList = function storeSpellList(spellList, user) {
  return ajaxPost("/storeSpellList", { spellList: spellList, user: user });
};

var retrieveSpellList = function retrieveSpellList(user) {
  return ajaxPost("/retrieveSpellList", { user: user });
};

exports.ajaxPost = ajaxPost;
exports.storeSpellList = storeSpellList;
exports.retrieveSpellList = retrieveSpellList;