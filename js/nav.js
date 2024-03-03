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

function currentTime() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr",
                        "May", "Jun", "Jul", "Aug",
                        "Sep", "Oct", "Nov", "Dec"]

    let date = new Date();
    let mo = monthNames[date.getMonth()];
    let dd = date.getDate();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = dd + " " + mo + " " + hh + ":" + mm + ":" + ss + " ";
  
    document.getElementById("nav-time").innerText = time;
  
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

currentTime();
setInterval(currentTime, 250);