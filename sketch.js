var movingRect,fixedRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
 
gameObject1=createSprite(100,100,50,50);
gameObject1.shapeColor="green";

gameObject2=createSprite(200,100,50,50);
gameObject2.shapeColor="green";

gameObject3=createSprite(300,100,50,50);
gameObject3.shapeColor="green";

gameObject4=createSprite(400,100,50,50);
gameObject4.shapeColor="green";

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  movingRect.debug="true";
  
  fixedRect1=createSprite(500,100,50,80);
  fixedRect1.shapeColor="white";
  movingRect1=createSprite(500,800,80,30);
  movingRect1.shapeColor="white";
  movingRect1.velocityY=-5;
  fixedRect1.velocityY=+5;
}

function draw() {
  background(0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;  

  if(isTouching(movingRect,gameObject1)===true){
    movingRect.shapeColor="red";
    gameObject1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    gameObject1.shapeColor="green";
  }
  bounceOff(movingRect1,fixedRect1)
  
  drawSprites();
}
