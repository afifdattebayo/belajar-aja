let container = document.getElementById('container');
let slider = document.getElementById('slider');
let slides = document.getElementsByClassName('slide').length;
let btn = document.getElementsByClassName('btn');


let currentWidth = container.offsetWidth;
let currentPosition = 0;
let slidePerPage = 0;
let currentMargin = 0;
let slideCount = slides - slidePerPage;

window.addEventListener("resize", checkWidth);
window.addEventListener("load", checkWidth);

function checkWidth() {
    currentWidth = container.offsetWidth;
    setParams(currentWidth);
}

function setParams(w) {
    if (w < 551) {
        slidePerPage = 1;
    } else if (w < 901) {
        slidePerPage = 2;
    } else if (w < 1101) {
        slidePerPage = 3;
    } else {
        slidePerPage = 4;
    }

    slideCount = slides - slidePerPage;
    if (currentPosition > slideCount) {
        currentPosition -= slidePerPage;
    }
    currentMargin = -currentPosition * (100 / slidePerPage);
    slider.style.marginLeft = currentMargin + "%";

    if (currentPosition == 0) {
        btn[0].classList.add('inactive');
    }
    if (currentPosition > 0) {
        btn[0].classList.remove('inactive');
    }
    if (currentPosition < slideCount) {
        btn[1].classList.remove('inactive');
    }
    if (currentPosition == slideCount) {
        btn[1].classList.add('inactive');
    }
}

function slideLeft() {
    // set currentMargin
    // set currentPosition
    // set btn
    // set slider
    if(currentPosition !=0){
        slider.style.marginLeft = currentMargin + (100 / slidePerPage) + '%';
        currentMargin+= (100 / slidePerPage);
        currentPosition--;
    }
    if(currentPosition == 0){
        btn[0].classList.add('inactive');
    }
    if(currentPosition != slideCount){
        btn[1].classList.remove('inactive');
    }
}
function slideRight() {
    if (currentPosition != slideCount) {
        slider.style.marginLeft = currentMargin - (100 / slidePerPage) + '%';
        currentMargin -= (100 / slidePerPage);
        currentPosition++;
    }
    if(currentPosition == slideCount){
        btn[1].classList.add('inactive');
    }
    if(currentPosition != 0){
        btn[0].classList.remove('inactive');
    }
}