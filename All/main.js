const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1500){
        toTop.classList.add("active");
    }   else {
        toTop.classList.remove("active");
    }
});

