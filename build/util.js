"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var normalizeString = function normalizeString(string) {
  if (string) {
    return string.trim().toLowerCase();
  }
  return null;
};

var initialCapsString = function initialCapsString(string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return null;
};

exports.normalizeString = normalizeString;
exports.initialCapsString = initialCapsString;