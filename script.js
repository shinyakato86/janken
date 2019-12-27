"use strict";

let maouText = document.getElementById("maouText");
let resultText = document.getElementById("resultText");
let reset = document.getElementById("reset");



function jankenStart(youValue) {
    let maouValue = Math.floor(Math.random()*3);
    if(maouValue == youValue) {
        resultText.innerHTML="あいこです";
        if(maouValue == 0) {
            maouText.innerHTML="相手はグーです";
        } if(maouValue == 1) {
            maouText.innerHTML="相手はチョキです";
        } if(maouValue == 2) {
            maouText.innerHTML="相手はパーです";
        }
    } 
    if(youValue == 0) {
        if(maouValue == 1) {
            resultText.innerHTML="あなたの勝ちです！";
            maouText.innerHTML="相手はチョキです";
        } else if(maouValue == 2) {
            resultText.innerHTML="あなたの負けです";
            maouText.innerHTML="相手はパーです";
        }
    }
    if(youValue == 1) {
        if(maouValue == 0) {
            resultText.innerHTML="あなたの負けです";
            maouText.innerHTML="相手はグーです";
        } else if(maouValue == 2) {
            resultText.innerHTML="あなたの勝ちです";
            maouText.innerHTML="相手はパーです";
        }
    }
    if(youValue == 2) {
        if(maouValue == 0) {
            resultText.innerHTML="あなたの勝ちです！";
            maouText.innerHTML="相手はグーです";
        } else if(maouValue == 1) {
            resultText.innerHTML="あなたの負けです";
            maouText.innerHTML="相手はチョキです";
        }
    } 
}

reset.onclick = function() {
    location.reload();
}