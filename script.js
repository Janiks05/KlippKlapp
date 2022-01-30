let dice1 = document.getElementById('dice1')
let dice2 = document.getElementById('dice2')

let lsItemNum = localStorage.getItem("lsNum")
let mainScore = 0

let numbers = [{
    html: document.getElementById("1"),
    value: 1,
},
{
    html: document.getElementById("2"),
    value: 2
},
{
    html: document.getElementById("3"),
    value: 3
},
{
    html: document.getElementById("4"),
    value: 4

},
{
    html: document.getElementById("5"),
    value: 5
},
{
    html: document.getElementById("6"),
    value: 6
},
{
    html: document.getElementById("7"),
    value: 7

},
{
    html: document.getElementById("8"),
    value: 8
},
{
    html: document.getElementById("9"),
    value: 9
}

]

let num1 = Math.floor(Math.random() * 6 + 1)
let num2 = Math.floor(Math.random() * 6 + 1)

let score = 0;
let scoreView = document.getElementById("score")
let mainScoreText = document.getElementById("mainScore")

let diced = false;

let tookAddedInt = false
let tookBothInt = false

window.onload = function () {
    document.addEventListener("keydown", keyPush);
}

function keyPush(evt) {
    switch (evt.keyCode) {
        case 13:
            dice();
            break;
        case 49:
            one();
            break;
        case 50:
            two();
            break;
        case 51:
            three();
            break;
        case 52:
            four();
            break;
        case 53:
            five();
            break;
        case 54:
            six();
            break;
        case 55:
            seven();
            break;
        case 56:
            eight();
            break;
        case 57:
            nine();
            break;
        case 82:
            location.reload();
            break;

    }
}

for (let j = 1; j < localStorage.length; j++) {
    // Create a p element:
    const para = document.createElement("li");
    const h = document.createElement('h1')

    // Create a text node:
    const node = document.createTextNode("Runde " + j + ": " + localStorage.getItem(j));

    // Append text node to the p element:
    para.appendChild(node);

    // Append the p element to the body:
    document.getElementById("footer").appendChild(para);

    mainScore += parseInt(localStorage.getItem(j))
}
mainScoreText.innerHTML += mainScore


function dice() {

    if (diced == false) {
        dice1.classList.add('diceit1')
        dice2.classList.add('diceit2')
        let num1 = Math.floor(Math.random() * 6 + 1)
        let num2 = Math.floor(Math.random() * 6 + 1)

        dice1.innerHTML = num1
        dice2.innerHTML = num2 = num2

        setInterval(showScore, 100)
        tookAddedInt = false
        tookBothInt = false
    }
    diced = true

}

score = score + 45

function showScore() {
    scoreView.innerHTML = "Score: " + score
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].html.addEventListener('click', () => {
        if (parseInt(dice1.innerHTML) + parseInt(dice2.innerHTML) == numbers[i].value && tookBothInt == false) {
            numbers[i].html.classList.add('clapped')
            tookAddedInt = true
            score = score - numbers[i].value;
            diced = false;
            dice1.classList.remove('diceit1')
            dice2.classList.remove('diceit2')
            numbers[i].html.disabled = true;
        }
        else if ((dice1.innerHTML == numbers[i].value || dice2.innerHTML == numbers[i].value) && (tookAddedInt == false)) {
            numbers[i].html.classList.add('clapped')

            score = score - numbers[i].value;
            diced = false;
            dice1.classList.remove('diceit1')
            dice2.classList.remove('diceit2')
            numbers[i].html.disabled = true;
            tookBothInt = true

        } else {
            alert("du CHEATER")
        }
    })
}
function ready() {
    lsItemNum++;
    localStorage.setItem('lsNum', lsItemNum)
    localStorage.setItem(localStorage.getItem('lsNum'), score)
    localStorage.setItem('lsNum', lsItemNum)
    //zum schluss
    location.reload()
}
function newGame() {
    let text = "Willst du wirklich ein neues Spiel starten?";
    if (confirm(text) == true) {
        localStorage.clear()
        location.reload()
    } else {
        alert('ok dann nicht!!!')
    }

}