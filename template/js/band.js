document.addEventListener("DOMContentLoaded", function () {
    let bar = document.getElementById("bar");
    let mnav = document.querySelector(".mnav");

    bar.addEventListener("click", function () {
        mnav.classList.toggle("h");
    })


    // change background
    let bg = document.querySelector(".bg-cover");
    let text_h2 = document.querySelector(".bg-text").children[0];
    let text_p = document.querySelector(".bg-text").children[1];


    setInterval(() => {
        cg();
    }, 5000);

    function cg() {
        if (text_h2.innerHTML == "Chicago") {
            bg.style.backgroundImage = "url('./src/la.jpg')";
            text_h2.innerHTML = "Los Angeles";
            text_p.innerHTML = "<b>We had the best time playing at Venice Beach!</b>"
        } else if (text_h2.innerHTML == "Los Angeles") {
            bg.style.backgroundImage = "url('./src/ny.jpg')";
            text_h2.innerHTML = "New York";
            text_p.innerHTML = "<b>The atmosphere in New York is lorem ipsum.</b>"
        } else if (text_h2.innerHTML == "New York") {
            bg.style.backgroundImage = "url('./src/ny.jpg')";
            text_h2.innerHTML = "Chicago";
            text_p.innerHTML = "<b>Thank you, Chicago - A night we won't forget.</b>"
        }
    }
    // end change background
})