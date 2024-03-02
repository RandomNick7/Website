function extendStrips(){
    strip = document.getElementsByClassName("ticker-body");
    // For both strips, copy their contents until reaching their width
    Array.from(strip).forEach(elem => {
        let stripUnit = elem.children[0];
        let repeatCount = Math.ceil(elem.offsetWidth / stripUnit.offsetWidth)+1;
        elem.innerHTML = stripUnit.outerHTML.repeat(repeatCount);
    })
}

window.onload = extendStrips;
window.onresize = extendStrips;