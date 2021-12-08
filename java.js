var car_icon =document.getElementsByClassName("cardIcon")[0];
var card_div =document.getElementsByClassName("cardDiv")[0];
var bar_icon= document.getElementsByClassName("menu")[0];
var navbar2= document.getElementsByClassName("nav2")[0];
var close= document.getElementsByClassName("closing")[0];

//the number of card
var deduce= document.querySelector('#minus');
var num= document.querySelector('#theNum');
var adding= document.querySelector('#add');
$(adding).click(() => {
var intNum = parseInt( $(num).text());
num.innerHTML=intNum+1;

});

$(deduce).click(() => {
  var intNum = parseInt( $(num).text());
  num.innerHTML=intNum-1;  
  });
// Add to card Button
var addToCardBtn= document.querySelector('.addButton');
var showNumCard= document.querySelector('.showNum');
var amountOfNumber= document.querySelector('.amountNum');
var TotalPurchased= document.querySelector('.total');

var pOfCard= document.querySelectorAll('.cardElement p');

var contentCard= document.querySelector('.cardContent');
$(contentCard).hide();
$(addToCardBtn).click(() =>{
  var intNum = parseInt( $(num).text());
if(intNum>0){
  showNumCard.innerHTML=intNum;
  amountOfNumber.innerHTML=intNum+" = ";
  TotalPurchased.innerHTML='$'+intNum*120.00;

  $(pOfCard).hide();
  $(contentCard).show();

 

  
}

});

$('.delete').click(() =>{
  $(contentCard).hide();
  showNumCard.innerHTML='';
  $(pOfCard).show();
});

// the images

var mainImage= document.querySelector('#theMainImg');
var mainImageHover= document.querySelector('#theImageMainHover');
var images=document.querySelectorAll(".smallImg img");
var secondImageHover= document.querySelector('#hoverImageDiv');
var secondImageHover2= document.querySelectorAll('.hoverImgSmall img');

var nextPic=document.querySelector('.right');
var previousPic=document.querySelector('.left');

car_icon.addEventListener("click", function() {

    if (card_div.style.display !== "none") {
        card_div.style.display = "none";
      } else {
        card_div.style.display = "block";
      }
   
   
});

bar_icon.addEventListener("click", () => navbar2.style.display = "block");
close.addEventListener("click", () => navbar2.style.display = "none");

// images
images.forEach(img => img.addEventListener('click', e => {mainImage.src = e.target.src;}));
secondImageHover2.forEach(img => img.addEventListener('click', e => {mainImageHover.src = e.target.src;}
));




$(document).ready(function(){


  $('#theMainImg').click(function(){
    $(".hoverEffect").show();
  });

  $(".closeHover").click(function(){
    $(".hoverEffect").hide();
  });
  var cardIndex=0;
  $(nextPic).click(function(){
    
    cardIndex=cardIndex+1; 
    if (cardIndex >= secondImageHover2.length) {
      cardIndex = 0;
  } 
    $(mainImageHover).attr('src', $(secondImageHover2[cardIndex]).attr('src'))
    console.log(cardIndex);
   


 
});
$(previousPic).click(() => {
  cardIndex=cardIndex-1;
  if (cardIndex >= secondImageHover2.length) {
    cardIndex = 0;
}
  $(mainImageHover).attr('src', $(secondImageHover2[cardIndex]).attr('src'))
    console.log("this is prev  "+cardIndex);


});

});
