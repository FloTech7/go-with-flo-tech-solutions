// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach((el) => {
        const windowHeight =
        window.innerHeight;
        const elementTop = 
        el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) { 
            el.classList.add("active");
        }
    })
})

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Contact Form Submission (Demo)
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    form.reset();
});
