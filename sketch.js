var angryWorld;
var angryEngine;
var ground;
var ball;

function preload(){

}

function setup(){
  createCanvas(480,240);

  angryEngine = Matter.Engine.create();
  angryWorld = angryEngine.world;

  var properties={
    isStatic:true
  }
  ground = Matter.Bodies.rectangle(240,230,480,20,properties);
  Matter.World.add(angryWorld,ground);

  box1 = new Box(260,150,50,50);
  box2 = new Box(240,30,25,50);
  console.log(ground);
}

function draw(){
background ("lightgreen")
Matter.Engine.update(angryEngine);

rectMode(CENTER);
rect(ground.position.x,ground.position.y,480,20);
 box1.display()
 box2.display();
}