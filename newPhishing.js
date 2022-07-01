//Series of arrays used within program
const companies = ["amazon", "mcdonalds", "samsung", "apple", "tesco", "microsoft", "dropbox", "ebay"]
const downloadable = ["Document", "Report", "Review", "Assignment", "PDF", "Word", "Form", "File", "Record"]
const relationTraits = ["emailaddress", "time", "photo", "title", "grammar"]
const productTraits = ["didnotorder", "emailaddress", "photo", "title", "link", "grammar"]
const threatTraits = ["spelling", "link", "title", "grammar"]



function startGeneration() { // This function decides if the email will be phishing or not
    phishingRandomiser = Math.floor(Math.random()*10);
    if (phishingRandomiser > 2) { // 30% Legit 70% Phishing emails
        generatePhishing();
        document.getElementById("score").innerHTML = relationTraits[1];
    }
    else {
        generateLegit();
    }
}

function generatePhishing() { // Phishing generation will start with what will look suspicious
    type = Math.floor(Math.random()*3);
    if (type == 0) {
        length = relationTraits.length; // Settign length of array for number randomisation
    }
    if (type == 1) {
        length = productTraits.length;
    }
    if (type == 2) {
        length = threatTraits.length;
    }


    issues = Math.floor(Math.random()*3) + 1;
    var arr = [];
    while(arr.length < issues) {
        var r = Math.floor(Math.random()* length); // Randomising which issues will be put into the email
    }

    if (type == 0)  {
        for (let step = 0; step < arr.length; step++) {
            document.getElementById("score").innerHTML = relationTraits[arr[step]];
        }
    }

}

function generateLegit() {
    generatePhishing();
}