function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bbs = document.querySelector("#bbs");
const bbc = document.querySelector("#bbc");
let myTimeout = null;
let info = document.querySelector(".message-screen")

bbs.addEventListener("click", () => {
    bbs.classList.add("bbhiden");
    bbs.classList.remove("bbshown");
    bbc.classList.remove("bbhiden");
    bbc.classList.add("bbshown");
    stopwatch();
    ballgenerator()   
})

bbc.addEventListener("click", () => {
    bbc.classList.add("bbhiden");
    bbc.classList.remove("bbshown");
    bbs.classList.remove("bbhiden");
    bbs.classList.add("bbshown");
    clearTimeout(myTimeout);
    clock.innerHTML = "00:00:00" 
    gamechecker = 1;
    t = 1;
    info.innerHTML = "Press start to play again"
    for (let i = 1; i < 26; i++) {
    document.querySelector(`#l${i}`).innerHTML = "";
    document.querySelector(`#r${i}`).innerHTML = "";   
    }
    })

 
//Part below generates 2 boxes with windows

let gamechecker = 1;


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
        if (gamechecker === 25){
            info.innerHTML = "you won!!!"
            clearTimeout(myTimeout);
        }else{
            gamechecker++;
        }
    } else {
    const a = rand(1,3)
    let atext = "";
    let textclearer = setTimeout(textclear,0);
    switch (a) {
        case 1:
            atext = "Wrong ball";
            clearTimeout(textclearer);
            textclearer = setTimeout(textclear,1500);
        break;
        case 2:
            atext = "Nope"
            clearTimeout(textclearer);
            textclearer = setTimeout(textclear,1500);
        break;
        case 3:
            atext = "incorrect, click again"
            clearTimeout(textclearer);
            textclearer = setTimeout(textclear,1500);
        break;
    }    
    info.innerHTML = atext;
    
    function textclear() {
        info.innerHTML = "";  
    } 
    }
    
    })
}
}


const clock = document.querySelector("#clock")
clock.innerHTML = "00:00:00"
let t = 0;

function stopwatch() {   
let t1 = Math.trunc(t/6000);
let t2 = Math.trunc((t - t1*6000)/600)
let t3 = Math.trunc((t - t1*6000 - t2*600)/100)
let t4 = Math.trunc((t - - t1*6000 - t2*600 - t3*100)/10)
let t5 = Math.trunc(t % 10)
clock.innerHTML = `${t1}${t2}:${t3}${t4}:${t5}0`
t++
myTimeout = setTimeout(stopwatch, 100)   
}

