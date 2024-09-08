const imgBox = document.querySelector("#imgBox")
const qrImg = document.querySelector("#qrImg")
const qrText = document.querySelector("#qrText")

const generateQR = () => {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
};






