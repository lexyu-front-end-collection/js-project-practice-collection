let qrText = document.getElementById("qrText");
let qrcodeBox = document.getElementById("qrcodeBox");
let qrImage = document.getElementById("qrImage");



function generateQRCode() {
    qrcodeBox.innerHTML = ''

    if (qrText.value.length > 0) {
        var image = new QRCode(qrcodeBox, {
            text: qrText.value,
            correctLevel: QRCode.CorrectLevel.H
        });
        qrImage.src = image;
        qrcodeBox.classList.add("show-img")
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 2000)
    }
}