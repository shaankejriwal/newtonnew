
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine,world;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(620,100,400,8);

	pendulum1 = new Pendulum(480,200,40,40);
	pendulum2 = new Pendulum(550,200,40,40);
	pendulum3 = new Pendulum(620,200,40,40);
	pendulum4 = new Pendulum(690,200,40,40);
	pendulum5 = new Pendulum(760,200,40,40);

	rope1 = new Rope(pendulum1.body,{x:480,y:100})
	rope2 = new Rope(pendulum2.body,{x:550,y:100})
	rope3 = new Rope(pendulum3.body,{x:620,y:100})
	rope4 = new Rope(pendulum4.body,{x:690,y:100})
	rope5 = new Rope(pendulum5.body,{x:760,y:100})

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
	ground.display();

	pendulum1.display();
	pendulum2.display();
	pendulum3.display();
	pendulum4.display();
	pendulum5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	mouseDragged();

}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}


