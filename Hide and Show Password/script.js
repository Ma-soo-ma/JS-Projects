let password = document.querySelector("#password");
let eye = document.querySelector("#eye");

eye.onclick = function(){
    if(password.type === "password"){
        password.type = "text";
        eye.src = "eye-close.png";
    }else{
        password.type = "password";
        eye.src = "eye-open.png";
    }
}