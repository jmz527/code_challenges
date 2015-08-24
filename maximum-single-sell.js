// Calculate maximum possible profit given array of NAVs

//___ARRAYS________//
// Maximum profit would be 18, buying on day 5, at 2, and selling on day 6, at 20
var arry = [7, 24, 8, 15, 2, 20];
var even_arry = [4, 2, 6, 8, 10, 12];
var odd_arry = [3, 1, 5, 7, 9];
var doubles_arry = [1, 3, 1, 10];

// Set profit to zero and set initial min to first indexed item
// Loop through, first calculating if next item is the new min
// If not, calculate the new profit
function maxProf(arr) {
	var min = arr[0];
	var minDay = 1;
	var profit = 0;
	var max, maxDay;

	for (i=1; i<arr.length;i++) {
	    p = arr[i] - min;
	    if (p > profit) {
	        profit = p;
	        max = arr[i];
	        maxDay = i+1;
	        console.log(p);
	    }
	    
	    if (arr[i] < min) {
	        min = arr[i];
	        minDay = i+1;
	    }
// 		console.log(arr[i]);
	}

	console.log('The maximum profit would have been ' + profit + ', by buying at ' + min + ' on day ' + minDay + ' and selling at ' + max + ' on day ' + maxDay);
	// console.log(min + ' | ' + max + ' | ' + profit);
}


function maxProf(array) {
    var max, min, profit;
    
    min = Math.min.apply(null, array);
    max = Math.max.apply(null, array);
    
    profit = max - min;

    console.log('Min: ' + min);
    console.log('Max: ' + max);
    console.log('Profit: ' + profit);
}

// Returns the maximum possible profit given array of NAVs
function maxProfit(arry) {
	var dupe_arry = arry;
	var n, high, low;
	var max = 0;
	var min = 100;

	function minMax(old_max, high, old_min, low) {
		if (high > old_max) {
			max = high;
		}
		if (low < old_min) {
			min = low;
		}
	}

	for (i=0; i<dupe_arry.length;i++) {
		// Compare and find low/high
		if (dupe_arry[i] < n) {
			low = dupe_arry[i];
			high = n;
			// console.log('Low: ' + low + ', High: ' + high);
		}
		else if (dupe_arry[i] > n) {
			high = dupe_arry[i];
			low = n;
			// console.log('Low: ' + low + ', High: ' + high);
		}
		else if (dupe_arry[i] === n) {
			// console.log('Hold up, now! ' + dupe_arry[i] + ' is equal to ' + n);
		}
		minMax(max, high, min, low);

		// console.log('last number: ' + n + ' this number: ' + dupe_arry[i]);
		// console.log('-------');
		// console.log('new high: ' + max + ' new low: ' + min);
		// console.log('-------');
		n = dupe_arry[i];
	}
	console.log(max);
	console.log(min);
}

// Big-O notation