var bg,bgImg;
var player;
var warlock, titan, hunter;
var warlockS, titanS, hunterS;
var shaw, shawImg;
var quest, questImg;
var captain, captainImg;
var advice, adviceImg;
var gremlin, gremlinImg, gremlinGroup;
var flat = 0;
var ghost, ghostImg;
var c,cImg

function preload(){
  
  

  bgImg = loadImage("bg begining.jpg");
  warlock = loadImage("Warlock.PNG");
  titan = loadImage("Titan.PNG");
  hunter = loadImage("Hunter.PNG");
  warlockS = loadImage("WarlockShooting.PNG");
  titanS = loadImage("Titanshooting.PNG");
  hunterS = loadImage("Huntershooting.PNG");
  shawImg = loadImage("Shaw Han.PNG");
  questImg = loadImage("quest (2).png");
  captainImg = loadImage("Captain Gibraltar.PNG");
  adviceImg = loadImage("advice (2).png");
  gremlinImg = loadImage("Gremlin.PNG");
  ghostImg = loadImage("Gremlin.PNG");
  cImg = loadImage("challenge.PNG");
}

function setup() {

  
  createCanvas(1500,1040);
   
  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(100, 1000, 50, 50);
 player.addImage(warlock)
   player.scale = 0.3
   
   player.setCollider("rectangle",0,0,300,300)
  player.debug = true;
  spawnC();
  spawnQuest();
}

function draw() {
  background(0); 
  
  //  spawnQuest();
  // console.log(player.x);
  // console.log(player.y);
    
  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-5
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+5
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-5
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 player.x = player.x+5
}
var edges = createEdgeSprites();

if(keyWentUp("C")){
 
  player.addImage(hunter)
 
}
if(keyWentUp("V")){
 
  player.addImage(titan)
 
}
if(keyWentUp("B")){
 
  player.addImage(warlock)
 
}
if(keyWentDown("B") ){
 
  player.addImage(warlockS)
 
}
if(keyWentDown("V")){
 
  player.addImage(titanS)
 
}
if(keyWentDown("C")){
 
  player.addImage(hunterS)
}
// if(player.y <= 500){
//   shaw.visiblity = "hidden";
//   quest.visible = false;
//   advice.visible = false;
//   captain.visible = false;

// }
console.log(player.x+","+player.y);
if(player.x > 1000 && player.y > 1000){
  shaw.visible = true;
  quest.visible = true;
  advice.visible = true;
  captain.visible = true;
} 
if(player.x < 1000 && player.y < 1000){
  shaw.visible = false;
  quest.visible = false;
  advice.visible = false;
  captain.visible = false;

   

  console.log("hi");
} 

drawSprites();

}

  
  
    
   
    
  
  function spawnQuest(){
    console.log("spawnquest")
    shaw = createSprite(1400,810,50,50);
    shaw.addImage(shawImg)
    shaw.scale = 0.8;
    quest = createSprite(1370,650,50,50);
    quest.addImage(questImg);
    quest.scale = 0.5;
    advice = createSprite(300,500,50,50);
    advice.addImage(adviceImg);
    captain = createSprite(300,700,50,50);
    captain.addImage(captainImg);
    captain.scale = 0.5;
    
  
  
  
}
function spawnC(){
 if( player.y = 490){
  c = createSprite(910,350,50,50);
  c.addImage(cImg)
  c.scale = 1;
  ghost = createSprite(910,490,50,50);
  ghost.addImage(ghostImg)
  ghost.scale = 0.5;
 }
}