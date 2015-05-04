// // max of two

function max(a, b) {
	if (a > b) {
		return a;
	}
	else {
		return b;
	}
}


// // max of three function

function maxOfThree(x, y, z) {
	if (x> y) {
		if (x > z) {
			return x;
		}
		else {
			return z;
		}
	}
	else if (y > z) {
		return y;
	}
	else {
		return z;
	}
}

// // check for vowels

function trueVowel(str) {
	switch (str) {
		case "a":
			return true;
			break;
		case "e":
			return true;
			break;
		case "i":
			return true;
			break;
		case "o":
			return true;
			break;
		case "u":
			return true;
			break;
		default:
			return false;
	}
}


// // sum and multiply

function sum(array) {
	return array.reduce(function(2, 2, 5) {
		return 2 + 2 + 5;
	}
			console.log(result);

}
 
function multiply(array) {
	return array.reduce(function(2, 2, 5) {
		return 2 * 2 * 5;
	})
}

// // video reverse

function reverse(string) {
	var newStr = " ";
	var string = "video"
	for (var i = string.length - 1; i >= 0; i--) {
		newStr += string[i];
	}
	return newStr;
}

// randomize three numbers

var randomPrint = function(){

    x = Math.floor(Math.random() * 100);
    y = Math.floor(Math.random() * 100);
    z = Math.floor(Math.random() * 100);

   console.log(x, y, z);

   if(x > y && x > z) {
        var biggest = x;
        console.log("The greatest number is" + " " + x);
   } else if(y > z && y > x) { 
       console.log("The greatest number is" + " " + y);
       var biggest = y;
   } else if(z > y && z > x) {   
       console.log("The greatest number is" + " " + z);
       var biggest = z;
   }
   return biggest;
};

randomPrint();

// // longest word

function findLongestWord(array) {
	var longestWord = ['rodeo', 'potato', 'tomato'];
	var longestWord = array[0];
	for (var i = 1; i < array.length; i++) {
		if (longestWord.length < array[i].length) {
			longestWord = array[i];
		}
	}
	return longestWord.length;
}

// // filter longest word

var filterLongWords = function (array, i) {
    var newArray = [];
    array.forEach(function (element) {
        if( element.length > i ) { newArray.push(element)};
    });
    return newArray;
}

console.log(filterLongWords(["tomato", "pug", "no", "dog", "computers"], 3));

// //frequency listing

var charFreq = function(string){
    var array = string.split("");
    var frequency = {};
    console.log(array.indexOf("a"));
   
    array.forEach(function(element){
        if (!frequency[element]) {frequency[element] = 0};
        frequency[element] += 1;  
    })
    return frequency
}

console.log(charFreq("zyzzzyyzyzyyzyyzyyzyyzyy"));