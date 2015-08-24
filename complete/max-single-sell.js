function maxProf(arr) {
	// Set profit to zero and set initial min to first indexed item
	var profit, min, minDay, max, maxDay;
	profit = 0;
	min = arr[0];
	minDay = 1;

	// Loop through array, starting at index 1 since we already set min to arr[0],...
	for (i=1; i<arr.length;i++) {
		// ...first we chech if new profit beats old profit...
	    p = arr[i] - min;
	    if (p > profit) {
	        profit = p;
	        max = arr[i];
	        maxDay = i+1;
	    }
	    //...then check if next item is the new min.
	    if (arr[i] < min) {
	        min = arr[i];
	        minDay = i+1;
	    }
	}
	// Print the results
	console.log('The maximum profit would have been ' + profit + ', by buying at ' + min + ' on day ' + minDay + ' and selling at ' + max + ' on day ' + maxDay);
}

// This program takes O(n) time and it only uses O(1) auxiliary storage.