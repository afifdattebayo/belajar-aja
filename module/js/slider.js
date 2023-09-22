
let container = document.getElementById('container');
let slider = document.getElementById('slider');
let slides = document.getElementsByClassName('slide').length
let btn = document.getElementsByClassName("btn");

let currentPosition = 0;
let currentMargin = 0;
let slidesPerPage = 0;
let slidesCount = slides - slidesPerPage;
let containerWidth = container.offsetWidth;

window.addEventListener("resize", checkWidth);
window.addEventListener("load", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else if (w < 901) {
        slidesPerPage = 2;
    } else if (w < 1101) {
        slidesPerPage = 3;
    } else {
        slidesPerPage = 4;
    }
    
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    }
    currentMargin = -currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';

    if (currentPosition > 0) {
        btn[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        btn[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        btn[1].classList.add('inactive');
    }
}


function slideRight() {
    // set currentMargin
    // set currentPosition
    // set btn
    // set slider
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + "%";
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    }
    if(currentPosition === 0){
        btn[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount){
        btn[1].classList.remove('inactive');
    }
}
function slideLeft() {
    // set currentMargin
    // set currentPosition
    // set btn
    // set slider
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + "%";
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    }
    if (currentPosition == slidesCount) {
        btn[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        btn[0].classList.remove('inactive');
    }
}