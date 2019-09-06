let urlEncode = function(text) {
  let newString = '';

  for (i = 0; i <= text.length - 1; i++) {
    if (i === 0 || i === text.length -1) {
      if (text[i] === ' ') {
        newString += '';
      } else if (text[i] !== ' ') {
        newString += text[i];
      }
    } else if (text[i] !== ' ') {
      newString += text[i];
    } else {
      newString += '%20';
    }
  }
  return newString;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));