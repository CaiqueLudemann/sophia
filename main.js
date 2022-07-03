let word1 = document.getElementById('consonant');
let word2 = document.getElementById('vowel');
let consonantButton = document.getElementById("button-1");
let vowelButton = document.getElementById("button-2");
let switchCaseButton = document.getElementById("transformCase");
let caseSwitchCount = 0;
let randomAnimalCount = 0;
let animalsArray = ["./resources/dog.webp", "./resources/cat.webp", "./resources/lion.png", "./resources/monkey.png"];
let image = document.getElementById('animalPic');
let animalInput = document.getElementById('inputAnimal');
let animalSubmit = document.getElementById('submitAnimal')
let regEx = /(http:\/\/127.0.0.1:5500\/resources\/)[a-zA-Z]{2}/
let userAnimalInput = [];

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

function switchCase(){
    
    word1.innerHTML = word1.innerHTML.toUpperCase();
    word2.innerHTML = word2.innerHTML.toUpperCase();
    caseSwitchCount+=1;
    if (caseSwitchCount % 2 === 0) {
        word1.innerHTML = word1.innerHTML.toLowerCase();
        word2.innerHTML = word2.innerHTML.toLowerCase();        
        // alert(image.src[32]+image.src[33]+image.src[34])
        alert(image.src.slice(32,35))
    }
}

function checkInput(){
    userAnimalInput.push(animalInput.value)
    let userInput = animalInput.value.splice(0,3);
    let imageName = image.src.splice(32,35);
    let randomAnimal = animalsArray[Math.floor(Math.random()*animalsArray.length)]
    if (userInput === imageName) {
        image.src = randomAnimal;
    } else {
        alert('wrong')
    }
}

console.log(userAnimalInput)

consonantButton.onclick = randomConsonant;
vowelButton.onclick = randomVowel;
switchCaseButton.onclick = switchCase;
animalSubmit.onclick = checkInput;