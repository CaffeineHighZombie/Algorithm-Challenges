/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  var resultStr = '';
  while (num > 0) {
    resultStr += str;
    num--;
  }
  return resultStr;
}

// test
console.log(repeatStringNumTimes("*", 3) === "***");
console.log(repeatStringNumTimes("abc", 3) === "abcabcabc");
console.log(repeatStringNumTimes("abc", 4) === "abcabcabcabc");
console.log(repeatStringNumTimes("abc", 1) === "abc");
console.log(repeatStringNumTimes("*", 8) === "********");
console.log(repeatStringNumTimes("abc", -2) === "");
