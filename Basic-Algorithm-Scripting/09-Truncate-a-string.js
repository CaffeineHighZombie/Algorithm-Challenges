/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
*/

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return num > 3 ? str.substring(0, num - 3) + '...' : str.substring(0, num) + '...';
  }
}

// tests
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11) === "A-tisket...");
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14) === "Peter Piper...");
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) === "A-tisket a-tasket A green and yellow basket");
