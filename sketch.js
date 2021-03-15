var cat;
var mouse;
var garden,gardenImg;
var mouseStanding;
var catSitting;
var cat_walking;
var mouse_walking;
var happy_mouse;
var happy_cat;

function preload() {
    //load the images here
    catSitting = loadImage("images/cat4.png");
    mouseStanding = loadImage("images/mouse4.png");
    gardenImg = loadImage("images/garden.png");
    cat_walking = loadAnimation("images/cat2.png","images/cat3.png");
    mouse_walking = loadAnimation("images/mouse2.png","images/cat3.png");
    happy_cat = loadAnimation("images/cat1.png");
    happy_mouse = loadAnimation("images/mouse1.png");

}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    garden = createSprite(350,0,800,800);
    garden.addImage(gardenImg);
    garden.scale = 1; 

    cat = createSprite(700,300,10,10);
    cat.addImage(catSitting);
    cat.scale = 0.1;

    mouse = createSprite(100,300,10,10);
    mouse.addImage(mouseStanding);
    mouse.scale = 0.1;
        
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
     var result = collition(cat,mouse);
      if(result){
          mouse.changeAnimation("happy",happy_mouse);
          cat.changeAnimation("happy2",happy_cat);
          cat.velocityX = 0;
      }
    drawSprites();

}


function keyPressed(){
  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
   cat.x = cat.x-100; cat.changeAnimation("catWalking"); mouse.changeAnimation("mouseChasing")
  }

  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       mouse.changeAnimation("happy",happy_mouse);
       cat.changeAnimation("happy2",happy_cat);
       cat.velocityX = 0;
  }

}
