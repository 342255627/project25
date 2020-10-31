
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

ground= new Ground(400,680,800,20);
paper= new Paper(100,680,50);
dustBin= new Dustbin(600,680,100,100);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
if(keyPressed==UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:150})







}



}



