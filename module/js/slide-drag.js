const options = {
    containerWidth: 700,
    itemWidth: 700,
    transform: '0.25s ease'
};

const sliderContainer = document.getElementById('slider-container');
const slider = document.getElementById('slider');
const lastIndex = slider.children.length + 1;

let isStart = false;
let startX;
let currenIndex = 1;

const setSlide = (index = 1, transFormOption = '0s linear') => {
    currenIndex = +index;
    slider.style.transition = `transform ${transFormOption}`;
    slider.style.transform = `translateX(${-options.itemWidth * currenIndex}px)`;

    slider.querySelectorAll('.active').forEach((e) => {
        e.classList.remove('.active');
    })
    slider.querySelector(`[data-item-index='${currenIndex}']`).classList.add('.active');

}

const init = (() => {
    // appened cloneNodes to the parent element.
    const cloneFirstChild = slider.firstElementChild.cloneNode(true);
    const cloneLastChild = slider.lastElementChild.cloneNode(true);

    slider.insertBefore(cloneLastChild, slider.firstElementChild);
    slider.appendChild(cloneFirstChild);

    const slideItems = document.querySelectorAll('.slide-item');
    slideItems.forEach((el, i) => {
        el.setAttribute('data-item-index', i);
    })

    setSlide();

})();

const startSlider = (e) => {
    e.preventDefault();
    isStart = true;

    // if clicked outside '#slider', reset current slide.
    const slideItems = e.target.closest('.slide-item');
    if (!slideItems) {
        setSlide(1, option.transform);
        isStart = false;
        return;
    }

    // set currentIndex for infinite scroll
    currenIndex = +slideItems.getAttribute('data-item-index');
    if (currenIndex === lastIndex) setSlide(1);
    else if (currenIndex === 0) setSlide(lastIndex - 1);


    // check desktop or mobile

    startX = e.clientX ? e.clientX : e.touches[0].screenX;
    sliderContainer.addEventListener(e.clientX ? 'mousemove' : 'touchmove', moveSlider, {
        passive: false,
    })
}

const moveSlider = (e) => {
    if (!isStart) return;
    e.preventDefault();

    let currentX = e.clientX || e.touches[0].screenX;
    slider.style.transition = 'transform os linear';
    slider.style.transform = `translateX(${currentX - startX - options.itemWidth * currenIndex
        }px)`;
}
const endSlider = (e) => {
    if (!isStart) return;

    isStart = false;
    const dist = (e.clientX || e.changedTouches[0].screenX) - startX || 0;
    if (dist > 50) currenIndex--;
    else if (dist < -50) currenIndex++;
    else if (Math.abs(dist) < 3) {
        // if slide has anchor tag, redirect
        const curr = slider.querySelector(`[data-item-index="${currenIndex}"]`);
        if (curr.classList.contains('is-link')) {
            window.location.href = curr.querySelector('a').getAttribute('href');
        }
    }

    setSlide(currenIndex, options.transform);
}

// * when mousedown or touchstart
sliderContainer.addEventListener('mousedown', startSlider);
sliderContainer.addEventListener('touchstart', startSlider, { passive: false });

// * when mouseup or touchend
window.addEventListener('mouseup', endSlider);
window.addEventListener('touchend', endSlider);