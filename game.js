const userInput = document.querySelector('#num')
console.log(userInput);
const bttn = document.querySelector('button');
const storage = document.getElementById('storage');
const msg = document.getElementById('msg');
const attemps = document.getElementById("val");

//Generating random number
let randNum = Math.round(Math.random() * 100 + 1);
console.log(randNum);
function setPrevGuess() {
    const span = document.createElement('span');
    span.innerText = userInput.value;
    storage.appendChild(span);
}

let counter = 10;
let playGame = true;
function countAttemps() {
    counter--;
    return counter;
}

bttn.addEventListener('click', () => {
    if (playGame == true) {
        console.log(userInput.value);
        let usrVal = userInput.value;
        let cnt = countAttemps();
        if (cnt > 0) {
            if (usrVal < randNum)
                msg.innerText = `Too Low!!`;
            else if (usrVal > randNum)
                msg.innerText = `Too High!!`;
            if (usrVal == randNum) {
                msg.innerText = "You Won!!!";
                playGame = false;
            }
        }
        else if (cnt == 0) {
            msg.innerText = `No More Attempt left`
        }
        // countAttemps()
        setPrevGuess();
        userInput.value = ``;
    }
})