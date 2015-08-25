// Given a dictionary, print all anagrams that match
var dict_arry = ["ACT", "ANTS", "ART", "BAT", "BAR", "CAT", "DOOR", "RAT", "TAB", "TAR"];

function anagrama(dict) {
	var anagrams, results, word, potent, potents, checkCount;
	anagrams = {};
	results = "";

	// Initial loop over dict:
	for (i=dict.length; i>1; i--) {
		word = dict.shift();
		potents = [];
		// Loop over the shifted dict:
		for (n=dict.length-1; n>-1; n--) {
		    potent = dict[n];
		    // Checks char length of words against one another:
			if (potent.length === word.length) {
				checkCount = word.length;
				// Loop over the letters in word
				for (var l in word) {
					// Loop over the letters in potential anagram
					for (var ch in potent) {
						// Comparing the letters
						if (potent[ch] === word[l]) {
							checkCount--;
						}
					}
				}
				// If all letters accounted for, push to anagram object
				if (checkCount === 0) {
				    potents.push(potent);
				}
			}
		}
		// If potents array has any anagrams, add the array to the object:
		if ((potents[0] !== undefined)) {
		    anagrams[word] = potents;
		}
	}
	// Two for loops creating the anagram results string
	for (var key in anagrams) {
		results+=key + ': ';
		for (var val in anagrams[key]) {
			results+=anagrams[key][val] + ', '
		}
	}
	// Desired outcome: "ACT: CAT, ART: RAT, TAR, BAT: TAB"
	console.log(results);
}