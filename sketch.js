var bg,bg2,form,system,code,security;
var score=0, dora_Running, obstacle1;
var Gcoin, Scoin, Bcoin, RunnerBg, nextButton;
var gameState, runnerDora;

function preload() {
  bg = loadImage("JW-Bg.jpg");
  bg2 = loadImage("Lock.jpg");
dora_Running = loadAnimation("Running_dora.png","Running_dora-2.png")
obstacle1= loadImage("obstacle1.png");
Bcoin = loadImage("Bronze_coin.jpg");
Gcoin = loadImage("Gold_coin.png");
Scoin = loadImage("Silver_coin.jpg");
RunnerBg= loadImage("Runner_bg.png");
}

function setup() {
  createCanvas(1350,650);
  system = new System();
  security = new Security();
  gameState = "Runner";
   
  runnerDora = createSprite(100,300, 50,50);
  runnerDora.addAnimation("Img",dora_Running);
  runnerDora.scale = 0.5;
  


function draw() {
  background(bg);
  clues();
  security.display();
  runnerDora.display();
    // Add code to display score in the middle of the screen

  textSize(20)
  fill("black");
  text("Score : " + score, 350, 200)
  // Add code to display the end screen
if(score === 3){
  clear();
  background(bg2);
  fill("black");
  textSize(40);
  text("TASK UNLOCKED", 580, 50);
  nextButton = createButton("Next -->");
  nextButton.position(1200,600);
  nextButton.display();
}
/*if(score === 10){
  fill("black");
  textSize(40);
  text("Congratulations!!", 580, 50);
  nextButton = createButton("Next -->");
  nextButton.position(1200,600);
  nextButton.display();
}*/

if(mousePressedOver(nextButton)){
  clear();
  background(RunnerBg);
 
}

}

  drawSprites()
}