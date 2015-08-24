// Marble bag array:
var marble_bag = ['red', 'blue', 'green', 'blue', 'red'];

function randomMarbles(bag) {
	var marble, r;

	function randomIndex(max) {
		return Math.floor(Math.random() * max);
	}

	function selectMarble(arry) {
		r = randomIndex(arry.length);
		return arry.splice(r, 1)[0];
	}

	for (i = bag.length; i > 0; i--) {
		marble = selectMarble(bag);
	    console.log(marble);
	}
}


var bag = {red: 20, blue: 50, green: 30 };
// var bag = {red: 2, blue: 2, green: 2};
// This is for the object with string-number key-values
function bagMarbles(bag) {
	var marble, rKey, Ms, l;
	l = Object.keys(bag).length;

	function randomKey(keyArray) {
		return keyArray[Math.floor(Math.random() * keyArray.length)];
	}

	function selectMarble(obj) {
		rKey = randomKey(Object.keys(obj));
		Ms = obj[rKey];
		Ms--;
		obj[rKey] = Ms;

		if (Ms === 0) {
			delete obj[rKey];
			l--;
		}
		return rKey;
	}

	while (l > 0) {
		marble = selectMarble(bag);
		console.log(marble);
	}
}