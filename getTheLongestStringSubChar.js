// NOTE: There are need to be found the longest substring that have not repeated neighbours.

const getTheLongestStrSubChar = (str) => {
  const arr = [];
  let theLongestStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] || str[i] === str[i - 1]) {
      arr.push('.');
    } else {
      arr.push(str[i]);
    }
  }
  const arrSubStr = arr
    .join('')
    .split('.')
    .filter((el) => el.length > 0);
  for (let i = 0; i < arrSubStr.length; i++) {
    if (arrSubStr[i].length > theLongestStr.length) {
      theLongestStr = arrSubStr[i];
    }
  }

  return theLongestStr;
};

getTheLongestStrSubChar('ABCDDDEFGHKLMMMMOPTRESDYTHNBBSDJ');
