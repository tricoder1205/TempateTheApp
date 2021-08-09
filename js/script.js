var slideIndex = 1;
slideDiv(slideIndex);

setInterval(() => {
    plusSlide(1);
}, 5 * 1000);

function plusSlide(n) {
    slideDiv( slideIndex += n);
}

function slideDiv(n) {
    const x = document.querySelectorAll('.slide');
    if(n > x.length){slideIndex = 1}
    if(n < 1){slideIndex = x.length}
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

const btnDownload = document.querySelectorAll('#download');
const modalDownload = document.querySelector('#modal');
const modalFake = document.querySelector('.modal-btn-download');

function openDownload() {
    modalDownload.style.display = "block";
}

function closeModal() {
    modalDownload.style.display = "none";
}