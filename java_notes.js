/**
 * Created by richmelchr on 1/26/2016.
 */
var a = 5;
var b = "5"; // quotation mark's make this a string
var c = 5;

if (a == c) {
    console.log("they equal");
} else {
    alert("not equal");
}

//&& logical and
//|| logical or

//--------Ternary Operator--------------------------------------
var playerOne = 500;
var playerTwo = 600;

var highScore = (playerOne > playerTwo) ? playerOne : playerTwo;
//the above and below statements are exactly the same.
if (playerOne > playerTwo) {
    highScore = playerOne;
} else {
    highScore = playerTwo;
}
//-Console------------------------------------------------------
console.log("testing console");

//--useful methods------------------------------------------------------
var phrase = "this is some sample text";

console.log(phrase.length); //output will be 24
console.log(phrase.toUpperCase()); //output 'phrase' in all uppercase
var words = phrase.split(" "); //split this string into an array on a space
var position = phrase.indexOf("sample"); //var will equal 13

if (phrase.indexOf("absent") == -1) { //indexOf returns -1 if
    console.log("this word does not occur.");
}
//-------------------------------------------------------------


//03 Types and Objects // Strings
