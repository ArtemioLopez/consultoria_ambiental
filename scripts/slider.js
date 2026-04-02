 // Carrusel automático
 let currentSlide = 0;
 const slides = document.querySelectorAll('.carousel-slide');
 console.log(document.querySelectorAll('.carousel-slide').length);
 const indicators = document.querySelectorAll('.indicator');
 const totalSlides = slides.length;
 let autoplayInterval;

 function showSlide(index) {
     // Remover clase active de todos
     slides.forEach(slide => slide.classList.remove('active'));
     indicators.forEach(ind => ind.classList.remove('active'));

     // Agregar clase active al slide e indicador actual
     slides[index].classList.add('active');
     indicators[index].classList.add('active');
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
     autoplayInterval = setInterval(nextSlide, 4000); // Cambiar cada 5 segundos
 }

 function stopAutoplay() {
     clearInterval(autoplayInterval);
 }

 function resetAutoplay() {
     stopAutoplay();
     startAutoplay();
 }

 // Event listeners para los indicadores
 indicators.forEach((indicator, index) => {
     indicator.addEventListener('click', () => goToSlide(index));
 });

 // Iniciar autoplay
 startAutoplay();



