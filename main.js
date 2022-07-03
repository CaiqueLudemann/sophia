let word1 = document.getElementById('consonant');
let word2 = document.getElementById('vowel');
let consonantButton = document.getElementById("button-1");
let vowelButton = document.getElementById("button-2");
let switchCaseButton = document.getElementById("transformCase");
function randomNumber(){
    return Math.floor(Math.random()*256);
};
function randomColor(){
    return 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')';
};


function randomConsonant(){
    let consonantsArray = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    let randomIndexNumber = Math.floor(Math.random()*consonantsArray.length);
    let consonant = consonantsArray[randomIndexNumber];
    word1.innerHTML= consonant;  
    return word1.innerHTML;
}

function randomVowel(){
    let vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    let randomIndexNumber = Math.floor(Math.random() * vowelsArray.length);
    let vowel = vowelsArray[randomIndexNumber];
    word2.innerHTML = vowel;
    word2.style.color = randomColor();
    return word2.innerHTML;
}

function switchCase(randomConsonant, randomVowel){
    word1.innerHTML = word1.innerHTML.toUpperCase();
    word2.innerHTML = word2.innerHTML.toUpperCase();
}

consonantButton.onclick = randomConsonant;
vowelButton.onclick = randomVowel;
switchCaseButton.onclick = switchCase