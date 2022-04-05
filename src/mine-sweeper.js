const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		const element = matrix[i];
		element.forEach((elem, index) => elem === false ? element[index] = 0 : true)
	}
	for (let j = 0; j < matrix.length; j++) {
		const el = matrix[j];
		const position = el.indexOf(true);
		// 1-ый ряд!
		if (j === 0 && position === 0) {
			if (matrix[j+1][position] === true) {
			} else matrix[j+1][position] = matrix[j+1][position] + 1;
			if (matrix[j][position+1] === true) {
			} else matrix[j][position+1] = matrix[j][position+1] + 1;
			if (matrix[j+1][position+1] === true) {
				continue;
			} else matrix[j+1][position+1] = matrix[j+1][position+1] + 1;
		}
		if (j === 0 && position === 1) {
			if (matrix[j][position-1] === true) {
			} else matrix[j][position-1] = matrix[j][position-1] + 1;
			if (matrix[j][position+1] === true) {
			} else matrix[j][position+1] = matrix[j][position+1] + 1;
			if (matrix[j+1][position+1] === true) {
			} else matrix[j+1][position+1] = matrix[j+1][position+1] + 1;
			if (matrix[j+1][position-1] === true) {
			} else matrix[j+1][position-1] = matrix[j+1][position-1] + 1;
			if (matrix[j+1][position] === true) {
			} else matrix[j+1][position] = matrix[j+1][position] + 1;
		}
		if (j === 0 && position === 2) {
			if (matrix[j+1][position] === true) {
			} else matrix[j+1][position] = matrix[j+1][position] + 1;
			if (matrix[j][position-1] === true) {
			} else matrix[j][position-1] = matrix[j][position-1] + 1;
			if (matrix[j+1][position-1] === true) {
				continue;
			} else matrix[j+1][position-1] = matrix[j+1][position-1] + 1;
		}
		//2-ой ряд!
		if (j === 1 && matrix.length >= 3 && position === 0) {
			if (matrix[j+1][position] === true) {
			} else matrix[j+1][position] = matrix[j+1][position] + 1;
			if (matrix[j-1][position] === true) {
			} else matrix[j-1][position] = matrix[j-1][position] + 1;
			if (matrix[j-1][position+1] === true) {
			} else matrix[j-1][position+1] = matrix[j-1][position+1] + 1;
			if (matrix[j][position+1] === true) {
			} else matrix[j][position+1] = matrix[j][position+1] + 1;
			if (matrix[j+1][position+1] === true) {
			} else matrix[j+1][position+1] = matrix[j+1][position+1] + 1;
		}
		if (j === 1 && matrix.length >= 3 && position === 1) {
			if (matrix[j+1][position] === true) {
			} else matrix[j+1][position] = matrix[j+1][position] + 1;
			if (matrix[j-1][position] === true) {
			} else matrix[j-1][position] = matrix[j-1][position] + 1;
			if (matrix[j-1][position+1] === true) {
			} else matrix[j-1][position+1] = matrix[j-1][position+1] + 1;
			if (matrix[j][position+1] === true) {
			} else matrix[j][position+1] = matrix[j][position+1] + 1;
			if (matrix[j+1][position+1] === true) {
			} else matrix[j+1][position+1] = matrix[j+1][position+1] + 1;
			if (matrix[j+1][position-1] === true) {
			} else matrix[j+1][position-1] = matrix[j+1][position-1] + 1;
			if (matrix[j][position-1] === true) {
			} else matrix[j][position-1] = matrix[j][position-1] + 1;
			if (matrix[j-1][position-1] === true) {
			} else matrix[j-1][position-1] = matrix[j-1][position-1] + 1;
		}
		if (j === 1 && matrix.length >= 3 && position === 2) {
			if (matrix[j+1][position] === true) {
			} else matrix[j+1][position] = matrix[j+1][position] + 1;
			if (matrix[j-1][position] === true) {
			} else matrix[j-1][position] = matrix[j-1][position] + 1;
			if (matrix[j-1][position-1] === true) {
			} else matrix[j-1][position-1] = matrix[j-1][position-1] + 1;
			if (matrix[j][position-1] === true) {
			} else matrix[j][position-1] = matrix[j][position-1] + 1;
			if (matrix[j+1][position-1] === true) {
			} else matrix[j+1][position-1] = matrix[j+1][position-1] + 1;
		}
		//3-ий ряд!
		if (j === 2 && matrix.length >= 3 && position === 0) {
			if (matrix[j-1][position] === true) {
			} else matrix[j-1][position] = matrix[j-1][position] + 1;
			if (matrix[j][position+1] === true) {
			} else matrix[j][position+1] = matrix[j][position+1] + 1;
			if (matrix[j-1][position+1] === true) {
				continue;
			} else matrix[j-1][position+1] = matrix[j-1][position+1] + 1;
		}
		if (j === 2 && position === 1) {
			if (matrix[j][position-1] === true) {
			} else matrix[j][position-1] = matrix[j][position-1] + 1;
			if (matrix[j][position+1] === true) {
			} else matrix[j][position+1] = matrix[j][position+1] + 1;
			if (matrix[j-1][position+1] === true) {
			} else matrix[j-1][position+1] = matrix[j-1][position+1] + 1;
			if (matrix[j-1][position] === true) {
			} else matrix[j-1][position] = matrix[j-1][position] + 1;
			if (matrix[j-1][position-1] === true) {
			} else matrix[j-1][position-1] = matrix[j-1][position-1] + 1;
		}
		if (j === 2 && position === 2) {
			if (matrix[j-1][position] === true) {
			} else matrix[j-1][position] = matrix[j-1][position] + 1;
			if (matrix[j][position-1] === true) {
			} else matrix[j][position-1] = matrix[j][position-1] + 1;
			if (matrix[j-1][position-1] === true) {
				continue;
			} else matrix[j-1][position-1] = matrix[j-1][position-1] + 1;
		}
	}
	for (let i = 0; i < matrix.length; i++) {
		const element = matrix[i];
		element.forEach((elem, index) => elem === true ? element[index] = 1 : true)
	}
	return matrix;
}

module.exports = {
  minesweeper
};
