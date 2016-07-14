/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  collectionArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    collectionArr[i] = arr[i][0]; // Setting to initial sub array value temporarily for subseuent comparison
    for (var j = 0; j < arr[i].length; j++) {
      if (collectionArr[i] < arr[i][j])
        collectionArr[i] = arr[i][j];
    }
  }
  
  return collectionArr;
}

// tests
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]).toString() === [27,5,39,1001].toString());
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]).toString() === [9, 35, 97, 1000000].toString());
