//Series of arrays used within program
const companies = ["amazon", "mcdonalds", "samsung", "apple", "tesco", "microsoft", "dropbox", "ebay"]
const company_emails = ["amazon.com", "mcdonalds.com", "samsung.com", "apple.com", "tesco.com", "microsoft.com", "dropbox.com", "ebay.com"]
const downloadable = ["Document", "Report", "Review", "Assignment", "PDF", "Word", "Form", "File", "Record"]
const relationTraits = ["emailaddress", "time", "photo", "title", "grammar"]
const productTraits = ["didnotorder", "emailaddress", "photo", "title", "link", "grammar"]
const threatTraits = ["link", "title", "grammar"]
const male_first_names = ["john", "oliver", "mike", "david", "ian", "chris", "tom", "jack", "gus", "craig", "scott", "elliot", "daniel"]
const female_first_names = ["julie", "june", "kirsty", "gwynn", "daisy", "susan", "carol", "anne", "patricia", "molly", "tina", "maude", "sheila"]
const last_names = ["anderson", "ashwoon", "aikin", "bateman", "bongard", "bowers", "boyd", "cannon", "cast", "deitz", "dewalt", "ebner", "french", "hancock", "haworth", "hesch", "hoffman", "kassing", "knutson", "lawless", "lawicki", "mccord", "mccormack", "miller", "myers", "nugent", "ortiz", "orwig", "ory", "paiser", "pak", "pettigrew", "quinn", "quizoz", "ramachandran", "resnick", "sagar", "schickowski", "schiebel", "sellon", "severson", "shaffer", "solberg", "soloman", "sonderling", "soukup", "soulis", "stahl", "sweeney", "tandy", "trebil", "trusela", "trussel", "turco", "uddin", "uflan", "ulrich", "upson", "vader", "vail", "valente", "vanzandt", "vanderpoel", "ventotla", "vogal", "wagle", "wagner", "wakefield", "weinstein"]

var susTitle = false
var susTime = false
var susEmail = false
var susLink = false
var susPhoto = false
var susGrammar = false
var susDidnotorder = false
var susContent = false





function startGeneration() { // This function decides if the email will be phishing or not
    var element = document.getElementById("timeSent");
    element.style.backgroundColor = "white"
    var element = document.getElementById("emailTitle");
    element.style.backgroundColor = "white"
    var element = document.getElementById("emailAddress");
    element.style.backgroundColor = "white"
    var element = document.getElementById("profileimage");
    element.style.borderColor = "#b3b3b3"

    susTitle = false // reset all to false at beginning of generation
    susTime = false
    susEmail = false
    susLink = false
    susPhoto = false
    susGrammar = false
    susDidnotorder = false
    susContent = false

    phishingRandomiser = Math.floor(Math.random()*10);
    genderRandom = Math.floor(Math.random()*2);
    document.getElementById("description").innerHTML = "generation working" + phishingRandomiser
    if (phishingRandomiser > 0) { // 10% Legit 90% Phishing emails
        generatePhishing(genderRandom);
        
    }
    else {
        generateLegit(genderRandom);
    }
}

function generatePhishing(genderRandom) { // Phishing generation will start with what will look suspicious
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
            susEmail = true
        }
    }

    document.getElementById("issuewordarray").innerHTML = wordArr

    generateEmail(wordArr, phishingType, genderRandom)

}

