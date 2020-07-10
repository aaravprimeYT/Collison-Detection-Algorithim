var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 100, 100, 50);
  movingRect = createSprite(200,300,50,100);
  fixedRect.shapeColor = "limeGreen";
  movingRect.shapeColor = "Orange";
  movingRect.debug = true;
  fixedRect.debug = true;
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
}

function draw() {
  background(0,0,0);
  
  console.log(movingRect.x-fixedRect.x);



  //movingRect.y = World.mouseY;
  //movingRect.x = World.mouseX;

  if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<=movingRect.width/2+fixedRect.width/2&&
    fixedRect.y-movingRect.y<=fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "Orange";
    fixedRect.shapeColor = "limeGreen";
  }
  if(movingRect.y-fixedRect.y<=movingRect.width/2+fixedRect.width/2&&
    fixedRect.y-movingRect.y<=fixedRect.width/2+movingRect.width/2){
      movingRect.velocityY=movingRect.velocityY*(-1)
      fixedRect.velocityY=fixedRect.velocityY*(-1)
    }



  drawSprites();
}