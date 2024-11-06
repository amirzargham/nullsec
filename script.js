// script.jsz

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("h1");

    function flickerEffect() {
        header.style.opacity = Math.random() > 0.8 ? 0.8 : 1;
    }
    setInterval(flickerEffect, 100);
});



