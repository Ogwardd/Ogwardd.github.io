const issuesArray = ["time", "email", "title", "image", "grammar"]
const male_first_names = ["john", "oliver", "mike", "david", "ian", "chris", "tom", "jack", "gus", "craig", "scott", "elliot", "daniel"]
const female_first_names = ["julie", "june", "kirsty", "gwynn", "daisy", "susan", "carol", "anne", "patricia", "molly", "tina", "maude", "sheila"]
const last_names = ["anderson", "ashwoon", "aikin", "bateman", "bongard", "bowers", "boyd", "cannon", "cast", "deitz", "dewalt", "ebner", "french", "hancock", "haworth", "hesch", "hoffman", "kassing", "knutson", "lawless", "lawicki", "mccord", "mccormack", "miller", "myers", "nugent", "ortiz", "orwig", "ory", "paiser", "pak", "pettigrew", "quinn", "quizoz", "ramachandran", "resnick", "sagar", "schickowski", "schiebel", "sellon", "severson", "shaffer", "solberg", "soloman", "sonderling", "soukup", "soulis", "stahl", "sweeney", "tandy", "trebil", "trusela", "trussel", "turco", "uddin", "uflan", "ulrich", "upson", "vader", "vail", "valente", "vanzandt", "vanderpoel", "ventotla", "vogal", "wagle", "wagner", "wakefield", "weinstein"]
const gender_info = ["is a female coworker", "is a male coworker"]

function startGeneration() {
    wordArr = [];
    var arr = []; // Array to hold issue numbers

    image = document.getElementById('profileImage');
    image.style.borderColor = null;

    time = document.getElementById("timeSent");
    time.style.backgroundColor = null;

    title = document.getElementById("emailTitle");
    title.style.backgroundColor = null;

    email = document.getElementById("emailAddress");
    email.style.backgroundColor = null;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    today = mm + '/' + dd; // Creates date for generation

    length = issuesArray.length;
    issues = Math.floor(Math.random()*3) + 1; // Randomising the amount of issues to be inserted
    gender = Math.floor(Math.random()*2); // Randomise gender between male (1) and female (0)
    subjectType = 4;
    //subjectType = Math.floor(Math.random()*2) // Generates the type of phishing email it will be

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

    generatePhishing(today, wordArr, gender, subjectType);

}

function generatePhishing(today, wordArr, gender, subjectType) {

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
        generateBadTitle(subjectType);
    }

    if (!wordArr.includes("title")) {
        generateGoodTitle();
    }

    if (wordArr.includes("email")) {
        generateBadEmail(gender);
    }

    if (!wordArr.includes("email")) {
        generateGoodEmail(gender);
    }

    document.getElementById("emailBrief").innerHTML = contextName + " " + gender_info[gender] + ", emails are only meant to be sent through work hours"

}

function generateBadEmail() {
    let r = (Math.random() + 1).toString(36).substring(7);
    let t = (Math.random() + 1).toString(36).substring(7);
    
    if (gender == 0) { //Female 
        document.getElementById("emailAddress").innerHTML = "test_bad_female"
        emailname = female_first_names[Math.floor(Math.random()*female_first_names.length)] + last_names[Math.floor(Math.random()*last_names.length)]     
    }

    if (gender == 1) { //Male
        document.getElementById("emailAddress").innerHTML = "test_bad_male"
        emailname = male_first_names[Math.floor(Math.random()*male_first_names.length)] + last_names[Math.floor(Math.random()*last_names.length)]
    }  
    
    document.getElementById("emailAddress").innerHTML = emailname + "@" + r + t + ".com";
    
}

