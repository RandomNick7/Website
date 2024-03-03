let isExpandToggled = false;
let menu = document.getElementById("other-links");
let button = document.getElementById("nav-expand");

function expandNav(){
    isExpandToggled = !isExpandToggled;
    if(isExpandToggled){
        menu.style.transform = "translate(0, 133.33%)";
        button.style.transform = "rotate(-180deg)";
    }else{
        menu.style.transform = "translate(0, -400%)";
        button.style.transform = "rotate(0deg)";
    }
}

window.addEventListener("resize", () => {
    if(window.innerWidth > 600){
        menu.style.transform = "none";
    }else{
        isExpandToggled = false;
        menu.style.transform = "translate(0, -400%)";
        button.style.transform = "rotate(0deg)";
    }
});