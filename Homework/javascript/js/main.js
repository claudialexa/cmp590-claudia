// // max of two

// function max(a, b) {
// 	if ( a > b) {
// 		return ("a");
// 	}
// 	else {
// 		return ("b");
// 	}
// }

// console.log(max (5,10));


// // max of three function

// function maxOfThree(x, y, z) {
// 	if (x> y) {
// 		if (x > z) {
// 			return x;
// 		}
// 		else {
// 			return z;
// 		}
// 	}
// 	else if (y > z) {
// 		return y;
// 	}
// 	else {
// 		return z;
// 	}

// }

// console.log(maxOfThree (10,20,30));

// // check for vowels

// function trueVowel(str) {
// 	switch (str) {
// 		case "a":
// 			return true;
// 			break;
// 		case "e":
// 			return true;
// 			break;
// 		case "i":
// 			return true;
// 			break;
// 		case "o":
// 			return true;
// 			break;
// 		case "u":
// 			return true;
// 			break;
// 		default:
// 			return false;
// 	}
// }

// console.log(trueVowel("e"));

// // sum and multiply

// function sum(a,b,c,d) {
// 	return a + b + c + d;
// }
// var total = sum(1,2,3,4);
// console.log(total);
 
// function multiply(a,b,c,d) {
// 	return a * b * c * d; 
// }
//  var total = multiply(1,2,3,4);
//  console.log(total);

// // pig latin

// function translate(){ 
// 	var string= "dog"; 
// 	var one= string.charAt(0);
// 	var two= 'ay'; 
// 	var three= string.replace(one,'') + one + two; 
// 	return three;
// }

// console.log(translate());


// // video reverse

// var name = "video"; 
// var separate = name.split("");
// var reversal = separate.reverse("");
// var reversed = reversal.join("");
// document.write(reversed);
// console.log(reversed);

// randomize three numbers

// var randomPrint = function(){

//     x = Math.floor(Math.random() * 100);
//     y = Math.floor(Math.random() * 100);
//     z = Math.floor(Math.random() * 100);

//    console.log(x, y, z);

//    if(x > y && x > z) {
//         var biggest = x;
//         console.log("The greatest number is" + " " + x);
//    } else if(y > z && y > x) { 
//        console.log("The greatest number is" + " " + y);
//        var biggest = y;
//    } else if(z > y && z > x) {   
//        console.log("The greatest number is" + " " + z);
//        var biggest = z;
//    }
//    return biggest;
// };

// randomPrint();

// // longest word

// function findLongestWord(array) {
// 	var longestWord = array[0];
// 	for (var i = 1; i < array.length; i++) {
// 		if (longestWord.length < array[i].length) {
// 			longestWord = array[i];
// 		}
// 	}
// 	return longestWord.length;
// }

// console.log(findLongestWord(['rodeo', 'potato', 'tomatoes'], 3));


// // filter longest word

// var filterLongWords = function (array, i) {
//     var newArray = [];
//     array.forEach(function (element) {
//         if( element.length > i ) { newArray.push(element)};
//     });
//     return newArray;
// }

// console.log(filterLongWords(["tomato", "pug", "no", "dog", "computers"], 5));

// //frequency listing

// var charFreq = function(string){
//     var array = string.split("");
//     var frequency = {};
//     console.log(array.indexOf("a"));
   
//     array.forEach(function(element){
//         if (!frequency[element]) {frequency[element] = 0};
//         frequency[element] += 1;  
//     })
//     return frequency
// }

// console.log(charFreq("zyzzzyyzyzyyzyyzyyzyyzyy"));