function generateGoodEmail() {
    document.getElementById("emailAddress").innerHTML = "test_good"
    if (gender == 0) { //Female 
        femaleRandom = Math.floor(Math.random()*female_first_names.length) 
        lastRandom = Math.floor(Math.random()*last_names.length)
        contextFirstName = female_first_names[femaleRandom]
        contextLastName = last_names[lastRandom]
        emailname = contextFirstName +  contextLastName
        contextName = (contextFirstName.charAt(0).toUpperCase() + contextFirstName.slice(1)) + " " + (contextLastName.charAt(0).toUpperCase() + contextLastName.slice(1));
    }

    if (gender == 1) { //Male
        maleRandom = Math.floor(Math.random()*male_first_names.length) 
        lastRandom = Math.floor(Math.random()*last_names.length)
        contextFirstName = male_first_names[maleRandom]
        contextLastName = last_names[lastRandom]
        emailname = contextFirstName +  contextLastName
        contextName = (contextFirstName.charAt(0).toUpperCase() + contextFirstName.slice(1)) + " " + (contextLastName.charAt(0).toUpperCase() + contextLastName.slice(1));
    }  

    
    document.getElementById("emailAddress").innerHTML = emailname + "@gmail.com";
}

function generateBadImage() {
    randomImage = Math.floor(Math.random() * 15) + 1;
    if (gender == 0) {
        document.getElementById("profileImage").src = "images/BusinessMan" + randomImage + ".jpg";
    }

    if (gender == 1) {
        document.getElementById("profileImage").src = "images/BusinessWoman" + randomImage + ".jpg"; 
    }
}

function generateGoodImage() {
    randomImage = Math.floor(Math.random() * 15) + 1;
    if (gender == 1) {
        document.getElementById("profileImage").src = "images/BusinessMan" + randomImage + ".jpg";
    }

    if (gender == 0) {
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


    //Vacation generation
    vacationWordsOne = ["Vacation time", "Holiday", "Time off", "Leave", "Break"]
    vacationWordsTwo = ["is now", "is", "will be", "should be"]
    vacationWordsThree = ["up", "ready", "set up", "added", "sorted out"]
    vacationWordsFour = ["for you to", "go ahead and", "please", "feel free to"]
    vacationWordsFive = ["take", "sort this out", "set your days", "add to the schedule"]

    if (subjectType == 0) { //Payroll issue

    }

    if (subjectType == 1) { //Something needs to be done to a file

    }

    if (subjectType == 2) { // Link to join meeting or add to schedule

    }

    if (subjectType == 3) { // Employee raises

    }

    if (subjectType == 4) { // New vacation policies
        randV1 = vacationWordsOne[Math.floor(Math.random()*vacationWordsOne.length)]
        randV2 = vacationWordsTwo[Math.floor(Math.random()*vacationWordsTwo.length)]
        randV3 = vacationWordsThree[Math.floor(Math.random()*vacationWordsThree.length)]
        randV4 = vacationWordsFour[Math.floor(Math.random()*vacationWordsFour.length)]
        randV5 = vacationWordsFive[Math.floor(Math.random()*vacationWordsFive.length)]
        document.getElementById("emailTitle").innerHTML = randV1 + " " + randV2 + " " + randV3 + " " + randV4 + " " + randV5
    }


}

function generateGoodTitle() {
    document.getElementById("emailTitle").innerHTML = "This is a good email"
}

function suspiciousTime() {
    var element = document.getElementById("timeSent");
    if (wordArr.includes("time")) {
        element.style.backgroundColor = "#78CD39"
    }
    else {
        element.style.backgroundColor = "#ED5E40"
    }
}

function suspiciousTitle() {
    var element = document.getElementById("emailTitle");
    if (wordArr.includes("title")) {
        element.style.backgroundColor = "#78CD39"
    }
    else {
        element.style.backgroundColor = "#ED5E40"
    }

}

function suspiciousEmail() {
    var element = document.getElementById("emailAddress");
    if (wordArr.includes("email")) {
        element.style.backgroundColor = "#78CD39"
    }
    else {
        element.style.backgroundColor = "#ED5E40"
    }

}

function suspiciousImage() {
    var element = document.getElementById("profileImage");
    if (wordArr.includes("image")) {
        element.style.borderColor = "#78CD39"
    }
    else {
        element.style.borderColor = "#ED5E40"
    }

}