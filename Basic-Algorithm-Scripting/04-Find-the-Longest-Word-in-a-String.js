
function findLongestWord(str) {
  if(typeof str === 'string') {	// checking to see if the given arguement is a string, else return "null"
	return Math.max.apply(null, str.split(" ").map(element => element.length));
  } else {
    return null;
  }
}

// tests
console.log(findLongestWord("The quick brown fox jumped over the lazy dog") === 6);
console.log(findLongestWord("May the force be with you") === 5);
console.log(findLongestWord("Google do a barrel roll") === 6);
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow") === 8);
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology") === 19);
console.log(findLongestWord(7865656) === null);
console.log(findLongestWord(true) === null);
