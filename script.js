
var canvaswidth = 500, canvashieght = 400;
var myBall;
var ballsize = 20;
var myBall_xpos = canvaswidth/2, myBall_ypos = canvashieght/2;
var myBall_xposvel = 1, myBall_yposvel = 1;
var myBalltop = myBall_ypos - ballsize/2,
 myBallbottom = myBall_ypos + ballsize/2,
  myBallright = myBall_xpos - ballsize/2,
   myBallleft = myBall_xpos + ballsize/2;
   var r=0, g=0, b=0;

function setup() {
	
	createCanvas(canvaswidth, canvashieght);
  background(color(0,0,100));
  rectMode(CENTER);
  myBall = rect(myBall_xpos, myBall_ypos, ballsize, ballsize);
  console.log(myBall)
}



function draw() {
background(color(r,g,b));
	myBall_xpos = myBall_xpos + myBall_xposvel;
  
  
  myBallright = myBall_xpos + ballsize/2;
   myBallleft = myBall_xpos - ballsize/2;

 rect(myBall_xpos, myBall_ypos, ballsize, ballsize);
 //console.log(myBall_xpos)
 if (myBallright > canvaswidth){
   myBall_xposvel=-1
   cc();
 }else if (myBallleft<0){
   myBall_xposvel=1; cc()
 }
 myBall_ypos = myBall_ypos + myBall_yposvel;
 myBalltop = myBall_ypos - ballsize/2;
 myBallbottom = myBall_ypos + ballsize/2;
 rect(myBall_xpos, myBall_ypos, ballsize, ballsize);
 //console.log(myBall_xpos)
 if (myBallbottom>canvashieght){
   myBall_yposvel=-1; cc() 
 }else if (myBalltop<0){
   myBall_yposvel=1; cc() 
}
rect(myBall_xpos, myBall_ypos, ballsize, ballsize);
function cc(){
  r = random(255);
  g = random(255);
  b = random(255);
}
}
