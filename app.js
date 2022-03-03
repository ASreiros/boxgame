function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//Part below generates 2 boxes with windows

const boxLeft = document.getElementById("left-box")
let boxLefthtml = "";

for (let i = 1; i < 26; i++) {
const temphtml = `<div class="smallboxL" id ="l${i}"></div>`
boxLefthtml =boxLefthtml + temphtml;    
}

boxLeft.innerHTML = boxLefthtml;

const boxRight = document.getElementById("right-box")
let boxRighthtml = "";

for (let i = 1; i < 26; i++) {
const temphtml = `<div class="smallboxR" id ="l${i}"></div>`
boxRighthtml =boxRighthtml + temphtml;    
}

boxRight.innerHTML = boxRighthtml;

// part below generates balls with numbers
setTimeout(ballgenerator,0)

function ballgenerator() {
//generuojam skirtingus 25 skaičius    
const randomArr = [];    
while (randomArr.length<25) {
let checker = 0;    
const element = rand(1,25);
randomArr.forEach(a => {
    if (a === element){
checker++
    }
})

if(checker === 0){
randomArr.push(element)
}
}

for (let i = 1; i < 26; i++) {
const boxforball = document.querySelector(`#l${i}`);
const ball = document.createElement(`p`);
const ballnumber = document.createTextNode(`${randomArr[0]}`)
ball.classList.add("ball")
ball.style.color = "white" // tures buti invertinta spalva
ball.style.backgroundColor = "green" //tures buti random



ball.appendChild(ballnumber);
boxforball.appendChild(ball);   
}
}

