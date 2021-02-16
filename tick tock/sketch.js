var hours;
var min;
var sec;
var  scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);
}

function draw() {
  background(0);  

translate(200,200);

  hours=hour();
  min= minute();
  sec=second();

  scAngle = map(sec,0,60,0,360);
  mnAngle = map(min,0,60,0,360);
  hrAngle = map(hour,0,60,0,360);

  //seconds
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //minutes
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //hours
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

 //drawing the arcs
 strokeWeight(10);
 noFill();
 stroke(255,0,0);
 arc(0,0,300,300,0,scAngle);
 stroke(0,255,0);
 arc(0,0,280,280,0,mnAngle);
 stroke(0,0,255);
 arc(0,0,260,260,0,hrAngle);


 

}
