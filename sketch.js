const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var world;
var ball;
var ground;

function setup(){
  createCanvas(600,600);
  engine=Engine.create();
  world=engine.world;
  var b_option={
    restitution:1.0
  }
  ball=Bodies.circle(300,300,50,b_option);
  World.add(world,ball);
  var g_option={
    isStatic:true
  }
  ground=Bodies.rectangle(300,550,600,100,g_option);
  World.add(world,ground);
  Engine.run(engine);
}

function draw(){
  background("aqua");
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,100);
}