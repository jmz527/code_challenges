// If marble bag is an array of strings:
var marble_bag = ['red', 'blue', 'green', 'blue', 'red'];

function bagOfMarbles(bag) {
	var marble, r;

	// Generates a random number to simulate the selection process:
	function randomIndex(max) {
		return Math.floor(Math.random() * max);
	}

	// Returns randomly selected marble
	function selectMarble(arry) {
		r = randomIndex(arry.length);
		return arry.splice(r, 1)[0];
	}

	// Loops through the bag array, until empty:
	for (i = bag.length; i > 0; i--) {
		marble = selectMarble(bag);
	    console.log(marble);
	}
}
// bagOfMarbles(marble_bag);


// If marble bag had thousands of Marbles,
// I would have the marble bag be an object with color/amount key-values:
var marble_bag_two = {red: 2000, blue: 5000, green: 3000 };

function bagOfThousandsOfMarbles(bag) {
	var marble, rKey, Ms, l;
	l = Object.keys(bag).length;

	// Generates a random key to simulate the selection process:
	function randomKey(keyArray) {
		return keyArray[Math.floor(Math.random() * keyArray.length)];
	}

	// Returns randomly selected marble, and decreases the object's key-value by 1
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

	// Loops through the bag object, until keys are depleated:
	while (l > 0) {
		marble = selectMarble(bag);
		console.log(marble);
	}
}
// bagOfThousandsOfMarbles(marble_bag_two);


// If marble bag had thousands of Colors,
// I would have the marble bag be an array of arrays:
var bag = [['red', 2],['blue', 2],['green', 2],['purple', 2],['yellow', 2],['orange', 2]];

function bagMarbles(bag) {
	var l, marble;
	l = bag.length;

	// Slices a random array out of the marble bag array, simulating the selection process:
	function randomMarble(array) {
		return array.splice(Math.floor(Math.random() * array.length), 1);
	}

	// Selects a random "marble-value" array, and decreases the array's value by 1:
	function selectMarble(arr) {
		var marble, marbleItem, marbleCount;
		marbleItem = randomMarble(arr)[0];
		marble = marbleItem[0];
		marbleCount = marbleItem[1];
		marbleCount--;
		marbleItem = [marble, marbleCount];
		
		// If there are still marbles of that color, put it back in marble bag array:
		if (marbleCount > 0) {
		    arr.push(marbleItem);   
		}
		// If not, reset the array length
		else if (marbleCount === 0) {
			l--;
		}
		return marble;
	}

	// Loops through the marble bag array, until depleated:
	while (l > 0) {
		marble = selectMarble(bag);
		console.log('Marble: ' + marble);
	}
}
