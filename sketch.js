var bob, bobImage, jack, jackImage, ronald, ronaldImage;
var bobR, jackR, ronaldR;
var bobI, jackI, ronaldI;
var ground, end, cloud;
var fireCrab, sawHand;

function preload(){
    //bobImage = loadAnimation("BobI/sprite_00.png","BobI/sprite_02.png","BobI/sprite_05.png","BobI/sprite_07.png","BobI/sprite_10.png","BobI/sprite_13.png","BobI/sprite_17.png","BobI/sprite_21.png");
    //cloud = loadAnimation("Other/sprite_0.png");
}
function setup(){
    createCanvas(600, 400);
    ground = createSprite(300,390,600,20);
    ground.shapeColor="brown";
    bob = createSprite(20,350,20,20);
    //bob.addAnimation("BobI", bobImage);
}
function draw(){
    background("blue");
    
    if(keyDown(RIGHT_ARROW)){
        bob.velocityX = +10
    }

    if(keyDown(LEFT_ARROW)){
        bob.velocityX = -10
    }
    drawSprites();
}

function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var cloud = createSprite(600,120,40,10);
      cloud.y = Math.round(random(80,120));
      cloud.addImage(cloudImage);
      cloud.scale = 0.5;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 200;
      
      //adjust the depth
      cloud.depth = bob.depth;
      bob.depth = bob.depth + 1;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
    
  }  