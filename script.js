let textEl = document.getElementById('string');
let vowelEl = document.getElementById('vowel');
let consEl = document.getElementById('consonent');
let digitsEl = document.getElementById('digits');
let sCharEl = document.getElementById('schar');

let vowels = ['a', 'e', 'i', 'o', 'u'];
let digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let sChars = ['!', '@', '#', '$', '%', '^', '&', '*', '&', '*', '(', ')', '~', '`', '-', '_', '+', '=', '{', '}', '[', ']', ':', ';', '"', ',', '|', '/', '?', '>', '<', ',', '.']

function checkStuff(text) {
    let vCount = 0; // vowels count
    let cCount = 0; // consonants count
    let sCount = 0; // special characters count
    let dCount = 0; // digits count
    
    for(let letter of text.toLowerCase()) {
        if(vowels.includes(letter)) {
            vCount++;
        }
        else if (digits.includes(letter)) {
            dCount++;
        }
        else if (sChars.includes(letter)) {
            sCount++;
        }
        else {
            cCount++;
        }
    }



    return [vCount, cCount, sCount, dCount]
}

function calc() {
    text = textEl.value;
    vowelEl.innerText = checkStuff(text)[0];
    consEl.innerText = checkStuff(text)[1];
    sCharEl.innerText = checkStuff(text)[2];
    digitsEl.innerText = checkStuff(text)[3];
}

textEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        calc();
    }
});