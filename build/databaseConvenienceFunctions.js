"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeSpellBook = exports.ajaxPost = undefined;

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
        reject(new Error(request.statusText));
      }
    };
    request.onerror = function () {
      reject(new Error("Network error"));
    };

    request.send(JSON.stringify(data));
  });
};

var storeSpellBook = function storeSpellBook(spellBook, user) {
  return ajaxPost("/storeSpellBook", { spellBook: spellBook, user: user });
};

exports.ajaxPost = ajaxPost;
exports.storeSpellBook = storeSpellBook;