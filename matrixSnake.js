// NOTE: There are need to be in output matrix snake. Example output:
// [
//     1,  2,  3,  4,  5, 10, 15, 20,
//    25, 24, 23, 22, 21, 16, 11,  6,
//     7,  8,  9, 14, 19, 18, 17, 12,
//    13
//]

let res = [];

const snakeLogic = (anyArr, dir, m) => {
  if (dir === 'right') {
    for (let i = 0; i < anyArr.length; i++) {
      if (res.includes(anyArr[anyArr.length - 1 - m][i])) {
        continue;
      }
      res.push(anyArr[anyArr.length - 1 - m][i]);
    }
  }
  if (dir === 'down') {
    for (let i = 0; i < anyArr.length; i++) {
      if (res.includes(anyArr[i][m])) {
        continue;
      }
      res.push(anyArr[i][m]);
    }
  }
  if (dir === 'left') {
    for (let i = 0; i < m; i++) {
      if (res.includes(anyArr[m][m - 1 - i])) {
        break;
      }
      res.push(anyArr[m][m - 1 - i]);
    }
  }
  if (dir === 'up') {
    for (let i = 0; i < m; i++) {
      if (res.includes(anyArr[m - 1 - i][0])) {
        break;
      }
      res.push(anyArr[m - 1 - i][0]);
    }
  }
};

const matrixSnake = (arr) => {
  for (let m = arr.length - 1; m > 0; m--) {
    snakeLogic(arr, (dir = 'right'), m);
    snakeLogic(arr, (dir = 'down'), m);
    snakeLogic(arr, (dir = 'left'), m);
    snakeLogic(arr, (dir = 'up'), m);
  }

  console.log(res, 'res');
};

// matrixSnake([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ]);

// matrixSnake([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

matrixSnake([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);
