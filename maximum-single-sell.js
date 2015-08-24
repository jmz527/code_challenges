// Calculate maximum possible profit given array of NAVs

//___ARRAYS________//
// Maximum profit would be 18, buying on day 5, at 2, and selling on day 6, at 20
var arry = [7, 24, 8, 15, 2, 20];
var even_arry = [4, 2, 6, 8, 10, 12];
var odd_arry = [3, 1, 5, 7, 9];
var doubles_arry = [1, 3, 1, 10];





// Best program would be one that finds the low in the array
// then looks for the high out of all the entries after.
// If there aren't any, it should find the next lowest and repeat.




















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