/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
  if (typeof str === 'string' && typeof target === 'string') {
    return str.substring(str.length - target.length) === target;
  } else {
    return null;
  }
}

// tests
console.log(confirmEnding("Bastian", "n") === true);
console.log(confirmEnding("Connor", "n") === false);
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") === false);
console.log(confirmEnding("He has to give me a new name", "name") === true);
console.log(confirmEnding("He has to give me a new name", "me") === true);
console.log(confirmEnding("He has to give me a new name", "na") === false);
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") === false);
