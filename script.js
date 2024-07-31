 /* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 25;
let toggle = false;
/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background('#cacaed'); 
}

/* DRAW LOOP REPEATS */
function draw() {
  background('#cacaed'); 
  angleMode(DEGREES);
  rectMode(CENTER);

  //Hair
  fill(0);
  arc(200,170,200,200,180,0);
  rect(200,245,200,150)
  
  //Face
  fill(247, 228, 215);
  strokeWeight(0);
  ellipse(width/2,height/2,175,200);

  //Eyes
  if(toggle){
    //Eyes closed
    fill(0);
    ellipse(170, 170, eyeWidth, eyeHeight/8);
    ellipse(230, 170, eyeWidth, eyeHeight/8);
  }
  else if(!toggle){
    //Eyes open
    fill(255, 255, 255);
    strokeWeight(1);
    ellipse(170,170,eyeWidth,eyeHeight);
    ellipse(230,170,eyeWidth,eyeHeight);
  }
  //Pupils
  if(toggle){
    //Eyes closed
  }
  else if(!toggle){
    //Eyes open
    fill(51, 43, 38);
    strokeWeight(0);
    ellipse(170,170,pupilWidth,pupilHeight);
    ellipse(230,170,pupilWidth,pupilHeight);
  }

  //Mouth
  fill(209, 134, 140);
  arc(200,230,50,50,0,180);

  //Text
  fill(0);
  textSize(18);
  text('Blinking person',20,30);

  //Directions for mouse press
  textSize(15);
  text("Click to see me close my eyes. \nClick again to see me open them.",160,350);
  fill(0);
}

/*FUNCTIONS*/
function mousePressed(){
  toggle = !toggle;
}