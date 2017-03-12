import {storeSpellList, retrieveSpellList} from '../databaseConvenienceFunctions';

function searchSpell(spellName){
	return {type: "SEARCH_SPELL", spellName: spellName};
}

function attemptAddSpell(newSpell){
	return ((dispatch, getState) => {
		const { spellList } = getState().spells;
		if(spellList.map(spell => spell.name).indexOf(newSpell.name) < 0){
			dispatch(addSpell(newSpell));
		}
	});
}

function addSpell(newSpell){
	return {type: "ADD_SPELL", newSpell: newSpell};
}


function removeSpell(spellIndex){
	return {type: "REMOVE_SPELL", spellIndex: spellIndex};
}

function requestRetrieveSpellList(user){
	return {type: "REQUEST_RETRIEVE_SPELL_LIST", user: user};
}

function recieveRetrieveSpellList(user, spellList){
	return {type: "RECIEVE_RETRIEVE_SPELL_LIST", user: user, spellList: spellList};
}

function errorRetrieveSpellList(){
	return {type: "ERROR_RETRIEVE_SPELL_LIST"};
}

function requestStoreSpellList(user){
	return {type: "REQUEST_STORE_SPELL_LIST", user: user};
}

function recieveStoreSpellList(user){
	return {type: "RECIEVE_STORE_SPELL_LIST", user: user};
}

function attemptStoreSpellList(spellList, user) {
    return ((dispatch, getState) => {
        dispatch(requestStoreSpellList(user));
        storeSpellList(spellList, user)
            .then((response) => {
                dispatch(recieveStoreSpellList(user));
                console.log(response);
            },
						(response) => {
								console.log("ERROR ACCESSING DB");
            })
            .catch((reason) => {
							console.log(`ERROR RESOLVING PROMISE: ${reason}`);
            });
    });
}

function attemptRetrieveSpellList(user) {
	if (user){
    return ((dispatch, getState) => {
        dispatch(requestRetrieveSpellList(user));
				console.log("Sent request");
        retrieveSpellList(user)
            .then((response) => {
								let {spellList} = JSON.parse(response).Item;
                dispatch(recieveRetrieveSpellList(user, spellList));
                console.log(response);
            },
            (response) => {
								console.log("ERROR ACCESSING DB");
								dispatch(errorRetrieveSpellList());
            })
						.catch((reason) =>{
								console.log(`ERROR RESOLVING PROMISE: ${reason}`);
								dispatch(errorRetrieveSpellList());
						});
    });
	}
	else{
		console.log("No user");
	}
}


export {searchSpell, attemptAddSpell, removeSpell, attemptStoreSpellList, attemptRetrieveSpellList, recieveRetrieveSpellList, requestRetrieveSpellList};
