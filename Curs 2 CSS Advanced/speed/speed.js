let startButton = document.querySelector("input[type='button']")

startButton.addEventListener("click", startGame)

// cand este apasata o tasta apelam functia pressKey
window.addEventListener("keydown", pressKey)

function pressKey(event) {
    let letter = event.key.toUpperCase()
    // gasim primul div care are clasa literei apasate
    let divs = document.querySelectorAll("."+ letter)
    // facem div-ul sa dispara 
    divs.forEach(div => div.remove())
}

function startGame() {
    //ascunde butonul
     startButton.classList.add("hidden")
     // intervalul este de o secunda
     let interval = 3000
     //cream o noua litera duppa fiecare secunda
     setInterval(createNewLetter,interval)
}

//genereaza nr aleatoriu intre 0 si max(inclusiv)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
//genereaza o litera aleatorie mare  intre A - Z
function randomLetter() {
// generam un cod ascii aleatoriu intre 65 (A) si 90 (Z)
    let codeOfA = "A".charCodeAt(0)
    let codeOfZ = "Z".charCodeAt(0)
    let randomCode = randomNumber(codeOfA, codeOfZ)
    // let randomCode = 65 + randomNumber (25)
// convertim codul ascii in caracterul asociat lui
    return  String.fromCharCode(randomCode)
}
//functie care genereaza o culoare aleatorie
function randomColor() {
    let red = randomNumber(0,255)
    let green = randomNumber(0,255)
    let blue = randomNumber(0,255)
    return `rgb(${red},${green},${blue})`
}
// genereaza o pozitie aleatorie intre 0% si 90%
function randomPosition() {
    let position = randomNumber(0,90)
    return `${position}%`
}
//creaza un nou element div cu o litera aleatorie si
//adauga elementul in interiorul HTML
function createNewLetter() {
    let letter = randomLetter()
    let color = randomColor()
    let top = randomPosition()
    let right = randomPosition()
    // cream un nou element gol si fara stil
    let div = document.createElement("div")
    // adaugam clasa "letter" elementului nostru
    div.classList.add("letter")
    // setam textul din interiorul div-ului sa fie litera aleatorie
    div.innerText = letter
    // setam culoarea css
    div.style.backgroundColor = color
    // setam pozitia pe orizontala si pe verticala in css (top si right)
    div.style.top = top
    div.style.right = right
    // setam o clasa cu valoarea literei aleatorii
    div.classList.add(letter)
    //adaugam elementul div in body
    document.querySelector("body").appendChild(div)
}

