const quoteText = document.querySelector(".quote"),
author = document.querySelector(".quote-author .name"),
soundBtn = document.querySelector(".sound"),
twitter = document.querySelector(".twitter"),
copyBtn = document.querySelector(".copy"),

quoteBtn = document.querySelector("button");



function ramdomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerHTML = "loading Quote...";

    // lấy api ramdomQuote 
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{

        quoteText.innerText = result.content;
        author.innerText = result.author;
        quoteBtn.innerHTML = "New Quote";
        quoteBtn.classList.remove("loading");

    });
}
window.onload = function()
{
    ramdomQuote();
};


soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${author.innerHTML}`)
    speechSynthesis.speak(utterance);
});


copyBtn.addEventListener("click", ()=>{

    navigator.clipboard.writeText(quoteText.innerHTML);
});
twitter.addEventListener("click", ()=>{
    let twitterUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`; 
    window.open(twitterUrl,"_blank");
});


quoteBtn.addEventListener("click",ramdomQuote );