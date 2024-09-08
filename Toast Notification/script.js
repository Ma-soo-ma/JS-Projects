let toastBox = document.getElementById("toastBox")
// let successMsg = 'Successfully Submitted!'
//  let errorMsg =  "Please Fix the Error"
//  let invalidMsg = "Invalid Input... Check Again"

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the Error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input... Check Again';





function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('Error')) {
        toast.classList.add('error');
    } else if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }


    setTimeout(() => {
        toast.remove();
    }, 6000);


}





