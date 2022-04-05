const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {
	stack: [],
	getLength() {
		this.stack.length;
		return this;
	},
	addLink(value) {
		if (value === undefined) {
			this.stack.push(`(  )`);
		} else this.stack.push(`~~( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (typeof position !== 'number' || position === 0 || position < 0 || !(Number.isInteger(position)) || position > this.stack.length - 1) {
			this.stack = [];
			throw new Error(`You can't remove incorrect link!`)
		} else {
			this.stack.splice(position - 1, 1);
			return this;
		}
	},
	reverseChain() {
		this.stack.reverse();
		return this;
	},
	finishChain() {
		let a = this.stack.join('').substring(2)
		this.stack = [];
		return a;
	}
};

module.exports = {
  chainMaker
};
