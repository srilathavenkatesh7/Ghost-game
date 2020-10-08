var towerimg,tower
var doorimg;
var climber,climberimg,climberGroup;
var ghostimg,ghost;
var invisibleblock,invisibleBlockGroup;
var gameState="play";

function preload(){
  towerimg=loadImage("tower.png");
  doorimg=loadImage("door.png");
  climberimg=loadImage("climber.png");
  ghostimg=loadImage("ghost-standing.png");
  spookySound=loadSound("spooky.wav");
}
function setup(){
  createCanvas(600,800);
   tower=createSprite(300,300,40,40);
  tower.addImage(towerimg);
  tower.velocityY=8;
  ghost=createSprite(300,400,20,80);
  ghost.addImage(ghostimg);
  ghost.scale=0.5;
   doorGroup=new Group();
  climberGroup=new Group();
  invisibleBlockGroup=new Group();
}


function draw(){
  background(0);
  if(gameState==="play"){
    spawnDoors();
    
          
  if(tower.y>400){
    tower.y=300;
  }
  if(keyDown("space")){
    ghost.velocityY=-1;
  }
  ghost.velocityY=ghost.velocityY+0.3;   
  if(keyDown("right") && ghost.x<350){
    ghost.x=ghost.x+4;
  }
  if(keyDown("left") && ghost.x>50){
    ghost.x=ghost.x-4;
  }
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y>600 ){
      gameState="end";
      ghost.destroy();
    }
  }
  
  
   
    
  drawSprites();
  if(gameState==="end"){
textSize(30);
    fill("yellow");
    text("game over",200,300);
    tower.velocityY=0;
    
  }
}

function spawnDoors(){
  if(frameCount%240===0){
    
  
  door=createSprite(Math.round(random(120,400)),-50,20,80);
  door.addImage(doorimg);
    climber=createSprite(200,10,180,10);
    climber.x=door.x;
    climber.addImage(climberimg);
    climber.lifetime=800;
    climber.velocityY=1;
  console.log(door.y);
    door.velocityY=1;
    invisibleBlock=createSprite(200,15,100,2);
    invisibleBlock.x=door.x;
    invisibleBlock.velocityY=1;
    invisibleBlock.debug=true;
    invisibleBlockGroup.add(invisibleBlock);
    invisibleBlock.lifetime=800;
    door.lifetime=800;
    doorGroup.add(door);
    climberGroup.add(climber);
      ghost.depth=door.depth;
ghost.depth=ghost.depth+1;
  }  
     
    }



