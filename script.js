/* ==========================================
   NovaCore Studio V1
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* Sticky Header */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    /* Smooth Scroll */

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    /* Fade Animation */

    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.2
    });

    elements.forEach(item => observer.observe(item));

    /* Counter */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.dataset.target;
            const count = +counter.innerText;

            const increment = Math.ceil(target / 100);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(update, 20);
            } else {
                counter.innerText = target;
            }

        };

        update();

    });

});

/* Back To Top */

const topBtn = document.querySelector(".back-top");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
