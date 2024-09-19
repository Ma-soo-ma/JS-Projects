let selectField = document.querySelector(".selectField");
let list = document.querySelector(".list");
let selectText = document.querySelector("#selectText")
let options = document.querySelectorAll(".options")
let img = document.querySelector("#img")



for ( let option of options) {

    option.onclick = function () {

        selectText.innerHTML = this.textContent;

    }
}

selectField.onclick = function(){

    list.classList.toggle("visible");
   img.classList.toggle("img-rotate")



}





