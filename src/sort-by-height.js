const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
	let sortArr = []
	let resArray = arr.map(el => {
		if (el !== -1) {
			sortArr.push(el);
			el = ' ';
		} return el
	})
	sortArr.sort((a, b) => a -b);
	return resArray.map(x => {
		if (x === ' ') {
			return x = sortArr.shift();
		} return x;
	});
}

module.exports = {
  sortByHeight
};
