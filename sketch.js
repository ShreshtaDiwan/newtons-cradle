
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roof;
var ground;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,600,50)

	ground = new Ground(400,700,800,50)

	bob1 = new Bob(200,600,110)
	bob2 = new Bob(260,600,110)
	bob3 = new Bob(400,600,110)
	bob4 = new Bob(500,600,110)
	bob5 = new Bob(600,600,110)

	rope1 =new Rope(bob1.body,roof.body,-200,10)
	rope2 =new Rope(bob2.body,roof.body,-100,10)
	rope3 =new Rope(bob3.body,roof.body,10,10)
	rope4 =new Rope(bob4.body,roof.body,120,10)
	rope5 =new Rope(bob5.body,roof.body,230,10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  roof.display();

  ground.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  drawSprites();
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000,y:-1000});
	 }
   }



