// NOTE: There are need to be found the longest ship's coordinates.
const theLongestShipCoorinates = (arrShip) => {
  let theLongestShipLength = 5;
  let thelongestShipArr = [];
  let firstCoordinates = {};
  let lastCoordinates = {};
  let res = [];
  let arrForTemporaryShip = [];
  let isInArray = [];
  let gorizontal = false;

  for (let i = 0; i < arrShip.length; i++) {
    for (let m = 0; m < arrShip[i].length; m++) {
      isInArray = res.find((arr) => arr.find((el) => el.firstIndex === i && el?.secondIndex === m));

      if (arrShip[i][m] === 'x' && !isInArray) {
        arrForTemporaryShip.push({ firstIndex: i, secondIndex: m });
        for (let k = 1; k < theLongestShipLength; k++) {
          isInArray = res.find((arr) =>
            arr.find((el) => el?.firstIndex === i && el?.secondIndex === m + k),
          );
          if (arrShip[i][m + k] === 'x' && !isInArray) {
            gorizontal = true;

            if (arrShip[i][m + k + 1] === '.' && arrShip[i][m + k + 2] === '.') {
              arrForTemporaryShip.push({ firstIndex: i, secondIndex: m + k });
              gorizontal = false;
            }

            if (!!gorizontal) {
              arrForTemporaryShip.push({ firstIndex: i, secondIndex: m + k });
            }
          }

          if (i < arrShip.length - theLongestShipLength + 1) {
            isInArray = res.find((arr) =>
              arr.find((el) => el?.firstIndex === i + k && el?.secondIndex === m),
            );
            if (arrShip[i + k][m] === 'x' && !isInArray) {
              gorizontal = false;
              if (!!arrShip[i + k + 1] && !!arrShip[i + k + 2]) {
                if (arrShip[i + k + 1][m] === '.' && arrShip[i + k + 2][m] === '.') {
                  gorizontal = true;
                }
              }
              if (!gorizontal) {
                arrForTemporaryShip.push({ firstIndex: i + k, secondIndex: m });
              }
            }
          }

          if (k === theLongestShipLength - 1) {
            res.push(arrForTemporaryShip);
            arrForTemporaryShip = [];
          }
        }
      }
    }
  }

  res.sort((a, b) => a.length - b.length);
  thelongestShipArr = res.pop();
  firstCoordinates = thelongestShipArr.shift();
  lastCoordinates = thelongestShipArr.pop();
  console.log('res: ', firstCoordinates, lastCoordinates);
};

theLongestShipCoorinates([
  ['.', '.', '.', '.', 'x', 'x', '.', '.', '.', '.'],
  ['.', 'x', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', 'x', '.', '.', '.', '.', 'x', 'x', 'x', 'x'],
  ['.', 'x', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', 'x', '.', '.'],
  ['.', '.', '.', 'x', '.', '.', '.', 'x', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', 'x', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', 'x', '.', '.'],
  ['.', 'x', 'x', '.', '.', '.', '.', 'x', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
]);

theLongestShipCoorinates([
  ['.', '.', 'x', 'x', 'x', 'x', '.', '.', '.', '.'],
  ['x', '.', '.', '.', '.', '.', '.', 'x', '.', '.'],
  ['.', '.', 'x', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['x', 'x', 'x', 'x', 'x', '.', '.', '.', '.', 'x'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', 'x'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', 'x'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', 'x', '.', '.', '.', 'x', 'x', '.', '.', '.'],
]);

theLongestShipCoorinates([
  ['.', '.', 'x', 'x', 'x', '.', '.', '.', '.', '.'],
  ['x', '.', '.', '.', '.', '.', '.', 'x', '.', '.'],
  ['.', '.', 'x', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['x', 'x', 'x', 'x', '.', '.', '.', '.', '.', 'x'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', 'x'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', 'x'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', 'x'],
  ['.', 'x', '.', '.', '.', 'x', 'x', '.', '.', 'x'],
]);

theLongestShipCoorinates([
  ['x', '.', 'x', 'x', 'x', '.', '.', '.', '.', '.'],
  ['x', '.', '.', '.', '.', '.', '.', 'x', '.', '.'],
  ['x', '.', 'x', '.', '.', '.', '.', '.', '.', '.'],
  ['x', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['x', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', 'x', 'x', 'x', '.', '.', '.', '.', '.', 'x'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', 'x'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', 'x', '.', '.', '.', 'x', 'x', '.', '.', 'x'],
]);
