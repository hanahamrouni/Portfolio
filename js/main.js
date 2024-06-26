

function myFunction(x) {
     x.classList.toggle("change");
     $(navbarNav).slideToggle("togle")

}


let x1 = 1;
setInterval(() => {

     let title = " Frontend developer";

     nt.innerText = title.slice(0, x1);
     x1++;
     
     if (title.length < x1) {
          x1 = 1;
     }
   

}, 300);


function upp() {
     window.scrollTo({
               top:0,
               left:0,
               behavior:"smooth"
          })
}





$("#siderBar").click(function(){
/*$(".box").toggle(1000)*/
let boxWidth=$('.box').outerWidth();

if( $("#siderBar").css('right')=='0px'){
     $("#siderBar").animate({right:`-${boxWidth}`},500)

}

else{
     $("#siderBar").animate({right:`0px`},500)
  
}


});

let colorBoxes=$(".color-box");


colorBoxes.eq(0).css('backgroundColor','#09c')
colorBoxes.eq(1).css('backgroundColor','oronge')
colorBoxes.eq(2).css('backgroundColor','tomato')
colorBoxes.eq(3).css('backgroundColor','black')

colorBoxes.click(function(e){
  let bgColor= $(e.target).css('backgroundColor');
  $('.change').css('backgroundColor',bgColor)

})