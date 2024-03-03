function randInt(max){
    return Math.floor(Math.random() * max);
}

let fullText = document.getElementById('call-to-action');

let wordList = ["cool", "awesome", "unique", "innovative", "creative",
                "inspiring", "amazing", "together", "new", "incredible"];

let wordBag = [...wordList];

function chooseNewWord(){
    let newWord = document.getElementById('hidden-c2a-swap');
    let changingWord = document.getElementById('changing-c2a-text');
    let fullText = document.getElementById('call-to-action');
    let randomIndex = randInt(wordBag.length);

    changingWord.style.opacity = "0";

    setTimeout(() => {    
        newWord.innerHTML = wordBag[randomIndex];
        wordBag.splice(randomIndex, 1);
        if(wordBag.length == 0){
            wordBag = [...wordList];
        }

        fullText.style.width = (fullText.offsetWidth - changingWord.offsetWidth + newWord.offsetWidth) + "px";
        changingWord.innerHTML = newWord.innerHTML;
        changingWord.style.opacity = "1";
    }, 500);
}

setInterval(chooseNewWord, 2000);

window.addEventListener("load", () => {chooseNewWord()});
window.addEventListener("resize", () => {
    fullText.style.width = "unset";
});