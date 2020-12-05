var car,wall;
var car1,wall1;
var car2,wall2;
var speed,weight;
var line;

function setup() {
  createCanvas(1600,600);
line=createSprite(10,200,3000,5)
line=createSprite(10,400,3000,5)
  speed=random(55,90);
  weight=random(10,50)
 car= createSprite(100, 100, 50, 50);
 car.velocityX=speed;
 car.shapeColor=(255)

 car1= createSprite(200, 300, 50, 50);
 car1.velocityX=speed;
 car1.shapeColor=(255)

 car2= createSprite(300, 500, 50, 50);
 car2.velocityX=speed;
 car2.shapeColor=(255)

 wall=createSprite(1200,100,60,180);
 wall.shapeColor=(80,80,80);

 wall1=createSprite(1200,300,60,180);
 wall1.shapeColor=(80,80,80);

 wall2=createSprite(1200,500,60,180);
 wall2.shapeColor=(80,80,80);
}

function draw() {
  background(0); 
 if(wall.x-car.x<(wall.width/2+car.width/2)){ 
  car.velocityX=0
var deformation=1*weight*speed*speed/150
if( deformation>180){
  car.shapeColor=color(255,0,0)
}
 }

 if(wall1.x-car1.x<(wall1.width/2+car1.width/2)){ 
  car1.velocityX=0
var deformation=1*weight*speed*speed/200
if( deformation>250 ){
  car1.shapeColor=color(230,230,0)
}
 }

 if(wall2.x-car2.x<(wall2.width/2+car2.width/2)){ 
  car2.velocityX=0
var deformation=1*weight*speed*speed/80
if( deformation>100){
  car2.shapeColor=color(0,255,0)
}
 }

  drawSprites();
}