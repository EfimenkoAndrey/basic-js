const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
	let count = 1;
	let resStr = '';
	for (let i = 0;i < str.length;i++) {
		const el = str[i];
		if (el === str[i + 1]) {
			count++;
		} else {
			if (count === 1) {
				resStr += el;
			} else resStr += `${count}${str[i - 1]}`
			count = 1;
		}	
	}
	return resStr;
}

module.exports = {
  encodeLine
};
