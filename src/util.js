//Extracts the chatbot's command from messages user's send it. 
let extractWordAtPosition = function(message, position){
    let messageWords = message.content.split(' ');
    if(messageWords.length > position){
        return messageWords[position];
    }
}

let removeCommandWord = function(message, position){
    let messageWords = message.content.split(' ');
    messageWords.splice(0, 1);
    return messageWords.join(" ");
}

export {extractWordAtPosition, removeCommandWord};