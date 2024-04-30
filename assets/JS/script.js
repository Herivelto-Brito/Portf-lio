
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function(){
    mainNav.classList.toggle("active");
})


window.onscroll = function() {
    scrollBtn();
};

function scrollBtn() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("toTopBtn").style.display = "block";
    }
    else {
        document.getElementById("toTopBtn").style.display = "none";
    }
}
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
