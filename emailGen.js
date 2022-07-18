const issuesArray = ["time", "email", "title", "image", "grammar"]

function startGeneration() {
    var wordArr = [];
    var arr = []; // Array to hold issue numbers

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    today = mm + '/' + dd; // Creates date for generation

    length = issuesArray.length;
    issues = Math.floor(Math.random()*3) + 1; // Randomising the amount of issues to be inserted
    genderRandom = Math.floor(Math.random()*2); // Randomise gender between male (1) and female (0)
    subjectType = Math.floor(Math.random()*2) // Generates the type of phishing email it will be

    while(arr.length < issues) {
        var r = Math.floor(Math.random()* length); // Randomising which issues will be put into the email
        if (arr.includes(r) == true) {
        }
        else {
            arr.push(r)
        }
    }

    for (let step = 0; step < arr.length; step++) {
        arrNum = arr[step]
        wordArr.push(issuesArray[arrNum]);
    }

    generatePhishing(today, wordArr);

}

function generatePhishing(today, wordArr, gender) {

    document.getElementById("emailContent").innerHTML = wordArr
    if (wordArr.includes("time")) {
        generateBadTime(today);
    }

    if (!wordArr.includes("time")) {
        generateGoodTime(today);
    }

    if (wordArr.includes("image")) {
        generateBadImage(gender);
    }

    if (!wordArr.includes("image")) {
        generateGoodImage(gender);
    }

    if (wordArr.includes("title")) {
        generateBadTitle();
    }

    document.getElementById("emailAddress").innerHTML = "test"

}

function generateBadImage() {
    randomImage = Math.floor(Math.random() * 15) + 1;
    if (genderRandom == 0) {
        document.getElementById("profileImage").src = "images/BusinessMan" + randomImage + ".jpg";
    }

    if (genderRandom == 1) {
        document.getElementById("profileImage").src = "images/BusinessWoman" + randomImage + ".jpg"; 
    }
}

function generateGoodImage() {
    randomImage = Math.floor(Math.random() * 15) + 1;
    if (genderRandom == 1) {
        document.getElementById("profileImage").src = "images/BusinessMan" + randomImage + ".jpg";
    }

    if (genderRandom == 0) {
        document.getElementById("profileImage").src = "images/BusinessWoman" + randomImage + ".jpg"; 
    }
}

function generateBadTime(today) {
        badHour = Math.floor(Math.random()*3) + 1;
        badMinute = Math.floor(Math.random()*60);
        if (badMinute < 10) {
            document.getElementById("timeSent").innerHTML = today + " " + "0" + badHour + ":" + "0" + badMinute
        }
        else {
            document.getElementById("timeSent").innerHTML = today + " " + "0" + badHour + ":" + badMinute
        }
}

function generateGoodTime(today) {
    goodHour = 0
    goodMinute = Math.floor(Math.random()*60);
        while (goodHour < 10) {
            goodHour = Math.floor(Math.random()*18) + 1;
        }  

        if (goodMinute < 10) {
            document.getElementById("timeSent").innerHTML = today + " " + goodHour + ":" + "0" + goodMinute
        }
        else {
            document.getElementById("timeSent").innerHTML = today + " " + goodHour + ":" + goodMinute
        }
}

function generateBadTitle(subjectType) {
    baitWords = ["urgent", "[ASAP]", "pressing", "critical", "crucial", "serious", "high-priority", "important", "vital", "quick", "swift", "hurry-up"]

    payrollWords = ["payroll", "salary", "wage", "money", "pay", "payment"]

    fileWords = ["file", "download", "pdf", "word document", "form", "report", "record"]

    meetingWords = ["meeting", "group chat", "slack group"]
    joinWords = ["please join this", "join this asap", "new"]

    raiseWords = []

    vacationWords = ["vacation", "holiday", "time off", "leave", "break", "rest days"]

    if (subjectType == 0) { //Payroll issue

    }

    if (subjectType == 1) { //Something needs to be done to a file

    }

    if (subjectType == 2) { // Link to join meeting or add to schedule

    }

    if (subjectType == 3) { // Employee raises

    }

    if (subjectType == 4) { // New vacation policies

    }


}