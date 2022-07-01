//Series of arrays used within program
const companies = ["amazon", "mcdonalds", "samsung", "apple", "tesco", "microsoft", "dropbox", "ebay"]
const downloadable = ["Document", "Report", "Review", "Assignment", "PDF", "Word", "Form", "File", "Record"]
const relationTraits = ["emailaddress", "time", "photo", "title", "grammar"]
const productTraits = ["didnotorder", "emailaddress", "photo", "title", "link", "grammar"]
const threatTraits = ["spelling", "link", "title", "grammar"]



function startGeneration() { // This function decides if the email will be phishing or not
    phishingRandomiser = Math.floor(Math.random()*10);
    document.getElementById("description").innerHTML = "generation working" + phishingRandomiser
    if (phishingRandomiser > 2) { // 30% Legit 70% Phishing emails
        document.getElementById("score").innerHTML = relationTraits[1];
        generatePhishing();
        
    }
    else {
        generateLegit();
    }
}

function generatePhishing() { // Phishing generation will start with what will look suspicious
    const companies = ["amazon", "mcdonalds", "samsung", "apple", "tesco", "microsoft", "dropbox", "ebay"]
    const relationTraits = ["emailaddress", "time", "photo", "title", "grammar"]
    const productTraits = ["didnotorder", "emailaddress", "photo", "title", "link", "grammar"]
    const threatTraits = ["grammar", "link", "title", "content"]

    phishingType = Math.floor(Math.random()*3);
    document.getElementById("phishinggeneration").innerHTML = "phishing generation working"
    document.getElementById("phishingtype").innerHTML = phishingType
    if (phishingType == 0) {
        document.getElementById("phishingtypeword").innerHTML = "relationship"
        length = relationTraits.length; // Settign length of array for number randomisation
        document.getElementById("phishinglength").innerHTML = length
    }   
    if (phishingType == 1) {
        document.getElementById("phishingtypeword").innerHTML = "product"
        length = productTraits.length;
        document.getElementById("phishinglength").innerHTML = length
    }
    if (phishingType == 2) {
        document.getElementById("phishingtypeword").innerHTML = "threat"
        length = threatTraits.length;
        document.getElementById("phishinglength").innerHTML = length
    }
    

    issues = Math.floor(Math.random()*3) + 1;
    document.getElementById("issuesnumber").innerHTML = issues
    var arr = [];
    while(arr.length < issues) {
        var r = Math.floor(Math.random()* length); // Randomising which issues will be put into the email
        if (arr.includes(r) == true) {
        }
        else {
            arr.push(r)
        }
        
    }
    document.getElementById("issuesarray").innerHTML = arr

    var wordArr = [];

    if (phishingType == 0)  {
        for (let step = 0; step < arr.length; step++) {
            arrNum = arr[step]
            wordArr.push(relationTraits[arrNum]);
        }
    }

    if (phishingType == 1)  {
        for (let step = 0; step < arr.length; step++) {
            arrNum = arr[step]
            wordArr.push(productTraits[arrNum]);
        }
    }

    if (phishingType == 2)  {
        for (let step = 0; step < arr.length; step++) {
            arrNum = arr[step]
            wordArr.push(threatTraits[arrNum]);
        }
    }

    document.getElementById("issuewordarray").innerHTML = wordArr

    generateEmail(wordArr, phishingType)

}

function generateEmail(wordArr, ) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    today = mm + '/' + dd

    /*if (wordArr.includes("emailaddress")) {

    }
    */
    

    if (wordArr.includes("time")) {
        badHour = Math.floor(Math.random()*3) + 1;
        badMinute = Math.floor(Math.random()*60);
        if (badMinute < 10) {
            document.getElementById("timeSent").innerHTML = today + " " + "0" + badHour + ":" + "0" + badMinute
        }
        else {
            document.getElementById("timeSent").innerHTML = today + " " + "0" + badHour + ":" + badMinute
        }

    }

    /*
    if (wordArr.includes("photo")) {
        
    }
    */
    if (wordArr.includes("title")) {
        const downloadable = ["document", "report", "review", "assignment", "PDF", "word document", "form", "file", "record"]
        const baitwords = ["Urgent", "URGENT", "SERIOUS", "CRITICAL", "NECESSARY", "IMPORTANT", "Important", "Necessary", "Critical", "Serious"]
        const connectorwords = ["we need this", "please get this", "have this"]
        const completionwords = ["sorted", "finished", "reviewed", "completed", "done", "sent off", "posted","sent out"]
        const finishwords = ["ASAP", "by today", "quickly", "tonight", "rapidly", "very soon", "right away"]
        if (phishingType == 0 ) {
            document.getElementById("emailTitle").innerHTML = baitwords[Math.floor(Math.random()*baitwords.length)] + " " + connectorwords[Math.floor(Math.random()*connectorwords.length)] + " " + downloadable[Math.floor(Math.random()*downloadable.length)] + " " + completionwords[Math.floor(Math.random()*completionwords.length)] + " " + finishwords[Math.floor(Math.random()*finishwords.length)] + ", " + baitwords[Math.floor(Math.random()*baitwords.length)] + "!"
        }

        if (phishingType == 1) {
            document.getElementById("emailTitle").innerHTML = baitwords[Math.floor(Math.random()*baitwords.length)] + " " + connectorwords[Math.floor(Math.random()*connectorwords.length)] + " " + downloadable[Math.floor(Math.random()*downloadable.length)] + " " + completionwords[Math.floor(Math.random()*completionwords.length)] + " " + finishwords[Math.floor(Math.random()*finishwords.length)] + ", " + baitwords[Math.floor(Math.random()*baitwords.length)] + "!"
        }

        if (phishingType == 2) {
            document.getElementById("emailTitle").innerHTML = baitwords[Math.floor(Math.random()*baitwords.length)] + " " + connectorwords[Math.floor(Math.random()*connectorwords.length)] + " " + downloadable[Math.floor(Math.random()*downloadable.length)] + " " + completionwords[Math.floor(Math.random()*completionwords.length)] + " " + finishwords[Math.floor(Math.random()*finishwords.length)] + ", " + baitwords[Math.floor(Math.random()*baitwords.length)] + "!"
        } 
    }
    /*
    if (wordArr.includes("grammar")) {
        
    }

    if (wordArr.includes("didnotorder")) {
        
    }

    if (wordArr.includes("link")) {
        
    }

    if (wordArr.includes("content")) {
        
    }
    */

}

function generateLegit() {
    document.getElementById("phishinggeneration").innerHTML = "legit generation working"
}