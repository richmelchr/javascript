/**
 * Created by richmelchr on 1/26/2016.
 */
var a = 5;
var b = "5"; // quotation mark's make this a string
var c = 5;
var emptyVariable;

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
console.debug("this error is ok");
console.info("this error is ok");
console.warn("this error is ok");
console.error("this error is ok");

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

//--Loops------------------------------------------------------------------
for (var i=1; i<10; i++) {
    //do stuff, most common loop
}
//--break-----------------------
for (var i=1; i<10; i++) {
    if (i == 101) {
       break; //exit loop
    }
}
//--continue--------------------
for (var i=0; i<10; i++) {
    if (i%5 == 0) {
        continue;   //done with this iteration, move us back to top of loop
                    //ignore all following commands
    }
}

//------------------------------
var loopVar = 1;
while (loopVar < 10) {
    //do something
    loopVar++;
}
//-------------------------------
do {
    //do something
    //while loop not very common
    loopVar++;
} while (loopVar < 10);
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

//--Functions------------------------------------------------------------------
function myFunction() {
    //define functions before call
    console.log("we're in the function");
}

function mySecond(x, y) {
    var myVar = x * y;
    console.log(myVar);
    return myVar;
}

var myResult = mySecond(6, 9);

//functions can have return statements or not, anything goes.
//function calls with extra parameters are ignored
//function calls with to few parameters treat the missing param's as undefined

//--Arrays--------------------------------------------------------------------
var manyValues = [];

manyValues[0] = 3;
manyValues[1] = "mouse";

var moreValues = [50, 60, "mouse"];

console.log(manyValues[1]);
console.log(moreValues.length);

var reverseVal = moreValues.reverse();
var joinVal = moreValues.join();
var sortVal = moreValues.sort();

//--isNaN------------------------------------------------------------------------
var numThree = "55"; //could be "abc" depending on user input
var myNumber = Number(numThree); //make it a number
if (!isNaN(myNumber)) { //checking to see if 'myNumber' is not-not a number "!"
    console.log("It is a number");
}

var floating = 200.6;
var nonFloat = Math.round(floating); //round number to nearest int

var some23 = 200, some34 = 1000, some31 = 4;
var biggest = Math.max(some23, some34, some31);     //return biggest var
var smallest = Math.min(some23, some34, some31);    //return smallest var

//Math.PI
//Math.random()
//Math.sqrt()
//Math.log()

//--Changing the DOM------------------------------------------------------------
var  myContent =  document.getElementById("mainTitle");
myContent.setAttribute("align", "right"); //add align="right" to item with Id="mainTitle"

mainTitle = document.getElementById("mainTitle");
console.log(mainTitle.innerHTML); //displays text inside "mainTitle"

var first = document.getElementById("first"); //gets all html inside div tag
console.log(first.innerHTML);   //prints out all html inside Id tag

//--Creating the DOM------------------------------------------------------------
var abc = document.getElementById("abc");
var newLi = document.createElement("li"); //could be <h1> or <p> or <etc>...
abc.appendChild(newLi);

var myText = document.createTextNode("this li created with JavaScript");
newLi.appendChild(myText);

//same as doing the above 5 lines
var newText = document.createTextNode("more condensed JavaScript");
document.getElementById("abc").appendChild(document.createElement("li")).appendChild(newText);

//grab a specific un-titled li element
var abcTwo = document.getElementById("abc");
var newLiSecond = document.createElement("li"); //create new Li for each insert
var secondItem = abcTwo.getElementsByTagName("li")[1]; //grab second "li" element
abcTwo.insertBefore(newLiSecond, secondItem); //creates empty "li element"
//---------------------------------------------------------------------------
/*
00 Introduction
    -Welcome
    -Prerequisites
    -ExerciseFiles
01 Getting Started
    -IntroJS
    -Creating
    -Tools
02 Core JavaScript Syntax
    -Structure
    -Where
    -Variables
    -Conditional
    -Operators
    -Console
    -Loops
    -Functions
03 Types and Objects
    -Arrays
    -Numbers
    -Strings
    -Dates
    -Objects
04 Understanding the DOM
    -What is the DOM
    -Nodes
05 Working with the DOM
    -GetElements
    -ChangingDOM
    -CreateDOM
06 Working with Events and Event Listeners
    *Event Intro
    Click Load
    Focus Blur
    Timers
07 Debugging JavaScript
    -Common Errors
    Firebug
    Debugging
08 Building Smarter Forms
    Forms Intro
    Prevent Submit
    Hide Show
09 UI Enhancement
    Style Intro
    Applying Classes
    Inline Styles
10 JavaScript Best Practices
    Style Guide
    Minify
    Code Check
11 JavaScript Libraries
    JS Libs
    Multiple
    jQuery
    CDN
12 JavaScript and HTML5
    JS HTML5
    Modern
    Strict
13 Advanced JavaScript Features
    Avoid
    RegExp
    Ajax
    ObjProto
14 Putting it all Together
    Count Down
    Resize
    Accordion
15 Conclusion
    Where
    Goodbye
 */


//
