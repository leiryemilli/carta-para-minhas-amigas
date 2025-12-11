/* ---------- Mensagem surpresa + carrossel ---------- */
function showSurprise() {
    const msg = document.getElementById("surpresa");
    const carousel = document.getElementById("carousel");

    msg.classList.remove("hidden");
    carousel.classList.remove("hidden");

    setTimeout(() => {
        msg.classList.add("show");
        carousel.classList.add("show");
    }, 50);

    startHearts(); // inicia chuva de corações
}

/* ---------- Corações caindo ---------- */
function createHeart() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heart = document.createElement('div');

    heart.classList.add('heart');
    heart.innerText = '💖';

    heart.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 20 + 15;
    heart.style.fontSize = size + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

function startHearts() {
    setInterval(createHeart, 300);
}

/* ---------- Carrossel ---------- */
let currentIndex = 0;

function updateCarousel() {
    const wrapper = document.querySelector(".carousel-wrapper");
    const slides = document.querySelectorAll(".slide");
    const width = slides[0].clientWidth;
    wrapper.style.transform = `translateX(${-currentIndex * width}px)`;
}

function nextSlide() {
    const slides = document.querySelectorAll(".slide");
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    const slides = document.querySelectorAll(".slide");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}
