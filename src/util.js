let normalizeString  = (string) => {
  if(string){
    return string.trim().toLowerCase();
  }
  return null;
}

let initialCapsString = (string) => {
  if(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return null;
}

export {normalizeString, initialCapsString};
