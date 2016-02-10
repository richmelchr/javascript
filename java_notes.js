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

//--useful string methods------------------------------------------------------
var phrase = "this is some sample text";

console.log(phrase.length); //output will be 24
console.log(phrase.toUpperCase()); //output 'phrase' in all uppercase
var words = phrase.split(" "); //split this string into an array on a space
var position = phrase.indexOf("sample"); //var will equal 13
var segment = phrase.slice(0,8); //var will equal "this is"

if (phrase.indexOf("absent") == -1) { //indexOf returns -1 if
    console.log("this word does not occur.");
}
//--Date object-------------------------------------------------------
var today = new Date(); //date object
var y2k = new Date(2000, 0, 1); //create new date object with start time params
var todayMonth = today.getMonth();
var now = today.getTime();

//---Objects----------------------------------------------------------
var player1 = Object();
player1.name = "Fred";
player1.score = 1000;
player1.rank = 1;

var player2 = {name: "Tom", score: 500, rank: 2}; //Object creation shorthand

//--Create Method--
function playerDetails() {
    //display info about each player
    console.log(this.name + "has a rank of" + this.rank);
}

player1.logDetails = playerDetails; //you have created a new method to use on this object
player2.logDetails = playerDetails; //when you use this method it will run playerDetails()

player1.logDetails(); //calls the method from the above line

//---get Id-----------------------------------------------------------------
var mainTitle = document.getElementById("mainTitle");
console.log("this is an element of type: ", mainTitle.nodeType);
console.log("the inner HTML is ", mainTitle.innerHTML);
console.log("Child nodes: ", mainTitle.childNodes.length);

var myListItems = document.getElementsByTagName("li"); //this returns an array of all li elements
console.log(myListItems);

//--------------------------------------------------------------------------






//07 Debugging JavaScript // 1_commonErrors.mov
