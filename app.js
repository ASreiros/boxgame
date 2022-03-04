function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//Part below generates 2 boxes with windows

let gamechecker = 1;

let info = document.querySelector(".message-screen")
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
const temphtml = `<div class="smallboxR" id ="r${i}"></div>`
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
ball.setAttribute("id", `bb${randomArr[0]}`);

//spalvos blokas
const color1 = rand(0,255);
const color2 = rand(0,255);
const color3 = rand(0,255);
let color4 = ""
const suma = color1 + color2 + color3
if (suma < 350) {
color4 = "white"    
} else{
color4 = "black"    
}
ball.style.color = color4
ball.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})` 
//spalvos blokas-end

randomArr.shift();
ball.appendChild(ballnumber);
boxforball.appendChild(ball);   
ball.addEventListener("click", () => {
    if(ball.id === `bb${gamechecker}`){
    const house = document.getElementById(`r${gamechecker}`)
    const iball = document.getElementById(`bb${gamechecker}`)
    house.appendChild(iball)
        gamechecker++;
    } else {
    const a = rand(1,3)
    let atext = "";
    switch (a) {
        case 1:
            atext = "Wrong ball"
        break;
        case 2:
            atext = "Nope"
        break;
        case 3:
            atext = "incorrect, click again"
        break;
    }    
    info.innerHTML = atext;
    setTimeout(textclear,1000)
    function textclear() {
        info.innerHTML = "";  
    } 
    }
    
    })
}
}


const clock = document.querySelector("#clock")
clock.innerHTML = "00:00:00"

