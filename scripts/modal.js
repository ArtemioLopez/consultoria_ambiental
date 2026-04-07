const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let images = [];
let currentIndex = 0;



// 🚨 Si no existe el modal, no hacer nada
if (!modal) {
  console.log("Modal no presente en esta página");
} else {
  // Abrir modal
  function openGallery(imageList) {
    images = imageList;
    currentIndex = 0;
    updateImage();
    modal.classList.remove("hidden");
  }

  // Actualizar imagen
  function updateImage() {
    modalImage.src = images[currentIndex];
  }

  // Botón siguiente
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  // Botón anterior
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  // Cerrar modal
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Detectar clicks en "Mas detalles"
  document.querySelectorAll("[data-gallery]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const gallery = link.dataset.gallery.split(",");
      openGallery(gallery);
    });
    
  });}
