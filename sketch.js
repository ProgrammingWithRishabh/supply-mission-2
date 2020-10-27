//declaring the variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var part1,part2,part3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//loading images
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
//function for the game setup and creating sprites also modifying them
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	 
	part1=createSprite(400,660,160,10);
	part1.shapeColor=color("orange");

	part2=createSprite(320,610,10,110);
	part2.shapeColor=color("orange");

	part3=createSprite(480,610,10,110);
	part3.shapeColor=color("orange");
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}

// function for displaying sprites in the game
function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}
// function for keys
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
		Matter.Body.setStatic(packageBody,false);
	  }
	}