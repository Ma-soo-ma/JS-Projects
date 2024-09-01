// const passwordField = document.getElementById("password");
// const length = 12;

// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const numbers = "1234567890";
// const symbols = "@#$%^&*()_+~|}{[]</>-=";

// const allChars = upperCase + lowerCase + numbers + symbols;

// const createPassword = () => {
//     let password = "";
//     password += upperCase[Math.floor(Math.random() * upperCase.length)];
//     password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//     password += numbers[Math.floor(Math.random() * numbers.length)];
//     password += symbols[Math.floor(Math.random() * symbols.length)];

//     while (password.length < length) {
//         password += allChars[Math.floor(Math.random() * allChars.length)];
//     }

//     passwordField.value = password;
// }

// const copyPassword = () => {
//     passwordField.select();
//     document.execCommand("copy");
//     alert("Password copied to clipboard!");
// }




const passwordField = document.getElementById("password");
length= 12;


let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = 1234567890;
let symbols = "@#$%^&*()_+~|}{[]</>-=";


let allChars = upperCase + lowerCase + numbers + symbols;


function createPassword() {
    password = "";
    password = upperCase[Math.floor(Math.random() * upperCase.length)];
    password = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password = numbers[Math.floor(Math.random() * numbers.length)];
    password = symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < length) {
        
    password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordField.value = password;
}

function copyPassword(){
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

