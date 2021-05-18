// Team BEEG BAD CHAOS - Helena Williams, Stella Oh, Constance Chen
// SoftDev
// K30 -- JSorcery
// 2021-05-14

// model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = "#93E9BE";

var requestID;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
    ctx.clearRect(0,0,c.width,c.height);
};


var radius = 0;
var growing = true;
var logo = new Image();
var spdUp = 0;
var xx = 25;
var yy = 25;
logo.src = "UhOhBeegYoshi2.png";
var dx = "pos";
var dy = "pos";


//var drawDot = function() {
var drawDot = () => {
    console.log("drawDot invoked...")
    window.cancelAnimationFrame( requestID );
    console.log(radius);
    if (growing){ //keep growing until radius hits the border of the canvas]
        if (radius <= 250){
            clear();
            ctx.beginPath();
            ctx.arc(250, 250, radius, 0, 2 * Math.PI);
            ctx.fill();
            radius++;
        }
        else{
            growing = false;
        }
    }

    if (!growing) { //keep shrinking until radius gets to 0
        if(radius > 0){
            clear();
            ctx.beginPath();
            ctx.arc(250, 250, radius, 0, 2 * Math.PI);
            ctx.fill();
            radius--;
        }
        else{
          growing = true;
      }
    }
    requestID = window.requestAnimationFrame( drawDot );
};



//var stopIt = function() {
var stopIt = () => {
    console.log("stopIt invoked...")

    if (requestID) {
        window.cancelAnimationFrame(requestID);
    }
};

const drawDVD = (e) => {
  clear();
  window.cancelAnimationFrame( requestID );
  ctx.drawImage(logo, xx, yy, 75, 75);
  var height = e.offsetY;
  if (xx > 475){
    console.log("Just passed east wall!");
    dx = "neg";
  }
  if (xx < 20){ //&& (height + 100 > xx && height - 100 < xx)){
    dx = "pos";
    spdUp+=0.75;
  }
  if (xx < 0){
    console.log("Just passed west wall!");
    console.log("YOU LOSE");
  }
  if (yy > 425){
    console.log("Just passed south wall!");
    dy = "neg";
  }
  if (yy < 0){
    console.log("Just passed north wall!");
    dy = "pos";
  }
  if (dy == "pos"){
    yy+=2;
    yy+=spdUp;
  }
  else{
    yy-=2;
    yy-=spdUp;
  }
  if (dx == "pos"){
    xx+=2;
    xx+=spdUp;
  }
  else{
    xx-=2;
    xx-=spdUp;
  }
  requestID = window.requestAnimationFrame( drawDVD );

  console.log("mouse y:");
  console.log("y: "+ height);

}

let paddle = document.getElementById('paddle');
const onMouseMove = (e) =>{
  paddle.style.left = 50;//e.pageX + 'px';
  if (!(e.pageY < 190) && !(e.pageY > 480)){
    paddle.style.top = e.pageY + 'px';
  }
  //console.log(e.pageY);
}



document.addEventListener('mousemove', onMouseMove);
//dotButton.addEventListener( "click", drawDot );
buttonDVD.addEventListener( "click", drawDVD );
stopButton.addEventListener( "click",  stopIt );
