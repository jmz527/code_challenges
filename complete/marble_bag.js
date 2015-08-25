// If marble bag is an array of strings:
var marble_bag = ['red', 'blue', 'green', 'blue', 'red'];

function bagOfMarbles(bag) {
	var marble;

	// Generates a random number to simulate the selection process, and returns randomly selected marble
	function selectMarble(arry) {
		return arry.splice((Math.floor(Math.random() * (arry.length))), 1)[0];
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

function bagOfThousands(bag) {
	var keyArr, rKey, l, marble;
	
	// Initial variables:
	keyArr = Object.keys(bag);
	l = keyArr.length;

	// Selects a random marble key to simulate the selection process, and returns the key, and decreases the key-value by 1:
	function selectMarble(bag) {
		rKey = keyArr[Math.floor(Math.random() * l)];
		bag[rKey] = bag[rKey]-1;

		// If the marble key-value is depleated, delete the entry and reset key array and length:
		if (bag[rKey] === 0) {
			delete bag[rKey];
			keyArr = Object.keys(bag);
			l = keyArr.length;
		}
		return rKey;
	}

	// Loops through the bag object, until keys are depleated:
	while (l > 0) {
		marble = selectMarble(bag);
		console.log(marble);
	}	
}
// bagOfThousands(bag);


// If marble bag had thousands of Colors,
// I would have the marble bag be an array of arrays:
var marble_bag_three = [['red', 2],['blue', 2],['green', 2],['purple', 2],['yellow', 2],['orange', 2]];

function bagOfThousandsOfColors(bag) {
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
// bagOfThousandsOfColors(marble_bag_three);