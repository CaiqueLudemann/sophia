let word1 = document.getElementById('consonant');
let word2 = document.getElementById('vowel');
let consonantButton = document.getElementById("button-1");
let vowelButton = document.getElementById("button-2");
let switchCaseButton = document.getElementById("transformCase");
let caseSwitchCount = 0;
let randomAnimalCount = 0;
let animalsArray = ["./resources/dog.webp", "./resources/cat.webp", "./resources/lion.png", "./resources/monkey.jpg"];
let image = document.getElementById('animalPic');
let animalInput = document.getElementById('inputAnimal');
let animalSubmit = document.getElementById('submitAnimal')
let regEx = /(http:\/\/127.0.0.1:5500\/resources\/)[a-zA-Z]{2}/;
let switchAnimalImage = document.getElementById('switchAnimal');

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
    let userInput = animalInput.value.slice(0,2);
    let imageName = image.src.slice(32,34);
    let randomAnimal = animalsArray[Math.floor(Math.random()*animalsArray.length)];
    if (userInput === imageName) {
        image.src = randomAnimal;
        alert('Good job, Sophia!')
        animalInput.value='';
    } else {
        alert('No, sorry! Love you <3')
    }
}

function changeAnimals(){
    let randomAnimal = animalsArray[Math.floor(Math.random() * animalsArray.length)]
    image.src = randomAnimal;
}


animalInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        animalSubmit.click();
    }
});


consonantButton.onclick = randomConsonant;
vowelButton.onclick = randomVowel;
switchCaseButton.onclick = switchCase;
animalSubmit.onclick = checkInput;
// animalInput.onkeydown = enterInput;

switchAnimalImage.onclick = changeAnimals