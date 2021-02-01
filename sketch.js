
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var rock;
var attach, attachObj;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(1200,150,30);
	mango4=new mango(1100,200,30);
	mango5=new mango(1000,200,30);
	mango6=new mango(900,200,30);
	mango7=new mango(1200,220,30);
	mango8=new mango(1150,170,30);
	mango9=new mango(1050,170,30);
	mango10=new mango(950,250,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	rock=new stone(100,460,23)

	attach=new chain(rock.body,{x:235, y:420});

	Engine.run(engine);


}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);
  detectCollision(rock,mango5);
  detectCollision(rock,mango6);
  detectCollision(rock,mango7);
  detectCollision(rock,mango8);
  detectCollision(rock,mango9);
  detectCollision(rock,mango10);

  treeObj.display();
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

  groundObject.display();

  rock.display();

  attach.display();
	
 boy.display();
}

function mouseDragged(){
	rock.body.position.x = mouseX;
    rock.body.position.y = mouseY;
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lrock,lmango){
  mangoBodyPosition=lmango.body.position
  rockBodyPosition=lrock.body.position

  var distance=dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y,)
	if(distance<=lmango.r+lrock.r){
		Matter.Body.setStatic(lmango.body,false)
	}

}
