/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  if (typeof str === 'string' && !Number.isNaN(num)) {
  	return num < 0 ? '' : Array(num + 1).join(str);
  } else {
	return null;
  }
}

// test
console.log(repeatStringNumTimes("*", 3) === "***");
console.log(repeatStringNumTimes("abc", 3) === "abcabcabc");
console.log(repeatStringNumTimes("abc", 4) === "abcabcabcabc");
console.log(repeatStringNumTimes("abc", 1) === "abc");
console.log(repeatStringNumTimes("*", 8) === "********");
console.log(repeatStringNumTimes("abc", -2) === "");
