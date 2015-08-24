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



// Runtime complexity of selectMarble?


// Runtime complexity of entire program?


// Change program for thousands of marbles


var marble_bag = {red: 20, blue: 50, green: 30 };
// This is for the object with string-number key-values
function bagMarbles(bag) {
    // console.log(bag.blue);
    
    for (var key in bag) {
        var val = bag[key];
        
        for (var v = val-1; v>-1; v--) {
            console.log(key);
            bag[key] = v;
            // console.log(bag.key);
        }
        // console.log('Key: ' + key + ' | Value: ' + val)
    }
}


// Change program for thousands of Colors...I wouldn't?


// var marble_bag = {red: 1, blue: 1, green: 1, yellow: 1, purple: 1, orange: 1 };
// This is for the object with string-number key-values
// function bagMarbles(bag) {

//     for (var key in bag) {
//         var val = bag[key];
        
//         for (var v = val-1; v>-1; v--) {
//             console.log(key);
//             bag[key] = v;
//             // console.log(bag.key);
//         }
//         // console.log(bag);
//         // console.log('Key: ' + key + ' | Value: ' + val);
//     }
// }