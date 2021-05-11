// Team cereal :: Winnie Huang, Saqif Abedin, Constance Chen
// SoftDev pd0
// K27 -- canvas based JS animation
// 2021-05-07

// access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var dvdButton = document.getElementById("buttonDVD");
var stopButton = document.getElementById("buttonStop");

// prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

// set fill color to team color
ctx.fillStyle = 'blue'

var requestID;  // init global var for use with animation frames

//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0, 0, c.width, c.height);
};

var radius = 0;
var growing = true;

//var drawDot = function() {
var drawDot = () => {
    console.log("drawDot invoked...");
    // makes sure animation isn't running already
    window.cancelAnimationFrame(requestID);

    clear();

    // draws circle with current radius
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    if (growing) { // if circle is growing, increases radius until reaches max
        radius++;
        growing = (radius <= c.width/2);
    } else { // otherwise, decreases radius until it reaches min
        radius--;
        growing = (radius <= 5);
    }

    // displays new frame
    requestID = window.requestAnimationFrame(drawDot);
};

// stores how far image should move at a time
var dx = 1;
var dy = 1;

// stores current position of image
var x = 100;
var y = 200;

// reads dvd logo
var img = new Image();
img.src = 'logo_dvd.jpeg';


var drawDVD = () => {
    console.log("drawDVD invoked...");
    // makes sure animation isn't running already
    window.cancelAnimationFrame(requestID);

    // clears screen
    clear();

    // draws image at current location
    ctx.drawImage(img, x, y, 120, 80);

    // flips dx if image reaches either the left or right side of the canvas
    if (x >= c.width - 120 || x <= 0) {
        console.log("x");
        dx = -1 * dx;
    }

    // flips dy if image reaches the top or bottom of the canvas
    if (y >= c.height - 80 || y <= 0) {
        console.log("y");
        dy = -1 * dy;
    }

    // updates position based on dx and dy
    x += dx;
    y += dy;

    // displays new frame
    requestID = window.requestAnimationFrame(drawDVD);
}


//var stopIt = function() {
var stopIt = () => {
    console.log("stopIt invoked...")
    console.log( requestID );

    // stops animation at the last frame
    window.cancelAnimationFrame(requestID);
};

// connects buttons to their corresponding functions
buttonCircle.addEventListener( "click", drawDot);
buttonDvd.addEventListener( "click",  drawDVD );
buttonStop.addEventListener( "click",  stopIt );