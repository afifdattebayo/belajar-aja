document.addEventListener("DOMContentLoaded", function () {
    let subscribe = document.querySelectorAll(".subscribe");

    subscribe.forEach(e => {
        e.addEventListener("click", function () {

            document.querySelectorAll(".modal").forEach(e => {
                e.classList.toggle("modal-show");
            })

        })
    })
    const modalClose = document.getElementById("modal-close");
    modalClose.addEventListener("click", function () {
        document.querySelectorAll(".modal").forEach(e => {
            e.classList.toggle("modal-show");
        })
    })

    document.querySelectorAll(".like").forEach(e => {
        e.addEventListener("click", function () {
            if (e.innerHTML != "✓ Liked") {
                e.innerHTML = "✓ Liked";
            } else {
                e.innerHTML = "<i class='fa fa-thumbs-up'></i>Like";
            }
        })
    })

    document.querySelectorAll(".reply").forEach(e => {
        e.addEventListener("click", function (e) {
            e.target.parentElement.parentElement.children[4].classList.toggle("sh");
        })
    })

    document.getElementById("btn-top")
        .addEventListener("click", function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
})