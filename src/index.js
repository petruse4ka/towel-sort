
// You should implement your task here.

module.exports = function towelSort (matrix= []) {
  let arr = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
    arr = arr.concat(matrix[i].reverse());
  } else if (i % 2 === 0) {
    arr = arr.concat(matrix[i]);
  } 
}

  return arr;
}
