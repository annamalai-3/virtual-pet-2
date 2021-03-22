class Food{
constructor(){

this.foodstock = 0;
this.lastfed = 0;

this.image = loadImage("Milk.png")

}
getfoodstock(){

database.ref('Food').on("value",(data)=>{

foodS = data.val();

})
}

updatefoodstock(x){

database.ref('/').update({

  Food:x  
})
if(x<=0){

x=0;

}else{
    x= x-1
}
}
display(){
var x = 80 
var y = 90;
imageMode (CENTER);

    image(this.image,720,220,50,100);


}




}