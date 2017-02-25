import {Store} from 'redux';

let ajaxPost = (url, data) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = () => {
        if (request.status === 200) {
            resolve(request.response);
        } else {
            reject(new Error(request.statusText));
        }
    };
    request.onerror = function() {
       reject(new Error("Network error"));
    };

    request.send(JSON.stringify(data));
  });
}

let storeSpellBook = (spellBook, user) => {
  return ajaxPost("/storeSpellBook", {spellBook: spellBook, user: user});
}

export {ajaxPost, storeSpellBook};
