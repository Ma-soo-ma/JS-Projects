let Productimg = document.getElementById("productImg")
let btn = document.getElementsByClassName("btn")



btn[0].onclick = function(){
    Productimg.src = "images/image1.png";
    for ( let bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active")

}
btn[1].onclick = function(){
    Productimg.src = "images/image2.png";
    for ( let bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
    
}
btn[2].onclick = function(){
    Productimg.src = "images/image3.png";
    for ( let bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
    
}