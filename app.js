'use strict';

// todo-js

// todo-js

let yourname = prompt("Please input your name: ");

let gender = prompt("Please state your gender: (male / female)");
if (gender == 'male') {
    yourname = 'Mr. ' + yourname;

}
else if (gender == 'female') {
    yourname = 'Ms. ' + yourname;

}


let agestatus = true;
let yourage;
while (agestatus == true) {
    let age = prompt("Please enter your age: ");
    if (age > 0) {
        yourage = age;
        agestatus = false;
    }
    else {
        alert('Your age is not compatible.');
    }
}

let popupconfirm = confirm('would you like to skip welcome message?');

if (popupconfirm === false) {
    alert(`Welcome ${yourname}, you are ${yourage} years old.`)

}

// Array todo-js2

const arrFunctions = [];

<<<<<<< HEAD
// Functions

function areYouAGamer() {
    let traceGame = true;
    var gamerQ;
    while (traceGame == true) {
        let gamerStatus = prompt("Are you a gamer? answer with yes or no");
        if (gamerStatus == 'yes' || gamerStatus == 'no') {
            gamerQ = gamerStatus;
            traceGame = false;
        }
        
        else {
            gamerStatus = 'invalid';
            gamerQ = gamerStatus;
            traceGame = false;
        }
    };

    let traceCode = true;
    var coderQ;
    while (traceCode == true) {
        let coderStatus = prompt("Did you code before? answer with yes or no");
        if (coderStatus == 'yes' || coderStatus == 'no') {
            coderQ = coderStatus;
            traceCode = false;
        }

        else {
            coderStatus = 'invalid';
            coderQ = coderStatus;
            traceCode = false;
        }
    };

    let traceSocial = true;
    var socialQ;
    while (traceSocial == true) {
        let socialStatus = prompt("Do you use Social Media? answer with yes or no");
        if (socialStatus == 'yes' || socialStatus == 'no') {
            socialQ = socialStatus;
            traceSocial = false;
        }
       
        else {
            socialStatus = 'invalid';
            socialQ = socialStatus;
            traceSocial = false;
        }
    };
    arrFunctions.push(gamerQ, coderQ, socialQ);
=======
let traceGame = true;
var gamerQ;
while (traceGame == true) {
    let gamerStatus = prompt("Are you a gamer? answer with yes or no");
    if (gamerStatus == 'yes') {
        // arrFunctions.push(gamerStatus);
        gamerQ = gamerStatus;
        traceGame = false;
    }
    else if (gamerStatus == 'no'){
        // arrFunctions.push(gamerStatus);
        gamerQ = gamerStatus;
        traceGame = false;
    }
    else {
        alert('Your must state yes or no.');
    }
};

let traceCode = true;
var coderQ;
while (traceCode == true) {
    let coderStatus = prompt("Did you code before? answer with yes or no");
    if (coderStatus == 'yes') {
        // arrFunctions.push(coderStatus);
        coderQ = coderStatus;
        traceCode = false;
    }
    else if (coderStatus == 'no'){
        // arrFunctions.push(coderStatus);
        coderQ = coderStatus;
        traceCode = false;
    }
    else {
        alert('Your must state yes or no.');
    }
};

let traceSocial = true;
var socialQ;
while (traceSocial == true) {
    let socialStatus = prompt("Do you use Social Media? answer with yes or no");
    if (socialStatus == 'yes') {
        // arrFunctions.push(socialStatus);
        socialQ = socialStatus;
        traceSocial = false;
    }
    else if (socialStatus == 'no'){
        // arrFunctions.push(socialStatus);
        socialQ = socialStatus;
        traceSocial = false;
    }
    else {
        alert('Your must state yes or no.');
    }
};

// do {
//     let socialStatus = prompt("Do you use Social Media? answer with yes or no");
//     if (socialStatus == 'yes') {
//         // arrFunctions.push(socialStatus);
//         socialQ = socialStatus;
//         traceSocial = false;
//     }
//     else if (socialStatus == 'no'){
//         // arrFunctions.push(socialStatus);
//         socialQ = socialStatus;
//         traceSocial = false;
//     }
//     else {
//         alert('Your must state yes or no.');
//     }
// } while (traceSocial == true);

// Functions

function areYouAGamer(){
    arrFunctions.push(gamerQ); 
}

function areYouACoder(){
    arrFunctions.push(coderQ); 
}

function areYouSocial(){
    arrFunctions.push(socialQ);
>>>>>>> 81c8bdbb7b96fd0ba6b4f0a8c42167ca089b3a2f
}

// output

areYouAGamer();
<<<<<<< HEAD


console.log(arrFunctions);
=======
areYouACoder();
areYouSocial();

console.log(arrFunctions);
>>>>>>> 81c8bdbb7b96fd0ba6b4f0a8c42167ca089b3a2f
