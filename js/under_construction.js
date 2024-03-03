function extendStrips(){
    strip = document.getElementsByClassName("ticker-body");
    // For both strips, copy their contents until reaching their width
    Array.from(strip).forEach(elem => {
        let stripUnit = elem.children[0];
        let repeatCount = Math.floor(elem.offsetWidth / stripUnit.offsetWidth)+2;
        console.log(repeatCount);
        elem.innerHTML = stripUnit.outerHTML.repeat(repeatCount);
    })
}

window.addEventListener("load", () => {extendStrips()});
window.addEventListener("resize", () => {extendStrips()});