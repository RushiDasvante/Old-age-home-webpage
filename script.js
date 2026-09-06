/* =====================================================
   PROJECT AAMRAI
   JavaScript
===================================================== */


/* =====================================================
   NAVBAR
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


/* =====================================================
   GALLERY LIGHTBOX
===================================================== */

const galleryItems = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentImageIndex = 0;


/* Open image */

galleryItems.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentImageIndex = index;

        showLightboxImage();

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* Show current image */

function showLightboxImage() {

    lightboxImage.src = galleryItems[currentImageIndex].src;

    lightboxImage.alt = galleryItems[currentImageIndex].alt;

}


/* Next image */

lightboxNext.addEventListener("click", () => {

    currentImageIndex++;

    if (currentImageIndex >= galleryItems.length) {
        currentImageIndex = 0;
    }

    showLightboxImage();

});


/* Previous image */

lightboxPrev.addEventListener("click", () => {

    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = galleryItems.length - 1;
    }

    showLightboxImage();

});


/* Close lightbox */

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}

lightboxClose.addEventListener("click", closeLightbox);


/* Close when clicking outside image */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


/* Keyboard controls */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowRight") {
        lightboxNext.click();
    }

    if (event.key === "ArrowLeft") {
        lightboxPrev.click();
    }

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            const navbarHeight = navbar.offsetHeight;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        }

    });

});