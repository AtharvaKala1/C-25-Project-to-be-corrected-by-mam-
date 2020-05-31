//var paperImg;
var ground;
var box1,box2,box3;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload(){

	//paperImg=loadImage("paper.png")

}
	
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 

		  //creating the dustbin
		  box1 = new Box(width/2+250,height-50,200,20);
		  box2 = new Box(width/2+145,height-95,20,100);
		  box3 = new Box(width/2+355,height-95,20,100);

		  //creating the ball
		  ball = new Ball(width/2-350,645,35);
		  //ball.addImage(paperImg)
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ball.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	
	}

}