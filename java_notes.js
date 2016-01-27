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

//----------------------------------------------------------------
var playerOne = 500;
var playerTwo = 600;

var highScore = (playerOne > playerTwo) ? playerOne : playerTwo;

if (playerOne > playerTwo) {
    highScore = playerOne;
} else {
    highScore = playerTwo;
}

