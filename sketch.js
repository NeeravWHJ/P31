const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body
const Bodies = Matter.Bodies
var plinkos = [];
var particles = [];

var engine,world,ground,stand1,stand2,stand3,stand4,stand5,stand6,stand7,plinko1;

function setup() {
  createCanvas(480,800);
 
 engine = Engine.create()  
 world = engine.world
 
 ground = new Ground(240,780,480,20)
 stand1 = new Division(15,680,5,200);
 stand2 = new Division(95,680,5,200);
 stand3 = new Division(175,680,5,200);
 stand4 = new Division(255,680,5,200);
 stand5 = new Division(335,680,5,200);
 stand6 = new Division(415,680,5,200);
 //plinko1 = new Plinko(200,200,10);
 for(var j = 40; j<=480; j=j+50)
 {
 plinkos.push(new Plinko(j,75,10));
 }
 for(var j = 15; j<= width; j=j+50)
 {
   
   plinkos.push(new Plinko(j,175,10));
 }
 

}

function draw() {
  background(0);  
 Engine.update(engine);

 ground.display();
 stand1.display();
 stand2.display();
 stand3.display();
 stand4.display();
 stand5.display();
 stand6.display();
 //plinko1.display();

 for(var n= 0; n<plinkos.length; n++ ){
  
  plinkos[n].display();
  // console.log(plinkos[n].position.x)
 }
 
  if(frameCount % 60 === 0){

  particles.push(new Particle(random(210,270),10,10))
  
  }

  for(var n= 0; n<particles.length; n++ ){
  
    particles[n].display();

   }



  drawSprites();
}

