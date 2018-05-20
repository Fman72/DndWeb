import {Store} from 'redux';

const BASE_ROUTE = '/dnd';

let ajaxPost = (url, data) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = () => {
        if (request.status === 200) {
            resolve(request.response);
        } else {
            reject(request.statusText);
        }
    };
    request.onerror = function() {
       reject("Network error");
    };

    request.send(JSON.stringify(data));
  });
}

let storeSpellList = (spellList, user) => {
  return ajaxPost(`${BASE_ROUTE}/storeSpellList`, {spellList: spellList, user: user});
}

let retrieveSpellList = (user) => {
  return ajaxPost(`${BASE_ROUTE}/retrieveSpellList`, {user: user});
}

export {ajaxPost, storeSpellList, retrieveSpellList};
