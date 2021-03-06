/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  return str.split('').map(function(word){
  	var wordCode = word.charCodeAt();
  	return wordCode > 64 && wordCode < 91 ? String.fromCharCode(wordCode < 78 ? wordCode + 13 : wordCode - 13) : word;
  }).join('');  
}

// tests
console.log(rot13("LBH QVQ VG!") === "YOU DID IT!");
console.log(rot13("SERR PBQR PNZC") === "FREE CODE CAMP");
console.log(rot13("SERR CVMMN!") === "FREE PIZZA!");
console.log(rot13("SERR YBIR?") === "FREE LOVE?");
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") === "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.");
