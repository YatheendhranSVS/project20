var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  

  bullet=createSprite(50,200,60,20);
  bullet.velocityX = speed;
  bullet.shapeColor=color(white);

  wall=createSprite(1200,200,thickness,hight/2);
  wall.shapeColor=color(80,80,80);

  speed=random(55,90);
  weight=random(400,1200);
  thickness=rand(22,83);
  weight=random(30,52);
  speed=random(223,321);
}

function draw() {
  background(0); 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {bullet.velocityX=0;
  var deformation=0.5 *weight *speed * speed/22509;
  if(deformation>180)
{
  bullet.shapecolor=color(255,0,0);
}

if(deformation<180 && deformation>100)
{
  bullet.shapeColor=color(255);
}
if(deformation<100)
{
  bullet.shapeColor=color(0,255,0);
}
} 
  drawSprites();
}
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}