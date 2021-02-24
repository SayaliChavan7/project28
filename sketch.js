const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone,chain;

function preload(){
	boy=loadImage("images/boy.png");
	stone=loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,90,20);
	mango3=new mango(1000,150,25);
	mango4=new mango(1200,150,30);
	mango5=new mango(1200,210,20);
	mango6=new mango(1100,200,30);
	mango7=new mango(1100,290,30);
	mango8=new mango(1000,270,20);
	mango9=new mango(900,200,20);
	mango10=new mango(950,250,35);
	mango11=new mango(1060,250,35);
	mango12=new mango(1250,250,30);
	mango13=new mango(1050,200,25);
	mango14=new mango(1100,20,20);
	mango15=new mango(950,150,25);
  stone=new Stone(100,490,30);


  slingshot = new SlingShot(stone.body,{x:220, y:400});


	//chain1 = new Chain(boy.body,stone.body);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  //image(stone ,220,380,40,100);

  fill("black");
  textSize(18);
  text("- Press spacebar for more chances!! -",50,50);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
  detectCollision(stone,mango14);
  detectCollision(stone,mango15);


  treeObj.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();

  slingshot.display();


  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:220,y:400});
		launcherObject.attach(stone.body);
	}
}

function detectCollision(lstones,lmango){

	if(lstones.body.position.x- lmango.body.position.x <lmango.r + lstones.r
		&& lmango.body.position.x - lstones.body.position.x  < lmango.r + lstones.r
		&&lstones.body.position.y -lmango.body.position.y < lmango.r+ lstones.r
		&& lmango.body.position.y - lstones.body.position.y < lmango.r + lstones.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
