"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function setUser(username) {
  return { type: "SET_USER", username: username };
}

exports.setUser = setUser;