
function factorialize(num) {
  if (num > 0 && Number.isInteger(num)) {  // further check with Logical "And" to remove output for boolean "true" and floats 
    return num * factorialize(num - 1);
  } else if (num === 0) {  // Strict equality check to weed out errorneous output based on empty string, boolean values.
    return 1;
  } else {
     return num;
  }
}
/*
// test
console.log(factorialize(5));
console.log(factorialize(0));
console.log(factorialize(1));
console.log(factorialize(""));
console.log(factorialize(false));
console.log(factorialize(true));
console.log(factorialize("A"));
console.log(factorialize(null));
console.log(factorialize(5.4));
*/