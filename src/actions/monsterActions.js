//import {storeMonsterList, retrieveMonsterList} from '../databaseConvenienceFunctions';

function searchMonster(monsterName){
	return {type: "SEARCH_MONSTER", monsterName: monsterName};
}

function addMonster(newMonster){
	return {type: "ADD_MONSTER", newMonster: newMonster};
}

function removeMonster(monsterIndex){
	return {type: "REMOVE_MONSTER", monsterIndex: monsterIndex};
}

export {searchMonster, addMonster, removeMonster};
//
// function requestRetrieveMonsterList(user){
// 	return {type: "REQUEST_RETRIEVE_MONSTER_LIST", user: user};
// }
//
// function recieveRetrieveMonsterList(user, monsterList){
// 	return {type: "RECIEVE_RETRIEVE_MONSTER_LIST", user: user, monsterList: monsterList};
// }
//
// function errorRetrieveMonsterList(){
// 	return {type: "ERROR_RETRIEVE_MONSTER_LIST"};
// }
//
// function requestStoreMonsterList(user){
// 	return {type: "REQUEST_STORE_MONSTER_LIST", user: user};
// }
//
// function recieveStoreMonsterList(user){
// 	return {type: "RECIEVE_STORE_MONSTER_LIST", user: user};
// }
//
// function attemptStoreMonsterList(monsterList, user) {
//     return ((dispatch, getState) => {
//         dispatch(requestStoreMonsterList(user));
//         storeMonsterList(monsterList, user)
//             .then((response) => {
//                 dispatch(recieveStoreMonsterList(user));
//                 console.log(response);
//             })
//             .catch((response) => {
//                 console.log(response);
//             });
//     });
// }
//
// function attemptRetrieveMonsterList(user) {
// 	if (user){
//     return ((dispatch, getState) => {
//         dispatch(requestRetrieveMonsterList(user));
// 				console.log("Sent request");
//         retrieveMonsterList(user)
//             .then((response) => {
// 								let {monsterList} = JSON.parse(response).Item;
//                 dispatch(recieveRetrieveMonsterList(user, monsterList));
//                 console.log(response);
//             },
//             (response) => {
// 								console.log("ERROR ACCESSING DB");
// 								dispatch(errorRetrieveMonsterList());
//             })
// 						.catch((reason) =>{
// 								console.log(`ERROR RESOLVING PROMISE: ${reason}`);
// 								dispatch(errorRetrieveMonsterList());
// 						});
//     });
// 	}
// 	else{
// 		console.log("No user");
// 	}
// }


//export {searchMonster, attemptAddMonster, removeMonster, attemptStoreMonsterList, attemptRetrieveMonsterList, recieveRetrieveMonsterList, requestRetrieveMonsterList};
