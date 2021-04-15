var hen,  basket;
var gameState = "start";
var egg;

function preload(){
  henImg = loadImage("hen.png");
  eggImg = loadImage("egg.png");
  basketImg = loadImage("basket.png");
}

function setup() {
  createCanvas(1900,800);
   //hen = createSprite(400, 200, 50, 50);
   basket = createSprite(200, 750, 50, 50);
   basket.addImage("basket", basketImg);
   basket.scale = 0.3;

 //  hen.addImage("hen", henImg);
   

   for(var i = 50; i < 1800; i=i+150 ){
    hen = createSprite(i,80,50,50);
    hen.scale = 0.7;
    hen.addImage("hen", henImg);
   }
   eggGroup=new Group();
   score=0;
 
}

function draw() {
  background("pink");  


    //if(keyDown("space")){
      spawnEgg();
   // }

    if(keyDown("RIGHT_ARROW")){
      basket.x = basket.x+5;
    }

    if(keyDown("LEFT_ARROW")){
      basket.x = basket.x-5;
    }

    edges = createEdgeSprites();
    basket.bounceOff(edges[0]);
    basket.bounceOff(edges[1]);

    if(eggGroup.isTouching(basket)){
      eggGroup.destroyEach();
      score=score+2;
    }
  

  
  

  text("Score:"+score, 1000, 400);
  drawSprites();
}

function spawnEgg(){
  if(frameCount % 150 === 0){
    egg =  createSprite(300, 200, 50, 50);
    egg.scale = 0.25;
    egg.velocityY = 4;
    egg.x = random(20,1600);
    egg.addImage("egg", eggImg);
    eggGroup.add(egg)

    
  }
}