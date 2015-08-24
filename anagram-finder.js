// Given a dictionary, print all anagrams that match

var dict_arry = ["ACT", "ANTS", "ART", "BAT", "BAR", "CAT", "DOOR", "RAT", "TAB", "TAR"];
// Desired outcome: "ACT: CAT, ART: RAT, TAR, BAT: TAB"

function anagrama(dict) {
	var dupe_dict = dict;
	var anagrams = {};
	var results = "";

	// Initial loop over dictionary
	for (i=dupe_dict.length; i>1; i--) {
		var word = dupe_dict.shift();
		anagrams[word] = [];
		
		for (n=dupe_dict.length-1; n>-1; n--) {
		    var potent = dupe_dict[n];
		    
			if (potent.length === word.length) {
				var checkCount = word.length;

				// Loop for letters in word
				for (var l in word) {
					// Loop for letters in potential anagram
					for (var ch in potent) {
						// Comparing the letters
						if (potent[ch] === word[l]) {
							checkCount--;
						}
					}
				}

				if (checkCount === 0) {
				    anagrams[word].push(potent);
				}
			}
		}
		// Removes unwanted keys from anagram object
		if (anagrams[word][0] === undefined) {
		    delete anagrams[word];
		}
	}

	// Two for loops creating the anagram results string
	for (var key in anagrams) {
		results+=key + ': ';
		for (var val in anagrams[key]) {
			results+=anagrams[key][val] + ', '
		}
	}
	// console.log(anagrams);
	console.log(results);
}