options = {
    itemWidth: 700,
    transform: '0.25s ease'
}

const slideContainer = document.getElementById('slider-container');
const slider = document.getElementById('slider');
const lastIndex = slider.children.length + 1;

let startX;
let currentIndex = 1;
let isStart = false;


const setSlide = (index = 1, optionTransgform = '0s ease') => {
    currentIndex = index;
    slider.style.transition = `transform ${optionTransgform}`;
    slider.style.transform = `translateX(${-options.itemWidth * currentIndex}px)`;

    slider.querySelectorAll('.active').forEach((e) => {
        e.classList.remove('active');
    })

    slider.querySelector(`[data-item-index='${currentIndex}']`).classList.add('active');
}
const init = (() => {
    cloneFirst = slider.firstElementChild.cloneNode(true);
    cloneLast = slider.lastElementChild.cloneNode(true);

    slider.insertBefore(cloneLast, slider.firstElementChild);
    slider.appendChild(cloneFirst);

    slider.querySelectorAll('.slide-item').forEach((el, i) => {
        el.setAttribute('data-item-index', i);
    })

    setSlide();
})()
const startSlide = (e) => {
    e.preventDefault();
    isStart = true;

    const slideItem = e.target.closest('.slide-item');
    if (!slideItem) {
        setSlide(1, options.transform);
        isStart = false;
        return;
    }

    currentIndex = +slideItem.getAttribute('data-item-index');
    if (currentIndex === lastIndex) setSlide(1);
    else if (currentIndex === 0) setSlide(lastIndex - 1);

    startX = (e.clientX || e.touches[0].screenX);
    slideContainer.addEventListener(e.clientX ? 'mousemove' : 'touchmove', moveSlide, {
        passive: false
    })
}
const moveSlide = (e) => {
    if (!isStart) return;
    e.preventDefault();

    let currentX = (e.clientX || e.touches[0].screenX);
    slider.style.transition = 'tranfrom 0s linear';
    slider.style.transform = `translateX(${currentX - startX - options.itemWidth * currentIndex}px)`;
    
}
const endSlide = (e) => {
    if (!isStart) return;
    isStart = false;

    const dist = (e.clientX || e.changedTouches[0].screenX) - startX || 0;
    if (dist > 50) currentIndex--;
    else if (dist < -50) currentIndex++;

    setSlide(currentIndex, options.transform);
}

slideContainer.addEventListener('mousedown', startSlide);
window.addEventListener('mouseup', endSlide);
