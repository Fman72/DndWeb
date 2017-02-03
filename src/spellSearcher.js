import jsonSpellData from "./dndSpellList.js";
import Fuse from "fuse.js"


let searchSpell = function(spellName){
    let options = {shouldSort: true, keys: ["name"], maxPatternLength: 40};
    let fuse = new Fuse(jsonSpellData, options);
    let results = fuse.search(spellName);
    if(results.length < 1){
        console.log("Spell not found.");
        return false;
    }
    else{
        let topSpell = results[0];
        let cleanedDesc = topSpell.desc.replace("<p>", "").replace("</p>", "");
        topSpell.desc = cleanedDesc;
        console.log(topSpell.name);
        return topSpell;
    }
};




export {searchSpell};
