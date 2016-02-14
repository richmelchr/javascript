/**
 * Created by richmelchr on 1/26/2016.
 */
function simpleVariables() {
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
}
//--------Ternary Operator--------------------------------------
function ternaryOperator() {
    var playerOne = 500;
    var playerTwo = 600;

    var highScore = (playerOne > playerTwo) ? playerOne : playerTwo;

    //the above and below statements are exactly the same.
    if (playerOne > playerTwo) {
        highScore = playerOne;
    } else {
        highScore = playerTwo;
    }
}
//-Console------------------------------------------------------
function consoleTest() {
    console.log("testing console");
    console.debug("this error is ok");
    console.info("this error is ok");
    console.warn("this error is ok");
    console.error("this error is ok");
}
//--useful string methods------------------------------------------------------
function stringDemo() {
    var phrase = "this is some sample text";

    console.log(phrase.length); //output will be 24
    console.log(phrase.toUpperCase()); //output 'phrase' in all uppercase
    var words = phrase.split(" "); //split this string into an array on a space
    var position = phrase.indexOf("sample"); //var will equal 13
    var segment = phrase.slice(0, 8); //var will equal "this is"

    if (phrase.indexOf("absent") == -1) { //indexOf returns -1 if
        console.log("this word does not occur.");
    }
}
//--Date object-------------------------------------------------------
function dateDemo() {
    var today = new Date(); //date object
    var y2k = new Date(2000, 0, 1); //create new date object with start time params
    var todayMonth = today.getMonth();
    var now = today.getTime();
}
//--Loops------------------------------------------------------------------
function loopDemo() {
    for (var i = 1; i < 10; i++) {
        //do stuff, most common loop
    }
//--break-----------------------
    for (var i = 1; i < 10; i++) {
        if (i == 101) {
            break; //exit loop
        }
    }
//--continue--------------------
    for (var i = 0; i < 10; i++) {
        if (i % 5 == 0) {
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
}
//---Objects----------------------------------------------------------
function objectDemo() {
    var player1 = Object();
    player1.name = "Fred";
    player1.score = 1000;
    player1.rank = 1;

    var player2 = {name: "Tom", score: 500, rank: 2}; //Object creation shorthand
}
//--Create Method--------
function createMethod() {
    function playerDetails() {
        //display info about each player
        console.log(this.name + "has a rank of" + this.rank);
    }

    player1.logDetails = playerDetails; //you have created a new method to use on this object
    player2.logDetails = playerDetails; //when you use this method it will run playerDetails()

    player1.logDetails(); //calls the method from the above line
}
//--Prototype-----------
//note: not the "Prototype Library"
function protoDemo() {
    function Player(name, score, rank) { //constructor function to create Objects with passed in parameters | note: the uppercase
        this.name = name;
        this.score = score;
        this.rank = rank;
    }

    Player.prototype.logInfo = function () {
        console.log("I am: ", this.name);
    };
    Player.prototype.promote = function () {
        this.rank++;
        console.log("My new rank is: ", this.rank);
    };

    var fred = new Player("Fred", 10000, 5);
    fred.logInfo();
    fred.promote();
}

//---get Id-----------------------------------------------------------------
function getId() {
    var mainTitle = document.getElementById("mainTitle");
    console.log("this is an element of type: ", mainTitle.nodeType);
    console.log("the inner HTML is ", mainTitle.innerHTML);
    console.log("Child nodes: ", mainTitle.childNodes.length);

    var myListItems = document.getElementsByTagName("li"); //this returns an array of all li elements
    console.log(myListItems);
}
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
function arrayDemo() {
    var manyValues = [];

    manyValues[0] = 3;
    manyValues[1] = "mouse";

    var moreValues = [50, 60, "mouse"];

    console.log(manyValues[1]);
    console.log(moreValues.length);

    var reverseVal = moreValues.reverse();
    var joinVal = moreValues.join();
    var sortVal = moreValues.sort();
}
//--isNaN------------------------------------------------------------------------
function nanDemo() {
    var numThree = "55"; //could be "abc" depending on user input
    var myNumber = Number(numThree); //make it a number
    if (!isNaN(myNumber)) { //checking to see if 'myNumber' is not-not a number "!"
        console.log("It is a number");
    }
}
function mathMethods() {
    var floating = 200.6;
    var nonFloat = Math.round(floating); //round number to nearest int

    var some23 = 200, some34 = 1000, some31 = 4;
    var biggest = Math.max(some23, some34, some31);     //return biggest var
    var smallest = Math.min(some23, some34, some31);    //return smallest var

    //Math.PI
    //Math.random()
    //Math.sqrt()
    //Math.log()
}
//--Changing the DOM------------------------------------------------------------
function editDOM() {
    var myContent = document.getElementById("mainTitle");
    myContent.setAttribute("align", "right"); //add align="right" to item with Id="mainTitle"

    mainTitle = document.getElementById("mainTitle");
    console.log(mainTitle.innerHTML); //displays text inside "mainTitle"

    var first = document.getElementById("first"); //gets all html inside div tag
    console.log(first.innerHTML);   //prints out all html inside Id tag
}
//--Creating the DOM------------------------------------------------------------
function createDOM() {
    var abc = document.getElementById("abc");
    var newLi = document.createElement("li"); //could be <h1> or <p> or <etc>...
    abc.appendChild(newLi);

    var myText = document.createTextNode("this li created with JavaScript");
    newLi.appendChild(myText);
}

//same as doing the above 5 lines
function createDOMsimple() {
    var newText = document.createTextNode("more condensed JavaScript");
    document.getElementById("abc").appendChild(document.createElement("li")).appendChild(newText);
}

//grab a specific un-titled li element
function createDOMmore() {
    var abcTwo = document.getElementById("abc");
    var newLiSecond = document.createElement("li"); //create new Li for each insert
    var secondItem = abcTwo.getElementsByTagName("li")[1]; //grab second "li" element
    abcTwo.insertBefore(newLiSecond, secondItem); //creates empty "li element"
}
//--Events-----------------------------------------------------------------------
/* HTML
<button onclick="alert('Hello World';"> //sloppy event listener
        //run some JavaScript
</button>
*/

//very typical usage because of browser cross compatibility.
function onClickDemo() {
    var ulClick = document.getElementById("abc");
    ulClick.onclick = function () {              //non typical use. works past IE:8
        var test = ulClick.style.color;
        if (test == "black") {
            this.style.color = "red";
        } else {
            this.style.color = "black";
        }
    };
}

//typical usage for web standards. using jQuery is a best practice to get around browser compatibility
function eventListen() {
    var redChange = document.getElementById("abc").getElementsByTagName("li")[0];
    redChange.addEventListener('click', eventFunction, false);  //note: not in use on IE:8
    redChange.addEventListener('click', eventFunctionTwo, false);
    function eventFunction() {
        var test = this.style.color;
        if (test == "black") {
            this.style.color = "red";
        } else {
            this.style.color = "black";
        }
    }
    function eventFunctionTwo() {
        //this displays the usability of having multiple .addEventListener() to a single element
    }
    //document.removeEventListener('click', eventFunction, false);
}

//--Common Events----------
function testEvent() {
    var myImage = document.getElementById("cat");
    myImage.onclick = function() {
        console.log("you clicked my img");
    }
}

//--Form Events-----------
function monitorForm() {
    var emailField = document.getElementById("email");

    emailField.onfocus = function() {
        if (emailField.value == "your email") {
            emailField.value = "";
        }
    };
    emailField.onblur = function() {
        if (emailField.value == "") {
            emailField.value = "your email";
        }
    };
}

//--Timers-------------------------------------------------------------------
function timerDemo() {
    function simpleMessage() {
        alert("this demonstrates the 'setTimeout' method");
    }
    setTimeout(simpleMessage, 1000); //delays calling the passed in function
}

//this demonstrates the setInterval() method
//and also cycles through 3 images
function intervalDemo() {
    var myCat = document.getElementById("myCat");
    var imageArray = ["images/cat.png", "images/cat2.png", "images/cat3.png"];
    var imageIndex = 0;

    function changeImg() {
        myCat.setAttribute("src", imageArray[imageIndex]);
        imageIndex++;
        if (imageIndex >= imageArray.length) {
            imageIndex = 0;
        }
    }

    var intervalHandle = setInterval(changeImg, 2000);

    //stops image from changing by clearing the setInterval() delay
    myCat.onclick = function() {
        clearInterval(intervalHandle); //clearInterval method
    };
}

//--Forms-------------------------------------------------------------------
function preventSubmit() {
    document.getElementById("myForm").onsubmit = function() {
    var emailValue = document.getElementById("email").value;
        if (emailValue == "" || emailValue == "your email" ) {
            //"your email" is default input value
            document.getElementById("errorMessage").innerHTML = "Provide email";
            //to Stop a form from submitting
            return false;
        } else {
            document.getElementById("errorMessage").innerHTML = "";
            //reset and allow form to submit
            return true;
        }
    };
    //note: this function can be associated with monitorForm() function
}

//--Style--------------------------------------------------------------------
function styleGuide() {
    //changes first <li> of #abc to red
    var id = document.getElementById("abc");
    var li = id.getElementsByTagName("li")[1];
    li.style.color = "red";
}

function swapClass() {
    //this function demonstrates how its more efficient sometimes to swap between a CSS class
    //already defined than to create tons of code for each .style property
    var id = document.getElementById("abc");
    id.onclick = function() {
        var li = id.firstElementChild;
        if (li.className == "swapClass0") {
            li.className = "swapClass1";
        } else {
            li.className = "swapClass0";
        }
    };
}

function inlineStyles() {
    //animates cat picture from left to right 200px
    var currentPos = 0;
    var intervalHandle;

    function beginAnimate() {
        var cat = document.getElementById("myCat");
        cat.style.position = "absolute";
        cat.style.left = "0px";
        //cause the animateBox function to be called
        intervalHandle = setInterval(animateBox, 50);
    }
    function animateBox() {
        //set new position
        currentPos+=5;
        var cat = document.getElementById("myCat");
        cat.style.left = currentPos + "px";

        if (currentPos > 200) {
            //clear interval
            clearInterval(intervalHandle);
            //reset custom inline styles
            cat.style.position = "";
            cat.style.left = "";
            cat.style.top = "";
        }
    }
    setTimeout(beginAnimate, 1000); //delay start of animation
}
//--Regular expressions--------------------------------------------
function regExp() {
    var myRE = /hello/; //short version
    //or
    var myREG = new RegExp("hello"); //long version
    //
    var myString = "does this sentence contain hello?";
    if (myRE.test(myString)) {
        alert("yes");
    }
}

function moreRegExp() {
    var regA = new RegExp("^hello");    //^ look for 'hello' at the |start| of the string
    var regB = new RegExp("hello$");    //$ look for 'hello' at the |end| of the string
    var regC = new RegExp("hel+o");     //+ look for 'l' used |once or more|. "helo", "hellllllo", etc..
    var regD = new RegExp("hel*o");     //* look for 'l' used |zero or more|. "heo", "helllllo", etc..
    var regE = new RegExp("hel?o");     //? look for 'l' used |zero or one|. "heo", "helo"
    var regF = new RegExp("hi|by");     //| look for 'hi' |or| 'by' used. true if either found
    var regG = new RegExp("he..o");     //. look for any character
    var regH = new RegExp("\wello");    //\w look for alphanumeric or underscore _
    var regI = new RegExp("\bhello");   //\b look for word boundary, hello must appear after a space or new line
    var regJ = new RegExp("[crnd]ope"); //[...] range of chars to match for. "cope", "rope", "nope", etc..
    //list goes on and on

    var zip = new RegExp("^[0-9]{5}(?:-[0-9]{4})?$");
    //check for valid format for US Zip code with optional 4 digit extension

    //Regular expressions are widely available, check for existing code before creating one
    //and also look for regular expression creators and editors
}
function validateEmail(email) {//checks for valid email address
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
//--Ajax demo---------------------------------------------------------------
function ajax() {
    // 1: create the request
    var myRequest;

    //feature check!
    if (window.XMLHttpRequest) {
        myRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //2: create an event handler for our request to call back
    myRequest.onreadystatechange = function() {
        console.log("this was called");
        console.log(myRequest.readyState); //displays current ready state of ajax call
        if (myRequest.readyState == 4) {
            var p = document.createElement("p");
            var t = document.createTextNode(myRequest.responseText);
            p.appendChild(t);
            document.getElementById("ajaxDemo").appendChild(p);
        }
    };

    //open and send it
    myRequest.open('GET', 'ajax.txt', true);
    //any parameters?
    myRequest.send(null);
}
//--Countdown Demo--------------------------------------------------------
function countdown() {
    var secondsRemaining;
    var intervalHandle;

    function resetPage() {
        document.getElementById("inputArea").style.display = "block";
    }

    function tick() {
        //grab the h1
        var timeDisplay = document.getElementById("time");

        //turn seconds into mm:ss
        var min = Math.floor(secondsRemaining / 60);
        var sec = secondsRemaining - (min * 60);

        //add a leading zero (as a string value) if seconds less than 10
        if (sec < 10) {
            sec = "0" + sec;
        }
        //concatenate with colon
        var message = min.toString() + ":" + sec;
        //now change the display
        timeDisplay.innerHTML = message;

        //stop if down to zero
        if (secondsRemaining == 0) {
            alert("Done!");
            clearInterval(intervalHandle);
            resetPage();
        }
        //subtract from seconds remaining
        secondsRemaining--;
    }

    function startCountdown() {
        //get contents of the "minutes" text box
        var minutes = document.getElementById("minutes").value;
        //check if not a number
        if (isNaN(minutes)) {
            alert("Please enter a number!");
            return;
        }
        //how many seconds?
        secondsRemaining = minutes * 60;
        //every second, call the "tick" function
        intervalHandle = setInterval(tick, 1000);
        //hide the form
        document.getElementById("inputArea").style.display = "none";
    }

    window.onload = function() {
      var inputMinutes = document.createElement("input");
        inputMinutes.setAttribute("id", "minutes");
        inputMinutes.setAttribute("type", "text");
        //create a button
        var startButton = document.createElement("input");
        startButton.setAttribute("type", "button");
        startButton.setAttribute("value", "Start Countdown");
        startButton.onclick = function() {
            startCountdown();
        };
        document.getElementById("inputArea").appendChild(inputMinutes);
        document.getElementById("inputArea").appendChild(startButton);
    };

}

//---------------------------------------------------------------------------
document.onload = countdown();      //rolling notes function load event
                                    //only use window.onload once per document!




