
let yourname = prompt("Please input your name: ");

// let genderstatus = true;

// while (genderstatus == true) {
    let gender = prompt("Please state your gender: (male / female)");
    if (gender == 'male'){
        yourname = 'Mr. ' + yourname;
        // genderstatus = false;
    }
    else if (gender == 'female'){
        yourname = 'Ms. ' + yourname;
        // genderstatus = false;
    }
//     else {
//         genderstatus = false;
//     }
// }

let agestatus = true;
let yourage;
while (agestatus == true) {
    let age = prompt("Please enter your age: ");
    if (age > 0){
        yourage = age;
        agestatus = false;
    }
    else{
        alert('Your age is not compatible.');
    }
}

// let confirmstatus = true;

// while (confirmstatus == true) {
    let popupconfirm = confirm('would you like to see skip welcome message?');

    if (popupconfirm === false){
        alert(`Welcome ${yourname}, you are ${yourage} years old.`)
        // confirmstatus = false;
    }
    // else{
        
        // confirmstatus = false;
    
// }
