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