let pass = document.querySelector("#password");
let msg = document.querySelector("#msg");
let str = document.querySelector("#strength");



pass.addEventListener("input", () => {
  
if( pass.value.length > 0){
    msg.style.display = "block";
}else{
    msg.style.display = "none";
}

    if(pass.value.length == 0){
        msg.innerHTML = "Password cannot be empty";
        str.style.display = "none";

    }
    if(pass.value.length > 4){
        str.innerHTML = "  Weak";
        pass.style.borderColor="red"
        msg.style.color="red"
    }
    if(pass.value.length >= 8){
        str.innerHTML = " Medium";
          pass.style.borderColor="orange"
        msg.style.color="orange"
    }
    if(pass.value.length >= 12){
        str.innerHTML = " Strong";
          pass.style.borderColor="green"
        msg.style.color="green"
    }
})

