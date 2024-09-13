let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let msgError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");


let validateName = () =>{

var name = document.getElementById("contact-name").value;


if(name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
}
if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
    nameError.innerHTML ='Write full name';
    return false;
}

nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
return true;

}


let validatePhone = () =>{

var phone = document.getElementById("contact-phone").value;

if(phone.length == 0){
    phoneError.innerHTML = 'Phone number is required';
    return false;
}
if(phone.length !== 10){
    phoneError.innerHTML = 'Phone number should be 10 digits';
    return false;
}
if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'Only digits please';
    return false;
}

phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
return true;


}


let validateEmail = () =>{

var email = document.getElementById("contact-email").value;

if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

    emailError.innerHTML = 'Email invalid';
    return false;
}

emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
return true;

}

let validateMsg =() =>{

var msg = document.getElementById("contact-msg").value;
var required = 30;
var left = required - msg.length;

if(left> 0){
    msgError.innerHTML = left + 'more characters required';
    return false;
}

msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
return true;
}
   

let validateForm = () =>{

    if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please fix error to submit';

        setTimeout(() => {
            submitError.style.display = 'none'
            
        }, 3000);

        return false;
}

}   