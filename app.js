'use strict';

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

// Functions

function areYouAGamer() {
    let traceGame = true;
    var gamerQ;
    var coderQ;
    var socialQ;
    while (traceGame == true) {
        let gamerStatus = prompt("Are you a gamer? answer with yes or no");
        let coderStatus = prompt("Did you code before? answer with yes or no");
        let socialStatus = prompt("Do you use Social Media? answer with yes or no");
        if (gamerStatus == 'yes' || gamerStatus == 'no' || coderStatus == 'yes' || coderStatus == 'no' || socialStatus == 'yes' || socialStatus == 'no') {
            gamerQ = gamerStatus;
            coderQ = coderStatus;
            socialQ = socialStatus;
            traceGame = false;
        }

        else {

            gamerStatus = 'invalid';
            coderStatus = 'invalid';
            socialStatus = 'invalid';

            gamerQ = gamerStatus;
            coderQ = coderStatus;
            socialQ = socialStatus;

            traceGame = false;
        }
    };
    arrFunctions.push(gamerQ, coderQ, socialQ);

}

// output

areYouAGamer();


console.log(arrFunctions);
