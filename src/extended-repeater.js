const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
	const objArr = options;
	let resStr = '';
	const objFunc = {
		repeatTimes() {
			let value = objArr.repeatTimes;
			if (value === undefined) resStr += str, this.addition();
			for (let i = 1; i <= value; i++) {
				if (!(Number.isInteger(value))) {
				} else resStr += `${str}`;
				this.addition();
				i < value ? this.separator() : '';
			}
			return resStr;
		},
		addition() {
			let value = objArr.addition;
			if (objArr.additionRepeatTimes === undefined) resStr += `${value === undefined ? '' : value}`;
			for(let i = 1; i <= objArr.additionRepeatTimes; i++) {
				resStr += value;
				i < objArr.additionRepeatTimes ? this.additionSeparator() : '';
			}
		},
		additionSeparator() {
			let value = objArr.additionSeparator;
			value === undefined ? resStr += '|' : resStr += value;
		},
		separator() {
			let value = objArr.separator;
			console.log(value);
			value === undefined ? resStr += '+' : resStr += value;
		}
	}
	return objFunc.repeatTimes();
}

module.exports = {
  repeater
};
