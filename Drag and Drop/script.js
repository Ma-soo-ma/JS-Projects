// let lists = document.getElementsByClassName("list")
// let rightBox = document.getElementsByClassName("right")
// let leftBox = document.getElementsByClassName("left")


// for (let list of lists){
//     list.addEventListener("dragstart", function(e){
//         let selected = e.target;
//     })
//     rightBox.addEventListener("dragover", function(e){
//         e.preventDefault();
//     });
//     rightBox.addEventListener("drop", function(e){
//         rightBox.appendChild(selected);
//         selected = null;
//     })
// }

let lists = document.getElementsByClassName("list");
let rightBox = document.getElementsByClassName("right");
let leftBox = document.getElementsByClassName("left");

let selected = null; // Keep selected outside of all loops

for (let list of lists) {
    list.addEventListener("dragstart", function(e) {
        selected = e.target;
    });
}

// Add event listeners to rightBox
for (let right of rightBox) {
    right.addEventListener("dragover", function(e) {
        e.preventDefault();
    });

    right.addEventListener("drop", function(e) {
        right.appendChild(selected);
        selected = null;
    });
}

// Add event listeners to leftBox
for (let left of leftBox) {
    left.addEventListener("dragover", function(e) {
        e.preventDefault();
    });

    left.addEventListener("drop", function(e) {
        left.appendChild(selected);
        selected = null;
    });
}










