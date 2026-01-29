let log = document.querySelector(".header-actions");
setTimeout(() => {
    log.classList.add("show");
}, 500);

// Entrance animations
const elementsToReveal = document.querySelectorAll(".tag .name, .tag .line, .cta, .brands, .parts");

elementsToReveal.forEach((el, index) => {
    setTimeout(() => {
        el.classList.add("reveal");
    }, 200 * (index + 1) + 100);
});