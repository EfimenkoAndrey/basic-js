const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
	if (!Array.isArray(members)) {
		return false
	} else {
		let nameTeam = members.filter(element => typeof element === "string").map(a => a.trim()).map(x => x[0].toUpperCase()).sort().join('');
		console.log(nameTeam);
		if (nameTeam.length === 0) {
			return false
		} else return nameTeam;
	}
}

module.exports = {
  createDreamTeam
};
