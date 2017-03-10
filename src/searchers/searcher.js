import Fuse from 'fuse.js';

class Searcher {
  constructor(dataToSearch, searchCallback = (topSpell) => {return topSpell}, fuseOptions = {shouldSort: true, keys: ["name"], maxPatternLength: 40}){
    this.dataToSearch = new Fuse(dataToSearch, fuseOptions);
    this.searchCallback = searchCallback;
  }

  search(item){
    let results = this.dataToSearch.search(item);
    if(results.length < 1){
        return false;
    }
    else{
        let topSpell = results[0];
        return this.searchCallback(topSpell);
    }
  }
}

export default Searcher;
