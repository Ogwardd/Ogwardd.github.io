score = 0

function minusone() {
    score--
    document.getElementById("score").innerHTML = score;
}

function addone() {
    score++
    document.getElementById("score").innerHTML = score;
}

function randomise() {
    randnum = Math.floor(Math.random() * 10) % 2;
    document.getElementById("number").innerHTML = randnum;
    if (randnum == 1) {
        document.getElementById("emailType").innerHTML = "Phishing"; 
    }
    if (randnum == 0) {
        document.getElementById("emailType").innerHTML = "Legitimate";
    }

}