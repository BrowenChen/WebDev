//Find and replace "aaabbc" to "aaaeec"
var newPhrase = "ee"
var original = "aaabbc"


var findPhrase = function(string, match){   
	var count = 0;
	for (var i = 0; i < original.length; i++){
		if (string[i] == match[count]){
			count += 1;
		}
	}
	if (count == match.length){
		var newString = replacePhrase(string, string.indexOf(match[0]), string.indexOf(match[0]) + count, newPhrase)
		return true
	}               
	return false;   
}

var replacePhrase = function(string, firstInd, secondInd, phrase){
	console.log("Replacing")
	var newString = string.substring(0, firstInd) + phrase + string.substring(firstInd + phrase.length)	
	console.log(string)
	console.log(newString)
}

console.log(findPhrase(original, "bb"))

var Person = function() {
	// console.log("Instance created");
}

var person1 = new Person();
var person2 = new Person();

console.log([1,2,3].toString())
console.log(new Date().toString())