function generateEmail(wordArr, phishingType, genderRandom) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    random_company = Math.floor(Math.random() * 8);
    fake_random_company = Math.floor(Math.random() * 8);

    
    if (genderRandom == 0) { //Female 
        emailname = female_first_names[getRandomInt(0, female_first_names.length)] + last_names[getRandomInt(0, last_names.length)]
    }

    if (genderRandom == 1) { //Male
        emailname = male_first_names[getRandomInt(0, male_first_names.length)] + last_names[getRandomInt(0, last_names.length)]
    }  

    today = mm + '/' + dd

    if (wordArr.includes("emailaddress")) {
        if (phishingType == 0) {
            let r = (Math.random() + 1).toString(36).substring(7);
            let t = (Math.random() + 1).toString(36).substring(7)
            random_image = Math.floor(Math.random() * 6) + 1;
            susEmail = true
            document.getElementById("emailAddress").innerHTML = emailname + "@" + r + t + ".com";
        }

        else if (phishingType == 1) {
            susEmail = true
            document.getElementById("emailAddress").innerHTML =  companies[random_company] + "@gmail.com";
        }
    
        else if (phishingType == 2) {
            susEmail = true
            document.getElementById("emailAddress").innerHTML = "hax0rm4n@yahoo.com";
        }
    }
    
    

    if (wordArr.includes("time")) {
        susTime = true
        badHour = Math.floor(Math.random()*3) + 1;
        badMinute = Math.floor(Math.random()*60);
        if (badMinute < 10) {
            document.getElementById("timeSent").innerHTML = today + " " + "0" + badHour + ":" + "0" + badMinute
        }
        else {
            document.getElementById("timeSent").innerHTML = today + " " + "0" + badHour + ":" + badMinute
        }

    }


    if (wordArr.includes("photo")) {
        randomImage = Math.floor(Math.random()*6) + 1;
        susPhoto = true
        if (phishingType == 0){

            if (genderRandom == 0) {
                document.getElementById("profileimage").src = "images/BusinessMan" + randomImage + ".jpg";
            }
    
            if (genderRandom == 1) {
                document.getElementById("profileimage").src = "images/BusinessWoman" + randomImage + ".jpg"; 
            }
            
        } 

        if (phishingType == 1){
            while (fake_random_company == random_company) {
                fake_random_company = Math.floor(Math.random() * 8)
            }
            document.getElementById("profileimage").src = "business_images/" + companies[fake_random_company] +".jpg";
        }
        
    }

    if (wordArr.includes("title")) {
        // Arrays to randomise title
        const downloadable = ["document", "report", "review", "assignment", "PDF", "word document", "form", "file", "record"]
        const baitwords = ["Urgent", "URGENT", "SERIOUS", "CRITICAL", "Critical", "Serious", "[ASAP]", "QUICKLY", "PRONTO"]
        const connectorwords = ["we need this", "please get this", "have this"]
        const completionwords = ["sorted", "finished", "reviewed", "completed", "done", "sent off", "posted","sent out"]
        const finishwords = ["ASAP", "by today", "quickly", "tonight", "rapidly", "very soon", "right away"]

        susTitle = true // Setting title to be suspicious

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

    if (!wordArr.includes("emailaddress")) {
        if (phishingType == 0 ) {
            document.getElementById("emailAddress").innerHTML = emailname + "@" + "gmail.com"
        }
        
        if (phishingType == 1) {
            document.getElementById("emailAddress").innerHTML = companies[random_company] + "@" + company_emails[random_company]

        }
    }

    if (!wordArr.includes("photo")) {
        
        if (phishingType == 0) {
            if (genderRandom == 1) {
                document.getElementById("profileimage").src = "images/BusinessMan" + randomImage + ".jpg";
            }
    
            if (genderRandom == 0) {
                document.getElementById("profileimage").src = "images/BusinessWoman" + randomImage + ".jpg"; 
            }
        }

        if (phishingType == 1) {
            document.getElementById("profileimage").src = "business_images/" + companies[random_company] +".jpg";
        }
    }

    if (!wordArr.includes("time")) {
        goodHour = 0
        while (goodHour < 7) {
            goodHour = Math.floor(Math.random()*18) + 1;
        }
        
        goodMinute = Math.floor(Math.random()*60);
        if (goodHour > 9 && goodMinute > 9) {
            document.getElementById("timeSent").innerHTML = today + " " + goodHour + ":" + goodMinute

        }

        if (goodHour > 9 && goodMinute < 10) {
            document.getElementById("timeSent").innerHTML = today + " " + goodHour + ":" + "0" + goodMinute
        }
        if (goodhour < 10 && goodMinute > 9) {
            document.getElementById("timeSent").innerHTML = today + " " + "0" + goodHour + ":" + goodMinute
        }
        else {
            document.getElementById("timeSent").innerHTML = today + " " + "0" + goodHour + ":" + "0" + goodMinute
        }
           

    }

}

function generateLegit() {
    document.getElementById("phishinggeneration").innerHTML = "legit generation working";
}

function suspiciousTime(){
    var element = document.getElementById("timeSent");
    if (susTime == true) {
        element.style.backgroundColor = "#78CD39"
    }
    if (susTime == false) {
        element.style.backgroundColor = "#ED5E40"
    }
}

function suspiciousTitle(){
    var element = document.getElementById("emailTitle");
    if (susTitle == true) {
        element.style.backgroundColor = "#78CD39"
    }
    if (susTitle == false) {
        element.style.backgroundColor = "#ED5E40"
    }
}

function suspiciousEmail(){
    var element = document.getElementById("emailAddress");
    if (susEmail == true) {
        element.style.backgroundColor = "#78CD39"
    }
    if (susEmail == false) {
        element.style.backgroundColor = "#ED5E40"
    }
}

function suspiciousPhoto(){
    var element = document.getElementById("profileimage");
    if (susPhoto == true) {
        element.style.borderColor = "#78CD39"
    }
    if (susPhoto == false) {
        element.style.borderColor = "#ED5E40"
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}