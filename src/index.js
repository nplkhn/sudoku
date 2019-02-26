module.exports = function solveSudoku(matrix) {
  const matrixCopy = matrix;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrixCopy[row][col] === 0) {
        const options = count(row, col, matrixCopy);
        for (let option of options) {
          matrixCopy[row][col] = option;
          solveSudoku(matrixCopy);
        }
      }
    }
  }
  return matrixCopy;
}

function count(row, col, matrix) {
  const options = [];

  row = help(row) * 3;
  col = help(col) * 3;

  for (let i = 0; i < 9; i++) {
    options.push([matrix[row][i], matrix[i][col], matrix[row + i % 3][col + help(i)]])
  }

  return options;
}

function help(num) {
  return Math.floor(num / 3);
}