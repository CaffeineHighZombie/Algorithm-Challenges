/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  var falsyValues = [false, null, 0, "", undefined, NaN];
  return arr.filter(function(element) {
    return Boolean(element);
  });
}

// tests
console.log(bouncer([7, "ate", "", false, 9]));	// [7, "ate", 9]
console.log(bouncer(["a", "b", "c"]));	// ["a", "b", "c"];
console.log(bouncer([false, null, 0, NaN, undefined, ""]));	// []
console.log(bouncer([1, null, NaN, 2, undefined]));	// [1, 2]
