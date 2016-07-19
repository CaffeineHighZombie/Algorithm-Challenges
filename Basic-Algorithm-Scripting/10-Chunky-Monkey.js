
function chunkArrayInGroups(arr, size) {
  var finalArr = [];
  for (var j = 0; j < arr.length / size; j++) {
    var resultArr = [];
    for (var i = 0; i < size; i++) {
      resultArr[i] = arr[j * size + i];
    }
    finalArr.push(resultArr);
  }
  return finalArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
