const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bckImage;
var boy, boyAnimation;
var music;

var engine, world;


var snows = [];
var maxSnows = 1000;

var randomx, randomy;

function preload() {
  bckImage = loadImage("snow1.jpg");
  boyAnimation = loadAnimation("Run1.png", "Run2.png", "Run3.png", "Run4.png");

  music = loadSound("bensound-sweet.mp3")
}

function setup() {
  createCanvas(800, 600);

  boy = createSprite(200, 500);
  boy.addAnimation("boy", boyAnimation);
  boy.scale = 0.5;

  music.play();

  engine = Engine.create();
  world = engine.world;


  for (var i = 0; i < maxSnows; i++) {
    snows.push(new snow(random(0, 600), random(0, 800), 20));
  }



}

function draw() {
  background(bckImage);

  Engine.update(engine);

  boy.x = mouseX;


  for (var i = 0; i < maxSnows; i++) {
    snows[i].display();

  }


  drawSprites();
}