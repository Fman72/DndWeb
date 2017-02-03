'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//Extracts the chatbot's command from messages user's send it. 
var extractWordAtPosition = function extractWordAtPosition(message, position) {
    var messageWords = message.content.split(' ');
    if (messageWords.length > position) {
        return messageWords[position];
    }
};

var removeCommandWord = function removeCommandWord(message, position) {
    var messageWords = message.content.split(' ');
    messageWords.splice(0, 1);
    return messageWords.join(" ");
};

exports.extractWordAtPosition = extractWordAtPosition;
exports.removeCommandWord = removeCommandWord;