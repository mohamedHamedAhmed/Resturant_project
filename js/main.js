let menuBtn = document.querySelector(".search-form");
let sideNav = document.getElementById("ser");
menuBtn.style.right = "-500px";
sideNav.onclick = function () {
    if (menuBtn.style.right == "-500px") {
        menuBtn.style.right = "0";
    }
    else {
        menuBtn.style.right = "-500px";
    }



}


let shopping = document.querySelector(".shopping-cart");
let check = document.getElementById("check");
shopping.style.right = "-500px";
check.onclick = function () {
    if (shopping.style.right == "-500px") {
        shopping.style.right = "0";
    }
    else {
        shopping.style.right = "-500px";
    }
}




let login = document.querySelector(".login-form");
let button = document.getElementById("button");
window.onload = function () {
    login.classList.remove();
}
login.style.right = "-500px";
button.onclick = function () {
    if (login.style.right == "-500px") {
        login.style.right = "0";
    }
    else {
        login.style.right = "-500px";
    }

}

let navbar = document.querySelector(".navbar");
let icons = document.getElementById("count");
navbar.style.right = "-500px";
icons.onclick = function () {
    if (navbar.style.right == "-500px") {
        navbar.style.right = "0";
    }
    else {
        navbar.style.right = "-500px";
    }
}
window.onload = function () {
    icons.classList.remove();
    button.classList.remove();
    check.classList.remove();
    sideNav.classList.remove();
}

window.onscroll = function () {
    navbar.classList.remove(navbar);
    login.classList.remove(login);
    check.classList.remove(check);
    sideNav.classList.remove(sideNav);
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centerSlides: true,

    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1020: {
            slidesPerView: 3,

        },
    },
});


var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centerSlides: true,

    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1020: {
            slidesPerView: 3,

        },
    },
});