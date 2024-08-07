//   NOTE: The task is to rotate matrix on 90 deg.
const turnArray90Degree = (arr) => {
  //   NOTE: Task is done with one for cycle
  console.log(arr, 'start');
  arr.reverse();
  console.log(arr, 'reverse copy');
  const numCols = arr.length;

  const arrFlat = arr.flat();
  console.log(arrFlat, 'arrFlat');
  let res = arr.map((row) => []);
  let count = 0;
  let arrForChanges = [];

  for (var k = 0; k < arrFlat.length; k++) {
    if (arrForChanges.length < numCols) {
      res[count][arrForChanges.length] = arr[arrForChanges.length][count];
      arrForChanges.push(arrFlat[k]);
    } else {
      count += 1;
      arrForChanges = [];
      res[count][arrForChanges.length] = arr[arrForChanges.length][count];
      arrForChanges.push(arrFlat[k]);
    }
  }

  console.log(res, 'end');

  //   NOTE: Task is done with two for cycles

  //  let resArr = [];
  //  let arrForChanges = [];

  //  arr.reverse();
  //   console.log(arr, 'middle' )
  //  for (var i = 0; i < arr.length; i++) {
  //   for (var k = 0; k < arr[i].length; k++) {
  //     arrForChanges.push(arr[k][i]);
  //   }
  //   resArr.push(arrForChanges)
  //   arrForChanges = [];
  //  }

  //  console.log(resArr, 'end' )
};

turnArray90Degree([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
