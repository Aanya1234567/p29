const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(400,580,1000,20);
  stand1=new Stand (330,300,270,10);
  stand2=new Stand(700,200,200,10)
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,230,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  block21 = new Block(385,155,30,40);
  

blocks1=new Block(640,175,30,40)
blocks2=new Block(670,175,30,40)
blocks3=new Block(700,175,30,40)
blocks4=new Block(730,175,30,40)
blocks5=new Block(760,175,30,40)
blocks6=new Block(670,175,30,40)
blocks7=new Block(700,175,30,40)
blocks8=new Block(730,135,30,40)

blocks9=new Block(700,135,30,40)
blocks10=new Block(730,135,30,40)
blocks11=new Block(640,135,30,40)
blocks12=new Block(670,135,30,40)
blocks13=new Block(700,95,30,40)
fill("blue")
blocks14=new Block(730,95,30,40)
blocks15=new Block(670,95,30,40)
blocks16=new Block(700,55,30,40)

ball=Bodies.circle(100,200,20);
World.add(world,ball)
slingshot=new Slingshot(ball,{x:100,y:200})
}

function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  fill("turquoise");
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  stand2.display();
  stroke(15)
  fill("grey");
  block19.display();
  block20.display();
  image( polygon_img,ball.position.x,ball.position.y,30,30)
  stroke(15)
  fill("blue")
  block21.display();
  stroke(15)
  fill("pink")
  blocks1.display()
  slingshot.display();
  blocks2.display()
  blocks3.display()
  blocks4.display()
  blocks5.display()
  blocks6.display()
  blocks7.display()
  blocks8.display()
  fill("purple")
  blocks9.display()
  blocks10.display()
  blocks11.display()
  blocks12.display()
  blocks13.display()
  blocks14.display()
  blocks15.display()
  blocks16.display()
  
  textSize(20);

  text("press space to reset polygon",10,50)
}
function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly()
}
function keyPressed(){
  if(keyCode=== 32)
  slingshot.attach(ball)
}