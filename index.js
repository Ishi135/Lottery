let attempt = 10;
let luckyNumber;
let arr = [];
let isWon = false;

function generateRandomArray() {
    let randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random() * 50) + 1);
    }
    console.log(randomArray);
    return randomArray.sort((a, b) => a - b);
}

function play() {
    if (attempt === 0) {
        document.getElementById("playBtn").disabled = true;
    }
    else {
        luckyNumber = parseInt(document.getElementById("inputNum").value);

        arr = generateRandomArray(luckyNumber);

        if (arr.includes(luckyNumber)) {
            if (isWon === false) {
                document.getElementById("result").textContent = "You Won!";
                isWon = true;
                } else {
                    document.getElementById("result").textContent = "You Loose!";
                }
                attempt--;
        }
        else{
            document.getElementById("result").textContent = "You Loose!";
            console.log(arr);
            attempt--;
            console.log(attempt);
            }
    }
}

function reset() {
    attempt = 10;
    isWon = false;
    document.getElementById("playBtn").disabled = false;
    document.getElementById("result").textContent = "Start Game";
    document.getElementById("inputNum").value = "";
}