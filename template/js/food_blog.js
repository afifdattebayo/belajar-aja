document.addEventListener("DOMContentLoaded",function(){
    let show = document.getElementById("show");
    let close = document.getElementById("close");
    let mnav = document.querySelector(".mnav");

    show.addEventListener("click",function(){
        console.log("run");
        mnav.classList.toggle("mshow");
    })
    close.addEventListener("click",function(){
        console.log("run");
        mnav.classList.toggle("mshow");
    })
})