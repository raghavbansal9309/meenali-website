// PHOTO ZOOM FEATURE

const galleryPhotos = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

// Photo par click karne par zoom hoga
galleryPhotos.forEach(function(photo) {

    photo.addEventListener("click", function() {

        lightbox.style.display = "flex";
        lightboxImg.src = photo.src;

    });

});

// Close button se photo band hogi
closeBtn.addEventListener("click", function() {

    lightbox.style.display = "none";

});

// Background par click karne se bhi band hogi
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});

// Escape key se band hogi
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }

});
// SECTION SCROLL ANIMATION

const revealSections = document.querySelectorAll(
    ".about-content, .gallery-heading, .gallery-grid, .social, .footer, .stats-heading, .stats-container, .message-content"
);

revealSections.forEach(function(section) {
    section.classList.add("reveal");
});

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });

}, {
    threshold: 0.15
});

revealSections.forEach(function(section) {
    observer.observe(section);
});
// ACTIVE NAVIGATION SYSTEM

const navLinks = document.querySelectorAll(".nav-links a");

const pageSections = document.querySelectorAll("#home, #about, #gallery, #contact, #message");

const navObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                '.nav-links a[href="#' + entry.target.id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

}, {
    threshold: 0.35
});

pageSections.forEach(function(section) {
    navObserver.observe(section);
});
// GOLDEN SCROLL PROGRESS BAR

window.addEventListener("scroll", function() {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / pageHeight) * 100;

    document.getElementById("scrollProgress").style.width =
        progress + "%";

});
// BACK TO TOP BUTTON FIX

document.addEventListener("DOMContentLoaded", function() {

    const topButton = document.getElementById("backToTop");

    if (!topButton) {
        console.log("Back to Top button not found!");
        return;
    }

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    topButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
// CINEMATIC INTRO ANIMATION

document.addEventListener("DOMContentLoaded", function() {

    const intro = document.getElementById("introScreen");

    if (intro) {
        setTimeout(function() {
            intro.classList.add("hide");
        }, 2500);
    }

});