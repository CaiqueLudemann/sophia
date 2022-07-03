let consonantsArray= ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
let vowelsArray=['a','e','i','o','u'];



function randomConsonant(){
    let randInt = Math.floor(Math.random()*consonantsArray.length);
    return consonantsArray[randInt]
}

function randomVowel(){
    let randInt = Math.floor(Math.random() * vowelsArray.length);
    return vowelsArray[randInt]
}


let consonant = document.getElementById("consonant");
let vowel = document.getElementById("vowel");
let consonantButton = document.getElementById("button-1");
let vowelButton = document.getElementById("button-2");
let word = document.getElementById('word');


function randomNumber(){
    return Math.floor(Math.random()*256);
}

function joinLetters() {
    word.innerHTML = consonant.innerHTML + vowel.innerHTML;
}

function changeConsonant() {
    consonant.innerHTML = randomConsonant();
    joinLetters();
};

function changeVowel() {
    vowel.innerHTML = randomVowel()
    vowel.style.color = 'rgb('+randomNumber()+','+randomNumber()+','+randomNumber()+')';
    joinLetters();
};



consonantButton.onclick = changeConsonant;
vowelButton.onclick = changeVowel;

