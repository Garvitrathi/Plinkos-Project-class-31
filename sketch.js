var particles = [];
var plinkos = [];
var divisions = [];

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var divisions, particles, plinkos;

var divisionHeight = 300;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 790, 800, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, 650, 10, 300));
  }

  for (var j = 40; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 15; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 40; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 15; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }

}

function draw() {
  background("black");

  Engine.update(engine);

  for (var j = 0; j < plinkos.length; j++) {

    plinkos[j].display();

  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 60, width / 2 + 60), 10, 10));
  };

  for (var i = 0; i < particles.length; i++) {

    particles[i].display();
  }

  ground.display();

  drawSprites();
}