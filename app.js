const boxLeft = document.getElementById("left-box")
let boxLefthtml = "";

for (let i = 1; i < 26; i++) {
const temphtml = `<div class="smallboxL" id ="l${i}"></div>`
boxLefthtml =boxLefthtml + temphtml;    
}

boxLeft.innerHTML = boxLefthtml;