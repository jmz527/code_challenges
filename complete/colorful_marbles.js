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