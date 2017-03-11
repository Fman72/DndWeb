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

let beautifyString = (string) => {
  return string.replace(/_|-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export {normalizeString, initialCapsString, beautifyString};
