let cursorTrail = [];
let isCursorMoving = false;
let cursorState = "auto";
let cursorPos = {
    x: 0,
    y: 0
}

function getMouseLocation(e){
    isCursorMoving = true;
    cursorPos.x = e.pageX;
    cursorPos.y = e.pageY;
    cursorState = window.getComputedStyle(e.target)["cursor"];
}

document.addEventListener("mousemove", (e) => {getMouseLocation(e)});

//Add a cursor copy to the document if the real cursor moves
setInterval(() => {
    if(isCursorMoving){
        const cursorCopy = document.createElement("img");
        cursorCopy.classList.add("cursor-trail");
        cursorCopy.style.position = "absolute";
        cursorCopy.style.opacity = "1.0";
        if(cursorState == "pointer"){
            cursorCopy.src = pathPrefix + "images/pointer.svg";
            cursorCopy.style.left = (cursorPos.x - 6) + "px";
            cursorCopy.style.top =  (cursorPos.y - 2) + "px";
        }else{
            cursorCopy.src = pathPrefix + "images/cursor.svg"
            cursorCopy.style.left = cursorPos.x + "px";
            cursorCopy.style.top = cursorPos.y + "px";
        }

        //Self-destruct timer
        setTimeout((cursorCopy) => {
            cursorTrail.shift();
            cursorCopy.remove();
        }, 400, cursorCopy);

        document.body.appendChild(cursorCopy);
        cursorTrail.push(cursorCopy);
    }
    isCursorMoving = false;
}, 5);