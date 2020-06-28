var gameState="play";
var bgimage;
var mimage;
var mario;
var trex,timage;
var edges;
var bullet,bimage;
var ground1,gimage,ground2;
var trexDie;
var shot;
var score = 0;


//var bgsound;
function preload(){
  bgimage = loadImage("background.jpg");
  gimage  = loadImage("ground.png");
  mimage = loadImage("mario.png");
  timage = loadAnimation("trexF1.png","trexF2.png");
  bimage = loadImage("bullet.png");
  trexDie = loadImage("trexD.png");


 bgsound = loadSound("darkwds1.mp3");
 shot = loadSound("shot1.mp3");
}
function setup() {

  
  createCanvas(800,600);
  ground1= createSprite(200,600,800,20);
  ground1.addImage("ground",gimage);
  bgsound.play();

  ground2= createSprite(600,600,800,20);
  ground2.addImage("ground",gimage);

  mario = createSprite(700, 450, 50, 50);
  mario.addImage("mario",mimage);
  mario.velocityX=-3;
  trex = createSprite(200, 200, 50, 50);
  trex.addAnimation("bird",timage);
  trex.scale=2;
  trex.velocityY=-2;
  

  bullet = createSprite(320,500,10,10);
  bullet.addImage("bullet",bimage);
  //bullet.setCollider("rectangle",0,0,10,10);
  bullet.scale=0.1;
 bullet.x=mario.x;

  edges=createEdgeSprites();
  
 // if(keyDown("UP_ARROW")){
  //  bullet.velocityX = 10;
 //}
 var count=0;
 //textSize(24);
 //textFont("Arial");
}

function draw() {
  background(bgimage);

  

  if(gameState==="play"){
//text("Score: "+ count, 750, 100);
   // count = count + Math.round(World.frameRate/60);
  if(keyDown(LEFT_ARROW)){ 
    changePosition(-3,0);
   } 
  else if(keyDown(RIGHT_ARROW)){ 
    changePosition(3,0);
   } 
   else if(keyDown(UP_ARROW)) { 
     changePosition(0,-3);
   }
   else if(keyDown(DOWN_ARROW)){
      changePosition(0,+3);
   } 
  //playsound("darkwds1.mp3")
  //bullet.x=mario.x+80;
 // mario.x=mouseX;
  

  if (keyCode === 32) {
    bullet.velocityX = -10;
    bullet.velocityY = Math.round(random(-5,-10));
    shot.play();
  }
}
  if(mario.x < 750){
    mario.velocityX = 3;
  }
  if(mario.x > 50){
    mario.velocityX = -3
  }
 /* if(bullet.y<650){
bullet.x=mario.x;
bullet.y=350;
bullet.velocityY=0;

  }*/

  if(bullet.isTouching(trex)){
    gameState="end";
    trex.velocityY=0;
    trex.addImage("trexD",trexDie);
 // bullet.velocityY=0;
  //trex.collide(edges);

  
  }
  if(gameState==="end"){
   trex.addImage(trexDie);
   trex.visible=false;
   bullet.visible=false;
  }
  
  drawSprites();
  createEdgeSprites();
  trex.bounceOff(edges);
  trex.bounceOff(ground1);
  mario.bounceOff(edges);

  //mario.collide(ground2);
  
 
}
function changePosition(x,y){
   bullet.x = bullet.x + x; 
   bullet.y = bullet.y + y; 
  }