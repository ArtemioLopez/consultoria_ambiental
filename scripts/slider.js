// Carrusel automático
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;
let autoplayInterval;

// 🚨 Si no hay slides, NO hacer nada
if (!slides.length) {
    console.log("Slider no presente en esta página");
} else {

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));

        if (indicators.length) {
            indicators.forEach(ind => ind.classList.remove('active'));
        }

        slides[index]?.classList.add('active');
        indicators[index]?.classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
        resetAutoplay();
    }

    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    // Event listeners (solo si hay indicadores)
    if (indicators.length) {
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });
    }

    // Iniciar autoplay
    startAutoplay();
}



