mascotBody = document.getElementById("mascot");
mascotFace = document.getElementById("mascot-face");
mascotCloseBtn = document.getElementById("mascot-close");

isMascotOpen = false;

let mascotPos = {
    x: 0,
    y: 0
}

let posX = 0, posY = 0, mouseX = 0, mouseY = 0;

function resetAfkInterval(){
    clearInterval(AfkTrigger);
    AfkTrigger = setInterval(spawnMascot, 15000);
}

function spawnMascot(){
    if(!isMascotOpen){
        mascotBody.style.display = "block";
        mascotPos.x = Math.random()*80 + 5;
        mascotPos.y = Math.random()*60 + 10;
        mascotBody.style.left = mascotPos.x + "%";
        mascotBody.style.top = mascotPos.y + window.scrollY/window.innerHeight * 100 + "%";
        isMascotOpen = true;
        mascotFace.style.backgroundImage = "url('images/mascot/Default.svg')";
    }
}

let pokeRecovery = setTimeout(() => {
    mascotFace.style.backgroundImage = "url('images/mascot/Default.svg')";
}, 400);

function mascotPoke(){
    clearInterval(pokeRecovery);
    mascotFace.style.backgroundImage = "url('images/mascot/Booped.svg')";
    pokeRecovery = setTimeout(() => {
        mascotFace.style.backgroundImage = "url('images/mascot/Default.svg')";
    }, 400);
}

function mascotClose(){
    mascotBody.style.display = "none";
    isMascotOpen = false;
}

function mascotWorry(){
    mascotFace.style.backgroundImage = "url('images/mascot/Worry.svg')";
}

function mascotRelax(){
    mascotFace.style.backgroundImage = "url('images/mascot/Default.svg')";
}

function mascotDragStart(e){
    e.preventDefault();
    posX = e.clientX - mascotBody.offsetLeft;
    posY = e.clientY - mascotBody.offsetTop;
    window.addEventListener('mousemove', mascotMove, false);
}

function mascotDragStop(){
    window.removeEventListener('mousemove', mascotMove, false);
}

function mascotMove(e){
    mouseX = e.clientX - posX;
    mouseY = e.clientY - posY;
    mascotBody.style.left = mouseX + 'px';
    mascotBody.style.top = mouseY + 'px';
    if(e.movementX + e.movementY > 50){
        mascotFace.style.backgroundImage = "url('images/mascot/Dizzy.svg')";
    }
}

let AfkTrigger = setInterval(spawnMascot, 15000);

mascotFace.addEventListener("click", (e) => {mascotPoke()});

mascotFace.addEventListener("mousedown", mascotDragStart);
window.addEventListener("mouseup", mascotDragStop);

mascotCloseBtn.addEventListener("mouseover", (e) => {mascotWorry()});
mascotCloseBtn.addEventListener("mouseout", (e) => {mascotRelax()});
mascotCloseBtn.addEventListener("click", (e) => {mascotClose()});


document.addEventListener("mousemove", (e) => {resetAfkInterval()});
document.addEventListener("scroll", (e) => {resetAfkInterval()});
document.addEventListener("click", (e) => {resetAfkInterval()});