


let MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight ="0px";

function menutoggle(){
if(MenuItems.style.maxHeight == "0px"){
    MenuItems.style.maxHeight = "200px"
}else{
    MenuItems.style.maxHeight = "0px"
}    
}

//var ProductImg =document.getElementById("productImg");
//var SmallImg = document.getElementsByClassName("small-img");

//SmallImg [0].onclick = function(){
  // ProductImg.src = SmallImg [0].src;
//}
//SmallImg [1].onclick = function(){
  //  ProductImg.src = SmallImg [1].src;
//}
//SmallImg [2].onclick = function(){
  //  ProductImg.src = SmallImg [2].src;
//}
//SmallImg [3].onclick = function(){
  //    ProductImg.src = SmallImg [3].src;
//}
let LoginForm = document.getElementById("LoginForm");
let RegForm = document.getElementById("RegForm");
let Indicator = document.getElementById("Indicator");


function register(){
    RegForm.style.transform ="translateX(0)";
    LoginForm.style.transform ="translateX(0)";
    Indicator.style.transform ="translateX(100px)";
}

function login(){
    RegForm.style.transform ="translateX(300px)";
    LoginForm.style.transform ="translateX(300px)";
    Indicator.style.transform ="translateX(0)";
}