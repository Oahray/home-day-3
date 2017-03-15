var findMissing = function(arr1, arr2) {
	// get array from the function arguments.
	var myArr = Array.from(arguments);
	var len1 = myArr[0].length, len2 = myArr[1].length;
	var bigger, smaller, result;
	if (len1 === len2) {
		return 0;
	}
	else if (len1 > len2) {
		bigger = myArr[0];
		smaller = myArr[1];
	}
	else {
		bigger = myArr[1];
		smaller = myArr[0];
	}
	// the number in the bigger array 
	// but not in the smaller one
	// is the missing number.
	for (var i = 0; i < bigger.length; i++) {
		var found = false;
		for(var j = 0; j < smaller.length; j++) {
			if (bigger[i] === smaller[j]) {
				found = true;
			}
		}
		if (!found) {
			result = bigger[i];
		}
	}
	return result;
};

module.exports = findMissing;