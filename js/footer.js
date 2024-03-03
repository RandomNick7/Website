function extendFooter(){
    footer = document.getElementById('footer-ticker');
    let repeatCount = Math.floor(footer.offsetWidth / footer.children[0].offsetWidth)+2;
    footer.innerHTML = footer.children[0].outerHTML.repeat(repeatCount);
}

window.addEventListener("load", () => {extendFooter()});
window.addEventListener("resize", () => {extendFooter()});
