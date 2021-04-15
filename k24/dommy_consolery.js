// Team SOCC :: Stella Oh + Constance Chen
// SoftDev pd0
// K23 -- Basic functions in JavaScript
// 2021-04-15

/*
    Notes:
    Console records mouse's movements on webpage
*/

//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO"); //prints AYO
//then says "undefined"
var i = "hello"; //if you enter "i" then "hello" is returned
var j = 20; //if you enter "j" then 20 is returned


//assign an anonymous fxn to a var
// when you enter "f" afterwards the function is returned as f(x)
// You can start calling the function with parameters
var f = function(x) { //after entering function "undefined" is returned
  var j=30;
  return j+x;
};


//instantiate an object
//when you first enter function, "undefined" is returned
//when "o" is inputted, the console returns a list {name: "Thluffy", age: 15, items: Array(4), morestuff: {…}, func: ƒ}
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


//(define fact (lambda (n) ...)
//when you first input function, "undefined" is returned
//when you input "fact", the function is returned as f(n) instead of fact(n) kinda weird..
//when using the function you have to use fact(n) instead of f(n) for it to work
var fact = function(n) {
  var prod=1;
  for ( ; n > 1 ; n--){ 
    prod = prod * n;
  }
  return prod;
};


//(define fact (lambda (n) ...)
//when you first input function, "undefined" is returned
//when you input "fact", the function is returned as f(n) instead of fact(n) kinda weird..
//when using the function you have to use factR(n) instead of f(n) for it to work
var factR = function(n) {
  if ( n<=1 ) {
    return 1;
  }
  else {
    return n * factR(n-1);
  }
};

//adds text to the end of the list in the webpage
//when you first input function, "undefined" is returned
//when we test function in console, the added item isn't permanent and doesn't affect index.html
var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


//removes n-1th item from the list in the webpage
//when you first input function, "undefined" is returned
//when we test function in console, the removed item isn't permanent and doesn't affect index.html
var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};

//the color red is added to the color sequence in the class of each item
//when mouse hovers over an item in the list the text changes colors
//when run in console, index.html is not affected permanently
var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};

//the color red is added to the color sequence of an even item's class in the list
//the color blue is added to the color sequence of an odd item's class in hte list
//when mouse hovers over an item in the list the text changes colors
//when run in console, index.html is not affected permanently
var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//when the button on the webpage is clicked on, in the console "here comes e..." is printed
//followed by the position and details of the mouse that clicked the button
//and "here comes 'this'" is printed and followed by the button id and tag in html
//when buttonCallback("e") is inputted the strings are printed as well as e and the 
//window of the document
var buttonCallback = function(e) {
  console.log("\n\nhere comes e...");
  console.log(e);
  console.log("\n\nhere comes 'this'...");
  console.log(this);
}

//highlights the button in the webpage and provide details on it
var b = document.getElementById('b');
//when button is clicked on, buttonCallback(e) is performed
b.addEventListener('click', buttonCallback);

//in the console, "this" which is a dictionary of information on a window is returned
//receive error when run in the console 
/*
VM937:4 Uncaught TypeError: Cannot read property 'add' of undefined
    at redCallback (<anonymous>:4:18)
    at <anonymous>:1:1
*/
var redCallback = function(e) {
  console.log("\n\n---redCallback invoked---")
  console.log(this);
  this.classList.add('red');
}

//prints the user's movements on the webpage in the console
var thelist = document.getElementById("thelist");
var litems = thelist.children;
for(var i = 0; i < litems.length; i++) {
  litems[i].addEventListener('click', redCallback); //when item is clicked on, the redCallback is invoked and the item turns red
  litems[i].addEventListener('mouseover', function(e){
    console.log("user has moved into this:" + this);
    this.classList.toggle('green');
  });
  litems[i].addEventListener('mouseout', function(e){
    console.log("user has moved out of this:" + this);
    this.classList.toggle('blue');
  });
}