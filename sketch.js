//Create variables here
var dog , dogimage , doghappyimage;
var database;
var foodStock,foodS;
var feed,addFood;
function preload()
{
  //load images here
  dogimage = loadImage("images/dogImg.png")
  doghappyimage = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800,700);
  
  database = firebase.database();


  foodStock = database.ref('Food').on("value",readstock)
 
 feed = createButton('last fed') ;
 feed.position(800,95);
 feed.mousePressed(decfood)
 
 foodadd = createButton('foodadd')
 foodadd.position(900,95)
 feed.mousePressed(addfood)
var fedtime = database.ref('Feedtime').on("value",function(data){

  fedtime = data.val();
})

 
}


function draw() {  
background(46,139,87)
dog = createSprite(400,350,50,50);
dog.addImage(dogimage);

text("use up arrow to feed milk or meat ",33,50);
textSize(30);



  drawSprites();
  //add styles here

}

function readstock(data){

  foodS = data.val();
}
function writeStock(x){



  if(x<=0){
    x=0;
  }else{

    x = x-1;
  }
  database.ref('Food').update({

  Food:x
})


}
function addfood(){

foodS = foodS +1 

}
function decfood(){

  foodS = foodS - 1;
}