/* 
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  if (typeof str === 'string') {
    return str.toLowerCase().split(' ').map(element => element.charAt(0).toUpperCase() + element.substring(1)).join(' ');
  } else {
    return null;
  }
}

// tests
console.log(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
console.log(titleCase("sHoRt AnD sToUt") === "Short And Stout");
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") === "Here Is My Handle Here Is My Spout");
console.log(titleCase(978.65) === null);
console.log(titleCase(true) === null);
