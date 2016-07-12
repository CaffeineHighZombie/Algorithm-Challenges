
// Called function checks if input is an integer, and if only so calls the actual factorial implementation - for reducing time complexity with decision during recursive function call
function factorialize(num) {
  if (Number.isInteger(num)) {
    return fact(num);
  } else {
    return NaN;
    
  }
}

// Actual factorial implementaion
function fact(num) {
  if (num > 0) {
    return num * fact(num - 1);
  } else {
    return 1;
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