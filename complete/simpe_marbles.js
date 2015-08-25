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