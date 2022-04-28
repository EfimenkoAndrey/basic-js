const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
	let workStr = domains.join('.');
	let constStr = domains.join('.');
	let resStr = '';
	let str = '';
	let count = 0;
	let resObj = {};
	for (let i = workStr.length-1; i <= workStr.length && i >= 0; i--) {
		const num = workStr.length - i;
		if (workStr[i] === '.' || i === 0) {
			if (workStr.length === constStr.length) {
				str = constStr.slice(-num);
			} else {
				str = constStr.slice(-(constStr.length - workStr.length));
			}
			if (resStr.includes(workStr.slice(-num))) {
				break;
			}
			if (!(workStr.slice(-num).includes('.'))) {
				resStr += '.' + workStr.slice(-num);
				workStr = workStr.slice(0, i);
				domains.forEach(el => el.includes(str) ? count++ : null);
				resObj[resStr] = count;
				count = 0;
			} else {
				resStr += workStr.slice(-num);
				workStr = workStr.slice(0, i);
				domains.forEach(el => el.includes(str) ? count++ : null);
				resObj[resStr] = count;
				count = 0;
			}
		}
	}
	return resObj;
}

module.exports = {
  getDNSStats
};
