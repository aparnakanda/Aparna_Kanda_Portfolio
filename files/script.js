
var typed = new Typed(".text", {
    strings: ["Full Stack Developer..!"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})


function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show");
}


