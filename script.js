let counter = 0;
var carousel = document.getElementById("carousel");
var screenwidth = window.innerWidth;
var productShadow = document.getElementsByClassName("product-shadow");

setInterval(() => {
    counter++;
    if (counter == 0) {
        // scroll to screenwidth 0 smoothly
        carousel.scrollLeft = screenwidth * 0;
        console.log("scroll to screenwidth 0")
    }
    if (counter == 1) {
        // scroll to screenwidth 1
        carousel.scrollLeft = screenwidth * 1;
        console.log("scroll to screenwidth 1")
    }
    if (counter == 2) {
        // scroll to screenwidth 2
        carousel.scrollLeft = screenwidth * 2;
        console.log("scroll to screenwidth 2")
    }
    if (counter == 3) {
        counter = 0;
        carousel.scrollLeft = screenwidth * 3;
        setTimeout(() => {
            carousel.classList.remove("scroll-smooth");
            carousel.scrollLeft = 0;
            carousel.classList.add("scroll-smooth");
        }, 1000);
    }
}, 5000)