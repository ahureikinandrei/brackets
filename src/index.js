module.exports = function check(str, bracketsConfig) { 
  for (let i = 0; i < bracketsConfig.length; ) {
    let bracketsElem = bracketsConfig[i].join('')
    if (str.includes(bracketsElem)) {
      str = str.replace(bracketsElem, '');
      i = 0;
    }
    else {i++}
  }
  if ( str.length == 0) return true;
  else return false; 
}
