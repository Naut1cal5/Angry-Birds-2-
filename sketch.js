const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world;
var ground ;
var box1, box2,pig1,log1;
var box3, box4,pig2,log2;
var box5, log3, log4;
var bird
var backgroundImage

function preload()
{
backgroundImage = loadImage("sprites/bg.png")
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground (600,height,1200,20);

  box1 = new Box(800,320,70,70);
  box2 = new Box(1000,320,70,70)
  pig1 = new Pig (900,350);
  log1 = new Log (900,310,300,PI/2);
 
  box3 = new Box(800,270,70,70);
  box4 = new Box(1000,270,70,70)
  pig2 = new Pig (900,290);
  log2 = new Log (900,250,300,PI/2);

  box5 = new Box(900,170,70,70)
  log3 = new Log (800,150,150,PI/6);
  log4 = new Log (1000,150,150,-PI/6);

  bird = new Bird (100,150);

}

function draw() {
  background(backgroundImage);
  Engine.update(engine);
  
  ground.display();

  box1.display();
  box2.display();
  pig1.display();
  log1.display();
 
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
 
  box5.display();
  log3.display();
  log4.display();

  bird.display();
}
