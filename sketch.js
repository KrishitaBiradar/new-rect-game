var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,80,50);
   movingRect.velocityX = 5;
   movingRect.velocityY = 0.5;

}

function draw() {
  background(255,255,255);
// movingRect.x = mouseX;
 //movingRect.y = mouseY;
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green"; 

if(isTouching(movingRect, fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
  
bounceOff(movingRect,fixedRect);


  drawSprites();
}

