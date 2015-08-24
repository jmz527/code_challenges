// Simulate picking a marble out of a bag-o-marbles
// Colors: red, green, blue.
// Print color of each marble.

// Marble bag array:
var marble_bag = ['red', 'blue', 'green', 'blue', 'red'];


// 1.
function bagOfMarbles(bag) {
	var marble;

	for (i = bag.length; i > 0; i--) {
	    marble = bag.pop();
	    console.log(marble);
	}
}

// 2.
function Marbles(bag) {
	var marble;

	function selectMarble(arry) {
		return arry.pop();
	}

	for (i = bag.length; i > 0; i--) {
		marble = selectMarble(bag);
	    console.log(marble);
	}
}

// 3.
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

// 4.
// If marble bag is an array of strings:
var marble_bag = ['red', 'blue', 'green', 'blue', 'red'];

function bagOfMarbles(bag) {
	var marble;

	// Generates a random number to simulate the selection process:
	function randomIndex(max) {
		return Math.floor(Math.random() * max);
	}

	// Returns randomly selected marble
	function selectMarble(arry) {
		return arry.splice(randomIndex(arry.length), 1)[0];
	}

	// Loops through the bag array, until empty:
	for (i = bag.length; i > 0; i--) {
		marble = selectMarble(bag);
		console.log(marble);
	}
}
// bagOfMarbles(marble_bag);



// Runtime complexity of selectMarble?


// Runtime complexity of entire program?


// Change program for thousands of marbles

// 4.
// var bag = {red: 2, blue: 1, green: 2 };

function bagOfThousands(bag) {
	var keyArr, rKey, l, marble;

	function selectMarble(bag) {
	    keyArr = Object.keys(bag);
	    l = keyArr.length;
	   
		rKey = keyArr[Math.floor(Math.random() * l)];
		n = bag[rKey]-1;
		bag[rKey] = n;

		if (bag[rKey] === 0) {
		    l--;
			delete bag[rKey];
			keyArr = Object.keys(bag);
		}
		return rKey;
	}
	
	function loopBag() {
	    while (l > 0) {
		    selectMarble(bag);
	    	l = 0;
    // 		console.log(marble);
    	}	
	}
	
// 	marble = selectMarble(bag);


    // selectMarble(bag);

// 		console.log(bag[rKey]);
// 		console.log(bag);
// 		console.log(rKey);
// 		console.log(keyArr);
	    console.log(l);
// 	    console.log('------');
	   // console.log(marble);


	return marble;
}
// bagOfThousands(bag);




// 3.
var marble_bag_two = {red: 1, blue: 1, green: 1 };

function bagOfThousands(bag) {
	var keyArr, rKey, l, marble;

// 	// Generates a random key to simulate the selection process, returns randomly selected marble, and decreases the object's key-value by 1
	function selectMarble(obj) {
	    keyArr = Object.keys(obj);
	    l = keyArr.length;
	    
		rKey = keyArr[Math.floor(Math.random() * l)];
		obj[rKey] = obj[rKey]-1;
// 		console.log(obj[rKey]);
		console.log(obj);

// 		console.log(obj);
// 		console.log(keyArr);
// 	    console.log(l);

		if (obj[rKey] === 0) {
			delete obj[rKey];
			l--;
		  //  console.log('---Key Deleted---');
		  //  console.log(obj);
		}
		return rKey;
	}

	// while (l > 0) {
	// 	marble = selectMarble(bag);
	// 	console.log(marble);
	// }	
	// marble = selectMarble(bag);
	// return marble;
}
bagOfThousands(marble_bag_two);



// 2.
// var bag = {red: 20, blue: 50, green: 30 };
// // var bag = {red: 2, blue: 2, green: 2};
// // This is for the object with string-number key-values
// function bagMarbles(bag) {
// 	var marble, rKey, Ms, l;
// 	l = Object.keys(bag).length;

// 	function randomKey(keyArray) {
// 		return keyArray[Math.floor(Math.random() * keyArray.length)];
// 	}

// 	function selectMarble(obj) {
// 		rKey = randomKey(Object.keys(obj));
// 		Ms = obj[rKey];
// 		Ms--;
// // 		console.log(Ms);
// 		obj[rKey] = Ms;

// 		// console.log(rKey);
// // 		console.log(obj[rKey]);

// 		if (Ms === 0) {
// // 			console.log(rKey + ' deleted');
// 			delete obj[rKey];
// 			l--;
// 		}
// 		return rKey;
// 	}

// 	while (l > 0) {
// 		marble = selectMarble(bag);
// 		console.log(marble);
// 	}
// }

// 1.
// var marble_bag = {red: 20, blue: 50, green: 30 };
// // This is for the object with string-number key-values
// function bagMarbles(bag) {
//     // console.log(bag.blue);
    
//     for (var key in bag) {
//         var val = bag[key];
        
//         for (var v = val-1; v>-1; v--) {
//             console.log(key);
//             bag[key] = v;
//             // console.log(bag.key);
//         }
//         // console.log('Key: ' + key + ' | Value: ' + val)
//     }
// }







// Change program for thousands of Colors

var bag = [['red', 2],['blue', 2],['green', 2],['purple', 2],['yellow', 2],['orange', 2]];

// This is for the object with string-number key-values
function bagMarbles(bag) {
	var l, marble;
	l = bag.length;

	function randomMarble(array) {
		return array.splice(Math.floor(Math.random() * array.length), 1);
	}

	function selectMarble(arr) {
		var marble, marbleItem, marbleCount;
		marbleItem = randomMarble(arr)[0];
// 		console.log(marbleItem);
		marble = marbleItem[0];
		marbleCount = marbleItem[1];
		marbleCount--;
		marbleItem = [marble, marbleCount];
		
		if (marbleCount > 0) {
		    arr.push(marbleItem);   
		}
		else if (marbleCount === 0) {
		    l--;
		  //  console.log(l);
		}
        // console.log(arr);
        
        return marble;
	}

	while (l > 0) {
		marble = selectMarble(bag);
		console.log('Marble: ' + marble);
	}

// 	console.log(l);
// 	selectMarble(bag);
}


