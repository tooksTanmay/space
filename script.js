let HamBurger = document.getElementById("Burger");
let line1 = document.getElementById("BurgerLine-1");
let line2 = document.getElementById("BurgerLine-2");
let line3 = document.getElementById("BurgerLine-3");
let navBar = document.getElementById("NavBar");
let NavContainer = document.getElementById("navigationContainer");
let video = document.getElementById("navigationVideo");

function BurgerOn() {
    line1.style.transform = "translate(0px, 9px) rotate(45deg)";
    line1.style.transition = "0.3s ease-in-out"
    line1.style.backgroundColor = "white";
    
    line2.style.width = "0";
    line2.style.transition = "0.3s ease-in-out"
    
    line3.style.transform = "translate(0px, -10.5px) rotate(-45deg)";
    line3.style.transition = "0.3s ease-in-out"
    line3.style.backgroundColor = "white";
}

function BurgerOff() {
    line1.style.transform = "translate(0) rotate(0deg)";
    line1.style.backgroundColor = "black";
    
    line2.style.width = "30px";
    
    line3.style.transform = "translate(0) rotate(0deg)";
    line3.style.backgroundColor = "black";
}

let onClick = false;

HamBurger.addEventListener("click", ()=>{

    if(!onClick){
        navBar.style.height = "100vh";
        NavContainer.style.display = "flex";
        NavContainer.style.transition = "0.3s ease-in-out";
        video.style.display = "block";
        BurgerOn();
        onClick = true;
    }
    
    else{
        navBar.style.height = "0vh";
        NavContainer.style.display = "none";
        video.style.display = "none";
        BurgerOff();
        onClick = false;
    }
})