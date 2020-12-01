
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Paper(400,200,40);
	bobObject2 = new Paper(450,200,40);
	bobObject3 = new Paper(500,200,40);
	bobObject4 = new Paper(550,200,40);
	bobObject5 = new Paper(600,200,40);

	roofObject= new Ground(400,100,300,40);

	rope1= new Chain(bobObject1.body,roofObject.body,-50*2,0);
	rope2= new Chain(bobObject2.body,roofObject.body,-25*2,0);
	rope3= new Chain(bobObject3.body,roofObject.body,-0*2,0);
	rope4= new Chain(bobObject4.body,roofObject.body,25*2,0);
	rope5= new Chain(bobObject5.body,roofObject.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();	
  bobObject4.display();
  bobObject5.display();
  
  roofObject.display();

  rope1.display();
  rope2.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-500,y:-500}); } 
} 



